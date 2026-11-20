L({ data: "2026-11-19", n: 31, titolo: "Tipi di discontinuità, teorema di Weierstrass, teorema di Bolzano (bisezione)", voci: [

{ t: "def", titolo: R`Discontinuità eliminabile (caso I)`, testo: R`
$x_0\in\mathbb R$ si dice **punto di discontinuità eliminabile** di $f$ se
$$\exists\lim_{x\to x_0}f(x)\in\mathbb R.$$
In tal caso posso eliminare la discontinuità ponendo
$$\tilde f(x) = \begin{cases}f(x) & x\neq x_0\\ \displaystyle\lim_{x\to x_0}f(x) & x = x_0,\end{cases}$$
e quindi $\tilde f:\mathrm{dom}(f)\cup\lbrace x_0\rbrace\to\mathbb R$.` },

{ t: "def", titolo: R`Discontinuità di I e II specie (caso II)`, testo: R`
**Caso II:** $\nexists\lim_{x\to x_0}f(x)$.
- **II.A)** $\exists\lim_{x\to x_0^+}f(x) = \ell^+\in\mathbb R$, $\exists\lim_{x\to x_0^-}f(x) = \ell^-\in\mathbb R$, **ma** $\ell^+\neq\ell^-$. In questo caso diciamo che $x_0\in\mathbb R$ è una **discontinuità di I$^a$ specie** o di tipo **SALTO**, con salto
$$S = \ell^+-\ell^-\in\mathbb R.$$
- **II.B)** In tutti gli altri casi diciamo che $x_0\in\mathbb R$ è una **discontinuità di II$^a$ specie**.

Esempi di II$^a$ specie:
- $f(x) = \frac1x$ $\forall x\neq0$ (i limiti laterali in $0$ sono $\pm\infty$);
- $f(x) = \begin{cases}\sin\left(\frac1x\right) & x>0\\ 0 & x<0\end{cases}$: $\exists\lim_{x\to0^-}f(x) = 0$, ma $\nexists\lim_{x\to0^+}f(x)$.` },

{ t: "teo", s: "dim", diff: 3, titolo: R`Teorema di Weierstrass`, testo: R`
Siano $a,b\in\mathbb R$ con $a<b$ e $f\in\mathcal C^0([a,b])$. Allora $f$ ammette **massimo e minimo** su $[a,b]$, cioè $\exists x_{\mathrm{MIN}},x_{\mathrm{MAX}}\in[a,b]$ tali che
$$f(x_{\mathrm{MIN}}) = \min_{x\in[a,b]}f(x) = \inf_{x\in[a,b]}f(x),\qquad f(x_{\mathrm{MAX}}) = \max_{x\in[a,b]}f(x) = \sup_{x\in[a,b]}f(x).$$`, dim: R`
Facciamo il MIN, il MAX è analogo. Consideriamo
$$m = \inf_{x\in[a,b]}f(x) = \inf\lbrace f(x): x\in[a,b]\rbrace\in\mathbb R\cup\lbrace-\infty\rbrace.$$

**Supponiamo che $\boxed{m\in\mathbb R}$.** Per la caratterizzazione di inf, $\forall n\in\mathbb N$ $\exists x_n\in[a,b]$ tale che
$$f(x_n)<m+\frac1n.$$
Abbiamo costruito $(x_n)_{n\in\mathbb N}\subset[a,b]$. Quindi $(x_n)_{n\in\mathbb N}$ è limitata, e per il teorema di Bolzano–Weierstrass esiste $(x_{n_k})_{k\in\mathbb N}$ tale che
$$x_{n_k}\xrightarrow[k\to+\infty]{}\ell.$$
Siccome $a\le x_{n_k}\le b$ $\forall k\in\mathbb N$, per confronto ottengo che $\ell\in[a,b]$. Ma allora
$$f(\ell) = \lim_{k\to+\infty}f(x_{n_k})\qquad(*)$$
perché $f$ è continua su $[a,b]$. D'altra parte
$$m\le f(x_n)<m+\frac1n\qquad\forall n\in\mathbb N$$
e quindi per il teorema dei carabinieri
$$\exists\lim_{n\to+\infty}f(x_n) = m\in\mathbb R.\qquad(**)$$
Confrontando $(*)$ e $(**)$ e usando l'unicità del limite lungo $(x_{n_k})_{k\in\mathbb N}$ deduciamo che
$$m = \lim_{n\to+\infty}f(x_n) = f(\ell).$$
Ma allora $m$ è un minimo e $\ell = x_{\mathrm{MIN}}$.

**Supponiamo invece che $\boxed{m = -\infty}$.** Ripeto il ragionamento: $\forall n\in\mathbb N$ $\exists x_n\in[a,b]$ tale che
$$f(x_n)<-n.$$
Di nuovo $(x_n)_{n\in\mathbb N}\subseteq[a,b]$ è limitata e quindi trovo $(x_{n_k})_{k\in\mathbb N}$ tale che $x_{n_k}\to\ell\in[a,b]$. Ma allora, per continuità,
$$\mathbb R\ni f(\ell) = \lim_{k\to+\infty}f(x_{n_k})\qquad(\diamond)$$
e d'altra parte, per il teorema del singolo carabiniere,
$$\exists\lim_{n\to+\infty}f(x_n) = -\infty.\qquad(\diamond\diamond)$$
Ma lungo $(x_{n_k})_{k\in\mathbb N}$ sto violando l'unicità del limite, viste $(\diamond)$ e $(\diamond\diamond)$. Questo è assurdo! Dunque si deve avere $m\neq-\infty$. $\blacksquare$` },

{ t: "att", titolo: R`Weierstrass: NON possiamo togliere alcuna ipotesi`, testo: R`
**IMPORTANTE!**
- **Intervallo NON chiuso:** $f(x) = \log(x)$ su $(0,1]$ (limitato), $f\in\mathcal C^0((0,1])$: **NO MIN!**
- **Intervallo NON limitato:** $f(x) = \log(x)$ su $[1,+\infty)$ (chiuso), $f\in\mathcal C^0([1,+\infty))$: **NO MAX!**
- **$f$ NON continua:** $f(x) = \begin{cases}\tan(x) & x\in[0,\frac\pi2)\\ 18 & x = \frac\pi2\end{cases}$, $f:[0,\frac\pi2]\to\mathbb R$ (chiuso e limitato) ma $f\notin\mathcal C^0$: **NO MAX** ($\tan x\to+\infty$ per $x\to\frac\pi2^-$).` },

{ t: "teo", s: "dim", diff: 3, titolo: R`Teorema di Bolzano (degli zeri)`, testo: R`
Siano $a,b\in\mathbb R$, $a<b$, e $f\in\mathcal C^0([a,b])$. Se $f(a)\cdot f(b)<0$ allora esiste $c\in(a,b)$ tale che $f(c) = 0$.`, dim: R`
**Metodo di bisezione.** Possiamo assumere che $f(a)<0<f(b)$.

**Passo 1:** definiamo
$$a_0 = a<c_0 = \frac{a+b}2<b = b_0.$$
Ho tre casi:
1. $f(c_0) = 0\Rightarrow$ ho finito;
2. $f(c_0)>0\Rightarrow a_1 = a_0\ (=a)$ e $f(a_1)<0$, $b_1 = c_0$ e $f(b_1)>0$;
3. $f(c_0)<0\Rightarrow a_1 = c_0$ e $f(a_1)<0$, $b_1 = b_0\ (=b)$ e $f(b_1)>0$.

**Passo 2:** definiamo $a_1<c_1 = \frac{a_1+b_1}2<b_1$. Ho tre casi:
1. $f(c_1) = 0\Rightarrow$ ho finito;
2. $f(c_1)>0\Rightarrow a_2 = a_1$ e $f(a_2)<0$, $b_2 = c_1$ e $f(b_2)>0$;
3. $f(c_1)<0\Rightarrow a_2 = c_1$ e $f(a_2)<0$, $b_2 = b_1$ e $f(b_2)>0$.

Procedo con questo metodo di bisezione.

**Passo $n\in\mathbb N$:** avevo $f(a_n)<0$, $f(b_n)>0$, quindi definisco $a_n<c_n = \frac{a_n+b_n}2<b_n$. Ho tre casi:
1. $f(c_n) = 0\Rightarrow$ ho finito;
2. $f(c_n)>0\Rightarrow a_{n+1} = a_n$ e $f(a_{n+1})<0$, $b_{n+1} = c_n$ e $f(b_{n+1})>0$;
3. $f(c_n)<0\Rightarrow a_{n+1} = c_n$ e $f(a_{n+1})<0$, $b_{n+1} = b_n$ e $f(b_{n+1})>0$.

Se non ho terminato il processo in numero finito di passi, allora ho costruito due successioni $(a_n)_{n\in\mathbb N_0}$ e $(b_n)_{n\in\mathbb N_0}$ tali che:
- (i) $a_{n+1}\ge a_n$ $\forall n\in\mathbb N_0$ (MONOTONA CRESCENTE!);
- (ii) $f(a_n)<0$ $\forall n\in\mathbb N_0$;
- (iii) $b_{n+1}\le b_n$ $\forall n\in\mathbb N_0$ (MONOTONA DECRESCENTE!);
- (iv) $f(b_n)>0$ $\forall n\in\mathbb N_0$.

Inoltre ho che:
- (v) $a_n<b_n$ $\forall n\in\mathbb N_0$;
- (vi) $|a_n-b_n| = (b_n-a_n) = \dfrac{|a-b|}{2^n}$ $\forall n\in\mathbb N_0$.

Abbiamo $(a_n)_{n\in\mathbb N_0},(b_n)_{n\in\mathbb N_0}\subseteq[a,b]$ e quindi sono limitate. Quindi per monotonia
$$a_n\xrightarrow[n\to+\infty]{}\hat a\in[a,b],\qquad b_n\xrightarrow[n\to+\infty]{}\hat b\in[a,b],$$
e da (v) $a_n<b_n$ $\forall n$ segue $\hat a\le\hat b$. Inoltre, dalla (vi), abbiamo che
$$b_n = a_n+\frac{|a-b|}{2^n}\quad\forall n\in\mathbb N_0\qquad\xrightarrow[n\to+\infty]{}\qquad\hat b = \hat a+0.$$
Ma allora $c = \hat a = \hat b$ e affermo che $f(c) = 0$. Infatti:
- $f(c) = f(\hat a)\overset{\text{continuità}}= \lim_{n\to+\infty}f(a_n)\le0$ (per (ii) e confronto), con $\hat a = \lim a_n$;
- $f(c) = f(\hat b)\overset{\text{continuità}}= \lim_{n\to+\infty}f(b_n)\ge0$ (per (iv) e confronto), con $\hat b = \lim b_n$;

da cui troviamo $0\le f(c)\le0$, cioè $f(c) = 0$. (E $c\in(a,b)$ perché $f(a)<0$ e $f(b)>0$, quindi $c\neq a,b$.) $\blacksquare$` },

{ t: "oss", titolo: R`Bisezione come metodo numerico`, testo: R`
Il metodo di bisezione è in effetti usato come **metodo numerico** per determinare le soluzioni approssimate di un'equazione
$$f(x) = 0\qquad\text{con } f\text{ continua}.$$
Basta partire da due punti $a<b$ vicini tali che $f(a)\cdot f(b)<0$.

**Attenzione!** NON è detto che ci sia solo 1 zero!` },

{ t: "es", titolo: R`Una soluzione di $\sin(x) = \log(x)$ in $[\frac\pi2,\pi]$`, testo: R`
Trovare una soluzione di $\sin(x) = \log(x)$ con $x\in\left[\frac\pi2,\pi\right]$.

Dobbiamo usare il teorema di Bolzano: $f(x) = \sin(x)-\log(x)\in\mathcal C^0\left(\left[\frac\pi2,\pi\right]\right)$. Osservare che
- $f\left(\frac\pi2\right) = \sin\left(\frac\pi2\right)-\log\left(\frac\pi2\right) = 1-\log\left(\frac\pi2\right)>0$;
- $f(\pi) = \sin(\pi)-\log(\pi) = 0-\log(\pi)<0$.

Per il teorema di Bolzano esiste $c\in\left(\frac\pi2,\pi\right)$ tale che $f(c) = 0$, e posso determinarlo approssimativamente tramite bisezione.

Per dire che lo zero è **unico** si guarda la monotonia:
- $\sin(x)$ è strettamente decrescente su $\left[\frac\pi2,\pi\right]$;
- $\log(x)$ è strettamente crescente su $\left[\frac\pi2,\pi\right]$.

Quindi $f$ è strettamente decrescente su $\left[\frac\pi2,\pi\right]$ e pertanto lo zero **deve** essere unico.` },

]});
