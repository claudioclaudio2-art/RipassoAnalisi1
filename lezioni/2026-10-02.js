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
