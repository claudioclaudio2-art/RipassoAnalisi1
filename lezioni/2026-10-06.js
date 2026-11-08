L({ data: "2026-10-06", n: 6, titolo: "Potenze, radici, logaritmi, funzioni", voci: [

{ t: "teo", s: "dim", diff: 1, titolo: R`Disuguaglianza triangolare inversa`, testo: R`
$$\big||a|-|b|\big|\le|a-b|\qquad\forall a,b\in\mathbb R.$$`, dim: R`
Per la disuguaglianza triangolare: $|a| = |(a-b)+b|\le|a-b|+|b|$, da cui $|a|-|b|\le|a-b|$.

Scambiando i ruoli: $|b| = |(b-a)+a| \le |a-b|+|a|$, da cui $-(|a|-|b|)\le|a-b|$.

Quindi $\big||a|-|b|\big| = \max\lbrace |a|-|b|,\ -(|a|-|b|)\rbrace\le|a-b|$. $\blacksquare$` },

{ t: "def", titolo: R`Potenza a esponente intero`, testo: R`
Per $a\in\mathbb R\setminus\lbrace0\rbrace$ (base) e $n\in\mathbb Z$ (esponente):
$$a^n = \begin{cases}\underbrace{a\cdot a\cdots a}_{n \text{ volte}} & n>0\\ 1 & n = 0\\ \dfrac1{a^{-n}} & n<0.\end{cases}$$` },

{ t: "att", titolo: R`$0^0$ non ha senso`, testo: R`
$0^0$ **non è definito** (in alcuni testi o situazioni si pone $0^0=1$, ma per noi no).` },

{ t: "teo", s: "omessa", diff: 3, titolo: R`Esistenza e unicità della radice $n$-esima`, testo: R`
Siano $y\in\mathbb R$, $y\ge0$, $n\in\mathbb N$. Allora esiste un unico $r\in\mathbb R$, $r\ge 0$, tale che $r^n = y$. Si scrive $r = y^{1/n} = \sqrt[n]y$, ed è
$$r = \sup\lbrace x\in\mathbb R : x\ge0,\ x^n\le y\rbrace.$$
In classe il prof ha detto solo: segue dal **teorema di completezza (2ª forma)**: $A = \lbrace x\ge0: x^n\le y\rbrace$ è superiormente limitato, quindi ha un unico sup $r$, e $r^n = y$. La dimostrazione completa qui sotto è un'aggiunta.`, dim: R`
L'insieme $A = \lbrace x\ge 0 : x^n\le y\rbrace$ è non vuoto ($0\in A$) e superiormente limitato (ad esempio da $\max\lbrace1,y\rbrace$). Per la completezza (2ª forma) ammette un unico estremo superiore $r\ge0$. Resta da vedere che $r^n = y$ (a lezione questo passo è solo accennato; ecco i conti).

**Stima utile.** Per $0\le a<b$:
$$b^n-a^n = (b-a)\left(b^{n-1}+b^{n-2}a+\dots+a^{n-1}\right)\le(b-a)\cdot n\,b^{n-1}.$$

**Se fosse $r^n<y$:** scelgo $h$ con $0<h<1$ e $h<\dfrac{y-r^n}{n(r+1)^{n-1}}$. Allora
$$(r+h)^n-r^n\le h\cdot n(r+h)^{n-1}\le h\cdot n(r+1)^{n-1}<y-r^n,$$
quindi $(r+h)^n<y$, cioè $r+h\in A$: un elemento di $A$ più grande di $r = \sup A$, assurdo.

**Se fosse $r^n>y$:** allora $r>0$. Scelgo $h$ con $0<h<r$ e $h<\dfrac{r^n-y}{n\,r^{n-1}}$. Allora
$$r^n-(r-h)^n\le h\cdot n\,r^{n-1}<r^n-y,$$
quindi $(r-h)^n>y$. Per ogni $x\in A$: $x^n\le y<(r-h)^n$, quindi $x<r-h$ (monotonia di $x\mapsto x^n$). Dunque $r-h$ è un maggiorante di $A$ più piccolo di $r$, assurdo.

Quindi $r^n = y$. L'unicità segue dal fatto che $x\mapsto x^n$ è strettamente crescente su $[0,+\infty)$. $\blacksquare$` },

{ t: "att", titolo: R`Niente radici di numeri negativi`, testo: R`
Abbiamo definito $\sqrt[n]y$ **solo per $y\ge0$**: $\sqrt{-4}$ o $\sqrt[3]{-8}$ per noi non hanno senso. (Alcuni testi definiscono le radici dispari di numeri negativi, noi no.)

Nota utile: $\sqrt{x^2} = |x|$ per ogni $x \in\mathbb R$.` },

{ t: "def", titolo: R`Potenza razionale e reale`, testo: R`
**Razionale**: per $a>0$ e $\frac pq$ con $p,q\in\mathbb Z$, $q > 0$: $\quad a^{p/q} = \sqrt[q]{a^p}$.

**Reale**: per $a>0$ e $r\in\mathbb R$, $r\ge0$:
- se $a\ge1$: $\ a^r = \sup\lbrace a^s : s\in\mathbb Q,\ s\le r\rbrace$ (ben definito per la completezza);
- se $0<a<1$: $\ a^r = \dfrac{1}{(1/a)^r}$.

Se $r < 0$: $a^r = \dfrac1{a^{-r}}$.

Riassunto della costruzione: $a^n \to \sqrt[n]a\to a^{p/q}\to a^r\ (r\ge0)\to a^r\ (r<0)\to \log_a y$.` },

{ t: "teo", s: "omessa", diff: 2, titolo: R`Esistenza del logaritmo`, testo: R`
Siano $a>0$, $a\neq1$, $y>0$. Allora esiste un unico $x\in\mathbb R$ tale che $a^x = y$; si indica $x = \log_a y$ ed è
- se $a > 1$: $\ x = \sup\lbrace r\in\mathbb R : a^r\le y\rbrace$;
- se $0<a<1$: $\ x = \sup\lbrace r\in\mathbb R : a^r\ge y\rbrace$.

In classe: segue dal teorema di completezza (2ª forma), in modo analogo alla radice $n$-esima. La dimostrazione completa qui sotto è un'aggiunta.`, dim: R`
Segue dalla completezza di $\mathbb R$ (2ª forma). Faccio il caso $a>1$ (per $0<a<1$ si applica il caso precedente a $\frac1a>1$: $\log_ay = -\log_{1/a}y$). Sia $B = \lbrace r\in\mathbb R: a^r\le y\rbrace$ e $t = a-1>0$.

**Strumento.** Dal binomio di Newton $(1+t)^n\ge1+nt$, quindi $a^n\ge1+n(a-1)\to+\infty$; e $\left(1+\frac tn\right)^n\ge1+t = a$, cioè $a^{1/n}\le1+\frac{a-1}n$.

**$B$ non vuoto e limitato superiormente:** scelto $n$ con $1+n(a-1)>\max\lbrace y,\frac1y\rbrace$, si ha $a^{-n}<y$ (quindi $-n\in B$) e $a^r\le y<a^n$ per ogni $r\in B$ (quindi $n$ è un maggiorante). Sia $x = \sup B$.

**Se fosse $a^x<y$:** per $n$ grande $a^x\left(1+\frac{a-1}n\right)<y$, quindi $a^{x+1/n} = a^x\cdot a^{1/n}<y$, cioè $x+\frac1n\in B$, assurdo.

**Se fosse $a^x>y$:** per $n$ grande $\dfrac{a^x}{1+\frac{a-1}n}>y$, quindi $a^{x-1/n}>y$. Ogni $r\in B$ ha $a^r\le y<a^{x-1/n}$, quindi $r<x-\frac1n$: $x-\frac1n$ è un maggiorante più piccolo di $x$, assurdo.

Quindi $a^x = y$; l'unicità segue dalla stretta monotonia di $r\mapsto a^r$. $\blacksquare$` },

{ t: "def", titolo: R`Logaritmo e proprietà`, testo: R`
$\log_a y$ ("logaritmo in base $a$ di $y$") è l'esponente da dare ad $a$ per ottenere $y$. Notazioni: $\log = \ln = \log_e$ (logaritmo naturale, $e \approx 2{,}718$ numero di Nepero); attenzione: $\log_{10}\neq\log$.

Per $a, b > 0$, $a,c\neq1$, $x,y>0$:
1. $\log_a 1 = 0$, $\log_a a = 1$;
2. $a^{\log_a x} = x$ e $\log_a a^x = x$;
3. $\log_a(xy) = \log_a x+\log_a y$ (perché $a^{\log_a x}\cdot a^{\log_a y} = xy$);
4. $\log_a(x^b) = b\log_a x$, in particolare $\log_a\frac1x = -\log_a x$;
5. $\log_a\frac xy = \log_a x-\log_a y$;
6. **cambio di base**: $\log_a x = \dfrac{\log_c x}{\log_c a}$, in particolare $\log_a x = \dfrac{\log x}{\log a}$ e $\log_{1/a}x = -\log_a x$.` },

{ t: "def", titolo: R`Funzione`, testo: R`
Dati due insiemi non vuoti $A$ e $B$, una **funzione** da $A$ a $B$ è una terna $f = (A, B, G(f))$, e si scrive $f: A\to B$, $x\mapsto f(x)$, dove
- $A$ è il **dominio** (insieme degli input);
- $B$ è il **codominio** (insieme che contiene gli output);
- $G(f)\subseteq A\times B$ è il **grafico**: a **ogni** $x\in A$ corrisponde **un unico** $y \in B$ con $(x,y)\in G(f)$, e si scrive $y = f(x)$:
$$G(f) = \lbrace (x,f(x)) : x\in A\rbrace.$$` },

{ t: "att", titolo: R`Quando non è una funzione`, testo: R`
Non è una funzione:
- se a un elemento di $A$ corrispondono **due** valori ($f(b)$ non è determinato);
- se un elemento di $A$ **non ha** alcun valore.

È invece permesso che due elementi diversi abbiano lo stesso valore, o che qualche elemento di $B$ non sia raggiunto.` },

]});
