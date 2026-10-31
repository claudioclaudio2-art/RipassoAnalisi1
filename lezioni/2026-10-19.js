L({ data: "2026-10-19", n: 13, titolo: "Limite dell'esponenziale, limitatezza locale, limiti destro e sinistro", voci: [

{ t: "prop", s: "casa", titolo: R`Limite di una funzione costante`, testo: R`
Sia $f: A\to\mathbb R$ con $f(x) = c$ per ogni $x\in A$. Allora $\displaystyle\lim_{x\to x_0}f(x) = c$ per ogni $x_0$ di accumulazione per $A$ (anche $\pm\infty$).`, dim: R`
Per ogni intorno $U$ di $c$ si ha $f(x) = c\in U$ per **ogni** $x\in A$, quindi qualunque intorno $I$ di $x_0$ va bene. $\blacksquare$` },

{ t: "teo", s: "dim", titolo: R`Disuguaglianza di Bernoulli`, testo: R`
$$(1+t)^n\ge1+nt\qquad\forall n\in\mathbb N_0,\ \forall t\ge0.$$
(Vale in realtà per ogni $t\ge-1$.)`, dim: R`
Induzione su $n$ con $t$ fissato. **Base** $n=0$: $1\ge1$.

**Passo**: se $(1+t)^n\ge1+nt$, allora, siccome $1+t>0$,
$$(1+t)^{n+1} = (1+t)^n(1+t)\ge(1+nt)(1+t) = 1+(n+1)t+nt^2\ge1+(n+1)t.\ \blacksquare$$` },

{ t: "teo", s: "dim", titolo: R`$\lim_{x\to0}a^x = 1$ (con $a>1$)`, testo: R`
Sia $a > 1$. Allora $\displaystyle\lim_{x\to 0}a^x = a^0 = 1$.`, dim: R`
Fissato $\varepsilon>0$ cerco $\delta>0$ tale che $1-\varepsilon<a^x<1+\varepsilon$ per $|x|<\delta$. Posso supporre $\varepsilon\in(0,1)$.

**(1) Disuguaglianza destra.** Cerco $n\in\mathbb N$ con $a^{1/n}<1+\varepsilon$, cioè $a<(1+\varepsilon)^n$. Per **Bernoulli** $(1+\varepsilon)^n\ge1+n\varepsilon$, quindi basta $1+n\varepsilon>a$, cioè $n>\frac{a-1}\varepsilon$. Fisso tale $n$ e prendo $\delta\le\frac1n$: siccome $a^x$ è strettamente crescente, $|x|<\delta\Rightarrow a^x<a^{1/n}<1+\varepsilon$.

**(2) Disuguaglianza sinistra.** Siccome $\varepsilon\in(0,1)$ vale $\frac1{1-\varepsilon}>1+\varepsilon$ (perché $(1-\varepsilon)(1+\varepsilon) = 1-\varepsilon^2<1$). Quindi lo stesso $n$ dà $a^{1/n}<1+\varepsilon<\frac1{1-\varepsilon}$, cioè $a^{-1/n}>1-\varepsilon$. Per monotonia, $|x|<\delta\le\frac1n\Rightarrow a^x>a^{-1/n}>1-\varepsilon$.

Quindi con $\delta = \frac1n$ vale $|a^x-1|<\varepsilon$ per $|x|<\delta$. Il caso $a=1$ è banale (funzione costante). $\blacksquare$` },

{ t: "es", s: "casa", titolo: R`$\lim_{x\to0}a^x = 1$ per $a\in(0,1)$`, testo: R`
Dimostrare il caso $0<a<1$. Consiglio: "fare i furbi e non fare fatica".`, dim: R`
Posto $b = \frac1a>1$, si ha $a^x = b^{-x}$ e $|a^x-1| = |b^{-x}-1|$. Dato $\varepsilon$, il $\delta$ trovato per $b$ funziona: se $|x|<\delta$ allora anche $|-x|<\delta$, quindi $|b^{-x}-1|<\varepsilon$. $\blacksquare$` },

{ t: "es", s: "casa", titolo: R`$\lim_{x\to x_0}x^n = x_0^n$`, testo: R`
Dimostrare con la definizione che $\lim_{x\to x_0}x^n = x_0^n$ per ogni $n\in\mathbb N_0$, $x_0\in\mathbb R$. (Il 26/10 lo ritroveremo con l'algebra dei limiti.)`, dim: R`
Per $n = 0$ è la costante. Per $n\ge1$, usando $x^n - x_0^n = (x-x_0)\sum_{k=0}^{n-1}x^kx_0^{n-1-k}$: se $|x-x_0|<1$ allora $|x|\le|x_0|+1 =: R$ e
$$|x^n-x_0^n|\le|x-x_0|\cdot nR^{n-1}.$$
Basta prendere $\delta = \min\left\lbrace1,\ \frac{\varepsilon}{nR^{n-1}}\right\rbrace$. $\blacksquare$` },

{ t: "es", s: "casa", titolo: R`Limiti di funzioni pari e dispari`, testo: R`
Sia $f:\mathbb R\to\mathbb R$ pari e $\ell\in\overline{\mathbb R}$. Dimostrare che $\lim_{x\to x_0}f(x) = \ell\iff\lim_{x\to-x_0}f(x) = \ell$. Se $f$ è dispari: $\lim_{x\to x_0}f(x) = \ell\iff\lim_{x\to-x_0}f(x) = -\ell$.`, dim: R`
Se $I$ è un intorno di $x_0$, allora $-I$ è un intorno di $-x_0$. Per $x\in -I$, $-x\in I$ e $f(x) = f(-x)\in U$. Per la dispari, $f(x) = -f(-x)\in -U$, e $-U$ è un intorno di $-\ell$. $\blacksquare$` },

{ t: "es", s: "casa", titolo: R`$\lim\sin x = \sin x_0$, $\lim\cos x = \cos x_0$`, testo: R`
Dimostrare che per ogni $x_0\in\mathbb R$: $\lim_{x\to x_0}\sin x = \sin x_0$ e $\lim_{x\to x_0}\cos x = \cos x_0$.

Suggerimento: usare $|\sin x|\le|x|$, $|\cos x|\le1$ e le formule di prostaferesi.`, dim: R`
Per prostaferesi $\sin x-\sin x_0 = 2\cos\frac{x+x_0}2\sin\frac{x-x_0}2$, quindi
$$|\sin x-\sin x_0|\le2\cdot1\cdot\left|\frac{x-x_0}2\right| = |x-x_0|.$$
Basta $\delta = \varepsilon$. Analogamente $\cos x-\cos x_0 = -2\sin\frac{x+x_0}2\sin\frac{x-x_0}2$ dà $|\cos x-\cos x_0|\le|x-x_0|$. $\blacksquare$` },

{ t: "es", s: "casa", titolo: R`$\lim_{x\to+\infty}\sin x$ non esiste`, testo: R`
Dimostrare che $\lim_{x\to+\infty}\sin x$ e $\lim_{x\to-\infty}\cos x$ **non esistono**.`, dim: R`
Se fosse $\lim_{x\to+\infty}\sin x = \ell$, in ogni intorno $(M,+\infty)$ ci sono sia punti $\frac\pi2+2k\pi$ (dove $\sin = 1$) sia punti $-\frac\pi2+2k\pi$ (dove $\sin = -1$). Prendendo $U$ intorno di $\ell$ di raggio $\frac12$, $U$ non può contenere sia $1$ che $-1$: assurdo. Stesso ragionamento per $\cos$. $\blacksquare$` },

{ t: "prop", s: "dim", titolo: R`Se il limite è finito, $f$ è localmente limitata`, testo: R`
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

{ t: "es", s: "casa", titolo: R`$\lim_{x\to 0^\pm}\frac1x = \pm\infty$`, testo: R`
Dimostrare che $\displaystyle\lim_{x\to0^+}\frac1x = +\infty$ e $\displaystyle\lim_{x\to0^-}\frac1x = -\infty$.`, dim: R`
Fissato $M>0$, per $0<x<\frac1M$ si ha $\frac1x>M$: l'intorno $I = \left(-\frac1M,\frac1M\right)$ funziona. A sinistra, per $-\frac1M<x<0$ vale $\frac1x<-M$. $\blacksquare$` },

{ t: "att", titolo: R`$x_0^+$ e $x_0^-$ non sono numeri`, testo: R`
In $\lim_{x\to x_0^+}$, i simboli $x_0^+$ e $x_0^-$ indicano il **modo** di avvicinarsi a $x_0$. Non sono numeri.` },

]});
