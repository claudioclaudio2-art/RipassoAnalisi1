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
