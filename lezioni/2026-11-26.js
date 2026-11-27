L({ data: "2026-11-26", n: 35, titolo: "Algebra delle derivate, regola della catena, derivata dell'inversa, derivate successive", voci: [

{ t: "teo", s: "dim", diff: 2, titolo: R`Algebra delle derivate`, testo: R`
(Teoremi sulle derivate: strumenti per calcolarle.) Sia $\emptyset\neq I\subseteq\mathbb R$ intervallo, $x_0\in I$ e $f,g:I\to\mathbb R$. Se $f$ e $g$ sono derivabili in $x_0$, allora:
- **(S)** $\alpha f+\beta g$ è derivabile in $x_0$ e vale
$$\boxed{(\alpha f+\beta g)'(x_0) = \alpha f'(x_0)+\beta g'(x_0)}\qquad\forall\alpha,\beta\in\mathbb R;$$
- **(P)** $f\cdot g$ è derivabile in $x_0$ e vale
$$\boxed{(f\cdot g)'(x_0) = f'(x_0)\cdot g(x_0)+f(x_0)\cdot g'(x_0)}$$
(nota come **regola di Leibniz**);
- **(Q)** **se** $g(x_0)\neq0$, $f/g$ è derivabile in $x_0$ e vale
$$\boxed{\left(\frac fg\right)'(x_0) = \frac{f'(x_0)\cdot g(x_0)-f(x_0)\cdot g'(x_0)}{g(x_0)^2}.}$$`, dim: R`
Applichiamo l'algebra dei limiti alla definizione di derivata.

**(S)**
$$\lim_{x\to x_0}\frac{(\alpha f+\beta g)(x)-(\alpha f+\beta g)(x_0)}{x-x_0} = \lim_{x\to x_0}\left(\alpha\frac{f(x)-f(x_0)}{x-x_0}+\beta\frac{g(x)-g(x_0)}{x-x_0}\right)$$
$$= \alpha\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}+\beta\lim_{x\to x_0}\frac{g(x)-g(x_0)}{x-x_0} = \alpha f'(x_0)+\beta g'(x_0)\qquad\forall\alpha,\beta\in\mathbb R.$$

**(P)** Aggiungo e tolgo $f(x_0)g(x)$:
$$\lim_{x\to x_0}\frac{(f\cdot g)(x)-(f\cdot g)(x_0)}{x-x_0} = \lim_{x\to x_0}\frac{f(x)g(x)-f(x_0)g(x_0)}{x-x_0} = \lim_{x\to x_0}\frac{(f(x)-f(x_0))g(x)+f(x_0)(g(x)-g(x_0))}{x-x_0}$$
$$= \lim_{x\to x_0}\left(\frac{f(x)-f(x_0)}{x-x_0}\cdot g(x)+f(x_0)\cdot\frac{g(x)-g(x_0)}{x-x_0}\right) = f'(x_0)\cdot g(x_0)+f(x_0)\cdot g'(x_0),$$
dato che $g$ derivabile in $x_0\Rightarrow g$ continua in $x_0\Rightarrow\lim_{x\to x_0}g(x) = g(x_0)$.

**(Q)**
$$\lim_{x\to x_0}\frac{\left(\frac fg\right)(x)-\left(\frac fg\right)(x_0)}{x-x_0} = \lim_{x\to x_0}\frac{\frac{f(x)}{g(x)}-\frac{f(x_0)}{g(x_0)}}{x-x_0} = (\circledast).$$
Per ipotesi sappiamo che $g(x_0)\neq0$. Per permanenza del segno (dato che $g$ è derivabile e quindi continua in $x_0$) ho $g(x)\neq0$ in un intorno di $x_0$, e quindi $g(x)\neq0$ definitivamente per $x\to x_0$. Quindi, aggiungendo e togliendo $f(x_0)g(x_0)$,
$$(\circledast) = \lim_{x\to x_0}\left(\frac{f(x)g(x_0)-f(x_0)g(x)}{x-x_0}\cdot\frac1{g(x)g(x_0)}\right)$$
$$= \lim_{x\to x_0}\left[\left(\frac{f(x)-f(x_0)}{x-x_0}\cdot g(x_0)-f(x_0)\cdot\frac{g(x)-g(x_0)}{x-x_0}\right)\cdot\frac1{g(x)g(x_0)}\right]$$
$$= \Big(f'(x_0)\cdot g(x_0)-f(x_0)\cdot g'(x_0)\Big)\cdot\frac1{g(x_0)\cdot g(x_0)} = \frac{f'(x_0)\cdot g(x_0)-f(x_0)\cdot g'(x_0)}{g(x_0)^2},$$
usando che $g$ è continua in $x_0$. $\blacksquare$` },

{ t: "teo", s: "dim", diff: 3, titolo: R`Derivata della funzione composta (regola della catena)`, testo: R`
Siano $f$ e $g$ due funzioni tali che $g\circ f:I\to\mathbb R$ è ben definita su un intervallo $\emptyset\neq I\subseteq\mathbb R$. Supponiamo che:
1. $f$ sia derivabile in $x_0\in I$;
2. $g$ sia derivabile in $f(x_0)$.

Allora $g\circ f$ è derivabile in $x_0$ e vale
$$\boxed{\ (g\circ f)'(x_0) = g'(f(x_0))\cdot f'(x_0)\ }$$
(nota anche come **regola della catena**).`, dim: R`
Usiamo il CDV negli sviluppi. Sappiamo che:
1. $f(x) = f(x_0)+f'(x_0)(x-x_0)+o(x-x_0)$ per $x\to x_0$;
2. $g(y) = g(y_0)+g'(y_0)(y-y_0)+o(y-y_0)$ per $y\to y_0$, dove $y_0 = f(x_0)$.

Allora per CDV negli sviluppi (con $y = f(x)\to f(x_0) = y_0$ per $x\to x_0$), per $x\to x_0$:
$$(g\circ f)(x) = g(f(x))\overset{(2)}= g(f(x_0))+g'(f(x_0))\big(f(x)-f(x_0)\big)+o\big(f(x)-f(x_0)\big)$$
$$\overset{(1)}= g(f(x_0))+g'(f(x_0))\Big(f'(x_0)(x-x_0)+o(x-x_0)\Big)+o\Big(f'(x_0)(x-x_0)+o(x-x_0)\Big)$$
$$= g(f(x_0))+g'(f(x_0))\cdot f'(x_0)\cdot(x-x_0)+o(x-x_0)+o(x-x_0)+o(o(x-x_0))$$
$$= g(f(x_0))+g'(f(x_0))\cdot f'(x_0)\cdot(x-x_0)+o(x-x_0)\qquad\text{per } x\to x_0,$$
usando le regole degli o-piccoli. Ma allora
$$\lim_{x\to x_0}\frac{g(f(x))-g(f(x_0))-g'(f(x_0))\cdot f'(x_0)\cdot(x-x_0)}{x-x_0} = 0,$$
cioè
$$\lim_{x\to x_0}\frac{g(f(x))-g(f(x_0))}{x-x_0} = g'(f(x_0))\cdot f'(x_0),$$
come volevamo. $\blacksquare$` },

{ t: "es", titolo: R`Regola della catena: $x^\alpha$ e $\log(f(x))$`, testo: R`
- Scrivendo $x^\alpha = e^{\log(x^\alpha)} = e^{\alpha\log(x)} = g(f(x))$ con $g(y) = e^y$, $f(x) = \alpha\log(x)$:
$$\frac d{dx}x^\alpha = g'(f(x))\cdot f'(x) = e^{\alpha\log(x)}\cdot\frac\alpha x = x^\alpha\cdot\frac\alpha x = \alpha x^{\alpha-1}\qquad\forall x>0,\ \forall\alpha\in\mathbb R.$$
- Con $g = \log$:
$$\frac d{dx}\log(f(x)) = g'(f(x))\cdot f'(x) = \frac1{f(x)}\cdot f'(x) = \frac{f'(x)}{f(x)}.$$

Da ricordare per le primitive:
$$\boxed{\ \frac d{dx}\log(f(x)) = \frac{f'(x)}{f(x)}.\ }$$` },

{ t: "teo", s: "dim", diff: 2, titolo: R`Derivata della funzione inversa`, testo: R`
Sia $\emptyset\neq I\subseteq\mathbb R$ un intervallo e $f:I\to\mathbb R$ **continua** e **invertibile**. Se $f$ è derivabile in $x_0\in I$ e $\boxed{f'(x_0)\neq0}$, allora $f^{-1}:f(I)\to\mathbb R$ è derivabile in $y_0 = f(x_0)$ e vale
$$\boxed{\ (f^{-1})'(y_0) = \frac1{f'(x_0)}.\ }$$`, dim: R`
Osservo che $f(I) = J$ è un intervallo per il teorema dei valori intermedi. Quindi $f^{-1}\in\mathcal C^0(J)$ (continuità dell'inversa). Applico il CDV:
$$\lim_{y\to y_0}\frac{f^{-1}(y)-f^{-1}(y_0)}{y-y_0} = \lim_{x\to x_0}\frac{x-x_0}{f(x)-f(x_0)},$$
con $y = f(x)\xrightarrow[x\to x_0]{}f(x_0) = y_0$ e $x = f^{-1}(y)\xrightarrow[y\to y_0]{}f^{-1}(y_0) = x_0$. Quindi
$$= \lim_{x\to x_0}\frac1{\dfrac{f(x)-f(x_0)}{x-x_0}} = \frac1{f'(x_0)}$$
per l'algebra dei limiti finiti, dato che $f'(x_0)\neq0$. $\blacksquare$` },

{ t: "es", titolo: R`Derivata dell'inversa: $\log$, $\arcsin$, $\arctan$`, testo: R`
**Esempi/applicazioni.** Uso $(f^{-1})'(y) = \dfrac1{f'(f^{-1}(y))}$.

- $f(x) = e^x\Rightarrow f^{-1}(y) = \log(y)$:
$$\frac d{dy}\log(y) = (f^{-1})'(y) = \frac1{f'(f^{-1}(y))} = \frac1{e^{\log(y)}} = \frac1y.$$
- $f(x) = \sin(x)\Rightarrow f^{-1}(y) = \arcsin(y)$:
$$\frac d{dy}\arcsin(y) = (f^{-1})'(y) = \frac1{f'(f^{-1}(y))} = \frac1{\cos(\arcsin(y))}.$$
Ricordo che $\cos^2+\sin^2 = 1$, quindi
$$\cos^2(\arcsin(y))+\sin^2(\arcsin(y)) = 1\ \Rightarrow\ \cos^2(\arcsin(y))+y^2 = 1,$$
da cui mi ricavo $\cos(\arcsin(y)) = \sqrt{1-y^2}$, dopo aver discusso il segno scegliendo il dominio naturale del $\sin$ e dell'$\arcsin$ ($\arcsin(y)\in[-\frac\pi2,\frac\pi2]$, dove $\cos\ge0$). Quindi
$$\frac d{dy}\arcsin(y) = \frac1{\sqrt{1-y^2}}.$$
- $f(x) = \tan(x)\Rightarrow f^{-1}(y) = \arctan(y)$: $\ \frac d{dy}\arctan(y) = \frac1{f'(f^{-1}(y))}$. Ora
$$f'(x) = \frac d{dx}\frac{\sin(x)}{\cos(x)} = \frac{\cos(x)\cdot\cos(x)-\sin(x)\cdot(-\sin(x))}{\cos(x)^2} = \frac{(\cos(x))^2+(\sin(x))^2}{(\cos(x))^2} = \frac1{(\cos(x))^2} = 1+(\tan(x))^2,$$
quindi
$$\frac d{dy}\arctan(y) = \frac1{1+\tan^2(f^{-1}(y))} = \frac1{1+(\tan(\arctan(y)))^2} = \frac1{1+y^2}.$$

In particolare, sempre per le primitive, abbiamo:
$$\boxed{\ \frac d{dx}\arctan(f(x)) = \frac1{1+f(x)^2}\cdot f'(x) = \frac{f'(x)}{1+f(x)^2}.\ }$$` },

{ t: "def", titolo: R`Derivata seconda`, testo: R`
Sia $\emptyset\neq I\subseteq\mathbb R$ un intervallo e $f:I\to\mathbb R$ derivabile **in $I$**. Dato $x_0\in I$, se esiste finito
$$\exists\lim_{x\to x_0}\frac{f'(x)-f'(x_0)}{x-x_0}\in\mathbb R,$$
allora tale limite si dice **derivata seconda** di $f$ in $x_0$ e si indica con
$$\boxed{\ f''(x_0) = \lim_{x\to x_0}\frac{f'(x)-f'(x_0)}{x-x_0}.\ }$$
In tal caso si dice che $f$ è **derivabile due volte in $x_0$**.` },

{ t: "es", titolo: R`Notazioni per la derivata seconda`, testo: R`
$$f''(x_0) = f''\Big|_{x=x_0} = \frac{d^2f}{dx^2}(x_0) = \frac{d^2f}{dx^2}\Big|_{x=x_0} = D^2f(x_0) = \ddot f(x_0) = \ddot f\Big|_{x=x_0} = \dots$$` },

{ t: "def", titolo: R`Derivata $n$-esima`, testo: R`
La definizione di derivata seconda può essere iterata come segue. Sia $\emptyset\neq I\subseteq\mathbb R$ un intervallo e $f:I\to\mathbb R$. Sia $n\in\mathbb N$ e assumiamo che $f$ sia derivabile $(n-1)$ volte **in $I$**. Dato $x_0\in I$, se esiste finito
$$\exists\lim_{x\to x_0}\frac{f^{(n-1)}(x)-f^{(n-1)}(x_0)}{x-x_0}\in\mathbb R,$$
allora tale limite si dice **derivata $n$-esima** di $f$ in $x_0$ e si indica
$$\boxed{\ f^{(n)}(x_0) = \left(f^{(n-1)}\right)'(x_0) = \lim_{x\to x_0}\frac{f^{(n-1)}(x)-f^{(n-1)}(x_0)}{x-x_0}.\ }$$
In tal caso, $f$ si dice **derivabile $n$ volte in $x_0$**.` },

{ t: "es", titolo: R`Notazioni per la derivata $n$-esima`, testo: R`
$$f^{(n)}(x_0) = f^{(n)}\Big|_{x=x_0} = \frac{d^nf}{dx^n}(x_0) = \frac{d^nf}{dx^n}\Big|_{x=x_0} = D^nf(x_0) = \dots$$
Quindi le derivate sono:
- **zeresima:** $f^{(0)} = f$ ($n = 0$);
- **prima:** $f^{(1)} = f'$ ($n = 1$);
- **seconda:** $f^{(2)} = f''$ ($n = 2$);
- **terza:** $f^{(3)} = f'''$ ($n = 3$);
- $\vdots$
- **$n$-esima:** $f^{(n)} = \left(f^{(n-1)}\right)' = f^{\overbrace{\prime\prime\cdots\prime}^{n\text{ volte}}}$.` },

{ t: "def", titolo: R`Le classi $\mathcal C^n(I)$ e $\mathcal C^\infty(I)$`, testo: R`
Dato $\emptyset\neq I\subseteq\mathbb R$ intervallo, definiamo
$$\mathcal C^n(I) = \left\lbrace f:I\to\mathbb R:\ f\text{ è derivabile } n\text{ volte in } I\text{ e } f^{(n)}\text{ è continua su } I\right\rbrace$$
per ogni $n\in\mathbb N_0$, e
$$\mathcal C^\infty(I) = \left\lbrace f:I\to\mathbb R:\ f\text{ è derivabile } n\text{ volte su } I\text{ per ogni } n\in\mathbb N\right\rbrace.$$

Esempio: $e^x\in\mathcal C^n(\mathbb R)$ $\forall n\in\mathbb N\Rightarrow e^x\in\mathcal C^\infty(\mathbb R)$.` },

{ t: "oss", titolo: R`$f\in\mathcal C^n$ ⇒ tutte le derivate fino alla $n$-esima sono continue`, testo: R`
Se $n = 0$, allora $\mathcal C^0(I) = \lbrace f:I\to\mathbb R:\ f\text{ è continua su } I\rbrace$.

Se $n\ge1$, allora:
$$f\in\mathcal C^n(I)\Rightarrow f^{(n)}\text{ è continua}\Rightarrow f^{(n-1)}\text{ è derivabile (perché } f^{(n)} = (f^{(n-1)})')$$
$$\Rightarrow f^{(n-1)}\text{ è continua}\Rightarrow f^{(n-2)}\text{ è derivabile}\Rightarrow f^{(n-2)}\text{ è continua}\Rightarrow\cdots$$
(derivabile $\Rightarrow$ continua), ovvero troviamo che
$$f\in\mathcal C^n(I)\ \Rightarrow\ f,f',f'',f''',\dots,f^{(n-1)},f^{(n)}\in\mathcal C^0(I).$$

Valgono inoltre le seguenti inclusioni **STRETTE**:
$$\mathcal C^0(I)\supsetneq\mathcal C^1(I)\supsetneq\mathcal C^2(I)\supsetneq\dots\supsetneq\mathcal C^n(I)\supsetneq\dots\supsetneq\mathcal C^\infty(I).$$` },

]});
