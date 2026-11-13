L({ data: "2026-11-10", n: 26, titolo: "Code, condizione necessaria, confronto, convergenza assoluta", voci: [

{ t: "oss", titolo: R`Dalle somme parziali al termine generale`, testo: R`
Data $(a_n)_{n\in\mathbb N}$ abbiamo costruito $(S_k)_{k\in\mathbb N}$ ponendo $S_k = \sum_{n=1}^ka_n$. Viceversa, data $(S_k)_{k\in\mathbb N}$ possiamo ricavare $(a_n)_{n\in\mathbb N}$ calcolando
$$a_n = S_n-S_{n-1}\qquad\forall n\in\mathbb N,\qquad\text{dove } S_0 = 0.$$
Come per le successioni, ci servono **criteri** per dire se una serie converge o meno.` },

{ t: "def", titolo: R`Coda di una serie`, testo: R`
Cambiare una quantità **finita** di termini di $(a_n)$ **non cambia la natura** della serie (convergente, divergente o indeterminata), anche se può cambiarne la somma. Infatti, per ogni $k\ge N$ con $N\in\mathbb N$ fissato,
$$S_k = \underbrace{\sum_{n=1}^{N-1}a_n}_{\text{numero fisso}}+\underbrace{\sum_{n=N}^ka_n}_{\text{coda della somma parziale}}.$$

**Def.** Dato $m\in\mathbb N$, la serie
$$\sum_{n=m}^{+\infty}a_n$$
è detta **coda** della serie $\sum_{n=1}^{+\infty}a_n$.

Quindi studiare la convergenza di una serie equivale a studiare la convergenza di una sua coda.` },

{ t: "teo", s: "dim", diff: 1, titolo: R`Linearità delle serie convergenti`, testo: R`
Se $\sum_{n=1}^{+\infty}a_n$ e $\sum_{n=1}^{+\infty}b_n$ convergono, allora converge anche
$$\sum_{n=1}^{+\infty}(\alpha a_n+\beta b_n)\qquad\forall\alpha,\beta\in\mathbb R,$$
e vale
$$\sum_{n=1}^{+\infty}(\alpha a_n+\beta b_n) = \alpha\sum_{n=1}^{+\infty}a_n+\beta\sum_{n=1}^{+\infty}b_n.$$`, dim: R`
Basta applicare l'algebra dei limiti finiti alle successioni delle somme parziali: se $S_k^a = \sum_{n=1}^ka_n$ e $S_k^b = \sum_{n=1}^kb_n$, allora
$$\sum_{n=1}^k(\alpha a_n+\beta b_n) = \alpha S_k^a+\beta S_k^b\xrightarrow[k\to+\infty]{}\alpha\sum_{n=1}^{+\infty}a_n+\beta\sum_{n=1}^{+\infty}b_n. \ \blacksquare$$` },

{ t: "teo", s: "dim", diff: 1, titolo: R`Condizione necessaria per la convergenza`, testo: R`
Quando una serie converge, il suo termine generale deve essere infinitesimo:
$$\sum_{n=1}^{+\infty}a_n\ \text{convergente}\ \Longrightarrow\ \lim_{n\to+\infty}a_n = 0.$$`, dim: R`
In base all'osservazione precedente, $a_n = S_n-S_{n-1}$. Se la serie converge, $S_n\to S := \sum_{n=1}^{+\infty}a_n\in\mathbb R$ e anche $S_{n-1}\to S$. Quindi
$$a_n = S_n-S_{n-1}\xrightarrow[n\to+\infty]{}S-S = 0. \ \blacksquare$$` },

{ t: "oss", titolo: R`Applicazione: dimostrare che una serie NON converge`, testo: R`
La condizione necessaria si usa per dimostrare che una serie **non converge** (cioè o è divergente a $\pm\infty$ o è irregolare):
$$\lim_{n\to+\infty}a_n\neq0\ \ (\text{o non esiste})\quad\Longrightarrow\quad\sum_{n=1}^{+\infty}a_n\ \text{NON converge}.$$
Esempi:
- $a_n = (-1)^n$: $\nexists\lim a_n$, quindi $\sum(-1)^n$ non converge (è irregolare);
- $a_n = 1$ per ogni $n$: $\lim a_n = 1\neq0$, quindi $\sum1$ non converge (diverge a $+\infty$).` },

{ t: "att", titolo: R`La condizione è SOLO necessaria`, testo: R`
**Non** vale il viceversa: $\lim a_n = 0\ \not\Rightarrow\ \sum a_n$ converge. Infatti:
- $a_n = \frac1n\to0$, **ma** $\sum_{n=1}^{+\infty}\frac1n = +\infty$;
- $a_n = \frac1{n^2}\to0$, **e** $\sum_{n=1}^{+\infty}\frac1{n^2}\in\mathbb R$.

Con $a_n\to0$ può succedere di tutto.` },

{ t: "def", titolo: R`Serie a termini definitivamente positivi`, testo: R`
Data $(a_n)_{n\in\mathbb N}$, se $a_n\ge0$ definitivamente, la serie $\sum_{n=1}^{+\infty}a_n$ si dice **a termini definitivamente positivi**.` },

{ t: "prop", s: "dim", diff: 1, titolo: R`Serie a termini positivi: convergono o divergono a $+\infty$`, testo: R`
Se $\sum_{n=1}^{+\infty}a_n$ è a termini definitivamente positivi, allora ammette limite finito o $+\infty$, cioè **converge o diverge a $+\infty$** (non può essere irregolare).`, dim: R`
Infatti $S_{k+1} = S_k+a_{k+1}\ge S_k$ definitivamente, perché $a_{k+1}\ge0$ definitivamente. Quindi $(S_k)_{k\in\mathbb N}$ è definitivamente monotona crescente, e per il teorema sulle successioni monotone
$$\sum_{n=1}^{+\infty}a_n = \lim_{k\to+\infty}S_k = \sup_{k\ge N}S_k\in\mathbb R\cup\lbrace+\infty\rbrace. \ \blacksquare$$` },

{ t: "teo", s: "dim", diff: 1, titolo: R`Criterio del confronto per serie`, testo: R`
Se $0\le a_n\le b_n$ definitivamente, allora:
1. $\displaystyle\sum_{n=1}^{+\infty}b_n$ converge $\ \Rightarrow\ \displaystyle\sum_{n=1}^{+\infty}a_n$ converge;
2. $\displaystyle\sum_{n=1}^{+\infty}a_n$ diverge $\ \Rightarrow\ \displaystyle\sum_{n=1}^{+\infty}b_n$ diverge a $+\infty$.`, dim: R`
Segue dal confronto delle **code** delle somme parziali. Infatti esiste $N\in\mathbb N$ tale che
$$0\le a_n\le b_n\qquad\forall n\ge N,$$
e quindi, sommando termine a termine,
$$0\le\sum_{n=N}^ka_n\le\sum_{n=N}^kb_n\qquad\forall k\ge N.$$
Entrambe le code sono crescenti, quindi hanno limite (proposizione precedente); basta allora applicare il confronto per successioni:
1. se $\sum b_n$ converge, la coda di destra ha limite finito, quindi anche quella di sinistra: $\sum a_n$ converge;
2. se $\sum a_n$ diverge (a $+\infty$, essendo a termini positivi), la coda di sinistra tende a $+\infty$, quindi anche quella di destra (singolo carabiniere). $\blacksquare$` },

{ t: "es", titolo: R`$1\le\sum\frac1{n^2}\le2$ con il confronto e Mengoli`, testo: R`
Sappiamo (Mengoli) che $\displaystyle\sum_{n=1}^{+\infty}\frac1{n(n+1)} = 1$. Osserviamo che
$$\frac1{n^2}\ge\frac1{n(n+1)}\qquad\forall n\in\mathbb N,$$
e quindi per confronto termine a termine $\displaystyle\sum_{n=1}^{+\infty}\frac1{n^2}\ge1$. Inoltre abbiamo anche che
$$\frac1{n^2}\le\frac2{n(n+1)}\iff n(n+1)\le2n^2\iff n+1\le2n\iff1\le n,$$
vero per ogni $n\in\mathbb N$, e quindi di nuovo per confronto termine a termine (e linearità) $\displaystyle\sum_{n=1}^{+\infty}\frac1{n^2}\le2\cdot1 = 2$. Quindi
$$\sum_{n=1}^{+\infty}\frac1{n^2}\in[1,2].$$
(Il valore esatto è $\frac{\pi^2}6\approx1{,}645$.)` },

{ t: "oss", titolo: R`Serie a termini definitivamente negativi`, testo: R`
Quanto detto fin qui per le serie a termini definitivamente positivi si applica anche a quelle a termini definitivamente **negativi**, **cambiando il segno** alla successione: $\sum a_n$ con $a_n\le0$ si studia tramite $\sum(-a_n)$, a termini positivi.` },

{ t: "def", titolo: R`Convergenza assoluta`, testo: R`
Data $(a_n)_{n\in\mathbb N}$, la serie $\sum_{n=1}^{+\infty}a_n$ si dice **assolutamente convergente** se la serie
$$\sum_{n=1}^{+\infty}|a_n|$$
è convergente.` },

{ t: "teo", s: "dim", diff: 2, titolo: R`Convergenza assoluta ⇒ convergenza semplice`, testo: R`
Se $\sum_{n=1}^{+\infty}a_n$ è assolutamente convergente, allora la serie $\sum_{n=1}^{+\infty}a_n$ è convergente (o semplicemente convergente), cioè
$$\sum_{n=1}^{+\infty}|a_n|\ \text{converge}\ \Longrightarrow\ \sum_{n=1}^{+\infty}a_n\ \text{converge}.$$
Inoltre in tal caso (proposizione dimostrata il 12/11)
$$\left|\sum_{n=1}^{+\infty}a_n\right|\le\sum_{n=1}^{+\infty}|a_n|.$$

**Il viceversa NON vale** (controesempio qui sotto, del 12/11).`, dim: R`
Prendo $b_n = a_n+|a_n|$ per ogni $n\in\mathbb N$. Osservo che:
- $b_n\ge0$ per ogni $n$ (perché $a_n\ge-|a_n|$);
- $b_n\le2|a_n|$ per ogni $n$ (perché $a_n\le|a_n|$),

cioè $0\le b_n\le2|a_n|$ per ogni $n\in\mathbb N$. Quindi:
$$\sum|a_n|\ \text{converge (per ipotesi)}\ \Rightarrow\ \sum2|a_n|\ \text{converge}\ \overset{\text{confronto}}{\Longrightarrow}\ \sum b_n\ \text{converge}.$$
Ma $a_n = b_n-|a_n|$, e quindi
$$S_k = \sum_{n=1}^ka_n = \sum_{n=1}^kb_n-\sum_{n=1}^k|a_n|\xrightarrow[k\to+\infty]{}\sum_{n=1}^{+\infty}b_n-\sum_{n=1}^{+\infty}|a_n|\in\mathbb R$$
(linearità: entrambe convergono), da cui segue che $\sum_{n=1}^{+\infty}a_n$ è convergente.

**Disuguaglianza** (lezione del 12/11). Siano
$$S_k = \sum_{n=1}^ka_n,\qquad T_k = \sum_{n=1}^k|a_n|\qquad\forall k\in\mathbb N.$$
Allora $S_k\to\sum_{n=1}^{+\infty}a_n$ per il teorema appena visto, mentre $T_k\to\sum_{n=1}^{+\infty}|a_n|$. Abbiamo inoltre che
$$|S_k| = \left|\sum_{n=1}^ka_n\right|\le\sum_{n=1}^k|a_n| = T_k\qquad\forall k\in\mathbb N,$$
dimostrata per induzione su $k$ (il passo usa la disuguaglianza triangolare: $|S_{k+1}| = |S_k+a_{k+1}|\le|S_k|+|a_{k+1}|\le T_k+|a_{k+1}| = T_{k+1}$). La tesi segue passando al limite per $k\to+\infty$ (anche $|S_k|\to\left|\sum a_n\right|$). $\blacksquare$` },

{ t: "es", titolo: R`Controesempio: $\sum\frac{(-1)^{n+1}}n$ converge ma non assolutamente`, testo: R`
(Lezione del 12/11.) Sia $a_n = \dfrac{(-1)^{n+1}}n$ per ogni $n\in\mathbb N$.

**Non converge assolutamente:** $\sum_{n=1}^{+\infty}|a_n| = \sum_{n=1}^{+\infty}\frac1n = +\infty$ per il caso $\alpha = 1$ della serie armonica.

**Converge semplicemente.** Infatti
$$S_{2k} = 1-\frac12+\frac13-\frac14+\dots+\frac1{2k-1}-\frac1{2k} = \sum_{n=1}^k\left(\frac1{2n-1}-\frac1{2n}\right) = \sum_{n=1}^k\frac1{(2n-1)\cdot2n}$$
(raggruppando le $k$ coppie). Osservo che
$$\frac1{(2n-1)\cdot2n}\le\frac1{n^2}\iff n^2\le4n^2-2n\iff2n\le3n^2\iff\frac23\le n,$$
vero per ogni $n\in\mathbb N$. Quindi per confronto $0\le\sum_{n=1}^k\frac1{(2n-1)2n}$ converge per $k\to+\infty$ (caso $\alpha = 2$), cioè
$$\exists\lim_{k\to+\infty}S_{2k} = \sum_{n=1}^{+\infty}\frac1{(2n-1)\cdot2n} =: S\in\mathbb R.$$
D'altra parte $S_{2k+1} = S_{2k}+\frac1{2k+1}$ e $\frac1{2k+1}\to0$, quindi anche $\exists\lim_{k\to+\infty}S_{2k+1} = S$.

Ma allora (esercizio qui sotto) $(S_k)_{k\in\mathbb N}$ è convergente a $S$.

**Morale:** la convergenza assoluta implica quella semplice, ma dove non c'è convergenza assoluta va comunque studiata la convergenza semplice.` },

{ t: "es", s: "casa", diff: 1, titolo: R`Estratte pari e dispari con lo stesso limite`, testo: R`
(Lezione del 12/11.) Dimostrare che se $(a_{2k})_{k\in\mathbb N}$ converge a $\ell\in\mathbb R$ e $(a_{2k+1})_{k\in\mathbb N}$ converge a $\ell$, allora $(a_n)_{n\in\mathbb N}$ converge a $\ell$.

Suggerimento: fare per assurdo.`, dim: R`
(Dimostrazione diretta, equivalente.) Fisso $\varepsilon>0$. Esistono $K_1,K_2\in\mathbb N$ tali che
$$|a_{2k}-\ell|<\varepsilon\ \ \forall k\ge K_1,\qquad|a_{2k+1}-\ell|<\varepsilon\ \ \forall k\ge K_2.$$
Sia $N = 2\max\lbrace K_1,K_2\rbrace$. Ogni $n\ge N$ è pari, $n = 2k$ con $k\ge K_1$, oppure dispari, $n = 2k+1$ con $k\ge K_2$; in entrambi i casi $|a_n-\ell|<\varepsilon$. Quindi $a_n\to\ell$.

**Per assurdo:** se $a_n\not\to\ell$, esiste $\varepsilon>0$ tale che $|a_n-\ell|\ge\varepsilon$ per infiniti $n$; infiniti di questi sono pari o infiniti sono dispari, e allora l'estratta corrispondente non tende a $\ell$, assurdo. $\blacksquare$` },

]});
