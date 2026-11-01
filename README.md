# Analisi 1 · Ripasso

Sito personale per ripassare Analisi 1: definizioni, teoremi e dimostrazioni divisi per lezione, con modalità ripasso e progressi salvati nel browser.

Sito: https://claudioclaudio2-art.github.io/RipassoAnalisi1/ (GitHub Pages dalla radice del branch `main`).

## Struttura

- `lezioni/AAAA-MM-GG.js`: una lezione per file (contenuti in Markdown + LaTeX).
- `index.html`, `css/`, `js/`, `vendor/`: il sito pubblicato (KaTeX incluso per l'uso offline).
- `tools/build.py`: unisce le lezioni in `contenuti.js` e aggiorna il service worker.
- `tools/check.js`: controlla la struttura delle lezioni e rende ogni formula con KaTeX.

## Aggiungere una lezione

1. Creare `lezioni/AAAA-MM-GG.js` con la stessa forma degli altri file.
2. `python3 tools/build.py`
3. Commit e push: GitHub Pages si aggiorna da solo.

## Formato di una voce

```js
{ t: "teo", s: "dim", titolo: R`Unicità del limite`, testo: R`...`, dim: R`...`, fig: "unicita" }
```

- `t`: `def`, `teo`, `prop`, `cor`, `lemma`, `es`, `att`, `oss` (un `es` con `s: "casa"` diventa Esercizio).
- `s`: `dim` (dimostrato a lezione), `omessa` (solo enunciato; `dim` diventa extra), `casa` (per esercizio).
- Formule tra `$...$` o `$$...$$`; liste con `- ` o `1. `; grassetto con `**...**`.
