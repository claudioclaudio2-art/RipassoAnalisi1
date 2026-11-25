L({ data: "2026-11-24", n: 34, titolo: "Derivabile ⇒ continua, derivate delle funzioni elementari, derivate destra e sinistra, punti di non derivabilità", voci: [

{ t: "teo", s: "dim", diff: 1, titolo: R`Derivabile ⇒ continua`, testo: R`
Sia $\emptyset\neq I\subseteq\mathbb R$ intervallo. Se $f:I\to\mathbb R$ è derivabile in $x_0\in I$, allora è continua in $x_0$.

Quindi, ricapitolando:
$$\boxed{\ \text{DERIVABILE}\ \Longrightarrow\ \text{CONTINUA},\qquad\text{CONTINUA}\ \not\Longrightarrow\ \text{DERIVABILE}\ }$$
(controesempio: $|x|$ in $0$).`, dim: R`
Possiamo assumere che $x_0\in\mathrm{acc}\,I$. Ma allora, dal teorema della retta tangente (dato che $f$ è derivabile in $x_0$),
$$\lim_{x\to x_0}f(x) = \lim_{x\to x_0}\Big(f(x_0)+f'(x_0)(x-x_0)+o(x-x_0)\Big)$$
$$= f(x_0)+f'(x_0)\cdot\underbrace{\lim_{x\to x_0}(x-x_0)}_{=0}+\underbrace{\lim_{x\to x_0}o(x-x_0)}_{=0}$$
$$= f(x_0)+f'(x_0)\cdot0+0 = f(x_0),$$
e quindi $f$ è continua in $x_0$. $\blacksquare$` },

{ t: "prop", s: "dim", diff: 1, titolo: R`Derivata della costante e di $x^n$`, testo: R`
1. $f(x) = c$ $\forall x\in\mathbb R$:
$$\frac d{dx}c\,\Big|_{x=x_0} = 0\qquad\forall x_0\in\mathbb R,\ \forall c\in\mathbb R.$$
2. $f(x) = x^n$ $\forall x\in\mathbb R$, $n\in\mathbb N$:
$$\frac d{dx}x^n\,\Big|_{x=x_0} = n\,x_0^{n-1}\qquad\forall x_0\in\mathbb R,\ \forall n\in\mathbb N.$$`, dim: R`
**1.**
$$f'(x_0) = \lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0} = \lim_{x\to x_0}\frac{c-c}{x-x_0} = \lim_{x\to x_0}\frac0{x-x_0} = \lim_{x\to x_0}0 = 0.$$

**2.**
$$f'(x_0) = \lim_{x\to x_0}\frac{x^n-x_0^n}{x-x_0} = \lim_{h\to0}\frac{(x_0+h)^n-x_0^n}h.$$
Per il teorema del binomio:
$$(x_0+h)^n = \sum_{k=0}^n\binom nk x_0^kh^{n-k} = \sum_{k=0}^{n-1}\binom nkx_0^kh^{n-k}+\underbrace{\binom nn}_{=1}x_0^n\underbrace{h^{n-n}}_{=1} = \sum_{k=0}^{n-1}\binom nkx_0^kh^{n-k}+x_0^n.$$
Ma allora
$$\lim_{h\to0}\frac{(x_0+h)^n-x_0^n}h = \lim_{h\to0}\frac1h\sum_{k=0}^{n-1}\binom nkx_0^kh^{n-k} = \lim_{h\to0}\sum_{k=0}^{n-1}\binom nkx_0^kh^{n-k-1} = \sum_{k=0}^{n-1}\binom nkx_0^k\left[\lim_{h\to0}h^{n-k-1}\right].$$
Ora $\boxed{\lim_{h\to0}h^{n-k-1} = 0}$ per $n-k-1>0$, ma $n-k-1>0\iff n-1>k\iff k = 0,1,2,\dots,n-2$. Quindi sopravvive solo $k = n-1$:
$$\lim_{h\to0}\frac{(x_0+h)^n-x_0^n}h = \binom n{n-1}x_0^{n-1}\Big[\lim_{h\to0}\underbrace{h^0}_{=1}\Big] = \binom n{n-1}x_0^{n-1},$$
ma $\displaystyle\binom n{n-1} = \frac{n!}{(n-1)!\,(n-(n-1))!} = \frac n{1!} = n$. Deduco che $\frac d{dx}x^n\big|_{x=x_0} = n\,x_0^{n-1}$. $\blacksquare$` },

{ t: "es", s: "casa", diff: 2, titolo: R`Derivata di $x^\alpha$ con $\alpha\in\mathbb R$`, testo: R`
Sia $f(x) = x^\alpha$ con $\alpha\in\mathbb R$, $x_0\in\mathbb R$, $x_0>0$. Si può dimostrare (esercizio) che
$$\boxed{\ \frac d{dx}x^\alpha\,\Big|_{x=x_0} = \alpha\,x_0^{\alpha-1}.\ }$$`, dim: R`
(Soluzione aggiunta, non negli appunti.) Per $h\to0$, raccogliendo $x_0^\alpha$:
$$\frac{(x_0+h)^\alpha-x_0^\alpha}h = x_0^\alpha\cdot\frac{\left(1+\frac h{x_0}\right)^\alpha-1}h = x_0^{\alpha-1}\cdot\frac{\left(1+t\right)^\alpha-1}t\qquad\text{con } t = \frac h{x_0}\to0.$$
Per $\alpha\neq0$ (per $\alpha = 0$ la funzione è costante):
$$\frac{(1+t)^\alpha-1}t = \frac{e^{\alpha\log(1+t)}-1}{\alpha\log(1+t)}\cdot\alpha\,\frac{\log(1+t)}t\xrightarrow[t\to0]{}1\cdot\alpha\cdot1 = \alpha,$$
usando i limiti notevoli di $e^y$ (con $y = \alpha\log(1+t)\to0$) e di $\log(1+t)$. Quindi $f'(x_0) = \alpha\,x_0^{\alpha-1}$. $\blacksquare$` },

{ t: "prop", s: "dim", diff: 1, titolo: R`Derivata di $e^x$ e di $a^x$`, testo: R`
4. $\displaystyle\frac d{dx}e^x\,\Big|_{x=x_0} = e^{x_0}\qquad\forall x_0\in\mathbb R$;
5. $\displaystyle\frac d{dx}a^x\,\Big|_{x=x_0} = a^{x_0}\log(a)\qquad\forall x_0\in\mathbb R,\ \forall a>0$ ($a\neq1$).`, dim: R`
**4.** $f(x) = e^x$ $\forall x\in\mathbb R$:
$$f'(x_0) = \lim_{h\to0}\frac{e^{x_0+h}-e^{x_0}}h = \lim_{h\to0}e^{x_0}\frac{e^h-1}h = e^{x_0}\lim_{h\to0}\frac{e^h-1}h = e^{x_0}\cdot1 = e^{x_0}.$$

**5.** $f(x) = a^x$ $\forall x\in\mathbb R$, $a>0$, $a\neq1$:
$$f'(x_0) = \lim_{h\to0}\frac{a^{x_0+h}-a^{x_0}}h = a^{x_0}\lim_{h\to0}\frac{a^h-1}h = a^{x_0}\log(a)\lim_{h\to0}\frac{e^{h\log(a)}-1}{h\log(a)}$$
$$\overset{\text{CDV}}= a^{x_0}\log(a)\lim_{t\to0}\frac{e^t-1}t = a^{x_0}\log(a),$$
con il cambio di variabile $t = h\log(a)\to0$. $\blacksquare$` },

{ t: "prop", s: "dim", diff: 1, titolo: R`Derivata di $\log(x)$`, testo: R`
6. $\displaystyle\frac d{dx}\log(x)\,\Big|_{x=x_0} = \frac1{x_0}\qquad\forall x_0>0.$`, dim: R`
$f(x) = \log(x)$ $\forall x>0$:
$$f'(x_0) = \lim_{h\to0}\frac{\log(x_0+h)-\log(x_0)}h = \lim_{h\to0}\frac1h\log\left(\frac{x_0+h}{x_0}\right) = \lim_{h\to0}\frac{\log\left(1+\frac h{x_0}\right)}{\frac h{x_0}}\cdot\frac1{x_0}$$
$$\overset{\text{CDV}}= \frac1{x_0}\lim_{t\to0}\frac{\log(1+t)}t = \frac1{x_0}\cdot1 = \frac1{x_0}\qquad\forall x_0>0,$$
con il cambio di variabile $t = \frac h{x_0}\to0$. $\blacksquare$` },

{ t: "prop", s: "dim", diff: 2, titolo: R`Derivata di $\sin(x)$ e $\cos(x)$`, testo: R`
7. $\displaystyle\frac d{dx}\sin(x)\,\Big|_{x=x_0} = \cos(x_0)\qquad\forall x_0\in\mathbb R$;
8. $\displaystyle\frac d{dx}\cos(x)\,\Big|_{x=x_0} = -\sin(x_0)\qquad\forall x_0\in\mathbb R$.`, dim: R`
**7.** $f(x) = \sin(x)$ $\forall x\in\mathbb R$. Abbiamo (formule di addizione, "prostaferesi"):
$$f'(x_0) = \lim_{h\to0}\frac{\sin(x_0+h)-\sin(x_0)}h = \lim_{h\to0}\frac{\cos(x_0)\sin(h)+\cos(h)\sin(x_0)-\sin(x_0)}h$$
$$= \cos(x_0)\cdot\lim_{h\to0}\frac{\sin(h)}h+\sin(x_0)\lim_{h\to0}\frac{\cos(h)-1}{\frac{h^2}2}\cdot\frac h2$$
$$= \cos(x_0)\cdot1+\sin(x_0)\cdot(-1)\cdot0 = \cos(x_0).$$

**8.** Analogamente (aggiunta: $\cos(x_0+h)-\cos(x_0) = \cos(x_0)(\cos h-1)-\sin(x_0)\sin h$, e si conclude con gli stessi limiti notevoli). $\blacksquare$` },

{ t: "prop", s: "dim", diff: 1, titolo: R`Derivata di $|x|$ e funzione segno`, testo: R`
9. $f(x) = |x|$ $\forall x\in\mathbb R$, $x_0\in\mathbb R\setminus\lbrace0\rbrace$:
$$\frac d{dx}|x|\,\Big|_{x=x_0} = \begin{cases}1 & x_0>0\\ -1 & x_0<0\end{cases}\qquad\forall x_0\neq0.$$
Questa funzione è la funzione **SEGNO**: $\mathrm{sgn}:\mathbb R\setminus\lbrace0\rbrace\to\lbrace-1,1\rbrace$,
$$\mathrm{sgn}(x) = \begin{cases}1 & x>0\\ -1 & x<0.\end{cases}$$
Quindi possiamo riscrivere
$$\boxed{\ \frac d{dx}|x|\,\Big|_{x=x_0} = \mathrm{sgn}(x_0)\qquad\forall x_0\neq0.\ }$$
(In alcuni testi si usa definire $\mathrm{sgn}(0) = 0$, ma questo **NON** significa che $\frac d{dx}|x|\big|_{x=0} = 0$!!)`, dim: R`
- $x_0>0\Rightarrow f'(x_0) = \lim_{x\to x_0}\frac{|x|-|x_0|}{x-x_0} = \lim_{x\to x_0}\frac{x-x_0}{x-x_0} = 1$, perché $x_0>0$ e quindi $x>0$ definitivamente;
- $x_0<0\Rightarrow f'(x_0) = \lim_{x\to x_0}\frac{|x|-|x_0|}{x-x_0} = \lim_{x\to x_0}\frac{(-x)-(-x_0)}{x-x_0} = -1$. $\blacksquare$` },

{ t: "def", titolo: R`Derivate destra e sinistra`, testo: R`
Sia $\emptyset\neq I\subseteq\mathbb R$ un intervallo, $x_0\in I$ e $f:I\to\mathbb R$. Supponiamo che $x_0$ sia un punto di accumulazione destro e sinistro di $I$.

Se esiste finito il limite
$$\exists\lim_{x\to x_0^+}\frac{f(x)-f(x_0)}{x-x_0} = \lim_{h\to0^+}\frac{f(x_0+h)-f(x_0)}h\in\mathbb R,$$
allora tale limite è detto **derivata destra** di $f(x)$ in $x_0$ e si indica
$$\boxed{\ f'_+(x_0) = \lim_{x\to x_0^+}\frac{f(x)-f(x_0)}{x-x_0} = \lim_{h\to0^+}\frac{f(x_0+h)-f(x_0)}h.\ }$$
Analogamente, se esiste finito il limite per $x\to x_0^-$ (cioè $h\to0^-$), tale limite è detto **derivata sinistra** di $f(x)$ in $x_0$ e si indica
$$\boxed{\ f'_-(x_0) = \lim_{x\to x_0^-}\frac{f(x)-f(x_0)}{x-x_0} = \lim_{h\to0^-}\frac{f(x_0+h)-f(x_0)}h.\ }$$

Esempio: $f(x) = |x|$, $x_0 = 0$. Sappiamo che $\nexists f'(0)$, ma $f'_+(0) = 1$ e $f'_-(0) = -1$.` },

{ t: "prop", s: "dim", diff: 1, titolo: R`Relazione tra $f'$ e $f'_+$, $f'_-$`, testo: R`
Vale la seguente equivalenza:
$$f\text{ è derivabile in } x_0\iff\begin{cases}1)\ f\text{ è derivabile in } x_0 \text{ a DESTRA}\\ 2)\ f\text{ è derivabile in } x_0\text{ a SINISTRA}\\ 3)\ f'_+(x_0) = f'_-(x_0).\end{cases}$$`, dim: R`
È una conseguenza dell'equivalenza
$$\lim_{x\to x_0}\text{ esiste}\iff\begin{cases}1)\ \lim_{x\to x_0^+}\text{ esiste}\\ 2)\ \lim_{x\to x_0^-}\text{ esiste}\\ 3)\ \lim_{x\to x_0^+} = \lim_{x\to x_0^-}\end{cases}$$
applicata alla funzione $g(x) = \dfrac{f(x)-f(x_0)}{x-x_0}$ per $x\neq x_0$. $\blacksquare$` },

{ t: "def", titolo: R`Punti di non derivabilità: flesso verticale, punto angoloso, cuspide`, testo: R`
Sia $f:(a,b)\to\mathbb R$, $a,b\in\mathbb R$ con $a<b$, $x_0\in(a,b)$. Assumiamo che $f$ sia **CONTINUA** in $x_0$.

**CASO 1.** Se esistono
$$f'_+(x_0) = f'_-(x_0) = +\infty\qquad\text{opp.}\qquad f'_+(x_0) = f'_-(x_0) = -\infty,$$
allora diciamo che $f$ ha un **FLESSO VERTICALE** in $x_0$ (la tangente è la retta verticale $x = x_0$).

**CASO 2.** Se esistono $f'_+(x_0)$ e $f'_-(x_0)$ e **almeno una** delle due (eventualmente entrambe) è finita, ma non coincidono, allora diciamo che $f$ ha un **PUNTO ANGOLOSO** in $x_0$ (opp. $x_0$ è un punto angoloso per $f$).

**CASO 3.** Se esistono
$$f'_+(x_0) = +\infty\ \text{e}\ f'_-(x_0) = -\infty\qquad\text{oppure}\qquad f'_+(x_0) = -\infty\ \text{e}\ f'_-(x_0) = +\infty,$$
allora diciamo che $f$ ha una **CUSPIDE** in $x_0$ (opp. $x_0$ è un punto di cuspide per $f$).

(Qui $f'_\pm(x_0) = \pm\infty$ indica che il limite del rapporto incrementale destro/sinistro vale $\pm\infty$.)` },

{ t: "es", titolo: R`Esempi: punti angolosi e cuspide`, testo: R`
**Punti angolosi (caso 2):**
- $f(x) = |x|$, $x_0 = 0$: $f'_-(0) = -1$, $f'_+(0) = 1$;
- $f(x) = \begin{cases}\sqrt x & x>0\\ x^2 & x\le0\end{cases}$, $x_0 = 0$: $f'_-(0) = 0$, $f'_+(0) = +\infty$.

**Cuspide (caso 3):**
- $f(x) = \sqrt{|x|}$ $\forall x\in\mathbb R$, $x_0 = 0$: $f'_-(0) = -\infty$, $f'_+(0) = +\infty$.` },

{ t: "oss", titolo: R`Come controllare la derivabilità in $x_0$`, testo: R`
- Riesco a calcolare $f'(x_0)$ tramite la definizione;
- oppure calcolo $f'_+(x_0)$ e $f'_-(x_0)$:
  - (a) $f'_+(x_0) = f'_-(x_0)\in\mathbb R\Rightarrow f$ è derivabile in $x_0$;
  - (b) altrimenti classifico il tipo di non derivabilità come:
    1. $f'_+(x_0) = f'_-(x_0)\in\lbrace\pm\infty\rbrace\Rightarrow$ **FLESSO VERTICALE**;
    2. $\exists f'_+(x_0)\neq f'_-(x_0)$, ma (almeno una) finite $\Rightarrow$ **ANGOLOSO**;
    3. $f'_+(x_0) = \pm\infty$, $f'_-(x_0) = \mp\infty\Rightarrow$ **CUSPIDE**.` },

]});
