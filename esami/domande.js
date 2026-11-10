/* Domande di teoria chieste agli appelli (fonte: esami24-25.pdf ed esami25-26.pdf).
 *
 * prove:   gli appelli, con id = data (AAAA-MM-GG).
 * domande: una voce per domanda. Campi:
 *   q       testo della domanda (Markdown + LaTeX, come nelle lezioni)
 *   tipo    "def" (definizione), "teo" (teorema), "ex" (quesito (iii): esercizio teorico)
 *   chiesta elenco "AAAA-MM-GG TEMA QUESITO", es. "2025-01-20 A i"
 *   voci    voci del sito collegate: [data lezione, titolo esatto della voce]
 *   nota    (facoltativa) spiegazione, es. se l'argomento non è ancora stato fatto
 *
 * Dopo una modifica: python3 tools/build.py (e node tools/check.js lezioni per controllare i collegamenti).
 */
window.ESAMI = {
prove: [
  { id: "2025-01-20", aa: "2024/25", fonte: "esami24-25.pdf" },
  { id: "2025-02-10", aa: "2024/25", fonte: "esami24-25.pdf" },
  { id: "2025-06-30", aa: "2024/25", fonte: "esami24-25.pdf" },
  { id: "2025-09-08", aa: "2024/25", fonte: "esami24-25.pdf" },
  { id: "2026-01-19", aa: "2025/26", fonte: "esami25-26.pdf" },
  { id: "2026-02-09", aa: "2025/26", fonte: "esami25-26.pdf" },
  { id: "2026-06-29", aa: "2025/26", fonte: "esami25-26.pdf" },
  { id: "2026-09-07", aa: "2025/26", fonte: "esami25-26.pdf" },
],
domande: [

/* ---------- Definizioni ---------- */
{ tipo: "def", q: R`Definizione di limite di funzione in un punto`,
  chiesta: ["2025-01-20 A i", "2025-06-30 D i", "2025-09-08 A i", "2026-01-19 A i", "2026-06-29 A i"],
  voci: [["2026-10-15", "Definizione di limite"]] },

{ tipo: "def", q: R`Definizione di funzione continua in un punto`,
  chiesta: ["2025-01-20 B i", "2025-01-20 D i", "2025-06-30 B i", "2025-09-08 B i", "2025-09-08 D i",
            "2026-01-19 B i", "2026-01-19 D i", "2026-06-29 D i", "2026-09-07 A i", "2026-09-07 C i"],
  voci: [], nota: "Non ancora fatta a lezione." },

{ tipo: "def", q: R`Definizione di funzione derivabile in un punto`,
  chiesta: ["2025-01-20 C i", "2025-06-30 C i", "2025-09-08 C i", "2026-01-19 C i", "2026-06-29 C i", "2026-09-07 B i"],
  voci: [], nota: "Non ancora fatta a lezione." },

{ tipo: "def", q: R`Definizione di funzione primitiva`,
  chiesta: ["2025-02-10 A i", "2025-06-30 A i", "2026-06-29 B i", "2026-09-07 D i"],
  voci: [], nota: "Non ancora fatta a lezione." },

{ tipo: "def", q: R`Definizione di massimo globale (o assoluto) di una funzione`,
  chiesta: ["2025-02-10 B i"],
  voci: [["2026-10-13", "Sup, inf, max, min di una funzione; punti estremanti"]] },

{ tipo: "def", q: R`Definizione di minimo globale (o assoluto) di una funzione`,
  chiesta: ["2025-02-10 C i"],
  voci: [["2026-10-13", "Sup, inf, max, min di una funzione; punti estremanti"]] },

{ tipo: "def", q: R`Definizione di funzione assolutamente integrabile`,
  chiesta: ["2025-02-10 D i"],
  voci: [], nota: "Non ancora fatta a lezione." },

{ tipo: "def", q: R`Definizioni di maggiorante di un insieme e di insieme inferiormente limitato in $\mathbb R$`,
  chiesta: ["2026-02-09 A i"],
  voci: [["2026-10-05", "Maggiorante, minorante, insieme limitato"]] },

{ tipo: "def", q: R`Dati $n,k\in\mathbb N_0$ con $n\ge k$, definizioni di $n!$ e di $\binom nk$`,
  chiesta: ["2026-02-09 B i"],
  voci: [["2026-10-01", "Fattoriale"], ["2026-10-01", "Coefficiente binomiale"]] },

{ tipo: "def", q: R`Definizione di funzione tra due insiemi`,
  chiesta: ["2026-02-09 C i"],
  voci: [["2026-10-06", "Funzione"]] },

{ tipo: "def", q: R`Definizione di funzione composta tra insiemi`,
  chiesta: ["2026-02-09 D i"],
  voci: [["2026-10-12", "Funzione composta"]] },

/* ---------- Teoremi ---------- */
{ tipo: "teo", q: R`Teorema di Rolle`,
  chiesta: ["2025-01-20 B ii", "2025-02-10 C ii", "2025-06-30 D ii", "2025-09-08 B ii", "2026-01-19 B ii", "2026-06-29 D ii", "2026-09-07 D ii"],
  voci: [], nota: "Non ancora fatto a lezione." },

{ tipo: "teo", q: R`Teorema di Weierstrass`,
  chiesta: ["2025-01-20 D ii", "2025-06-30 C ii", "2025-09-08 D ii", "2026-01-19 D ii", "2026-06-29 A ii", "2026-09-07 C ii"],
  voci: [], nota: "Non ancora fatto a lezione." },

{ tipo: "teo", q: R`Teorema di Lagrange`,
  chiesta: ["2025-01-20 C ii", "2025-06-30 B ii", "2025-09-08 C ii", "2026-01-19 C ii", "2026-06-29 B ii"],
  voci: [], nota: "Non ancora fatto a lezione." },

{ tipo: "teo", q: R`Teorema di Fermat`,
  chiesta: ["2025-01-20 A ii", "2025-06-30 A ii", "2025-09-08 A ii", "2026-09-07 A ii"],
  voci: [], nota: "Non ancora fatto a lezione." },

{ tipo: "teo", q: R`Teorema di Bolzano`,
  chiesta: ["2026-01-19 A ii", "2026-09-07 B ii"],
  voci: [], nota: "Non ancora fatto a lezione." },

{ tipo: "teo", q: R`Teorema Fondamentale del Calcolo Integrale`,
  chiesta: ["2025-02-10 A ii"],
  voci: [], nota: "Non ancora fatto a lezione." },

{ tipo: "teo", q: R`Teorema della media integrale`,
  chiesta: ["2025-02-10 B ii"],
  voci: [], nota: "Non ancora fatto a lezione." },

{ tipo: "teo", q: R`Teorema di Cauchy`,
  chiesta: ["2025-02-10 D ii"],
  voci: [], nota: "Non ancora fatto a lezione." },

{ tipo: "teo", q: R`Teorema del Binomio di Newton`,
  chiesta: ["2026-02-09 A ii"],
  voci: [["2026-10-01", "Binomio di Newton"]] },

{ tipo: "teo", q: R`Prima forma del Teorema di completezza di $\mathbb R$`,
  chiesta: ["2026-02-09 B ii"],
  voci: [["2026-10-02", R`Completezza di $\mathbb R$ (1ª forma: elemento separatore)`]] },

{ tipo: "teo", q: R`Teorema dei due carabinieri`,
  chiesta: ["2026-02-09 D ii"],
  voci: [["2026-10-22", "Teorema dei due carabinieri"]] },

{ tipo: "teo", q: R`Teorema di Bolzano–Weierstrass`,
  chiesta: ["2026-06-29 C ii"],
  voci: [["2026-11-05", "Teorema di Bolzano–Weierstrass"]] },

{ tipo: "teo", q: R`Criterio di condensazione di Cauchy`,
  chiesta: ["2026-02-09 C ii"],
  voci: [], nota: "Non ancora fatto a lezione." },

/* ---------- Quesiti (iii): esercizi teorici ---------- */
{ tipo: "ex", q: R`Determinare l'insieme dei punti di accumulazione di $A = \lbrace 2\sin x : x\in\mathbb Q\rbrace$, giustificando la risposta (negli altri temi: $3\cos x$, $4\sin x$, $5\cos x$).`,
  chiesta: ["2026-02-09 A iii", "2026-02-09 B iii", "2026-02-09 C iii", "2026-02-09 D iii"],
  voci: [["2026-10-13", "Punto di accumulazione"], ["2026-10-15", R`Ogni reale è di accumulazione per $\mathbb Q$`]] },

{ tipo: "ex", q: R`Determinare l'insieme $A = \lbrace n\in\mathbb N : 7^n < n^2\rbrace$ giustificando rigorosamente la risposta (negli altri temi: $5^n$, $4^n$, $6^n$).`,
  chiesta: ["2026-09-07 A iii", "2026-09-07 B iii", "2026-09-07 C iii", "2026-09-07 D iii"],
  voci: [["2026-09-29", "Principio di induzione"], ["2026-10-01", R`$3^n \ge n^2$ per ogni $n\in\mathbb N$`]] },

{ tipo: "ex", q: R`Siano $x_0\in\mathbb R$ e $f:\mathbb R\to\mathbb R$ tali che $\lim_{x\to x_0}\sin(f(x)) = 1$. È vero che $\lim_{x\to x_0}f(x) = \frac\pi2$? Se sì dimostrarlo, se no dare un controesempio (negli altri temi con $\cos$ e altri valori).`,
  chiesta: ["2026-01-19 A iii", "2026-01-19 B iii", "2026-01-19 C iii", "2026-01-19 D iii"],
  voci: [], nota: "Riguarda i limiti (lezioni 11–17), ma non corrisponde a una voce precisa del sito." },

{ tipo: "ex", q: R`Siano $a<b$ e $f,g\in C^0([a,b])$ con $f(a)<g(a)$ e $f(b)>g(b)$. Dimostrare che esiste $c\in(a,b)$ tale che $f(c)^4 = f(c)^2g(c)^2$ (varianti negli altri temi).`,
  chiesta: ["2025-01-20 A iii", "2025-01-20 B iii", "2025-01-20 C iii", "2025-01-20 D iii"],
  voci: [], nota: "Serve il teorema di Bolzano: non ancora fatto a lezione." },

{ tipo: "ex", q: R`Sia $f\in C^0([0,1])$ derivabile in $(0,1)$ e $a\in\mathbb R$. Dimostrare che $f'(x) = a$ per ogni $x\in(0,1)$ se e solo se $f(x) = ax-a+f(1)$ per ogni $x\in[0,1]$ (varianti negli altri temi).`,
  chiesta: ["2025-02-10 A iii", "2025-02-10 B iii", "2025-02-10 C iii", "2025-02-10 D iii"],
  voci: [], nota: "Serve il teorema di Lagrange: non ancora fatto a lezione." },

{ tipo: "ex", q: R`Sia $f:\mathbb R\to\mathbb R$ derivabile con $f(0) = 2$ e $f(1) = 0$. Dimostrare che esiste $a\in\mathbb R$ tale che $f(a)^2 = a^3$ (varianti negli altri temi).`,
  chiesta: ["2025-06-30 A iii", "2025-06-30 B iii", "2025-06-30 C iii", "2025-06-30 D iii"],
  voci: [], nota: "Serve il teorema di Bolzano: non ancora fatto a lezione." },

{ tipo: "ex", q: R`Sia $f:\mathbb R\to\mathbb R$ derivabile con $\lim_{x\to-\infty}f(x) = -1$, $\lim_{x\to+\infty}f(x) = 1$ e $f'(x)>0$ per ogni $x$. Dimostrare che esiste un unico $a\in\mathbb R$ tale che $f(a) = 0$ (varianti negli altri temi).`,
  chiesta: ["2025-09-08 A iii", "2025-09-08 B iii", "2025-09-08 C iii", "2025-09-08 D iii"],
  voci: [], nota: "Servono il teorema di Bolzano e il legame derivata–monotonia: non ancora fatti a lezione." },

{ tipo: "ex", q: R`Determinare quanti elementi ha l'insieme $A = \lbrace x\in[0,1] : (3e^x-12x)^3 = 0\rbrace$, giustificando la risposta (varianti negli altri temi).`,
  chiesta: ["2026-06-29 A iii", "2026-06-29 B iii", "2026-06-29 C iii", "2026-06-29 D iii"],
  voci: [], nota: "Servono il teorema di Bolzano e lo studio della monotonia: non ancora fatti a lezione." },

]};
