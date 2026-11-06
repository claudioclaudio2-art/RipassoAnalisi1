L({ data: "2026-11-03", n: 22, titolo: "o-piccolo vs O-grande, ordini di infinito e infinitesimo, successioni", voci: [

{ t: "prop", s: "dim", diff: 1, titolo: R`Confronto o-piccolo vs O-grande`, testo: R`
Siano $f,g:A\to\mathbb R$, $x_0$ di accumulazione per $A$, con $g(x)\neq0$ definitivamente per $x\to x_0$. Allora
$$f(x) = o(g(x))\ \Longrightarrow\ f(x) = O(g(x))\qquad\text{per } x\to x_0.$$
Il viceversa è **falso**.`, dim: R`
Per definizione di o-piccolo $\displaystyle\lim_{x\to x_0}\frac{f(x)}{g(x)} = 0$. Scelgo $\varepsilon = 1$ nella definizione di limite: trovo un intorno $I$ di $x_0$ tale che
$$\left|\frac{f(x)}{g(x)}\right|<1\qquad\forall x\in A\cap I\setminus\lbrace x_0\rbrace$$
(restringendo $I$ in modo che lì sia anche $g\neq0$), cioè
$$|f(x)|\le1\cdot|g(x)|\qquad\forall x\in A\cap I\setminus\lbrace x_0\rbrace.$$
Questo è proprio $f = O(g)$ con $M = 1$. $\blacksquare$` },

{ t: "att", titolo: R`$O(g)$ non implica $o(g)$`, testo: R`
- $1 = O(1)$, ma $1\neq o(1)$ (la costante $1$ non è infinitesima).
- $x = O(x)$ ma $x\neq o(x)$ per $x\to0$: infatti $|x|\le1\cdot|x|$ per ogni $x\in\mathbb R$, ma $\lim_{x\to0}\frac xx = 1\neq0$.
- Più in generale $f = O(f)$ (perché $|f(x)|\le1\cdot|f(x)|$ per ogni $x\in A$), ma $f\neq o(f)$ per $x\to x_0$, dato che $\lim_{x\to x_0}\frac{f(x)}{f(x)} = 1\neq0$.` },

{ t: "def", titolo: R`Confronto di infiniti`, testo: R`
Siano $f,g:A\to\mathbb R$, $x_0$ di accumulazione per $A$, con $f(x),g(x)\neq0$ definitivamente per $x\to x_0$ e
$$\lim_{x\to x_0}f(x) = \pm\infty,\qquad\lim_{x\to x_0}g(x) = \pm\infty$$
($f$ e $g$ sono **infinite**). Diciamo che:
- $f$ e $g$ sono **infinite dello stesso ordine** se $\exists\displaystyle\lim_{x\to x_0}\frac{f(x)}{g(x)}\in\mathbb R\setminus\lbrace0\rbrace$;
- $g$ è **infinita di ordine superiore** a $f$ se $\exists\displaystyle\lim_{x\to x_0}\frac{f(x)}{g(x)} = 0$;
- $g$ è **infinita di ordine inferiore** a $f$ se $\exists\displaystyle\lim_{x\to x_0}\frac{g(x)}{f(x)} = 0$ (cioè $f$ è di ordine superiore a $g$);
- $f$ e $g$ sono **infinite di ordini non confrontabili** se $\nexists\displaystyle\lim_{x\to x_0}\frac{f(x)}{g(x)}$.` },

{ t: "es", titolo: R`Potenze: $x^n$ contro $x^m$ per $x\to+\infty$`, testo: R`
Siano $f(x) = x^n$, $g(x) = x^m$ con $n,m\in\mathbb N\setminus\lbrace0\rbrace$, per $x\to+\infty$. Dato che
$$\lim_{x\to+\infty}\frac{x^n}{x^m} = \lim_{x\to+\infty}x^{n-m} = \begin{cases}+\infty & n>m\\ 1 & n=m\\ 0 & n<m\end{cases}$$
si ha: $f$ è infinita di **ordine superiore** a $g$ $\iff n>m$; $f$ e $g$ sono infinite dello **stesso ordine** $\iff n=m$.` },

{ t: "es", titolo: R`Infiniti non confrontabili: $x(2+\sin x)$ e $x$`, testo: R`
Siano $f(x) = x(2+\sin x)$ e $g(x) = x$ per $x\to+\infty$.
- $\lim_{x\to+\infty}f(x) = +\infty$, perché $2+\sin x\ge1$ per ogni $x$, quindi $f(x)\ge x$ per $x>0$, e $x\to+\infty$ (teorema del **singolo carabiniere**; il confronto non basta, perché presuppone che il limite di $f$ esista);
- $\lim_{x\to+\infty}g(x) = +\infty$.

Ma $\dfrac{f(x)}{g(x)} = 2+\sin x$ e $\lim_{x\to+\infty}\sin x$ **non esiste**, quindi non esiste nemmeno $\lim\frac fg$: $f$ e $g$ sono infinite di **ordini non confrontabili**.` },

{ t: "es", titolo: R`$\frac1x$ contro $\frac1{x^2}$ per $x\to0^+$`, testo: R`
Siano $f(x) = \frac1x$ e $g(x) = \frac1{x^2}$, entrambe infinite per $x\to0^+$. Allora
$$\lim_{x\to0^+}\frac{f(x)}{g(x)} = \lim_{x\to0^+}\frac{x^2}x = \lim_{x\to0^+}x = 0,$$
quindi $g$ è infinita di **ordine superiore** a $f$.` },

{ t: "oss", titolo: R`Le potenze come "unità di misura"`, testo: R`
Fissato $x_0\in\mathbb R$, con il cambio di variabile $y = |x-x_0|\to0^+$:
$$\lim_{x\to x_0}|x-x_0|^\alpha = \begin{cases}0 & \alpha>0\\ +\infty & \alpha<0.\end{cases}$$
Per $x_0 = \pm\infty$ invece
$$\lim_{x\to\pm\infty}|x|^\alpha = \begin{cases}+\infty & \alpha>0\\ 0 & \alpha<0.\end{cases}$$
Le potenze servono quindi da termine di paragone per misurare "quanto velocemente" una funzione tende a $0$ o a $\infty$.` },

{ t: "def", titolo: R`Ordine di infinitesimo e di infinito ($x_0\in\mathbb R$)`, testo: R`
Sia $f:A\to\mathbb R$, $x_0\in\mathbb R$ di accumulazione per $A$, e $\alpha>0$. Diciamo che
- $f$ è **infinitesima di ordine $\alpha$** per $x\to x_0$ se
$$\exists\lim_{x\to x_0}\frac{f(x)}{|x-x_0|^\alpha} = \ell\in\mathbb R\setminus\lbrace0\rbrace;$$
- $f$ è **infinita di ordine $\alpha$** per $x\to x_0$ se
$$\exists\lim_{x\to x_0}f(x)\,|x-x_0|^\alpha = \ell\in\mathbb R\setminus\lbrace0\rbrace.$$

Es. $1-\cos x$ è infinitesima di ordine $2$ per $x\to0$ ($\ell = \frac12$); $\frac1{x^2}$ è infinita di ordine $2$ per $x\to0$.` },

{ t: "def", titolo: R`Ordine di infinitesimo e di infinito ($x_0 = \pm\infty$)`, testo: R`
Sia $f:A\to\mathbb R$, $x_0 = \pm\infty$ di accumulazione per $A$, e $\alpha>0$. Diciamo che
- $f$ è **infinitesima di ordine $\alpha$** per $x\to x_0$ se
$$\exists\lim_{x\to x_0}f(x)\,|x|^\alpha = \ell\in\mathbb R\setminus\lbrace0\rbrace;$$
- $f$ è **infinita di ordine $\alpha$** per $x\to x_0$ se
$$\exists\lim_{x\to x_0}\frac{f(x)}{|x|^\alpha} = \ell\in\mathbb R\setminus\lbrace0\rbrace.$$

Es. per $x\to+\infty$: $\frac1{x^3}$ è infinitesima di ordine $3$, $\sqrt x$ è infinita di ordine $\frac12$.` },

{ t: "def", titolo: R`Successione`, testo: R`
Una **successione** (di numeri reali) è una funzione
$$a:\mathbb N\to\mathbb R,\qquad n\mapsto a(n) = a_n.$$
$a_n$ si chiama **termine generale** e la successione si indica con $(a_n)_{n\in\mathbb N}$ oppure $\lbrace a_n\rbrace_{n\in\mathbb N}$.` },

{ t: "oss", titolo: R`Il dominio di una successione`, testo: R`
Come dominio si può avere un qualsiasi $A\subseteq\mathbb N$ con l'ordine indotto; in particolare spesso $A = \lbrace n\in\mathbb N: n\ge n_0\rbrace$ con $n_0\in\mathbb N$ fissato. Possono anche mancare termini intermedi.

Esempi:
- $a_n = 1$ per ogni $n\in\mathbb N$: $1,1,1,1,\dots$
- $a_n = \frac1n$ per $n\ge1$: $1,\frac12,\frac13,\frac14,\dots$
- $a_n = \sqrt{n-3}$ per $n\ge3$: $0,1,\sqrt2,\sqrt3,\dots$
- una **successione finita** (ha solo un numero finito di termini) non interessa per i limiti.` },

{ t: "att", titolo: R`Per le successioni si studia solo $n\to+\infty$`, testo: R`
L'**unico** punto di accumulazione di un insieme $A\subseteq\mathbb N$ con infiniti elementi è $+\infty$. Quindi l'unico limite che ha senso studiare è
$$\lim_{n\to+\infty}a_n.$$
Siccome una successione è una funzione, proprietà e risultati sulle successioni si **deducono** da quelli già visti per le funzioni.` },

{ t: "def", titolo: R`Monotonia, limitatezza, "definitivamente" per successioni`, testo: R`
Sono già definite (come per le funzioni):
- $(a_n)$ è **monotona crescente** se $a_n\le a_{n+1}$ per ogni $n$ (**strettamente** se $a_n<a_{n+1}$); **decrescente** se $a_n\ge a_{n+1}$ (strettamente se $>$);
- $(a_n)$ è **limitata** se $\exists M\ge0$ tale che $|a_n|\le M$ per ogni $n$ (analogamente limitata inferiormente/superiormente);
- $(a_n)$ verifica una proprietà $P$ **definitivamente** per $n\to+\infty$ se
$$\exists N\in\mathbb N\ \text{tale che}\ P(a_n)\ \text{è vera}\ \forall n\ge N.$$` },

{ t: "es", titolo: R`Tre successioni tipo: $\frac1n$, $(-1)^n$, $n!$`, testo: R`
- $a_n = \frac1n$ ($n\ge1$): limitata, positiva, strettamente decrescente e **infinitesima**: $\lim_{n\to+\infty}\frac1n = 0$. Infatti $\forall\varepsilon>0$ $\exists N\in\mathbb N$ (Archimede: $N>\frac1\varepsilon$) tale che $\frac1n\le\frac1N<\varepsilon$ per ogni $n\ge N$.
- $a_n = (-1)^n$: $1,-1,1,-1,\dots$ è limitata, **non** è positiva, **non** è monotona, e $\nexists\lim_{n\to+\infty}(-1)^n$.
- $a_n = n!$: positiva, illimitata, strettamente crescente (definitivamente), $\lim_{n\to+\infty}n! = +\infty$. Osservo che $a_{n+1} = (n+1)\cdot a_n$ per ogni $n$: ogni termine si ottiene dal precedente, è una successione **ricorsiva**.` },

{ t: "def", titolo: R`Successione ricorsiva e successione periodica`, testo: R`
- $(a_n)$ si dice **ricorsiva** se ogni termine si ottiene dal precedente tramite una funzione $f$:
$$a_{n+1} = f(n, a_n)\qquad\forall n$$
(nel caso più semplice $f$ non dipende da $n$: $a_{n+1} = f(a_n)$ con $f:\mathbb R\to\mathbb R$).
- $(a_n)_{n\in\mathbb N}$ si dice **periodica** se esiste $k\in\mathbb N$, $k\ge1$, tale che
$$a_{n+k} = a_n\qquad\forall n\in\mathbb N,$$
e $k$ si chiama **periodo**.

Es. $a_n = n!$ è ricorsiva ($a_{n+1} = (n+1)a_n$), $a_n = n$ è ricorsiva con $f(x) = x+1$; $a_n = (-1)^n$ è periodica di periodo $2$ (ed è anche ricorsiva con $f(x) = -x$).` },

{ t: "def", titolo: R`Limite di una successione`, testo: R`
Diciamo che $(a_n)$ ha **limite** $\ell\in\mathbb R\cup\lbrace\pm\infty\rbrace$ per $n\to+\infty$, o che $a_n$ **tende a** $\ell$, se
$$\lim_{n\to+\infty}a_n = \ell.$$
In tal caso si scrive anche $a_n\to\ell$ oppure $a_n\xrightarrow[n\to+\infty]{}\ell$.

Esplicitamente: per ogni intorno $U$ di $\ell$ esiste $N\in\mathbb N$ tale che $a_n\in U$ per ogni $n\ge N$.` },

{ t: "def", titolo: R`Successioni convergenti, divergenti, irregolari`, testo: R`
- Se $\ell\in\mathbb R$, $(a_n)$ è **convergente** (a $\ell$);
- se $\ell = \pm\infty$, $(a_n)$ è **divergente** (a $\pm\infty$);
- se il limite **non esiste**, $(a_n)$ è **irregolare** (o oscillante).

Esempi: $\frac1n$ è convergente a $0$; $n!$ è divergente a $+\infty$; $(-1)^n$ è irregolare.` },

{ t: "es", s: "casa", diff: 2, titolo: R`Dimostrare che $(-2)^n$ è irregolare`, testo: R`
Dimostrare che la successione $a_n = (-2)^n$ non ha limite per $n\to+\infty$.`, dim: R`
Per assurdo sia $a_n\to\ell\in\overline{\mathbb R}$.

**$\ell\in\mathbb R$ è impossibile:** con $\varepsilon = 1$ si avrebbe $|a_n-\ell|<1$, quindi $|a_n|<|\ell|+1$, per ogni $n\ge N$. Ma $|a_n| = 2^n\ge n$ (induzione), e basta prendere $n\ge\max\lbrace N,|\ell|+1\rbrace$ per avere $|a_n|\ge|\ell|+1$: assurdo.

**$\ell = +\infty$ è impossibile:** prendo l'intorno $U = (0,+\infty)$. Dovrebbe essere $a_n>0$ per ogni $n\ge N$, ma per $n\ge N$ dispari $a_n = -2^n<0$.

**$\ell = -\infty$ è impossibile:** idem con $U = (-\infty,0)$ e $n$ pari, dove $a_n = 2^n>0$.

Quindi il limite non esiste. (Per $(-1)^n$ si ragiona allo stesso modo per $\pm\infty$; per $\ell\in\mathbb R$ si usa $\varepsilon = \frac12$: due termini consecutivi distano $2$, quindi non possono stare entrambi a distanza $<\frac12$ da $\ell$.) $\blacksquare$` },

]});
