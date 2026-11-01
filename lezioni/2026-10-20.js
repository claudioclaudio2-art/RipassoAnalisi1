L({ data: "2026-10-20", n: 14, titolo: "Limite e limiti laterali, modulo, permanenza del segno", voci: [

{ t: "teo", s: "dim", diff: 2, titolo: R`Limite $\iff$ limite destro = limite sinistro`, testo: R`
Siano $f:A\to\mathbb R$, $\ell\in\overline{\mathbb R}$, e $x_0\in\mathbb R$ punto di accumulazione **sia destro sia sinistro** per $A$. Allora
$$\lim_{x\to x_0}f(x) = \ell\iff\lim_{x\to x_0^+}f(x) = \ell\ \text{ e }\ \lim_{x\to x_0^-}f(x) = \ell.$$`, dim: R`
($\Rightarrow$) Fisso $U$ intorno di $\ell$. Per ipotesi esiste $I$ intorno di $x_0$ con $f(x)\in U$ per ogni $x\in A\cap I\setminus\lbrace x_0\rbrace$. In particolare vale per ogni $x\in A\cap I\cap(x_0,+\infty)$ e per ogni $x\in A\cap I\cap(-\infty,x_0)$: questi sono i due limiti laterali (gli insiemi sono non vuoti perché $x_0$ è di accumulazione destro e sinistro).

($\Leftarrow$) Fisso $U$ intorno di $\ell$. Esistono $I_1$ con $f(x)\in U$ $\forall x\in A\cap I_1\cap(x_0,+\infty)$ e $I_2$ con $f(x)\in U$ $\forall x\in A\cap I_2\cap(-\infty,x_0)$. Per la proprietà di intersezione, $I = I_1\cap I_2$ è un intorno di $x_0$ e
$$f(x)\in U\quad\forall x\in A\cap I\setminus\lbrace x_0\rbrace,$$
perché ogni tale $x$ sta a destra o a sinistra di $x_0$. $\blacksquare$` },

{ t: "att", titolo: R`Questa non è la definizione di limite`, testo: R`
È un teorema, utile soprattutto per dimostrare che un limite **non esiste**: basta trovare due limiti laterali diversi.` },

{ t: "es", titolo: R`Esempi: funzione segno e $1/x$`, testo: R`
- $f(x) = 1$ per $x\ge0$, $f(x)=-1$ per $x<0$: $\lim_{x\to0^+}f = 1\neq-1 = \lim_{x\to0^-}f$, quindi $\nexists\lim_{x\to0}f(x)$.
- $\lim_{x\to0^+}\frac1x = +\infty\neq-\infty = \lim_{x\to0^-}\frac1x$, quindi $\nexists\lim_{x\to0}\frac1x$.
- $\lim_{x\to0^\pm}\frac1{x^2} = +\infty$, quindi $\lim_{x\to0}\frac1{x^2} = +\infty$.` },

{ t: "prop", s: "dim", diff: 2, titolo: R`Limite del modulo: $\lim f = \ell\Rightarrow\lim|f| = |\ell|$`, testo: R`
Siano $f:A\to\mathbb R$, $x_0$ di accumulazione, $\ell\in\overline{\mathbb R}$ (con la convenzione $|\pm\infty| = +\infty$). Allora
1. $\displaystyle\lim_{x\to x_0}f(x) = \ell\ \Rightarrow\ \lim_{x\to x_0}|f(x)| = |\ell|$;
2. $\displaystyle\lim_{x\to x_0}f(x) = 0\ \iff\ \lim_{x\to x_0}|f(x)| = 0$.`, dim: R`
**(1), caso $\ell\in\mathbb R$, $\ell\ge0$.** Se $\ell = 0$: $\big||f(x)|-0\big| = |f(x)-0|<\varepsilon$, ovvio. Se $\ell>0$, fisso $\varepsilon\in(0,\ell)$ (basta, perché intorni più piccoli sono più restrittivi). Esiste $\delta$ con $|f(x)-\ell|<\varepsilon$ per $0<|x-x_0|<\delta$, cioè $0<\ell-\varepsilon<f(x)<\ell+\varepsilon$. Quindi $f(x)>0$, $|f(x)| = f(x)$ e $\big||f(x)|-\ell\big|<\varepsilon$.

**Caso $\ell<0$:** si applica quanto sopra a $g = -f$, che tende a $-\ell = |\ell|>0$, e $|g| = |f|$.

**Casi $x_0 = \pm\infty$ o $\ell = \pm\infty$:** analoghi (esercizio). Ad es. se $\ell = -\infty$, dato $M>0$ definitivamente $f(x)<-M$, quindi $|f(x)|>M$.

**(2)** ($\Rightarrow$) è (1). ($\Leftarrow$): $|f(x)-0| = \big||f(x)|-0\big|<\varepsilon$ definitivamente. $\blacksquare$` },

{ t: "att", titolo: R`$\lim|f|$ esiste non implica che esista $\lim f$`, testo: R`
Con $f(x) = 1$ per $x\ge0$ e $f(x)=-1$ per $x<0$: $|f(x)| = 1$ per ogni $x$, quindi $\lim_{x\to0}|f(x)| = 1$, ma $\lim_{x\to0}f(x)$ non esiste. Il viceversa vale solo quando il limite è $0$.

Il risultato vale anche per limiti destri e sinistri.` },

{ t: "teo", s: "dim", diff: 2, titolo: R`Permanenza del segno`, testo: R`
Sia $\displaystyle\lim_{x\to x_0}f(x) = \ell\in\overline{\mathbb R}$. Allora
- se $\ell>0$, allora $f(x)>0$ definitivamente per $x\to x_0$;
- se $\ell<0$, allora $f(x)<0$ definitivamente per $x\to x_0$.`, dim: R`
Basta il caso $\ell>0$ (l'altro con $-f$).

Se $\ell\in(0,+\infty)$: scelgo $\varepsilon = \frac\ell2$ e trovo un intorno $I$ di $x_0$ con $|f(x)-\ell|<\frac\ell2$, quindi $f(x)>\ell-\frac\ell2 = \frac\ell2>0$ per ogni $x\in A\cap I\setminus\lbrace x_0\rbrace$.

Se $\ell = +\infty$: scelgo l'intorno $U = (M,+\infty)$ con $M>0$ e trovo $I$ con $f(x)>M>0$. $\blacksquare$` },

{ t: "teo", s: "dim", diff: 3, titolo: R`Limiti diversi $\Rightarrow$ funzioni ordinate definitivamente`, testo: R`
Siano $f,g:A\to\mathbb R$, $x_0$ di accumulazione per $A$, con
$$\lim_{x\to x_0}f(x) = \ell_1,\qquad\lim_{x\to x_0}g(x) = \ell_2,\qquad \ell_1,\ell_2\in\overline{\mathbb R}.$$
Se $\ell_1<\ell_2$, allora $f(x)<g(x)$ definitivamente per $x\to x_0$.`, dim: R`
Siccome $\ell_1\neq\ell_2$, trovo intorni $U_1$ di $\ell_1$ e $U_2$ di $\ell_2$ con $U_1\cap U_2 = \emptyset$, e scelti in modo che **ogni punto di $U_1$ sia minore di ogni punto di $U_2$**. Per la definizione di limite trovo $I_1, I_2$ intorni di $x_0$; su $I = I_1\cap I_2$ vale $f(x)\in U_1$ e $g(x)\in U_2$, quindi $f(x)<g(x)$.

Scelta degli intorni:
- $\ell_1,\ell_2\in\mathbb R$: $\varepsilon = \frac{\ell_2-\ell_1}2$, $U_1 = (\ell_1-\varepsilon,\ell_1+\varepsilon)$, $U_2 = (\ell_2-\varepsilon,\ell_2+\varepsilon)$. Si toccano solo in $\frac{\ell_1+\ell_2}{2}$, escluso perché gli intervalli sono aperti.
- $\ell_1\in\mathbb R$, $\ell_2 = +\infty$: $U_1 = (\ell_1-1,\ell_1+1)$, $U_2 = (\ell_1+1,+\infty)$.
- $\ell_1 = -\infty$, $\ell_2\in\mathbb R$: $U_1 = (-\infty,\ell_2-1)$, $U_2 = (\ell_2-1,\ell_2+1)$.
- $\ell_1 = -\infty$, $\ell_2 = +\infty$: $U_1 = (-\infty,0)$, $U_2 = (0,+\infty)$.

(I casi infiniti sono stati completati nella lezione del 22/10.) $\blacksquare$` },

]});
