L({ data: "2026-11-17", n: 30, titolo: "Funzioni continue, algebra e composizione, caratterizzazione sequenziale, prolungamento per continuità", voci: [

{ t: "def", titolo: R`Funzione continua`, testo: R`
Sia $\emptyset\neq A\subseteq\mathbb R$, $x_0\in A$, $f:A\to\mathbb R$. Diciamo che $f$ è **continua in $x_0$** se:
1. $x_0$ è un **punto isolato** di $A$; oppure
2. $x_0$ è un **punto di accumulazione** per $A$ e vale
$$\boxed{\ \exists\lim_{x\to x_0}f(x) = f(x_0).\ }$$

Diciamo che $f$ è **continua su $A$**, e scriviamo $f\in\mathcal C^0(A)$, se $f$ è continua in **ogni** punto di $A$.

Se $f$ **NON** è continua in $x_0\in A$ (e quindi $x_0\in\mathrm{acc}A$), allora $x_0$ è detto **punto di discontinuità** di $f$.

**Attenzione!** (1) e (2) sono in alternativa!

**Notazione:** dato $\emptyset\neq A\subseteq\mathbb R$, poniamo
$$\mathcal C^0(A) = \lbrace f:A\to\mathbb R:\ f\text{ è continua su }A\rbrace\quad\text{(insieme delle funzioni continue su } A).$$` },

{ t: "es", titolo: R`Funzioni continue elementari`, testo: R`
- $f(x) = c\in\mathbb R$ $\forall x\in\mathbb R$ è continua su $\mathbb R$;
- $f(x) = a_0+a_1x+a_2x^2+\dots+a_nx^n = P(x)$ $\forall x\in\mathbb R$, polinomio di grado $n\in\mathbb N_0$, è continua su $\mathbb R$;
- $f(x) = \dfrac{P(x)}{Q(x)}$, $P$ e $Q$ polinomi, è continua su $A = \lbrace x\in\mathbb R: Q(x)\neq0\rbrace$;
- $f(x) = a^x$ è continua su $\mathbb R$;
- $f(x) = \log_a(x)$ è continua su $(0,+\infty)$;
- $\sin$, $\cos$, $\tan$, ecc. sono continue sui domini.` },

{ t: "es", titolo: R`Esempi "più selvaggi": punti isolati`, testo: R`
- $f:\lbrace1\rbrace\to\mathbb R$, $f(x) = 5$ $\forall x\in\lbrace1\rbrace$: $f$ è continua perché vale (1): $1$ è punto **isolato** di $A$.
- $f:A\to\mathbb R$, $A = [0,1]\cup\lbrace2\rbrace$, $f(x) = x$ $\forall x\in A$: è continua su $[0,1]$ (limite) e in $2$, che è punto **isolato** per $A$.` },

{ t: "es", titolo: R`$\frac1x$ e la sua modifica con $g(0) = 18$`, testo: R`
- $f(x) = \frac1x$ $\forall x\in\mathbb R\setminus\lbrace0\rbrace\Rightarrow f\in\mathcal C^0(\mathbb R\setminus\lbrace0\rbrace)$, infatti $\lim_{x\to x_0}\frac1x = \frac1{x_0}$ $\forall x_0\neq0$.
- $g(x) = \begin{cases}1/x & x\neq0\\ 18 & x = 0\end{cases}$, $g:\mathbb R\to\mathbb R$, $\mathrm{dom}(g) = \mathbb R$.

  Affermo che $g\in\mathcal C^0(\mathbb R\setminus\lbrace0\rbrace)$. Infatti per $x_0\neq0$ vale il caso di prima:
$$\lim_{x\to x_0}g(x) = \lim_{x\to x_0}\frac1x = \frac1{x_0} = g(x_0)\qquad\forall x_0\neq0.$$
  Se $x_0 = 0$, allora $0\in\mathrm{acc}\,\mathbb R$ e
$$\lim_{x\to0^\pm}g(x) = \lim_{x\to0^\pm}\frac1x = \pm\infty\ \Longrightarrow\ \nexists\lim_{x\to0}g(x),$$
  quindi $0$ è un punto di discontinuità di $g$.` },

{ t: "es", titolo: R`Funzione di Dirichlet: discontinua ovunque`, testo: R`
$f_D:\mathbb R\to\lbrace0,1\rbrace$ tale che
$$f_D(x) = \begin{cases}1 & x\in\mathbb R\setminus\mathbb Q\\ 0 & x\in\mathbb Q\end{cases}\qquad\forall x\in\mathbb R.$$
Affermo che $f_D$ è discontinua in **OGNI** $x_0\in\mathbb R$. Infatti:
- $x_0\in\mathbb R\setminus\mathbb Q\Rightarrow\exists(a_n)_{n\in\mathbb N}$ tale che $a_n\to x_0$ e $a_n\in\mathbb Q$ $\forall n\in\mathbb N$ (densità di $\mathbb Q$ in $\mathbb R$)
$$\Longrightarrow\ \lim_{n\to+\infty}f_D(a_n) = \lim_{n\to+\infty}0 = 0\neq1 = f(x_0)$$
$\Rightarrow\nexists\lim_{x\to x_0}f_D(x) = f(x_0)$ e $x_0\in\mathbb R\setminus\mathbb Q$ è punto di discontinuità.
- $x_0\in\mathbb Q\Rightarrow a_n = x_0+\frac{\sqrt2}n\in\mathbb R\setminus\mathbb Q$ $\forall n\in\mathbb N$ e $a_n\to x_0$, ma
$$\lim_{n\to+\infty}f_D(a_n) = \lim_{n\to+\infty}1 = 1\neq0 = f(x_0)$$
$\Rightarrow\nexists\lim_{x\to x_0}f_D(x) = f(x_0)$ e $x_0\in\mathbb Q$ è punto di discontinuità.

(Si usa la caratterizzazione sequenziale del limite.)` },

{ t: "prop", s: "dim", diff: 1, titolo: R`Caratterizzazione $\varepsilon$-$\delta$ della continuità`, testo: R`
Sia $\emptyset\neq A\subseteq\mathbb R$, $x_0\in A$ di accumulazione per $A$ e $f:A\to\mathbb R$. Le seguenti affermazioni sono equivalenti:
1. $f$ è continua in $x_0$;
2. $\forall\varepsilon>0$ $\exists\delta>0$ tale che
$$f(x)\in\big(f(x_0)-\varepsilon,\ f(x_0)+\varepsilon\big)\qquad\forall x\in(x_0-\delta,x_0+\delta)\cap A.$$

(Caratterizzazione $\varepsilon$-$\delta$ del limite, di Weierstrass.)`, dim: R`
La sappiamo già per definizione di funzione continua e del limite $\lim_{x\to x_0}f(x) = f(x_0)$. (In $x = x_0$ la condizione $|f(x)-f(x_0)|<\varepsilon$ è ovvia, quindi non serve togliere $x_0$.) $\blacksquare$` },

{ t: "teo", s: "dim", diff: 1, titolo: R`Algebra delle funzioni continue`, testo: R`
Siano $\emptyset\neq A\subseteq\mathbb R$, $x_0\in A$, $f,g:A\to\mathbb R$. Se $f$ e $g$ sono continue in $x_0$, allora:
- **(S)** $af+bg:A\to\mathbb R$ è continua in $x_0$ $\forall a,b\in\mathbb R$;
- **(P)** $f\cdot g:A\to\mathbb R$ è continua in $x_0$;
- **(Q)** $\dfrac fg:A\cap\lbrace g\neq0\rbrace\to\mathbb R$ è continua in $x_0$ se $g(x_0)\neq0$.`, dim: R`
Se $x_0$ è punto isolato allora non c'è nulla da dimostrare. Se $x_0\in\mathrm{acc}A$, allora segue dall'algebra dei limiti (finiti) e dalla definizione di funzione continua. $\blacksquare$` },

{ t: "teo", s: "dim", diff: 1, titolo: R`Locale limitatezza delle funzioni continue`, testo: R`
Siano $\emptyset\neq A\subseteq\mathbb R$, $x_0\in A$, $f:A\to\mathbb R$. Se $f$ è continua in $x_0$ allora è definitivamente limitata per $x\to x_0$.`, dim: R`
Se $x_0$ è isolato, allora non ci sono punti "vicini" a $x_0$ e quindi non ho nulla da verificare! Se $x_0\in\mathrm{acc}A$, allora $\exists\lim_{x\to x_0}f(x) = f(x_0)\in\mathbb R$ e quindi segue dalla limitatezza delle funzioni che hanno limite finito (in $\mathbb R$). $\blacksquare$` },

{ t: "teo", s: "dim", diff: 1, titolo: R`Permanenza del segno (funzioni continue)`, testo: R`
Siano $\emptyset\neq A\subseteq\mathbb R$, $x_0\in A$, $f:A\to\mathbb R$. Se $f$ è continua in $x_0$ e $f(x_0)>0$, allora $f(x)>0$ definitivamente per $x\to x_0$.`, dim: R`
Se $x_0$ è isolato allora non c'è nulla da dimostrare. Se $x_0\in\mathrm{acc}A$, allora segue dalla permanenza del segno nei limiti. $\blacksquare$` },

{ t: "teo", s: "dim", diff: 1, titolo: R`Continuità della composizione`, testo: R`
Se $f,g$ sono due funzioni tali che
$$g\circ f:A\to\mathbb R,\qquad\emptyset\neq A\subseteq\mathbb R,$$
è ben definita e valgono:
1. $f$ è continua in $x_0\in\mathrm{dom}(f)\cap A$;
2. $g$ è continua in $f(x_0)\in\mathrm{dom}(g)$;

allora $g\circ f$ è continua in $x_0\in A$.`, dim: R`
Applicare la definizione di continuità e il teorema di cambio di variabile nei limiti (con $y = f(x)$, $y_0 = f(x_0)$; vale l'opzione (3b) perché $g$ è continua in $y_0$):
$$\lim_{x\to x_0}(g\circ f)(x) = \lim_{x\to x_0}g(f(x))\overset{\text{CDV}}= \lim_{y\to f(x_0)}g(y) = g(f(x_0)) = (g\circ f)(x_0). \ \blacksquare$$` },

{ t: "cor", s: "dim", diff: 1, titolo: R`Se $f$ è continua, anche $|f|$ lo è`, testo: R`
Se $f:A\to\mathbb R$ è continua in $x_0\in A$, allora anche $|f|:A\to\mathbb R$ è continua in $x_0$.

**Attenzione!** NON è vero il viceversa:
$$f\text{ continua in } x_0\ \Longrightarrow\ |f|\text{ continua in }x_0,\qquad\text{ma}\ \Longleftarrow\text{ è falso.}$$
Infatti $f(x) = \begin{cases}1 & x\ge0\\ -1 & x<0\end{cases}$ è discontinua in $x_0 = 0$, ma $|f(x)| = 1$ $\forall x\in\mathbb R$ è continua in $x_0 = 0$.`, dim: R`
Basta prendere $g(y) = |y|$ $\forall y\in\mathbb R$, che è continua su tutto $\mathbb R$, nel teorema precedente. $\blacksquare$` },

{ t: "teo", s: "dim", diff: 1, titolo: R`Caratterizzazione sequenziale della continuità`, testo: R`
("Ponte" tra continuità e successioni.) Siano $\emptyset\neq A\subseteq\mathbb R$, $x_0\in A$ e $f:A\to\mathbb R$. Le seguenti affermazioni sono equivalenti:
1. $f$ è continua in $x_0$;
2. per **ogni** successione $(a_n)_{n\in\mathbb N}$ (in $A$) tale che $\lim_{n\to+\infty}a_n = x_0$ vale $\lim_{n\to+\infty}f(a_n) = f(x_0)$.`, dim: R`
Applicare la definizione di continuità e il teorema di caratterizzazione sequenziale del limite. $\blacksquare$` },

{ t: "es", titolo: R`Prolungamento per continuità: due esempi`, testo: R`
- $f(x) = \begin{cases}1 & x\neq0\\ 18 & x = 0\end{cases}$ $\forall x\in\mathbb R$ è discontinua in $x_0 = 0$ perché
$$\lim_{x\to0}f(x) = \lim_{x\to0}1 = 1\neq18 = f(0).$$
Ma è chiaro che la definizione "naturale" dovrebbe essere $f(0) = 1$.
- $f(x) = \begin{cases}e^{-\frac1x} & x>0\\ 0 & x<0\end{cases}$ $\forall x\in\mathbb R\setminus\lbrace0\rbrace$. Osservo che $f\in\mathcal C^0(\mathbb R\setminus\lbrace0\rbrace)$ e il valore "naturale" da porre in $x_0 = 0$ è $f(0) = 0$ (infatti $e^{-1/x}\to0$ per $x\to0^+$).` },

{ t: "def", titolo: R`Prolungamento per continuità`, testo: R`
Siano $\emptyset\neq A\subseteq\mathbb R$, $x_0\in\mathrm{acc}A$, $f:A\to\mathbb R$. Se
$$\exists\lim_{x\to x_0}f(x) = \ell\in\mathbb R,$$
allora chiamiamo **prolungamento di $f$ per continuità in $x_0$** la funzione $\tilde f:A\cup\lbrace x_0\rbrace\to\mathbb R$ definita ponendo
$$\boxed{\ \tilde f(x) = \begin{cases}f(x) & \forall x\in A\setminus\lbrace x_0\rbrace\\ \ell & x = x_0.\end{cases}\ }$$

**Oss.** Per definizione, $\tilde f$ è continua in $x_0$:
$$\lim_{x\to x_0}\tilde f(x) = \lim_{x\to x_0}f(x) = \ell = \tilde f(x_0).$$` },

{ t: "oss", titolo: R`Prolungamento anche in punti fuori da $A$ e a $\pm\infty$`, testo: R`
(Lezione del 19/11.) Nella definizione di $\tilde f$ è richiesto **soltanto** che $x_0\in\mathrm{acc}A$, quindi $x_0$ potrebbe non essere un elemento di $A$, e addirittura $x_0\in\lbrace\pm\infty\rbrace$.

**PRASSI:** salvo diverso avviso, di solito estenderemo sempre in punti $x_0\in\mathbb R$.` },

{ t: "es", titolo: R`Prolungamenti: $e^{-1/x}$, $\arctan$, $\frac{\sin x}x$, $\frac{\log(1+x)}x$`, testo: R`
(Lezione del 19/11.)
- $f(x) = \begin{cases}e^{-1/x} & x>0\\ 0 & x<0\end{cases}$ (con $\lim_{x\to0}f(x) = 0$), e quindi:
  - $x_0 = 0\ \Rightarrow\ \tilde f(x) = \begin{cases}f(x) & x\neq0\\ 0 & x = 0;\end{cases}$
  - $x_0 = +\infty\ \Rightarrow\ \tilde{\tilde f}(x) = \begin{cases}\tilde f(x) & x\in\mathbb R\\ 1 & x = +\infty,\end{cases}$ dato che $\lim_{x\to+\infty}\tilde f(x) = \lim_{x\to+\infty}e^{-1/x} = e^0 = 1$.
- $f(x) = \arctan(x)$, $x\in\mathbb R$: la definizione ci permette di definire
$$\tilde f(x) = \begin{cases}f(x) & x\in\mathbb R\\ \pm\frac\pi2 & x = \pm\infty.\end{cases}$$
- $f(x) = \dfrac{\sin(x)}x$ $\forall x\neq0\ \Rightarrow\ \tilde f(x) = \begin{cases}f(x) & x\neq0\\ 1 & x = 0.\end{cases}$
- $g(x) = \dfrac{\log(1+x)}x$ $\forall x\in\mathrm{dom}(g) = (-1,+\infty)\setminus\lbrace0\rbrace\ \Rightarrow\ \tilde g(x) = \begin{cases}g(x) & x\neq0\\ 1 & x = 0\end{cases}$ $\forall x\in(-1,+\infty)$.` },

]});
