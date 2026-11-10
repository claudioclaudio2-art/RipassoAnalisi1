#!/usr/bin/env python3
"""Build del sito: unisce le lezioni (lezioni/*.js) in docs/contenuti.js
e rigenera il service worker con una versione nuova (così il sito si aggiorna).

Per aggiungere una lezione: creare lezioni/AAAA-MM-GG.js e rilanciare questo script.
"""
import hashlib, json, pathlib, re

ROOT = pathlib.Path(__file__).resolve().parent.parent
SITE = ROOT / "docs"
files = sorted(p for p in (ROOT / "lezioni").glob("*.js") if re.fullmatch(r"\d{4}-\d\d-\d\d\.js", p.name))

parts = ["/* Generato da tools/build.py: non modificare a mano */\n"
         "window.LEZIONI = [];\nvar R = String.raw;\nfunction L(x) { window.LEZIONI.push(x); }\n"]
for p in files:
    parts.append(f"\n/* ---- {p.name} ---- */\n" + p.read_text(encoding="utf-8"))
# domande di teoria chieste agli esami
esami = ROOT / "esami" / "domande.js"
if esami.exists():
    parts.append("\n/* ---- esami/domande.js ---- */\n" + esami.read_text(encoding="utf-8"))
bundle = "".join(parts)
(SITE / "contenuti.js").write_text(bundle, encoding="utf-8")

# file da mettere in cache per l'uso offline
asset = ["./", "index.html", "contenuti.js", "css/style.css", "js/app.js", "js/figure.js",
         "vendor/katex.min.js", "vendor/katex.min.css", "manifest.webmanifest", "icon.svg",
         "icon-192.png", "icon-512.png"]
asset += ["vendor/fonts/" + f.name for f in sorted((SITE / "vendor/fonts").glob("*.woff2"))]

h = hashlib.sha1()
for a in asset:
    f = SITE / ("index.html" if a == "./" else a)
    if f.exists():
        h.update(f.read_bytes())
version = h.hexdigest()[:10]

sw = f"""// Service worker generato da tools/build.py (versione {version})
const CACHE = 'analisi1-{version}';
const ASSET = {json.dumps(asset)};
self.addEventListener('install', e => {{
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSET)).then(() => self.skipWaiting()));
}});
self.addEventListener('activate', e => {{
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
}});
// Rete prima (così vedi subito le lezioni nuove), cache se sei offline.
self.addEventListener('fetch', e => {{
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request).then(r => {{ const copia = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copia)); return r; }})
      .catch(() => caches.match(e.request, {{ ignoreSearch: true }}).then(r => r || caches.match('index.html')))
  );
}});
"""
(SITE / "sw.js").write_text(sw, encoding="utf-8")
print(f"{len(files)} lezioni -> contenuti.js ({len(bundle)//1024} KB), sw versione {version}")
