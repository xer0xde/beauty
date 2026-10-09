# Live-Stand beauty-palast-albstadt.de

Abzug der öffentlich ausgelieferten Website vom 09.10.2026 (per HTTP, nicht per FTP).
Die Live-Seite ist vorgerendertes, statisches HTML ohne dc-Runtime und weicht von den
`*.dc.html`-Vorlagen im Wurzelverzeichnis ab. Änderungen an der Website hier machen.

| URL | Datei hier |
| --- | --- |
| `/` | `index.html` |
| `/kopfhaut-und-haar` | `kopfhaut-und-haar.html` |
| `/waxing` | `waxing.html` |
| `/kundeninformation` | `kundeninformation.html` |
| `/impressum` | `impressum.html` |
| `/datenschutz` | `datenschutz.html` |

Nicht enthalten, weil per HTTP nicht abrufbar: `.htaccess` (liefert die sauberen URLs aus
und leitet `*.dc.html`, `index.html`, `impressum.html` auf sie um) und die tatsächlichen
Dateinamen auf dem Server. Vor einem Upload deshalb per FTP abgleichen.
