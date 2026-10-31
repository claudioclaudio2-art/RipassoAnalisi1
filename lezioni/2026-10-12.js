L({ data: "2026-10-12", n: 9, titolo: "Controimmagine, composizione, iniettività, inversa", voci: [

{ t: "es", titolo: R`Calcolo dell'immagine: $2x+1$ e $x^2$`, testo: R`
**$f(x) = 2x+1$ su $\mathbb R$.** Cerco $y$ tali che $y = 2x+1$ per qualche $x$: basta $x = \frac{y-1}2$. Quindi $\mathrm{Im}(f) = \mathbb R$.

**$f(x) = x^2$ su $\mathbb R$.** Se $y = x^2$ allora $y\ge0$, quindi $\mathrm{Im}(f)\subseteq[0,+\infty)$. Viceversa per $y\ge0$ vale $y = (\sqrt y)^2$. Quindi $\mathrm{Im}(f) = [0,+\infty)$.` },

{ t: "def", titolo: R`Controimmagine (antiimmagine, preimmagine)`, testo: R`
Data $f:A\to B$ e $Y\subseteq B$, la **controimmagine** di $Y$ tramite $f$ è
$$f^{\leftarrow}(Y) = \lbrace x\in A : f(x)\in Y\rbrace\subseteq A.$$
Attenzione: $Y$ è un **insieme**. Può essere vuota (se nessun punto va in $Y$).` },

{ t: "def", titolo: R`Funzione composta`, testo: R`
Siano $f : A\to B$, $g : C\to D$ con $f(A)\cap C\neq\emptyset$ (dove arriva $f$ può partire $g$). Posto
$$E = f^{\leftarrow}\big(f(A)\cap C\big) = \lbrace x\in A: f(x)\in C\rbrace\subseteq A,$$
la **funzione composta** "$g$ dopo $f$" è $g\circ f : E\to D$, $(g\circ f)(x) = g(f(x))$.

Es. $f(x) = x^2+1$, $g(y) = \sqrt y$: $\mathrm{Im} f = [1,+\infty)\subseteq D(g)$, quindi $(g\circ f)(x) = \sqrt{x^2+1}$ è definita su tutto $\mathbb R$.

(In alcuni testi si chiede $f(A)\subseteq C$; noi usiamo la richiesta più debole $f(A)\cap C\neq\emptyset$.)` },

{ t: "att", titolo: R`In generale $g\circ f\neq f\circ g$`, testo: R`
Prima le mutande e poi i pantaloni è diverso da prima i pantaloni e poi le mutande.

Con $f(x) = x^2$, $g(x) = \sin x$: $(g\circ f)(x) = \sin(x^2)$, $(f\circ g)(x) = \sin^2 x$. In $x = \frac{\sqrt\pi}{2}$: $\sin\frac\pi4 = \frac{\sqrt2}2$, mentre $\sin^2\frac{\sqrt\pi}2 \ne \frac{\sqrt 2}2$.` },

{ t: "def", titolo: R`Funzione iniettiva, suriettiva, biiettiva`, testo: R`
Sia $f : A\to B$.
- **Iniettiva**: ogni $y\in B$ è immagine di **al più un** elemento di $A$. Cioè $\forall y\in B$, $f^{\leftarrow}(\lbrace y\rbrace) = \emptyset$ oppure $\exists! x\in A$ con $f^{\leftarrow}(\lbrace y\rbrace) = \lbrace x\rbrace$. Equivalentemente: $f(x_1) = f(x_2)\Rightarrow x_1 = x_2$.
- **Suriettiva**: ogni $y\in B$ è immagine di **almeno un** elemento: $\forall y\in B$, $f^{\leftarrow}(\lbrace y\rbrace)\neq\emptyset$, cioè $\mathrm{Im}(f) = B$.
- **Biiettiva** (biunivoca): iniettiva e suriettiva, cioè $\forall y\in B\ \exists! x\in A: y = f(x)$.

Graficamente (funzioni reali): iniettiva $\iff$ ogni retta orizzontale tocca il grafico in al più un punto; suriettiva $\iff$ in almeno un punto per ogni $y\in B$.` },

{ t: "es", titolo: R`Il seno: iniettivo o suriettivo?`, testo: R`
- $\sin:\mathbb R\to[-1,1]$ è suriettiva ma **non** iniettiva ($\sin 0 = \sin\pi$).
- $\sin : \left[-\frac\pi2,\frac\pi2\right]\to\mathbb R$ è iniettiva ma **non** suriettiva (non raggiunge $2$).` },

{ t: "def", titolo: R`Funzione inversa`, testo: R`
Sia $f: A\to B$ **iniettiva**. Allora $f$ è **invertibile** e la sua inversa è l'unica funzione $f^{-1}:\mathrm{Im}(f)\to A$ tale che
$$f^{-1}\circ f = \mathrm{Id}_A,\qquad\text{cioè } f^{-1}(f(x)) = x\ \ \forall x\in A,$$
dove $\mathrm{Id}_A : A\to A$, $\mathrm{Id}_A(x) = x$ è la **funzione identità**.` },

{ t: "att", titolo: R`Per noi invertibile = iniettiva`, testo: R`
In alcuni testi sono invertibili solo le funzioni biunivoche. Per noi basta l'iniettività: l'inversa è definita sull'immagine.` },

{ t: "es", s: "casa", titolo: R`Ogni funzione è suriettiva sull'immagine`, testo: R`
Dimostrare che $f : A\to\mathrm{Im}(f)$ è sempre suriettiva.`, dim: R`
Se $y\in\mathrm{Im}(f) = \lbrace f(x):x\in A\rbrace$, per definizione esiste $x\in A$ con $y = f(x)$. $\blacksquare$` },

{ t: "def", titolo: R`Restrizione di una funzione`, testo: R`
Sia $f : A\to B$ e $\emptyset\neq C\subseteq A$. La **restrizione** di $f$ a $C$ è $f|_C : C\to B$, $f|_C(x) = f(x)$ per $x\in C$.

Esempio: $\sin|_{[-\pi/2,\pi/2]}$ è iniettiva, quindi si può invertire: $\arcsin = \left(\sin|_{[-\pi/2,\pi/2]}\right)^{-1} : [-1,1]\to\left[-\frac\pi2,\frac\pi2\right]$.` },

]});
