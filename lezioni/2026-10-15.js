L({ data: "2026-10-15", n: 11, titolo: "Punti isolati, definitivamente, definizione di limite", voci: [

{ t: "def", titolo: R`Punto isolato`, testo: R`
Sia $\emptyset\neq A\subseteq\mathbb R$. $r\in A$ si dice **isolato** per $A$ se non è di accumulazione per $A$, cioè
$$\exists I\subseteq\mathbb R \text{ intorno di } r : (I\setminus\lbrace r\rbrace)\cap A = \emptyset.$$` },

{ t: "es", titolo: R`Esempi di punti isolati e di accumulazione`, testo: R`
- $A = [1,2]\cup\lbrace3\rbrace$: $3$ è isolato (con $I = (2{,}5;\ 3{,}5)$). Ogni $r\in[1,2]$ è di accumulazione.
- $A = \lbrace\frac1n : n\in\mathbb N\rbrace$: $0$ è di accumulazione (pur non stando in $A$). Fissato $\varepsilon>0$, per Archimede trovo $n > \frac1\varepsilon$, e allora $\frac1n\in(-\varepsilon,\varepsilon)\cap A$.
- $A = \mathbb Z$: $\pm\infty$ sono di accumulazione. Dato $M\in\mathbb R$ scelgo $n = \lfloor M\rfloor+1\in\mathbb Z$, e $n\in(M,+\infty)$. Ogni intero è isolato.` },

{ t: "es", s: "casa", titolo: R`Ogni reale è di accumulazione per $\mathbb Q$`, testo: R`
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

{ t: "teo", s: "dim", titolo: R`Unicità del limite`, testo: R`
Siano $\emptyset\neq A\subseteq\mathbb R$, $x_0\in\overline{\mathbb R}$ di accumulazione per $A$, $f:A\to\mathbb R$. Se il limite di $f$ per $x\to x_0$ esiste, allora è **unico**.`, dim: R`
Per assurdo siano $\ell_1\neq\ell_2$ due limiti. Per la **separazione** degli intorni esistono $U_1$ intorno di $\ell_1$ e $U_2$ intorno di $\ell_2$ con $U_1\cap U_2 = \emptyset$.

Per definizione di limite esistono intorni $I_1, I_2$ di $x_0$ con
$$f(x)\in U_1\ \ \forall x\in A\cap I_1\setminus\lbrace x_0\rbrace,\qquad f(x)\in U_2\ \ \forall x\in A\cap I_2\setminus\lbrace x_0\rbrace.$$
Per l'**intersezione** degli intorni, $I = I_1\cap I_2$ è un intorno di $x_0$. Siccome $x_0$ è di accumulazione, esiste $x\in A\cap I\setminus\lbrace x_0\rbrace$, e per tale $x$: $f(x)\in U_1\cap U_2$. Quindi $U_1\cap U_2\neq\emptyset$: contraddizione. $\blacksquare$`, fig: "unicita" },

]});
