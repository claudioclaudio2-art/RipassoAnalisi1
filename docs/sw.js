// Service worker generato da tools/build.py (versione d898feb693)
const CACHE = 'analisi1-d898feb693';
const ASSET = ["./", "index.html", "contenuti.js", "css/style.css", "js/app.js", "js/figure.js", "vendor/katex.min.js", "vendor/katex.min.css", "manifest.webmanifest", "icon.svg", "icon-192.png", "icon-512.png", "vendor/fonts/KaTeX_AMS-Regular.woff2", "vendor/fonts/KaTeX_Caligraphic-Bold.woff2", "vendor/fonts/KaTeX_Caligraphic-Regular.woff2", "vendor/fonts/KaTeX_Fraktur-Bold.woff2", "vendor/fonts/KaTeX_Fraktur-Regular.woff2", "vendor/fonts/KaTeX_Main-Bold.woff2", "vendor/fonts/KaTeX_Main-BoldItalic.woff2", "vendor/fonts/KaTeX_Main-Italic.woff2", "vendor/fonts/KaTeX_Main-Regular.woff2", "vendor/fonts/KaTeX_Math-BoldItalic.woff2", "vendor/fonts/KaTeX_Math-Italic.woff2", "vendor/fonts/KaTeX_SansSerif-Bold.woff2", "vendor/fonts/KaTeX_SansSerif-Italic.woff2", "vendor/fonts/KaTeX_SansSerif-Regular.woff2", "vendor/fonts/KaTeX_Script-Regular.woff2", "vendor/fonts/KaTeX_Size1-Regular.woff2", "vendor/fonts/KaTeX_Size2-Regular.woff2", "vendor/fonts/KaTeX_Size3-Regular.woff2", "vendor/fonts/KaTeX_Size4-Regular.woff2", "vendor/fonts/KaTeX_Typewriter-Regular.woff2"];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSET)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Rete prima (così vedi subito le lezioni nuove), cache se sei offline.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request).then(r => { const copia = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copia)); return r; })
      .catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match('index.html')))
  );
});
