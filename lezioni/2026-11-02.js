L({ data: "2026-11-02", n: 21, titolo: "Proprietà degli o-piccoli, principio di sostituzione, O-grande", voci: [

{ t: "oss", titolo: R`$f = o(1)$ significa "$f$ infinitesima"`, testo: R`
Prendendo $g(x) = 1$ nella definizione di o-piccolo:
$$f(x) = o(1)\ \text{per } x\to x_0\iff\lim_{x\to x_0}\frac{f(x)}1 = 0\iff\lim_{x\to x_0}f(x) = 0,$$
cioè $f$ è **infinitesima** per $x\to x_0$.

Esempi per $x\to+\infty$: $\dfrac1{x^5} = o(1)$, $\dfrac1x = o(1)$. Per $x\to0$: $\sin x = o(1)$, $\cos x-1 = o(1)$.` },

{ t: "att", titolo: R`$o(g)$ è una notazione, non una funzione`, testo: R`
Per $x\to0$ vale sia $\sin x = o(1)$ sia $\cos x-1 = o(1)$, **ma** $\sin x\neq\cos x-1$ in un intorno di $0$.

Quindi l'uguale in "$f = o(g)$" **non** è un'uguaglianza vera e propria: $o(g)$ indica una **qualsiasi** funzione trascurabile rispetto a $g$. La notazione dice solo come $f$ si comporta **relativamente a $g$** per $x\to x_0$: serve a **stimare l'errore** che si commette.` },

{ t: "att", titolo: R`Gli o-piccoli NON si cancellano`, testo: R`
Per $x\to+\infty$: $\dfrac1{x^3} = o\!\left(\dfrac1x\right)$ e $\dfrac1{x^2} = o\!\left(\dfrac1x\right)$, ma
$$\frac1{x^3}-\frac1{x^2}\neq0.$$
Quindi $o(g)-o(g)$ **non** fa $0$. Vale invece
$$o(g)\pm o(g) = o(g)\quad\text{per } x\to x_0.$$`, },

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
Siano $f, h, g$ a valori reali, con $h\circ f$ e $g\circ f$ definite su $A$, e $x_0$ di accumulazione per $A$. Supponiamo che
1. $\displaystyle\lim_{x\to x_0}f(x) = y_0\in\overline{\mathbb R}$;
2. $h(y) = o(g(y))$ per $y\to y_0$ (lo **sviluppo** di $h$);
3. $f(x)\neq y_0$ definitivamente per $x\to x_0$.

Allora
$$h(f(x)) = o\big(g(f(x))\big)\qquad\text{per } x\to x_0.$$
Dimostrazione omessa: è una conseguenza della definizione di o-piccolo e del teorema di cambio di variabile nei limiti.` },

{ t: "es", titolo: R`Sviluppi composti: $\sin(2x)$ ed $e^{\sin x}$`, testo: R`
- $\sin y = y+o(y)$ per $y\to0$; con $f(x) = 2x\to0$, $2x\neq0$ per $x\neq0$:
$$\sin(2x) = 2x+o(2x) = 2x+o(x)\quad\text{per } x\to0.$$
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

{ t: "es", titolo: R`Principio di sostituzione in pratica`, testo: R`
$$\lim_{x\to0}\frac{\sin x+x^2}{e^x-1+x^3} = \lim_{x\to0}\frac{x+o(x)}{x+o(x)} = \lim_{x\to0}\frac xx = 1,$$
perché $\sin x+x^2 = x+o(x)+o(x) = x+o(x)$ ed $e^x-1+x^3 = x+o(x)$.` },

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
