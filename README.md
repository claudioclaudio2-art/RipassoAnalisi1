# Analisi 1 · Ripasso

Sito personale per ripassare Analisi 1: definizioni, teoremi e dimostrazioni divisi per lezione, con modalità ripasso e progressi salvati nel browser.

Pubblicato con GitHub Pages dalla cartella `docs/`.

## Struttura

- `lezioni/AAAA-MM-GG.js`: una lezione per file (contenuti in Markdown + LaTeX).
- `docs/`: il sito pubblicato (HTML, CSS, JS, KaTeX incluso per l'uso offline).
- `tools/build.py`: unisce le lezioni in `docs/contenuti.js` e aggiorna il service worker.
- `tools/check.js`: controlla la struttura delle lezioni e rende ogni formula con KaTeX.

## Aggiungere una lezione

1. Creare `lezioni/AAAA-MM-GG.js` con la stessa forma degli altri file.
2. `python3 tools/build.py`
3. Commit e push: GitHub Pages si aggiorna da solo.

## Formato di una voce

```js
{ t: "teo", s: "dim", titolo: R`Unicità del limite`, testo: R`...`, dim: R`...`, diff: 2, fig: "unicita" }
```

- `t`: `def`, `teo`, `prop`, `cor`, `lemma`, `es`, `att`, `oss` (un `es` con `s: "casa"` diventa Esercizio).
- `s`: `dim` (dimostrato a lezione), `omessa` (solo enunciato; `dim` diventa extra), `casa` (per esercizio).
- `diff`: difficoltà della dimostrazione da 1 a 3 stelline (obbligatoria se c'è `dim`).
- Formule tra `$...$` o `$$...$$`; liste con `- ` o `1. `; grassetto con `**...**`.
