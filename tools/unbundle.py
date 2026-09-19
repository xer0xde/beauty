import json, gzip, base64, re, os, hashlib, sys
from collections import defaultdict

SRC = sys.argv[1]
OUT = sys.argv[2]

def parse_bundle(text):
    def grab(kind):
        m = re.search(r'<script type="__bundler/%s">\n(.*?)\n\s*</script>' % kind, text, re.S)
        return m.group(1)
    return (json.loads(grab('manifest')),
            json.loads(grab('ext_resources')),
            json.loads(grab('page_order')),
            json.loads(grab('template')))

def blob(entry):
    raw = base64.b64decode(entry['data'])
    return gzip.decompress(raw) if entry.get('compressed') else raw

EXT = {'font/woff2': '.woff2', 'image/jpeg': '.jpg', 'image/png': '.png',
       'image/webp': '.webp', 'image/svg+xml': '.svg', 'image/gif': '.gif',
       'text/javascript': '.js', 'application/javascript': '.js', 'text/css': '.css'}

UMLAUT = {'ä': 'ae', 'ö': 'oe', 'ü': 'ue', 'Ä': 'Ae', 'Ö': 'Oe', 'Ü': 'Ue', 'ß': 'ss'}

def slug(s):
    for k, v in UMLAUT.items():
        s = s.replace(k, v)
    s = re.sub(r'[^a-zA-Z0-9]+', '-', s.strip()).strip('-').lower()
    return s or 'asset'

# ---- outer bundle: the four pages -------------------------------------------
manifest, _ext, order, shell = parse_bundle(open(SRC, encoding='utf-8').read())
page_names = dict(re.findall(r'data-page="([^"]+)"[^>]*src="about:blank#([0-9a-f-]+)"', shell))
page_names = {v: k for k, v in page_names.items()}

os.makedirs(OUT, exist_ok=True)
written = {}          # sha1 -> relative path
def emit(path, data):
    full = os.path.join(OUT, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    mode = 'wb' if isinstance(data, bytes) else 'w'
    with open(full, mode, **({} if mode == 'wb' else {'encoding': 'utf-8'})) as fh:
        fh.write(data)

def dedup_emit(path, data):
    """Write once per content hash; return the path actually used."""
    h = hashlib.sha1(data).hexdigest()
    if h in written:
        return written[h]
    base, ext = os.path.splitext(path)
    n, cand = 1, path
    while cand in written.values():
        n += 1
        cand = f'{base}-{n}{ext}'
    emit(cand, data)
    written[h] = cand
    return cand

def classify_js(data):
    head = data[:400].decode('utf-8', 'replace')
    if 'dc-runtime' in head:            return 'support.js'
    if 'image-slot' in head:            return 'image-slot.js'
    if '@ds-bundle' in head:            return 'design-system.js'
    if 'lucide' in head:                return 'vendor/lucide.js'
    return None

EXT_URL_NAMES = {'react.production.min.js': 'vendor/react.js',
                 'react-dom.production.min.js': 'vendor/react-dom.js'}

for page_id in order:
    page_file = page_names.get(page_id, page_id + '.html')
    inner = blob(manifest[page_id]).decode('utf-8')
    imanifest, iext, _iorder, tpl = parse_bundle(inner)
    ext_by_uuid = {e['uuid']: e['id'] for e in iext}

    # font-face names, from the CSS in the template
    font_names = {}
    for subset, block in re.findall(r'/\* ([\w-]+) \*/\s*(@font-face\s*\{[^}]*\})', tpl):
        fam = re.search(r"font-family:\s*'([^']+)'", block)
        sty = re.search(r'font-style:\s*(\w+)', block)
        wgt = re.search(r'font-weight:\s*(\d+)', block)
        uid = re.search(r'url\("([0-9a-f-]{36})"\)', block)
        if not (fam and uid):
            continue
        font_names[uid.group(1)] = 'fonts/%s-%s-%s-%s.woff2' % (
            slug(fam.group(1)), wgt.group(1) if wgt else '400',
            sty.group(1) if sty else 'normal', slug(subset))

    # image names, from alt text / image-slot ids in the template
    img_names = {}
    deko = 0
    def note(uuid, name):
        if name and not img_names.get(uuid):
            img_names[uuid] = name
    for tag in re.findall(r'<(?:img|image-slot)\b[^>]*>', tpl):
        uid = re.search(r'src="([0-9a-f-]{36})"', tag)
        if not uid:
            continue
        alt = re.search(r'alt="([^"]+)"', tag)
        sid = re.search(r'id="([^"]+)"', tag)
        if alt:
            note(uid.group(1), slug(alt.group(1)))
        elif sid:
            note(uid.group(1), slug(sid.group(1)))
        elif 'data-bp-float' in tag and uid.group(1) not in img_names:
            deko += 1
            note(uid.group(1), 'deko-%d' % deko)

    fallback = [0]
    rewrite = {}
    for uuid, entry in imanifest.items():
        data = blob(entry)
        mime = entry['mime']
        if mime.endswith('javascript'):
            name = classify_js(data)
            if not name:
                url = ext_by_uuid.get(uuid, '')
                name = EXT_URL_NAMES.get(url.rsplit('/', 1)[-1]) or 'vendor/%s' % slug(url.rsplit('/', 1)[-1] or uuid[:8]) + '.js'
        elif mime == 'font/woff2':
            name = font_names.get(uuid, 'fonts/%s.woff2' % uuid[:8])
        elif mime.startswith('image/'):
            stem = img_names.get(uuid)
            if not stem:
                fallback[0] += 1
                stem = '%s-%d' % (slug(page_file.split('.')[0]), fallback[0])
            name = 'images/%s%s' % (stem, EXT.get(mime, '.bin'))
        else:
            name = 'assets/%s%s' % (uuid[:8], EXT.get(mime, '.bin'))
        rewrite[uuid] = dedup_emit(name, data)

    for uuid, path in rewrite.items():
        tpl = tpl.replace(uuid, path)

    # The dc runtime otherwise pulls React from unpkg at boot; load the vendored
    # UMD builds first so the page works offline and without a CDN round-trip.
    vendored = [p for p in ('vendor/react.js', 'vendor/react-dom.js') if p in rewrite.values()]
    if vendored and '<script src="support.js">' in tpl:
        tags = ''.join('<script src="%s"></script>\n' % v for v in vendored)
        tpl = tpl.replace('<script src="support.js">', tags + '<script src="support.js">', 1)
    emit(page_file, tpl)
    print('page', page_file, len(tpl))

for h, p in sorted(written.items(), key=lambda kv: kv[1]):
    print('asset', p)
