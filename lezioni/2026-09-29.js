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
