L({ data: "2026-10-08", n: 7, titolo: "Funzioni reali, funzioni elementari, immagine", voci: [

{ t: "def", titolo: R`Funzione a variabile reale / a valori reali`, testo: R`
Sia $f : A\to B$. Se $A\subseteq\mathbb R$, $f$ si dice **a variabile reale**; se $B\subseteq\mathbb R$, **a valori reali**. In tal caso $G(f)\subseteq\mathbb R^2$ è un sottoinsieme del piano.` },

{ t: "teo", s: "omessa", titolo: R`Criterio della retta verticale`, testo: R`
Un sottoinsieme $G\subseteq\mathbb R^2$ è il grafico di una funzione $f : A\to\mathbb R$ ($A \subseteq \mathbb R$) se e solo se **ogni retta verticale** $x = x_0$ interseca $G$ in **al più un punto** (magari nessuno).

Es. una circonferenza non è un grafico; $f(x) = 1$ per $x\ge0$ e $0$ per $x<0$ sì.` },

{ t: "att", titolo: R`Il dominio va determinato da noi`, testo: R`
Spesso (anche all'esame) dominio e codominio non sono indicati: bisogna capire dove la legge **ha senso**.
- $f(x) = \sqrt x$: serve $x\ge 0$, quindi $D(f) = [0,+\infty)$ (idem per $\sqrt[3]x$ con le nostre convenzioni).
- $f(x) = \sqrt{x^2+1}$: $x^2+1\ge0$ sempre, quindi $D(f) = \mathbb R$.
- $f(x) = \dfrac{1}{\sqrt{x^2-1}}$: serve $x^2-1 > 0$ (sotto radice e al denominatore), quindi $D(f) = (-\infty,-1)\cup(1,+\infty)$.` },

{ t: "def", titolo: R`Funzioni elementari: costanti, lineari, affini, quadratiche, polinomiali`, testo: R`
- **Costante**: $f(x) = c$ per ogni $x$.
- **Lineare**: $f(x) = mx$. Proprietà: omogeneità $f(cx) = c f(x)$ e additività $f(x+y) = f(x)+f(y)$. Con $m=1$: funzione **identità**.
- **Affine**: $f(x) = mx+q$ ($m$ pendenza, $q$ intercetta).
- **Quadratica**: $f(x) = ax^2+bx+c$ con $a\neq0$. Se $b=c=0$ è 2-omogenea: $f(tx) = t^2f(x)$.
- **Polinomiale** di grado $n$: $f(x) = \sum_{k=0}^n a_kx^k$ con $a_n\neq0$.` },

{ t: "def", titolo: R`Funzioni esponenziali e logaritmiche`, testo: R`
- **Esponenziale**: $f:\mathbb R\to\mathbb R$, $f(x) = a^x$ con $a>0$ (per $a \ne 1$ ha immagine $(0,+\infty)$).
- **Logaritmica**: $f : (0,+\infty)\to\mathbb R$, $f(x) = \log_a x$ con $a>0$, $a\neq1$.

Entrambe crescenti se $a>1$, decrescenti se $0<a<1$.` },

{ t: "def", titolo: R`Funzioni trigonometriche`, testo: R`
Definite tramite la circonferenza goniometrica, con l'angolo $x$ in **radianti** (lunghezza dell'arco): $\sin, \cos : \mathbb R\to[-1,1]$, periodiche di periodo $2\pi$.
- **Pitagora**: $\sin^2x+\cos^2x = 1$ per ogni $x$.
- **Tangente**: $\tan x = \dfrac{\sin x}{\cos x}$ su $\mathbb R\setminus\lbrace\frac\pi2+k\pi : k\in\mathbb Z\rbrace$.
- **Cotangente**: $\cot x = \dfrac{\cos x}{\sin x}$ su $\mathbb R\setminus\lbrace k\pi : k\in\mathbb Z\rbrace$.` },

{ t: "def", titolo: R`Funzioni iperboliche`, testo: R`
$$\sinh x = \frac{e^x - e^{-x}}{2}\ \text{(dispari)}, \qquad \cosh x = \frac{e^x+e^{-x}}{2}\ \text{(pari)},$$
$$\tanh x = \frac{\sinh x}{\cosh x},\qquad \coth x = \frac{\cosh x}{\sinh x}\ (x\neq0).$$` },

{ t: "es", s: "casa", titolo: R`$\cosh^2 x - \sinh^2 x = 1$`, testo: R`
Dimostrare che $\cosh^2x-\sinh^2x = 1$ per ogni $x\in\mathbb R$.`, dim: R`
$$\cosh^2x-\sinh^2x = \frac{e^{2x}+2+e^{-2x}}{4}-\frac{e^{2x}-2+e^{-2x}}{4} = \frac44 = 1.\ \blacksquare$$` },

{ t: "def", titolo: R`Parte intera, funzione di Dirichlet`, testo: R`
- **Parte intera inferiore** (floor): $\lfloor x\rfloor = \max\lbrace k\in\mathbb Z : k\le x\rbrace$. Es. $\lfloor 1{,}75\rfloor = 1$, $\lfloor -1{,}3\rfloor = -2$.
- **Parte intera superiore** (ceiling): $\lceil x\rceil = \min\lbrace k\in\mathbb Z : k\ge x\rbrace$.
- **Dirichlet**: $D(x) = 1$ se $x\in\mathbb Q$, $D(x) = 0$ se $x\notin\mathbb Q$ (grafico a "nuvole di punti").` },

{ t: "def", titolo: R`Immagine`, testo: R`
Sia $f : A\to B$ e $E\subseteq A$. L'**immagine di $E$** tramite $f$ è
$$f(E) = \lbrace f(x) : x\in E\rbrace = \lbrace y\in B : \exists x\in E,\ y = f(x)\rbrace\subseteq B.$$
L'**immagine di $f$** è $\mathrm{Im}(f) = f(A)$.

Esempio: per $f:\mathbb N\to\mathbb N$, $f(x)=2x$, $\mathrm{Im}(f)$ = numeri pari.` },

]});
