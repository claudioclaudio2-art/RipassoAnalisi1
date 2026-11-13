/* Generato da tools/build.py: non modificare a mano */
window.LEZIONI = [];
var R = String.raw;
function L(x) { window.LEZIONI.push(x); }

/* ---- 2026-09-28.js ---- */
L({ data: "2026-09-28", n: 1, titolo: "Logica e insiemi", voci: [

{ t: "def", titolo: "Quantificatori", testo: R`
- **Quantificatore universale** $\forall$: "per ogni".
- **Quantificatore esistenziale** $\exists$: "esiste (almeno un)".
- **Esistenziale unico** $\exists!$: "esiste ed è unico".
- **Negazione dell'esistenziale** $\nexists$: "non esiste".

Esempio: "ogni elefante ha un'unica proboscide" si scrive $\forall$ elefante $\exists!$ proboscide.` },

{ t: "def", titolo: "Connettivi logici", testo: R`
- **Negazione** $\neg P$ (NOT, "non").
- **Congiunzione** $P \land Q$ (AND, "e").
- **Disgiunzione inclusiva** $P \lor Q$ (OR, "o").
- **Disgiunzione esclusiva** AUT…AUT: vera se è vera esattamente una delle due.
- **Implicazione** $P \Rightarrow Q$ (IF…THEN, "se… allora").
- **Doppia implicazione** $P \Leftrightarrow Q$ (IFF, "se e solo se").

Simbolo "tale che": $:$ oppure $|$ (in inglese *such that*).` },

{ t: "def", titolo: "Proposizione e tavole di verità", testo: R`
Una **proposizione** è una frase/proprietà matematica che è o **vera (V)** o **falsa (F)**. Può dipendere da una variabile: $P(n)$ = "$n$ è un numero pari" è vera per $n=2$, falsa per $n=3$. Esempio del prof: $P(x)$ = "$x$ è razionale": $P(\frac12)$ è vera, $P(\sqrt2)$ è falsa.

Tavole di verità:
- $P \land Q$ è V solo se entrambe sono V.
- $P \lor Q$ è F solo se entrambe sono F.
- $P \Rightarrow Q$ è F solo se $P$ è V e $Q$ è F.` },

{ t: "oss", titolo: "Struttura di un teorema", testo: R`
Ogni enunciato matematico (teorema, proposizione, corollario, lemma) è un'**implicazione logica**
$$\text{IPOTESI} \Rightarrow \text{TESI}.$$` },

{ t: "def", titolo: "Dimostrazione diretta, per assurdo, per contrapposizione", testo: R`
- **Diretta**: si parte dall'ipotesi e con una catena di implicazioni si arriva alla tesi.
- **Per contrapposizione (inversa)** — il prof la chiama "**dimostrazione inversa o per assurdo**", come un'unica tecnica: si usa l'equivalenza
$$(P \Rightarrow Q) \iff (\neg Q \Rightarrow \neg P),$$
cioè si nega la tesi e si dimostra la negazione dell'ipotesi.
- **Per assurdo**: si suppone vera l'ipotesi e falsa la tesi e si arriva a una contraddizione.

Esempio di vita: "se piove prendo l'ombrello" equivale a "se non ho l'ombrello allora non piove".` },

{ t: "prop", s: "dim", diff: 1, titolo: "Se $n$ è multiplo di 10 allora è pari (dim. diretta e per assurdo)", testo: R`
Sia $n \in \mathbb{N}$. Se $n$ è multiplo di $10$, allora $n$ è multiplo di $2$, cioè è pari.`, dim: R`
**Diretta.** $n$ multiplo di $10$ $\Rightarrow$ $n = 10k$ per qualche $k\in\mathbb N$ $\Rightarrow$ $n = 2\cdot(5k)$ $\Rightarrow$ $n$ è multiplo di $2$, cioè pari.

**Per contrapposizione/assurdo.** Supponiamo che $n$ non sia multiplo di $2$: allora $n$ è dispari. Tutti i multipli di $10$ sono pari ($10k = 2\cdot 5k$), quindi $n$ non può essere multiplo di $10$: abbiamo ottenuto la negazione dell'ipotesi. $\blacksquare$` },

{ t: "def", titolo: "Insieme, appartenenza, insieme vuoto", testo: R`
Un **insieme** (collezione) è un **concetto primitivo**; si indica con lettere maiuscole $A, B, C, \dots$

- $a \in A$: "$a$ appartiene ad $A$"; $a \notin A$: "non appartiene".
- Esempi: $\mathbb N = \lbrace 1,2,3,\dots \rbrace$, $\mathbb N_0 = \lbrace 0,1,2,\dots\rbrace$, $A = \lbrace n\in\mathbb N : n \text{ pari}\rbrace$.

L'**insieme vuoto** $\emptyset$ è l'unico insieme senza elementi (anch'esso concetto primitivo).` },

{ t: "att", titolo: R`$\emptyset \neq \lbrace\emptyset\rbrace$`, testo: R`
$\emptyset$ non ha elementi, mentre $\lbrace \emptyset \rbrace$ **ha un elemento** (l'insieme vuoto). Non sono lo stesso insieme.` },

]});

/* ---- 2026-09-29.js ---- */
L({ data: "2026-09-29", n: 2, titolo: "Operazioni insiemistiche, numeri naturali, sommatorie, induzione", voci: [

{ t: "def", titolo: R`Inclusione e inclusione stretta`, testo: R`
- $A \subseteq B$ ("$A$ è contenuto in $B$"): ogni elemento di $A$ appartiene a $B$, cioè $a \in A \Rightarrow a \in B$. Può anche essere $A = B$.
- $A \subsetneq B$ (inclusione stretta): $A \subseteq B$ ma $A \neq B$.

Esempio: $\lbrace n \in \mathbb N : n \text{ pari}\rbrace \subsetneq \mathbb N$.` },

{ t: "def", titolo: R`Intersezione, unione, complementare, differenza`, testo: R`
- **Intersezione**: $A \cap B = \lbrace x : x \in A \land x \in B\rbrace$.
- **Unione**: $A \cup B = \lbrace x : x \in A \lor x \in B\rbrace$.
- **Complementare** (rispetto a un insieme universo $U$): $A^c = \lbrace x \in U : x \notin A\rbrace$.
- **Differenza**: $A \setminus B = \lbrace x \in A : x \notin B\rbrace$. Notare che $A^c = U \setminus A$.` },

{ t: "def", titolo: R`Prodotto cartesiano`, testo: R`
Dati due insiemi $A$ e $B$, il **prodotto cartesiano** è l'insieme delle **coppie ordinate** con primo elemento in $A$ e secondo in $B$:
$$A \times B = \lbrace (a,b) : a \in A \land b \in B \rbrace.$$
Esempio: il piano cartesiano è $\mathbb R^2 = \mathbb R \times \mathbb R = \lbrace (x,y) : x,y \in\mathbb R\rbrace$.` },

{ t: "att", titolo: R`Il prodotto cartesiano non è commutativo`, testo: R`
Con $A = \lbrace 1,2\rbrace$, $B = \lbrace 3\rbrace$:
$A\times B = \lbrace (1,3),(2,3)\rbrace$ mentre $B \times A = \lbrace (3,1),(3,2)\rbrace$, quindi $A\times B \neq B\times A$.

Inoltre $A \times \emptyset = \emptyset \times A = \emptyset$, e $\emptyset \times \lbrace 1\rbrace = \emptyset$ mentre $\lbrace\emptyset\rbrace \times \lbrace 1 \rbrace = \lbrace(\emptyset,1)\rbrace$.` },

{ t: "def", titolo: R`Numeri naturali e loro ordinamento`, testo: R`
$\mathbb N = \lbrace 1,2,3,\dots\rbrace$, $\mathbb N_0 = \mathbb N \cup \lbrace 0\rbrace$.

- Somma e prodotto di naturali sono naturali.
- $0$ è l'**elemento neutro** della somma ($n+0=n$) e l'**elemento assorbente** del prodotto ($n\cdot 0 = 0$); $1$ è l'elemento neutro del prodotto.
- $\le$ è un **ordinamento totale**: $\forall a,b$ vale $a\le b$ oppure $b \le a$. Il prof chiama $<$ ordinamento **parziale (stretto)**: "non tutte le coppie sono confrontabili: $2<3$, $3\not<2$, ma anche $2\not<2$".` },

{ t: "def", titolo: R`Numero primo e numeri coprimi`, testo: R`
$n \in \mathbb N$ è **primo** se è divisibile solo per $1$ e per se stesso. Per convenzione $1$ **non** è primo: $\mathbb P = \lbrace 2,3,5,7,11,\dots\rbrace$.

$a, b\in\mathbb N$ sono **coprimi** se non hanno divisori comuni diversi da $1$, cioè $\mathrm{MCD}(a,b)=1$. Esempi: $\mathrm{MCD}(2,5) = 1$ (coprimi), $\mathrm{MCD}(3,9) = 3$, $\mathrm{MCD}(12,30) = 6$.` },

{ t: "teo", s: "omessa", diff: 2, titolo: R`Teorema di Euclide`, testo: R`
I numeri primi sono **infiniti**.`, dim: R`
Per assurdo, siano $p_1, \dots, p_k$ tutti i primi. Considero $N = p_1 p_2 \cdots p_k + 1$. $N > 1$, quindi ha almeno un divisore primo $p$, che deve essere uno dei $p_i$. Ma allora $p$ divide sia $N$ che $p_1\cdots p_k$, quindi divide la differenza $N - p_1\cdots p_k = 1$: assurdo. $\blacksquare$` },

{ t: "teo", s: "omessa", titolo: R`Teorema fondamentale dell'aritmetica`, testo: R`
Ogni $n \in \mathbb N$, $n > 1$, si scrive in modo essenzialmente unico come prodotto di numeri primi:
$$n = p_1^{\alpha_1} p_2^{\alpha_2} \cdots p_k^{\alpha_k}, \qquad p_1 < p_2 < \dots < p_k \text{ primi},\ \alpha_i \ge 1.$$
Ordinando i primi per grandezza la decomposizione è unica. Es: $60 = 2^2\cdot 3 \cdot 5$.

(A lezione è stato chiamato "teorema fondamentale dell'algebra": nei libri questo nome indica un altro teorema, sui polinomi complessi.)` },

{ t: "def", titolo: R`Sommatoria`, testo: R`
Dati $n\in\mathbb N$ e $a_1,\dots,a_n \in\mathbb R$:
$$\sum_{i=1}^n a_i = a_1 + a_2 + \dots + a_n.$$
Esempio: la media dei 10 voti di Barabba è $\dfrac{1}{10}\displaystyle\sum_{i=1}^{10} v_i$.` },

{ t: "prop", s: "dim", diff: 1, titolo: R`Proprietà delle sommatorie`, testo: R`
1. **Distributiva**: $\displaystyle\sum_{k=1}^n c\, a_k = c\sum_{k=1}^n a_k$.
2. **Additiva**: $\displaystyle\sum_{k=1}^n (a_k + b_k) = \sum_{k=1}^n a_k + \sum_{k=1}^n b_k$.
3. **Scomposizione dell'indice**: $\displaystyle\sum_{k=1}^n a_k = \sum_{k=1}^m a_k + \sum_{k=m+1}^n a_k$ per $1\le m < n$.
4. **Traslazione dell'indice** (cambio di variabile $j = i + p$): $\displaystyle\sum_{i=m}^n a_i = \sum_{j=m+p}^{n+p} a_{j-p}$.
5. **L'indice è muto**: $\displaystyle\sum_{k=1}^n a_k = \sum_{i=1}^n a_i$.`, dim: R`
1. $c a_1 + \dots + c a_n = c(a_1 + \dots + a_n)$ (proprietà distributiva).
2. Si riordinano i termini: $(a_1+b_1)+\dots+(a_n+b_n) = (a_1+\dots+a_n) + (b_1+\dots+b_n)$ (proprietà commutativa e associativa).
3. Si spezza la somma dopo il termine $m$-esimo.
4. Ponendo $j = i+p$: quando $i=m$ si ha $j=m+p$, quando $i = n$ si ha $j = n+p$, e $a_i = a_{j-p}$. I termini sommati sono esattamente gli stessi.
5. Il nome dell'indice non compare nel risultato.` },

{ t: "att", titolo: R`Errori tipici con le sommatorie`, testo: R`
$$\sum_{k=1}^n a_i = n\, a_i \neq \sum_{i=1}^n a_i.$$
Se l'indice di somma non compare nel termine generale, si somma $n$ volte la stessa cosa.` },

{ t: "teo", s: "omessa", titolo: R`Principio di induzione`, testo: R`
Sia $P(n)$ una proposizione che dipende da $n \in \mathbb N$, $n \ge n_0$ con $n_0$ fissato. Se
1. **base induttiva**: $P(n_0)$ è vera;
2. **passo induttivo**: $\forall n \ge n_0$, $P(n)$ vera $\Rightarrow$ $P(n+1)$ vera;

allora $P(n)$ è vera per ogni $n \ge n_0$.

Intuizione: le tessere del domino. Cade la prima, e ognuna fa cadere la successiva.` },

]});

/* ---- 2026-10-01.js ---- */
L({ data: "2026-10-01", n: 3, titolo: "Induzione: applicazioni, binomio di Newton", voci: [

{ t: "prop", s: "dim", diff: 1, titolo: R`$2^n \ge n$ per ogni $n\in\mathbb N$`, testo: R`
$$2^n \ge n \qquad \forall n \in\mathbb N.$$`, dim: R`
Per induzione, con $P(n)$: "$2^n \ge n$".

**Base**: $P(1)$: $2^1 = 2 \ge 1$, vera.

**Passo**: supponiamo $2^n \ge n$ (ipotesi induttiva) e dimostriamo $2^{n+1} \ge n+1$. Si ha
$$2^{n+1} = 2\cdot 2^n \ge 2n \quad\text{(per ip. induttiva)}.$$
Basta allora verificare che $2n \ge n+1$, cioè $n \ge 1$, che è vero. Quindi $2^{n+1} \ge n+1$ e $P(n+1)$ è vera. $\blacksquare$` },

{ t: "prop", s: "dim", diff: 1, titolo: R`Somma di Gauss: $\sum_{k=1}^n k = \frac{n(n+1)}{2}$`, testo: R`
$$\sum_{k=1}^n k = 1 + 2 + \dots + n = \frac{n(n+1)}{2}\qquad\forall n\in\mathbb N.$$
Idea di Gauss: sommando $1+\dots+100$ con $100+\dots+1$ si ottengono 100 coppie che valgono $101$, quindi la somma è $\frac{100\cdot 101}{2}=5050$.`, dim: R`
Per induzione.

**Base**: $n=1$: $1 = \frac{1\cdot 2}{2}$, vera.

**Passo**: supponiamo $\sum_{k=1}^n k = \frac{n(n+1)}{2}$. Allora
$$\sum_{k=1}^{n+1} k = \sum_{k=1}^n k + (n+1) = \frac{n(n+1)}{2} + (n+1) = \frac{(n+1)(n+2)}{2},$$
che è $P(n+1)$. $\blacksquare$` },

{ t: "es", s: "casa", diff: 1, titolo: R`$\sum_{k=1}^n 1 = n$ e $3^n\ge n$ per ogni $n\in\mathbb N$`, testo: R`
Dimostrare per induzione che per ogni $n\in\mathbb N$:
1. $\displaystyle\sum_{k=1}^n 1 = n$;
2. $3^n\ge n$.`, dim: R`
1. **Base** $n=1$: $\sum_{k=1}^1 1 = 1$. **Passo**: $\sum_{k=1}^{n+1}1 = \sum_{k=1}^n 1+1 = n+1$.
2. **Base** $n=1$: $3\ge1$. **Passo**: se $3^n\ge n$, allora $3^{n+1} = 3\cdot3^n\ge3n\ge n+1$, perché $2n\ge1$ per $n\ge1$. $\blacksquare$` },

{ t: "es", s: "casa", diff: 2, titolo: R`$3^n \ge n^2$ per ogni $n\in\mathbb N$`, testo: R`
Dimostrare per induzione che $3^n \ge n^2$ per ogni $n\in\mathbb N$.`, dim: R`
**Base**: $n=1$: $3\ge 1$. Verifico anche $n=2$: $9 \ge 4$.

**Passo** (per $n \ge 2$): se $3^n \ge n^2$ allora $3^{n+1} = 3\cdot 3^n \ge 3n^2$. Basta che $3n^2 \ge (n+1)^2 = n^2+2n+1$, cioè $2n^2 - 2n - 1 \ge 0$, vero per $n\ge 2$ ($8-4-1 = 3 \ge 0$ e il polinomio cresce per $n \ge 1$). Quindi $3^{n+1}\ge(n+1)^2$. $\blacksquare$` },

{ t: "es", s: "casa", diff: 3, titolo: R`$3^n \ge n^3$ per ogni $n\in\mathbb N$ (foglio settimana 2)`, testo: R`
Dimostrare che $3^n \ge n^3$ per ogni $n \in\mathbb N$.`, dim: R`
Verifico a mano $n=1,2,3$: $3\ge1$, $9\ge8$, $27\ge27$.

**Passo** (per $n\ge 3$): $3^{n+1} = 3\cdot 3^n \ge 3n^3$. Basta che $3n^3 \ge (n+1)^3$, cioè $\left(1+\frac1n\right)^3 \le 3$. Per $n \ge 3$: $\left(\frac43\right)^3 = \frac{64}{27} \approx 2{,}37 \le 3$, e $\left(1+\frac1n\right)^3$ decresce in $n$. $\blacksquare$` },

{ t: "prop", s: "dim", diff: 2, titolo: R`Cardinalità del prodotto cartesiano: $|A\times B| = |A|\cdot|B|$`, testo: R`
Se $A$ ha $m$ elementi e $B$ ha $n$ elementi, allora $A \times B$ (e $B\times A$) hanno $m\cdot n$ elementi.`, dim: R`
Se $m=0$ o $n=0$ il prodotto è vuoto e la formula vale. Basta considerare $A\times B$.

**Claim 1** ($n=1$): se $|A| = m$ e $B = \lbrace b\rbrace$ allora $|A\times B| = m$. Induzione su $m$: per $m=1$, $A\times B = \lbrace(a,b)\rbrace$ ha un elemento. Se vale per $m$, prendo $A = \lbrace a_1,\dots,a_{m+1}\rbrace = \lbrace a_1,\dots,a_m\rbrace \cup\lbrace a_{m+1}\rbrace$: allora
$$A\times B = (\lbrace a_1,\dots,a_m\rbrace\times B) \cup \lbrace(a_{m+1},b)\rbrace$$
ha $m + 1$ elementi (unione disgiunta).

**Claim 2**: fisso $m$, induzione su $n$. Il caso $n = 1$ è il Claim 1. Se vale per $n$, prendo $B = \lbrace b_1,\dots,b_{n+1}\rbrace = B'\cup\lbrace b_{n+1}\rbrace$ con $|B'| = n$:
$$A\times B = (A \times B') \cup (A\times\lbrace b_{n+1}\rbrace),$$
unione disgiunta di insiemi con $mn$ e $m$ elementi. Totale $m(n+1)$. $\blacksquare$` },

{ t: "es", s: "casa", diff: 1, titolo: R`Prodotto cartesiano e unione`, testo: R`
Siano $A,B,C$ tre insiemi. Dimostrare che
- $(A\cup B)\times C = (A\times C)\cup(B\times C)$;
- $A\times(B\cup C) = (A\times B)\cup(A\times C)$.

Suggerimento: nel primo caso dimostrare le due inclusioni.`, dim: R`
Si dimostrano le due inclusioni.

$\subseteq$: se $(x,c)\in(A\cup B)\times C$, allora $c\in C$ e $x\in A$ oppure $x\in B$. Nel primo caso $(x,c)\in A\times C$, nel secondo $(x,c)\in B\times C$. In ogni caso sta nell'unione.

$\supseteq$: se $(x,c) \in A\times C$ allora $x \in A \subseteq A\cup B$ e $c\in C$, quindi $(x,c) \in (A\cup B)\times C$. Idem se $(x,c)\in B\times C$.

**Seconda uguaglianza**, identica scambiando i ruoli: $(a,y)\in A\times(B\cup C)\iff a\in A$ e ($y\in B$ oppure $y\in C$) $\iff(a,y)\in A\times B$ oppure $(a,y)\in A\times C$. $\blacksquare$` },

{ t: "prop", s: "dim", diff: 1, titolo: R`Progressione geometrica`, testo: R`
Sia $r \in\mathbb R$, $r \neq 0,1$ (la **ragione**; $r\neq0$ perché $r^0 = 0^0$ non è definito). Allora
$$\sum_{k=0}^n r^k = 1 + r + r^2 + \dots + r^n = \frac{r^{n+1}-1}{r-1}\qquad\forall n\in\mathbb N_0.$$`, dim: R`
Per induzione.

**Base** $n=0$: $r^0 = 1 = \frac{r-1}{r-1}$.

**Passo**: se vale per $n$,
$$\sum_{k=0}^{n+1} r^k = \frac{r^{n+1}-1}{r-1} + r^{n+1} = \frac{r^{n+1} - 1 + r^{n+2} - r^{n+1}}{r-1} = \frac{r^{n+2}-1}{r-1}. \ \blacksquare$$` },

{ t: "def", titolo: R`Fattoriale`, testo: R`
Per $n\in\mathbb N_0$:
$$n! = \begin{cases} 1 & n = 0\\ n\cdot(n-1)\cdots 2\cdot 1 & n \ge 1.\end{cases}$$
Esempi: $0! = 1! = 1$, $3! = 6$, $4! = 24$, $5! = 120$. Vale $(n+1)! = (n+1)\cdot n!$ (esercizio per induzione).` },

{ t: "def", titolo: R`Coefficiente binomiale`, testo: R`
Dati $n,k\in\mathbb N_0$ con $k\le n$:
$$\binom nk = \frac{n!}{k!\,(n-k)!}\qquad\text{("$n$ su $k$")}.$$
Esempi: $\binom 00 = 1$, $\binom 10 = \binom11 = 1$, $\binom21 = 2$, $\binom 42 = 6$.` },

{ t: "prop", s: "casa", diff: 2, titolo: R`Proprietà del coefficiente binomiale (identità di Pascal)`, testo: R`
1. $\binom n0 = \binom nn = 1$.
2. **Simmetria**: $\binom nk = \binom n{n-k}$.
3. **Identità di Pascal**: per $1 \le k \le n$,
$$\binom n{k-1} + \binom nk = \binom{n+1}k.$$`, dim: R`
1. e 2. seguono subito dalla definizione.

3. Con denominatore comune $k!\,(n-k+1)!$:
$$\frac{n!}{(k-1)!(n-k+1)!}+\frac{n!}{k!(n-k)!} = \frac{n!\,k + n!\,(n-k+1)}{k!\,(n-k+1)!} = \frac{n!\,(n+1)}{k!\,(n+1-k)!} = \binom{n+1}{k}.\ \blacksquare$$` },

{ t: "oss", titolo: R`Triangolo di Tartaglia`, testo: R`
Disponendo i $\binom nk$ in righe ($n = 0,1,2,\dots$), ogni numero è la somma dei due sopra (identità di Pascal) e ogni riga è simmetrica:
$$\begin{array}{c} 1\\ 1\quad 1\\ 1\quad 2\quad 1\\ 1\quad 3\quad 3\quad 1\\ 1\quad 4\quad 6\quad 4\quad 1\\ 1\quad 5\quad 10\quad 10\quad 5\quad 1\end{array}$$
Sono i coefficienti di $(a+b)^n$: ad es. $(a+b)^3 = a^3+3a^2b+3ab^2+b^3$.` },

{ t: "teo", s: "dim", diff: 3, titolo: R`Binomio di Newton`, testo: R`
Siano $a,b\in\mathbb R\setminus\lbrace 0\rbrace$ (per $n = 0$ serve anche $a+b\neq0$, perché $0^0$ non è definito). Allora per ogni $n\in\mathbb N_0$:
$$(a+b)^n = \sum_{k=0}^n \binom nk a^{n-k} b^k.$$`, dim: R`
Per induzione su $n$.

**Base** $n=0$: $(a+b)^0 = 1 = \binom00 a^0b^0$.

**Passo**: supponiamo vera la formula per $n$. Allora
$$(a+b)^{n+1} = (a+b)(a+b)^n = \underbrace{\sum_{k=0}^n\binom nk a^{n+1-k}b^k}_{X} + \underbrace{\sum_{k=0}^n\binom nk a^{n-k}b^{k+1}}_{Y}.$$
In $Y$ faccio il cambio di indice $h = k+1$: $Y = \sum_{h=1}^{n+1}\binom n{h-1}a^{n+1-h}b^h$.

Separo da $X$ il termine $k=0$ (che vale $a^{n+1}$) e da $Y$ il termine $h=n+1$ (che vale $b^{n+1}$), e unisco il resto (indice muto):
$$(a+b)^{n+1} = a^{n+1} + \sum_{k=1}^{n}\left[\binom nk + \binom n{k-1}\right]a^{n+1-k}b^k + b^{n+1}.$$
Per l'identità di Pascal la parentesi è $\binom{n+1}k$, e $a^{n+1} = \binom{n+1}0 a^{n+1}b^0$, $b^{n+1} = \binom{n+1}{n+1}a^0b^{n+1}$. Quindi
$$(a+b)^{n+1} = \sum_{k=0}^{n+1}\binom{n+1}k a^{n+1-k}b^k,$$
cioè $P(n+1)$. $\blacksquare$` },

{ t: "cor", s: "casa", diff: 1, titolo: R`$\sum_{k=0}^n \binom nk = 2^n$`, testo: R`
$$\sum_{k=0}^n\binom nk = 2^n\qquad\forall n\in\mathbb N_0.$$`, dim: R`
Basta applicare il binomio di Newton con $a = b = 1$: $2^n = (1+1)^n = \sum_{k=0}^n\binom nk 1^{n-k}1^k$. $\blacksquare$` },

]});

/* ---- 2026-10-02.js ---- */
L({ data: "2026-10-02", n: 4, titolo: "Interi, razionali, reali e completezza", voci: [

{ t: "def", titolo: R`Numeri interi $\mathbb Z$`, testo: R`
$\mathbb Z = \lbrace\dots,-2,-1,0,1,2,\dots\rbrace$ è **chiuso** per somma, differenza e prodotto ($a,b\in\mathbb Z \Rightarrow a\pm b,\ a\cdot b \in\mathbb Z$) ed è totalmente ordinato da $\le$.

Il quoziente invece non funziona sempre: $\frac12 \notin\mathbb Z$.` },

{ t: "def", titolo: R`Numeri razionali $\mathbb Q$`, testo: R`
$$\mathbb Q = \left\lbrace \frac pq : p,q\in\mathbb Z,\ q\neq 0\right\rbrace.$$
Si ha $\mathbb N\subseteq\mathbb Z\subseteq\mathbb Q$ (ogni intero $n$ è $\frac n1$), e $\mathbb Q$ risolve il problema del quoziente.` },

{ t: "def", titolo: R`Campo commutativo totalmente ordinato`, testo: R`
$(\mathbb Q, +, \cdot)$ è un **campo commutativo**, cioè valgono:

**Somma**: commutativa, associativa, elemento neutro $0$ ($a + 0 = a$), opposto ($\forall a\ \exists b = -a$ con $a+b=0$).

**Prodotto**: commutativo, associativo, unità $1$ ($a\cdot 1 = a$), inverso ($\forall a\neq0\ \exists b = \frac1a$ con $ab = 1$). Inoltre vale la distributiva.

È **totalmente ordinato** da $\le$, e l'ordine è **compatibile** con le operazioni:
- $a\le b \Rightarrow a + c\le b + c$;
- $a\le b,\ c\ge 0 \Rightarrow ac\le bc$.` },

{ t: "teo", s: "dim", diff: 2, titolo: R`Densità di $\mathbb Q$`, testo: R`
Per ogni $x,y\in\mathbb Q$ con $x<y$ esiste $z\in\mathbb Q$ con $x<z<y$.`, dim: R`
Basta prendere il punto medio $z = \dfrac{x+y}{2}$, che è razionale. Da $x<y$: $2x < x+y < 2y$, cioè $x < z< y$. $\blacksquare$` },

{ t: "teo", s: "dim", diff: 2, titolo: R`$\sqrt 2 \notin \mathbb Q$`, testo: R`
Non esiste $x\in\mathbb Q$ tale che $x^2 = 2$.`, dim: R`
Per assurdo: sia $x = \frac pq\in\mathbb Q$ con $x^2 = 2$. A meno di cambiare segni posso supporre $p,q > 0$, e a meno di semplificare posso supporre la frazione **ridotta ai minimi termini**: $\mathrm{MCD}(p,q) = 1$.

Da $\frac{p^2}{q^2} = 2$ ottengo $p^2 = 2q^2$, quindi $p^2$ è pari, quindi anche $p$ è pari (il quadrato di un dispari è dispari): $p = 2k$.

Allora $4k^2 = 2q^2$, cioè $q^2 = 2k^2$: anche $q^2$, e quindi $q$, è pari.

Ma allora $2$ divide sia $p$ che $q$, cioè $\mathrm{MCD}(p,q)\ge 2$: contraddizione. $\blacksquare$` },

{ t: "def", titolo: R`Allineamento decimale`, testo: R`
Ogni numero reale si scrive come $\pm\, n, \alpha_1\alpha_2\alpha_3\dots$ con $n$ parte intera e $\alpha_i \in\lbrace0,\dots,9\rbrace$ cifre decimali. L'allineamento è
- **limitato** se $\exists i_0$ tale che $\alpha_i = 0\ \forall i\ge i_0$ (es. $2{,}5$);
- **illimitato** altrimenti;
- **periodico** se da un certo posto in poi le cifre si ripetono con un periodo finito (es. $0{,}\overline{6} = \frac23$).` },

{ t: "att", titolo: R`Niente periodo 9`, testo: R`
Non si usano allineamenti con $\alpha_i = 9$ definitivamente: ad esempio $0{,}\overline 9 = 1$, quindi si scrive $1$.` },

{ t: "teo", s: "omessa", titolo: R`Caratterizzazione decimale dei razionali`, testo: R`
$$x\in\mathbb Q \iff x \text{ ha allineamento decimale limitato oppure periodico.}$$
I numeri **irrazionali** sono $\mathbb R\setminus\mathbb Q$: hanno sviluppo illimitato non periodico (es. $\sqrt2 = 1{,}41421\dots$, $\pi$).` },

{ t: "teo", s: "omessa", titolo: R`Completezza di $\mathbb R$ (1ª forma: elemento separatore)`, testo: R`
Siano $A, B\subseteq\mathbb R$ non vuoti tali che $a\le b$ per ogni $a\in A$, $b\in B$. Allora esiste $c\in\mathbb R$, detto **elemento separatore**, tale che
$$a \le c\le b\qquad\forall a\in A,\ \forall b\in B.$$
$(\mathbb R,+,\cdot,\le)$ è un **campo commutativo totalmente ordinato completo**: "la retta non ha buchi".

**Esempio**: $A = \lbrace x\in\mathbb Q : x \ge 0, x^2 < 2\rbrace$, $B = \lbrace x\in\mathbb Q: x\ge 0, x^2 > 2\rbrace$. In $\mathbb Q$ non c'è separatore, in $\mathbb R$ è $\sqrt2$. Quindi $\mathbb Q$ **non** è completo.` },

]});

/* ---- 2026-10-05.js ---- */
L({ data: "2026-10-05", n: 5, titolo: "Intervalli, estremo superiore e inferiore, modulo", voci: [

{ t: "def", titolo: R`Intervallo`, testo: R`
$I\subseteq\mathbb R$ è un **intervallo** se $\forall a,b\in I$ con $a\le b$ vale $a\le x\le b \Rightarrow x \in I$ (contiene tutti i punti tra due suoi punti).

Con $a<b$ reali:
- **limitati**: $(a,b)$ aperto, $[a,b]$ chiuso, $[a,b)$ e $(a,b]$;
- **illimitati**: $(a,+\infty)$, $[a,+\infty)$, $(-\infty,b)$, $(-\infty, b]$.

Es. $[2,3]\cup[4,5]$ **non** è un intervallo.` },

{ t: "att", titolo: R`$\pm\infty$ sono simboli, non numeri`, testo: R`
Scritture come $\infty - 5$ o $\frac{\infty}{27}$ sono **errate**. Si usa la retta estesa $\overline{\mathbb R} = \mathbb R\cup\lbrace-\infty,+\infty\rbrace$.` },

{ t: "def", titolo: R`Maggiorante, minorante, insieme limitato`, testo: R`
Sia $\emptyset\neq A\subseteq\mathbb R$.
- $A$ è **superiormente limitato** se $\exists M\in\mathbb R$ con $a\le M$ $\forall a\in A$. $M$ si dice **maggiorante** ($\iff A\subseteq(-\infty,M]$).
- $A$ è **inferiormente limitato** se $\exists m\in\mathbb R$ con $a\ge m$ $\forall a \in A$. $m$ si dice **minorante**.

Es. $A = [2,3]\cup\lbrace5\rbrace$: maggioranti $5, 6, 99{,}7,\dots$ (ma **non** $4$, perché $5\in A$); minoranti $2, 1, -17,\dots$ (ma **non** $3{,}5$).

Es. $A = \lbrace x\in\mathbb Q: x\ge0,\ x^2<2\rbrace$: maggioranti $200$, $3$, $\sqrt2$; minoranti $0$, $-\frac57$.` },

{ t: "def", titolo: R`Massimo e minimo di un insieme`, testo: R`
- $M = \max A$ se $M$ è un maggiorante di $A$ **e** $M\in A$.
- $m = \min A$ se $m$ è un minorante di $A$ **e** $m\in A$.

Un intervallo aperto $(a,b)$ non ha né massimo né minimo.` },

{ t: "prop", s: "dim", diff: 1, titolo: R`Unicità di massimo e minimo`, testo: R`
Sia $\emptyset\neq A\subseteq\mathbb R$. Se $\min A$ (o $\max A$) esiste, allora è unico.`, dim: R`
Siano $m_1, m_2$ due minimi di $A$.
- $m_1$ è minorante e $m_2\in A$ $\Rightarrow$ $m_1\le m_2$;
- $m_2$ è minorante e $m_1\in A$ $\Rightarrow$ $m_2\le m_1$.

Quindi $m_1 = m_2$. Per il massimo è analogo. $\blacksquare$` },

{ t: "def", titolo: R`Estremo superiore e inferiore`, testo: R`
Se $A$ è superiormente limitato, il suo **estremo superiore** è il **minimo dei maggioranti**:
$$\sup A = \min\lbrace M\in\mathbb R : a\le M\ \forall a\in A\rbrace.$$
Se $A$ è inferiormente limitato, il suo **estremo inferiore** è il **massimo dei minoranti**:
$$\inf A = \max\lbrace m\in\mathbb R : a\ge m\ \forall a\in A\rbrace.$$
Es. $\inf(a,b) = a$ ma $\min(a,b)$ non esiste; $\sup(a,b] = \max(a,b] = b$.`, fig: "sup" },

{ t: "es", s: "casa", diff: 1, titolo: R`Se esiste $\max A$ allora $\max A = \sup A$`, testo: R`
Dimostrare: se $A$ ammette massimo allora $\max A = \sup A$ (e se ammette minimo, $\min A = \inf A$).`, dim: R`
Sia $M = \max A$. $M$ è un maggiorante. Se $M'$ è un altro maggiorante, siccome $M\in A$ vale $M\le M'$. Quindi $M$ è il più piccolo dei maggioranti: $M = \sup A$. Per il minimo è analogo. $\blacksquare$` },

{ t: "teo", s: "dim", diff: 2, titolo: R`Completezza di $\mathbb R$ (2ª forma: esistenza del sup)`, testo: R`
1. Ogni $\emptyset\neq A\subseteq\mathbb R$ superiormente limitato ammette estremo superiore.
2. Ogni $\emptyset\neq A\subseteq\mathbb R$ inferiormente limitato ammette estremo inferiore.`, dim: R`
Facciamo (1); (2) è analoga. Sia $B = \lbrace$maggioranti di $A\rbrace$: dobbiamo mostrare che $B$ ha minimo.

$B\neq\emptyset$ perché $A$ è superiormente limitato, e per definizione di maggiorante $a\le b$ per ogni $a\in A$, $b\in B$.

Per la completezza (1ª forma) esiste un separatore $c\in\mathbb R$ con $a\le c\le b$ per ogni $a\in A$, $b\in B$. Allora:
- $a \le c\ \forall a\in A$: $c$ è un maggiorante, cioè $c\in B$;
- $c\le b\ \forall b\in B$: $c$ è un minorante di $B$.

Quindi $c = \min B = \sup A$. $\blacksquare$` },

{ t: "def", titolo: R`Insieme illimitato: $\sup A = +\infty$`, testo: R`
$A$ è **superiormente illimitato** (non sup. limitato), e si scrive $\sup A = +\infty$, se
$$\forall M\in\mathbb R\ \exists a\in A : a > M.$$
Analogamente $\inf A = -\infty$ se $\forall m\in\mathbb R\ \exists a\in A: a < m$.

Esempi: $\sup\mathbb N = +\infty$, $\inf\mathbb N = \min\mathbb N = 1$. Per $A = \mathbb R$: $\sup\mathbb R = +\infty$, $\inf\mathbb R = -\infty$, e $\mathbb R$ non ha né massimo né minimo. Attenzione: in $\overline{\mathbb R}$ il prof **barra** le scritture "$\sup\overline{\mathbb R} = +\infty$" e "$\max\overline{\mathbb R} = +\infty$" (sup e max sono definiti per sottoinsiemi di $\mathbb R$). Per $A = \lbrace x\in\mathbb Q: x\ge0, x^2<3\rbrace$: $\sup A = \sqrt3$ (non è massimo), $\min A = 0$.` },

{ t: "teo", s: "omessa", diff: 2, titolo: R`Caratterizzazione di sup e inf`, testo: R`
Sia $A$ superiormente limitato. Allora $s = \sup A$ se e solo se
1. $s$ è un maggiorante di $A$: $a\le s\ \forall a\in A$;
2. $\forall\varepsilon > 0\ \exists a\in A : a > s - \varepsilon$.

Sia $A$ inferiormente limitato. Allora $i = \inf A$ se e solo se
1. $i$ è un minorante di $A$;
2. $\forall \varepsilon >0\ \exists a\in A : a < i + \varepsilon$.`, dim: R`
($\Rightarrow$) $s$ è un maggiorante per definizione. Se per qualche $\varepsilon>0$ fosse $a\le s-\varepsilon$ per ogni $a\in A$, allora $s-\varepsilon$ sarebbe un maggiorante più piccolo di $s$, assurdo.

($\Leftarrow$) $s$ è un maggiorante. Se $M < s$ fosse un altro maggiorante, prendendo $\varepsilon = s - M > 0$ troverei $a\in A$ con $a > s-\varepsilon = M$, contro il fatto che $M$ è maggiorante. Quindi $s$ è il minimo dei maggioranti. $\blacksquare$` },

{ t: "def", titolo: R`Modulo (valore assoluto)`, testo: R`
Per $a\in\mathbb R$:
$$|a| = \begin{cases} a & a\ge 0\\ -a & a < 0\end{cases}\qquad\text{equivalentemente}\qquad|a| = \max\lbrace a,-a\rbrace.$$` },

{ t: "prop", s: "casa", diff: 1, titolo: R`Proprietà del modulo`, testo: R`
Per ogni $a,b\in\mathbb R$:
1. $-|a|\le a\le |a|$;
2. se $M\in\mathbb R$: $|a|\le M \iff M\ge0 \text{ e } -M\le a\le M$ (negli appunti è scritta solo l'implicazione $\Rightarrow$);
3. $|a| = 0\iff a = 0$;
4. $|ab| = |a|\,|b|$;
5. **disuguaglianza triangolare**: $|a+b|\le|a|+|b|$;
6. **disuguaglianza triangolare inversa**: $\big||a|-|b|\big|\le|a-b|$ (dimostrata il 6/10).`, dim: R`
1.–4. seguono dalla definizione distinguendo i casi di segno.

5. Entrambi i membri sono $\ge0$, quindi basta confrontare i quadrati:
$$|a+b|^2 = a^2 + 2ab + b^2 \le a^2 + 2|a||b| + b^2 = (|a|+|b|)^2,$$
perché $ab\le|ab| = |a||b|$. $\blacksquare$` },

]});

/* ---- 2026-10-06.js ---- */
L({ data: "2026-10-06", n: 6, titolo: "Potenze, radici, logaritmi, funzioni", voci: [

{ t: "teo", s: "dim", diff: 1, titolo: R`Disuguaglianza triangolare inversa`, testo: R`
$$\big||a|-|b|\big|\le|a-b|\qquad\forall a,b\in\mathbb R.$$`, dim: R`
Per la disuguaglianza triangolare: $|a| = |(a-b)+b|\le|a-b|+|b|$, da cui $|a|-|b|\le|a-b|$.

Scambiando i ruoli: $|b| = |(b-a)+a| \le |a-b|+|a|$, da cui $-(|a|-|b|)\le|a-b|$.

Quindi $\big||a|-|b|\big| = \max\lbrace |a|-|b|,\ -(|a|-|b|)\rbrace\le|a-b|$. $\blacksquare$` },

{ t: "def", titolo: R`Potenza a esponente intero`, testo: R`
Per $a\in\mathbb R\setminus\lbrace0\rbrace$ (base) e $n\in\mathbb Z$ (esponente):
$$a^n = \begin{cases}\underbrace{a\cdot a\cdots a}_{n \text{ volte}} & n>0\\ 1 & n = 0\\ \dfrac1{a^{-n}} & n<0.\end{cases}$$` },

{ t: "att", titolo: R`$0^0$ non ha senso`, testo: R`
$0^0$ **non è definito** (in alcuni testi o situazioni si pone $0^0=1$, ma per noi no).` },

{ t: "teo", s: "omessa", diff: 3, titolo: R`Esistenza e unicità della radice $n$-esima`, testo: R`
Siano $y\in\mathbb R$, $y\ge0$, $n\in\mathbb N$. Allora esiste un unico $r\in\mathbb R$, $r\ge 0$, tale che $r^n = y$. Si scrive $r = y^{1/n} = \sqrt[n]y$, ed è
$$r = \sup\lbrace x\in\mathbb R : x\ge0,\ x^n\le y\rbrace.$$
In classe il prof ha detto solo: segue dal **teorema di completezza (2ª forma)**: $A = \lbrace x\ge0: x^n\le y\rbrace$ è superiormente limitato, quindi ha un unico sup $r$, e $r^n = y$. La dimostrazione completa qui sotto è un'aggiunta.`, dim: R`
L'insieme $A = \lbrace x\ge 0 : x^n\le y\rbrace$ è non vuoto ($0\in A$) e superiormente limitato (ad esempio da $\max\lbrace1,y\rbrace$). Per la completezza (2ª forma) ammette un unico estremo superiore $r\ge0$. Resta da vedere che $r^n = y$ (a lezione questo passo è solo accennato; ecco i conti).

**Stima utile.** Per $0\le a<b$:
$$b^n-a^n = (b-a)\left(b^{n-1}+b^{n-2}a+\dots+a^{n-1}\right)\le(b-a)\cdot n\,b^{n-1}.$$

**Se fosse $r^n<y$:** scelgo $h$ con $0<h<1$ e $h<\dfrac{y-r^n}{n(r+1)^{n-1}}$. Allora
$$(r+h)^n-r^n\le h\cdot n(r+h)^{n-1}\le h\cdot n(r+1)^{n-1}<y-r^n,$$
quindi $(r+h)^n<y$, cioè $r+h\in A$: un elemento di $A$ più grande di $r = \sup A$, assurdo.

**Se fosse $r^n>y$:** allora $r>0$. Scelgo $h$ con $0<h<r$ e $h<\dfrac{r^n-y}{n\,r^{n-1}}$. Allora
$$r^n-(r-h)^n\le h\cdot n\,r^{n-1}<r^n-y,$$
quindi $(r-h)^n>y$. Per ogni $x\in A$: $x^n\le y<(r-h)^n$, quindi $x<r-h$ (monotonia di $x\mapsto x^n$). Dunque $r-h$ è un maggiorante di $A$ più piccolo di $r$, assurdo.

Quindi $r^n = y$. L'unicità segue dal fatto che $x\mapsto x^n$ è strettamente crescente su $[0,+\infty)$. $\blacksquare$` },

{ t: "att", titolo: R`Niente radici di numeri negativi`, testo: R`
Abbiamo definito $\sqrt[n]y$ **solo per $y\ge0$**: $\sqrt{-4}$ o $\sqrt[3]{-8}$ per noi non hanno senso. (Alcuni testi definiscono le radici dispari di numeri negativi, noi no.)

Nota utile: $\sqrt{x^2} = |x|$ per ogni $x \in\mathbb R$.` },

{ t: "def", titolo: R`Potenza razionale e reale`, testo: R`
**Razionale**: per $a>0$ e $\frac pq$ con $p,q\in\mathbb Z$, $q > 0$: $\quad a^{p/q} = \sqrt[q]{a^p}$.

**Reale**: per $a>0$ e $r\in\mathbb R$, $r\ge0$:
- se $a\ge1$: $\ a^r = \sup\lbrace a^s : s\in\mathbb Q,\ s\le r\rbrace$ (ben definito per la completezza);
- se $0<a<1$: $\ a^r = \dfrac{1}{(1/a)^r}$.

Se $r < 0$: $a^r = \dfrac1{a^{-r}}$.

Riassunto della costruzione: $a^n \to \sqrt[n]a\to a^{p/q}\to a^r\ (r\ge0)\to a^r\ (r<0)\to \log_a y$.` },

{ t: "teo", s: "omessa", diff: 2, titolo: R`Esistenza del logaritmo`, testo: R`
Siano $a>0$, $a\neq1$, $y>0$. Allora esiste un unico $x\in\mathbb R$ tale che $a^x = y$; si indica $x = \log_a y$ ed è
- se $a > 1$: $\ x = \sup\lbrace r\in\mathbb R : a^r\le y\rbrace$;
- se $0<a<1$: $\ x = \sup\lbrace r\in\mathbb R : a^r\ge y\rbrace$.

In classe: segue dal teorema di completezza (2ª forma), in modo analogo alla radice $n$-esima. La dimostrazione completa qui sotto è un'aggiunta.`, dim: R`
Segue dalla completezza di $\mathbb R$ (2ª forma). Faccio il caso $a>1$ (per $0<a<1$ si applica il caso precedente a $\frac1a>1$: $\log_ay = -\log_{1/a}y$). Sia $B = \lbrace r\in\mathbb R: a^r\le y\rbrace$ e $t = a-1>0$.

**Strumento.** Dal binomio di Newton $(1+t)^n\ge1+nt$, quindi $a^n\ge1+n(a-1)\to+\infty$; e $\left(1+\frac tn\right)^n\ge1+t = a$, cioè $a^{1/n}\le1+\frac{a-1}n$.

**$B$ non vuoto e limitato superiormente:** scelto $n$ con $1+n(a-1)>\max\lbrace y,\frac1y\rbrace$, si ha $a^{-n}<y$ (quindi $-n\in B$) e $a^r\le y<a^n$ per ogni $r\in B$ (quindi $n$ è un maggiorante). Sia $x = \sup B$.

**Se fosse $a^x<y$:** per $n$ grande $a^x\left(1+\frac{a-1}n\right)<y$, quindi $a^{x+1/n} = a^x\cdot a^{1/n}<y$, cioè $x+\frac1n\in B$, assurdo.

**Se fosse $a^x>y$:** per $n$ grande $\dfrac{a^x}{1+\frac{a-1}n}>y$, quindi $a^{x-1/n}>y$. Ogni $r\in B$ ha $a^r\le y<a^{x-1/n}$, quindi $r<x-\frac1n$: $x-\frac1n$ è un maggiorante più piccolo di $x$, assurdo.

Quindi $a^x = y$; l'unicità segue dalla stretta monotonia di $r\mapsto a^r$. $\blacksquare$` },

{ t: "def", titolo: R`Logaritmo e proprietà`, testo: R`
$\log_a y$ ("logaritmo in base $a$ di $y$") è l'esponente da dare ad $a$ per ottenere $y$. Notazioni: $\log = \ln = \log_e$ (logaritmo naturale, $e \approx 2{,}718$ numero di Nepero); attenzione: $\log_{10}\neq\log$.

Per $a, b > 0$, $a,c\neq1$, $x,y>0$:
1. $\log_a 1 = 0$, $\log_a a = 1$;
2. $a^{\log_a x} = x$ e $\log_a a^x = x$;
3. $\log_a(xy) = \log_a x+\log_a y$ (perché $a^{\log_a x}\cdot a^{\log_a y} = xy$);
4. $\log_a(x^b) = b\log_a x$, in particolare $\log_a\frac1x = -\log_a x$;
5. $\log_a\frac xy = \log_a x-\log_a y$;
6. **cambio di base**: $\log_a x = \dfrac{\log_c x}{\log_c a}$, in particolare $\log_a x = \dfrac{\log x}{\log a}$ e $\log_{1/a}x = -\log_a x$.` },

{ t: "def", titolo: R`Funzione`, testo: R`
Dati due insiemi non vuoti $A$ e $B$, una **funzione** da $A$ a $B$ è una terna $f = (A, B, G(f))$, e si scrive $f: A\to B$, $x\mapsto f(x)$, dove
- $A$ è il **dominio** (insieme degli input);
- $B$ è il **codominio** (insieme che contiene gli output);
- $G(f)\subseteq A\times B$ è il **grafico**: a **ogni** $x\in A$ corrisponde **un unico** $y \in B$ con $(x,y)\in G(f)$, e si scrive $y = f(x)$:
$$G(f) = \lbrace (x,f(x)) : x\in A\rbrace.$$` },

{ t: "att", titolo: R`Quando non è una funzione`, testo: R`
Non è una funzione:
- se a un elemento di $A$ corrispondono **due** valori ($f(b)$ non è determinato);
- se un elemento di $A$ **non ha** alcun valore.

È invece permesso che due elementi diversi abbiano lo stesso valore, o che qualche elemento di $B$ non sia raggiunto.` },

]});

/* ---- 2026-10-08.js ---- */
L({ data: "2026-10-08", n: 7, titolo: "Funzioni reali, funzioni elementari, immagine", voci: [

{ t: "def", titolo: R`Funzione a variabile reale / a valori reali`, testo: R`
Sia $f : A\to B$. Se $A\subseteq\mathbb R$, $f$ si dice **a variabile reale**; se $B\subseteq\mathbb R$, **a valori reali**. In tal caso $G(f)\subseteq\mathbb R^2$ è un sottoinsieme del piano.` },

{ t: "teo", s: "omessa", titolo: R`Criterio della retta verticale`, testo: R`
Un sottoinsieme $G\subseteq\mathbb R^2$ è il grafico di una funzione $f : A\to\mathbb R$ ($A \subseteq \mathbb R$) se e solo se **ogni retta verticale** $x = x_0$ interseca $G$ in **al più un punto** (magari nessuno).

Es. una circonferenza non è un grafico; $f(x) = 1$ per $x\ge0$ e $0$ per $x<0$ sì.` },

{ t: "att", titolo: R`Il dominio va determinato da noi`, testo: R`
Spesso (anche all'esame) dominio e codominio non sono indicati: bisogna capire dove la legge **ha senso**.
- $f(x) = \sqrt x$: serve $x\ge 0$, quindi $D(f) = [0,+\infty)$ (idem per $\sqrt[3]x$ con le nostre convenzioni).
- $f(x) = \sqrt{x^2+1}$: $x^2+1\ge0$ sempre, quindi $D(f) = \mathbb R$.
- Esempio del prof: $f(x) = \dfrac{x+2}{\sqrt{x^2+2x+1}}$. Condizioni:
  1. $\sqrt{x^2+2x+1}\neq0$ (denominatore);
  2. $x^2+2x+1\ge0$ (radice).

  Ma $x^2+2x+1 = (x+1)^2$, quindi la (2) è sempre vera e la (1) diventa $\sqrt{(x+1)^2} = |x+1|\neq0$, cioè $x\neq-1$. Risultato: $D(f) = \mathbb R\setminus\lbrace-1\rbrace$.` },

{ t: "def", titolo: R`Funzioni elementari: costanti, lineari, affini, quadratiche, polinomiali`, testo: R`
- **Costante**: $f(x) = c$ per ogni $x$.
- **Lineare**: $f(x) = mx$. Proprietà: omogeneità $f(cx) = c f(x)$ e additività $f(x+y) = f(x)+f(y)$. Con $m=1$: funzione **identità**.
- **Affine**: $f(x) = mx+q$ ($m$ pendenza, $q$ intercetta).
- **Quadratica**: $f(x) = ax^2+bx+c$ con $a\neq0$. Se $b=c=0$ è 2-omogenea: $f(tx) = t^2f(x)$.
- **Polinomiale** di grado $n$: $f(x) = \sum_{k=0}^n a_kx^k$ con $a_n\neq0$.` },

{ t: "def", titolo: R`Funzioni esponenziali e logaritmiche`, testo: R`
- **Esponenziale**: $f:\mathbb R\to\mathbb R$, $f(x) = a^x$ con $a>0$ (per $a \ne 1$ ha immagine $(0,+\infty)$).
- **Logaritmica**: $f : (0,+\infty)\to\mathbb R$, $f(x) = \log_a x$ con $a>0$, $a\neq1$.

Entrambe crescenti se $a>1$, decrescenti se $0<a<1$.` },

{ t: "def", titolo: R`Funzioni trigonometriche`, testo: R`
Definite tramite la circonferenza goniometrica, con l'angolo $x$ in **radianti** (lunghezza dell'arco): $\sin, \cos : \mathbb R\to[-1,1]$, periodiche di periodo $2\pi$.
- **Pitagora**: $\sin^2x+\cos^2x = 1$ per ogni $x$.
- **Tangente**: $\tan x = \dfrac{\sin x}{\cos x}$ su $\mathbb R\setminus\lbrace\frac\pi2+k\pi : k\in\mathbb Z\rbrace$.
- **Cotangente**: $\cot x = \dfrac{\cos x}{\sin x}$ su $\mathbb R\setminus\lbrace k\pi : k\in\mathbb Z\rbrace$.` },

{ t: "def", titolo: R`Funzioni iperboliche`, testo: R`
$$\sinh x = \frac{e^x - e^{-x}}{2}\ \text{(dispari)}, \qquad \cosh x = \frac{e^x+e^{-x}}{2}\ \text{(pari)},$$
$$\tanh x = \frac{\sinh x}{\cosh x},\qquad \coth x = \frac{\cosh x}{\sinh x}\ (x\neq0).$$` },

{ t: "es", s: "casa", diff: 1, titolo: R`$\cosh^2 x - \sinh^2 x = 1$`, testo: R`
Dimostrare che $\cosh^2x-\sinh^2x = 1$ per ogni $x\in\mathbb R$.`, dim: R`
$$\cosh^2x-\sinh^2x = \frac{e^{2x}+2+e^{-2x}}{4}-\frac{e^{2x}-2+e^{-2x}}{4} = \frac44 = 1.\ \blacksquare$$` },

{ t: "def", titolo: R`Parte intera, funzione di Dirichlet`, testo: R`
- **Parte intera inferiore** (floor): $\lfloor x\rfloor = \max\lbrace k\in\mathbb Z : k\le x\rbrace$. Es. $\lfloor 1{,}5\rfloor = 1$, $\lfloor 0{,}7\rfloor = 0$, $\lfloor -3{,}1\rfloor = -4$.
- **Parte intera superiore** (ceiling): $\lceil x\rceil = \min\lbrace k\in\mathbb Z : k\ge x\rbrace$.
- **Dirichlet**: $D(x) = 1$ se $x\in\mathbb Q$, $D(x) = 0$ se $x\notin\mathbb Q$ (grafico a "nuvole di punti").` },

{ t: "def", titolo: R`Immagine`, testo: R`
Sia $f : A\to B$ e $E\subseteq A$. L'**immagine di $E$** tramite $f$ è
$$f(E) = \lbrace f(x) : x\in E\rbrace = \lbrace y\in B : \exists x\in E,\ y = f(x)\rbrace\subseteq B.$$
L'**immagine di $f$** è $\mathrm{Im}(f) = f(A)$.

Esempio: per $f:\mathbb N\to\mathbb N$, $f(x)=2x$, $\mathrm{Im}(f)$ = numeri pari.

**Attenzione:** l'immagine di un insieme è un **insieme**, il valore in un punto è un **elemento**. Se $f(c) = 2$, allora $f(\lbrace c\rbrace) = \lbrace2\rbrace$ ma $f(c) = 2$ (non $\lbrace2\rbrace$).` },

]});

/* ---- 2026-10-12.js ---- */
L({ data: "2026-10-12", n: 9, titolo: "Controimmagine, composizione, iniettività, inversa", voci: [

{ t: "es", titolo: R`Calcolo dell'immagine: $2x-1$ e $x^2$`, testo: R`
**$f(x) = 2x-1$ su $\mathbb R$.** Cerco $y$ tali che $y = 2x-1$ per qualche $x$: basta $x = \frac{y+1}2$, infatti $f\!\left(\frac{y+1}2\right) = y$. Quindi $\mathrm{Im}(f) = \mathbb R$.

**$f(x) = x^2$ su $\mathbb R$.** Se $y = x^2$ allora $y\ge0$, quindi $\mathrm{Im}(f)\subseteq[0,+\infty)$. Viceversa per $y\ge0$ vale $y = (\sqrt y)^2$. Quindi $\mathrm{Im}(f) = [0,+\infty)$.` },

{ t: "def", titolo: R`Controimmagine (antiimmagine, preimmagine)`, testo: R`
Data $f:A\to B$ e $Y\subseteq B$, la **controimmagine** di $Y$ tramite $f$ è
$$f^{\leftarrow}(Y) = \lbrace x\in A : f(x)\in Y\rbrace\subseteq A.$$
Attenzione: $Y$ è un **insieme**. Può essere vuota (se nessun punto va in $Y$).` },

{ t: "def", titolo: R`Funzione composta`, testo: R`
Siano $f : A\to B$, $g : C\to D$ con $f(A)\cap C\neq\emptyset$ (dove arriva $f$ può partire $g$). Posto
$$E = f^{\leftarrow}\big(f(A)\cap C\big) = \lbrace x\in A: f(x)\in C\rbrace\subseteq A,$$
la **funzione composta** "$g$ dopo $f$" è $g\circ f : E\to D$, $(g\circ f)(x) = g(f(x))$.

Es. $f(x) = x^2$, $g(x) = 2x+1$: $\mathrm{Im} f = [0,+\infty)$, $\mathrm{Im} f\cap D(g) = [0,+\infty)\neq\emptyset$, $D(g\circ f) = f^{\leftarrow}([0,+\infty)) = \mathbb R$ e $(g\circ f)(x) = 2x^2+1$.

(In alcuni testi si chiede $f(A)\subseteq C$; noi usiamo la richiesta più debole $f(A)\cap C\neq\emptyset$.)` },

{ t: "att", titolo: R`In generale $g\circ f\neq f\circ g$`, testo: R`
Prima le mutande e poi i pantaloni è diverso da prima i pantaloni e poi le mutande.

Con $f(x) = x^2$, $g(x) = \sin x$: $(g\circ f)(x) = \sin(x^2)$, $(f\circ g)(x) = \sin^2 x$. In $x = 45° = \frac\pi4$: $(g\circ f)\!\left(\frac\pi4\right) = \sin\frac{\pi^2}{16}$, mentre $(f\circ g)\!\left(\frac\pi4\right) = \left(\sin\frac\pi4\right)^2 = \frac12$, e $\sin\frac{\pi^2}{16}\neq\frac12$.` },

{ t: "def", titolo: R`Funzione iniettiva, suriettiva, biiettiva`, testo: R`
Sia $f : A\to B$.
- **Iniettiva**: ogni $y\in B$ è immagine di **al più un** elemento di $A$. Cioè $\forall y\in B$, $f^{\leftarrow}(\lbrace y\rbrace) = \emptyset$ oppure $\exists! x\in A$ con $f^{\leftarrow}(\lbrace y\rbrace) = \lbrace x\rbrace$. Equivalentemente: $f(x_1) = f(x_2)\Rightarrow x_1 = x_2$.
- **Suriettiva**: ogni $y\in B$ è immagine di **almeno un** elemento: $\forall y\in B$, $f^{\leftarrow}(\lbrace y\rbrace)\neq\emptyset$, cioè $\mathrm{Im}(f) = B$.
- **Biiettiva** (biunivoca): iniettiva e suriettiva, cioè $\forall y\in B\ \exists! x\in A: y = f(x)$.

Graficamente (funzioni reali): iniettiva $\iff$ ogni retta orizzontale tocca il grafico in al più un punto; suriettiva $\iff$ in almeno un punto per ogni $y\in B$.` },

{ t: "es", titolo: R`Il seno: iniettivo o suriettivo?`, testo: R`
- $\sin:\mathbb R\to[-1,1]$ è suriettiva ma **non** iniettiva ($\sin 0 = \sin\pi$).
- $\sin : \left[-\frac\pi2,\frac\pi2\right]\to\mathbb R$ è iniettiva ma **non** suriettiva (non raggiunge $2$).` },

{ t: "def", titolo: R`Funzione inversa`, testo: R`
Sia $f: A\to B$ **iniettiva**. Allora $f$ è **invertibile** e la sua inversa è l'unica funzione $f^{-1}:\mathrm{Im}(f)\to A$ tale che
$$f^{-1}\circ f = \mathrm{Id}_A,\qquad\text{cioè } f^{-1}(f(x)) = x\ \ \forall x\in A,$$
dove $\mathrm{Id}_A : A\to A$, $\mathrm{Id}_A(x) = x$ è la **funzione identità**.` },

{ t: "att", titolo: R`Per noi invertibile = iniettiva`, testo: R`
In alcuni testi sono invertibili solo le funzioni biunivoche. Per noi basta l'iniettività: l'inversa è definita sull'immagine.` },

{ t: "es", s: "casa", diff: 1, titolo: R`Ogni funzione è suriettiva sull'immagine`, testo: R`
Dimostrare che $f : A\to\mathrm{Im}(f)$ è sempre suriettiva.`, dim: R`
Se $y\in\mathrm{Im}(f) = \lbrace f(x):x\in A\rbrace$, per definizione esiste $x\in A$ con $y = f(x)$. $\blacksquare$` },

{ t: "def", titolo: R`Restrizione di una funzione`, testo: R`
Sia $f : A\to B$ e $\emptyset\neq C\subseteq A$. La **restrizione** di $f$ a $C$ è $f|_C : C\to B$, $f|_C(x) = f(x)$ per $x\in C$.

Esempio: $\sin|_{[-\pi/2,\pi/2]}$ è iniettiva, quindi si può invertire: $\arcsin = \left(\sin|_{[-\pi/2,\pi/2]}\right)^{-1} : [-1,1]\to\left[-\frac\pi2,\frac\pi2\right]$.` },

]});

/* ---- 2026-10-13.js ---- */
L({ data: "2026-10-13", n: 10, titolo: "Proprietà delle funzioni, intorni, punti di accumulazione", voci: [

{ t: "def", titolo: R`Funzione pari e dispari`, testo: R`
Sia $f:A\to\mathbb R$ con $A$ **simmetrico rispetto all'origine** ($x\in A\Rightarrow -x\in A$). $f$ è
- **pari** se $f(-x) = f(x)$ per ogni $x\in A$ (grafico simmetrico rispetto all'asse $y$);
- **dispari** se $f(-x) = -f(x)$ per ogni $x\in A$ (simmetrico rispetto all'origine).

Esempi: $x^2$, $x^4$, $\cos x$, $\cosh x$ sono pari; $x^3$, $\sin x$, $\sinh x$ sono dispari.` },

{ t: "prop", s: "casa", diff: 1, titolo: R`$x^n$ è pari se $n$ è pari, dispari se $n$ è dispari`, testo: R`
Sia $n\in\mathbb N_0$. $f(x) = x^n$ su $\mathbb R$ è pari se $n$ è pari, dispari se $n$ è dispari.`, dim: R`
$(-x)^n = (-1)^n x^n$, e $(-1)^n = 1$ se $n$ è pari, $-1$ se $n$ è dispari. $\blacksquare$` },

{ t: "es", s: "casa", diff: 1, titolo: R`Somme, prodotti e quozienti di funzioni pari/dispari`, testo: R`
Se $f, g$ sono pari, cosa sono $f+g$, $f\cdot g$, $f/g$? E se sono dispari? Ogni funzione è pari o dispari?`, dim: R`
- $f,g$ **pari**: $f+g$, $fg$, $f/g$ sono tutte **pari**.
- $f,g$ **dispari**: $f+g$ è **dispari** ($-f(x)-g(x)$); $fg$ e $f/g$ sono **pari** ($(-f)(-g) = fg$).
- $f$ pari, $g$ dispari: $fg$ e $f/g$ sono dispari.

**No**, non ogni funzione è pari o dispari: $f(x) = x+1$ non è né pari né dispari ($f(1) = 2$, $f(-1) = 0$). Anche $\log$ non lo è, perché $(0,+\infty)$ non è simmetrico.` },

{ t: "def", titolo: R`Funzione periodica`, testo: R`
$f:\mathbb R\to\mathbb R$ è **periodica di periodo** $T>0$ se $f(x+T) = f(x)$ per ogni $x\in\mathbb R$.

Es. $\sin$ e $\cos$ sono periodiche di periodo $2\pi$. Esercizio: si ha anche $f(x+nT) = f(x-T) = f(x)$ per ogni $n\in\mathbb Z$ (per induzione).` },

{ t: "def", titolo: R`Funzione monotona`, testo: R`
Sia $f:A\to\mathbb R$, $A\subseteq\mathbb R$. Per ogni $x_1,x_2\in A$:
- **crescente**: $x_1<x_2\Rightarrow f(x_1)\le f(x_2)$;
- **strettamente crescente**: $x_1<x_2\Rightarrow f(x_1)<f(x_2)$;
- **decrescente**: $x_1<x_2\Rightarrow f(x_1)\ge f(x_2)$;
- **strettamente decrescente**: $x_1<x_2\Rightarrow f(x_1)>f(x_2)$.

Monotona = crescente o decrescente. Es. $2x$ strett. crescente, $-5x$ strett. decrescente, $f\equiv7$ crescente **e** decrescente ma non strettamente.` },

{ t: "def", titolo: R`Funzione limitata e illimitata`, testo: R`
$f:A\to\mathbb R$ è **limitata inferiormente / superiormente / limitata** se lo è l'insieme $\mathrm{Im}(f)$. Altrimenti è illimitata.

Esempi: $\sin,\cos$ limitate ($\mathrm{Im} = [-1,1]$); $x^2$ limitata inferiormente e illimitata superiormente; $x^3$ illimitata.` },

{ t: "att", titolo: R`La limitatezza dipende solo dall'immagine`, testo: R`
Non conta il dominio: $\log:(0,+\infty)\to\mathbb R$ è illimitata ($\mathrm{Im}\log = \mathbb R$), anche se il dominio è limitato inferiormente.` },

{ t: "def", titolo: R`Sup, inf, max, min di una funzione; punti estremanti`, testo: R`
Maggioranti, minoranti, $\sup$, $\inf$, $\max$, $\min$ di $f$ sono quelli di $\mathrm{Im}(f)$:
$$\sup f = \sup\mathrm{Im}(f),\quad \max f = \max\mathrm{Im}(f),\ \dots$$
Se esistono, $\max f$ e $\min f$ sono i **valori estremi**; i punti $x\in D(f)$ in cui sono raggiunti sono i **punti di massimo / minimo** (punti estremanti).

**Massimi/minimi locali (relativi)**: max/min globali di una restrizione di $f$ a un opportuno intorno.` },

{ t: "att", titolo: R`Max unico, punti di max no; funzioni limitate senza max`, testo: R`
- $\max f$ e $\min f$, se esistono, sono **unici**, ma ci possono essere **più punti** di massimo o di minimo (es. $\sin$ ha max $1$ in tutti i $\frac\pi2+2k\pi$).
- Esistono funzioni limitate senza max né min: $\arctan$ è limitata, strettamente crescente, ha $\sup = \frac\pi2$ e $\inf = -\frac\pi2$ ma non li raggiunge.
- Esempio "selvaggio": il **seno del topologo** $f(x) = \sin\frac1x$ su $(0,+\infty)$.` },

{ t: "es", s: "casa", diff: 1, titolo: R`$f$ costante $\iff \min f = \max f$`, testo: R`
Sia $f:A\to\mathbb R$. Dimostrare che $f$ è costante se e solo se $\min f = \max f$.`, dim: R`
($\Rightarrow$) se $f\equiv c$, $\mathrm{Im} f = \lbrace c\rbrace$, quindi $\min f = \max f = c$.

($\Leftarrow$) per ogni $x$: $\min f\le f(x)\le \max f = \min f$, quindi $f(x) = \min f$ per ogni $x$. $\blacksquare$` },

{ t: "def", titolo: R`Intorno (sferico) di un punto di $\overline{\mathbb R}$`, testo: R`
- Se $r\in\mathbb R$: un **intorno sferico** di $r$ è ogni intervallo aperto $(r-\varepsilon, r+\varepsilon)$ con $\varepsilon>0$ (centrato in $r$, raggio $\varepsilon$).
- Se $r = +\infty$: un intorno è ogni intervallo aperto $(M,+\infty)$ con $M\in\mathbb R\cup\lbrace-\infty\rbrace$.
- Se $r = -\infty$: un intorno è ogni intervallo aperto $(-\infty, M)$ con $M\in\mathbb R\cup\lbrace+\infty\rbrace$.

(Con $M = \mp\infty$ anche tutto $\mathbb R$ è un intorno di $\pm\infty$; per i limiti non cambia nulla, perché conta solo che si possa prendere $M$ grande quanto si vuole.)

Es. $(5{,}9;\ 6{,}1)$ è un intorno di $6$; $(4,7)$ non è un intorno sferico di $6$ (raggi diversi).`, fig: "intorni" },

{ t: "prop", s: "omessa", diff: 2, titolo: R`Proprietà degli intorni: intersezione e separazione`, testo: R`
(Negli appunti sono solo enunciate, con i disegni; la dimostrazione è un'aggiunta.)

1. **Intersezione**: se $I_1,I_2$ sono intorni di $r\in\overline{\mathbb R}$, allora $I_1\cap I_2$ è ancora un intorno di $r$.
2. **Separazione**: se $r_1\neq r_2$ in $\overline{\mathbb R}$, esistono un intorno $I_1$ di $r_1$ e un intorno $I_2$ di $r_2$ tali che $I_1\cap I_2 = \emptyset$.`, dim: R`
1. Per $r\in\mathbb R$: l'intersezione di due intorni centrati in $r$ è quello di raggio più piccolo. Per $r = +\infty$: $(M_1,+\infty)\cap(M_2,+\infty) = (\max\lbrace M_1,M_2\rbrace,+\infty)$. Analogo per $-\infty$.

2. Per $r_1<r_2$ reali, basta prendere raggio $\varepsilon = \frac{r_2-r_1}{2}$ per entrambi. Se $r_1\in\mathbb R$ e $r_2 = +\infty$: $(r_1-1,r_1+1)$ e $(r_1+1,+\infty)$. Gli altri casi sono analoghi. $\blacksquare$` },

{ t: "def", titolo: R`Punto di accumulazione`, testo: R`
Sia $\emptyset\neq A\subseteq\mathbb R$. $r\in\overline{\mathbb R}$ è un **punto di accumulazione** per $A$ se
- ($r\in\mathbb R$) per ogni intorno $I$ di $r$: $\ (I\setminus\lbrace r\rbrace)\cap A\neq\emptyset$;
- ($r = \pm\infty$) per ogni intorno $I$ di $r$: $\ I\cap A\neq\emptyset$.

Cioè: vicino quanto voglio a $r$ trovo punti di $A$ **diversi da $r$**. Non serve che $r\in A$.` },

]});

/* ---- 2026-10-15.js ---- */
L({ data: "2026-10-15", n: 11, titolo: "Punti isolati, definitivamente, definizione di limite", voci: [

{ t: "def", titolo: R`Punto isolato`, testo: R`
Sia $\emptyset\neq A\subseteq\mathbb R$. $r\in A$ si dice **isolato** per $A$ se non è di accumulazione per $A$, cioè
$$\exists I\subseteq\mathbb R \text{ intorno di } r : (I\setminus\lbrace r\rbrace)\cap A = \emptyset.$$` },

{ t: "es", titolo: R`Esempi di punti isolati e di accumulazione`, testo: R`
- $A = [1,2]\cup\lbrace3\rbrace$: $3$ è isolato (con $I = (2{,}5;\ 3{,}5)$). Ogni $r\in[1,2]$ è di accumulazione.
- $A = \lbrace\frac1n : n\in\mathbb N\rbrace$: $0$ è di accumulazione (pur non stando in $A$). Fissato $\varepsilon>0$, per Archimede trovo $n > \frac1\varepsilon$, e allora $\frac1n\in(-\varepsilon,\varepsilon)\cap A$.
- $A = \mathbb Z$: $\pm\infty$ sono di accumulazione. Dato $M\in\mathbb R$ scelgo $n = \lfloor M\rfloor+1\in\mathbb Z$, e $n\in(M,+\infty)$. Ogni intero è isolato.` },

{ t: "es", s: "casa", diff: 2, titolo: R`Ogni reale è di accumulazione per $\mathbb Q$`, testo: R`
Dimostrare che ogni $r\in\mathbb R$ è di accumulazione per $\mathbb Q$ (quindi $\mathbb Q$ non ha punti isolati).

Dimostrare inoltre che $+\infty$ è di accumulazione per $A$ se e solo se $A$ è superiormente illimitato.`, dim: R`
**Prima parte.** Attenzione: a lezione è stata dimostrata solo la densità **tra due razionali**, quindi qui serve un argomento diretto. Dato $\varepsilon>0$:
- per la **proprietà di Archimede** ($\mathbb N$ non è superiormente limitato) esiste $n\in\mathbb N$ con $n>\frac1\varepsilon$, cioè $\frac1n<\varepsilon$;
- sia $m = \lfloor nr\rfloor+1\in\mathbb Z$, così $m-1\le nr<m$, cioè $r<\dfrac mn\le r+\dfrac1n$.

Allora $q = \frac mn\in\mathbb Q$ e $r<q\le r+\frac1n<r+\varepsilon$, quindi $q\in(r-\varepsilon,r+\varepsilon)\setminus\lbrace r\rbrace$.

**Seconda parte.** $+\infty$ di accumulazione $\iff$ $\forall M\ (M,+\infty)\cap A\neq\emptyset$ $\iff$ $\forall M\ \exists a\in A : a>M$ $\iff$ $\sup A = +\infty$. $\blacksquare$` },

{ t: "def", titolo: R`Definitivamente`, testo: R`
Siano $\emptyset\neq A\subseteq\mathbb R$, $x_0\in\overline{\mathbb R}$ di accumulazione per $A$, $f : A\to\mathbb R$. $f$ soddisfa una proprietà $P$ **definitivamente per $x\to x_0$** se
$$\exists I \text{ intorno di } x_0 : f(x) \text{ soddisfa } P\quad\forall x\in A\cap I\setminus\lbrace x_0\rbrace$$
(il punto $x_0$ si toglie solo se $x_0\in\mathbb R$).

Esempio del prof: $x_0 = 0$, $f = \sin$, $P$ = "$f$ è positiva per $x>0$". Basta l'intorno $I = \left(-\frac\pi2,\frac\pi2\right)$: per ogni $x\in I$ con $x>0$ si ha $\sin x>0$.

Notazioni: $x\to x_0^+$ ($x$ tende a $x_0$ da destra, $x>x_0$); $x\to x_0^-$ (da sinistra, $x<x_0$).` },

{ t: "def", titolo: R`Definizione di limite`, testo: R`
Siano $\emptyset\neq A\subseteq\mathbb R$, $x_0\in\overline{\mathbb R}$ punto di accumulazione per $A$, $f: A\to\mathbb R$. Diciamo che $\ell\in\overline{\mathbb R}$ è il **limite** di $f$ per $x\to x_0$, e scriviamo $\displaystyle\lim_{x\to x_0}f(x) = \ell$, se
$$\forall U \text{ intorno di } \ell\ \ \exists I \text{ intorno di } x_0 :\ f(x)\in U\quad\forall x\in A\cap I\setminus\lbrace x_0\rbrace.$$
Caso $x_0,\ell\in\mathbb R$ in forma $\varepsilon$–$\delta$:
$$\forall\varepsilon>0\ \exists\delta>0 : |f(x)-\ell|<\varepsilon\quad\forall x\in A,\ 0<|x-x_0|<\delta.$$` },

{ t: "oss", titolo: R`Cosa dice (e non dice) la definizione di limite`, testo: R`
- Equivale a: per ogni intorno $U$ di $\ell$ fissato, $f(x)\in U$ **definitivamente** per $x\to x_0$.
- **Non** interessa cosa fa $f$ in $x_0$ (che può anche non appartenere al dominio).
- $x_0$ deve essere di accumulazione per $A$: **non si fanno limiti nei punti isolati** del dominio.` },

{ t: "oss", titolo: R`Significato operativo del limite`, testo: R`
Per verificare un limite con la definizione:
- $x_0\in\mathbb R$, $\ell\in\mathbb R$: fisso $\varepsilon>0$ e cerco $\delta>0$ tale che $|f(x)-\ell|<\varepsilon$ per $0<|x-x_0|<\delta$;
- $x_0\in\mathbb R$, $\ell = +\infty$: fisso $M$ (grande) e cerco $\delta>0$ tale che $f(x)>M$ per $0<|x-x_0|<\delta$;
- $x_0 = +\infty$, $\ell\in\mathbb R$: fisso $\varepsilon>0$ e cerco $M$ tale che $|f(x)-\ell|<\varepsilon$ per $x>M$.` },

{ t: "es", titolo: R`Verifiche di limiti con la definizione`, testo: R`
**1.** $f(x) = 1$ per $x\neq0$, $f(0) = 0$. Allora $\lim_{x\to0}f(x) = 1$: fissato $U = (1-\varepsilon,1+\varepsilon)$, per $x\neq0$ si ha $f(x) = 1\in U$, quindi qualsiasi $\delta$ va bene (es. $\delta = 157$). Il valore $f(0)=0$ non conta.

**2.** $f(x) = 2x$. Allora $\lim_{x\to0}f(x) = 0$: fissato $\varepsilon>0$, $|2x|<\varepsilon\iff|x|<\frac\varepsilon2$. Basta $\delta = \frac\varepsilon2$.` },

{ t: "teo", s: "dim", diff: 2, titolo: R`Unicità del limite`, testo: R`
Siano $\emptyset\neq A\subseteq\mathbb R$, $x_0\in\overline{\mathbb R}$ di accumulazione per $A$, $f:A\to\mathbb R$. Se il limite di $f$ per $x\to x_0$ esiste, allora è **unico**.`, dim: R`
Per assurdo siano $\ell_1\neq\ell_2$ due limiti. Per la **separazione** degli intorni esistono $U_1$ intorno di $\ell_1$ e $U_2$ intorno di $\ell_2$ con $U_1\cap U_2 = \emptyset$.

Per definizione di limite esistono intorni $I_1, I_2$ di $x_0$ con
$$f(x)\in U_1\ \ \forall x\in A\cap I_1\setminus\lbrace x_0\rbrace,\qquad f(x)\in U_2\ \ \forall x\in A\cap I_2\setminus\lbrace x_0\rbrace.$$
Per l'**intersezione** degli intorni, $I = I_1\cap I_2$ è un intorno di $x_0$. Siccome $x_0$ è di accumulazione, esiste $x\in A\cap I\setminus\lbrace x_0\rbrace$, e per tale $x$: $f(x)\in U_1\cap U_2$. Quindi $U_1\cap U_2\neq\emptyset$: contraddizione. $\blacksquare$`, fig: "unicita" },

]});

/* ---- 2026-10-19.js ---- */
L({ data: "2026-10-19", n: 13, titolo: "Limite dell'esponenziale, limitatezza locale, limiti destro e sinistro", voci: [

{ t: "prop", s: "casa", diff: 1, titolo: R`Limite di una funzione costante`, testo: R`
Sia $f: A\to\mathbb R$ con $f(x) = c$ per ogni $x\in A$. Allora $\displaystyle\lim_{x\to x_0}f(x) = c$ per ogni $x_0$ di accumulazione per $A$ (anche $\pm\infty$).`, dim: R`
Per ogni intorno $U$ di $c$ si ha $f(x) = c\in U$ per **ogni** $x\in A$, quindi qualunque intorno $I$ di $x_0$ va bene. $\blacksquare$` },

{ t: "teo", s: "omessa", diff: 1, titolo: R`Disuguaglianza di Bernoulli`, testo: R`
$$(1+t)^n\ge1+nt\qquad\forall n\in\mathbb N_0,\ \forall t\ge0.$$
(Vale in realtà per ogni $t\ge-1$.) Negli appunti c'è solo: "si dimostra per induzione su $n$ a $t$ fissato"; i passaggi qui sotto sono un'aggiunta.`, dim: R`
Induzione su $n$ con $t$ fissato. **Base** $n=0$: $1\ge1$.

**Passo**: se $(1+t)^n\ge1+nt$, allora, siccome $1+t>0$,
$$(1+t)^{n+1} = (1+t)^n(1+t)\ge(1+nt)(1+t) = 1+(n+1)t+nt^2\ge1+(n+1)t.\ \blacksquare$$` },

{ t: "teo", s: "dim", diff: 3, titolo: R`$\lim_{x\to0}a^x = 1$ (con $a>1$)`, testo: R`
Sia $a > 1$. Allora $\displaystyle\lim_{x\to 0}a^x = a^0 = 1$.`, dim: R`
Fissato $\varepsilon>0$ cerco $\delta>0$ tale che $1-\varepsilon<a^x<1+\varepsilon$ per $|x|<\delta$. Posso supporre $\varepsilon\in(0,1)$.

**(1) Disuguaglianza destra.** Cerco $n\in\mathbb N$ con $a^{1/n}<1+\varepsilon$, cioè $a<(1+\varepsilon)^n$. Per **Bernoulli** $(1+\varepsilon)^n\ge1+n\varepsilon$, quindi basta $1+n\varepsilon>a$, cioè $n>\frac{a-1}\varepsilon$. Fisso tale $n$ e prendo $\delta\le\frac1n$: siccome $a^x$ è strettamente crescente, $|x|<\delta\Rightarrow a^x<a^{1/n}<1+\varepsilon$.

**(2) Disuguaglianza sinistra.** Siccome $\varepsilon\in(0,1)$ vale $\frac1{1-\varepsilon}>1+\varepsilon$ (perché $(1-\varepsilon)(1+\varepsilon) = 1-\varepsilon^2<1$). Quindi lo stesso $n$ dà $a^{1/n}<1+\varepsilon<\frac1{1-\varepsilon}$, cioè $a^{-1/n}>1-\varepsilon$. Per monotonia, $|x|<\delta\le\frac1n\Rightarrow a^x>a^{-1/n}>1-\varepsilon$.

Quindi con $\delta = \frac1n$ vale $|a^x-1|<\varepsilon$ per $|x|<\delta$. Il caso $a=1$ è banale (funzione costante). $\blacksquare$` },

{ t: "es", s: "casa", diff: 2, titolo: R`$\lim_{x\to0}a^x = 1$ per $a\in(0,1)$`, testo: R`
Dimostrare il caso $0<a<1$. Consiglio: "fare i furbi e non fare fatica".`, dim: R`
Posto $b = \frac1a>1$, si ha $a^x = b^{-x}$ e $|a^x-1| = |b^{-x}-1|$. Dato $\varepsilon$, il $\delta$ trovato per $b$ funziona: se $|x|<\delta$ allora anche $|-x|<\delta$, quindi $|b^{-x}-1|<\varepsilon$. $\blacksquare$` },

{ t: "es", s: "casa", diff: 2, titolo: R`$\lim_{x\to x_0}x^n = x_0^n$`, testo: R`
Dimostrare con la definizione che $\lim_{x\to x_0}x^n = x_0^n$ per ogni $n\in\mathbb N_0$, $x_0\in\mathbb R$. (Il 26/10 lo ritroveremo con l'algebra dei limiti.)`, dim: R`
Per $n = 0$ è la costante. Per $n\ge1$, usando $x^n - x_0^n = (x-x_0)\sum_{k=0}^{n-1}x^kx_0^{n-1-k}$: se $|x-x_0|<1$ allora $|x|\le|x_0|+1 =: R$ e
$$|x^n-x_0^n|\le|x-x_0|\cdot nR^{n-1}.$$
Basta prendere $\delta = \min\left\lbrace1,\ \frac{\varepsilon}{nR^{n-1}}\right\rbrace$. $\blacksquare$` },

{ t: "es", s: "casa", diff: 2, titolo: R`Limiti di funzioni pari e dispari`, testo: R`
Sia $f:\mathbb R\to\mathbb R$ pari e $\ell\in\overline{\mathbb R}$. Dimostrare che $\lim_{x\to x_0}f(x) = \ell\iff\lim_{x\to-x_0}f(x) = \ell$. Se $f$ è dispari: $\lim_{x\to x_0}f(x) = \ell\iff\lim_{x\to-x_0}f(x) = -\ell$.`, dim: R`
Se $I$ è un intorno di $x_0$, allora $-I$ è un intorno di $-x_0$. Per $x\in -I$, $-x\in I$ e $f(x) = f(-x)\in U$. Per la dispari, $f(x) = -f(-x)\in -U$, e $-U$ è un intorno di $-\ell$. $\blacksquare$` },

{ t: "es", s: "casa", diff: 2, titolo: R`$\lim\sin x = \sin x_0$, $\lim\cos x = \cos x_0$`, testo: R`
Dimostrare che per ogni $x_0\in\mathbb R$: $\lim_{x\to x_0}\sin x = \sin x_0$ e $\lim_{x\to x_0}\cos x = \cos x_0$.

Suggerimento: usare $|\sin x|\le|x|$, $|\cos x|\le1$ e le formule di prostaferesi.`, dim: R`
Per prostaferesi $\sin x-\sin x_0 = 2\cos\frac{x+x_0}2\sin\frac{x-x_0}2$, quindi
$$|\sin x-\sin x_0|\le2\cdot1\cdot\left|\frac{x-x_0}2\right| = |x-x_0|.$$
Basta $\delta = \varepsilon$. Analogamente $\cos x-\cos x_0 = -2\sin\frac{x+x_0}2\sin\frac{x-x_0}2$ dà $|\cos x-\cos x_0|\le|x-x_0|$. $\blacksquare$` },

{ t: "es", s: "casa", diff: 2, titolo: R`$\lim_{x\to+\infty}\sin x$ non esiste`, testo: R`
Dimostrare che $\lim_{x\to+\infty}\sin x$ e $\lim_{x\to-\infty}\cos x$ **non esistono**.`, dim: R`
Se fosse $\lim_{x\to+\infty}\sin x = \ell$, in ogni intorno $(M,+\infty)$ ci sono sia punti $\frac\pi2+2k\pi$ (dove $\sin = 1$) sia punti $-\frac\pi2+2k\pi$ (dove $\sin = -1$). 
- Se $\ell\in\mathbb R$: prendo $U$ intorno di $\ell$ di raggio $\frac12$. Definitivamente $\sin x\in U$, ma $U$ non può contenere sia $1$ che $-1$ (distano $2>1$): assurdo.
- Se $\ell = +\infty$: prendo $U = (1,+\infty)$; dovrebbe essere $\sin x>1$ definitivamente, impossibile perché $\sin x\le1$. Se $\ell = -\infty$: idem con $U = (-\infty,-1)$.

Stesso ragionamento per $\cos$ (con i punti $2k\pi$ e $\pi+2k\pi$). $\blacksquare$` },

{ t: "prop", s: "dim", diff: 1, titolo: R`Se il limite è finito, $f$ è localmente limitata`, testo: R`
Sia $f:A\to\mathbb R$, $x_0$ di accumulazione per $A$. Se $\lim_{x\to x_0}f(x) = \ell\in\mathbb R$, allora $f$ è **localmente limitata** in $x_0$:
$$\exists I \text{ intorno di } x_0,\ \exists C>0 :\ |f(x)|\le C\quad\forall x\in A\cap I\setminus\lbrace x_0\rbrace.$$`, dim: R`
Prendo $\varepsilon = 1$ nella definizione di limite: esiste un intorno $I$ di $x_0$ con $|f(x)-\ell|<1$ per $x\in A\cap I\setminus\lbrace x_0\rbrace$. Per la disuguaglianza triangolare
$$|f(x)|\le|f(x)-\ell|+|\ell|<1+|\ell|.$$
Basta prendere $C = 1+|\ell|$. $\blacksquare$` },

{ t: "def", titolo: R`Punto di accumulazione destro / sinistro`, testo: R`
Sia $\emptyset\neq A\subseteq\mathbb R$, $x_0\in\mathbb R$. $x_0$ è punto di accumulazione **destro** per $A$ se è di accumulazione per $A\cap(x_0,+\infty)$; **sinistro** se lo è per $A\cap(-\infty,x_0)$.

Es. $A = [1,2]\cup\lbrace3\rbrace$: ogni $x_0\in(1,2)$ è di accumulazione sia destro che sinistro; $1$ è solo **destro**; $2$ è solo **sinistro**; $3$ è isolato.

Un punto di accumulazione destro o sinistro è anche di accumulazione (esercizio).` },

{ t: "def", titolo: R`Limite destro e sinistro`, testo: R`
Se $x_0$ è di accumulazione destro per $A$, $\displaystyle\lim_{x\to x_0^+}f(x) = \ell$ (**limite destro**) significa
$$\forall U \text{ intorno di }\ell\ \exists I \text{ intorno di }x_0 : f(x)\in U\quad\forall x\in A\cap I\cap(x_0,+\infty).$$
Il **limite sinistro** $\lim_{x\to x_0^-}$ è uguale con $A\cap I\cap(-\infty,x_0)$.

Motivazione: $\lim_{x\to0}\frac1x$ non esiste, ma da destra va a $+\infty$ e da sinistra a $-\infty$.` },

{ t: "es", s: "casa", diff: 1, titolo: R`$\lim_{x\to 0^\pm}\frac1x = \pm\infty$`, testo: R`
Dimostrare che $\displaystyle\lim_{x\to0^+}\frac1x = +\infty$ e $\displaystyle\lim_{x\to0^-}\frac1x = -\infty$.`, dim: R`
Fissato $M>0$, per $0<x<\frac1M$ si ha $\frac1x>M$: l'intorno $I = \left(-\frac1M,\frac1M\right)$ funziona. A sinistra, per $-\frac1M<x<0$ vale $\frac1x<-M$. $\blacksquare$` },

{ t: "att", titolo: R`$x_0^+$ e $x_0^-$ non sono numeri`, testo: R`
In $\lim_{x\to x_0^+}$, i simboli $x_0^+$ e $x_0^-$ indicano il **modo** di avvicinarsi a $x_0$. Non sono numeri.` },

]});

/* ---- 2026-10-20.js ---- */
L({ data: "2026-10-20", n: 14, titolo: "Limite e limiti laterali, modulo, permanenza del segno", voci: [

{ t: "teo", s: "dim", diff: 2, titolo: R`Limite $\iff$ limite destro = limite sinistro`, testo: R`
Siano $f:A\to\mathbb R$, $\ell\in\overline{\mathbb R}$, e $x_0\in\mathbb R$ punto di accumulazione **sia destro sia sinistro** per $A$. Allora
$$\lim_{x\to x_0}f(x) = \ell\iff\lim_{x\to x_0^+}f(x) = \ell\ \text{ e }\ \lim_{x\to x_0^-}f(x) = \ell.$$`, dim: R`
($\Rightarrow$) Fisso $U$ intorno di $\ell$. Per ipotesi esiste $I$ intorno di $x_0$ con $f(x)\in U$ per ogni $x\in A\cap I\setminus\lbrace x_0\rbrace$. In particolare vale per ogni $x\in A\cap I\cap(x_0,+\infty)$ e per ogni $x\in A\cap I\cap(-\infty,x_0)$: questi sono i due limiti laterali (gli insiemi sono non vuoti perché $x_0$ è di accumulazione destro e sinistro).

($\Leftarrow$) Fisso $U$ intorno di $\ell$. Esistono $I_1$ con $f(x)\in U$ $\forall x\in A\cap I_1\cap(x_0,+\infty)$ e $I_2$ con $f(x)\in U$ $\forall x\in A\cap I_2\cap(-\infty,x_0)$. Per la proprietà di intersezione, $I = I_1\cap I_2$ è un intorno di $x_0$ e
$$f(x)\in U\quad\forall x\in A\cap I\setminus\lbrace x_0\rbrace,$$
perché ogni tale $x$ sta a destra o a sinistra di $x_0$. $\blacksquare$` },

{ t: "att", titolo: R`Questa non è la definizione di limite`, testo: R`
È un teorema, utile soprattutto per dimostrare che un limite **non esiste**: basta trovare due limiti laterali diversi.` },

{ t: "es", titolo: R`Esempi: funzione a gradino e $1/x$`, testo: R`
- $f(x) = 1$ per $x\ge0$, $f(x) = 0$ per $x<0$: $\lim_{x\to0^+}f = 1\neq0 = \lim_{x\to0^-}f$, quindi $\nexists\lim_{x\to0}f(x)$.
- $f(x) = 1$ per $x\neq0$, $f(0) = 18$: $\lim_{x\to0^\pm}f = 1$, quindi $\lim_{x\to0}f(x) = 1$. Il valore $f(0) = 18$ **non conta**.
- $\lim_{x\to0^+}\frac1x = +\infty\neq-\infty = \lim_{x\to0^-}\frac1x$, quindi $\nexists\lim_{x\to0}\frac1x$.
- $\lim_{x\to0^\pm}\frac1{x^2} = +\infty$, quindi $\lim_{x\to0}\frac1{x^2} = +\infty$.` },

{ t: "prop", s: "dim", diff: 2, titolo: R`Limite del modulo: $\lim f = \ell\Rightarrow\lim|f| = |\ell|$`, testo: R`
Siano $f:A\to\mathbb R$, $x_0$ di accumulazione, $\ell\in\overline{\mathbb R}$ (con la convenzione $|\pm\infty| = +\infty$). Allora
1. $\displaystyle\lim_{x\to x_0}f(x) = \ell\ \Rightarrow\ \lim_{x\to x_0}|f(x)| = |\ell|$;
2. $\displaystyle\lim_{x\to x_0}f(x) = 0\ \iff\ \lim_{x\to x_0}|f(x)| = 0$.`, dim: R`
**(1), caso $\ell\in\mathbb R$, $\ell\ge0$.** Se $\ell = 0$: $\big||f(x)|-0\big| = |f(x)-0|<\varepsilon$, ovvio. Se $\ell>0$, fisso $\varepsilon\in(0,\ell)$ (basta, perché intorni più piccoli sono più restrittivi). Esiste $\delta$ con $|f(x)-\ell|<\varepsilon$ per $0<|x-x_0|<\delta$, cioè $0<\ell-\varepsilon<f(x)<\ell+\varepsilon$. Quindi $f(x)>0$, $|f(x)| = f(x)$ e $\big||f(x)|-\ell\big|<\varepsilon$.

**Caso $\ell<0$:** si applica quanto sopra a $g = -f$, che tende a $-\ell = |\ell|>0$, e $|g| = |f|$.

**Casi $x_0 = \pm\infty$ o $\ell = \pm\infty$:** analoghi (esercizio). Ad es. se $\ell = -\infty$, dato $M>0$ definitivamente $f(x)<-M$, quindi $|f(x)|>M$.

**(2)** ($\Rightarrow$) è (1). ($\Leftarrow$): $|f(x)-0| = \big||f(x)|-0\big|<\varepsilon$ definitivamente. $\blacksquare$` },

{ t: "att", titolo: R`$\lim|f|$ esiste non implica che esista $\lim f$`, testo: R`
Con $f(x) = 1$ per $x\ge0$ e $f(x)=-1$ per $x<0$: $|f(x)| = 1$ per ogni $x$, quindi $\lim_{x\to0}|f(x)| = 1$, ma $\lim_{x\to0}f(x)$ non esiste. Il viceversa vale solo quando il limite è $0$.

Il risultato vale anche per limiti destri e sinistri.` },

{ t: "teo", s: "dim", diff: 2, titolo: R`Permanenza del segno`, testo: R`
Sia $\displaystyle\lim_{x\to x_0}f(x) = \ell\in\overline{\mathbb R}$. Allora
- se $\ell>0$, allora $f(x)>0$ definitivamente per $x\to x_0$;
- se $\ell<0$, allora $f(x)<0$ definitivamente per $x\to x_0$.`, dim: R`
Basta il caso $\ell>0$ (l'altro con $-f$).

Se $\ell\in(0,+\infty)$: scelgo $\varepsilon = \frac\ell2$ e trovo un intorno $I$ di $x_0$ con $|f(x)-\ell|<\frac\ell2$, quindi $f(x)>\ell-\frac\ell2 = \frac\ell2>0$ per ogni $x\in A\cap I\setminus\lbrace x_0\rbrace$.

Se $\ell = +\infty$: scelgo l'intorno $U = (M,+\infty)$ con $M>0$ e trovo $I$ con $f(x)>M>0$. $\blacksquare$` },

{ t: "teo", s: "dim", diff: 3, titolo: R`Limiti diversi $\Rightarrow$ funzioni ordinate definitivamente`, testo: R`
Siano $f,g:A\to\mathbb R$, $x_0$ di accumulazione per $A$, con
$$\lim_{x\to x_0}f(x) = \ell_1,\qquad\lim_{x\to x_0}g(x) = \ell_2,\qquad \ell_1,\ell_2\in\overline{\mathbb R}.$$
Se $\ell_1<\ell_2$, allora $f(x)<g(x)$ definitivamente per $x\to x_0$.`, dim: R`
Siccome $\ell_1\neq\ell_2$, trovo intorni $U_1$ di $\ell_1$ e $U_2$ di $\ell_2$ con $U_1\cap U_2 = \emptyset$, e scelti in modo che **ogni punto di $U_1$ sia minore di ogni punto di $U_2$**. Per la definizione di limite trovo $I_1, I_2$ intorni di $x_0$; su $I = I_1\cap I_2$ vale $f(x)\in U_1$ e $g(x)\in U_2$, quindi $f(x)<g(x)$.

Scelta degli intorni:
- $\ell_1,\ell_2\in\mathbb R$: $\varepsilon = \frac{\ell_2-\ell_1}2$, $U_1 = (\ell_1-\varepsilon,\ell_1+\varepsilon)$, $U_2 = (\ell_2-\varepsilon,\ell_2+\varepsilon)$. Si toccano solo in $\frac{\ell_1+\ell_2}{2}$, escluso perché gli intervalli sono aperti.
- $\ell_1\in\mathbb R$, $\ell_2 = +\infty$: $U_1 = (\ell_1-1,\ell_1+1)$, $U_2 = (\ell_1+1,+\infty)$.
- $\ell_1 = -\infty$, $\ell_2\in\mathbb R$: $U_1 = (-\infty,\ell_2-1)$, $U_2 = (\ell_2-1,\ell_2+1)$.
- $\ell_1 = -\infty$, $\ell_2 = +\infty$: $U_1 = (-\infty,0)$, $U_2 = (0,+\infty)$.

(I casi infiniti sono stati completati nella lezione del 22/10.) $\blacksquare$` },

]});

/* ---- 2026-10-22.js ---- */
L({ data: "2026-10-22", n: 15, titolo: "Confronto, carabinieri, algebra dei limiti finiti", voci: [

{ t: "teo", s: "dim", diff: 2, titolo: R`Teorema del confronto (per i limiti)`, testo: R`
Siano $f,g:A\to\mathbb R$, $x_0$ di accumulazione per $A$, e $f(x)\le g(x)$ definitivamente per $x\to x_0$. **Se esistono** i limiti
$$\lim_{x\to x_0}f(x) = \ell_1,\qquad\lim_{x\to x_0}g(x) = \ell_2\qquad(\ell_1,\ell_2\in\overline{\mathbb R}),$$
allora $\ell_1\le\ell_2$.`, dim: R`
Per assurdo, sia $\ell_1>\ell_2$. Per il teorema precedente (limiti diversi $\Rightarrow$ funzioni ordinate) si avrebbe $g(x)<f(x)$ definitivamente per $x\to x_0$.

Intersecando i due intorni in cui valgono $f\le g$ e $g<f$, si ottiene un intorno di $x_0$ con punti di $A$ in cui valgono entrambe: contraddizione. $\blacksquare$` },

{ t: "att", titolo: R`Le disuguaglianze strette non passano al limite`, testo: R`
Se $f(x)<g(x)$ definitivamente, si può concludere solo $\ell_1\le\ell_2$, **non** $\ell_1<\ell_2$.

Es. $f(x) = 0$, $g(x) = x^2$: $f(x)<g(x)$ per ogni $x\neq0$, ma $\lim_{x\to0}f = \lim_{x\to 0} g = 0$.` },

{ t: "teo", s: "dim", diff: 2, titolo: R`Teorema dei due carabinieri`, testo: R`
Siano $f,g,h:A\to\mathbb R$, $x_0$ di accumulazione per $A$, tali che
$$f(x)\le g(x)\le h(x)\quad\text{definitivamente per }x\to x_0.$$
Se esistono e sono uguali i limiti
$$\lim_{x\to x_0}f(x) = \lim_{x\to x_0}h(x) = \ell\in\overline{\mathbb R},$$
allora **esiste** anche $\lim_{x\to x_0}g(x)$ e vale $\ell$.`, dim: R`
Fisso $U$ intorno di $\ell$. Per definizione di limite esistono intorni $I_1, I_2$ di $x_0$ con
$$f(x)\in U\ \ \forall x\in A\cap I_1\setminus\lbrace x_0\rbrace,\qquad h(x)\in U\ \ \forall x\in A\cap I_2\setminus\lbrace x_0\rbrace,$$
e un intorno $I_3$ in cui vale $f\le g\le h$. Sia $I = I_1\cap I_2\cap I_3$, intorno di $x_0$. Per $x\in A\cap I\setminus\lbrace x_0\rbrace$:

- **$\ell\in\mathbb R$**, $U = (\ell-\varepsilon,\ell+\varepsilon)$: $\ell-\varepsilon<f(x)\le g(x)\le h(x)<\ell+\varepsilon$, cioè $g(x)\in U$.
- **$\ell = +\infty$**, $U = (M,+\infty)$: $M<f(x)\le g(x)$, cioè $g(x)\in U$ (serve solo $f$).
- **$\ell = -\infty$**: analogo, serve solo $h$.

Quindi $g(x)\in U$ definitivamente: $\lim_{x\to x_0}g(x) = \ell$. $\blacksquare$`, fig: "carabinieri" },

{ t: "cor", s: "dim", diff: 1, titolo: R`Teorema "per un carabiniere"`, testo: R`
Siano $f,g:A\to\mathbb R$ con $f(x)\le g(x)$ definitivamente per $x\to x_0$. Allora
1. $\displaystyle\lim_{x\to x_0}f(x) = +\infty\ \Rightarrow\ \lim_{x\to x_0}g(x) = +\infty$;
2. $\displaystyle\lim_{x\to x_0}g(x) = -\infty\ \Rightarrow\ \lim_{x\to x_0}f(x) = -\infty$.`, dim: R`
È esattamente la parte $\ell = \pm\infty$ della dimostrazione dei carabinieri (rifarla per esercizio). Per (1): fissato $M$, definitivamente $M<f(x)\le g(x)$. $\blacksquare$` },

{ t: "es", titolo: R`$\lim_{x\to0}x\sin\frac1x = 0$`, testo: R`
Per $x\neq0$ vale $\left|x\sin\frac1x\right|\le|x|$, cioè
$$-|x|\le x\sin\frac1x\le|x|.$$
Siccome $\lim_{x\to0}\pm|x| = 0$, per i carabinieri $\lim_{x\to0}x\sin\frac1x = 0$.` },

{ t: "es", s: "dim", diff: 3, titolo: R`$\lim_{x\to0}\frac{\sin x}x = 1$ (con i carabinieri)`, testo: R`
Dimostrare che $\displaystyle\lim_{x\to0}\frac{\sin x}{x} = 1$.`, dim: R`
Dalla definizione geometrica (confrontando le aree di triangoli e settore circolare) per $0<x<\frac\pi2$:
$$\sin x<x<\tan x.$$
Dividendo per $\sin x>0$: $1<\frac{x}{\sin x}<\frac1{\cos x}$, cioè
$$\cos x<\frac{\sin x}x<1.$$
La funzione $\frac{\sin x}x$ è pari, quindi la disuguaglianza vale anche per $-\frac\pi2<x<0$, cioè definitivamente per $x\to0$. Siccome $\lim_{x\to 0}\cos x = 1$, per i carabinieri $\lim_{x\to0}\frac{\sin x}x = 1$. $\blacksquare$` },

{ t: "teo", s: "dim", diff: 3, titolo: R`Algebra dei limiti finiti`, testo: R`
Siano $f,g:A\to\mathbb R$, $x_0$ di accumulazione per $A$, e
$$\lim_{x\to x_0}f(x) = \ell_f\in\mathbb R,\qquad\lim_{x\to x_0}g(x) = \ell_g\in\mathbb R.$$
Allora:
- **(S) combinazione lineare**: $\displaystyle\lim_{x\to x_0}\big(af(x)+bg(x)\big) = a\ell_f+b\ell_g$ per ogni $a,b\in\mathbb R$;
- **(P) prodotto**: $\displaystyle\lim_{x\to x_0}f(x)g(x) = \ell_f\,\ell_g$;
- **(Q) quoziente**: se $\ell_g\neq0$, $\displaystyle\lim_{x\to x_0}\frac{f(x)}{g(x)} = \frac{\ell_f}{\ell_g}$.`, dim: R`
Fisso $\varepsilon>0$.

**(S)** Se $a = b = 0$ è la costante $0$. Se $b = 0$, $a\neq0$: esiste $I$ con $|f(x)-\ell_f|<\frac\varepsilon{|a|}$, quindi $|af(x)-a\ell_f|<\varepsilon$. Il caso $a = 0$, $b\neq0$ è simmetrico (con $g$ al posto di $f$). Se $a,b\neq0$: trovo $I_1, I_2$ con $|f(x)-\ell_f|<\frac{\varepsilon}{2|a|}$ e $|g(x)-\ell_g|<\frac\varepsilon{2|b|}$. Su $I = I_1\cap I_2$:
$$|af+bg-(a\ell_f+b\ell_g)|\le|a||f-\ell_f|+|b||g-\ell_g|<\frac\varepsilon2+\frac\varepsilon2 = \varepsilon.$$

**(P)** Fisso $\varepsilon\in(0,1)$ e pongo $C = 1+|\ell_f|+|\ell_g|\ge1$. Per definizione di limite esiste un intorno $I$ di $x_0$ tale che, per $x\in A\cap I\setminus\lbrace x_0\rbrace$,
$$f(x)\in\left(\ell_f-\tfrac\varepsilon C,\ \ell_f+\tfrac\varepsilon C\right),\qquad g(x)\in\left(\ell_g-\tfrac\varepsilon C,\ \ell_g+\tfrac\varepsilon C\right).$$
Aggiungo e tolgo $\ell_f\,g(x)$:
$$|f(x)g(x)-\ell_f\ell_g| = |g(x)(f(x)-\ell_f)+\ell_f(g(x)-\ell_g)|\le|g(x)||f(x)-\ell_f|+|\ell_f||g(x)-\ell_g|<|g(x)|\frac\varepsilon C+|\ell_f|\frac\varepsilon C.$$
Inoltre $|g(x)|\le|g(x)-\ell_g|+|\ell_g|<\frac\varepsilon C+|\ell_g|$. Quindi
$$|f(x)g(x)-\ell_f\ell_g|<\frac\varepsilon C\left(\frac\varepsilon C+|\ell_g|+|\ell_f|\right)<\frac\varepsilon C\big(1+|\ell_f|+|\ell_g|\big) = \varepsilon,$$
dove si è usato $\frac\varepsilon C<1$ (perché $\varepsilon<1\le C$).

**(Q)** (conclusa il 26/10) Basta mostrare $\lim\frac1{g(x)} = \frac1{\ell_g}$ e poi applicare (P). Siccome $\lim|g| = |\ell_g|>0$, applico la definizione di limite con $\varepsilon = \frac{|\ell_g|}2$ (è lo stesso argomento della dimostrazione della permanenza del segno, il cui enunciato dà solo $|g|>0$): definitivamente $\big||g(x)|-|\ell_g|\big|<\frac{|\ell_g|}2$, quindi $|g(x)|>\frac{|\ell_g|}2$; in particolare $g(x)\neq0$ e $\frac1g$ è definita vicino a $x_0$. Allora
$$\left|\frac1{g(x)}-\frac1{\ell_g}\right| = \frac{|\ell_g-g(x)|}{|g(x)||\ell_g|}<\frac{2}{\ell_g^2}|g(x)-\ell_g|,$$
che è $<\varepsilon$ se $|g(x)-\ell_g|<\frac{\varepsilon\ell_g^2}2$, arbitrariamente piccolo. $\blacksquare$` },

]});

/* ---- 2026-10-26.js ---- */
L({ data: "2026-10-26", n: 17, titolo: "Limiti di polinomi, algebra dei limiti infiniti, cambio di variabile", voci: [

{ t: "cor", s: "dim", diff: 2, titolo: R`Limiti di polinomi e funzioni razionali`, testo: R`
Siano $P(x)$ e $Q(x)$ due polinomi. Allora
1. $\displaystyle\lim_{x\to x_0}P(x) = P(x_0)$ per ogni $x_0\in\mathbb R$;
2. $\displaystyle\lim_{x\to x_0}\frac{P(x)}{Q(x)} = \frac{P(x_0)}{Q(x_0)}$ per ogni $x_0\in\mathbb R$ con $Q(x_0)\neq0$.`, dim: R`
Sappiamo $\lim_{x\to x_0}x = x_0$. Applicando (P) $n-1$ volte:
$$\lim_{x\to x_0}x^n = \lim_{x\to x_0}\underbrace{x\cdots x}_{n} = x_0^n\qquad(n\ge1).$$
Il termine costante $a_0x^0$ va letto come la costante $a_0$ (con $x_0 = 0$ si avrebbe $0^0$, non definito), e il limite di una costante è la costante stessa.
Per (S), $\lim_{x\to x_0}a_kx^k = a_kx_0^k$, e applicando (S) $n$ volte alla somma di $n+1$ termini:
$$\lim_{x\to x_0}\sum_{k=0}^na_kx^k = \sum_{k=0}^na_kx_0^k = P(x_0).$$
Il punto 2 segue da (Q). $\blacksquare$` },

{ t: "teo", s: "omessa", diff: 3, titolo: R`Algebra dei limiti infiniti (6 regole)`, testo: R`
Siano $f,g:A\to\mathbb R$, $x_0$ di accumulazione per $A$.
1. Se $\lim f = +\infty$ e $g$ è **limitata inferiormente** definitivamente, allora $\lim(f+g) = +\infty$. $\quad[+\infty+(\text{non }-\infty)]$
2. Se $\lim f = 0$ e $g$ è **limitata** definitivamente, allora $\lim(f\cdot g) = 0$. $\quad[0\cdot\text{limitata}]$
3. Se $\lim f = +\infty$ (risp. $-\infty$) ed esiste $C>0$ con $g(x)>C$ definitivamente, allora $\lim(f\cdot g) = +\infty$ (risp. $-\infty$).
4. Se $\lim f = +\infty$ (risp. $-\infty$) ed esiste $C>0$ con $0<g(x)<C$ definitivamente, allora $\lim\frac fg = +\infty$ (risp. $-\infty$).
5. Se $\lim f = +\infty$ e $g$ è limitata definitivamente, allora $\lim\frac gf = 0$. (Il prof la enuncia solo per $+\infty$; per $-\infty$ è analoga.)
6. Se $\lim f = 0$ con $f(x)>0$ (risp. $<0$) definitivamente ed esiste $C>0$ con $g(x)>C$ definitivamente, allora $\lim\frac gf = +\infty$ (risp. $-\infty$). $\quad\left[\frac{C}{0^+} = +\infty\right]$

N.B. In 1, 2, 5 **non** si chiede nulla al limite di $g$: basta che sia limitata.`, dim: R`
Non fatta a lezione ("buon esercizio, analoga al caso dei limiti in $\mathbb R$"). Esempio per la 1: $g(x)\ge c$ definitivamente. Dato $M$, definitivamente $f(x)>M-c$, quindi $f(x)+g(x)>M$.

Per la 2: $|g(x)|\le C$ definitivamente. Dato $\varepsilon$, definitivamente $|f(x)|<\frac\varepsilon C$, quindi $|f(x)g(x)|<\varepsilon$. $\blacksquare$` },

{ t: "es", titolo: R`Esempi di algebra dei limiti infiniti`, testo: R`
- $\displaystyle\lim_{x\to+\infty}(x+\sin x) = +\infty$ per la regola 1: $x\to+\infty$ e $\sin x\ge-1$.
- Se $\lim f = -\infty$ e $g$ è limitata **superiormente**, allora $\lim(f+g) = -\infty$: pongo $F = -f\to+\infty$ e $G = -g$, limitata inferiormente; per la 1 $F+G\to+\infty$, quindi $f+g = -(F+G)\to-\infty$.
- $\displaystyle\lim_{x\to0}x\sin\frac1x = 0$ per la regola 2 ($x\to0$ infinitesima, $\sin\frac1x$ limitata). Lo avevamo già visto con i carabinieri.` },

{ t: "es", s: "casa", diff: 2, titolo: R`Dimostrare la regola 2 con i carabinieri`, testo: R`
Dimostrare la regola "$0\cdot$limitata $= 0$" usando il teorema dei due carabinieri.`, dim: R`
Se $|g(x)|\le C$ definitivamente, allora $0\le|f(x)g(x)|\le C|f(x)|$. Siccome $\lim|f| = 0$, per (S) $\lim C|f| = 0$ e per i carabinieri $\lim|fg| = 0$, quindi $\lim fg = 0$ (limite del modulo). $\blacksquare$` },

{ t: "def", titolo: R`Forme indeterminate`, testo: R`
Sono i casi non coperti dai teoremi sopra, in cui l'algebra dei limiti **non si può applicare**:
$$\text{somma: } [+\infty-\infty],\qquad\text{prodotto: } [0\cdot\pm\infty],\qquad\text{quoziente: } \left[\frac00\right],\ \left[\frac\infty\infty\right].$$
Il risultato dipende dalle funzioni specifiche:
- $f(x) = x$, $g(x) = \frac1x$: $f\cdot g\to1$, ma con $g(x) = \frac1{x^2}$: $f\cdot g = \frac1x$, il cui limite in $0$ non esiste;
- $f(x) = x^2$, $g(x) = \frac1{x^2}$ per $x\to\infty$: prodotto $1$; con $g = \frac1x$: prodotto $x\to\infty$.` },

{ t: "es", titolo: R`$\lim_{x\to+\infty}\left(\sqrt{x+1}-\sqrt x\right) = 0$`, testo: R`
È una forma $[+\infty-\infty]$. Razionalizzando, per ogni $x\ge0$:
$$\sqrt{x+1}-\sqrt x = \frac{(x+1)-x}{\sqrt{x+1}+\sqrt x} = \frac1{\sqrt{x+1}+\sqrt x}.$$
Il denominatore tende a $+\infty$, quindi per la regola 5 il limite è $0$.` },

{ t: "teo", s: "omessa", diff: 3, titolo: R`Cambio di variabile nei limiti (limite di funzione composta)`, testo: R`
Siano $f:A\to\mathbb R$, $g:B\to\mathbb R$ ($A,B\subseteq\mathbb R$ non vuoti), $\tilde A = \lbrace x\in A: f(x)\in B\rbrace$ e $x_0\in\overline{\mathbb R}$ di accumulazione per $\tilde A$. Supponiamo:
1. $\displaystyle\lim_{x\to x_0}f(x) = y_0\in\overline{\mathbb R}$, con $y_0$ di accumulazione per $B$;
2. $\displaystyle\lim_{y\to y_0}g(y) = \ell\in\overline{\mathbb R}$;
3. vale almeno una tra
 - (3a) $f(x)\neq y_0$ definitivamente per $x\to x_0$;
 - (3b) $y_0\in B$ e $\displaystyle\lim_{y\to y_0}g(y) = g(y_0)$.

Allora $\displaystyle\lim_{x\to x_0}g(f(x)) = \ell$.

(Argomento che "c'è all'esame".)`, dim: R`
Non fatta a lezione. Idea: fisso $U$ intorno di $\ell$. Per 2 esiste $J$ intorno di $y_0$ con $g(y)\in U$ per $y\in B\cap J\setminus\lbrace y_0\rbrace$. Per 1 esiste $I$ intorno di $x_0$ con $f(x)\in J$ per $x\in A\cap I\setminus\lbrace x_0\rbrace$. Allora per $x\in\tilde A\cap I\setminus\lbrace x_0\rbrace$, $y = f(x)\in B\cap J$. Se $f(x)\neq y_0$ (3a) allora $g(f(x))\in U$. Se invece $f(x) = y_0$ può succedere, serve (3b): $g(y_0) = \ell\in U$. $\blacksquare$` },

{ t: "es", titolo: R`$\lim_{x\to+\infty}\sqrt{x^2-1} = +\infty$ con il cambio di variabile`, testo: R`
Pongo $f(x) = x^2-1$, $g(y) = \sqrt y$. Si ha $\mathrm{dom}(f) = \mathbb R$, $\mathrm{Im}(f) = [-1,+\infty)$, $\mathrm{dom}(g) = [0,+\infty)$, $\mathrm{Im}(g) = [0,+\infty)$, quindi
$$\tilde A = \lbrace x\in\mathrm{dom}(f): f(x)\in\mathrm{dom}(g)\rbrace = \lbrace x\in\mathbb R: x^2-1\ge0\rbrace = (-\infty,-1]\cup[1,+\infty).$$
$x_0 = +\infty$ è di accumulazione per $\tilde A$. Allora:
1. $\lim_{x\to+\infty}(x^2-1) = +\infty =: y_0$ (algebra dei limiti infiniti), e $y_0 = +\infty$ è di accumulazione per $\mathrm{dom}(g) = [0,+\infty)$;
2. $\lim_{y\to+\infty}\sqrt y = +\infty =: \ell$ (verifica con la definizione: $\sqrt y>M\iff y>M^2$);
3. controllo almeno una delle opzioni: (3a) $x^2-1\neq+\infty$ definitivamente è vera, perché $x^2-1<+\infty$ per ogni $x\in\mathbb R$. Non serve controllare (3b).

Dal teorema di cambio di variabile segue $\lim_{x\to+\infty}\sqrt{x^2-1} = \ell = +\infty$. (Esercizio: verificare questo limite anche con la definizione.)` },

{ t: "es", s: "casa", diff: 1, titolo: R`$\lim_{x\to-\infty}\sin\left(\frac{x^3-x}{x^3-7}\right)$`, testo: R`
Calcolare $\displaystyle\lim_{x\to-\infty}\sin\left(\frac{x^3-x}{x^3-7}\right)$.

Suggerimento: applicare il teorema di cambio di variabile. Ma prima studiare la funzione razionale $\displaystyle\lim_{x\to-\infty}\frac{x^3-x}{x^3-7}$.`, dim: R`
Funzione razionale con numeratore e denominatore dello stesso grado: raccogliendo $x^3$,
$$\frac{x^3-x}{x^3-7} = \frac{1-\frac1{x^2}}{1-\frac7{x^3}}\to\frac{1-0}{1-0} = 1 =: y_0.$$
Con $g(y) = \sin y$: $\lim_{y\to1}\sin y = \sin1$ (continuità del seno), e vale l'opzione (3b) perché $g(y_0) = \sin1 = \ell$. Quindi il limite è $\sin1$. $\blacksquare$` },

]});

/* ---- 2026-10-27.js ---- */
L({ data: "2026-10-27", n: 18, titolo: "Limiti di funzioni monotone", voci: [

{ t: "es", titolo: R`Perché nel cambio di variabile serve l'ipotesi 3`, testo: R`
$f:\mathbb R\to\mathbb R$, $f(x) = 5$ per ogni $x$; $g(y) = 1$ per $y\neq5$, $g(5) = 2$.

Per $x\to0$: $\lim f(x) = 5 =: y_0$ e $\lim_{y\to5}g(y) = 1$. Ma $g(f(x)) = g(5) = 2$ per ogni $x$, quindi $\lim_{x\to0}g(f(x)) = 2\neq1$.

Infatti entrambe le opzioni sono false: (3a) $f(x)\neq5$ è falsa ovunque; (3b) $\lim_{y\to5}g(y) = 1\neq2 = g(5)$.` },

{ t: "teo", s: "dim", diff: 3, titolo: R`Limiti di funzioni monotone (caso reale)`, testo: R`
Siano $f:A\to\mathbb R$, $x_0\in\mathbb R$, e sia $I$ un intorno di $x_0$ in cui $f$ è monotona.

**(i)** Se $x_0$ è di accumulazione **sinistro** per $A$ e $f$ è monotona su $A\cap I\cap(-\infty,x_0)$, allora
$$\exists\lim_{x\to x_0^-}f(x) = \begin{cases}\sup f\big|_{A\cap I\cap(-\infty,x_0)} & f \text{ crescente}\\ \inf f\big|_{A\cap I\cap(-\infty,x_0)} & f\text{ decrescente.}\end{cases}$$
**(ii)** Se $x_0$ è di accumulazione **destro** e $f$ è monotona su $A\cap I\cap(x_0,+\infty)$, allora
$$\exists\lim_{x\to x_0^+}f(x) = \begin{cases}\inf f\big|_{A\cap I\cap(x_0,+\infty)} & f\text{ crescente}\\ \sup f\big|_{A\cap I\cap(x_0,+\infty)} & f\text{ decrescente.}\end{cases}$$`, dim: R`
Faccio il caso sinistro con $f$ **crescente** (gli altri sono analoghi). Restringendomi all'intorno posso supporre che il dominio sia $A' = A\cap I\cap(-\infty,x_0)$. Sia $S = \sup_{A'}f\in\mathbb R\cup\lbrace+\infty\rbrace$, che esiste sempre.

**Caso 1: $S\in\mathbb R$.** Per la caratterizzazione del sup, dato $\varepsilon>0$ esiste $x_\varepsilon\in A'$ con $f(x_\varepsilon)>S-\varepsilon$, e $x_\varepsilon<x_0$.
- Se $x\in A'$ con $x_\varepsilon<x<x_0$, per **monotonia** $f(x)\ge f(x_\varepsilon)>S-\varepsilon$.
- $S$ è un maggiorante, quindi $f(x)\le S<S+\varepsilon$ per ogni $x\in A'$.

Quindi con $\delta = x_0-x_\varepsilon>0$: $|f(x)-S|<\varepsilon$ per ogni $x\in A'$ con $x_0-\delta<x<x_0$. Questo è $\lim_{x\to x_0^-}f(x) = S$.

**Caso 2: $S = +\infty$.** Fissato $M>0$, $f$ non è limitata superiormente, quindi esiste $x_M\in A'$ con $f(x_M)>M$. Per monotonia $f(x)>M$ per ogni $x\in A'$ con $x_M<x<x_0$. Quindi $\lim_{x\to x_0^-}f(x) = +\infty$. $\blacksquare$`, fig: "monotona" },

{ t: "oss", titolo: R`Il limite di una funzione monotona esiste sempre`, testo: R`
Il teorema dice in particolare che i limiti laterali di una funzione monotona **esistono sempre** (finiti o infiniti).` },

{ t: "es", titolo: R`Applicazioni: continuità delle funzioni elementari`, testo: R`
Usando il teorema (insieme ad altri argomenti, vedi sotto) si ottiene:
- $\displaystyle\lim_{x\to x_0}a^x = a^{x_0}$ per ogni $x_0\in\mathbb R$, $a>0$ ($a^x$ è crescente per $a>1$, costante per $a=1$, decrescente per $0<a<1$);
- $\displaystyle\lim_{x\to x_0}\log_ax = \log_ax_0$ per ogni $x_0>0$, e $\displaystyle\lim_{x\to0^+}\log_ax = -\infty$ se $a>1$, $+\infty$ se $0<a<1$;
- $\displaystyle\lim_{x\to x_0}x^\alpha = x_0^\alpha$ per $x_0>0$, e $\displaystyle\lim_{x\to0^+}x^\alpha = 0$ se $\alpha>0$, $+\infty$ se $\alpha<0$;
- $\displaystyle\lim_{x\to x_0}\sin x = \sin x_0$, $\displaystyle\lim_{x\to x_0}\cos x = \cos x_0$ (sono monotone a tratti).

**Attenzione, passaggio delicato.** Il teorema sulle monotone garantisce solo che i limiti **laterali esistono** (e valgono $\sup$/$\inf$), **non** che siano uguali a $f(x_0)$: la funzione segno è monotona ma salta in $0$. Gli appunti fanno lo stesso salto; per chiuderlo:
- **$a^x$:** $a^x = a^{x_0}\cdot a^{x-x_0}$ e, con $h = x-x_0\to0$, $\lim_{h\to0}a^h = 1$ (lezione del 19/10), quindi $a^x\to a^{x_0}$.
- **$\log_a x$:** è monotona e la sua immagine è tutto $\mathbb R$. Se ci fosse un salto in $x_0$ (es. $a>1$: $\lim_{x\to x_0^-}\log_ax<\log_ax_0$), i valori strettamente compresi tra il limite sinistro e $\log_ax_0$ non sarebbero assunti da nessun $x$, contro la suriettività. Quindi i limiti laterali valgono $\log_a x_0$.
- **$x^\alpha$ per $x_0>0$:** $x^\alpha = e^{\alpha\log x}$, composizione dei due casi precedenti (cambio di variabile).
- **$\sin$ e $\cos$:** già dimostrato con la prostaferesi (esercizio del 19/10).` },

{ t: "teo", s: "omessa", diff: 2, titolo: R`Limiti di funzioni monotone (caso infinito)`, testo: R`
**(i)** Sia $+\infty$ di accumulazione per $A$ e $f$ monotona definitivamente per $x\to+\infty$ (su $A\cap I$, $I$ intorno di $+\infty$). Allora
$$\exists\lim_{x\to+\infty}f(x) = \begin{cases}\sup f|_{A\cap I} & f\text{ crescente}\\ \inf f|_{A\cap I} & f\text{ decrescente.}\end{cases}$$
**(ii)** Sia $-\infty$ di accumulazione per $A$ e $f$ monotona definitivamente per $x\to-\infty$. Allora
$$\exists\lim_{x\to-\infty}f(x) = \begin{cases}\inf f|_{A\cap I} & f\text{ crescente}\\ \sup f|_{A\cap I} & f\text{ decrescente.}\end{cases}$$`, dim: R`
Non fatta a lezione, ma analoga al caso reale: per (i) con $f$ crescente e $S = \sup f$ finito, dato $\varepsilon$ esiste $x_\varepsilon$ con $f(x_\varepsilon)>S-\varepsilon$ e per monotonia $S-\varepsilon<f(x)\le S$ per ogni $x>x_\varepsilon$: l'intorno è $(x_\varepsilon,+\infty)$. $\blacksquare$` },

{ t: "es", titolo: R`Applicazioni: limiti agli estremi delle funzioni elementari`, testo: R`
- $\displaystyle\lim_{x\to+\infty}a^x = +\infty$ se $a>1$, $0$ se $0<a<1$; $\displaystyle\lim_{x\to-\infty}a^x = 0$ se $a>1$, $+\infty$ se $0<a<1$.
- $\displaystyle\lim_{x\to+\infty}\log_ax = +\infty$ se $a>1$, $-\infty$ se $0<a<1$.
- $\displaystyle\lim_{x\to\pm\infty}|x|^\alpha = \begin{cases}+\infty & \alpha>0\\ 1 & \alpha=0\\ 0 & \alpha<0.\end{cases}$

Domanda per dopo: sappiamo che $a^x$, $\log_ax$, $x^\alpha\to+\infty$ (con $a>1$, $\alpha>0$), ma **con quali velocità**? (Vedi gerarchia degli infiniti, 29/10.)` },

{ t: "oss", titolo: R`Limiti della forma $f(x)^{g(x)}$`, testo: R`
Con $f>0$, si usa $f(x)^{g(x)} = e^{g(x)\log f(x)}$: la funzione è la composizione di $x\mapsto g(x)\log f(x)$ e di $y\mapsto e^y$.

Quindi basta studiare $\lim_{x\to x_0}g(x)\log f(x) = y_0$ e poi usare il cambio di variabile (l'esponenziale è monotona crescente, con limiti noti):
$$\lim_{x\to x_0} f(x)^{g(x)} = \begin{cases} e^{y_0} & y_0\in\mathbb R\\ +\infty & y_0 = +\infty\\ 0 & y_0 = -\infty.\end{cases}$$
Esempio: $\lim_{x\to+\infty}\left(2+\frac1x\right)^x$: $x\log\left(2+\frac1x\right)\to+\infty\cdot\log2 = +\infty$ (regola 3), quindi il limite è $+\infty$.` },

{ t: "es", titolo: R`Esempio dagli appunti: $\lim_{x\to+\infty}x^{1/\log(1+x)} = e$`, testo: R`
Qui $f(x) = x$ e $g(x) = \dfrac1{\log(1+x)}$. Calcolo il limite dell'esponente:
$$g(x)\log f(x) = \frac{\log x}{\log(1+x)} = \frac{\log x}{\log\big(x(1+\frac1x)\big)} = \frac{\log x}{\log x+\log(1+\frac1x)} = \frac1{1+\dfrac{\log(1+\frac1x)}{\log x}}.$$
Ora $\log(1+\frac1x)\to\log1 = 0$ (cambio di variabile $y = 1+\frac1x\to1$) e $\log x\to+\infty$ (funzione crescente), quindi $\dfrac{\log(1+\frac1x)}{\log x}\to0$ per l'algebra dei limiti infiniti. Pertanto
$$\lim_{x\to+\infty}g(x)\log f(x) = \frac1{1+0} = 1,\qquad\text{da cui}\qquad\lim_{x\to+\infty}x^{1/\log(1+x)} = \lim_{y\to1}e^y = e.$$` },

]});

/* ---- 2026-10-29.js ---- */
L({ data: "2026-10-29", n: 19, titolo: "Limiti notevoli, gerarchia degli infiniti, asintotici, o-piccolo", voci: [

{ t: "teo", s: "dim", diff: 2, titolo: R`Limiti notevoli trigonometrici`, testo: R`
$$\lim_{x\to0}\frac{\sin x}x = 1,\qquad\lim_{x\to0}\frac{1-\cos x}{x^2} = \frac12,\qquad\lim_{x\to0}\frac{\tan x}x = 1,\qquad\lim_{x\to0}\frac{\arcsin x}x = 1.$$
Tutti tranne il primo sono forme $\left[\frac00\right]$ ricondotte al primo.`, dim: R`
Il primo è stato fatto con i carabinieri (22/10).

**Coseno:** moltiplico per $1+\cos x$:
$$\frac{1-\cos x}{x^2} = \frac{1-\cos^2x}{x^2(1+\cos x)} = \left(\frac{\sin x}x\right)^2\cdot\frac1{1+\cos x}\ \longrightarrow\ 1\cdot\frac12.$$
**Tangente:** $\dfrac{\tan x}x = \dfrac{\sin x}x\cdot\dfrac1{\cos x}\to1\cdot1 = 1$.

**Arcoseno:** cambio di variabile $y = \arcsin x$ ($y\to0$ e $y\neq0$ per $x\neq0$): $\dfrac{\arcsin x}x = \dfrac y{\sin y}\to1$. $\blacksquare$` },

{ t: "teo", s: "dim", diff: 2, titolo: R`Numero di Nepero: $\lim(1+\frac1x)^x$`, testo: R`
I due limiti
$$\lim_{x\to+\infty}\left(1+\frac1x\right)^x\qquad\text{e}\qquad\lim_{x\to-\infty}\left(1+\frac1x\right)^x$$
esistono, sono finiti e coincidono. Il loro valore comune è il **numero di Nepero** $e\approx2{,}718$.`, dim: R`
Si dimostra solo che coincidono (l'esistenza è omessa). Con il cambio di variabile $y = -x$ ($y\to+\infty$):
$$\left(1+\frac1x\right)^x = \left(1-\frac1y\right)^{-y} = \left(\frac{y}{y-1}\right)^y.$$
Poi con $t = y-1\to+\infty$:
$$\left(\frac{t+1}{t}\right)^{t+1} = \left(1+\frac1t\right)^t\cdot\left(1+\frac1t\right)\ \longrightarrow\ e\cdot 1.\ \blacksquare$$` },

{ t: "teo", s: "dim", diff: 2, titolo: R`Limiti notevoli esponenziali e logaritmici`, testo: R`
$$\lim_{x\to\pm\infty}\left(1+\frac\alpha x\right)^x = e^\alpha\ (\alpha\in\mathbb R),\qquad\lim_{x\to0}(1+x)^{1/x} = e,$$
$$\lim_{x\to0}\frac{\log(1+x)}x = 1,\qquad\lim_{x\to0}\frac{e^x-1}x = 1.$$`, dim: R`
**$e^\alpha$** (per $\alpha>0$; $\alpha<0$ esercizio): con $y = \frac x\alpha\to\pm\infty$, $\left(1+\frac\alpha x\right)^x = \left[\left(1+\frac1y\right)^y\right]^\alpha\to e^\alpha$ (limite di funzione composta con $z\mapsto z^\alpha$).

**$(1+x)^{1/x}$:** con $y = \frac1x$ si ha $(1+x)^{1/x} = \left(1+\frac1y\right)^y$, e $y\to\pm\infty$ per $x\to0^\pm$. Entrambi i limiti laterali valgono $e$.

**Logaritmo:** $\dfrac{\log(1+x)}x = \log\left[(1+x)^{1/x}\right]\to\log e = 1$ (continuità del log).

**Esponenziale:** con $y = e^x-1$ ($y\to0$, $x = \log(1+y)$): $\dfrac{e^x-1}x = \dfrac{y}{\log(1+y)}\to1$. $\blacksquare$` },

{ t: "es", titolo: R`$\lim_{x\to0}\frac{1-e^{-x}}x = 1$`, testo: R`
Con il cambio di variabile $y = -x\to0$:
$$\lim_{x\to0}\frac{1-e^{-x}}x = \lim_{y\to0}\frac{1-e^y}{-y} = \lim_{y\to0}\frac{e^y-1}y = 1.$$` },

{ t: "teo", s: "dim", diff: 1, titolo: R`Limiti notevoli iperbolici`, testo: R`
$$\lim_{x\to0}\frac{\sinh x}x = 1,\qquad\lim_{x\to0}\frac{\cosh x-1}{x^2} = \frac12.$$`, dim: R`
**Seno iperbolico** (fatto a lezione): spezzando,
$$\frac{\sinh x}x = \frac{e^x-e^{-x}}{2x} = \frac{e^x-1}{2x}+\frac{1-e^{-x}}{2x}\to\frac12\cdot1+\frac12\cdot1 = 1,$$
usando $\frac{e^x-1}x\to1$ e l'esempio $\frac{1-e^{-x}}x\to1$.

**Coseno iperbolico** (il prof lo enuncia senza dimostrazione; questa è un'aggiunta): $\cosh x-1 = \frac{(e^{x/2}-e^{-x/2})^2}{2} = 2\sinh^2\frac x2$, quindi $\dfrac{\cosh x-1}{x^2} = \dfrac12\left(\dfrac{\sinh(x/2)}{x/2}\right)^2\to\frac12$. $\blacksquare$` },

{ t: "es", s: "casa", diff: 1, titolo: R`$\lim_{x\to0}\frac{\tanh x}x = 1$ e $\lim_{x\to0}\frac{\operatorname{arcsinh}x}x = 1$`, testo: R`
Dimostrare che
$$\lim_{x\to0}\frac{\tanh x}x = 1\qquad\text{e}\qquad\lim_{x\to0}\frac{\operatorname{arcsinh}x}x = 1.$$`, dim: R`
**Tangente iperbolica:** $\dfrac{\tanh x}{x} = \dfrac{\sinh x}x\cdot\dfrac1{\cosh x}\to1\cdot\dfrac11 = 1$.

**Settore seno iperbolico:** cambio di variabile $y = \operatorname{arcsinh}x$, cioè $x = \sinh y$; per $x\to0$ si ha $y\to0$ e $y\neq0$ per $x\neq0$ (è iniettiva con $\operatorname{arcsinh}0 = 0$). Quindi
$$\frac{\operatorname{arcsinh}x}x = \frac y{\sinh y}\to1. \ \blacksquare$$` },

{ t: "teo", s: "omessa", titolo: R`Gerarchia degli infiniti`, testo: R`
Siano $a>1$, $\alpha,\beta>0$. Valgono:
1. $\displaystyle\lim_{x\to+\infty}\frac{(\log_ax)^\beta}{x^\alpha} = 0\qquad\left[\frac{+\infty}{+\infty}\right]$
2. $\displaystyle\lim_{x\to+\infty}\frac{x^\alpha}{a^x} = 0\qquad\left[\frac{+\infty}{+\infty}\right]$

**Regola mnemonica** (per $x\to+\infty$):
$$(\log x)^\beta \ll x^\alpha\ll a^x\qquad\text{(“molto più piccolo di”)}.$$
Per altri valori di $a, \alpha,\beta$ ci si riconduce a 1 o 2, oppure non si tratta di forme indeterminate.` },

{ t: "es", titolo: R`$\lim_{x\to0^+}x\log x = 0$ (gerarchia + cambio di variabile)`, testo: R`
È $[0\cdot\infty]$. Con $y = \frac1x\to+\infty$:
$$x\log x = \frac{\log(1/y)}{y} = -\frac{\log y}{y}\to0$$
per la gerarchia (1) con $\alpha = \beta = 1$.` },

{ t: "es", titolo: R`$\lim_{x\to0}|x|^{|x|} = 1$`, testo: R`
Per parità basta $x\to0^+$:
$$\lim_{x\to0^+}x^x = \lim_{x\to0^+}e^{x\log x} = \lim_{y\to0}e^y = e^0 = 1,$$
perché $x\log x\to0$ (esempio precedente) e $y\mapsto e^y$ è continua.` },

{ t: "def", titolo: R`Funzioni asintotiche ($f\sim g$)`, testo: R`
Siano $f,g:A\to\mathbb R$, $x_0\in\overline{\mathbb R}$ di accumulazione per $A$. $f$ e $g$ sono **asintotiche** per $x\to x_0$, e si scrive $f(x)\sim g(x)$, se
1. $f(x)\neq0$ e $g(x)\neq0$ definitivamente per $x\to x_0$;
2. $\displaystyle\lim_{x\to x_0}\frac{f(x)}{g(x)} = 1$ (equivalentemente $\lim\frac{g}{f} = 1$).

Esempi per $x\to0$: $\sin x\sim x$, $1-\cos x\sim\frac{x^2}2$, $\tan x\sim x$, $\log(1+x)\sim x$, $e^x-1\sim x$.` },

{ t: "teo", s: "casa", diff: 2, titolo: R`Proprietà delle funzioni asintotiche`, testo: R`
Per $x\to x_0$:
1. se $f\sim g$, allora $f$ e $g$ hanno lo **stesso comportamento al limite**: o hanno entrambe lo stesso limite, o entrambe non hanno limite;
2. **transitività**: $f\sim g$ e $g\sim h\Rightarrow f\sim h$;
3. se $f\sim F$ e $g\sim G$, allora $f\cdot g\sim F\cdot G$ e $\dfrac fg\sim\dfrac FG$.

Le proprietà 1 e 3 sono **molto utili per calcolare i limiti**: in prodotti e quozienti si può sostituire una funzione con una asintotica.`, dim: R`
1. Se $g\to\ell$: $f = \frac fg\cdot g\to1\cdot\ell$ (algebra dei limiti, anche infiniti). Se $g$ non ha limite e $f$ lo avesse, per lo stesso ragionamento con $g = \frac gf\cdot f$ anche $g$ lo avrebbe.
2. $\frac fh = \frac fg\cdot\frac gh\to1$.
3. $\frac{fg}{FG} = \frac fF\cdot\frac gG\to1$, e $\frac{f/g}{F/G} = \frac fF\cdot\frac Gg\to1$. $\blacksquare$` },

{ t: "es", titolo: R`$\lim_{x\to0}\frac{\sin x}{\tan x} = 1$ in tre modi`, testo: R`
**(a)** Con la definizione di tangente:
$$\lim_{x\to0}\frac{\sin x}{\tan x} = \lim_{x\to0}\frac{\sin x}{\sin x}\cdot\cos x = 1.$$
**(b)** Con gli asintotici: $\sin x\sim x$ e $\tan x\sim x$ per $x\to0$, quindi
$$\lim_{x\to0}\frac{\sin x}{\tan x} = \lim_{x\to0}\frac xx = 1.$$
**(c)** Con i limiti notevoli:
$$\lim_{x\to0}\frac{\sin x}{\tan x} = \lim_{x\to0}\frac{\sin x}x\cdot\frac1{\frac{\tan x}x} = 1\cdot1 = 1.$$` },

{ t: "att", titolo: R`Non si sostituiscono asintotici nelle somme (aggiunta, non negli appunti)`, testo: R`
La proprietà 3 vale per **prodotti e quozienti**, non per somme e differenze. Es. per $x\to0$, $\tan x\sim x$ e $\sin x\sim x$, ma $\tan x-\sin x\not\sim x-x = 0$ (in realtà $\tan x-\sin x\sim\frac{x^3}{2}$).` },

{ t: "prop", s: "casa", diff: 2, titolo: R`Asintoticità e limiti diversi da 0`, testo: R`
Sia $g(x)\neq0$ definitivamente per $x\to x_0$ e $\ell\in\mathbb R\setminus\lbrace0\rbrace$. Allora
$$\lim_{x\to x_0}\frac{f(x)}{g(x)} = \ell\iff f(x)\sim\ell\,g(x).$$
Es. $\lim_{x\to 0}\frac{1-\cos x}{x^2} = \frac12\iff 1-\cos x\sim\frac{x^2}2$.`, dim: R`
$\dfrac{f}{\ell g} = \dfrac1\ell\cdot\dfrac fg$, quindi $\dfrac{f}{\ell g}\to1\iff\dfrac fg\to\ell$. Inoltre se $\frac fg\to\ell\neq0$, per la permanenza del segno $f\neq0$ definitivamente. $\blacksquare$` },

{ t: "es", titolo: R`Asintotici "composti": $\sin f(x)\sim f(x)$`, testo: R`
Se $\lim_{x\to x_0}f(x) = 0$ e $f(x)\neq0$ definitivamente, con il cambio di variabile $y = f(x)$:
$$\lim_{x\to x_0}\frac{\sin f(x)}{f(x)} = \lim_{y\to0}\frac{\sin y}y = 1,$$
quindi $\sin f(x)\sim f(x)$ per $x\to x_0$. Es. $\sin(3x^2)\sim3x^2$ per $x\to0$.` },

{ t: "att", titolo: R`Asintotici in un punto non dicono nulla altrove`, testo: R`
$\sin x\sim x$ per $x\to0$, ma per $x\to+\infty$ $\sin x$ è limitata mentre $x\to+\infty$: $\lim_{x\to+\infty}\frac{\sin x}x = 0$ (regola 5). Bisogna sempre specificare il punto $x_0$.` },

{ t: "def", titolo: R`o-piccolo`, testo: R`
Siano $f,g:A\to\mathbb R$, $x_0$ di accumulazione per $A$, $g(x)\neq0$ definitivamente per $x\to x_0$. Diciamo che $f$ è **o-piccolo di $g$** per $x\to x_0$, e scriviamo $f(x) = o(g(x))$, se
$$\lim_{x\to x_0}\frac{f(x)}{g(x)} = 0.$$
"$f$ è trascurabile rispetto a $g$." Esempi:
- $x = o(x^2)$ per $x\to+\infty$; $\quad x^2 = o(x)$ per $x\to0$;
- $1 = o(x)$ per $x\to+\infty$; $\quad x = o(1)$ per $x\to0$.` },

{ t: "es", titolo: R`$\lim_{x\to+\infty}\frac{x^2+7x+5}{x^2+11x} = 1$`, testo: R`
Raccolgo $x^2$ a numeratore e denominatore:
$$\lim_{x\to+\infty}\frac{x^2+7x+5}{x^2+11x} = \lim_{x\to+\infty}\frac{x^2\left(1+\frac7x+\frac5{x^2}\right)}{x^2\left(1+\frac{11}x\right)} = \lim_{x\to+\infty}\frac{1+\frac7x+\frac5{x^2}}{1+\frac{11}x} = \frac{1+0+0}{1+0} = 1.$$
(Lo stesso limite si rifà con gli o-piccoli nella lezione del 2/11.)` },

]});

/* ---- 2026-11-02.js ---- */
L({ data: "2026-11-02", n: 21, titolo: "Proprietà degli o-piccoli, principio di sostituzione, O-grande", voci: [

{ t: "oss", titolo: R`$f = o(1)$ significa "$f$ infinitesima"`, testo: R`
Prendendo $g(x) = 1$ nella definizione di o-piccolo:
$$f(x) = o(1)\ \text{per } x\to x_0\iff\lim_{x\to x_0}\frac{f(x)}1 = 0\iff\lim_{x\to x_0}f(x) = 0,$$
cioè $f$ è **infinitesima** per $x\to x_0$.

Esempi per $x\to+\infty$: $\dfrac1{x^5} = o(1)$, $\dfrac1x = o(1)$. Per $x\to0$: $\sin x = o(1)$, $\cos x-1 = o(1)$.` },

{ t: "es", titolo: R`$\lim_{x\to+\infty}\frac{x^2+7x+5}{x^2+11x} = 1$ con gli o-piccoli`, testo: R`
È lo stesso limite della lezione del 29/10. Per $x\to+\infty$ si ha $\frac7x+\frac5{x^2} = o(1)$ e $\frac{11}x = o(1)$, quindi
$$\lim_{x\to+\infty}\frac{x^2+7x+5}{x^2+11x} = \lim_{x\to+\infty}\frac{1+\frac7x+\frac5{x^2}}{1+\frac{11}x} = \lim_{x\to+\infty}\frac{1+o(1)}{1+o(1)} = 1.$$` },

{ t: "att", titolo: R`$o(g)$ è una notazione, non una funzione`, testo: R`
Per $x\to0$ vale sia $\sin x = o(1)$ sia $\cos x-1 = o(1)$, **ma** $\sin x\neq\cos x-1$ in un intorno di $0$.

Quindi l'uguale in "$f = o(g)$" **non** è un'uguaglianza vera e propria: $o(g)$ indica una **qualsiasi** funzione trascurabile rispetto a $g$. La notazione dice solo come $f$ si comporta **relativamente a $g$** per $x\to x_0$: serve a **stimare l'errore** che si commette.` },

{ t: "att", titolo: R`Gli o-piccoli NON si cancellano`, testo: R`
Esempio:
$$\lim_{x\to+\infty}\frac{x^2+7x-3}{x^2-5x+2} = \lim_{x\to+\infty}\frac{1+\frac7x-\frac3{x^2}}{1-\frac5x+\frac2{x^2}} = \lim_{x\to+\infty}\frac{1+o(1)-o(1)}{1-o(1)+o(1)}.$$
Qui gli $o(1)$ **NON si cancellano**: $o(1)-o(1)$ non fa $0$ (sono funzioni diverse, es. $\frac7x$ e $\frac3{x^2}$). Si ha però $o(1)\pm o(1) = o(1)$, quindi il limite è
$$\lim_{x\to+\infty}\frac{1+o(1)}{1+o(1)} = 1.$$
In generale vale
$$o(g)\pm o(g) = o(g)\quad\text{per } x\to x_0.$$
Infatti se $f_1 = o(g)$ e $f_2 = o(g)$ per $x\to x_0$, allora $\displaystyle\lim_{x\to x_0}\frac{f_1(x)\pm f_2(x)}{g(x)} = 0\pm0 = 0$, e dunque $f_1\pm f_2 = o(g)$.`, },

{ t: "prop", s: "casa", diff: 1, titolo: R`Proprietà degli o-piccoli`, testo: R`
Per $x\to x_0$ valgono:
1. $o(g)\pm o(g) = o(g)$;
2. $o(g_1)\cdot o(g_2) = o(g_1\,g_2)$;
3. $o(g)\cdot h = o(g)$ se $h$ è **limitata** e $h(x)\neq0$ definitivamente per $x\to x_0$;
4. $|o(g)|^\alpha = o(|g|^\alpha)$ per ogni $\alpha>0$ (l'esponente si porta dentro, ma fuori resta il modulo);
5. $o(g)\cdot h = o(g\,h)$ se $h(x)\neq0$ definitivamente per $x\to x_0$;
6. $o(o(g)) = o(g)$.

(Dimostrazione lasciata per esercizio: vedere il foglio settimanale.)`, dim: R`
In ogni punto basta scrivere il rapporto con la funzione "di riferimento" e verificare che tende a $0$. Siano $f_1 = o(g)$, $f_2 = o(g)$, cioè $\frac{f_1}g\to0$, $\frac{f_2}g\to0$.
1. $\dfrac{f_1\pm f_2}{g} = \dfrac{f_1}g\pm\dfrac{f_2}g\to0\pm0 = 0$.
2. Se $f_1 = o(g_1)$ e $f_2 = o(g_2)$: $\dfrac{f_1f_2}{g_1g_2} = \dfrac{f_1}{g_1}\cdot\dfrac{f_2}{g_2}\to0\cdot0 = 0$.
3. $\left|\dfrac{f_1h}{g}\right|\le M\left|\dfrac{f_1}g\right|\to0$: quindi tende a $0$ per i due carabinieri ("limitata per infinitesima fa infinitesima").
4. $\dfrac{|f_1|^\alpha}{|g|^\alpha} = \left|\dfrac{f_1}g\right|^\alpha\to0$ perché $\alpha>0$ (continuità di $t\mapsto t^\alpha$ in $0$).
5. $\dfrac{f_1h}{gh} = \dfrac{f_1}g\to0$ (si semplifica perché $h\neq0$).
6. Se $f = o(f_1)$ con $f_1 = o(g)$: $\dfrac fg = \dfrac f{f_1}\cdot\dfrac{f_1}g\to0\cdot0 = 0$ (dove $f_1\neq0$). $\blacksquare$` },

{ t: "es", titolo: R`Uso delle proprietà: $x^2\cdot o(x^3) = o(x^5)$`, testo: R`
Per $x\to0$: se $f(x) = o(x^3)$, allora
$$\lim_{x\to0}\frac{x^2f(x)}{x^5} = \lim_{x\to0}\frac{f(x)}{x^3} = 0,$$
quindi $x^2\cdot o(x^3) = o(x^5)$ (proprietà 5). Analogamente $x^3\cdot o(x^3) = o(x^6)$ per qualsiasi $x_0$.` },

{ t: "prop", s: "dim", diff: 1, titolo: R`Relazione tra o-piccoli e asintoticità`, testo: R`
Siano $f,g:A\to\mathbb R$, $x_0$ di accumulazione per $A$, $g(x)\neq0$ definitivamente per $x\to x_0$, e $\ell\in\mathbb R\setminus\lbrace0\rbrace$. Allora
$$f(x)\sim\ell\,g(x)\iff f(x) = \ell\,g(x)+o(g(x))\qquad\text{per } x\to x_0.$$`, dim: R`
$$f\sim\ell g\iff\lim_{x\to x_0}\frac{f(x)}{\ell g(x)} = 1\iff\lim_{x\to x_0}\frac{f(x)}{g(x)} = \ell\iff\lim_{x\to x_0}\frac{f(x)-\ell g(x)}{g(x)} = 0\iff f-\ell g = o(g).$$
(Il primo passaggio usa la proposizione "asintoticità e limiti diversi da 0" del 29/10.) $\blacksquare$` },

{ t: "es", titolo: R`Sviluppi dai limiti notevoli`, testo: R`
Per $x\to0$, dalla proposizione precedente:
- $\sin x\sim x\iff\sin x = x+o(x)$;
- $1-\cos x\sim\frac{x^2}2\iff\cos x = 1-\frac{x^2}2+o(x^2)$;
- $e^x-1\sim x\iff e^x = 1+x+o(x)$;
- $\log(1+x)\sim x\iff\log(1+x) = x+o(x)$.` },

{ t: "teo", s: "omessa", titolo: R`Cambio di variabile negli o-piccoli`, testo: R`
Siano $f, h_1, h_2$ a valori reali, con $h_1\circ f$ e $h_2\circ f$ definite su $A$, e $x_0$ di accumulazione per $A$. Supponiamo che
1. $\displaystyle\lim_{x\to x_0}f(x) = y_0\in\overline{\mathbb R}$;
2. $h_1(y) = h_2(y)+o(h_2(y))$ per $y\to y_0$ (lo **sviluppo** di $h_1$);
3. $f(x)\neq y_0$ definitivamente per $x\to x_0$.

Allora
$$h_1(f(x)) = h_2(f(x))+o\big(h_2(f(x))\big)\qquad\text{per } x\to x_0.$$
Dimostrazione omessa: è una conseguenza della definizione di o-piccolo e del teorema di cambio di variabile nei limiti.` },

{ t: "es", titolo: R`Sviluppi composti: $\sin(x^2)$ ed $e^{\sin x}$`, testo: R`
- $\sin y = y+o(y)$ per $y\to0$; con $f(x) = x^2$: $\lim_{x\to0}x^2 = 0$ e $x^2\neq0$ definitivamente per $x\to0$, quindi per il cambio di variabile
$$\sin(x^2) = x^2+o(x^2)\quad\text{per } x\to0.$$
- $e^y = 1+y+o(y)$ per $y\to0$; con $f(x) = \sin x\to0$, $\sin x\neq0$ definitivamente:
$$e^{\sin x} = 1+\sin x+o(\sin x) = 1+x+o(x)\quad\text{per } x\to0,$$
usando $\sin x = x+o(x)$ e $o(\sin x) = o(x)$ (perché $\sin x\sim x$).` },

{ t: "teo", s: "dim", diff: 2, titolo: R`Principio di sostituzione`, testo: R`
Siano $f,\hat f,g,\hat g:A\to\mathbb R$, $x_0$ di accumulazione per $A$, con $g,\hat g,\hat f\neq0$ definitivamente per $x\to x_0$. Se
$$f(x) = \hat f(x)+o(\hat f(x)),\qquad g(x) = \hat g(x)+o(\hat g(x))\qquad\text{per } x\to x_0$$
(sviluppi di $f$ e di $g$), allora
$$\lim_{x\to x_0}\frac{f(x)}{g(x)} = \lim_{x\to x_0}\frac{\hat f(x)}{\hat g(x)},$$
nel senso che uno esiste se e solo se esiste l'altro, e in tal caso coincidono.`, dim: R`
Raccogliendo:
$$\frac{f(x)}{g(x)} = \frac{\hat f(x)+o(\hat f(x))}{\hat g(x)+o(\hat g(x))} = \frac{\hat f(x)}{\hat g(x)}\cdot\frac{1+\dfrac{o(\hat f(x))}{\hat f(x)}}{1+\dfrac{o(\hat g(x))}{\hat g(x)}} = \frac{\hat f(x)}{\hat g(x)}\cdot\frac{1+o(1)}{1+o(1)}.$$
Il secondo fattore tende a $\frac{1+0}{1+0} = 1$, quindi per l'algebra dei limiti i due limiti coincidono. $\blacksquare$

**Oss.** Si è usata la proprietà 5 degli o-piccoli con $h = \dfrac1{\hat g}$: $o(\hat g)\cdot\dfrac1{\hat g} = o\!\left(\hat g\cdot\dfrac1{\hat g}\right) = o(1)$.` },

{ t: "es", titolo: R`$\sin x+o(\sin x) = x+o(x)$`, testo: R`
Per $x\to0$, usando $\sin x = x+o(x)$ e le proprietà degli o-piccoli (in particolare la 6, $o(o(g)) = o(g)$):
$$\sin x+o(\sin x) = \big(x+o(x)\big)+o\big(x+o(x)\big) = x+o(x)+o(x)+o(o(x)) = x+o(x).$$` },

{ t: "att", titolo: R`$o(x^2)$ e $o(x)$ dipendono dal punto`, testo: R`
- Per $x\to0$: $o(x^2) = o(x)$, perché $\dfrac{o(x^2)}x = \dfrac{o(x^2)}{x^2}\cdot x\to0\cdot0$. **Non** vale il viceversa: $x^{3/2} = o(x)$ ma non è $o(x^2)$.
- Per $x\to+\infty$ è il contrario: $o(x) = o(x^2)$, perché $\dfrac{o(x)}{x^2} = \dfrac{o(x)}x\cdot\dfrac1x\to0$.` },

{ t: "def", titolo: R`O-grande`, testo: R`
Siano $f,g:A\to\mathbb R$, $x_0$ di accumulazione per $A$. Diciamo che $f$ è **O-grande di $g$** per $x\to x_0$, e scriviamo $f(x) = O(g(x))$, se esistono un intorno $I$ di $x_0$ e una costante $M>0$ tali che
$$|f(x)|\le M\,|g(x)|\qquad\forall x\in A\cap I\setminus\lbrace x_0\rbrace,$$
cioè se esiste $M>0$ tale che $|f(x)|\le M|g(x)|$ definitivamente per $x\to x_0$.

Esempio: $\left|x\sin\frac1x\right|\le|x|$ per ogni $x\neq0$, quindi $x\sin\frac1x = O(x)$ per $x\to0$.` },

{ t: "oss", titolo: R`O-grande è più debole di o-piccolo`, testo: R`
Se $f = O(g)$ e $g\neq0$ definitivamente, allora $\left|\dfrac{f(x)}{g(x)}\right|\le M$ definitivamente: $\dfrac fg$ è **limitata** vicino a $x_0$, ma **non serve che abbia limite**.

Confronto:
- $f = o(g)$: $\forall\varepsilon>0$ $\exists$ un intorno $I$ di $x_0$ con $|f(x)|\le\varepsilon|g(x)|$ in $A\cap I\setminus\lbrace x_0\rbrace$;
- $f = O(g)$: **esiste** un $M>0$ (uno solo) con $|f(x)|\le M|g(x)|$ definitivamente.

In particolare $f = o(g)\Rightarrow f = O(g)$, ma non viceversa: $x\sin\frac1x = O(x)$ per $x\to0$, mentre $\frac{x\sin(1/x)}{x} = \sin\frac1x$ non ha limite.` },

]});

/* ---- 2026-11-03.js ---- */
L({ data: "2026-11-03", n: 22, titolo: "o-piccolo vs O-grande, ordini di infinito e infinitesimo, successioni", voci: [

{ t: "prop", s: "dim", diff: 1, titolo: R`Confronto o-piccolo vs O-grande`, testo: R`
Siano $f,g:A\to\mathbb R$, $x_0$ di accumulazione per $A$, con $g(x)\neq0$ definitivamente per $x\to x_0$. Allora
$$f(x) = o(g(x))\ \Longrightarrow\ f(x) = O(g(x))\qquad\text{per } x\to x_0.$$
Il viceversa è **falso**.`, dim: R`
Per definizione di o-piccolo $\displaystyle\lim_{x\to x_0}\frac{f(x)}{g(x)} = 0$. Scelgo $\varepsilon = 1$ nella definizione di limite: trovo un intorno $I$ di $x_0$ tale che
$$\left|\frac{f(x)}{g(x)}\right|<1\qquad\forall x\in A\cap I\setminus\lbrace x_0\rbrace$$
(restringendo $I$ in modo che lì sia anche $g\neq0$), cioè
$$|f(x)|\le1\cdot|g(x)|\qquad\forall x\in A\cap I\setminus\lbrace x_0\rbrace.$$
Questo è proprio $f = O(g)$ con $M = 1$. $\blacksquare$` },

{ t: "att", titolo: R`$O(g)$ non implica $o(g)$`, testo: R`
- $1 = O(1)$, ma $1\neq o(1)$ (la costante $1$ non è infinitesima).
- $x = O(x)$ ma $x\neq o(x)$ per $x\to0$: infatti $|x|\le1\cdot|x|$ per ogni $x\in\mathbb R$, ma $\lim_{x\to0}\frac xx = 1\neq0$.
- Più in generale $f = O(f)$ (perché $|f(x)|\le1\cdot|f(x)|$ per ogni $x\in A$), ma $f\neq o(f)$ per $x\to x_0$, dato che $\lim_{x\to x_0}\frac{f(x)}{f(x)} = 1\neq0$.` },

{ t: "def", titolo: R`Confronto di infiniti`, testo: R`
Siano $f,g:A\to\mathbb R$, $x_0$ di accumulazione per $A$, con $f(x),g(x)\neq0$ definitivamente per $x\to x_0$ e
$$\lim_{x\to x_0}f(x) = \pm\infty,\qquad\lim_{x\to x_0}g(x) = \pm\infty$$
($f$ e $g$ sono **infinite**). Diciamo che:
- $f$ e $g$ sono **infinite dello stesso ordine** se $\exists\displaystyle\lim_{x\to x_0}\frac{f(x)}{g(x)}\in\mathbb R\setminus\lbrace0\rbrace$;
- $g$ è **infinita di ordine superiore** a $f$ se $\exists\displaystyle\lim_{x\to x_0}\frac{f(x)}{g(x)} = 0$;
- $g$ è **infinita di ordine inferiore** a $f$ se $\exists\displaystyle\lim_{x\to x_0}\frac{g(x)}{f(x)} = 0$ (cioè $f$ è di ordine superiore a $g$);
- $f$ e $g$ sono **infinite di ordini non confrontabili** se $\nexists\displaystyle\lim_{x\to x_0}\frac{f(x)}{g(x)}$.` },

{ t: "es", titolo: R`Potenze: $x^n$ contro $x^m$ per $x\to+\infty$`, testo: R`
Siano $f(x) = x^n$, $g(x) = x^m$ con $n,m\in\mathbb N\setminus\lbrace0\rbrace$, per $x\to+\infty$. Dato che
$$\lim_{x\to+\infty}\frac{x^n}{x^m} = \lim_{x\to+\infty}x^{n-m} = \begin{cases}+\infty & n>m\\ 1 & n=m\\ 0 & n<m\end{cases}$$
si ha: $f$ è infinita di **ordine superiore** a $g$ $\iff n>m$; $f$ e $g$ sono infinite dello **stesso ordine** $\iff n=m$.` },

{ t: "es", titolo: R`Infiniti non confrontabili: $x(2+\sin x)$ e $x$`, testo: R`
Siano $f(x) = x(2+\sin x)$ e $g(x) = x$ per $x\to+\infty$.
- $\lim_{x\to+\infty}f(x) = +\infty$, perché $2+\sin x\ge1$ per ogni $x$, quindi $f(x)\ge x$ per $x>0$, e $x\to+\infty$ (teorema del **singolo carabiniere**; il confronto non basta, perché presuppone che il limite di $f$ esista);
- $\lim_{x\to+\infty}g(x) = +\infty$.

Ma $\dfrac{f(x)}{g(x)} = 2+\sin x$ e $\lim_{x\to+\infty}\sin x$ **non esiste**, quindi non esiste nemmeno $\lim\frac fg$: $f$ e $g$ sono infinite di **ordini non confrontabili**.` },

{ t: "es", titolo: R`$\frac1{|x|}$ contro $\frac1{x^2}$ per $x\to0$`, testo: R`
Siano $f(x) = \frac1{|x|}$ e $g(x) = \frac1{x^2}$ per $x\neq0$, entrambe infinite per $x\to0$. Allora
$$\lim_{x\to0}\frac{f(x)}{g(x)} = \lim_{x\to0}\frac{x^2}{|x|} = \lim_{x\to0}|x| = 0,$$
quindi $g$ è infinita di **ordine superiore** a $f$.` },

{ t: "oss", titolo: R`Le potenze come "unità di misura"`, testo: R`
Fissato $x_0\in\mathbb R$, con il cambio di variabile $y = |x-x_0|\to0^+$:
$$\lim_{x\to x_0}|x-x_0|^\alpha = \begin{cases}0 & \alpha>0\\ 1 & \alpha=0\\ +\infty & \alpha<0.\end{cases}$$
Per $x_0 = \pm\infty$ invece
$$\lim_{x\to\pm\infty}|x|^\alpha = \begin{cases}+\infty & \alpha>0\\ 1 & \alpha=0\\ 0 & \alpha<0.\end{cases}$$
Le potenze servono quindi da termine di paragone per misurare "quanto velocemente" una funzione tende a $0$ o a $\infty$.` },

{ t: "def", titolo: R`Ordine di infinitesimo e di infinito ($x_0\in\mathbb R$)`, testo: R`
Sia $f:A\to\mathbb R$, $x_0\in\mathbb R$ di accumulazione per $A$, e $\alpha\in\mathbb R$. Diciamo che
- $f$ è **infinitesima di ordine $\alpha$** per $x\to x_0$ se
$$\exists\lim_{x\to x_0}\frac{f(x)}{|x-x_0|^\alpha} = \ell\in\mathbb R\setminus\lbrace0\rbrace;$$
- $f$ è **infinita di ordine $\alpha$** per $x\to x_0$ se
$$\exists\lim_{x\to x_0}f(x)\,|x-x_0|^\alpha = \ell\in\mathbb R\setminus\lbrace0\rbrace.$$

Es. $1-\cos x$ è infinitesima di ordine $2$ per $x\to0$ ($\ell = \frac12$); $\frac1{x^2}$ è infinita di ordine $2$ per $x\to0$.` },

{ t: "def", titolo: R`Ordine di infinitesimo e di infinito ($x_0 = \pm\infty$)`, testo: R`
Sia $f:A\to\mathbb R$, $x_0 = \pm\infty$ di accumulazione per $A$, e $\alpha\in\mathbb R$. Diciamo che
- $f$ è **infinitesima di ordine $\alpha$** per $x\to x_0$ se
$$\exists\lim_{x\to x_0}f(x)\,|x|^\alpha = \ell\in\mathbb R\setminus\lbrace0\rbrace;$$
- $f$ è **infinita di ordine $\alpha$** per $x\to x_0$ se
$$\exists\lim_{x\to x_0}\frac{f(x)}{|x|^\alpha} = \ell\in\mathbb R\setminus\lbrace0\rbrace.$$

Es. per $x\to+\infty$: $\frac1{x^3}$ è infinitesima di ordine $3$, $\sqrt x$ è infinita di ordine $\frac12$.` },

{ t: "def", titolo: R`Successione`, testo: R`
Una **successione** (di numeri reali) è una funzione
$$a:\mathbb N\to\mathbb R,\qquad n\mapsto a(n) = a_n.$$
$a_n$ si chiama **termine generale** e la successione si indica con $(a_n)_{n\in\mathbb N}$ oppure $\lbrace a_n\rbrace_{n\in\mathbb N}$.` },

{ t: "oss", titolo: R`Il dominio di una successione`, testo: R`
Come dominio si può avere un qualsiasi $A\subseteq\mathbb N$ con l'ordine indotto; in particolare spesso $A = \lbrace n\in\mathbb N: n\ge n_0\rbrace$ con $n_0\in\mathbb N$ fissato. Possono anche mancare termini intermedi.

Esempi:
- $a_n = n$ per $n\in\mathbb N_0$: $0,1,2,3,\dots$
- $a_n = \frac1n$ per $n\in\mathbb N$: $1,\frac12,\frac13,\frac14,\dots$
- $a_n = \frac1{\sqrt{5-n}}$, definita solo per $n = 0,1,2,3,4$: è una **successione finita**;
- $a_n = n!$: $1,1,2,6,24,\dots$
- $a_n = (n-3)!$, definita da $n = 3$ in poi: $1,1,2,6,\dots$
- $a_n = \frac1{|n-3|}$: manca il termine $n = 3$ (termine intermedio mancante).` },

{ t: "att", titolo: R`Per le successioni si studia solo $n\to+\infty$`, testo: R`
L'**unico** punto di accumulazione di un insieme $A\subseteq\mathbb N$ con infiniti elementi è $+\infty$. Quindi l'unico limite che ha senso studiare è
$$\lim_{n\to+\infty}a_n.$$
Siccome una successione è una funzione, proprietà e risultati sulle successioni si **deducono** da quelli già visti per le funzioni.` },

{ t: "def", titolo: R`Monotonia, limitatezza, "definitivamente" per successioni`, testo: R`
Sono già definite (come per le funzioni):
- $(a_n)$ è **monotona crescente** se $a_n\le a_{n+1}$ per ogni $n$ (**strettamente** se $a_n<a_{n+1}$); **decrescente** se $a_n\ge a_{n+1}$ (strettamente se $>$);
- $(a_n)$ è **limitata** se $\exists M\ge0$ tale che $|a_n|\le M$ per ogni $n$ (analogamente limitata inferiormente/superiormente);
- $(a_n)$ verifica una proprietà $P$ **definitivamente** per $n\to+\infty$ se
$$\exists N\in\mathbb N\ \text{tale che}\ P(a_n)\ \text{è vera}\ \forall n\ge N.$$` },

{ t: "es", titolo: R`Tre successioni tipo: $\frac1n$, $(-1)^n$, $n!$`, testo: R`
- $a_n = \frac1n$ ($n\ge1$): limitata, positiva, strettamente decrescente e **infinitesima**: $\lim_{n\to+\infty}\frac1n = 0$. Infatti $\forall\varepsilon>0$ $\exists N\in\mathbb N$ (Archimede: $N>\frac1\varepsilon$) tale che $\frac1n\le\frac1N<\varepsilon$ per ogni $n\ge N$.
- $a_n = (-1)^n$: $1,-1,1,-1,\dots$ è limitata, **non** è positiva, **non** è monotona, e $\nexists\lim_{n\to+\infty}(-1)^n$.
- $a_n = n!$: positiva, illimitata, strettamente crescente (definitivamente), $\lim_{n\to+\infty}n! = +\infty$. Osservo che $a_{n+1} = (n+1)\cdot a_n$ per ogni $n$: ogni termine si ottiene dal precedente, è una successione **ricorsiva**.` },

{ t: "def", titolo: R`Successione ricorsiva e successione periodica`, testo: R`
- $(a_n)$ si dice **ricorsiva** se esiste una funzione $f:\mathbb R\to\mathbb R$ tale che
$$a_{n+1} = f(a_n)\qquad\forall n.$$
- $(a_n)_{n\in\mathbb N}$ si dice **periodica** se esiste $k\in\mathbb N$, $k\ge1$, tale che
$$a_{n+k} = a_n\qquad\forall n\in\mathbb N,$$
e $k$ si chiama **periodo**.

Es. $a_n = n!$ è ricorsiva ($a_{n+1} = (n+1)\cdot a_n$); $a_n = (-1)^n$ è periodica di periodo $2$ (ed è anche ricorsiva con $f(x) = -x$).` },

{ t: "def", titolo: R`Limite di una successione`, testo: R`
Diciamo che $(a_n)$ ha **limite** $\ell\in\mathbb R\cup\lbrace\pm\infty\rbrace$ per $n\to+\infty$, o che $a_n$ **tende a** $\ell$, se
$$\lim_{n\to+\infty}a_n = \ell.$$
In tal caso si scrive anche $a_n\to\ell$ oppure $a_n\xrightarrow[n\to+\infty]{}\ell$.

Esplicitamente: per ogni intorno $U$ di $\ell$ esiste $N\in\mathbb N$ tale che $a_n\in U$ per ogni $n\ge N$.` },

{ t: "def", titolo: R`Successioni convergenti, divergenti, irregolari`, testo: R`
- Se $\ell\in\mathbb R$, $(a_n)$ è **convergente** (a $\ell$);
- se $\ell = \pm\infty$, $(a_n)$ è **divergente** (a $\pm\infty$);
- se il limite **non esiste**, $(a_n)$ è **irregolare** (o oscillante).

Esempi: $\frac1n$ è convergente a $0$; $n!$ è divergente a $+\infty$; $(-1)^n$ è irregolare.` },

{ t: "es", s: "casa", diff: 2, titolo: R`Dimostrare che $(-2)^n$ è irregolare`, testo: R`
Dimostrare che la successione $a_n = (-2)^n$ non ha limite per $n\to+\infty$.`, dim: R`
Per assurdo sia $a_n\to\ell\in\overline{\mathbb R}$.

**$\ell\in\mathbb R$ è impossibile:** con $\varepsilon = 1$ si avrebbe $|a_n-\ell|<1$, quindi $|a_n|<|\ell|+1$, per ogni $n\ge N$. Ma $|a_n| = 2^n\ge n$ (induzione), e basta prendere $n\ge\max\lbrace N,|\ell|+1\rbrace$ per avere $|a_n|\ge|\ell|+1$: assurdo.

**$\ell = +\infty$ è impossibile:** prendo l'intorno $U = (0,+\infty)$. Dovrebbe essere $a_n>0$ per ogni $n\ge N$, ma per $n\ge N$ dispari $a_n = -2^n<0$.

**$\ell = -\infty$ è impossibile:** idem con $U = (-\infty,0)$ e $n$ pari, dove $a_n = 2^n>0$.

Quindi il limite non esiste. (Per $(-1)^n$ si ragiona allo stesso modo per $\pm\infty$; per $\ell\in\mathbb R$ si usa $\varepsilon = \frac12$: due termini consecutivi distano $2$, quindi non possono stare entrambi a distanza $<\frac12$ da $\ell$.) $\blacksquare$` },

]});

/* ---- 2026-11-05.js ---- */
L({ data: "2026-11-05", n: 23, titolo: "Teoremi sui limiti di successioni, progressione geometrica, sottosuccessioni, caratterizzazione sequenziale", voci: [

{ t: "teo", titolo: R`Teoremi sui limiti di successioni`, testo: R`
Siccome le successioni sono funzioni, valgono (con $n\to+\infty$) tutti i teoremi già visti per i limiti di funzioni:
1. **Unicità:** se $\exists\lim_{n\to+\infty}a_n$, allora è unico.
2. **Confronto tra limiti diversi:** se $a_n\to\ell$, $b_n\to\hat\ell$ e $\ell<\hat\ell$, allora $a_n<b_n$ definitivamente (con $b_n = 0$ è la permanenza del segno).
3. **Confronto:** se $a_n\le b_n$ definitivamente, $a_n\to\ell$ e $b_n\to\hat\ell$, allora $\ell\le\hat\ell$.
4. **Due carabinieri:** se $a_n\le b_n\le c_n$ definitivamente e $a_n\to\ell$, $c_n\to\ell$, allora anche $b_n\to\ell$. Analogo il teorema del **singolo carabiniere** ($a_n\le b_n$ e $a_n\to+\infty\Rightarrow b_n\to+\infty$).
5. **Algebra dei limiti finiti:** se $a_n\to\ell$ e $b_n\to\hat\ell$ con $\ell,\hat\ell\in\mathbb R$, allora
$$\alpha a_n+\beta b_n\to\alpha\ell+\beta\hat\ell\ \ \forall\alpha,\beta\in\mathbb R,\qquad a_n\cdot b_n\to\ell\cdot\hat\ell,\qquad\frac{a_n}{b_n}\to\frac\ell{\hat\ell}\ \text{ se }\hat\ell\neq0.$$
Analogo il teorema per l'**algebra dei limiti infiniti**.` },

{ t: "teo", s: "dim", diff: 1, titolo: R`Una successione convergente è limitata`, testo: R`
Se $a_n\to\ell\in\mathbb R$, allora $(a_n)$ è limitata.`, dim: R`
Per definizione di limite con $\varepsilon = 1$: esiste $N\in\mathbb N$ tale che $|a_n-\ell|<1$ per ogni $n\ge N$, quindi
$$|a_n| = |a_n-\ell+\ell|\le|a_n-\ell|+|\ell|<1+|\ell|\qquad\forall n\ge N.$$
Restano i termini "scartati" $a_1,a_2,\dots,a_{N-1}$ (nel corso $\mathbb N = \lbrace1,2,3,\dots\rbrace$), che sono un numero **finito**. Definisco
$$M = \max\lbrace|a_1|,|a_2|,\dots,|a_{N-1}|,\ 1+|\ell|\rbrace.$$
Allora $|a_n|\le M$ per ogni $n\in\mathbb N$: se $n\le N-1$ perché $|a_n|$ è uno dei termini del massimo, se $n\ge N$ perché $|a_n|<1+|\ell|\le M$. Quindi $(a_n)$ è limitata. $\blacksquare$

**Oss.** Per le funzioni si otteneva solo "limitata **definitivamente**" (limitatezza locale); per le successioni si riesce a togliere il "definitivamente" perché i termini prima di $N$ sono finiti.` },

{ t: "teo", s: "dim", diff: 2, titolo: R`Progressione geometrica: $\lim r^n$`, testo: R`
Fissato $r\in\mathbb R$ (la **ragione**), la successione $a_n = r^n$, $n\in\mathbb N$, si chiama **progressione geometrica** di ragione $r$ e verifica
$$\lim_{n\to+\infty}r^n = \begin{cases}+\infty & r>1\\ 1 & r=1\\ 0 & |r|<1\\ \nexists & r\le-1.\end{cases}$$`, dim: R`
Per casi.

**$r>0$.** Considero la funzione $f(x) = r^x = e^{x\log r}$ per $x\ge0$. Ricordo che
$$\lim_{x\to+\infty}e^{\alpha x} = \begin{cases}+\infty&\alpha>0\\0&\alpha<0.\end{cases}$$
Con $\alpha = \log r$: se $r>1$ allora $\log r>0$ e $f(x)\to+\infty$; se $0<r<1$ allora $\log r<0$ e $f(x)\to0$. Restringendo $f$ a $\mathbb N$ (cioè $a_n = f(n)$) si ottiene lo stesso limite. Se $r = 1$, $a_n = 1$ per ogni $n$.

**$r = 0$:** $a_n = 0$ per $n\ge1$, quindi $a_n\to0$.

**$-1<r<0$:** $|a_n| = |r|^n$ con $|r|\in(0,1)$, quindi $|a_n|\to0$ per il caso precedente, e dunque $a_n\to0$.

**$r = -1$:** $a_n = (-1)^n$ è irregolare: non può tendere a $\pm\infty$ perché $|a_n| = 1$, e non a $\ell\in\mathbb R$ perché con $\varepsilon = \frac12$ due termini consecutivi (che distano $2$) dovrebbero stare entrambi in $(\ell-\frac12,\ell+\frac12)$.

**$r<-1$:** $|a_n| = |r|^n\to+\infty$ per il caso $|r|>1$.
- Se $\lim a_n = \ell\in\mathbb R$, la successione sarebbe limitata (teorema precedente), contraddizione con $|a_n|\to+\infty$. Quindi se il limite esiste è $\ell = \pm\infty$.
- Però $r^n>0$ per $n$ pari e $r^n<0$ per $n$ dispari. Quindi la definizione di limite non è verificata né per $+\infty$ (con l'intorno $(0,+\infty)$: i termini dispari ne restano fuori) né per $-\infty$ (con $(-\infty,0)$: i pari ne restano fuori). È l'esercizio su $(-2)^n$ del 3/11.

Il limite quindi non può esistere. $\blacksquare$` },

{ t: "def", titolo: R`Sottosuccessione (estratta)`, testo: R`
Data una successione $(a_n)_{n\in\mathbb N}$ e una funzione $\varphi:\mathbb N\to\mathbb N$ **strettamente crescente**, si dice **sottosuccessione** (o **estratta**) di $(a_n)$ tramite $\varphi$ la successione
$$\big(a_{\varphi(k)}\big)_{k\in\mathbb N}.$$
**Oss.** Una sottosuccessione è la composizione $a\circ\varphi:\mathbb N\to\mathbb R$.` },

{ t: "es", titolo: R`Le estratte pari e dispari di $(-1)^n$`, testo: R`
Sia $a_n = (-1)^n$.
- Con $\varphi(k) = 2k$: $a_{\varphi(k)} = (-1)^{2k} = 1$ per ogni $k\in\mathbb N$;
- con $\psi(k) = 2k-1$: $a_{\psi(k)} = (-1)^{2k-1} = -1$ per ogni $k\in\mathbb N$.

Ho trovato le due sottosuccessioni sui **pari** e sui **dispari**.

**Oss.** L'indice nelle successioni è **muto**, esattamente come la variabile nelle funzioni: $(a_{2k})_k$ e $(a_{2n})_n$ sono la stessa successione.` },

{ t: "prop", s: "omessa", diff: 2, titolo: R`Limite e sottosuccessioni`, testo: R`
Una successione $(a_n)_{n\in\mathbb N}$ ha limite $\ell\in\mathbb R\cup\lbrace\pm\infty\rbrace$ **se e solo se** tutte le sue sottosuccessioni hanno lo stesso limite $\ell$.

(Dimostrazione omessa: vedere il foglio settimanale.)`, dim: R`
**$\Leftarrow$** è immediato: $(a_n)$ è sottosuccessione di se stessa con $\varphi(k) = k$.

**$\Rightarrow$** Prima osservo che $\varphi(k)\ge k$ per ogni $k\in\mathbb N$ (induzione: $\varphi(1)\ge1$ perché $\varphi(1)\in\mathbb N$; se $\varphi(k)\ge k$ allora $\varphi(k+1)>\varphi(k)\ge k$, quindi $\varphi(k+1)\ge k+1$).

Sia $U$ un intorno di $\ell$. Esiste $N$ tale che $a_n\in U$ per ogni $n\ge N$. Allora per ogni $k\ge N$ si ha $\varphi(k)\ge k\ge N$, quindi $a_{\varphi(k)}\in U$. Cioè $a_{\varphi(k)}\to\ell$. $\blacksquare$` },

{ t: "cor", titolo: R`Due estratte con limiti diversi ⇒ irregolare`, testo: R`
Se $(a_n)$ ammette due sottosuccessioni convergenti a due limiti **diversi**, allora $(a_n)$ è **irregolare**.

Es. $(-1)^n$: l'estratta dei pari tende a $1$, quella dei dispari a $-1$.` },

{ t: "att", titolo: R`Limitata non implica convergente`, testo: R`
Sappiamo che $a_n\to\ell\in\mathbb R\Rightarrow(a_n)$ è limitata. Il **viceversa è falso**: $a_n = (-1)^n$ è limitata ($|a_n| = 1$) ma non converge.` },

{ t: "teo", s: "omessa", titolo: R`Teorema di Bolzano–Weierstrass`, testo: R`
Se $(a_n)$ è **limitata**, allora ammette una **sottosuccessione convergente**.

Es. $(-1)^n$ non converge, ma l'estratta dei pari converge a $1$. (Dimostrazione omessa.)` },

{ t: "teo", s: "omessa", titolo: R`Caratterizzazione sequenziale del limite`, testo: R`
Siano $A\subseteq\mathbb R$ non vuoto, $f:A\to\mathbb R$, $x_0$ di accumulazione per $A$. Sono equivalenti:
- **(A)** $\displaystyle\lim_{x\to x_0}f(x) = \ell\in\mathbb R\cup\lbrace\pm\infty\rbrace$;
- **(B)** $\displaystyle\lim_{n\to+\infty}f(a_n) = \ell$ **per ogni** successione $(a_n)_{n\in\mathbb N}\subseteq A$ tale che $a_n\neq x_0$ definitivamente per $n\to+\infty$ e $\lim_{n\to+\infty}a_n = x_0$.

(Dimostrazione omessa.)` },

{ t: "oss", titolo: R`Come usarla per dire che un limite NON esiste`, testo: R`
La caratterizzazione sequenziale è molto utile per mostrare che una funzione **non ha limite** per $x\to x_0$: basta trovare due successioni $(a_n)$, $(b_n)$ in $A$ tali che
- $a_n\neq x_0$ e $b_n\neq x_0$ definitivamente;
- $a_n\to x_0$ e $b_n\to x_0$;
- $\displaystyle\lim_{n\to+\infty}f(a_n)\neq\lim_{n\to+\infty}f(b_n)$.

Se il limite di $f$ esistesse, per (B) i due limiti dovrebbero coincidere.` },

{ t: "es", titolo: R`$\nexists\lim_{x\to+\infty}\sin x$`, testo: R`
Sia $f(x) = \sin x$, $x_0 = +\infty$. Considero
$$a_n = \frac\pi2+2n\pi\to+\infty,\qquad b_n = -\frac\pi2+2n\pi\to+\infty.$$
Allora
$$\lim_{n\to+\infty}f(a_n) = \lim_{n\to+\infty}\sin\!\left(\frac\pi2+2n\pi\right) = 1,\qquad\lim_{n\to+\infty}f(b_n) = \lim_{n\to+\infty}\sin\!\left(-\frac\pi2+2n\pi\right) = -1.$$
Siccome i due limiti sono diversi, la caratterizzazione sequenziale implica che $\nexists\lim_{x\to+\infty}\sin x$.` },

{ t: "es", s: "casa", diff: 1, titolo: R`Esercizi: limiti che non esistono`, testo: R`
1. Provare che $\nexists\lim_{x\to+\infty}x^2\sin x$.
2. Provare che $\nexists\lim_{x\to0}\frac1x$ (ad esempio con $a_n = \frac1n$, $b_n = -\frac1n$).`, dim: R`
1. Prendo $a_n = \frac\pi2+2n\pi$ e $b_n = -\frac\pi2+2n\pi$: entrambe tendono a $+\infty$. Allora $f(a_n) = a_n^2\cdot1 = a_n^2\to+\infty$, mentre $f(b_n) = b_n^2\cdot(-1) = -b_n^2\to-\infty$. I due limiti sono diversi, quindi il limite non esiste. (Va bene anche $b_n = n\pi$, con $f(b_n) = 0\to0$.)
2. $a_n = \frac1n\to0$, $b_n = -\frac1n\to0$, entrambe $\neq0$. Ma $f(a_n) = n\to+\infty$ e $f(b_n) = -n\to-\infty$: limiti diversi, quindi $\nexists\lim_{x\to0}\frac1x$. $\blacksquare$` },

{ t: "es", titolo: R`Ordini di grandezza: $n!\to+\infty$ e $n^n\to+\infty$`, testo: R`
- $\lim_{n\to+\infty}n! = +\infty$. Infatti
$$n! = n\cdot(n-1)\cdots3\cdot2\cdot1\ge n\to+\infty$$
e concludo per il teorema del **singolo carabiniere**.
- (Esercizio) $\lim_{n\to+\infty}n^n = +\infty$. Infatti $n^n = \underbrace{n\cdot n\cdots n}_{n\text{ volte}}\ge n\to+\infty$, e concludo ancora con il singolo carabiniere.

**Oss.** Le stime si possono migliorare (es. $n^n\ge n!$ fattore per fattore). Ma quale tra $n!$ e $n^n$ va a $+\infty$ **più velocemente**? E di quanto? (Si vedrà nella prossima lezione.)` },

]});

/* ---- 2026-11-09.js ---- */
L({ data: "2026-11-09", n: 25, titolo: "Gerarchia per successioni, Stirling, criterio del rapporto, successioni monotone, serie numeriche", voci: [

{ t: "teo", s: "dim", diff: 2, titolo: R`Gerarchia degli infiniti per successioni`, testo: R`
Valgono i seguenti limiti:
1. $\displaystyle\lim_{n\to+\infty}\frac{(\log_an)^\beta}{n^\alpha} = 0\qquad\forall a>1,\ \forall\alpha,\beta>0$;
2. $\displaystyle\lim_{n\to+\infty}\frac{n^\alpha}{a^n} = 0\qquad\forall a>1,\ \forall\alpha>0$;
3. $\displaystyle\lim_{n\to+\infty}\frac{a^n}{n!} = 0\qquad\forall a>1$;
4. $\displaystyle\lim_{n\to+\infty}\frac{n!}{n^n} = 0$.

Quindi, per $n\to+\infty$: $\ (\log n)^\beta\ \ll\ n^\alpha\ \ll\ a^n\ \ll\ n!\ \ll\ n^n$.`, dim: R`
**1 e 2** seguono dalla gerarchia degli infiniti per funzioni (29/10) e dalla caratterizzazione sequenziale del limite (5/11), con $a_n = n\to+\infty$.

**4.** Scrivo
$$\frac{n!}{n^n} = \frac{1\cdot2\cdot3\cdots n}{n\cdot n\cdot n\cdots n} = \frac1n\cdot\underbrace{\frac2n}_{\le1}\cdot\underbrace{\frac3n}_{\le1}\cdots\underbrace{\frac nn}_{\le1}\le\frac1n\qquad\forall n\in\mathbb N,$$
e quindi $0\le\frac{n!}{n^n}\le\frac1n$ per ogni $n\in\mathbb N$. Pertanto $\lim\frac{n!}{n^n} = 0$ per il teorema dei due carabinieri.

**3.** Osservo che
$$\frac{a^n}{n!} = \underbrace{\frac a1\cdot\frac a2\cdot\frac a3\cdots\frac an}_{n\text{ volte}}.$$
Siccome $a>1$ è fissato, esiste $N\in\mathbb N$ tale che $N\ge a$ (ad esempio $N = \lceil a\rceil$). Allora per ogni $n\in\mathbb N$ con $n>N$:
$$\frac{a^n}{n!} = \underbrace{\frac a1\cdots\frac aN}_{=\,a^N/N!}\cdot\underbrace{\frac a{N+1}}_{\le1}\cdots\underbrace{\frac a{n-1}}_{\le1}\cdot\frac an\le\frac{a^N}{N!}\cdot\frac an.$$
Quindi, dato $a>1$ e scelto $N\ge a$, vale
$$0\le\frac{a^n}{n!}\le\frac{a^{N+1}}{N!}\cdot\frac1n\qquad\text{definitivamente per } n\to+\infty,$$
e il secondo membro tende a $0$ (è una costante per $\frac1n$). Concludo con il teorema dei due carabinieri. $\blacksquare$` },

{ t: "teo", s: "omessa", titolo: R`Formula di Stirling`, testo: R`
Il punto 4 della gerarchia si può rendere più preciso:
$$\lim_{n\to+\infty}\frac{n!}{\sqrt{2\pi n}\left(\frac ne\right)^n} = 1,\qquad\text{cioè}\qquad n!\sim\sqrt{2\pi n}\left(\frac ne\right)^n\quad\text{per } n\to+\infty.$$
(Dimostrazione omessa.)` },

{ t: "es", titolo: R`$\sqrt[n]{n!}\to+\infty$ con Stirling`, testo: R`
Sia $a_n = \sqrt[n]{n!}$ per $n\ge2$. Per Stirling
$$a_n\sim\sqrt[n]{\sqrt{2\pi n}\left(\frac ne\right)^n} = (2\pi n)^{\frac1{2n}}\cdot\frac ne\qquad\text{per } n\to+\infty.$$
Osservo che $(2\pi n)^{\frac1{2n}}\to1$, perché
$$(2\pi n)^{\frac1{2n}} = e^{\frac{\log(2\pi n)}{2n}}\quad\text{e}\quad\frac{\log(2\pi n)}{2n}\to0\ \text{ per gerarchia}.$$
Quindi $a_n\sim\frac ne\to+\infty$, e dunque $\lim_{n\to+\infty}\sqrt[n]{n!} = +\infty$ per sostituzione asintotica.` },

{ t: "teo", s: "omessa", titolo: R`Criterio del rapporto`, testo: R`
Sia $(a_n)_{n\in\mathbb N}$ tale che $a_n>0$ definitivamente. Se
$$\exists\lim_{n\to+\infty}\frac{a_{n+1}}{a_n} = \ell\in[0,+\infty)\cup\lbrace+\infty\rbrace,$$
allora:
1. $\ell<1\ \Rightarrow\ \displaystyle\lim_{n\to+\infty}a_n = 0$;
2. $\ell>1\ \Rightarrow\ \displaystyle\lim_{n\to+\infty}a_n = +\infty$;
3. $\ell = 1$: **non posso dire nulla**.

(Dimostrazione omessa, ma segue dal confronto con la progressione geometrica.)` },

{ t: "es", titolo: R`Criterio del rapporto: il caso $\ell = 1$ non decide`, testo: R`
- $a_n = n$ per ogni $n\in\mathbb N$: $\lim a_n = +\infty$, ma $\dfrac{a_{n+1}}{a_n} = \dfrac{n+1}n\to1$.
- $b_n = \frac1n$ per ogni $n\in\mathbb N$: $\lim b_n = 0$, ma $\dfrac{b_{n+1}}{b_n} = \dfrac n{n+1}\to1$.

Stesso $\ell = 1$, comportamenti opposti.` },

{ t: "teo", s: "dim", diff: 1, titolo: R`Esistenza del limite per successioni monotone`, testo: R`
Se $(a_n)$ è **definitivamente monotona**, allora ammette limite:
$$\exists\lim_{n\to+\infty}a_n\in\mathbb R\cup\lbrace\pm\infty\rbrace.$$
Inoltre:
- se $(a_n)_{n\in\mathbb N}$ è definitivamente monotona **crescente**, allora $\displaystyle\lim_{n\to+\infty}a_n = \sup_{n\in\mathbb N}a_n$;
- se $(a_n)_{n\in\mathbb N}$ è definitivamente monotona **decrescente**, allora $\displaystyle\lim_{n\to+\infty}a_n = \inf_{n\in\mathbb N}a_n$.`, dim: R`
Già dimostrato: è un caso particolare, con $A = \mathbb N$ e $f:A\to\mathbb R$, $f(n) = a_n$, dell'analogo risultato per funzioni monotone (27/10), con $x_0 = +\infty = \sup\mathbb N$. (Se la monotonia vale solo da un certo $N$ in poi, si applica il teorema alla successione $(a_n)_{n\ge N}$: il limite non cambia, e sup/inf vanno presi sui termini con $n\ge N$.) $\blacksquare$` },

{ t: "oss", titolo: R`Monotona e limitata ⇒ convergente`, testo: R`
Se $(a_n)_{n\in\mathbb N}$ è **limitata** e definitivamente **monotona**, allora è **convergente**, cioè ammette limite finito. Infatti
$$\lim_{n\to+\infty}a_n = \begin{cases}\sup_{n\in\mathbb N}a_n\in\mathbb R & \text{se crescente}\\[2pt] \inf_{n\in\mathbb N}a_n\in\mathbb R & \text{se decrescente}\end{cases}$$
e sup e inf sono finiti perché la successione è limitata.` },

{ t: "def", titolo: R`Serie numerica`, testo: R`
Idea: una serie numerica è una "somma infinita".

Data una successione $(a_n)_{n\in\mathbb N}$ in $\mathbb R$, la **successione delle somme parziali** di $(a_n)$ è $(S_k)_{k\in\mathbb N}$ definita ponendo
$$S_k = \sum_{n=1}^ka_n\qquad\forall k\in\mathbb N.$$
Quindi $S_1 = a_1$, $S_2 = a_1+a_2$, $S_3 = a_1+a_2+a_3$, … e in generale $S_k = a_1+a_2+\dots+a_k$.

Si dice **serie numerica** di termine generale $a_n$ il limite, se esiste, della successione delle somme parziali:
$$\sum_{n=1}^{+\infty}a_n = \lim_{k\to+\infty}S_k = \lim_{k\to+\infty}\sum_{n=1}^ka_n\in\mathbb R\cup\lbrace\pm\infty\rbrace.$$
La serie $\sum_{n=1}^{+\infty}a_n$ si dice
- **convergente** se $(S_k)$ è convergente;
- **divergente** (a $\pm\infty$) se $(S_k)$ è divergente a $\pm\infty$;
- **indeterminata** (o irregolare) se $(S_k)$ è irregolare.` },

{ t: "es", titolo: R`Primi esempi di serie`, testo: R`
- $a_n = 0$ $\forall n$: $S_k = 0$ $\forall k$, quindi $\sum_{n=1}^{+\infty}0 = 0$.
- $a_n = c\in\mathbb R$ $\forall n$: $S_k = k\cdot c$, quindi
$$\sum_{n=1}^{+\infty}c = \lim_{k\to+\infty}k\,c = \begin{cases}+\infty & c>0\\ 0 & c=0\\ -\infty & c<0.\end{cases}$$
- $a_n = n$: $S_k = 1+2+\dots+k = \frac{k(k+1)}2$ (Gauss), quindi $\sum_{n=1}^{+\infty}n = +\infty$.
- $a_n = (-1)^{n+1}$: $S_k = \begin{cases}1 & k\text{ dispari}\\ 0 & k\text{ pari}\end{cases}$, quindi $(S_k)$ è irregolare e la serie $\sum_{n=1}^{+\infty}(-1)^{n+1}$ è **indeterminata**.` },

{ t: "teo", s: "dim", diff: 1, titolo: R`Serie geometrica`, testo: R`
Sia $r\in\mathbb R$ (la ragione). Allora
$$\sum_{n=0}^{+\infty}r^n = \begin{cases}\dfrac1{1-r} & |r|<1\ \text{(converge)}\\[4pt] +\infty & r\ge1\ \text{(diverge)}\\[2pt] \nexists & r\le-1\ \text{(indeterminata)}.\end{cases}$$`, dim: R`
Dato $r\in\mathbb R$, $r\neq1$, sappiamo (per induzione, lezione del 1/10) che
$$\sum_{n=0}^kr^n = \frac{1-r^{k+1}}{1-r}\qquad\forall k\in\mathbb N_0.$$
Ora prendiamo $a_n = r^n$, $n\in\mathbb N_0$, la progressione geometrica di ragione $r$. Da quanto detto sopra
$$\sum_{n=0}^{+\infty}r^n = \lim_{k\to+\infty}\frac{1-r^{k+1}}{1-r},$$
e dal limite della progressione geometrica (5/11):
- $|r|<1$: $r^{k+1}\to0$, quindi la somma è $\frac1{1-r}$;
- $r>1$: $r^{k+1}\to+\infty$ e $1-r<0$, quindi la somma è $+\infty$;
- $r = 1$: $S_k = k+1\to+\infty$;
- $r\le-1$: $r^{k+1}$ non ha limite, quindi neanche $S_k$. $\blacksquare$` },

{ t: "es", titolo: R`Serie di Mengoli (somma telescopica)`, testo: R`
(Vedi foglio della settimana 1.) Sappiamo che
$$S_k = \sum_{n=1}^k\frac1{n(n+1)} = \sum_{n=1}^k\left(\frac1n-\frac1{n+1}\right) = 1-\frac1{k+1}$$
(somma **telescopica**: i termini intermedi si cancellano a due a due), e quindi
$$\sum_{n=1}^{+\infty}\frac1{n(n+1)} = \lim_{k\to+\infty}\left(1-\frac1{k+1}\right) = 1.$$` },

{ t: "teo", s: "dim", diff: 3, titolo: R`Serie armonica generalizzata`, testo: R`
Dato $\alpha\in\mathbb R$ vale
$$\sum_{n=1}^{+\infty}\frac1{n^\alpha}\ \begin{cases}\text{converge} & \alpha>1\\ \text{diverge a }+\infty & \alpha\le1.\end{cases}$$
(Il prof enuncia il teorema per $\alpha\in(0,+\infty)$ e tratta $\alpha\le0$ con un'osservazione; il caso $\alpha>1$ è dimostrato nella lezione del 10/11, qui riunito.)
Per $\alpha = 1$ è la **serie armonica** $\sum\frac1n$.`, dim: R`
Per casi.

**$\alpha\le0$.** Si ha $\frac1{n^\alpha} = n^{-\alpha}\ge1$ per ogni $n\in\mathbb N$, quindi $S_k\ge k\to+\infty$ e la serie diverge a $+\infty$ (anche per la condizione necessaria: il termine generale non tende a $0$).

**$\alpha\in(0,1)$.** Allora
$$S_k = 1+\frac1{2^\alpha}+\frac1{3^\alpha}+\dots+\frac1{k^\alpha}\ge\underbrace{\frac1{k^\alpha}+\dots+\frac1{k^\alpha}}_{k\text{ volte}} = \frac k{k^\alpha} = k^{1-\alpha}\xrightarrow[k\to+\infty]{}+\infty,$$
perché $1-\alpha>0$. Quindi $\sum\frac1{n^\alpha}$ diverge a $+\infty$ (singolo carabiniere).

**$\alpha = 1$.** Osservo che $S_k = \sum_{n=1}^k\frac1n$ è strettamente crescente, infatti
$$S_{k+1} = S_k+\frac1{k+1}>S_k\qquad\forall k\in\mathbb N.$$
Pertanto $(S_k)$ ha limite e vale
$$\sum_{n=1}^{+\infty}\frac1n = \lim_{k\to+\infty}S_k = \sup_{k\in\mathbb N}S_k =: S\in\mathbb R\cup\lbrace+\infty\rbrace.$$
Vogliamo dimostrare che $S = +\infty$. Supponiamo per assurdo che $S\in\mathbb R$. Osservo che
$$S_{2k}-S_k = \sum_{n=k+1}^{2k}\frac1n = \frac1{k+1}+\frac1{k+2}+\dots+\frac1{2k}\ge\underbrace{\frac1{2k}+\dots+\frac1{2k}}_{k\text{ volte}} = k\cdot\frac1{2k} = \frac12.$$
Quindi $S_{2k}-S_k\ge\frac12$ per ogni $k\in\mathbb N$. Passo al limite per $k\to+\infty$ (anche $S_{2k}\to S$, è un'estratta) e trovo $S-S\ge\frac12$, cioè $0\ge\frac12$, che è assurdo. Dunque deve essere $S = +\infty$.

**$\alpha>1$** (lezione del 10/11). Come per $\alpha = 1$, $S_k = \sum_{n=1}^k\frac1{n^\alpha}$ è crescente ($S_{k+1} = S_k+\frac1{(k+1)^\alpha}\ge S_k$ per ogni $k\in\mathbb N$). Quindi di nuovo
$$\lim_{k\to+\infty}S_k = \sup_{k\in\mathbb N}S_k =: S\in\mathbb R\cup\lbrace+\infty\rbrace.$$
Vogliamo dimostrare che $S\neq+\infty$, cioè $S\in\mathbb R$.

Osserviamo che in $S_{2k+1}$, tolto il primo termine $1$, restano $2k$ termini, che raggruppo in $k$ coppie (un pari $2n$ e il dispari successivo $2n+1$):
$$S_{2k+1} = 1+\sum_{n=1}^k\left(\frac1{(2n)^\alpha}+\frac1{(2n+1)^\alpha}\right)\le1+\sum_{n=1}^k\frac2{(2n)^\alpha} = 1+\frac2{2^\alpha}\sum_{n=1}^k\frac1{n^\alpha} = 1+2^{1-\alpha}S_k,$$
dove ho usato $\frac1{(2n+1)^\alpha}\le\frac1{(2n)^\alpha}$. Per monotonia $S_k\le S_{2k+1}$, quindi
$$S_{2k+1}\le1+2^{1-\alpha}S_{2k+1}\qquad\forall k\in\mathbb N,$$
cioè
$$S_{2k+1}\left(1-2^{1-\alpha}\right)\le1\qquad\forall k\in\mathbb N.$$
Siccome $\alpha>1$, si ha $1-\alpha<0$ e quindi $2^{1-\alpha}<1$: il fattore $1-2^{1-\alpha}$ è **positivo**. Dunque
$$0<S_{2k+1}\le\frac1{1-2^{1-\alpha}}\qquad\forall k\in\mathbb N.$$
Passando al limite per $k\to+\infty$ ($S_{2k+1}$ è un'estratta di $S_k$, quindi tende a $S$):
$$S\le\frac1{1-2^{1-\alpha}},$$
e quindi $S\in\mathbb R$: la serie converge, e anzi $\displaystyle\sum_{n=1}^{+\infty}\frac1{n^\alpha}\le\frac1{1-2^{1-\alpha}}$. $\blacksquare$` },

{ t: "oss", titolo: R`Curiosità: il problema di Basilea`, testo: R`
Per $\alpha = 2$ si può dire di più (Eulero, 1735):
$$\sum_{n=1}^{+\infty}\frac1{n^2} = \frac{\pi^2}6.$$` },

]});

/* ---- 2026-11-10.js ---- */
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

/* ---- 2026-11-12.js ---- */
L({ data: "2026-11-12", n: 27, titolo: "Criteri per le serie: confronto asintotico, rapporto, rapporto asintotico", voci: [

{ t: "teo", s: "dim", diff: 2, titolo: R`Criterio del confronto asintotico`, testo: R`
Siano $(a_n)_{n\in\mathbb N}$, $(b_n)_{n\in\mathbb N}$ con $a_n>0$ e $b_n>0$ definitivamente. Se
$$\exists\lim_{n\to+\infty}\frac{a_n}{b_n} = \ell\in[0,+\infty)\cup\lbrace+\infty\rbrace,$$
allora:
1. $\ell\in(0,+\infty)\ \Rightarrow\ \sum_{n=1}^{+\infty}a_n$ e $\sum_{n=1}^{+\infty}b_n$ hanno lo **stesso carattere** (convergono entrambe o divergono entrambe);
2. $\ell = 0\ \Rightarrow\ $ se $\sum b_n$ converge allora $\sum a_n$ converge (e se $\sum a_n$ diverge allora $\sum b_n$ diverge a $+\infty$);
3. $\ell = +\infty\ \Rightarrow\ $ se $\sum b_n$ diverge allora $\sum a_n$ diverge a $+\infty$ (e se $\sum a_n$ converge allora $\sum b_n$ converge).`, dim: R`
Per casi.

**1.** Esiste $N\in\mathbb N$ tale che (definizione di limite con $\varepsilon = \frac\ell2$)
$$\left|\frac{a_n}{b_n}-\ell\right|<\frac\ell2\qquad\forall n\ge N,$$
cioè
$$\frac\ell2\,b_n<a_n<\frac{3\ell}2\,b_n\qquad\forall n\ge N.$$
Quindi $\frac\ell2b_n<a_n<\frac{3\ell}2b_n$ definitivamente, e la conclusione segue per confronto (e linearità: $\sum\frac{3\ell}2b_n$ e $\sum b_n$ hanno lo stesso carattere).

**2.** Esiste $N\in\mathbb N$ tale che (con $\varepsilon = 1$)
$$0<\frac{a_n}{b_n}<1\qquad\forall n\ge N,$$
e quindi $0<a_n<b_n$ definitivamente: di nuovo concludo per confronto.

**3.** $\lim\frac{a_n}{b_n} = +\infty\Rightarrow\lim\frac{b_n}{a_n} = 0$: segue dal caso precedente con $a_n$ e $b_n$ scambiati di posto. $\blacksquare$` },

{ t: "es", titolo: R`Confronto asintotico con una serie armonica`, testo: R`
Se $(a_n)$ è a termini definitivamente positivi e
$$a_n\sim\frac c{n^2}\quad(c>0)\qquad\text{cioè}\qquad\lim_{n\to+\infty}\frac{a_n}{1/n^2} = c\in(0,+\infty),$$
allora la natura di $\sum a_n$ è la stessa di $\sum\frac1{n^2}$, che converge: quindi $\sum a_n$ converge.

Es. (ricostruito, l'esempio esatto del prof va controllato negli appunti): $a_n = \dfrac{n+3}{2n^3+5n+7}$ è positiva e $a_n\sim\dfrac n{2n^3} = \dfrac1{2n^2}$, quindi $\sum a_n$ converge.` },

{ t: "att", titolo: R`Nel confronto asintotico serve "termini positivi"`, testo: R`
L'ipotesi "$a_n,b_n>0$ definitivamente" **non può essere ignorata**.

Esempio (aggiunta, l'esempio del prof va controllato negli appunti): $a_n = \dfrac{(-1)^n}{\sqrt n}$ e $b_n = \dfrac{(-1)^n}{\sqrt n}+\dfrac1n$.
- $\sum a_n$ converge (serie a segni alterni con termini che decrescono a $0$: criterio di Leibniz, oppure raggruppando a coppie come per $\sum\frac{(-1)^{n+1}}n$);
- $\sum b_n = \sum a_n+\sum\frac1n$ diverge a $+\infty$ (se convergesse, per linearità convergerebbe $\sum\frac1n = \sum(b_n-a_n)$);
- **ma** $\dfrac{b_n}{a_n} = 1+\dfrac{(-1)^n}{\sqrt n}\to1\in(0,+\infty)$.

Stesso "ordine", carattere diverso: il criterio vale solo per serie a termini positivi.` },

{ t: "teo", s: "dim", diff: 2, titolo: R`Criterio del rapporto (per serie)`, testo: R`
Sia $(a_n)_{n\in\mathbb N}$ con $a_n>0$ definitivamente. Allora:
1. se $\exists r\in(0,1)$ tale che $\dfrac{a_{n+1}}{a_n}\le r$ definitivamente $\ \Rightarrow\ \sum_{n=1}^{+\infty}a_n$ è **convergente**;
2. se $\exists r\in[1,+\infty)$ tale che $\dfrac{a_{n+1}}{a_n}\ge r$ definitivamente $\ \Rightarrow\ \sum_{n=1}^{+\infty}a_n$ **diverge** a $+\infty$.`, dim: R`
Distinguo i due casi.

**1.** Esiste $N\in\mathbb N$ tale che
$$\frac{a_{n+1}}{a_n}\le r\qquad\forall n\ge N.$$
Affermo allora che
$$a_{N+k}\le r^k\,a_N\qquad\forall k\in\mathbb N_0.$$
Lo dimostro per induzione su $k$:
- **base** $k = 0$: $a_N\le r^0a_N = a_N$, vero (per $k = 1$: $a_{N+1}\le r\,a_N$, cioè $\frac{a_{N+1}}{a_N}\le r$, vero con $n = N$);
- **passo induttivo:** se $a_{N+k}\le r^ka_N$ (ipotesi induttiva), allora, usando la disuguaglianza con $n = N+k\ge N$,
$$a_{N+k+1}\le r\,a_{N+k}\le r\cdot r^ka_N = r^{k+1}a_N.$$

Allora per confronto di code:
$$\sum_{n=N}^{+\infty}a_n = \sum_{k=0}^{+\infty}a_{N+k}\le a_N\sum_{k=0}^{+\infty}r^k,$$
che **converge** (serie geometrica con $r\in(0,1)$). Segue che la coda $\sum_{n=N}^{+\infty}a_n$ converge, e quindi $\sum_{n=1}^{+\infty}a_n$ converge.

**2.** Omessa, ma basta dimostrare (allo stesso modo, per induzione) che
$$a_{N+k}\ge r^ka_N\ge a_N>0\qquad\forall k\in\mathbb N,$$
con $N\in\mathbb N$ fissato, perché $r\ge1$. Allora $a_n\not\to0$, la condizione necessaria non vale e la serie (a termini positivi) diverge a $+\infty$. $\blacksquare$` },

{ t: "teo", s: "omessa", titolo: R`Criterio del rapporto asintotico (per serie)`, testo: R`
Sia $(a_n)_{n\in\mathbb N}$ con $a_n>0$ definitivamente. Se
$$\exists\lim_{n\to+\infty}\frac{a_{n+1}}{a_n} = \ell\in[0,+\infty)\cup\lbrace+\infty\rbrace,$$
allora:
1. $\ell<1\ \Rightarrow\ \sum_{n=1}^{+\infty}a_n$ converge;
2. $\ell>1\ \Rightarrow\ \sum_{n=1}^{+\infty}a_n$ diverge a $+\infty$;
3. $\ell = 1$: **non si può dire nulla**.

(Dimostrazione omessa, analoga al criterio del rapporto visto sopra.)` },

{ t: "es", titolo: R`$\sum\frac1{n^\alpha\beta^n}$ con il rapporto asintotico`, testo: R`
Sia $a_n = \dfrac1{n^\alpha\beta^n}$ con $\alpha\in\mathbb R$, $\beta>0$. Osservo che
$$\lim_{n\to+\infty}\frac{a_{n+1}}{a_n} = \lim_{n\to+\infty}\left(\frac n{n+1}\right)^\alpha\cdot\frac1\beta = \frac1\beta.$$
Allora per il rapporto asintotico:
- $\frac1\beta<1\iff\beta>1\ \Rightarrow\ \sum\frac1{n^\alpha\beta^n}$ converge, $\forall\alpha\in\mathbb R$;
- $\frac1\beta>1\iff\beta<1\ \Rightarrow\ \sum\frac1{n^\alpha\beta^n}$ diverge a $+\infty$, $\forall\alpha\in\mathbb R$.

Ma per $\frac1\beta = 1$, cioè $\beta = 1$, il criterio non dice nulla. Infatti in quel caso la serie è $\sum\frac1{n^\alpha}$, che converge se e solo se $\alpha>1$, altrimenti diverge a $+\infty$.

**Ricapitolando:**
$$\sum_{n=1}^{+\infty}\frac1{n^\alpha\beta^n}\ \begin{cases}\text{converge} & \beta>1,\ \forall\alpha\in\mathbb R\ \text{ oppure }\ \beta = 1,\ \alpha>1\\ \text{diverge a }+\infty & \beta<1,\ \forall\alpha\in\mathbb R\ \text{ oppure }\ \beta = 1,\ \alpha\le1.\end{cases}$$` },

{ t: "es", titolo: R`$\sum\frac{x^n}{n!}$ converge assolutamente per ogni $x\in\mathbb R$`, testo: R`
Sia $a_n = \dfrac{x^n}{n!}$ con $x\in\mathbb R$, $n\ge0$. Dimostro che $\sum_{n=0}^{+\infty}a_n$ converge assolutamente per ogni $x\in\mathbb R$.

Per $x = 0$ è ovvio. Per $x\neq0$ pongo $b_n = |a_n| = \dfrac{|x|^n}{n!}>0$ e
$$\lim_{n\to+\infty}\frac{b_{n+1}}{b_n} = \lim_{n\to+\infty}\frac{|x|^{n+1}}{(n+1)!}\cdot\frac{n!}{|x|^n} = \lim_{n\to+\infty}\frac{|x|}{n+1} = 0<1,$$
e quindi $\sum b_n = \sum|a_n|$ converge, come volevamo (e allora $\sum a_n$ converge anche semplicemente).

In effetti si può dimostrare che
$$\sum_{n=0}^{+\infty}\frac{x^n}{n!} = e^x\quad\forall x\in\mathbb R,\qquad\text{in particolare}\qquad\sum_{n=0}^{+\infty}\frac1{n!} = e.$$` },

]});

/* ---- esami/domande.js ---- */
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
