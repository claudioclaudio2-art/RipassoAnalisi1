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
