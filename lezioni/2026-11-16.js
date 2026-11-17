L({ data: "2026-11-16", n: 29, titolo: "Criteri della radice, condensazione di Cauchy, serie a segno alterno e Leibniz", voci: [

{ t: "teo", s: "omessa", titolo: R`Criterio della radice`, testo: R`
Sia $(a_n)_{n\in\mathbb N}$ **definitivamente $\ge0$**. Allora:
1. $\exists r\in[0,1)$ tale che $\sqrt[n]{a_n}\le r$ definitivamente $\ \Longrightarrow\ \displaystyle\sum_{n=1}^{+\infty}a_n$ è convergente;
2. $\exists r\in[1,+\infty)$ tale che $\sqrt[n]{a_n}\ge r$ definitivamente $\ \Longrightarrow\ \displaystyle\sum_{n=1}^{+\infty}a_n$ è divergente a $+\infty$.

**Dim.** Omessa, ma vedere fogli settimanali.

(**Idea:** $\sqrt[n]{a_n}\le r\ \ \forall n\ge N\iff a_n\le r^n\ \ \forall n\ge N$, e quindi si confronta con la serie geometrica.)` },

{ t: "teo", s: "omessa", titolo: R`Criterio della radice asintotico`, testo: R`
Sia $(a_n)_{n\in\mathbb N}$ definitivamente $\ge0$. Se
$$\exists\lim_{n\to+\infty}\sqrt[n]{a_n} = \ell\in[0,+\infty)\cup\lbrace+\infty\rbrace,$$
allora:
1. $\ell<1\ \Longrightarrow\ \sum_{n=1}^{+\infty}a_n$ converge;
2. $\ell>1\ \Longrightarrow\ \sum_{n=1}^{+\infty}a_n$ diverge a $+\infty$;
3. $\ell = 1\ \Longrightarrow\ $ **NON si può dire nulla!**

**Dim.** Omessa, ma l'idea è la stessa del rapporto asintotico, ovvero:
$$\lim_{n\to+\infty}\sqrt[n]{a_n} = \ell<1\ \Longrightarrow\ \sqrt[n]{a_n}\le r\quad\forall n\ge N,\ \text{con } r\in(\ell,1)$$
$$\Longrightarrow\ a_n\le r^n\quad\forall n\ge N\ \text{con } r\in(0,1),$$
e quindi concludo (1) per confronto con la serie geometrica.` },

{ t: "es", titolo: R`Radice asintotica: $\frac1{n^\alpha}$ e $\frac n{2^n}$`, testo: R`
- $a_n = \dfrac1{n^\alpha}$ con $\alpha\in\mathbb R$:
$$\lim_{n\to+\infty}\sqrt[n]{a_n} = \lim_{n\to+\infty}\left(\frac1{\sqrt[n]n}\right)^\alpha = \lim_{n\to+\infty}1^\alpha = 1,$$
dato che $\lim_{n\to+\infty}\sqrt[n]n = \lim_{n\to+\infty}e^{\frac{\log(n)}n} = e^0 = 1$ (gerarchie). Quindi il criterio è **inconcludente** (in particolare, per $\ell = 1$ può succedere sia che converge che diverge a $+\infty$!).
- $a_n = \dfrac n{2^n}$ $\forall n\in\mathbb N$:
$$\lim_{n\to+\infty}\sqrt[n]{a_n} = \lim_{n\to+\infty}\frac{\sqrt[n]n}2 = \frac12<1\ \Longrightarrow\ \sum_{n=1}^{+\infty}\frac n{2^n}\ \text{converge}.$$
Osservo che
$$\lim_{n\to+\infty}\frac{a_{n+1}}{a_n} = \lim_{n\to+\infty}\underbrace{\frac{n+1}n}_{\to1}\cdot\frac{2^n}{2^{n+1}} = \frac12<1,$$
e quindi potevo applicare anche il rapporto asintotico.` },

{ t: "att", titolo: R`Rapporto asintotico ⇒ radice asintotica, ma non viceversa`, testo: R`
Si può dimostrare che, data $(a_n)_{n\in\mathbb N}$ definitivamente $>0$, vale
$$\exists\lim_{n\to+\infty}\frac{a_{n+1}}{a_n} = \ell\in[0,+\infty)\cup\lbrace+\infty\rbrace\ \Longrightarrow\ \exists\lim_{n\to+\infty}\sqrt[n]{a_n} = \ell,$$
ma **non** vale $\Longleftarrow$.

Quindi: se il rapporto asintotico dà $\boxed{\ell = 1}$ e quindi è inutile, allora anche la radice asintotica sarà inutile! **Il viceversa NON è vero!**

Ad esempio, sia $0<a_n = 2^{n+(-1)^n}$ $\forall n\in\mathbb N$. Abbiamo
$$\lim_{n\to+\infty}\sqrt[n]{a_n} = \lim_{n\to+\infty}2^{1+\frac{(-1)^n}n} = 2\lim_{n\to+\infty}2^{\frac{(-1)^n}n} = 2\cdot2^0 = 2$$
(perché $\frac{(-1)^n}n\to0$), e pertanto $\sum_{n=1}^{+\infty}a_n = +\infty$ per la radice asintotica. Tuttavia
$$\lim_{n\to+\infty}\frac{a_{n+1}}{a_n} = \lim_{n\to+\infty}\frac{2^{(n+1)+(-1)^{n+1}}}{2^{n+(-1)^n}} = \lim_{n\to+\infty}2^{1+(-1)^{n+1}-(-1)^n} = 2\lim_{n\to+\infty}2^{(-1)^{n+1}-(-1)^n}\quad\text{NON esiste!}$$
perché
$$2^{(-1)^{n+1}-(-1)^n} = \begin{cases}2^{(-1)-(1)} = \frac14 & \text{se } n \text{ è pari}\\ 2^{(1)-(-1)} = 4 & \text{se } n \text{ è dispari.}\end{cases}$$` },

{ t: "teo", s: "omessa", titolo: R`Criterio di condensazione di Cauchy`, testo: R`
Sia $(a_n)_{n\in\mathbb N}$ tale che:
- $a_n\ge0$ definitivamente;
- $a_{n+1}\le a_n$ definitivamente (decrescente definitivamente).

Allora le serie
$$\sum_{n=1}^{+\infty}a_n\qquad\text{e}\qquad\sum_{n=1}^{+\infty}2^n\cdot a_{2^n}$$
hanno lo stesso carattere e vale
$$\frac12\sum_{n=1}^{+\infty}2^na_{2^n}\le\sum_{n=1}^{+\infty}a_n\le\sum_{n=1}^{+\infty}2^n\cdot a_{2^n}.$$

**Dim.** Omessa (ma è un confronto).

(Nota, non negli appunti: la stima a destra è esatta se la seconda somma parte da $n = 0$, cioè include il termine $2^0a_1 = a_1$; per il carattere delle serie non cambia nulla.)` },

{ t: "es", titolo: R`Serie armonica generalizzata con la condensazione`, testo: R`
Sia $a_n = \dfrac1{n^\alpha}$ $\forall n\in\mathbb N$ con $\alpha\in(0,+\infty)$. Osserviamo che
- $a_n = \frac1{n^\alpha}>0$ $\forall n\in\mathbb N$;
- $a_{n+1} = \frac1{(n+1)^\alpha}<\frac1{n^\alpha} = a_n$ $\forall n\in\mathbb N$.

Quindi per condensazione trovo che
$$\sum_{n=1}^{+\infty}\frac1{n^\alpha}\qquad\text{e}\qquad\sum_{n=1}^{+\infty}2^n\cdot\frac1{(2^n)^\alpha}$$
hanno lo stesso carattere. Ma
$$\sum_{n=1}^{+\infty}2^n\cdot\frac1{(2^n)^\alpha} = \sum_{n=1}^{+\infty}\left(\frac2{2^\alpha}\right)^n = \sum_{n=1}^{+\infty}\left(2^{1-\alpha}\right)^n$$
converge se e solo se $2^{1-\alpha}<1$, cioè $\alpha>1$. Inoltre ricaviamo
$$\frac12\sum_{n=1}^{+\infty}\left(2^{1-\alpha}\right)^n\le\sum_{n=1}^{+\infty}\frac1{n^\alpha}\le\sum_{n=1}^{+\infty}\left(2^{1-\alpha}\right)^n = \frac1{1-2^{1-\alpha}}-1.$$

Notare anche che
- $\displaystyle\lim_{n\to+\infty}\frac{a_{n+1}}{a_n} = \lim_{n\to+\infty}\left(\frac n{n+1}\right)^\alpha = 1^\alpha = 1$: il **rapporto asintotico FALLISCE**;
- $\displaystyle\lim_{n\to+\infty}\sqrt[n]{a_n} = \lim_{n\to+\infty}\frac1{(\sqrt[n]n)^\alpha} = \frac1{1^\alpha} = 1$: la **radice asintotica FALLISCE**.` },

{ t: "es", titolo: R`$\sum\frac{(\log n)^\beta}{n^\alpha}$`, testo: R`
Sia $a_n = \dfrac{(\log(n))^\beta}{n^\alpha}>0$ $\forall n\ge2$, con $\alpha,\beta\in\mathbb R$. Osservo che:
- $\displaystyle\lim_{n\to+\infty}\sqrt[n]{a_n} = \lim_{n\to+\infty}\frac{\left(\sqrt[n]{\log(n)}\right)^\beta}{(\sqrt[n]n)^\alpha} = \frac{1^\beta}{1^\alpha} = 1$, dato che
$$\sqrt[n]{\log(n)} = e^{\log\left(\sqrt[n]{\log(n)}\right)} = e^{\frac{\log(\log(n))}n}\xrightarrow[n\to+\infty]{}e^0 = 1,$$
dato che (cambio di variabile $\log(x) = y\to+\infty$, $x = e^y$, e gerarchie)
$$\lim_{x\to+\infty}\frac{\log(\log(x))}x = \lim_{y\to+\infty}\frac{\log(y)}{e^y} = 0.$$
$\Rightarrow$ la **radice asintotica fallisce**.
- $\displaystyle\lim_{n\to+\infty}\frac{a_{n+1}}{a_n} = \lim_{n\to+\infty}\left(\frac{\log(n+1)}{\log(n)}\right)^\beta\cdot\left(\frac n{n+1}\right)^\alpha = 1^\beta\cdot1^\alpha = 1$ $\Rightarrow$ il **rapporto asintotico fallisce**.

Osservo che $a_n>0$ $\forall n\ge2$ e devo dimostrare che $a_{n+1}\le a_n$ definitivamente. Per dimostrarlo rigorosamente serve lo studio di funzione di $f(x) = \dfrac{(\log(x))^\beta}{x^\alpha}$ per $\alpha,\beta\ge0$ con $x\ge2$.

Osservo che:
- $\beta = 0\Rightarrow a_n = \frac1{n^\alpha}$ ed è già nota;
- $\alpha = 0\Rightarrow a_n = (\log(n))^\beta$, cioè $\sum_{n=2}^{+\infty}(\log(n))^\beta$. In questo caso:
  - $\beta\ge0\Rightarrow\sum_{n=2}^{+\infty}(\log(n))^\beta\ge\sum_{n=2}^{+\infty}(\log(2))^\beta = +\infty$;
  - $\beta<0\Rightarrow a_n = \dfrac1{(\log(n))^{-\beta}}$ con $-\beta>0$. Per gerarchia $\log(n)\le n^\varepsilon$ definitivamente $\forall\varepsilon\in(0,1)$, e quindi $\dfrac1{n^{-\beta\varepsilon}}\le\dfrac1{(\log(n))^{-\beta}}$, e quindi diverge per confronto con la serie armonica per $-\beta\varepsilon\le1$; quindi, visto che $\varepsilon\in(0,1)$ è arbitrario, $\forall\beta<0$ trovo che $\sum_{n=2}^{+\infty}(\log(n))^\beta = +\infty$.

**Nel caso generale**, data la monotonia, per Cauchy $\sum_{n=2}^{+\infty}a_n$ ha la stessa natura di $\sum_{n=1}^{+\infty}2^na_{2^n}$, ma
$$\sum_{n=1}^{+\infty}2^na_{2^n} = \sum_{n=1}^{+\infty}2^n\cdot\frac{(\log(2^n))^\beta}{(2^n)^\alpha} = \sum_{n=1}^{+\infty}(2^{1-\alpha})^n\,n^\beta(\log2)^\beta = (\log2)^\beta\,\boxed{\sum_{n=1}^{+\infty}(2^{1-\alpha})^n\cdot n^\beta}.$$
Ma a $b_n = (2^{1-\alpha})^n\cdot n^\beta$ posso applicare la radice asintotica:
$$\lim_{n\to+\infty}\sqrt[n]{b_n} = \lim_{n\to+\infty}2^{1-\alpha}\cdot(\sqrt[n]n)^\beta = 2^{1-\alpha}.$$
Quindi la nuova serie converge se $\alpha>1$ $\forall\beta\in\mathbb R$ e diverge a $+\infty$ se $\alpha<1$ $\forall\beta\in\mathbb R$. Il criterio è inconcludente per $\alpha = 1$, cioè rimane da analizzare il caso
$$\sum_{n=2}^{+\infty}\frac{(\log(n))^\beta}n\qquad\text{con }\beta\in\mathbb R.$$
Si può applicare il criterio del confronto (seguire la traccia vista a ricevimento).` },

{ t: "def", titolo: R`Serie a segno alterno (serie alternanti)`, testo: R`
Una **serie con termini a segno alterno** (**serie alternante**) è della forma
$$\sum_{n=1}^{+\infty}(-1)^n\cdot a_n$$
con $(a_n)_{n\in\mathbb N}$ tale che $a_n\ge0$ definitivamente.` },

{ t: "att", titolo: R`Alle serie alternanti non si applicano i criteri visti`, testo: R`
Per le serie alternanti **NON** si possono applicare i criteri di convergenza visti finora, perché la successione $\big((-1)^na_n\big)_{n\in\mathbb N}$ cambia di segno infinite volte.

Per questo caso abbiamo un criterio ad hoc!` },

{ t: "teo", s: "omessa", titolo: R`Criterio di Leibniz`, testo: R`
Sia $(a_n)_{n\in\mathbb N}$ tale che:
- $a_n\ge0$ definitivamente;
- $a_{n+1}\le a_n$ definitivamente (decrescente definitivamente);
- $\displaystyle\lim_{n\to+\infty}a_n = 0$ (infinitesima).

Allora la serie $\displaystyle\sum_{n=1}^{+\infty}(-1)^na_n$ è convergente.

**Dim.** Omessa.

Questo è l'**unico criterio** noto per le serie a termini alterni!` },

{ t: "att", titolo: R`Per le serie alternanti resta la convergenza assoluta`, testo: R`
La convergenza assoluta rimane:
$$\sum_{n=1}^{+\infty}a_n\ \text{converge, con } a_n\ge0\ \text{definitivamente}\ \Longrightarrow\ \sum_{n=1}^{+\infty}(-1)^na_n\ \text{converge!}$$` },

{ t: "es", titolo: R`$\sum\frac{(-1)^n}{n^\alpha}$ con $\alpha>0$`, testo: R`
Sia $a_n = \dfrac{(-1)^n}{n^\alpha}$ $\forall n\in\mathbb N$, $\alpha>0$.
- **Convergenza assoluta:** $|a_n| = \frac1{n^\alpha}\Rightarrow\sum_{n=1}^{+\infty}|a_n| = \sum_{n=1}^{+\infty}\frac1{n^\alpha}$ converge per $\alpha>1$ e diverge per $\alpha\le1$
$$\Longrightarrow\ \sum_{n=1}^{+\infty}(-1)^n\frac1{n^\alpha}\ \text{converge per } \alpha\in(1,+\infty).$$
- Poi rimane il caso $\alpha\in(0,1]$ (il caso $\alpha = 1$ è già fatto!), e posso applicare Leibniz: $\sum a_n = \sum(-1)^nb_n$ con $b_n = \frac1{n^\alpha}$ e
  - $b_n\ge0$ $\forall n\in\mathbb N$;
  - $\lim_{n\to+\infty}b_n = \lim_{n\to+\infty}\frac1{n^\alpha} = 0$;
  - $b_{n+1}\le b_n\iff\frac1{(n+1)^\alpha}\le\frac1{n^\alpha}$ $\forall n\in\mathbb N$.

  Le ipotesi del criterio sono soddisfatte e quindi converge anche per $\alpha\in(0,1]$.

**Ricapitolando:**
- $\alpha>1$: conv. assoluta $\Rightarrow$ conv. semplice;
- $\alpha\in(0,1]$: NO conv. assoluta, ma solo conv. semplice.` },

]});
