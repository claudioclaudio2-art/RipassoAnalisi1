L({ data: "2026-10-01", n: 3, titolo: "Induzione: applicazioni, binomio di Newton", voci: [

{ t: "prop", s: "dim", titolo: R`$2^n \ge n$ per ogni $n\in\mathbb N$`, testo: R`
$$2^n \ge n \qquad \forall n \in\mathbb N.$$`, dim: R`
Per induzione, con $P(n)$: "$2^n \ge n$".

**Base**: $P(1)$: $2^1 = 2 \ge 1$, vera.

**Passo**: supponiamo $2^n \ge n$ (ipotesi induttiva) e dimostriamo $2^{n+1} \ge n+1$. Si ha
$$2^{n+1} = 2\cdot 2^n \ge 2n \quad\text{(per ip. induttiva)}.$$
Basta allora verificare che $2n \ge n+1$, cioè $n \ge 1$, che è vero. Quindi $2^{n+1} \ge n+1$ e $P(n+1)$ è vera. $\blacksquare$` },

{ t: "prop", s: "dim", titolo: R`Somma di Gauss: $\sum_{k=1}^n k = \frac{n(n+1)}{2}$`, testo: R`
$$\sum_{k=1}^n k = 1 + 2 + \dots + n = \frac{n(n+1)}{2}\qquad\forall n\in\mathbb N.$$
Idea di Gauss: sommando $1+\dots+100$ con $100+\dots+1$ si ottengono 100 coppie che valgono $101$, quindi la somma è $\frac{100\cdot 101}{2}=5050$.`, dim: R`
Per induzione.

**Base**: $n=1$: $1 = \frac{1\cdot 2}{2}$, vera.

**Passo**: supponiamo $\sum_{k=1}^n k = \frac{n(n+1)}{2}$. Allora
$$\sum_{k=1}^{n+1} k = \sum_{k=1}^n k + (n+1) = \frac{n(n+1)}{2} + (n+1) = \frac{(n+1)(n+2)}{2},$$
che è $P(n+1)$. $\blacksquare$` },

{ t: "es", s: "casa", titolo: R`$3^n \ge n^2$ per ogni $n\in\mathbb N$`, testo: R`
Dimostrare per induzione che $3^n \ge n^2$ per ogni $n\in\mathbb N$.`, dim: R`
**Base**: $n=1$: $3\ge 1$. Verifico anche $n=2$: $9 \ge 4$.

**Passo** (per $n \ge 2$): se $3^n \ge n^2$ allora $3^{n+1} = 3\cdot 3^n \ge 3n^2$. Basta che $3n^2 \ge (n+1)^2 = n^2+2n+1$, cioè $2n^2 - 2n - 1 \ge 0$, vero per $n\ge 2$ ($8-4-1 = 3 \ge 0$ e il polinomio cresce per $n \ge 1$). Quindi $3^{n+1}\ge(n+1)^2$. $\blacksquare$` },

{ t: "es", s: "casa", titolo: R`$3^n \ge n^3$ per ogni $n\in\mathbb N$ (foglio settimana 2)`, testo: R`
Dimostrare che $3^n \ge n^3$ per ogni $n \in\mathbb N$.`, dim: R`
Verifico a mano $n=1,2,3$: $3\ge1$, $9\ge8$, $27\ge27$.

**Passo** (per $n\ge 3$): $3^{n+1} = 3\cdot 3^n \ge 3n^3$. Basta che $3n^3 \ge (n+1)^3$, cioè $\left(1+\frac1n\right)^3 \le 3$. Per $n \ge 3$: $\left(\frac43\right)^3 = \frac{64}{27} \approx 2{,}37 \le 3$, e $\left(1+\frac1n\right)^3$ decresce in $n$. $\blacksquare$` },

{ t: "prop", s: "dim", titolo: R`Cardinalità del prodotto cartesiano: $|A\times B| = |A|\cdot|B|$`, testo: R`
Se $A$ ha $m$ elementi e $B$ ha $n$ elementi, allora $A \times B$ (e $B\times A$) hanno $m\cdot n$ elementi.`, dim: R`
Se $m=0$ o $n=0$ il prodotto è vuoto e la formula vale. Basta considerare $A\times B$.

**Claim 1** ($n=1$): se $|A| = m$ e $B = \lbrace b\rbrace$ allora $|A\times B| = m$. Induzione su $m$: per $m=1$, $A\times B = \lbrace(a,b)\rbrace$ ha un elemento. Se vale per $m$, prendo $A = \lbrace a_1,\dots,a_{m+1}\rbrace = \lbrace a_1,\dots,a_m\rbrace \cup\lbrace a_{m+1}\rbrace$: allora
$$A\times B = (\lbrace a_1,\dots,a_m\rbrace\times B) \cup \lbrace(a_{m+1},b)\rbrace$$
ha $m + 1$ elementi (unione disgiunta).

**Claim 2**: fisso $m$, induzione su $n$. Il caso $n = 1$ è il Claim 1. Se vale per $n$, prendo $B = \lbrace b_1,\dots,b_{n+1}\rbrace = B'\cup\lbrace b_{n+1}\rbrace$ con $|B'| = n$:
$$A\times B = (A \times B') \cup (A\times\lbrace b_{n+1}\rbrace),$$
unione disgiunta di insiemi con $mn$ e $m$ elementi. Totale $m(n+1)$. $\blacksquare$` },

{ t: "es", s: "casa", titolo: R`$(A\cup B)\times C = (A\times C)\cup(B\times C)$`, testo: R`
Dimostrare che per ogni terna di insiemi $(A\cup B)\times C = (A\times C)\cup(B\times C)$.`, dim: R`
Si dimostrano le due inclusioni.

$\subseteq$: se $(x,c)\in(A\cup B)\times C$, allora $c\in C$ e $x\in A$ oppure $x\in B$. Nel primo caso $(x,c)\in A\times C$, nel secondo $(x,c)\in B\times C$. In ogni caso sta nell'unione.

$\supseteq$: se $(x,c) \in A\times C$ allora $x \in A \subseteq A\cup B$ e $c\in C$, quindi $(x,c) \in (A\cup B)\times C$. Idem se $(x,c)\in B\times C$. $\blacksquare$` },

{ t: "prop", s: "dim", titolo: R`Progressione geometrica`, testo: R`
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

{ t: "prop", s: "casa", titolo: R`Proprietà del coefficiente binomiale (identità di Pascal)`, testo: R`
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

{ t: "teo", s: "dim", titolo: R`Binomio di Newton`, testo: R`
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

{ t: "cor", s: "casa", titolo: R`$\sum_{k=0}^n \binom nk = 2^n$`, testo: R`
$$\sum_{k=0}^n\binom nk = 2^n\qquad\forall n\in\mathbb N_0.$$`, dim: R`
Basta applicare il binomio di Newton con $a = b = 1$: $2^n = (1+1)^n = \sum_{k=0}^n\binom nk 1^{n-k}1^k$. $\blacksquare$` },

]});
