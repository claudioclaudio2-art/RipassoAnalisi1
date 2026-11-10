(() => {
'use strict';

/* ================= Dati ================= */
const MESI = ['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'];
const GIORNI = ['domenica','lunedì','martedì','mercoledì','giovedì','venerdì','sabato'];
const TIPI = {
  def:  { lab: 'Definizione',  g: 'def' },
  teo:  { lab: 'Teorema',      g: 'teo' },
  prop: { lab: 'Proposizione', g: 'teo' },
  cor:  { lab: 'Corollario',   g: 'teo' },
  lemma:{ lab: 'Lemma',        g: 'teo' },
  es:   { lab: 'Esempio',      g: 'es'  },
  ex:   { lab: 'Esercizio',    g: 'ex'  },
  att:  { lab: 'Attenzione',   g: 'att' },
  oss:  { lab: 'Osservazione', g: 'oss' },
};
const GRUPPI = [
  { g: 'def', lab: 'Definizioni',  c: 'var(--c-def)' },
  { g: 'teo', lab: 'Teoremi',      c: 'var(--c-teo)' },
  { g: 'ex',  lab: 'Esercizi',     c: 'var(--c-ex)'  },
  { g: 'es',  lab: 'Esempi',       c: 'var(--c-es)'  },
  { g: 'att', lab: 'Attenzione',   c: 'var(--c-att)' },
  { g: 'oss', lab: 'Osservazioni', c: 'var(--c-oss)' },
];
const VALUTABILI = new Set(['def', 'teo', 'ex', 'es']);
const K = [
  { k: 0,  lab: 'Non la so',           c: 'var(--k-non)',  cls: 'k-non'  },
  { k: 1,  lab: 'La so male',          c: 'var(--k-male)', cls: 'k-male' },
  { k: 2,  lab: 'La so perfettamente', c: 'var(--k-ok)',   cls: 'k-ok'   },
  { k: -1, lab: 'Mai valutata',        c: 'var(--k-mai)',  cls: 'k-mai'  },
];
const KLAB = { 0: 'Non la so', 1: 'La so male', 2: 'La so perfettamente', '-1': 'Mai valutata' };
const INTERVALLI = [0, 1, 2, 4, 7, 15]; // giorni per "scatola" (ripetizione dilazionata)
const GIORNO = 86400000;

const parseData = iso => { const [y, m, d] = iso.split('-').map(Number); return new Date(y, m - 1, d); };
const fmtData = (iso, lungo) => {
  const d = parseData(iso);
  return lungo ? `${GIORNI[d.getDay()]} ${d.getDate()} ${MESI[d.getMonth()]}` : `${d.getDate()}/${d.getMonth() + 1}`;
};
const slug = s => s.replace(/\$[^$]*\$/g, m => m.replace(/\\[a-zA-Z]+/g, ' ')).normalize('NFD')
  .replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);
const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

const LEZ = (window.LEZIONI || []).slice().sort((a, b) => a.data.localeCompare(b.data));
const VOCI = [];
const IDS = new Set();
for (const l of LEZ) {
  l.id = 'l-' + l.data;
  l.voci.forEach(v => {
    if (v.t === 'es' && v.s === 'casa') v.t = 'ex';
    v.g = TIPI[v.t].g;
    v.lez = l;
    let id = l.data + '-' + slug(v.titolo), n = 2;
    while (IDS.has(id)) id = l.data + '-' + slug(v.titolo) + '-' + n++;
    IDS.add(id); v.id = id;
    v.cerca = norm(v.titolo + ' ' + v.testo + ' ' + (v.dim || '') + ' ' + TIPI[v.t].lab);
    VOCI.push(v);
  });
}
const PER_ID = new Map(VOCI.map(v => [v.id, v]));

/* ---- Domande di teoria chieste agli esami (esami/domande.js) ---- */
const ES = window.ESAMI || { prove: [], domande: [] };
const PROVA = new Map(ES.prove.map(p => [p.id, p]));
const fmtProva = id => { const d = parseData(id); return `${d.getDate()} ${MESI[d.getMonth()]} ${d.getFullYear()}`; };
ES.domande.forEach(d => {
  d.occ = d.chiesta.map(c => { const [id, tema, qs] = c.split(' '); return { id, tema, qs }; });
  d.appelli = [...new Set(d.occ.map(o => o.id))].sort();
  d.links = d.voci.map(([data, tit]) => VOCI.find(v => v.lez.data === data && v.titolo === tit)).filter(Boolean);
  d.links.forEach(v => (v.esami = v.esami || []).push(d));
});
VOCI.forEach(v => {
  if (!v.esami) return;
  v.esDiretta = v.esami.some(d => d.tipo !== 'ex');
  v.esEx = v.esami.some(d => d.tipo === 'ex');
  v.nAppelli = new Set(v.esami.flatMap(d => d.appelli)).size;
});

/* ================= Progressi ================= */
const SKEY = 'a1-progressi-v1';
let P = {};
try { P = JSON.parse(localStorage.getItem(SKEY) || '{}') || {}; } catch (e) { P = {}; }
const salva = () => { try { localStorage.setItem(SKEY, JSON.stringify(P)); } catch (e) { toast('Impossibile salvare: memoria del browser non disponibile'); } };
const statoDi = id => (P[id] && typeof P[id].k === 'number') ? P[id].k : -1;
const daRipassare = id => { const p = P[id]; return !p || p.k < 2 || (p.due || 0) <= Date.now(); };
function registra(id, k, quando = Date.now()) {
  const p = P[id] || { box: 0, h: [] };
  p.k = k;
  p.box = k === 2 ? Math.min((p.box || 0) + 1, INTERVALLI.length - 1) : k === 1 ? 1 : 0;
  p.due = quando + INTERVALLI[p.box] * GIORNO;
  p.h = (p.h || []).concat([[quando, k]]).slice(-30);
  P[id] = p;
}

/* ================= Rendering testo + formule ================= */
const MACRO = { '\\R': '\\mathbb{R}', '\\N': '\\mathbb{N}', '\\Z': '\\mathbb{Z}', '\\Q': '\\mathbb{Q}', '\\eps': '\\varepsilon' };
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function tex(src, display) {
  try { return katex.renderToString(src, { displayMode: display, throwOnError: false, macros: MACRO }); }
  catch (e) { return '<code>' + esc(src) + '</code>'; }
}
function inline(s, math, q) {
  s = esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  if (q) s = evidenzia(s, q);
  return s.replace(/\u0001(\d+)\u0002/g, (_, i) => math[i]);
}
function evidenzia(html, q) {
  const qn = norm(q); if (qn.length < 2) return html;
  // evidenzia solo il testo semplice, non i tag né i segnaposto delle formule
  return html.split(/(\u0001\d+\u0002|<[^>]+>)/).map((seg, i) => {
    if (i % 2) return seg;
    const sn = norm(seg); const k = sn.indexOf(qn);
    if (k < 0 || sn.length !== seg.length) return seg;
    return seg.slice(0, k) + '<mark>' + seg.slice(k, k + qn.length) + '</mark>' + seg.slice(k + qn.length);
  }).join('');
}
function md(src, q) {
  const math = [];
  src = src.replace(/\$\$([\s\S]+?)\$\$|\$([^$]+?)\$/g, (m, d, i) => {
    math.push(tex(d !== undefined ? d : i, d !== undefined));
    return '\u0001' + (math.length - 1) + '\u0002';
  });
  const out = []; let par = []; const stack = [];
  const chiudiPar = () => { if (par.length) { out.push('<p>' + inline(par.join(' '), math, q) + '</p>'); par = []; } };
  const chiudiListe = (fino = 0) => { while (stack.length > fino) { const l = stack.pop(); out.push('</li></' + l.tag + '>'); } };
  for (const raw of src.replace(/^\n+|\s+$/g, '').split('\n')) {
    const m = raw.match(/^(\s*)(- |\d+\. )(.*)$/);
    if (!raw.trim()) { chiudiPar(); chiudiListe(); continue; }
    if (m) {
      chiudiPar();
      const liv = m[1].length > 0 ? 2 : 1, tag = /\d/.test(m[2]) ? 'ol' : 'ul';
      if (stack.length > liv) chiudiListe(liv);
      if (stack.length === liv && stack[liv - 1].tag !== tag) chiudiListe(liv - 1);
      if (stack.length === liv) out.push('</li><li>');
      else { out.push('<' + tag + '><li>'); stack.push({ tag }); }
      out.push(inline(m[3], math, q));
    } else if (stack.length) {
      out.push(' ' + inline(raw.trim(), math, q));
    } else par.push(raw.trim());
  }
  chiudiPar(); chiudiListe();
  return out.join('');
}
const titoloHTML = (v, q) => md(v.titolo, q).replace(/^<p>|<\/p>$/g, '');

/* ================= DOM helpers ================= */
const $ = s => document.querySelector(s);
const h = (tag, attrs = {}, html) => { const e = document.createElement(tag); for (const k in attrs) e.setAttribute(k, attrs[k]); if (html != null) e.innerHTML = html; return e; };
const CHEV = '<svg class="chev" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>';
let toastT;
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 2200); }

/* ================= Pagina principale ================= */
const filtri = { gruppi: new Set(), stati: new Set(), esame: new Set(), q: '' };
const NODI = new Map();

function etichettaStato(v) {
  if (v.s === 'dim') return v.t === 'es' ? '' : '<span class="badge b-dim">Dimostrato a lezione</span>';
  if (v.s === 'omessa') return v.dim ? '<span class="badge b-omessa">Dimostrazione non fatta a lezione</span>' : '<span class="badge b-omessa">Solo enunciato</span>';
  if (v.s === 'casa') return '<span class="badge b-casa">Lasciato per esercizio</span>';
  return '';
}
function stelle(n) { n = n || 1; return '<span class="stelle" aria-label="difficoltà ' + n + ' su 3">' + '★'.repeat(n) + '<i>' + '★'.repeat(3 - n) + '</i></span>'; }
const DIFF_LAB = ['', 'facile', 'media', 'difficile'];
function chipDim(v) {
  if (!v.dim) return '';
  const lab = v.g === 'ex' ? 'Da dimostrare' : v.s === 'omessa' ? 'Dim. extra' : 'Con dimostrazione';
  return `<span class="dimchip${v.s === 'omessa' ? ' extra' : ''}" title="Dimostrazione ${DIFF_LAB[v.diff || 1]}">${lab} ${stelle(v.diff)}</span>`;
}
const ICO_ESAME = '<svg class="ico-es" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h4"/></svg>';
const appelliTxt = n => `${n} ${n === 1 ? 'appello' : 'appelli'}`;
function chipEsame(v) {
  if (!v.esami) return '';
  if (v.esDiretta) return `<span class="eschip" title="Chiesta come domanda di teoria in ${appelliTxt(v.nAppelli)}">${ICO_ESAME}All’esame ×${v.nAppelli}</span>`;
  return `<span class="eschip ex" title="Serve per un esercizio di teoria (quesito iii) in ${appelliTxt(v.nAppelli)}">${ICO_ESAME}Esercizio d’esame</span>`;
}
// "Appello del 20 gennaio 2025 · Temi A, C · quesito (i)"
function occHTML(d) {
  return d.appelli.map(id => {
    const o = d.occ.filter(x => x.id === id), temi = o.map(x => x.tema).sort();
    const qs = [...new Set(o.map(x => x.qs))].map(q => `(${q})`).join(', ');
    const t = temi.length === 4 ? 'tutti i temi' : (temi.length === 1 ? 'Tema ' : 'Temi ') + temi.join(', ');
    const p = PROVA.get(id) || {};
    return `<li><b>Appello del ${fmtProva(id)}</b><span>${t} · quesito ${qs}</span><small>a.a. ${p.aa || ''}${p.fonte ? ' · ' + p.fonte : ''}</small></li>`;
  }).join('');
}
const TIPO_DOM = { def: 'Definizione', teo: 'Enunciato', ex: 'Esercizio (iii)' };
function boxEsami(v) {
  if (!v.esami) return '';
  return `<div class="esbox"><div class="esbox-h">${ICO_ESAME}Chiesta agli esami</div>` + v.esami.map(d =>
    `<div class="esdom"><div class="esq"><span class="esk">${TIPO_DOM[d.tipo]}</span> ${md(d.q).replace(/^<p>|<\/p>$/g, '')}</div><ul class="esocc">${occHTML(d)}</ul></div>`).join('') + '</div>';
}

function etichettaDim(v) {
  if (v.g === 'ex') return 'Soluzione';
  if (v.s === 'omessa') return 'Dimostrazione (extra, non fatta a lezione)';
  return 'Dimostrazione';
}

function costruisciVoce(v) {
  const d = h('details', { class: 'voce' + (v.esDiretta ? ' esame' : ''), id: v.id, 'data-t': v.t === 'ex' ? 'ex' : v.t });
  const s = h('summary');
  s.innerHTML = `<span class="v-head"><span class="v-tags"><span class="tag">${TIPI[v.t].lab}</span>${chipDim(v)}${chipEsame(v)}</span><span class="v-tit">${titoloHTML(v)}</span></span>` +
    (VALUTABILI.has(v.g) ? `<span class="k-pill" data-k="${statoDi(v.id)}" title="${KLAB[statoDi(v.id)]}"></span>` : '<span></span>') + CHEV;
  d.appendChild(s);
  d.addEventListener('toggle', () => { if (d.open && !d.dataset.pronto) riempiVoce(v, d); });
  NODI.set(v.id, d);
  return d;
}
function riempiVoce(v, d) {
  d.dataset.pronto = '1';
  const b = h('div', { class: 'v-body' });
  const meta = etichettaStato(v);
  let html = meta ? `<div class="v-meta">${meta}</div>` : '';
  html += `<div class="testo">${md(v.testo)}</div>`;
  if (v.fig && window.FIGURE && FIGURE[v.fig]) html += `<div class="fig">${FIGURE[v.fig]}</div>`;
  if (v.dim) html += `<details class="dimbox" data-tipo="${v.g === 'ex' ? 'sol' : 'dim'}"><summary>${CHEV}${etichettaDim(v)}</summary><div class="testo">${md(v.dim)}</div></details>`;
  html += boxEsami(v);
  if (VALUTABILI.has(v.g)) {
    html += `<div class="v-rate"><span>Come la sai?</span>` +
      K.slice(0, 3).map(x => `<button class="rate" data-k="${x.k}" aria-pressed="${statoDi(v.id) === x.k}"><i class="dot ${x.cls}"></i>${x.lab}</button>`).join('') +
      `<a class="v-link" href="#${v.id}" title="Link a questa voce">#</a></div>`;
  }
  b.innerHTML = html;
  b.querySelectorAll('.rate').forEach(btn => btn.addEventListener('click', () => {
    const k = +btn.dataset.k;
    registra(v.id, k); salva();
    aggiornaStatoVoce(v.id); aggiornaConteggi();
    toast(`Segnata come “${KLAB[k]}”`);
  }));
  d.appendChild(b);
}
function aggiornaStatoVoce(id) {
  const d = NODI.get(id); if (!d) return;
  const k = statoDi(id);
  const pill = d.querySelector('.k-pill'); if (pill) { pill.dataset.k = k; pill.title = KLAB[k]; }
  d.querySelectorAll('.rate').forEach(b => b.setAttribute('aria-pressed', +b.dataset.k === k));
}

function costruisciPagina() {
  const cont = $('#contenuto'); cont.innerHTML = '';
  const lista = $('#lista-lezioni'); lista.innerHTML = '';
  for (const l of LEZ) {
    const sec = h('section', { class: 'lezione', id: l.id });
    const head = h('div', { class: 'lez-head' });
    head.innerHTML = `<span class="lez-date">${fmtData(l.data, true)}</span><h2>${esc(l.titolo)}</h2><span class="lez-num">Lezione ${l.n}</span>`;
    const bt = h('button', { class: 'btn' }, 'Ripassa');
    bt.title = 'Ripassa solo questa lezione';
    bt.addEventListener('click', () => apriRipasso({ lezioni: [l.data] }));
    head.appendChild(bt);
    sec.appendChild(head);
    l.voci.forEach(v => sec.appendChild(costruisciVoce(v)));
    cont.appendChild(sec);
    const li = h('li');
    li.innerHTML = `<a href="#${l.id}" data-l="${l.id}"><span class="ls-data"><b>${parseData(l.data).getDate()}</b>${MESI[parseData(l.data).getMonth()].slice(0, 3)}</span><span class="ls-tit">${esc(l.titolo)}</span><span class="minibar" data-mb="${l.data}"></span></a>`;
    lista.appendChild(li);
  }
  lista.addEventListener('click', e => { if (e.target.closest('a')) chiudiMenu(); });
}

function distribuzione(voci) {
  const c = { 0: 0, 1: 0, 2: 0, '-1': 0 };
  voci.filter(v => VALUTABILI.has(v.g)).forEach(v => c[statoDi(v.id)]++);
  return c;
}
const barra = (c, tot) => [2, 1, 0, -1].map(k => `<i style="width:${tot ? c[k] / tot * 100 : 0}%;background:${K.find(x => x.k === k).c}"></i>`).join('');

function aggiornaConteggi() {
  const val = VOCI.filter(v => VALUTABILI.has(v.g));
  const c = distribuzione(VOCI), tot = val.length;
  const oggi = val.filter(v => daRipassare(v.id)).length;
  const ultima = LEZ[LEZ.length - 1];
  $('#riepilogo').innerHTML = `
    <div class="rie-top">
      <div><h1>Il tuo ripasso</h1><p>${LEZ.length} lezioni · ${tot} voci da sapere · ultima lezione ${fmtData(ultima.data, true)}</p></div>
      <div class="oggi"><span class="oggi-n">${oggi}</span><small>voci da<br>ripassare oggi</small>
        <button class="btn btn-primary" id="btn-consigliato"><svg viewBox="0 0 24 24"><path d="M8 5l11 7-11 7z"/></svg>Ripasso consigliato</button></div>
    </div>
    <div class="bigbar">${barra(c, tot)}</div>
    <div class="legenda">${[2, 1, 0, -1].map(k => { const x = K.find(z => z.k === k); return `<span><i class="dot ${x.cls}"></i>${x.lab}: <b>${c[k]}</b></span>`; }).join('')}</div>`;
  $('#btn-consigliato').addEventListener('click', () => apriRipasso({ modo: 'consigliato' }));
  LEZ.forEach(l => {
    const el = document.querySelector(`[data-mb="${l.data}"]`); if (!el) return;
    const cl = distribuzione(l.voci); const t = l.voci.filter(v => VALUTABILI.has(v.g)).length;
    el.innerHTML = barra(cl, t);
  });
  // chip stato
  const cs = $('#chips-stato'); cs.innerHTML = '';
  for (const x of K) {
    const n = c[x.k];
    const b = h('button', { class: 'chip', 'aria-pressed': filtri.stati.has(String(x.k)), style: `--chip-c:${x.c}` },
      `<i class="dot ${x.cls}"></i>${x.lab}<span class="n">${n}</span>`);
    b.addEventListener('click', () => { toggleSet(filtri.stati, String(x.k)); applicaFiltri(); aggiornaConteggi(); });
    cs.appendChild(b);
  }
  const bo = h('button', { class: 'chip', 'aria-pressed': filtri.stati.has('oggi'), style: '--chip-c:var(--focus)' }, `Da ripassare oggi<span class="n">${oggi}</span>`);
  bo.addEventListener('click', () => { toggleSet(filtri.stati, 'oggi'); applicaFiltri(); aggiornaConteggi(); });
  cs.appendChild(bo);
  if (filtri.stati.size) applicaFiltri();
}
const toggleSet = (s, x) => s.has(x) ? s.delete(x) : s.add(x);

function costruisciChipTipo() {
  const ct = $('#chips-tipo');
  for (const g of GRUPPI) {
    const n = VOCI.filter(v => v.g === g.g).length;
    const b = h('button', { class: 'chip', 'aria-pressed': 'false', style: `--chip-c:${g.c}` }, `${g.lab}<span class="n">${n}</span>`);
    b.addEventListener('click', () => { toggleSet(filtri.gruppi, g.g); b.setAttribute('aria-pressed', filtri.gruppi.has(g.g)); applicaFiltri(); });
    ct.appendChild(b);
  }
  const nd = VOCI.filter(v => v.dim && v.s === 'dim' && v.g !== 'ex').length;
  const bd = h('button', { class: 'chip', 'aria-pressed': 'false', style: '--chip-c:var(--c-dim)' }, `Con dimostrazione<span class="n">${nd}</span>`);
  bd.addEventListener('click', () => { filtri.dim = !filtri.dim; bd.setAttribute('aria-pressed', filtri.dim); applicaFiltri(); });
  ct.appendChild(bd);

  // filtro esami
  const ce = $('#chips-esame');
  const scelte = [
    ['dir', 'Chieste all’esame', 'Definizioni e teoremi chiesti come domanda di teoria (quesiti i e ii)', v => v.esDiretta],
    ['ex', 'Utili per esercizi d’esame', 'Voci che servono per un esercizio di teoria (quesito iii)', v => v.esEx],
  ];
  for (const [k, lab, tit, f] of scelte) {
    const b = h('button', { class: 'chip', 'aria-pressed': 'false', style: '--chip-c:var(--c-esame)', title: tit }, `${k === 'dir' ? ICO_ESAME : ''}${lab}<span class="n">${VOCI.filter(f).length}</span>`);
    b.addEventListener('click', () => { toggleSet(filtri.esame, k); b.setAttribute('aria-pressed', filtri.esame.has(k)); applicaFiltri(); });
    ce.appendChild(b);
  }
  const bl = h('button', { class: 'chip chip-link', type: 'button' }, 'Elenco di tutte le domande →');
  bl.addEventListener('click', () => { const p = $('#esami-panel'); p.open = true; p.scrollIntoView({ block: 'start' }); });
  ce.appendChild(bl);
}

/* Pannello con tutte le domande d'esame, divise per tipo e ordinate per frequenza */
function costruisciPannelloEsami() {
  const p = $('#esami-panel');
  if (!ES.domande.length) { p.remove(); $('#riga-esami').remove(); return; }
  const fatte = ES.domande.filter(d => d.links.length).length;
  const anni = [...new Set(ES.prove.map(x => x.aa))].join(' e ');
  const gruppi = [['def', 'Definizioni (quesito i)'], ['teo', 'Teoremi da enunciare (quesito ii)'], ['ex', 'Esercizi di teoria (quesito iii)']];
  let html = `<summary>${CHEV}<span class="ep-tit">${ICO_ESAME}Domande di teoria agli esami</span>
    <span class="ep-sub">${ES.domande.length} domande da ${ES.prove.length} appelli (a.a. ${anni}) · ${fatte} già fatte a lezione</span></summary>
    <div class="ep-body"><p class="ep-nota">Ogni appello ha 4 temi (A–D), ciascuno con tre quesiti di teoria: (i) una definizione, (ii) un teorema da enunciare, (iii) un esercizio. Il numero a sinistra dice in quanti appelli su ${ES.prove.length} è uscita la domanda. Le domande senza collegamento riguardano argomenti non ancora fatti a lezione.</p>`;
  for (const [t, lab] of gruppi) {
    const ds = ES.domande.filter(d => d.tipo === t).sort((a, b) => b.appelli.length - a.appelli.length || b.links.length - a.links.length);
    if (!ds.length) continue;
    html += `<h3>${lab}</h3><ol class="ep-lista">` + ds.map(d => {
      const link = d.links.length
        ? d.links.map(v => `<a href="#${v.id}" class="ep-voce">Lezione ${v.lez.n} · ${titoloHTML(v)}</a>`).join('')
        : `<span class="ep-manca">${esc(d.nota || 'Non ancora fatta a lezione.')}</span>`;
      return `<li class="${d.links.length ? '' : 'non-fatta'}"><span class="ep-n" title="Uscita in ${appelliTxt(d.appelli.length)} su ${ES.prove.length}">${d.appelli.length}</span>
        <div class="ep-dom"><div class="esq">${md(d.q).replace(/^<p>|<\/p>$/g, '')}</div><ul class="esocc">${occHTML(d)}</ul><div class="ep-links">${link}</div></div></li>`;
    }).join('') + '</ol>';
  }
  p.innerHTML = html + '</div>';
  p.addEventListener('click', e => {
    const a = e.target.closest('a.ep-voce'); if (!a) return;
    // se la voce è nascosta dai filtri, la mostriamo comunque
    if (location.hash === a.getAttribute('href')) { e.preventDefault(); vaiAHash(); }
  });
}

function passaFiltri(v) {
  if (filtri.gruppi.size && !filtri.gruppi.has(v.g)) return false;
  if (filtri.dim && !(v.dim && v.s === 'dim' && v.g !== 'ex')) return false;
  if (filtri.esame.size && !((filtri.esame.has('dir') && v.esDiretta) || (filtri.esame.has('ex') && v.esEx))) return false;
  if (filtri.stati.size) {
    if (!VALUTABILI.has(v.g)) return false;
    const k = String(statoDi(v.id));
    const ok = filtri.stati.has(k) || (filtri.stati.has('oggi') && daRipassare(v.id));
    if (!ok) return false;
  }
  if (filtri.q) { const parole = norm(filtri.q).split(/\s+/).filter(Boolean); if (!parole.every(p => v.cerca.includes(p))) return false; }
  return true;
}
let qPrec = '';
function applicaFiltri() {
  let n = 0;
  for (const l of LEZ) {
    let vis = 0;
    for (const v of l.voci) {
      const ok = passaFiltri(v); const d = NODI.get(v.id);
      d.hidden = !ok; if (ok) { vis++; n++; }
      if (filtri.q !== qPrec) d.querySelector('.v-tit').innerHTML = titoloHTML(v, filtri.q);
    }
    $('#' + l.id).hidden = !vis;
  }
  qPrec = filtri.q;
  const attivi = filtri.gruppi.size || filtri.stati.size || filtri.esame.size || filtri.q || filtri.dim;
  $('#n-risultati').textContent = attivi ? `${n} ${n === 1 ? 'voce' : 'voci'}` : `${VOCI.length} voci`;
  $('#vuoto').hidden = n > 0;
}

/* ================= Ripasso ================= */
const R = { opz: null, carte: [], i: 0, risposte: new Map(), prima: new Map(), mostrata: false };
const OPZ_DEF = () => ({ modo: 'consigliato', lezioni: LEZ.map(l => l.data), gruppi: ['def', 'teo', 'ex'], stati: ['0', '1', '-1'], quante: 20, ordine: 'priorita', dim: true, soloEsame: false });
let opzSalvate = null;
try { opzSalvate = JSON.parse(localStorage.getItem('a1-opz') || 'null'); } catch (e) {}

function candidati(o) {
  const lez = new Set(o.lezioni), gr = new Set(o.gruppi), st = new Set(o.stati);
  return VOCI.filter(v => VALUTABILI.has(v.g) && lez.has(v.lez.data) && gr.has(v.g) && (!o.soloEsame || v.esami) &&
    (o.modo === 'consigliato' ? daRipassare(v.id) : st.has(String(statoDi(v.id)))));
}
function priorita(v) { const k = statoDi(v.id); return k === 0 ? 0 : k === 1 ? 1 : k === -1 ? 2 : 3; }
function mescola(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; }
function preparaCarte(o) {
  let c = candidati(o);
  if (o.ordine === 'casuale') mescola(c);
  else if (o.ordine === 'priorita') { mescola(c); c.sort((a, b) => priorita(a) - priorita(b) || ((P[a.id] || {}).due || 0) - ((P[b.id] || {}).due || 0)); }
  if (o.quante !== 'tutte') c = c.slice(0, o.quante);
  if (o.ordine === 'cronologico') c.sort((a, b) => VOCI.indexOf(a) - VOCI.indexOf(b));
  return c;
}

function apriRipasso(pre = {}) {
  const o = Object.assign(OPZ_DEF(), opzSalvate || {}, pre.modo ? { modo: pre.modo } : {});
  if (pre.lezioni) { o.lezioni = pre.lezioni; o.modo = 'scelgo'; o.stati = ['0', '1', '-1', '2']; }
  o.lezioni = o.lezioni.filter(d => LEZ.some(l => l.data === d));
  if (!pre.lezioni && opzSalvate) { const nuove = LEZ.map(l => l.data).filter(d => !(opzSalvate.tutteViste || []).includes(d)); o.lezioni = [...new Set(o.lezioni.concat(nuove))]; }
  R.opz = o;
  $('#ripasso').hidden = false; document.body.style.overflow = 'hidden';
  if (pre.avvia && preparaCarte(o).length) return avvia();
  mostraSetup();
}
function chiudiRipasso() { $('#ripasso').hidden = true; document.body.style.overflow = ''; R.carte = []; aggiornaConteggi(); }

function seg(nome, scelte, val) {
  return `<div class="seg" data-seg="${nome}">${scelte.map(([v, l]) => `<button type="button" data-v="${v}" aria-pressed="${String(v) === String(val)}">${l}</button>`).join('')}</div>`;
}
function mostraSetup() {
  const o = R.opz;
  $('#rip-bar').style.width = '0'; $('#rip-count').textContent = '';
  const body = $('#rip-body');
  const nLez = d => VOCI.filter(v => v.lez.data === d && VALUTABILI.has(v.g)).length;
  body.innerHTML = `<div class="setup">
    <h1>Nuovo ripasso</h1>
    <p>Leggi il titolo, prova a enunciare (e dimostrare) a voce o su un foglio, poi scopri la risposta e valutati. Alla fine i progressi si aggiornano da soli.</p>
    <div class="box"><h3>Cosa ripassare</h3>
      <div class="opt-row">${seg('modo', [['consigliato', 'Consigliato'], ['scelgo', 'Scelgo io']], o.modo)}</div>
      <p class="spiega" style="margin:10px 0 0;color:var(--ink2);font-size:.88rem" id="spiega-modo"></p>
      <div class="checks" id="ck-stati" style="margin-top:10px"></div>
    </div>
    <div class="box"><h3>Tipi</h3><div class="checks" id="ck-gruppi"></div></div>
    <div class="box"><h3>Lezioni <span><button type="button" id="lez-tutte">Tutte</button><button type="button" id="lez-nessuna">Nessuna</button></span></h3><div class="checks" id="ck-lez"></div></div>
    <div class="box"><h3>Opzioni</h3>
      <div class="opt-row" style="margin-bottom:12px"><span>Quante</span>${seg('quante', [[10, '10'], [20, '20'], [40, '40'], ['tutte', 'Tutte']], o.quante)}</div>
      <div class="opt-row" style="margin-bottom:12px"><span>Ordine</span>${seg('ordine', [['priorita', 'Prima le più deboli'], ['casuale', 'Casuale'], ['cronologico', 'Cronologico']], o.ordine)}</div>
      <div class="opt-row" style="margin-bottom:8px"><label class="toggle"><input type="checkbox" id="opt-dim" ${o.dim ? 'checked' : ''}> Apri subito anche la dimostrazione nella risposta</label></div>
      ${ES.domande.length ? `<div class="opt-row"><label class="toggle"><input type="checkbox" id="opt-esame" ${o.soloEsame ? 'checked' : ''}> Solo voci chieste agli esami (o utili per gli esercizi d’esame)</label></div>` : ''}
    </div>
    <div class="start-row"><span class="tot"><b id="n-carte">0</b> voci selezionate</span>
      <button class="btn btn-primary btn-lg" id="btn-avvia"><svg viewBox="0 0 24 24"><path d="M8 5l11 7-11 7z"/></svg>Inizia</button></div>
  </div>`;
  const ckS = $('#ck-stati'), ckG = $('#ck-gruppi'), ckL = $('#ck-lez');
  const cnt = k => VOCI.filter(v => VALUTABILI.has(v.g) && String(statoDi(v.id)) === k).length;
  ckS.innerHTML = K.map(x => `<label class="check"><input type="checkbox" value="${x.k}" ${o.stati.includes(String(x.k)) ? 'checked' : ''}><i class="dot ${x.cls}"></i>${x.lab}<small>${cnt(String(x.k))}</small></label>`).join('');
  ckG.innerHTML = GRUPPI.filter(g => VALUTABILI.has(g.g)).map(g => `<label class="check"><input type="checkbox" value="${g.g}" ${o.gruppi.includes(g.g) ? 'checked' : ''}><i class="dot" style="background:${g.c}"></i>${g.lab}<small>${VOCI.filter(v => v.g === g.g).length}</small></label>`).join('');
  ckL.innerHTML = LEZ.slice().reverse().map(l => `<label class="check"><input type="checkbox" value="${l.data}" ${o.lezioni.includes(l.data) ? 'checked' : ''}><span><b>${fmtData(l.data)}</b> ${esc(l.titolo)}</span><small>${nLez(l.data)}</small></label>`).join('');
  const leggi = () => {
    o.stati = [...ckS.querySelectorAll('input:checked')].map(i => i.value);
    o.gruppi = [...ckG.querySelectorAll('input:checked')].map(i => i.value);
    o.lezioni = [...ckL.querySelectorAll('input:checked')].map(i => i.value);
    o.dim = $('#opt-dim').checked;
    o.soloEsame = !!($('#opt-esame') && $('#opt-esame').checked);
    ckS.hidden = o.modo !== 'scelgo';
    $('#spiega-modo').textContent = o.modo === 'consigliato'
      ? 'Le voci che non sai, che sai male o che non hai mai valutato, più quelle che sapevi ma che è ora di rivedere (dopo 1, 2, 4, 7, 15 giorni).'
      : 'Scegli tu in base a come le sai:';
    const n = candidati(o).length, m = o.quante === 'tutte' ? n : Math.min(n, o.quante);
    $('#n-carte').textContent = m;
    $('#btn-avvia').disabled = !m;
  };
  body.querySelectorAll('.seg').forEach(sg => sg.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    sg.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b));
    const v = b.dataset.v; o[sg.dataset.seg] = isNaN(+v) ? v : +v; leggi();
  }));
  body.addEventListener('change', leggi);
  $('#lez-tutte').onclick = () => { ckL.querySelectorAll('input').forEach(i => i.checked = true); leggi(); };
  $('#lez-nessuna').onclick = () => { ckL.querySelectorAll('input').forEach(i => i.checked = false); leggi(); };
  $('#btn-avvia').onclick = avvia;
  leggi();
}

function avvia() {
  const o = R.opz;
  opzSalvate = Object.assign({}, o, { tutteViste: LEZ.map(l => l.data) });
  try { localStorage.setItem('a1-opz', JSON.stringify(opzSalvate)); } catch (e) {}
  R.carte = preparaCarte(o); R.i = 0; R.risposte = new Map(); R.prima = new Map();
  R.carte.forEach(v => R.prima.set(v.id, statoDi(v.id)));
  mostraCarta();
}
function consegna(v) {
  if (v.g === 'def') return 'Enuncia la definizione con precisione.';
  if (v.g === 'ex') return `Risolvi l’esercizio, poi confronta con la soluzione — difficoltà ${stelle(v.diff)} ${DIFF_LAB[v.diff || 1]}.`;
  if (v.g === 'es') return 'Ricostruisci l’esempio.';
  if (v.dim && v.s === 'dim') return `Enuncia (ipotesi e tesi) e <b>scrivi subito la dimostrazione</b> — difficoltà ${stelle(v.diff)} ${DIFF_LAB[v.diff || 1]}.`;
  if (v.dim) return 'Enuncia. La dimostrazione non è stata fatta a lezione, ma c’è come extra.';
  return 'Enuncia con ipotesi e tesi.';
}
function mostraCarta() {
  const v = R.carte[R.i];
  if (!v) return fine();
  R.mostrata = false;
  $('#rip-bar').style.width = (R.i / R.carte.length * 100) + '%';
  $('#rip-count').textContent = `${R.i + 1} / ${R.carte.length}`;
  const col = { def: 'var(--c-def)', teo: 'var(--c-teo)', ex: 'var(--c-ex)', es: 'var(--c-es)' }[v.g];
  const k = statoDi(v.id);
  $('#rip-body').innerHTML = `
    <article class="carta" style="--c:${col}">
      <div class="c-meta"><span class="tag" style="--c:${col};--cb:color-mix(in srgb,${col} 14%,var(--card))">${TIPI[v.t].lab}</span>
        ${chipDim(v)}${chipEsame(v)}<span>Lezione del ${fmtData(v.lez.data, true)}</span>
        <span class="prima"><i class="dot ${K.find(x => x.k === k).cls}"></i> ${KLAB[k]}</span></div>
      <h2>${titoloHTML(v)}</h2>
      <div class="consegna">${consegna(v)}</div>
      <div id="risp"></div>
    </article>
    <div class="azioni" id="azioni"><button class="btn btn-primary btn-lg mostra" id="btn-mostra">Mostra risposta <kbd style="opacity:.6;font-size:.75em;margin-left:6px">Spazio</kbd></button></div>`;
  $('#btn-mostra').onclick = rivela;
  $('#rip-body').scrollIntoView({ block: 'start' });
  $('#ripasso').scrollTop = 0;
}
function rivela() {
  if (R.mostrata) return;
  R.mostrata = true;
  const v = R.carte[R.i];
  let html = `<div class="risposta"><div class="lab">${v.g === 'def' ? 'Definizione' : v.g === 'ex' ? 'Testo' : 'Enunciato'}</div><div class="testo">${md(v.testo)}</div>`;
  if (v.fig && FIGURE[v.fig]) html += `<div class="fig">${FIGURE[v.fig]}</div>`;
  if (v.dim) html += `<details class="dimbox" data-tipo="${v.g === 'ex' ? 'sol' : 'dim'}" ${R.opz.dim ? 'open' : ''}><summary>${CHEV}${etichettaDim(v)}</summary><div class="testo">${md(v.dim)}</div></details>`;
  html += boxEsami(v) + '</div>';
  $('#risp').innerHTML = html;
  $('#azioni').innerHTML = K.slice(0, 3).map((x, i) => `<button class="voto" data-k="${x.k}">${x.lab}<kbd>${i + 1}</kbd></button>`).join('');
  $('#azioni').querySelectorAll('.voto').forEach(b => b.onclick = () => vota(+b.dataset.k));
}
function vota(k) {
  if (!R.mostrata) return;
  R.risposte.set(R.carte[R.i].id, k);
  R.i++;
  mostraCarta();
}
function salvaRisposte() {
  const t = Date.now();
  R.risposte.forEach((k, id) => registra(id, k, t));
  salva();
  R.risposte.forEach((_, id) => aggiornaStatoVoce(id));
}
function fine() {
  salvaRisposte();
  $('#rip-bar').style.width = '100%';
  $('#rip-count').textContent = `${R.carte.length} / ${R.carte.length}`;
  const c = { 0: 0, 1: 0, 2: 0 }; R.risposte.forEach(k => c[k]++);
  const freccia = (a, b) => a === -1 ? '<span>nuova</span>' : b > a ? '<span class="su">▲ migliorata</span>' : b < a ? '<span class="giu">▼ peggiorata</span>' : '<span>= uguale</span>';
  const righe = R.carte.map(v => {
    const a = R.prima.get(v.id), b = R.risposte.get(v.id);
    return `<li><i class="dot ${K.find(x => x.k === b).cls}"></i><span class="ct">${titoloHTML(v)}</span><span class="fr">${freccia(a, b)}</span></li>`;
  }).join('');
  const sbagliate = R.carte.filter(v => R.risposte.get(v.id) < 2);
  const prossima = Math.min(...VOCI.filter(v => VALUTABILI.has(v.g) && P[v.id]).map(v => P[v.id].due).filter(d => d > Date.now()), Infinity);
  $('#rip-body').innerHTML = `<div class="fine">
    <h1>Ripasso finito</h1>
    <p>Progressi aggiornati: ${R.carte.length} voci valutate. ${c[2] === R.carte.length ? 'Tutto perfetto, ottimo lavoro.' : 'Le voci che non sapevi ti torneranno davanti per prime al prossimo ripasso.'}</p>
    <div class="stat3">
      <div style="--kc:var(--k-ok)"><b>${c[2]}</b><span>Perfettamente</span></div>
      <div style="--kc:var(--k-male)"><b>${c[1]}</b><span>Male</span></div>
      <div style="--kc:var(--k-non)"><b>${c[0]}</b><span>Non la so</span></div>
    </div>
    <div class="box"><h3>Rispetto a prima</h3><ul class="cambi">${righe}</ul></div>
    ${isFinite(prossima) ? `<p style="font-size:.88rem">Le voci che sai perfettamente torneranno da ripassare a partire da ${new Date(prossima).toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric', month: 'long' })}.</p>` : ''}
    <div class="fine-actions">
      ${sbagliate.length ? `<button class="btn btn-primary" id="f-rifai">Ripeti le ${sbagliate.length} da migliorare</button>` : ''}
      <button class="btn" id="f-nuovo">Nuovo ripasso</button>
      <button class="btn btn-ghost" id="f-chiudi">Torna agli appunti</button>
    </div></div>`;
  const ids = sbagliate.map(v => v.id);
  if (ids.length) $('#f-rifai').onclick = () => {
    R.carte = mescola(ids.map(id => PER_ID.get(id))); R.i = 0; R.risposte = new Map(); R.prima = new Map();
    R.carte.forEach(v => R.prima.set(v.id, statoDi(v.id))); mostraCarta();
  };
  $('#f-nuovo').onclick = mostraSetup;
  $('#f-chiudi').onclick = chiudiRipasso;
  R.carte = []; R.risposte = new Map();
}
function chiedi(tit, msg, scelte) {
  return new Promise(res => {
    const d = $('#dlg-conferma');
    $('#conf-tit').textContent = tit; $('#conf-msg').textContent = msg;
    const az = $('#conf-azioni'); az.innerHTML = '';
    scelte.forEach(([val, lab, cls]) => {
      const b = h('button', { type: 'button', class: 'btn ' + (cls || '') }, lab);
      b.onclick = () => { d.close(); res(val); };
      az.appendChild(b);
    });
    d.onclose = () => res(null);
    d.showModal();
  });
}
async function esci() {
  if (R.carte.length && R.risposte.size) {
    const r = await chiedi('Interrompere il ripasso?', `Hai già valutato ${R.risposte.size} ${R.risposte.size === 1 ? 'voce' : 'voci'}.`,
      [['salva', 'Salva ed esci', 'btn-primary'], ['scarta', 'Esci senza salvare'], [null, 'Continua', 'btn-ghost']]);
    if (!r) return;
    if (r === 'salva') salvaRisposte();
  }
  chiudiRipasso();
}

document.addEventListener('keydown', e => {
  if ($('#ripasso').hidden || !R.carte.length || e.target.closest('input,textarea')) return;
  if (e.key === ' ' || e.key === 'Enter') { if (!R.mostrata) { e.preventDefault(); rivela(); } }
  else if (['1', '2', '3'].includes(e.key)) vota(+e.key - 1);
  else if (e.key === 'Escape' && !$('#dlg-conferma').open) esci();
});

/* ================= Navigazione, tema, backup ================= */
function apriMenu() { $('#sidebar').classList.add('aperta'); $('#scrim').classList.add('on'); }
function chiudiMenu() { $('#sidebar').classList.remove('aperta'); $('#scrim').classList.remove('on'); }

function vaiAHash() {
  const id = decodeURIComponent(location.hash.slice(1)); if (!id) return;
  const d = NODI.get(id);
  if (d) { d.hidden = false; d.closest('.lezione').hidden = false; d.open = true; setTimeout(() => d.scrollIntoView({ block: 'start' }), 30); }
}

function osservaLezioni() {
  const links = new Map([...document.querySelectorAll('#lista-lezioni a')].map(a => [a.dataset.l, a]));
  const io = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) { links.forEach(a => a.classList.remove('attiva')); const a = links.get(e.target.id); if (a) a.classList.add('attiva'); } });
  }, { rootMargin: '-70px 0px -70% 0px' });
  LEZ.forEach(l => io.observe(document.getElementById(l.id)));
}

function init() {
  costruisciPagina();
  costruisciChipTipo();
  costruisciPannelloEsami();
  aggiornaConteggi();
  applicaFiltri();
  osservaLezioni();

  let qt;
  $('#q').addEventListener('input', e => { clearTimeout(qt); qt = setTimeout(() => { filtri.q = e.target.value.trim(); applicaFiltri(); }, 120); });
  $('#btn-apri').onclick = () => NODI.forEach(d => { if (!d.hidden) d.open = true; });
  $('#btn-chiudi').onclick = () => NODI.forEach(d => d.open = false);
  $('#btn-ripasso').onclick = () => apriRipasso();
  $('#rip-esci').onclick = esci;
  $('#btn-menu').onclick = apriMenu;
  $('#btn-chiudi-menu').onclick = chiudiMenu;
  $('#scrim').onclick = chiudiMenu;
  $('#btn-cerca').onclick = () => { $('.topbar').classList.toggle('cerca'); if ($('.topbar').classList.contains('cerca')) $('#q').focus(); };
  $('#btn-tema').onclick = () => {
    const scuro = document.documentElement.dataset.theme ? document.documentElement.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    const t = scuro ? 'light' : 'dark';
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem('a1-tema', t); } catch (e) {}
  };
  const dlg = $('#dlg-backup');
  $('#btn-impostazioni').onclick = () => dlg.showModal();
  $('#btn-export').onclick = () => {
    const blob = new Blob([JSON.stringify({ app: 'analisi1-ripasso', v: 1, data: new Date().toISOString(), progressi: P }, null, 1)], { type: 'application/json' });
    const a = h('a', { href: URL.createObjectURL(blob), download: `analisi1-progressi-${new Date().toISOString().slice(0, 10)}.json` });
    document.body.appendChild(a); a.click(); a.remove();
  };
  $('#file-import').onchange = async e => {
    const f = e.target.files[0]; if (!f) return;
    try {
      ripristina(JSON.parse(await f.text()));
    } catch (err) { toast('File non valido'); }
    e.target.value = '';
  };
  const ripristina = j => { if (!j || !j.progressi) throw 0; P = j.progressi; salva(); VOCI.forEach(v => aggiornaStatoVoce(v.id)); aggiornaConteggi(); dlg.close(); toast('Backup ripristinato'); };
  const testoBackup = () => JSON.stringify({ app: 'analisi1-ripasso', v: 1, data: new Date().toISOString(), progressi: P });
  $('#btn-copia').onclick = () => {
    const t = testoBackup();
    navigator.clipboard.writeText(t).then(() => toast('Backup copiato negli appunti')).catch(() => { const a = $('#txt-import'); a.value = t; a.select(); toast('Selezionato: copialo con Ctrl/Cmd+C'); });
  };
  $('#btn-incolla').onclick = () => { try { ripristina(JSON.parse($('#txt-import').value)); } catch (e) { toast('Testo non valido'); } };
  $('#btn-reset').onclick = async () => {
    dlg.close();
    const r = await chiedi('Azzerare tutti i progressi?', 'Tutte le valutazioni verranno cancellate. Non si può annullare.', [['si', 'Azzera tutto', 'btn-danger'], [null, 'Annulla', 'btn-ghost']]);
    if (r === 'si') { P = {}; salva(); VOCI.forEach(v => aggiornaStatoVoce(v.id)); aggiornaConteggi(); toast('Progressi azzerati'); }
  };
  window.addEventListener('hashchange', vaiAHash);
  vaiAHash();
  if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => {});
}
init();
})();
