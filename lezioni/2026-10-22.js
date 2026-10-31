L({ data: "2026-10-22", n: 15, titolo: "Confronto, carabinieri, algebra dei limiti finiti", voci: [

{ t: "teo", s: "dim", titolo: R`Teorema del confronto (per i limiti)`, testo: R`
Siano $f,g:A\to\mathbb R$, $x_0$ di accumulazione per $A$, e $f(x)\le g(x)$ definitivamente per $x\to x_0$. **Se esistono** i limiti
$$\lim_{x\to x_0}f(x) = \ell_1,\qquad\lim_{x\to x_0}g(x) = \ell_2\qquad(\ell_1,\ell_2\in\overline{\mathbb R}),$$
allora $\ell_1\le\ell_2$.`, dim: R`
Per assurdo, sia $\ell_1>\ell_2$. Per il teorema precedente (limiti diversi $\Rightarrow$ funzioni ordinate) si avrebbe $g(x)<f(x)$ definitivamente per $x\to x_0$.

Intersecando i due intorni in cui valgono $f\le g$ e $g<f$, si ottiene un intorno di $x_0$ con punti di $A$ in cui valgono entrambe: contraddizione. $\blacksquare$` },

{ t: "att", titolo: R`Le disuguaglianze strette non passano al limite`, testo: R`
Se $f(x)<g(x)$ definitivamente, si può concludere solo $\ell_1\le\ell_2$, **non** $\ell_1<\ell_2$.

Es. $f(x) = 0$, $g(x) = x^2$: $f(x)<g(x)$ per ogni $x\neq0$, ma $\lim_{x\to0}f = \lim_{x\to 0} g = 0$.` },

{ t: "teo", s: "dim", titolo: R`Teorema dei due carabinieri`, testo: R`
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

{ t: "cor", s: "dim", titolo: R`Teorema "per un carabiniere"`, testo: R`
Siano $f,g:A\to\mathbb R$ con $f(x)\le g(x)$ definitivamente per $x\to x_0$. Allora
1. $\displaystyle\lim_{x\to x_0}f(x) = +\infty\ \Rightarrow\ \lim_{x\to x_0}g(x) = +\infty$;
2. $\displaystyle\lim_{x\to x_0}g(x) = -\infty\ \Rightarrow\ \lim_{x\to x_0}f(x) = -\infty$.`, dim: R`
È esattamente la parte $\ell = \pm\infty$ della dimostrazione dei carabinieri (rifarla per esercizio). Per (1): fissato $M$, definitivamente $M<f(x)\le g(x)$. $\blacksquare$` },

{ t: "es", titolo: R`$\lim_{x\to0}x\sin\frac1x = 0$`, testo: R`
Per $x\neq0$ vale $\left|x\sin\frac1x\right|\le|x|$, cioè
$$-|x|\le x\sin\frac1x\le|x|.$$
Siccome $\lim_{x\to0}\pm|x| = 0$, per i carabinieri $\lim_{x\to0}x\sin\frac1x = 0$.` },

{ t: "es", s: "dim", titolo: R`$\lim_{x\to0}\frac{\sin x}x = 1$ (con i carabinieri)`, testo: R`
Dimostrare che $\displaystyle\lim_{x\to0}\frac{\sin x}{x} = 1$.`, dim: R`
Dalla definizione geometrica (confrontando le aree di triangoli e settore circolare) per $0<x<\frac\pi2$:
$$\sin x<x<\tan x.$$
Dividendo per $\sin x>0$: $1<\frac{x}{\sin x}<\frac1{\cos x}$, cioè
$$\cos x<\frac{\sin x}x<1.$$
La funzione $\frac{\sin x}x$ è pari, quindi la disuguaglianza vale anche per $-\frac\pi2<x<0$, cioè definitivamente per $x\to0$. Siccome $\lim_{x\to 0}\cos x = 1$, per i carabinieri $\lim_{x\to0}\frac{\sin x}x = 1$. $\blacksquare$` },

{ t: "teo", s: "dim", titolo: R`Algebra dei limiti finiti`, testo: R`
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
