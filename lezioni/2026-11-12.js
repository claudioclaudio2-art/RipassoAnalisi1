L({ data: "2026-11-12", n: 27, titolo: "Criteri per le serie: confronto asintotico, rapporto, rapporto asintotico", voci: [

{ t: "teo", s: "dim", diff: 2, titolo: R`Criterio del confronto asintotico`, testo: R`
Siano $(a_n)_{n\in\mathbb N}$, $(b_n)_{n\in\mathbb N}$ con $a_n>0$ e $b_n>0$ definitivamente. Se
$$\exists\lim_{n\to+\infty}\frac{a_n}{b_n} = \ell\in[0,+\infty)\cup\lbrace+\infty\rbrace,$$
allora:
1. $\ell\in(0,+\infty)\ \Rightarrow\ \sum_{n=1}^{+\infty}a_n$ e $\sum_{n=1}^{+\infty}b_n$ hanno lo **stesso carattere** (convergono entrambe o divergono entrambe);
2. $\ell = 0\ \Rightarrow\ $ se $\sum b_n$ converge allora $\sum a_n$ converge (e se $\sum a_n$ diverge allora $\sum b_n$ diverge a $+\infty$);
3. $\ell = +\infty\ \Rightarrow\ $ se $\sum b_n$ diverge allora $\sum a_n$ diverge a $+\infty$ (e se $\sum a_n$ converge allora $\sum b_n$ converge).`, dim: R`
Per casi.

**1.** Esiste $N\in\mathbb N$ tale che (definizione di limite con $\varepsilon = \frac\ell2$)
$$\left|\frac{a_n}{b_n}-\ell\right|<\frac\ell2\qquad\forall n\ge N,$$
cioè
$$\frac\ell2\,b_n<a_n<\frac{3\ell}2\,b_n\qquad\forall n\ge N.$$
Quindi $\frac\ell2b_n<a_n<\frac{3\ell}2b_n$ definitivamente, e la conclusione segue per confronto (e linearità: $\sum\frac{3\ell}2b_n$ e $\sum b_n$ hanno lo stesso carattere).

**2.** Esiste $N\in\mathbb N$ tale che (con $\varepsilon = 1$)
$$0<\frac{a_n}{b_n}<1\qquad\forall n\ge N,$$
e quindi $0<a_n<b_n$ definitivamente: di nuovo concludo per confronto.

**3.** $\lim\frac{a_n}{b_n} = +\infty\Rightarrow\lim\frac{b_n}{a_n} = 0$: segue dal caso precedente con $a_n$ e $b_n$ scambiati di posto. $\blacksquare$` },

{ t: "es", titolo: R`Confronto asintotico con una serie armonica`, testo: R`
Se $(a_n)$ è a termini definitivamente positivi e
$$a_n\sim\frac c{n^2}\quad(c>0)\qquad\text{cioè}\qquad\lim_{n\to+\infty}\frac{a_n}{1/n^2} = c\in(0,+\infty),$$
allora la natura di $\sum a_n$ è la stessa di $\sum\frac1{n^2}$, che converge: quindi $\sum a_n$ converge.

Es. (ricostruito, l'esempio esatto del prof va controllato negli appunti): $a_n = \dfrac{n+3}{2n^3+5n+7}$ è positiva e $a_n\sim\dfrac n{2n^3} = \dfrac1{2n^2}$, quindi $\sum a_n$ converge.` },

{ t: "att", titolo: R`Nel confronto asintotico serve "termini positivi"`, testo: R`
L'ipotesi "$a_n,b_n>0$ definitivamente" **non può essere ignorata**.

Esempio (aggiunta, l'esempio del prof va controllato negli appunti): $a_n = \dfrac{(-1)^n}{\sqrt n}$ e $b_n = \dfrac{(-1)^n}{\sqrt n}+\dfrac1n$.
- $\sum a_n$ converge (serie a segni alterni con termini che decrescono a $0$: criterio di Leibniz, oppure raggruppando a coppie come per $\sum\frac{(-1)^{n+1}}n$);
- $\sum b_n = \sum a_n+\sum\frac1n$ diverge a $+\infty$ (se convergesse, per linearità convergerebbe $\sum\frac1n = \sum(b_n-a_n)$);
- **ma** $\dfrac{b_n}{a_n} = 1+\dfrac{(-1)^n}{\sqrt n}\to1\in(0,+\infty)$.

Stesso "ordine", carattere diverso: il criterio vale solo per serie a termini positivi.` },

{ t: "teo", s: "dim", diff: 2, titolo: R`Criterio del rapporto (per serie)`, testo: R`
Sia $(a_n)_{n\in\mathbb N}$ con $a_n>0$ definitivamente. Allora:
1. se $\exists r\in(0,1)$ tale che $\dfrac{a_{n+1}}{a_n}\le r$ definitivamente $\ \Rightarrow\ \sum_{n=1}^{+\infty}a_n$ è **convergente**;
2. se $\exists r\in[1,+\infty)$ tale che $\dfrac{a_{n+1}}{a_n}\ge r$ definitivamente $\ \Rightarrow\ \sum_{n=1}^{+\infty}a_n$ **diverge** a $+\infty$.`, dim: R`
Distinguo i due casi.

**1.** Esiste $N\in\mathbb N$ tale che
$$\frac{a_{n+1}}{a_n}\le r\qquad\forall n\ge N.$$
Affermo allora che
$$a_{N+k}\le r^k\,a_N\qquad\forall k\in\mathbb N_0.$$
Lo dimostro per induzione su $k$:
- **base** $k = 0$: $a_N\le r^0a_N = a_N$, vero (per $k = 1$: $a_{N+1}\le r\,a_N$, cioè $\frac{a_{N+1}}{a_N}\le r$, vero con $n = N$);
- **passo induttivo:** se $a_{N+k}\le r^ka_N$ (ipotesi induttiva), allora, usando la disuguaglianza con $n = N+k\ge N$,
$$a_{N+k+1}\le r\,a_{N+k}\le r\cdot r^ka_N = r^{k+1}a_N.$$

Allora per confronto di code:
$$\sum_{n=N}^{+\infty}a_n = \sum_{k=0}^{+\infty}a_{N+k}\le a_N\sum_{k=0}^{+\infty}r^k,$$
che **converge** (serie geometrica con $r\in(0,1)$). Segue che la coda $\sum_{n=N}^{+\infty}a_n$ converge, e quindi $\sum_{n=1}^{+\infty}a_n$ converge.

**2.** Omessa, ma basta dimostrare (allo stesso modo, per induzione) che
$$a_{N+k}\ge r^ka_N\ge a_N>0\qquad\forall k\in\mathbb N,$$
con $N\in\mathbb N$ fissato, perché $r\ge1$. Allora $a_n\not\to0$, la condizione necessaria non vale e la serie (a termini positivi) diverge a $+\infty$. $\blacksquare$` },

{ t: "teo", s: "omessa", titolo: R`Criterio del rapporto asintotico (per serie)`, testo: R`
Sia $(a_n)_{n\in\mathbb N}$ con $a_n>0$ definitivamente. Se
$$\exists\lim_{n\to+\infty}\frac{a_{n+1}}{a_n} = \ell\in[0,+\infty)\cup\lbrace+\infty\rbrace,$$
allora:
1. $\ell<1\ \Rightarrow\ \sum_{n=1}^{+\infty}a_n$ converge;
2. $\ell>1\ \Rightarrow\ \sum_{n=1}^{+\infty}a_n$ diverge a $+\infty$;
3. $\ell = 1$: **non si può dire nulla**.

(Dimostrazione omessa, analoga al criterio del rapporto visto sopra.)` },

{ t: "es", titolo: R`$\sum\frac1{n^\alpha\beta^n}$ con il rapporto asintotico`, testo: R`
Sia $a_n = \dfrac1{n^\alpha\beta^n}$ con $\alpha\in\mathbb R$, $\beta>0$. Osservo che
$$\lim_{n\to+\infty}\frac{a_{n+1}}{a_n} = \lim_{n\to+\infty}\left(\frac n{n+1}\right)^\alpha\cdot\frac1\beta = \frac1\beta.$$
Allora per il rapporto asintotico:
- $\frac1\beta<1\iff\beta>1\ \Rightarrow\ \sum\frac1{n^\alpha\beta^n}$ converge, $\forall\alpha\in\mathbb R$;
- $\frac1\beta>1\iff\beta<1\ \Rightarrow\ \sum\frac1{n^\alpha\beta^n}$ diverge a $+\infty$, $\forall\alpha\in\mathbb R$.

Ma per $\frac1\beta = 1$, cioè $\beta = 1$, il criterio non dice nulla. Infatti in quel caso la serie è $\sum\frac1{n^\alpha}$, che converge se e solo se $\alpha>1$, altrimenti diverge a $+\infty$.

**Ricapitolando:**
$$\sum_{n=1}^{+\infty}\frac1{n^\alpha\beta^n}\ \begin{cases}\text{converge} & \beta>1,\ \forall\alpha\in\mathbb R\ \text{ oppure }\ \beta = 1,\ \alpha>1\\ \text{diverge a }+\infty & \beta<1,\ \forall\alpha\in\mathbb R\ \text{ oppure }\ \beta = 1,\ \alpha\le1.\end{cases}$$` },

{ t: "es", titolo: R`$\sum\frac{x^n}{n!}$ converge assolutamente per ogni $x\in\mathbb R$`, testo: R`
Sia $a_n = \dfrac{x^n}{n!}$ con $x\in\mathbb R$, $n\ge0$. Dimostro che $\sum_{n=0}^{+\infty}a_n$ converge assolutamente per ogni $x\in\mathbb R$.

Per $x = 0$ è ovvio. Per $x\neq0$ pongo $b_n = |a_n| = \dfrac{|x|^n}{n!}>0$ e
$$\lim_{n\to+\infty}\frac{b_{n+1}}{b_n} = \lim_{n\to+\infty}\frac{|x|^{n+1}}{(n+1)!}\cdot\frac{n!}{|x|^n} = \lim_{n\to+\infty}\frac{|x|}{n+1} = 0<1,$$
e quindi $\sum b_n = \sum|a_n|$ converge, come volevamo (e allora $\sum a_n$ converge anche semplicemente).

In effetti si può dimostrare che
$$\sum_{n=0}^{+\infty}\frac{x^n}{n!} = e^x\quad\forall x\in\mathbb R,\qquad\text{in particolare}\qquad\sum_{n=0}^{+\infty}\frac1{n!} = e.$$` },

]});
