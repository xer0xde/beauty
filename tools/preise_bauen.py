#!/usr/bin/env python3
"""Baut live/preise.html aus tools/preise-daten.json und verlinkt die Seite überall.

Vorlage ist live/waxing.html (Kopf, Kopfzeile, Anfahrt, Fußzeile). Die übrigen
Seiten bekommen den Menüpunkt „Preise“ in Kopfzeile, Mobilmenü und Fußzeile.
Das Skript ist wiederholbar: bereits eingefügte Stellen werden nicht verdoppelt.

    python3 tools/preise_bauen.py
"""
import html
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LIVE = ROOT / "live"
DATEN = json.loads((ROOT / "tools" / "preise-daten.json").read_text(encoding="utf-8"))
SITE = "https://beauty-palast-albstadt.de"
BUCHEN = "https://app.cituro.com/booking/2913605"
SEITEN = ["index.html", "kopfhaut-und-haar.html", "waxing.html", "kundeninformation.html"]
RECHT = ["impressum.html", "datenschutz.html"]

TITEL = "Preise für Kosmetik & Waxing in Albstadt | Beauty Palast"
BESCHREIBUNG = ("Alle Preise im Beauty Palast Albstadt: Gesichtsreinigung, Anti Aging, "
                "Körperreinigung, Waxing für Damen und Herren und Online-Beratung – mit Dauer jeder Behandlung.")

CSS = """
.preise-hero{background:var(--c-espresso);color:var(--c-creme);padding:clamp(56px,7vw,104px) var(--edge-desktop) clamp(48px,5vw,72px);position:relative;overflow:hidden}
.preise-hero:after{content:"";position:absolute;right:-12vw;top:-30%;width:60vw;height:160%;border-radius:50%;border:1px solid rgba(185,138,76,.28);pointer-events:none}
.preise-hero-inner{max-width:var(--container-max);margin:0 auto;position:relative;z-index:1;display:flex;flex-direction:column;gap:22px}
.preise-eyebrow{font-family:var(--font-ui);font-size:var(--size-eyebrow);letter-spacing:var(--ls-eyebrow);text-transform:uppercase;font-weight:var(--fw-medium);color:var(--c-gold-soft);margin:0}
.preise-hero h1{margin:0;font-weight:400;display:flex;flex-direction:column;gap:6px;color:var(--c-creme)}
.preise-hero h1 .gross{font-family:var(--font-display);font-weight:var(--fw-light);font-size:clamp(60px,10vw,150px);line-height:.9;letter-spacing:-.02em}
.preise-hero h1 .schrift{font-family:"Parisienne",cursive;font-size:clamp(40px,5.6vw,88px);line-height:1;color:var(--c-gold);padding-left:clamp(0px,6vw,120px)}
.preise-hero p{max-width:56ch;font-size:var(--size-lead);line-height:var(--lh-lead);color:rgba(253,247,241,.85);margin:0}
.preise-cta{display:inline-flex;align-self:flex-start;align-items:center;gap:12px;min-height:48px;padding:0 28px;border-radius:var(--radius-button);background:var(--c-creme);color:var(--c-espresso)!important;font-family:var(--font-ui);font-weight:var(--fw-medium);font-size:var(--size-small);letter-spacing:.12em;text-transform:uppercase;text-decoration:none;border:0!important}
.preise-cta:hover{background:var(--c-gold-soft)}
.preise-cta.dunkel{background:var(--c-espresso);color:var(--c-creme)!important}
.preise-cta.dunkel:hover{background:#614029}
.preise-sprung{background:var(--surface-alt);padding:28px var(--edge-desktop);border-bottom:1px solid var(--line-hairline)}
.preise-sprung h2{font-family:var(--font-ui)!important;font-size:var(--size-eyebrow)!important;letter-spacing:var(--ls-eyebrow);text-transform:uppercase;font-weight:var(--fw-medium);color:var(--text-meta);text-align:center;margin:0 0 16px!important;line-height:1.4!important}
.preise-sprung ul{list-style:none;margin:0 auto;padding:0;max-width:var(--container-max);display:flex;flex-wrap:wrap;justify-content:center;gap:10px}
.preise-sprung a{display:inline-flex;align-items:center;min-height:44px;padding:0 18px;border:1px solid #d9c9bc;border-radius:999px;background:var(--c-creme);color:var(--c-espresso);font-family:var(--font-ui);font-size:15px;text-decoration:none;transition:background .15s,border-color .15s}
.preise-sprung a:hover{background:var(--c-gold-soft);border-color:var(--c-gold)}
.preise-kategorie{padding:clamp(64px,7vw,104px) var(--edge-desktop);scroll-margin-top:96px}
.preise-kategorie:nth-of-type(even){background:var(--surface-alt)}
.preise-wrap{max-width:880px;margin:0 auto}
.preise-kopf{text-align:center;margin-bottom:clamp(28px,4vw,44px)}
.preise-kopf h2{font-family:var(--font-display);font-weight:var(--fw-light);font-size:clamp(34px,4.4vw,56px);line-height:1.1;color:var(--c-espresso);margin:0;text-transform:uppercase;letter-spacing:.01em}
.preise-kopf .schrift{display:block;text-transform:none;letter-spacing:0;font-family:"Parisienne",cursive;font-size:clamp(30px,3.4vw,44px);line-height:1.2;color:#946530;margin-top:6px}
.preise-ornament{display:flex;align-items:center;gap:14px;width:120px;margin:18px auto 0}
.preise-ornament span{height:1px;background:var(--ornament);flex:1;opacity:.75}
.preise-ornament i{width:7px;height:7px;background:var(--ornament);transform:rotate(45deg)}
.preise-gruppe+.preise-gruppe{margin-top:36px}
.preise-gruppe h3{font-family:var(--font-display);font-weight:600;font-size:clamp(22px,2.2vw,26px);line-height:1.25;color:#5a1f12;margin:0 0 10px;padding:10px 20px;border-radius:14px;background:linear-gradient(90deg,#ead7c4,#f4e7da 70%,#ead7c4)}
.preise-gruppe h3 .nr{color:var(--c-gold-deep);margin-right:4px}
.preise-tabelle{width:100%;border-collapse:separate;border-spacing:0 6px;font-family:var(--font-display);color:var(--c-espresso)}
.preise-tabelle caption{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.preise-tabelle thead th{font-weight:600;font-size:19px;color:#5a1f12;background:#f1e3d5;padding:10px 20px;text-align:left}
.preise-tabelle th,.preise-tabelle td{padding:12px 20px;vertical-align:middle}
.preise-tabelle tbody th{font-weight:500;font-size:20px;line-height:1.35;text-align:left;background:#fffaf5}
.preise-tabelle tbody td{font-size:20px;white-space:nowrap;background:#fffaf5;font-variant-numeric:lining-nums tabular-nums}
.preise-tabelle tbody tr:nth-child(even) th,.preise-tabelle tbody tr:nth-child(even) td{background:#f8eee4}
.preise-kategorie:nth-of-type(even) .preise-tabelle tbody th,.preise-kategorie:nth-of-type(even) .preise-tabelle tbody td{background:#fffaf5}
.preise-kategorie:nth-of-type(even) .preise-tabelle tbody tr:nth-child(even) th,.preise-kategorie:nth-of-type(even) .preise-tabelle tbody tr:nth-child(even) td{background:#fdf3ea}
.preise-tabelle tr>:first-child{border-radius:12px 0 0 12px}
.preise-tabelle tr>:last-child{border-radius:0 12px 12px 0}
.preise-tabelle .preis,.preise-tabelle .dauer{text-align:right;width:1%}
.preise-tabelle td.preis{font-weight:600}
.preise-tabelle td.dauer{color:var(--c-kakao)}
.preise-tabelle td+td,.preise-tabelle th+th{border-left:1px solid #ead9c8}
.preise-hoch{text-align:center;margin-top:28px!important;font-family:var(--font-ui);font-size:15px}
.preise-hoch a{color:var(--c-gold-deep);text-underline-offset:4px;text-decoration:underline}
.preise-hinweise{padding:clamp(64px,7vw,104px) var(--edge-desktop);background:var(--surface-warm)}
.preise-hinweise .preise-wrap{display:flex;flex-direction:column;gap:18px;align-items:center;text-align:center}
.preise-hinweise h2{font-family:var(--font-display);font-weight:var(--fw-light);font-size:clamp(32px,3.6vw,46px);line-height:1.15;color:var(--c-espresso);margin:0}
.preise-hinweise h2 em{font-family:"Parisienne",cursive;font-style:normal;color:#946530}
.preise-hinweise p{max-width:60ch;font-size:var(--size-body);line-height:var(--lh-body);margin:0}
.preise-plakate{padding:clamp(64px,7vw,104px) var(--edge-desktop)}
.preise-plakate .preise-wrap{max-width:var(--container-max)}
.preise-plakate ul{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:20px}
.preise-plakate a{display:flex;flex-direction:column;gap:10px;text-decoration:none;color:var(--c-espresso);font-family:var(--font-ui);font-size:14px;line-height:1.4}
.preise-plakate img{width:100%;height:auto;aspect-ratio:400/566;object-fit:cover;border-radius:10px;border:1px solid var(--line-hairline);box-shadow:0 10px 24px rgba(58,26,11,.08);transition:transform .2s}
.preise-plakate a:hover img{transform:translateY(-3px)}
.preise-plakate small{display:block;color:var(--text-meta);font-size:12px}
.preise-teaser{padding:clamp(56px,6vw,88px) var(--edge-desktop);background:var(--surface-warm)}
.preise-teaser>div{max-width:var(--container-max);margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:24px}
.preise-teaser h2{font-family:var(--font-display);font-weight:var(--fw-light);font-size:clamp(30px,3.4vw,44px);line-height:1.15;color:var(--c-espresso);margin:0 0 8px}
.preise-teaser p{margin:0;max-width:52ch}
@media(max-width:640px){
.preise-hero:after{display:none}
.preise-tabelle th,.preise-tabelle td{padding:10px 10px}
.preise-tabelle thead th{font-size:16px}
.preise-tabelle tbody th{font-size:17px;padding-left:14px}
.preise-tabelle tbody td{font-size:16px}
.preise-tabelle tr>:first-child{border-radius:10px 0 0 10px}
.preise-tabelle tr>:last-child{border-radius:0 10px 10px 0;padding-right:12px}
.preise-gruppe h3{padding:9px 14px;font-size:21px}
.preise-sprung a{font-size:14px;padding:0 14px}
.preise-kopf h2{font-size:clamp(28px,8vw,40px)!important}
.preise-plakate ul{grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
}
@media(max-width:360px){.preise-tabelle tbody th{font-size:16px}.preise-tabelle tbody td{font-size:15px}.preise-tabelle th,.preise-tabelle td{padding:9px 7px}}
"""


def esc(t):
    return html.escape(t, quote=True)


def nbsp(t):
    return esc(t).replace(" ", "&nbsp;")


def preis_zahl(p):
    m = re.search(r"([\d.]+,\d{2})", p)
    return m.group(1).replace(".", "").replace(",", ".")


def tabelle(kat, gruppe):
    cap = kat["titel"] + (" – " + gruppe["titel"] if gruppe["titel"] else "")
    rows = "".join(
        f'<tr><th scope="row">{esc(n)}</th><td class="preis">{nbsp(p)}</td><td class="dauer">{nbsp(d)}</td></tr>'
        for n, p, d in gruppe["zeilen"])
    return (f'<table class="preise-tabelle"><caption>{esc(cap)}</caption>'
            '<thead><tr><th scope="col">Behandlung</th><th scope="col" class="preis">Preis</th>'
            f'<th scope="col" class="dauer">Dauer</th></tr></thead><tbody>{rows}</tbody></table>')


def kategorie(kat):
    teile = []
    nummeriert = sum(1 for g in kat["gruppen"] if g["titel"]) > 1
    for i, g in enumerate(kat["gruppen"], 1):
        kopf = ""
        if g["titel"]:
            nr = f'<span class="nr">{i}.</span> ' if nummeriert else ""
            kopf = f"<h3>{nr}{esc(g['titel'])}</h3>"
        teile.append(f'<div class="preise-gruppe">{kopf}{tabelle(kat, g)}</div>')
    return (f'<section class="preise-kategorie" id="{kat["id"]}" aria-labelledby="{kat["id"]}-titel">'
            '<div class="preise-wrap"><header class="preise-kopf">'
            f'<h2 id="{kat["id"]}-titel">{esc(kat.get("anzeige", kat["titel"]))}'
            f'<span class="schrift"> {esc(kat["zusatz"])}</span></h2>'
            '<div class="preise-ornament" aria-hidden="true"><span></span><i></i><span></span></div></header>'
            + "".join(teile) +
            '<p class="preise-hoch"><a href="#preisuebersicht">↑ Zur Übersicht</a></p></div></section>')


def hauptinhalt():
    sprung = "".join(f'<li><a href="#{k["id"]}">{esc(k["kurz"])}</a></li>' for k in DATEN["kategorien"])
    plakate = "".join(
        f'<li><a href="/images/preislisten/{k["plakat"]}.jpg" target="_blank" rel="noopener">'
        f'<img src="/images/preislisten/{k["plakat"]}-w400.webp" alt="Preisliste {esc(k["titel"])} als Plakat" '
        f'width="400" height="566" loading="lazy" decoding="async">'
        f'<span>{esc(k["titel"])}<small>Bild öffnen (JPG)</small></span></a></li>'
        for k in DATEN["kategorien"])
    return (
        '<section class="preise-hero"><div class="preise-hero-inner">'
        '<p class="preise-eyebrow">Preisliste · Damen und Herren</p>'
        '<h1><span class="gross">Preise</span><span class="schrift">&amp; Behandlungen</span></h1>'
        '<p>Hier findest du alle Behandlungen im Beauty Palast mit Preis und Dauer. '
        'Welche Behandlung gerade zu deiner Haut passt, besprechen wir gerne gemeinsam.</p>'
        f'<a class="preise-cta" href="{BUCHEN}">Termin buchen <span aria-hidden="true">↗</span></a>'
        '</div></section>'
        '<nav class="preise-sprung" id="preisuebersicht" aria-labelledby="preisuebersicht-titel">'
        f'<h2 id="preisuebersicht-titel">Direkt zur Kategorie</h2><ul>{sprung}</ul></nav>'
        + "".join(kategorie(k) for k in DATEN["kategorien"]) +
        '<section class="preise-hinweise" aria-labelledby="preise-hinweise-titel"><div class="preise-wrap">'
        '<h2 id="preise-hinweise-titel">Gut zu <em>wissen</em></h2>'
        '<p>Bei Preisen mit „ab“ richtet sich der Endpreis nach dem Umfang deiner Behandlung. '
        'Wenn du unsicher bist, welche Behandlung für dich die richtige ist, frag mich einfach vorher.</p>'
        '<p>Was bei Terminabsagen und Verspätungen gilt, liest du in der <a href="/kundeninformation">Kundeninformation</a>.</p>'
        f'<a class="preise-cta dunkel" href="{BUCHEN}">Termin buchen <span aria-hidden="true">↗</span></a>'
        '</div></section>'
        '<section class="preise-plakate" aria-labelledby="preise-plakate-titel"><div class="preise-wrap">'
        '<header class="preise-kopf"><h2 id="preise-plakate-titel">Preislisten zum Ansehen<span class="schrift">als Plakat</span></h2>'
        '<div class="preise-ornament" aria-hidden="true"><span></span><i></i><span></span></div></header>'
        f'<ul>{plakate}</ul></div></section>')


def ld_json():
    offers = []
    for k in DATEN["kategorien"]:
        for g in k["gruppen"]:
            for n, p, d in g["zeilen"]:
                name = f"{k['titel']}: {n}" if k["id"].startswith("waxing") else n
                o = {"@type": "Offer", "priceCurrency": "EUR",
                     "itemOffered": {"@type": "Service", "name": name, "category": k["titel"]}}
                if p.startswith("ab "):
                    o["priceSpecification"] = {"@type": "PriceSpecification", "minPrice": preis_zahl(p), "priceCurrency": "EUR"}
                else:
                    o["price"] = preis_zahl(p)
                offers.append(o)
    graph = [
        {"@type": "WebPage", "@id": f"{SITE}/preise#webpage", "url": f"{SITE}/preise", "name": TITEL,
         "description": BESCHREIBUNG, "inLanguage": "de-DE", "isPartOf": {"@id": f"{SITE}/#website"},
         "about": {"@id": f"{SITE}/#business"}},
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Startseite", "item": f"{SITE}/"},
            {"@type": "ListItem", "position": 2, "name": "Preise", "item": f"{SITE}/preise"}]},
        {"@type": "OfferCatalog", "@id": f"{SITE}/preise#preisliste", "name": "Preisliste Beauty Palast Albstadt",
         "url": f"{SITE}/preise", "provider": {"@id": f"{SITE}/#business"}, "itemListElement": offers},
    ]
    return json.dumps({"@context": "https://schema.org", "@graph": graph}, ensure_ascii=False, separators=(",", ":"))


def seo_block(business_ld):
    t, b = esc(TITEL), esc(BESCHREIBUNG)
    img = f"{SITE}/images/og-beauty-palast.jpg"
    return f"""<!-- SEO:START -->
<title>{t}</title>
<meta name="description" content="{b}">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="{SITE}/preise">
<meta name="theme-color" content="#3a1a0b">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:locale" content="de_DE">
<meta property="og:site_name" content="Beauty Palast Albstadt">
<meta property="og:title" content="{t}">
<meta property="og:description" content="{b}">
<meta property="og:url" content="{SITE}/preise">
<meta property="og:image" content="{img}">
<meta property="og:image:secure_url" content="{img}">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Preise – Beauty Palast Albstadt">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{t}">
<meta name="twitter:description" content="{b}">
<meta name="twitter:image" content="{img}">
<meta name="twitter:image:alt" content="Preise – Beauty Palast Albstadt">
<script type="application/ld+json">{business_ld}</script>
<script type="application/ld+json">{ld_json()}</script>
<!-- SEO:END -->"""


def ersetze_einmal(s, alt, neu, wo):
    if s.count(alt) != 1:
        raise SystemExit(f"{wo}: erwartet genau 1 Treffer für {alt[:60]!r}, gefunden {s.count(alt)}")
    return s.replace(alt, neu)


NAV_INAKTIV = None
NAV_AKTIV = None


def nav_vorlagen(wax):
    global NAV_INAKTIV, NAV_AKTIV
    NAV_INAKTIV = re.search(r'<a href="/kundeninformation" data-bp-nav-link="true".*?</a>', wax, re.S).group(0)
    NAV_AKTIV = re.search(r'<a href="/waxing" data-bp-nav-link="true"[^>]*aria-current="page">.*?</a>', wax, re.S).group(0)
    assert "aria-current" not in NAV_INAKTIV


def nav_link(vorlage, href, text, alt_href, alt_text):
    return vorlage.replace(f'href="{alt_href}"', f'href="{href}"').replace(
        f'<span class="sc-interp">{alt_text}</span>', f'<span class="sc-interp">{text}</span>')


def verlinke(s, wo, aktiv=False, css=False):
    """Fügt „Preise“ in Kopfzeile, Mobilmenü, Fußzeile und Analytics-Titel ein."""
    if 'data-bp-nav="true"' in s and 'href="/preise" data-bp-nav-link' not in s:
        link = (nav_link(NAV_AKTIV, "/preise", "Preise", "/waxing", "Waxing") if aktiv
                else nav_link(NAV_INAKTIV, "/preise", "Preise", "/kundeninformation", "Kundeninformation"))
        s = ersetze_einmal(s, '<a href="/kundeninformation" data-bp-nav-link="true"',
                           link + '<a href="/kundeninformation" data-bp-nav-link="true"', wo)
    if '<a href="/preise">Preise</a><a href="/kundeninformation">' not in s:
        s = ersetze_einmal(s, '<a href="/waxing">Waxing</a><a href="/kundeninformation">',
                           '<a href="/waxing">Waxing</a><a href="/preise">Preise</a><a href="/kundeninformation">', wo)
    s, n = re.subn(rf'<a href="{re.escape(BUCHEN)}"([^>]*)>Preise</a>', r'<a href="/preise"\1>Preise</a>', s)
    if 'aria-label="Fußnavigation"' in s and '<a href="/preise">Preise</a><a href="/impressum">' not in s:
        s = ersetze_einmal(s, '<nav aria-label="Fußnavigation"><a href="/">Startseite</a>',
                           '<nav aria-label="Fußnavigation"><a href="/">Startseite</a><a href="/preise">Preise</a>', wo)
    if '"/preise":"Preise"' not in s:
        s = ersetze_einmal(s, '"/datenschutz":"Datenschutz"}', '"/datenschutz":"Datenschutz","/preise":"Preise"}', wo)
    if not css:
        return s
    if "<style data-preise>" not in s:
        s = ersetze_einmal(s, "</head>", f"<style data-preise>{CSS.strip()}</style></head>", wo)
    else:
        s = re.sub(r"<style data-preise>.*?</style>", lambda m: f"<style data-preise>{CSS.strip()}</style>", s, flags=re.S)
    return s


def waxing_teaser(s):
    if 'class="preise-teaser"' in s:
        return s
    i = s.index("Du hast noch Fragen?")
    j = s.rindex("<section", 0, i)
    teaser = ('<section class="preise-teaser" aria-labelledby="preise-teaser-titel"><div><div>'
              '<h2 id="preise-teaser-titel">Preise fürs Waxing</h2>'
              '<p>Alle Bereiche mit Preis und Dauer findest du in der Preisliste – für Damen und für Herren.</p></div>'
              '<a class="preise-cta dunkel" href="/preise#waxing-damen">Zur Preisliste</a></div></section>')
    return s[:j] + teaser + s[j:]


def main():
    wax = (LIVE / "waxing.html").read_text(encoding="utf-8")
    nav_vorlagen(wax)

    # Neue Seite aus der Waxing-Vorlage (ohne frühere Preise-Einfügungen)
    p = re.sub(r'<a href="/preise" data-bp-nav-link="true".*?</a>', "", wax, flags=re.S)
    p = p.replace('<a href="/preise">Preise</a>', "")
    p = re.sub(r'<section class="preise-teaser".*?</section>', "", p, flags=re.S)
    p = re.sub(r"<style data-preise>.*?</style>", "", p, flags=re.S)
    p = re.sub(r'<link rel="preload" href="images/waxing-4\.webp"[^>]*>', "", p, count=1)
    business = re.search(r'<script type="application/ld\+json">(.*?)</script>', p, re.S).group(1)
    business_obj = json.loads(business)
    business_ld = json.dumps({"@context": "https://schema.org",
                              "@graph": [n for n in business_obj["@graph"] if n.get("@type") in ("BeautySalon", "WebSite")]},
                             ensure_ascii=False, separators=(",", ":"))
    p = re.sub(r"<!-- SEO:START -->.*?<!-- SEO:END -->", lambda m: seo_block(business_ld), p, count=1, flags=re.S)
    p = ersetze_einmal(p, '<body data-page="wax">', '<body data-page="preise">', "preise")
    p = p.replace('data-sc-name="Waxing"', 'data-sc-name="Preise"')
    inaktiv_wax = nav_link(NAV_INAKTIV, "/waxing", "Waxing", "/kundeninformation", "Kundeninformation")
    p = ersetze_einmal(p, NAV_AKTIV, inaktiv_wax, "preise")
    a = p.index('<section class="page-hero"')
    b = p.index('<section id="anfahrt"')
    p = p[:a] + hauptinhalt() + p[b:]
    p = verlinke(p, "preise", aktiv=True, css=True)
    (LIVE / "preise.html").write_text(p, encoding="utf-8")

    for name in SEITEN + RECHT:
        f = LIVE / name
        s = f.read_text(encoding="utf-8")
        s = verlinke(s, name, css=name == "waxing.html")
        if name == "waxing.html":
            s = waxing_teaser(s)
        f.write_text(s, encoding="utf-8")

    sm = LIVE / "sitemap.xml"
    s = sm.read_text(encoding="utf-8")
    if f"{SITE}/preise<" not in s:
        s = s.replace("</urlset>", f"  <url>\n    <loc>{SITE}/preise</loc>\n  </url>\n</urlset>")
        sm.write_text(s, encoding="utf-8")
    print("preise.html gebaut,", sum(len(g["zeilen"]) for k in DATEN["kategorien"] for g in k["gruppen"]), "Preiszeilen")


if __name__ == "__main__":
    main()
