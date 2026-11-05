L({ data: "2026-11-05", n: 23, titolo: "Teoremi sui limiti di successioni, progressione geometrica, sottosuccessioni, caratterizzazione sequenziale", voci: [

{ t: "teo", titolo: R`Teoremi sui limiti di successioni`, testo: R`
Siccome le successioni sono funzioni, valgono (con $n\to+\infty$) tutti i teoremi già visti per i limiti di funzioni:
1. **Unicità:** se $\exists\lim_{n\to+\infty}a_n$, allora è unico.
2. **Permanenza del segno:** se $a_n\to\ell>0$, allora $a_n>0$ definitivamente.
3. **Confronto:** se $a_n\le b_n$ definitivamente, $a_n\to\ell$ e $b_n\to\hat\ell$, allora $\ell\le\hat\ell$.
4. **Due carabinieri:** se $a_n\le b_n\le c_n$ definitivamente e $a_n\to\ell$, $c_n\to\ell$, allora anche $b_n\to\ell$. Analogo il teorema del **singolo carabiniere** ($a_n\le b_n$ e $a_n\to+\infty\Rightarrow b_n\to+\infty$).
5. **Algebra dei limiti finiti:** se $a_n\to\ell$ e $b_n\to\hat\ell$ con $\ell,\hat\ell\in\mathbb R$, allora
$$\alpha a_n+\beta b_n\to\alpha\ell+\beta\hat\ell\ \ \forall\alpha,\beta\in\mathbb R,\qquad a_n\cdot b_n\to\ell\cdot\hat\ell,\qquad\frac{a_n}{b_n}\to\frac\ell{\hat\ell}\ \text{ se }\hat\ell\neq0.$$
Analogo il teorema per l'**algebra dei limiti infiniti**.` },

{ t: "teo", s: "dim", diff: 1, titolo: R`Una successione convergente è limitata`, testo: R`
Se $a_n\to\ell\in\mathbb R$, allora $(a_n)$ è limitata.`, dim: R`
Per definizione di limite con $\varepsilon = 1$: esiste $N\in\mathbb N$ tale che $|a_n-\ell|<1$ per ogni $n\ge N$, quindi
$$|a_n| = |a_n-\ell+\ell|\le|a_n-\ell|+|\ell|<1+|\ell|\qquad\forall n\ge N.$$
Restano i termini "scartati" $a_0,a_1,\dots,a_{N-1}$, che sono un numero **finito**. Definisco
$$M = \max\lbrace|a_0|,|a_1|,\dots,|a_{N-1}|,\ 1+|\ell|\rbrace.$$
Allora $|a_n|\le M$ per ogni $n\in\mathbb N$: se $n\le N-1$ perché $|a_n|$ è uno dei termini del massimo, se $n\ge N$ perché $|a_n|<1+|\ell|\le M$. Quindi $(a_n)$ è limitata. $\blacksquare$

**Oss.** Per le funzioni si otteneva solo "limitata **definitivamente**" (limitatezza locale); per le successioni si riesce a togliere il "definitivamente" perché i termini prima di $N$ sono finiti.` },

{ t: "teo", s: "dim", diff: 2, titolo: R`Progressione geometrica: $\lim r^n$`, testo: R`
Fissato $r\in\mathbb R$ (la **ragione**), la successione $a_n = r^n$, $n\in\mathbb N$, si chiama **progressione geometrica** di ragione $r$ e verifica
$$\lim_{n\to+\infty}r^n = \begin{cases}+\infty & r>1\\ 1 & r=1\\ 0 & |r|<1\\ \nexists & r\le-1.\end{cases}$$`, dim: R`
Per casi.

**$r>0$.** Considero la funzione $f(x) = r^x = e^{x\log r}$ per $x\ge0$. Ricordo che
$$\lim_{x\to+\infty}e^{\alpha x} = \begin{cases}+\infty&\alpha>0\\0&\alpha<0.\end{cases}$$
Con $\alpha = \log r$: se $r>1$ allora $\log r>0$ e $f(x)\to+\infty$; se $0<r<1$ allora $\log r<0$ e $f(x)\to0$. Restringendo $f$ a $\mathbb N$ (cioè $a_n = f(n)$) si ottiene lo stesso limite. Se $r = 1$, $a_n = 1$ per ogni $n$.

**$r = 0$:** $a_n = 0$ per $n\ge1$, quindi $a_n\to0$.

**$-1<r<0$:** $|a_n| = |r|^n$ con $|r|\in(0,1)$, quindi $|a_n|\to0$ per il caso precedente, e dunque $a_n\to0$.

**$r = -1$:** $a_n = (-1)^n$ è irregolare (esercizio del 3/11).

**$r<-1$:** $|a_n| = |r|^n\to+\infty$ per il caso $|r|>1$.
- Se $\lim a_n = \ell\in\mathbb R$, la successione sarebbe limitata (teorema precedente), contraddizione con $|a_n|\to+\infty$. Quindi se il limite esiste è $\ell = \pm\infty$.
- Però $r^n>0$ per $n$ pari e $r^n<0$ per $n$ dispari. Ragionando come per $r = -1$ si vede che la definizione di limite non è verificata né per $+\infty$ (i termini dispari sono negativi) né per $-\infty$ (i pari sono positivi).

Il limite quindi non può esistere. $\blacksquare$` },

{ t: "def", titolo: R`Sottosuccessione (estratta)`, testo: R`
Data una successione $(a_n)_{n\in\mathbb N}$ e una funzione $\varphi:\mathbb N\to\mathbb N$ **strettamente crescente**, si dice **sottosuccessione** (o **estratta**) di $(a_n)$ tramite $\varphi$ la successione
$$\big(a_{\varphi(k)}\big)_{k\in\mathbb N}.$$
**Oss.** Una sottosuccessione è la composizione $a\circ\varphi:\mathbb N\to\mathbb R$.` },

{ t: "es", titolo: R`Le estratte pari e dispari di $(-1)^n$`, testo: R`
Sia $a_n = (-1)^n$.
- Con $\varphi(k) = 2k$: $a_{\varphi(k)} = (-1)^{2k} = 1$ per ogni $k\in\mathbb N$;
- con $\psi(k) = 2k+1$: $a_{\psi(k)} = (-1)^{2k+1} = -1$ per ogni $k\in\mathbb N$.

Ho trovato le due sottosuccessioni sui **pari** e sui **dispari**.

**Oss.** L'indice nelle successioni è **muto**, esattamente come la variabile nelle funzioni: $(a_{2k})_k$ e $(a_{2n})_n$ sono la stessa successione.` },

{ t: "prop", s: "omessa", diff: 2, titolo: R`Limite e sottosuccessioni`, testo: R`
Una successione $(a_n)_{n\in\mathbb N}$ ha limite $\ell\in\mathbb R\cup\lbrace\pm\infty\rbrace$ **se e solo se** tutte le sue sottosuccessioni hanno lo stesso limite $\ell$.

(Dimostrazione omessa: vedere il foglio settimanale.)`, dim: R`
**$\Leftarrow$** è immediato: $(a_n)$ è sottosuccessione di se stessa con $\varphi(k) = k$.

**$\Rightarrow$** Prima osservo che $\varphi(k)\ge k$ per ogni $k$ (induzione: $\varphi(0)\ge0$; se $\varphi(k)\ge k$ allora $\varphi(k+1)>\varphi(k)\ge k$, quindi $\varphi(k+1)\ge k+1$).

Sia $U$ un intorno di $\ell$. Esiste $N$ tale che $a_n\in U$ per ogni $n\ge N$. Allora per ogni $k\ge N$ si ha $\varphi(k)\ge k\ge N$, quindi $a_{\varphi(k)}\in U$. Cioè $a_{\varphi(k)}\to\ell$. $\blacksquare$` },

{ t: "cor", titolo: R`Due estratte con limiti diversi ⇒ irregolare`, testo: R`
Se $(a_n)$ ammette due sottosuccessioni convergenti a due limiti **diversi**, allora $(a_n)$ è **irregolare**.

Es. $(-1)^n$: l'estratta dei pari tende a $1$, quella dei dispari a $-1$.` },

{ t: "att", titolo: R`Limitata non implica convergente`, testo: R`
Sappiamo che $a_n\to\ell\in\mathbb R\Rightarrow(a_n)$ è limitata. Il **viceversa è falso**: $a_n = (-1)^n$ è limitata ($|a_n| = 1$) ma non converge.` },

{ t: "teo", s: "omessa", titolo: R`Teorema di Bolzano–Weierstrass`, testo: R`
Se $(a_n)$ è **limitata**, allora ammette una **sottosuccessione convergente**.

Es. $(-1)^n$ non converge, ma l'estratta dei pari converge a $1$. (Dimostrazione omessa.)` },

{ t: "teo", s: "omessa", titolo: R`Caratterizzazione sequenziale del limite`, testo: R`
Siano $A\subseteq\mathbb R$ non vuoto, $f:A\to\mathbb R$, $x_0$ di accumulazione per $A$. Sono equivalenti:
- **(A)** $\displaystyle\lim_{x\to x_0}f(x) = \ell\in\mathbb R\cup\lbrace\pm\infty\rbrace$;
- **(B)** $\displaystyle\lim_{n\to+\infty}f(a_n) = \ell$ **per ogni** successione $(a_n)_{n\in\mathbb N}\subseteq A$ tale che $a_n\neq x_0$ definitivamente per $n\to+\infty$ e $\lim_{n\to+\infty}a_n = x_0$.

(Dimostrazione omessa.)` },

{ t: "oss", titolo: R`Come usarla per dire che un limite NON esiste`, testo: R`
La caratterizzazione sequenziale è molto utile per mostrare che una funzione **non ha limite** per $x\to x_0$: basta trovare due successioni $(a_n)$, $(b_n)$ in $A$ tali che
- $a_n\neq x_0$ e $b_n\neq x_0$ definitivamente;
- $a_n\to x_0$ e $b_n\to x_0$;
- $\displaystyle\lim_{n\to+\infty}f(a_n)\neq\lim_{n\to+\infty}f(b_n)$.

Se il limite di $f$ esistesse, per (B) i due limiti dovrebbero coincidere.` },

{ t: "es", titolo: R`$\nexists\lim_{x\to+\infty}\sin x$`, testo: R`
Sia $f(x) = \sin x$, $x_0 = +\infty$. Considero
$$a_n = \frac\pi2+2n\pi\to+\infty,\qquad b_n = n\pi\to+\infty.$$
Allora
$$\lim_{n\to+\infty}f(a_n) = \lim_{n\to+\infty}\sin\!\left(\frac\pi2+2n\pi\right) = 1,\qquad\lim_{n\to+\infty}f(b_n) = \lim_{n\to+\infty}\sin(n\pi) = 0.$$
Siccome i due limiti sono diversi, la caratterizzazione sequenziale implica che $\nexists\lim_{x\to+\infty}\sin x$.` },

{ t: "es", s: "casa", diff: 1, titolo: R`Esercizi: limiti che non esistono`, testo: R`
1. Provare che $\nexists\lim_{x\to+\infty}\sin(x^2)$.
2. Provare che $\nexists\lim_{x\to0}\frac1x$ (ad esempio con $a_n = \frac1n$, $b_n = -\frac1n$).`, dim: R`
1. Prendo $a_n = \sqrt{\frac\pi2+2n\pi}$ e $b_n = \sqrt{n\pi}$: entrambe tendono a $+\infty$, e $\sin(a_n^2) = 1$, $\sin(b_n^2) = \sin(n\pi) = 0$. I limiti $1\neq0$ sono diversi, quindi il limite non esiste.
2. $a_n = \frac1n\to0$, $b_n = -\frac1n\to0$, entrambe $\neq0$. Ma $f(a_n) = n\to+\infty$ e $f(b_n) = -n\to-\infty$: limiti diversi, quindi $\nexists\lim_{x\to0}\frac1x$. $\blacksquare$` },

{ t: "es", titolo: R`Ordini di grandezza: $n!\to+\infty$ e $n^n\to+\infty$`, testo: R`
- $\lim_{n\to+\infty}n! = +\infty$. Infatti
$$n! = n\cdot(n-1)\cdots3\cdot2\cdot1\ge n\to+\infty$$
e concludo per il teorema del **singolo carabiniere**.
- (Esercizio) $\lim_{n\to+\infty}n^n = +\infty$. Infatti $n^n = \underbrace{n\cdot n\cdots n}_{n\text{ volte}}\ge n\to+\infty$, e concludo ancora con il singolo carabiniere.

**Oss.** Le stime si possono migliorare (es. $n^n\ge n!$ fattore per fattore). Ma quale tra $n!$ e $n^n$ va a $+\infty$ **più velocemente**? E di quanto? (Si vedrà nella prossima lezione.)` },

]});
