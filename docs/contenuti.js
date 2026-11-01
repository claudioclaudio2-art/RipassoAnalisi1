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
Una **proposizione** è una frase/proprietà matematica che è o **vera (V)** o **falsa (F)**. Può dipendere da una variabile: $P(n)$ = "$n$ è un numero pari" è vera per $n=2$, falsa per $n=3$.

Tavole di verità:
- $P \land Q$ è V solo se entrambe sono V.
- $P \lor Q$ è F solo se entrambe sono F.
- $P \Rightarrow Q$ è F solo se $P$ è V e $Q$ è F.` },

{ t: "oss", titolo: "Struttura di un teorema", testo: R`
Ogni enunciato matematico (teorema, proposizione, corollario, lemma) è un'**implicazione logica**
$$\text{IPOTESI} \Rightarrow \text{TESI}.$$` },

{ t: "def", titolo: "Dimostrazione diretta, per assurdo, per contrapposizione", testo: R`
- **Diretta**: si parte dall'ipotesi e con una catena di implicazioni si arriva alla tesi.
- **Per contrapposizione (inversa)**: si usa l'equivalenza
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
- $\le$ è un **ordinamento totale**: $\forall a,b$ vale $a\le b$ oppure $b \le a$. Esiste anche l'ordinamento stretto $<$.` },

{ t: "def", titolo: R`Numero primo e numeri coprimi`, testo: R`
$n \in \mathbb N$ è **primo** se è divisibile solo per $1$ e per se stesso. Per convenzione $1$ **non** è primo: $\mathbb P = \lbrace 2,3,5,7,11,\dots\rbrace$.

$a, b\in\mathbb N$ sono **coprimi** se non hanno divisori comuni diversi da $1$, cioè $\mathrm{MCD}(a,b)=1$. Es. $\mathrm{MCD}(3,5)=1$.` },

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

{ t: "es", s: "casa", diff: 1, titolo: R`$(A\cup B)\times C = (A\times C)\cup(B\times C)$`, testo: R`
Dimostrare che per ogni terna di insiemi $(A\cup B)\times C = (A\times C)\cup(B\times C)$.`, dim: R`
Si dimostrano le due inclusioni.

$\subseteq$: se $(x,c)\in(A\cup B)\times C$, allora $c\in C$ e $x\in A$ oppure $x\in B$. Nel primo caso $(x,c)\in A\times C$, nel secondo $(x,c)\in B\times C$. In ogni caso sta nell'unione.

$\supseteq$: se $(x,c) \in A\times C$ allora $x \in A \subseteq A\cup B$ e $c\in C$, quindi $(x,c) \in (A\cup B)\times C$. Idem se $(x,c)\in B\times C$. $\blacksquare$` },

{ t: "prop", s: "dim", diff: 1, titolo: R`Progressione geometrica`, testo: R`
Sia $r \in\mathbb R$, $r \neq 1$ (la **ragione**). Allora
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
Siano $a,b\in\mathbb R\setminus\lbrace 0\rbrace$. Allora per ogni $n\in\mathbb N_0$:
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

Es. $A = [2,5)$: maggioranti $5, 6, 99{,}7,\dots$; minoranti $2, 1, -17,\dots$` },

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

Esempi: $\sup\mathbb N = +\infty$, $\inf\mathbb N = \min\mathbb N = 1$. Per $A = \lbrace x\in\mathbb Q: x\ge0, x^2<3\rbrace$: $\sup A = \sqrt3$ (non è massimo), $\min A = 0$.` },

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
$$|a| = \begin{cases} a & a\ge 0\\ -a & a < 0.\end{cases}$$` },

{ t: "prop", s: "casa", diff: 1, titolo: R`Proprietà del modulo`, testo: R`
Per ogni $a,b\in\mathbb R$:
1. $-|a|\le a\le |a|$;
2. se $M\in\mathbb R$: $|a|\le M \iff M\ge0 \text{ e } -M\le a\le M$;
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

{ t: "teo", s: "dim", diff: 3, titolo: R`Esistenza e unicità della radice $n$-esima`, testo: R`
Siano $y\in\mathbb R$, $y\ge0$, $n\in\mathbb N$. Allora esiste un unico $r\in\mathbb R$, $r\ge 0$, tale che $r^n = y$. Si scrive $r = y^{1/n} = \sqrt[n]y$, ed è
$$r = \sup\lbrace x\in\mathbb R : x\ge0,\ x^n\le y\rbrace.$$`, dim: R`
L'insieme $A = \lbrace x\ge 0 : x^n\le y\rbrace$ è non vuoto ($0\in A$) e superiormente limitato (ad esempio da $\max\lbrace1,y\rbrace$). Per la completezza (2ª forma) ammette un unico estremo superiore $r$, e si verifica che $r^n = y$ (se fosse $r^n<y$ o $r^n>y$ si troverebbe un elemento di $A$ più grande di $r$, o un maggiorante più piccolo). L'unicità segue dal fatto che $x\mapsto x^n$ è strettamente crescente su $[0,+\infty)$. $\blacksquare$` },

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

{ t: "teo", s: "dim", diff: 2, titolo: R`Esistenza del logaritmo`, testo: R`
Siano $a>0$, $a\neq1$, $y>0$. Allora esiste un unico $x\in\mathbb R$ tale che $a^x = y$; si indica $x = \log_a y$ ed è
- se $a > 1$: $\ x = \sup\lbrace r\in\mathbb R : a^r\le y\rbrace$;
- se $0<a<1$: $\ x = \sup\lbrace r\in\mathbb R : a^r\ge y\rbrace$.`, dim: R`
Segue dalla completezza di $\mathbb R$ (2ª forma): l'insieme indicato è non vuoto e superiormente limitato, quindi ha un sup $x$, e si verifica che $a^x = y$ usando la stretta monotonia di $r\mapsto a^r$. $\blacksquare$` },

{ t: "def", titolo: R`Logaritmo e proprietà`, testo: R`
$\log_a y$ ("logaritmo in base $a$ di $y$") è l'esponente da dare ad $a$ per ottenere $y$. Notazioni: $\log = \ln = \log_e$ (logaritmo naturale, $e \approx 2{,}718$ numero di Nepero); $\mathrm{Log} = \log_{10}$.

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
- $f(x) = \dfrac{1}{\sqrt{x^2-1}}$: serve $x^2-1 > 0$ (sotto radice e al denominatore), quindi $D(f) = (-\infty,-1)\cup(1,+\infty)$.` },

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
- **Parte intera inferiore** (floor): $\lfloor x\rfloor = \max\lbrace k\in\mathbb Z : k\le x\rbrace$. Es. $\lfloor 1{,}75\rfloor = 1$, $\lfloor -1{,}3\rfloor = -2$.
- **Parte intera superiore** (ceiling): $\lceil x\rceil = \min\lbrace k\in\mathbb Z : k\ge x\rbrace$.
- **Dirichlet**: $D(x) = 1$ se $x\in\mathbb Q$, $D(x) = 0$ se $x\notin\mathbb Q$ (grafico a "nuvole di punti").` },

{ t: "def", titolo: R`Immagine`, testo: R`
Sia $f : A\to B$ e $E\subseteq A$. L'**immagine di $E$** tramite $f$ è
$$f(E) = \lbrace f(x) : x\in E\rbrace = \lbrace y\in B : \exists x\in E,\ y = f(x)\rbrace\subseteq B.$$
L'**immagine di $f$** è $\mathrm{Im}(f) = f(A)$.

Esempio: per $f:\mathbb N\to\mathbb N$, $f(x)=2x$, $\mathrm{Im}(f)$ = numeri pari.` },

]});

/* ---- 2026-10-12.js ---- */
L({ data: "2026-10-12", n: 9, titolo: "Controimmagine, composizione, iniettività, inversa", voci: [

{ t: "es", titolo: R`Calcolo dell'immagine: $2x+1$ e $x^2$`, testo: R`
**$f(x) = 2x+1$ su $\mathbb R$.** Cerco $y$ tali che $y = 2x+1$ per qualche $x$: basta $x = \frac{y-1}2$. Quindi $\mathrm{Im}(f) = \mathbb R$.

**$f(x) = x^2$ su $\mathbb R$.** Se $y = x^2$ allora $y\ge0$, quindi $\mathrm{Im}(f)\subseteq[0,+\infty)$. Viceversa per $y\ge0$ vale $y = (\sqrt y)^2$. Quindi $\mathrm{Im}(f) = [0,+\infty)$.` },

{ t: "def", titolo: R`Controimmagine (antiimmagine, preimmagine)`, testo: R`
Data $f:A\to B$ e $Y\subseteq B$, la **controimmagine** di $Y$ tramite $f$ è
$$f^{\leftarrow}(Y) = \lbrace x\in A : f(x)\in Y\rbrace\subseteq A.$$
Attenzione: $Y$ è un **insieme**. Può essere vuota (se nessun punto va in $Y$).` },

{ t: "def", titolo: R`Funzione composta`, testo: R`
Siano $f : A\to B$, $g : C\to D$ con $f(A)\cap C\neq\emptyset$ (dove arriva $f$ può partire $g$). Posto
$$E = f^{\leftarrow}\big(f(A)\cap C\big) = \lbrace x\in A: f(x)\in C\rbrace\subseteq A,$$
la **funzione composta** "$g$ dopo $f$" è $g\circ f : E\to D$, $(g\circ f)(x) = g(f(x))$.

Es. $f(x) = x^2+1$, $g(y) = \sqrt y$: $\mathrm{Im} f = [1,+\infty)\subseteq D(g)$, quindi $(g\circ f)(x) = \sqrt{x^2+1}$ è definita su tutto $\mathbb R$.

(In alcuni testi si chiede $f(A)\subseteq C$; noi usiamo la richiesta più debole $f(A)\cap C\neq\emptyset$.)` },

{ t: "att", titolo: R`In generale $g\circ f\neq f\circ g$`, testo: R`
Prima le mutande e poi i pantaloni è diverso da prima i pantaloni e poi le mutande.

Con $f(x) = x^2$, $g(x) = \sin x$: $(g\circ f)(x) = \sin(x^2)$, $(f\circ g)(x) = \sin^2 x$. In $x = \frac{\sqrt\pi}{2}$: $\sin\frac\pi4 = \frac{\sqrt2}2$, mentre $\sin^2\frac{\sqrt\pi}2 \ne \frac{\sqrt 2}2$.` },

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
- Se $r = +\infty$: un intorno è ogni $(M,+\infty)$ con $M\in\mathbb R$.
- Se $r = -\infty$: un intorno è ogni $(-\infty, M)$ con $M\in\mathbb R$.

Es. $(5{,}9;\ 6{,}1)$ è un intorno di $6$; $(4,7)$ non è un intorno sferico di $6$ (raggi diversi).`, fig: "intorni" },

{ t: "prop", s: "dim", diff: 2, titolo: R`Proprietà degli intorni: intersezione e separazione`, testo: R`
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
**Prima parte.** Dato $\varepsilon>0$, per la densità di $\mathbb Q$ in $\mathbb R$ esiste $q\in\mathbb Q$ con $r<q<r+\varepsilon$. Quindi $q\in(r-\varepsilon,r+\varepsilon)\setminus\lbrace r\rbrace$.

**Seconda parte.** $+\infty$ di accumulazione $\iff$ $\forall M\ (M,+\infty)\cap A\neq\emptyset$ $\iff$ $\forall M\ \exists a\in A : a>M$ $\iff$ $\sup A = +\infty$. $\blacksquare$` },

{ t: "def", titolo: R`Definitivamente`, testo: R`
Siano $\emptyset\neq A\subseteq\mathbb R$, $x_0\in\overline{\mathbb R}$ di accumulazione per $A$, $f : A\to\mathbb R$. $f$ soddisfa una proprietà $P$ **definitivamente per $x\to x_0$** se
$$\exists I \text{ intorno di } x_0 : f(x) \text{ soddisfa } P\quad\forall x\in A\cap I\setminus\lbrace x_0\rbrace$$
(il punto $x_0$ si toglie solo se $x_0\in\mathbb R$).

Esempio: $\sin x > 0$ definitivamente per $x\to\frac\pi4$ (basta l'intorno $(0,\frac\pi2)$).

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

{ t: "es", titolo: R`Verifiche di limiti con la definizione`, testo: R`
**1.** $f(x) = 1$ per $x\neq0$, $f(0) = 0$. Allora $\lim_{x\to0}f(x) = 1$: fissato $U = (1-\varepsilon,1+\varepsilon)$, per $x\neq0$ si ha $f(x) = 1\in U$, quindi qualsiasi $\delta$ va bene (es. $\delta = 57$). Il valore $f(0)=0$ non conta.

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

{ t: "teo", s: "dim", diff: 1, titolo: R`Disuguaglianza di Bernoulli`, testo: R`
$$(1+t)^n\ge1+nt\qquad\forall n\in\mathbb N_0,\ \forall t\ge0.$$
(Vale in realtà per ogni $t\ge-1$.)`, dim: R`
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
Se fosse $\lim_{x\to+\infty}\sin x = \ell$, in ogni intorno $(M,+\infty)$ ci sono sia punti $\frac\pi2+2k\pi$ (dove $\sin = 1$) sia punti $-\frac\pi2+2k\pi$ (dove $\sin = -1$). Prendendo $U$ intorno di $\ell$ di raggio $\frac12$, $U$ non può contenere sia $1$ che $-1$: assurdo. Stesso ragionamento per $\cos$. $\blacksquare$` },

{ t: "prop", s: "dim", diff: 1, titolo: R`Se il limite è finito, $f$ è localmente limitata`, testo: R`
Sia $f:A\to\mathbb R$, $x_0$ di accumulazione per $A$. Se $\lim_{x\to x_0}f(x) = \ell\in\mathbb R$, allora $f$ è **localmente limitata** in $x_0$:
$$\exists I \text{ intorno di } x_0,\ \exists C>0 :\ |f(x)|\le C\quad\forall x\in A\cap I\setminus\lbrace x_0\rbrace.$$`, dim: R`
Prendo $\varepsilon = 1$ nella definizione di limite: esiste un intorno $I$ di $x_0$ con $|f(x)-\ell|<1$ per $x\in A\cap I\setminus\lbrace x_0\rbrace$. Per la disuguaglianza triangolare
$$|f(x)|\le|f(x)-\ell|+|\ell|<1+|\ell|.$$
Basta prendere $C = 1+|\ell|$. $\blacksquare$` },

{ t: "def", titolo: R`Punto di accumulazione destro / sinistro`, testo: R`
Sia $\emptyset\neq A\subseteq\mathbb R$, $x_0\in\mathbb R$. $x_0$ è punto di accumulazione **destro** per $A$ se è di accumulazione per $A\cap(x_0,+\infty)$; **sinistro** se lo è per $A\cap(-\infty,x_0)$.

Es. $A = (1,2)\cup(2,3)$: $1$ è di accumulazione solo destro, $3$ solo sinistro, $2$ (che non sta in $A$) sia destro che sinistro.

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

{ t: "es", titolo: R`Esempi: funzione segno e $1/x$`, testo: R`
- $f(x) = 1$ per $x\ge0$, $f(x)=-1$ per $x<0$: $\lim_{x\to0^+}f = 1\neq-1 = \lim_{x\to0^-}f$, quindi $\nexists\lim_{x\to0}f(x)$.
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

**(S)** Se $a = b = 0$ è la costante $0$. Se $b = 0$, $a\neq0$: esiste $I$ con $|f(x)-\ell_f|<\frac\varepsilon{|a|}$, quindi $|af(x)-a\ell_f|<\varepsilon$. Se $a,b\neq0$: trovo $I_1, I_2$ con $|f(x)-\ell_f|<\frac{\varepsilon}{2|a|}$ e $|g(x)-\ell_g|<\frac\varepsilon{2|b|}$. Su $I = I_1\cap I_2$:
$$|af+bg-(a\ell_f+b\ell_g)|\le|a||f-\ell_f|+|b||g-\ell_g|<\frac\varepsilon2+\frac\varepsilon2 = \varepsilon.$$

**(P)** $f$ è localmente limitata: $|f(x)|\le C$ vicino a $x_0$. Allora
$$|fg-\ell_f\ell_g| = |f(g-\ell_g)+\ell_g(f-\ell_f)|\le C|g-\ell_g|+|\ell_g||f-\ell_f|,$$
e scegliendo $|g-\ell_g|<\frac{\varepsilon}{2C}$, $|f-\ell_f|<\frac{\varepsilon}{2(|\ell_g|+1)}$ si ottiene $<\varepsilon$.

**(Q)** (conclusa il 26/10) Basta mostrare $\lim\frac1{g(x)} = \frac1{\ell_g}$ e poi applicare (P). Siccome $\lim|g| = |\ell_g|>0$, per la permanenza del segno $|g(x)|>\frac{|\ell_g|}2$ definitivamente; in particolare $g(x)\neq0$ e $\frac1g$ è definita vicino a $x_0$. Allora
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
$$\lim_{x\to x_0}x^n = \lim_{x\to x_0}\underbrace{x\cdots x}_{n} = x_0^n.$$
Per (S), $\lim_{x\to x_0}a_kx^k = a_kx_0^k$, e applicando (S) $n$ volte alla somma di $n+1$ termini:
$$\lim_{x\to x_0}\sum_{k=0}^na_kx^k = \sum_{k=0}^na_kx_0^k = P(x_0).$$
Il punto 2 segue da (Q). $\blacksquare$` },

{ t: "teo", s: "omessa", diff: 3, titolo: R`Algebra dei limiti infiniti (6 regole)`, testo: R`
Siano $f,g:A\to\mathbb R$, $x_0$ di accumulazione per $A$.
1. Se $\lim f = +\infty$ e $g$ è **limitata inferiormente** definitivamente, allora $\lim(f+g) = +\infty$. $\quad[+\infty+(\text{non }-\infty)]$
2. Se $\lim f = 0$ e $g$ è **limitata** definitivamente, allora $\lim(f\cdot g) = 0$. $\quad[0\cdot\text{limitata}]$
3. Se $\lim f = +\infty$ (risp. $-\infty$) ed esiste $C>0$ con $g(x)>C$ definitivamente, allora $\lim(f\cdot g) = +\infty$ (risp. $-\infty$).
4. Se $\lim f = +\infty$ (risp. $-\infty$) ed esiste $C>0$ con $0<g(x)<C$ definitivamente, allora $\lim\frac fg = +\infty$ (risp. $-\infty$).
5. Se $\lim f = \pm\infty$ e $g$ è limitata definitivamente, allora $\lim\frac gf = 0$.
6. Se $\lim f = 0$ con $f(x)>0$ (risp. $<0$) definitivamente ed esiste $C>0$ con $g(x)>C$ definitivamente, allora $\lim\frac gf = +\infty$ (risp. $-\infty$). $\quad\left[\frac{C}{0^+} = +\infty\right]$

N.B. In 1, 2, 5 **non** si chiede nulla al limite di $g$: basta che sia limitata.`, dim: R`
Non fatta a lezione ("buon esercizio, analoga al caso dei limiti in $\mathbb R$"). Esempio per la 1: $g(x)\ge c$ definitivamente. Dato $M$, definitivamente $f(x)>M-c$, quindi $f(x)+g(x)>M$.

Per la 2: $|g(x)|\le C$ definitivamente. Dato $\varepsilon$, definitivamente $|f(x)|<\frac\varepsilon C$, quindi $|f(x)g(x)|<\varepsilon$. $\blacksquare$` },

{ t: "es", titolo: R`Esempi di algebra dei limiti infiniti`, testo: R`
- $\displaystyle\lim_{x\to+\infty}(x+\sin x) = +\infty$ per la regola 1: $x\to+\infty$ e $\sin x\ge-1$.
- Se $\lim f = +\infty$ e $g$ è limitata **superiormente**, allora $\lim(f-g) = +\infty$: pongo $G = -g$, limitata inferiormente, e applico la 1.
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

{ t: "es", titolo: R`$\lim_{x\to+\infty}\sqrt{2x+1} = +\infty$ con il cambio di variabile`, testo: R`
Pongo $f(x) = 2x+1$, $g(y) = \sqrt y$, con $B = [0,+\infty)$, $\tilde A = [-\frac12,+\infty)$; $x_0 = +\infty$ è di accumulazione per $\tilde A$.
1. $\lim_{x\to+\infty}(2x+1) = +\infty =: y_0$ (algebra dei limiti infiniti), di accumulazione per $B$.
2. $\lim_{y\to+\infty}\sqrt y = +\infty$ (verifica con la definizione: $\sqrt y>M\iff y>M^2$).
3. (3a) vale: $2x+1\neq+\infty$ sempre (è un numero reale).

Quindi $\lim_{x\to+\infty}\sqrt{2x+1} = +\infty$. (Esercizio: verificarlo anche con la definizione.)` },

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
Con il teorema (e i limiti laterali che coincidono) si ottiene:
- $\displaystyle\lim_{x\to x_0}a^x = a^{x_0}$ per ogni $x_0\in\mathbb R$, $a>0$ ($a^x$ è crescente per $a>1$, costante per $a=1$, decrescente per $0<a<1$);
- $\displaystyle\lim_{x\to x_0}\log_ax = \log_ax_0$ per ogni $x_0>0$, e $\displaystyle\lim_{x\to0^+}\log_ax = -\infty$ se $a>1$, $+\infty$ se $0<a<1$;
- $\displaystyle\lim_{x\to x_0}x^\alpha = x_0^\alpha$ per $x_0>0$, e $\displaystyle\lim_{x\to0^+}x^\alpha = 0$ se $\alpha>0$, $+\infty$ se $\alpha<0$;
- $\displaystyle\lim_{x\to x_0}\sin x = \sin x_0$, $\displaystyle\lim_{x\to x_0}\cos x = \cos x_0$ (sono monotone a tratti).` },

{ t: "teo", s: "omessa", diff: 2, titolo: R`Limiti di funzioni monotone (caso infinito)`, testo: R`
**(i)** Sia $+\infty$ di accumulazione per $A$ e $f$ monotona definitivamente per $x\to+\infty$ (su $A\cap I$, $I$ intorno di $+\infty$). Allora
$$\exists\lim_{x\to+\infty}f(x) = \begin{cases}\sup f|_{A\cap I} & f\text{ crescente}\\ \inf f|_{A\cap I} & f\text{ decrescente.}\end{cases}$$
**(ii)** Sia $-\infty$ di accumulazione per $A$ e $f$ monotona definitivamente per $x\to-\infty$. Allora
$$\exists\lim_{x\to-\infty}f(x) = \begin{cases}\inf f|_{A\cap I} & f\text{ crescente}\\ \sup f|_{A\cap I} & f\text{ decrescente.}\end{cases}$$`, dim: R`
Non fatta a lezione, ma analoga al caso reale: per (i) con $f$ crescente e $S = \sup f$ finito, dato $\varepsilon$ esiste $x_\varepsilon$ con $f(x_\varepsilon)>S-\varepsilon$ e per monotonia $S-\varepsilon<f(x)\le S$ per ogni $x>x_\varepsilon$: l'intorno è $(x_\varepsilon,+\infty)$. $\blacksquare$` },

{ t: "es", titolo: R`Applicazioni: limiti agli estremi delle funzioni elementari`, testo: R`
- $\displaystyle\lim_{x\to+\infty}a^x = +\infty$ se $a>1$, $0$ se $0<a<1$; $\displaystyle\lim_{x\to-\infty}a^x = 0$ se $a>1$, $+\infty$ se $0<a<1$.
- $\displaystyle\lim_{x\to+\infty}\log_ax = +\infty$ se $a>1$, $-\infty$ se $0<a<1$.
- $\displaystyle\lim_{x\to+\infty}x^\alpha = +\infty$ se $\alpha>0$, $0$ se $\alpha<0$.

Domanda per dopo: sappiamo che $a^x$, $\log_ax$, $x^\alpha\to+\infty$ (con $a>1$, $\alpha>0$), ma **con quali velocità**? (Vedi gerarchia degli infiniti, 29/10.)` },

{ t: "oss", titolo: R`Limiti della forma $f(x)^{g(x)}$`, testo: R`
Con $f>0$, si usa $f(x)^{g(x)} = e^{g(x)\log f(x)}$: la funzione è la composizione di $x\mapsto g(x)\log f(x)$ e di $y\mapsto e^y$.

Quindi basta studiare $\lim_{x\to x_0}g(x)\log f(x) = y_0$ e poi usare il cambio di variabile (l'esponenziale è monotona crescente, con limiti noti):
$$\lim_{x\to x_0} f(x)^{g(x)} = \begin{cases} e^{y_0} & y_0\in\mathbb R\\ +\infty & y_0 = +\infty\\ 0 & y_0 = -\infty.\end{cases}$$
Esempio: $\lim_{x\to+\infty}\left(2+\frac1x\right)^x$: $x\log\left(2+\frac1x\right)\to+\infty\cdot\log2 = +\infty$ (regola 3), quindi il limite è $+\infty$.` },

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

{ t: "prop", s: "casa", diff: 1, titolo: R`Limiti notevoli iperbolici`, testo: R`
$$\lim_{x\to0}\frac{\sinh x}x = 1,\qquad\lim_{x\to0}\frac{\cosh x-1}{x^2} = \frac12,\qquad\lim_{x\to0}\frac{\tanh x}x = 1.$$`, dim: R`
**Seno iperbolico:** $\dfrac{\sinh x}x = \dfrac{e^x-e^{-x}}{2x} = e^{-x}\cdot\dfrac{e^{2x}-1}{2x}\to1\cdot1$ (con $y = 2x$ nel limite notevole dell'esponenziale).

**Coseno iperbolico:** $\cosh x-1 = \frac{(e^{x/2}-e^{-x/2})^2}{2} = 2\sinh^2\frac x2$, quindi $\dfrac{\cosh x-1}{x^2} = \dfrac12\left(\dfrac{\sinh(x/2)}{x/2}\right)^2\to\frac12$.

**Tangente iperbolica:** $\dfrac{\tanh x}{x} = \dfrac{\sinh x}x\cdot\dfrac1{\cosh x}\to1$. $\blacksquare$` },

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
per la gerarchia (1) con $\alpha = \beta = 1$. Allo stesso modo, $\lim_{x\to 0} x^2\log|x| = 0$ (per parità basta $x\to0^+$).` },

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

{ t: "es", titolo: R`Uso degli asintotici nei limiti`, testo: R`
$$\lim_{x\to0}\frac{\sin x\cdot\tan x}{1-\cos x} = \lim_{x\to0}\frac{x\cdot x}{x^2/2} = 2.$$
Si sostituisce $\sin x\sim x$, $\tan x\sim x$, $1-\cos x\sim\frac{x^2}2$.` },

{ t: "att", titolo: R`Non si sostituiscono asintotici nelle somme`, testo: R`
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

]});
