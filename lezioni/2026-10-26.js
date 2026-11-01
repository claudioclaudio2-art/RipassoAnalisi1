L({ data: "2026-10-26", n: 17, titolo: "Limiti di polinomi, algebra dei limiti infiniti, cambio di variabile", voci: [

{ t: "cor", s: "dim", diff: 2, titolo: R`Limiti di polinomi e funzioni razionali`, testo: R`
Siano $P(x)$ e $Q(x)$ due polinomi. Allora
1. $\displaystyle\lim_{x\to x_0}P(x) = P(x_0)$ per ogni $x_0\in\mathbb R$;
2. $\displaystyle\lim_{x\to x_0}\frac{P(x)}{Q(x)} = \frac{P(x_0)}{Q(x_0)}$ per ogni $x_0\in\mathbb R$ con $Q(x_0)\neq0$.`, dim: R`
Sappiamo $\lim_{x\to x_0}x = x_0$. Applicando (P) $n-1$ volte:
$$\lim_{x\to x_0}x^n = \lim_{x\to x_0}\underbrace{x\cdots x}_{n} = x_0^n.$$
Per (S), $\lim_{x\to x_0}a_kx^k = a_kx_0^k$, e applicando (S) $n$ volte alla somma di $n+1$ termini:
$$\lim_{x\to x_0}\sum_{k=0}^na_kx^k = \sum_{k=0}^na_kx_0^k = P(x_0).$$
Il punto 2 segue da (Q). $\blacksquare$` },

{ t: "teo", s: "omessa", diff: 3, titolo: R`Algebra dei limiti infiniti (6 regole)`, testo: R`
Siano $f,g:A\to\mathbb R$, $x_0$ di accumulazione per $A$.
1. Se $\lim f = +\infty$ e $g$ è **limitata inferiormente** definitivamente, allora $\lim(f+g) = +\infty$. $\quad[+\infty+(\text{non }-\infty)]$
2. Se $\lim f = 0$ e $g$ è **limitata** definitivamente, allora $\lim(f\cdot g) = 0$. $\quad[0\cdot\text{limitata}]$
3. Se $\lim f = +\infty$ (risp. $-\infty$) ed esiste $C>0$ con $g(x)>C$ definitivamente, allora $\lim(f\cdot g) = +\infty$ (risp. $-\infty$).
4. Se $\lim f = +\infty$ (risp. $-\infty$) ed esiste $C>0$ con $0<g(x)<C$ definitivamente, allora $\lim\frac fg = +\infty$ (risp. $-\infty$).
5. Se $\lim f = \pm\infty$ e $g$ è limitata definitivamente, allora $\lim\frac gf = 0$.
6. Se $\lim f = 0$ con $f(x)>0$ (risp. $<0$) definitivamente ed esiste $C>0$ con $g(x)>C$ definitivamente, allora $\lim\frac gf = +\infty$ (risp. $-\infty$). $\quad\left[\frac{C}{0^+} = +\infty\right]$

N.B. In 1, 2, 5 **non** si chiede nulla al limite di $g$: basta che sia limitata.`, dim: R`
Non fatta a lezione ("buon esercizio, analoga al caso dei limiti in $\mathbb R$"). Esempio per la 1: $g(x)\ge c$ definitivamente. Dato $M$, definitivamente $f(x)>M-c$, quindi $f(x)+g(x)>M$.

Per la 2: $|g(x)|\le C$ definitivamente. Dato $\varepsilon$, definitivamente $|f(x)|<\frac\varepsilon C$, quindi $|f(x)g(x)|<\varepsilon$. $\blacksquare$` },

{ t: "es", titolo: R`Esempi di algebra dei limiti infiniti`, testo: R`
- $\displaystyle\lim_{x\to+\infty}(x+\sin x) = +\infty$ per la regola 1: $x\to+\infty$ e $\sin x\ge-1$.
- Se $\lim f = +\infty$ e $g$ è limitata **superiormente**, allora $\lim(f-g) = +\infty$: pongo $G = -g$, limitata inferiormente, e applico la 1.
- $\displaystyle\lim_{x\to0}x\sin\frac1x = 0$ per la regola 2 ($x\to0$ infinitesima, $\sin\frac1x$ limitata). Lo avevamo già visto con i carabinieri.` },

{ t: "es", s: "casa", diff: 2, titolo: R`Dimostrare la regola 2 con i carabinieri`, testo: R`
Dimostrare la regola "$0\cdot$limitata $= 0$" usando il teorema dei due carabinieri.`, dim: R`
Se $|g(x)|\le C$ definitivamente, allora $0\le|f(x)g(x)|\le C|f(x)|$. Siccome $\lim|f| = 0$, per (S) $\lim C|f| = 0$ e per i carabinieri $\lim|fg| = 0$, quindi $\lim fg = 0$ (limite del modulo). $\blacksquare$` },

{ t: "def", titolo: R`Forme indeterminate`, testo: R`
Sono i casi non coperti dai teoremi sopra, in cui l'algebra dei limiti **non si può applicare**:
$$\text{somma: } [+\infty-\infty],\qquad\text{prodotto: } [0\cdot\pm\infty],\qquad\text{quoziente: } \left[\frac00\right],\ \left[\frac\infty\infty\right].$$
Il risultato dipende dalle funzioni specifiche:
- $f(x) = x$, $g(x) = \frac1x$: $f\cdot g\to1$, ma con $g(x) = \frac1{x^2}$: $f\cdot g = \frac1x$, il cui limite in $0$ non esiste;
- $f(x) = x^2$, $g(x) = \frac1{x^2}$ per $x\to\infty$: prodotto $1$; con $g = \frac1x$: prodotto $x\to\infty$.` },

{ t: "es", titolo: R`$\lim_{x\to+\infty}\left(\sqrt{x+1}-\sqrt x\right) = 0$`, testo: R`
È una forma $[+\infty-\infty]$. Razionalizzando, per ogni $x\ge0$:
$$\sqrt{x+1}-\sqrt x = \frac{(x+1)-x}{\sqrt{x+1}+\sqrt x} = \frac1{\sqrt{x+1}+\sqrt x}.$$
Il denominatore tende a $+\infty$, quindi per la regola 5 il limite è $0$.` },

{ t: "teo", s: "omessa", diff: 3, titolo: R`Cambio di variabile nei limiti (limite di funzione composta)`, testo: R`
Siano $f:A\to\mathbb R$, $g:B\to\mathbb R$ ($A,B\subseteq\mathbb R$ non vuoti), $\tilde A = \lbrace x\in A: f(x)\in B\rbrace$ e $x_0\in\overline{\mathbb R}$ di accumulazione per $\tilde A$. Supponiamo:
1. $\displaystyle\lim_{x\to x_0}f(x) = y_0\in\overline{\mathbb R}$, con $y_0$ di accumulazione per $B$;
2. $\displaystyle\lim_{y\to y_0}g(y) = \ell\in\overline{\mathbb R}$;
3. vale almeno una tra
 - (3a) $f(x)\neq y_0$ definitivamente per $x\to x_0$;
 - (3b) $y_0\in B$ e $\displaystyle\lim_{y\to y_0}g(y) = g(y_0)$.

Allora $\displaystyle\lim_{x\to x_0}g(f(x)) = \ell$.

(Argomento che "c'è all'esame".)`, dim: R`
Non fatta a lezione. Idea: fisso $U$ intorno di $\ell$. Per 2 esiste $J$ intorno di $y_0$ con $g(y)\in U$ per $y\in B\cap J\setminus\lbrace y_0\rbrace$. Per 1 esiste $I$ intorno di $x_0$ con $f(x)\in J$ per $x\in A\cap I\setminus\lbrace x_0\rbrace$. Allora per $x\in\tilde A\cap I\setminus\lbrace x_0\rbrace$, $y = f(x)\in B\cap J$. Se $f(x)\neq y_0$ (3a) allora $g(f(x))\in U$. Se invece $f(x) = y_0$ può succedere, serve (3b): $g(y_0) = \ell\in U$. $\blacksquare$` },

{ t: "es", titolo: R`$\lim_{x\to+\infty}\sqrt{2x+1} = +\infty$ con il cambio di variabile`, testo: R`
Pongo $f(x) = 2x+1$, $g(y) = \sqrt y$, con $B = [0,+\infty)$, $\tilde A = [-\frac12,+\infty)$; $x_0 = +\infty$ è di accumulazione per $\tilde A$.
1. $\lim_{x\to+\infty}(2x+1) = +\infty =: y_0$ (algebra dei limiti infiniti), di accumulazione per $B$.
2. $\lim_{y\to+\infty}\sqrt y = +\infty$ (verifica con la definizione: $\sqrt y>M\iff y>M^2$).
3. (3a) vale: $2x+1\neq+\infty$ sempre (è un numero reale).

Quindi $\lim_{x\to+\infty}\sqrt{2x+1} = +\infty$. (Esercizio: verificarlo anche con la definizione.)` },

]});
