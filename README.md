# Beauty Palast Albstadt — Website

Statische Mehrseiten-Website des Kosmetikinstituts Beauty Palast Albstadt.
Entpackt aus dem Claude-Design-Export `Beauty-Palast-Website-komplett.html`
(Single-File-Bundle mit gzip/base64-eingebetteten Assets) in eine normale,
versionierbare Dateistruktur.

## Struktur

```
index.html                  Weiterleitung auf die Startseite
Startseite.dc.html          Seiten (dc-Runtime-Templates)
Kopfhaut-und-Haar.dc.html
Waxing.dc.html
Kundeninformation.dc.html

support.js                  dc-Runtime (Templating, Hydration, React-Boot)
design-system.js            kompiliertes Design System (UMD, 24 Komponenten)
image-slot.js               <image-slot> Custom Element (Bildplatzhalter)
vendor/react.js             React 18.3.1 UMD (production)
vendor/react-dom.js         ReactDOM 18.3.1 UMD (production)
vendor/lucide.js            Lucide Icons 0.469.0

fonts/                      Cormorant Garamond, Jost, Parisienne (woff2, subsetweise)
images/                     Fotos, Logo, Deko-Ornamente
.image-slots.state.json     Sidecar für per Drag & Drop gefüllte Bild-Slots
tools/unbundle.py           Entpacker, der diese Struktur aus dem Bundle erzeugt
```

Die Seiten verlinken sich gegenseitig über ihre Dateinamen — es gibt keinen
Router und keinen Build-Schritt.

## Lokal ausführen

Ein statischer Webserver genügt; `file://` funktioniert nicht, weil die
dc-Runtime die Seiten per `fetch` nachlädt.

```bash
python3 -m http.server 8000
# http://localhost:8000/
```

## Design System

`design-system.js` exportiert unter dem Namespace
`BeautyPalastAlbstadtDesignSystem_3ff570`:

Layout `Header`, `Footer`, `Hero`, `Section`, `Wordmark` ·
Inhalt `FaqAccordion`, `NoticeBox`, `OwnerIntro`, `PriceRow`, `Quote`,
`ServiceCard`, `Testimonial` ·
Primitive `Badge`, `Button`, `Eyebrow`, `Icon`, `Ornament`, `SectionHeading` ·
Formular `ContactForm`, `Field`, `Input`, `Select`, `Textarea`, `WhatsAppButton`

## Abweichungen vom Export

React und ReactDOM lagen im Bundle als externe Ressourcen von unpkg.com vor.
Sie sind jetzt als lokale Dateien unter `vendor/` abgelegt und werden in jeder
Seite vor `support.js` eingebunden — die Runtime überspringt den CDN-Ladevorgang,
wenn `window.React` und `window.ReactDOM` bereits gesetzt sind. Die Seiten
laufen damit ohne Netzzugriff.

## Erneut entpacken

```bash
python3 tools/unbundle.py Beauty-Palast-Website-komplett.html ./out
```
