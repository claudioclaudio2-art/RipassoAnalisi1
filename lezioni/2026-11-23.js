L({ data: "2026-11-23", n: 33, titolo: "Valori intermedi, continuità dell'inversa, derivata e retta tangente", voci: [

{ t: "teo", s: "dim", diff: 2, titolo: R`Teorema dei valori intermedi`, testo: R`
Sia $\emptyset\neq I\subseteq\mathbb R$ **intervallo** (cioè $a,b\in I$, $a<b\Rightarrow c\in I$ $\forall c\in(a,b)$) e sia $f\in\mathcal C^0(I)$. Allora valgono le seguenti affermazioni:
1. $f(I)$ è un intervallo;
2. $\displaystyle\left(\inf_If,\ \sup_If\right)\subseteq f(I)\subseteq\left[\inf_If,\ \sup_If\right]$.

La prima inclusione dice che $f(I)$ è un intervallo che contiene **tutti** i valori tra $\inf_If$ e $\sup_If$; la seconda è **ovvia** per definizione di inf e sup (ma **attenzione**: i valori di $\inf_If$ e $\sup_If$ vanno considerati nell'intervallo chiuso solo se finiti).

Esempi:
- $f(x) = \log(x)$, $I = (0,+\infty)\Rightarrow f(I) = (-\infty,+\infty)$;
- $f(x) = \tan(x)$, $I = [0,\frac\pi2)\Rightarrow f(I) = [0,+\infty)$.`, dim: R`
Osservo che $(2)\Rightarrow(1)$, e quindi mi basta dimostrare la parte **non** ovvia di (2):
$$\left(\inf_If,\ \sup_If\right)\subseteq f(I).$$
Fisso $y\in\left(\inf_If,\sup_If\right)$. Devo dimostrare che $y\in f(I)$, cioè che esiste $x\in I$ tale che $y = f(x)$. Abbiamo che
$$\inf_If\ \underset{①}<\ y\ \underset{②}<\ \sup_If.$$
- ① $\Rightarrow y$ **NON** è un minorante di $f(I)$ $\Rightarrow\exists a\in I$ tale che $\inf_If\le f(a)<y$;
- ② $\Rightarrow y$ **NON** è un maggiorante di $f(I)$ $\Rightarrow\exists b\in I$ tale che $y<f(b)\le\sup_If$.

Ho trovato $a,b\in I$. Siccome $I$ è intervallo, ogni $c$ compreso tra $a$ e $b$ deve appartenere a $I$. Siccome non so quale sia l'ordine, definiamo
$$J = \begin{cases}[a,b] & a<b\\ [b,a] & a>b.\end{cases}$$
Osservo che posso scegliere $a\neq b$ grazie alle proprietà di inf e sup in ① e ② (anzi, $f(a)<y<f(b)$ forza $a\neq b$). A meno di scambiare le lettere, posso assumere che $a<b$ per semplicità. Allora abbiamo $J = [a,b]\subseteq I$. Definiamo $g:[a,b]\to\mathbb R$ ponendo
$$g(x) = f(x)-y\qquad\forall x\in[a,b].$$
Osservo che:
- $g\in\mathcal C^0([a,b])$ perché $f\in\mathcal C^0(I)$;
- $g(a) = f(a)-y<0$ e $g(b) = f(b)-y>0$ $\Rightarrow g(a)\cdot g(b)<0$.

Per il teorema di Bolzano applicato a $g$ su $[a,b]$ trovo $c\in(a,b)\subseteq I$ tale che $g(c) = 0$, cioè $f(c) = y$. Ma allora $y\in f(I)$, come volevamo. $\blacksquare$` },

{ t: "cor", s: "dim", diff: 1, titolo: R`Immagine di un intervallo chiuso e limitato`, testo: R`
Siano $a,b\in\mathbb R$, $a<b$, e $f\in\mathcal C^0([a,b])$. Allora
$$f([a,b]) = \left[\min_{[a,b]}f,\ \max_{[a,b]}f\right].$$`, dim: R`
Segue dal teorema di Weierstrass (min e max esistono, quindi sono inf e sup e sono assunti) combinato con il teorema dei valori intermedi. $\blacksquare$` },

{ t: "es", titolo: R`L'inversa di una funzione continua può non essere continua`, testo: R`
**Domanda:** è vero che la funzione inversa di una funzione continua (se esiste) è anch'essa continua? **NO!**

Sia $f:A\to\mathbb R$, $A = [0,1)\cup[2,3]$,
$$f(x) = \begin{cases}x & \text{se } x\in[0,1)\\ x-1 & \text{se } x\in[2,3].\end{cases}$$
Osservo che $f\in\mathcal C^0(A)$. Inoltre $f$ è **strettamente crescente** su $A$, quindi $f$ è invertibile (perché è iniettiva) su $A$. Calcolo l'inversa $f^{-1}:f(A)\to\mathbb R$, $f(A) = [0,2]$:
$$y = f(x)\iff y = x\ \text{se } x\in[0,1)\ \text{opp.}\ y = x-1\ \text{se } x\in[2,3]$$
$$\iff x = y\ \text{se } y\in[0,1)\ \text{opp.}\ x = y+1\ \text{se } y\in[1,2].$$
Quindi l'inversa è
$$f^{-1}(y) = \begin{cases}y & \text{se } y\in[0,1)\\ y+1 & \text{se } y\in[1,2].\end{cases}$$
Osservo che $f^{-1}$ **non** è continua in $y = 1$, dove ha una discontinuità di tipo salto ($\lim_{y\to1^-}f^{-1}(y) = 1\neq2 = f^{-1}(1)$).

**Dove è il problema?** Il problema è che $A = [0,1)\cup[2,3]$ **NON** è un **intervallo**!` },

{ t: "teo", s: "omessa", titolo: R`Continuità della funzione inversa`, testo: R`
Sia $\emptyset\neq I\subseteq\mathbb R$ **intervallo** e sia $f\in\mathcal C^0(I)$. Se $f$ è invertibile su $I$, allora:
1. $f$ è strettamente monotona;
2. $f^{-1}\in\mathcal C^0(f(I))$.

(Dimostrazione omessa.)` },

{ t: "oss", titolo: R`Applicazione: continuità delle inverse delle funzioni elementari`, testo: R`
Il teorema precedente permette di dimostrare la continuità delle funzioni inverse delle funzioni elementari:

- $a^x\in\mathcal C^0(\mathbb R)\ \longrightarrow\ \log_a(x)\in\mathcal C^0((0,+\infty))$;
- $\sin\big|_{[-\frac\pi2,\frac\pi2]}\in\mathcal C^0([-\frac\pi2,\frac\pi2])\ \longrightarrow\ \arcsin\big|_{[-1,1]}\in\mathcal C^0([-1,1])$;
- $\cos\big|_{[0,\pi]}\in\mathcal C^0([0,\pi])\ \longrightarrow\ \arccos\big|_{[-1,1]}\in\mathcal C^0([-1,1])$;
- $\tan\ \longrightarrow\ \arctan$;
- $\sinh,\ \cosh,\ \tanh\ \longrightarrow\ \operatorname{arcsinh},\ \operatorname{arccosh},\ \operatorname{arctanh}$.

(A sinistra le funzioni dirette, a destra le inverse.)` },

{ t: "def", titolo: R`Derivata (prima)`, testo: R`
Sia $\emptyset\neq I\subseteq\mathbb R$ un intervallo, $x_0\in I$, e $f:I\to\mathbb R$. Se esiste **finito** il limite
$$\exists\lim_{x\to x_0}\underbrace{\frac{f(x)-f(x_0)}{x-x_0}}_{\text{rapporto incrementale}}\in\mathbb R,$$
allora tale limite si dice **derivata (prima) di $f$ in $x_0$** e si denota con
$$\boxed{\ f'(x_0) = \lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}.\ }$$
Diciamo che $f$ è **derivabile** (o **differenziabile**) **su $I$** se è derivabile in ogni punto di $I$.

Viceversa, se il limite $\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}$ **NON** esiste oppure esiste ma è $+\infty$ o $-\infty$, allora diciamo che $f$ **NON è derivabile in $x_0$**.` },

{ t: "oss", titolo: R`Rapporto incrementale con l'incremento $h$`, testo: R`
Con il cambio di variabile $x-x_0 = h\to0$, $x = x_0+h$:
$$f'(x_0) = \lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0} = \lim_{h\to0}\frac{f(x_0+h)-f(x_0)}h,$$
e tipicamente si dice che
$$\mathbb R\ni h\ (h\neq0)\ \longmapsto\ \frac{f(x_0+h)-f(x_0)}h$$
è il **rapporto incrementale** in $x_0$ di incremento $h\neq0$.` },

{ t: "es", titolo: R`Notazioni per la derivata`, testo: R`
Tutti questi simboli indicano la stessa cosa, la derivata di $f$ in $x_0$ (le più usate sono le prime di ogni riga):
$$f'(x_0) = \dot f(x_0) = f'\Big|_{x=x_0} = \dot f\Big|_{x=x_0}$$
$$= \frac{df}{dx}(x_0) = \frac{df}{dx}\Big|_{x=x_0}$$
$$= Df(x_0) = Df\Big|_{x=x_0}$$
$$= \partial f(x_0) = \partial f\Big|_{x=x_0} = \dots$$

- $f'(x_0)$: notazione di Lagrange;
- $\dot f(x_0)$: notazione di Newton (usata soprattutto in fisica, per derivate rispetto al tempo);
- $\frac{df}{dx}(x_0)$: notazione di Leibniz;
- $Df(x_0)$: notazione con l'operatore $D$ (di Eulero);
- $\partial f(x_0)$: simbolo di derivata parziale, usato per funzioni di più variabili.

(I nomi delle notazioni sono un'aggiunta, non sono negli appunti.)` },

{ t: "att", titolo: R`Niente $f'(x_0) = \pm\infty$`, testo: R`
**Notazione:** si tende a scrivere anche che, se esiste
$$\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}\in\lbrace+\infty,-\infty\rbrace,$$
allora $f'(x_0) = +\infty$ oppure $f'(x_0) = -\infty$.

Noi **NON** usiamo questa notazione e consideriamo soltanto valori **FINITI** per la derivata! (Salvo diverso avviso.)` },

{ t: "oss", titolo: R`Significato geometrico della derivata`, testo: R`
La retta che passa per $(x_0,f(x_0))$ e $(x_0+h,f(x_0+h))$ (**retta secante**, "retta blu") è
$$y = f(x_0)+\frac{f(x_0+h)-f(x_0)}h\,(x-x_0),$$
e ha pendenza $\frac{f(x_0+h)-f(x_0)}h$, il rapporto incrementale.

Intuitivamente, se $f'(x_0)$ esiste (finito) allora, per $h\to0$, la retta blu deve diventare al limite la **retta tangente** al grafico di $f$ ("retta verde")
$$y = f(x_0)+f'(x_0)(x-x_0),$$
che passa per $(x_0,f(x_0))$.` },

{ t: "def", titolo: R`Retta tangente`, testo: R`
La **retta tangente** al (grafico di) $f$ in $x_0$ è la retta (se esiste) di equazione
$$y = ax+b\qquad\text{con } a,b\in\mathbb R$$
tale che
$$\boxed{\ f(x)-(ax+b) = o(x-x_0)\quad\text{per } x\to x_0,\ }$$
ovvero
$$\lim_{x\to x_0}\frac{f(x)-(ax+b)}{x-x_0} = 0.$$` },

{ t: "prop", s: "dim", diff: 1, titolo: R`Derivabile ⇒ esiste la retta tangente`, testo: R`
Sia $\emptyset\neq I\subseteq\mathbb R$ intervallo, $x_0\in I$, $f:I\to\mathbb R$. Se $f$ è derivabile in $x_0$, allora la retta tangente a $f$ esiste ed ha equazione
$$y = f(x_0)+f'(x_0)(x-x_0).$$`, dim: R`
Osservo che
$$y = f(x_0)+f'(x_0)(x-x_0) = \underbrace{f'(x_0)}_{a}\,x+\underbrace{f(x_0)-f'(x_0)x_0}_{b}.$$
Dobbiamo verificare che, per $x\to x_0$,
$$f(x)-\big(f(x_0)+f'(x_0)(x-x_0)\big) = o(x-x_0).$$
Infatti
$$\lim_{x\to x_0}\frac{f(x)-\big(f(x_0)+f'(x_0)(x-x_0)\big)}{x-x_0} = \lim_{x\to x_0}\left(\frac{f(x)-f(x_0)}{x-x_0}-f'(x_0)\right)$$
$$= \left(\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}\right)-f'(x_0) = 0$$
per definizione di derivata in $x_0$. $\blacksquare$` },

{ t: "es", titolo: R`$x^2\sin(\frac1x)$ è derivabile in $0$, $x\sin(\frac1x)$ no`, testo: R`
Sia $f(x) = \begin{cases}x^2\sin\left(\frac1x\right) & \forall x\neq0\\ 0 & x = 0.\end{cases}$ Sappiamo che $f\in\mathcal C^0(\mathbb R)$: $\lim_{x\to0}f(x) = 0 = f(0)$.

Verifichiamo che $f'(0) = 0$:
$$\lim_{x\to0}\frac{f(x)-f(0)}{x-0} = \lim_{x\to0}\frac{x^2\sin\left(\frac1x\right)}x = \lim_{x\to0}x\sin\left(\frac1x\right) = 0.$$
Quindi la tangente in $x_0 = 0$ è
$$y = \underbrace{f(0)}_{=0}+\underbrace{f'(0)}_{=0}(x-0) = 0\qquad(\text{asse } x).$$

Notare che invece $g(x) = \begin{cases}x\sin\left(\frac1x\right) & \forall x\neq0\\ 0 & x = 0\end{cases}$ **NON** è derivabile in $x_0 = 0$:
$$\lim_{x\to0}\frac{g(x)-g(0)}{x-0} = \lim_{x\to0}\frac{x\sin\left(\frac1x\right)}x = \lim_{x\to0}\sin\left(\frac1x\right)\quad\nexists.$$` },

{ t: "es", titolo: R`$|x|$ non è derivabile in $0$`, testo: R`
(Esempi, continua: lezione del 24/11.) Sia $h(x) = |x|$ $\forall x\in\mathbb R$. Sappiamo che $h\in\mathcal C^0(\mathbb R)$. In $x_0 = 0$ ho che
$$\lim_{x\to0^+}\frac{h(x)-h(0)}{x-0} = \lim_{x\to0^+}\frac{|x|}x = \lim_{x\to0^+}\frac xx = 1,$$
$$\lim_{x\to0^-}\frac{h(x)-h(0)}{x-0} = \lim_{x\to0^-}\frac{|x|}x = \lim_{x\to0^-}\frac{-x}x = -1,$$
quindi $\nexists\lim_{x\to0}\frac{h(x)-h(0)}{x-0}$. Pertanto $h(x) = |x|$ **NON** è derivabile in $x_0 = 0$.

Dall'esempio deduciamo che
$$\boxed{\ \text{CONTINUA}\ \not\Longrightarrow\ \text{DERIVABILE}\ }$$
ad esempio $f(x) = |x|$ $\forall x\in\mathbb R$ è continua in $x_0 = 0$ ma **NON** è derivabile in $x_0 = 0$. Cosa possiamo dire del viceversa? (Vedi il teorema "derivabile ⇒ continua" del 24/11.)` },

]});
