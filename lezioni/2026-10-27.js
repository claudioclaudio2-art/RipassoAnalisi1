L({ data: "2026-10-27", n: 18, titolo: "Limiti di funzioni monotone", voci: [

{ t: "es", titolo: R`Perché nel cambio di variabile serve l'ipotesi 3`, testo: R`
$f:\mathbb R\to\mathbb R$, $f(x) = 5$ per ogni $x$; $g(y) = 1$ per $y\neq5$, $g(5) = 2$.

Per $x\to0$: $\lim f(x) = 5 =: y_0$ e $\lim_{y\to5}g(y) = 1$. Ma $g(f(x)) = g(5) = 2$ per ogni $x$, quindi $\lim_{x\to0}g(f(x)) = 2\neq1$.

Infatti entrambe le opzioni sono false: (3a) $f(x)\neq5$ è falsa ovunque; (3b) $\lim_{y\to5}g(y) = 1\neq2 = g(5)$.` },

{ t: "teo", s: "dim", diff: 3, titolo: R`Limiti di funzioni monotone (caso reale)`, testo: R`
Siano $f:A\to\mathbb R$, $x_0\in\mathbb R$, e sia $I$ un intorno di $x_0$ in cui $f$ è monotona.

**(i)** Se $x_0$ è di accumulazione **sinistro** per $A$ e $f$ è monotona su $A\cap I\cap(-\infty,x_0)$, allora
$$\exists\lim_{x\to x_0^-}f(x) = \begin{cases}\sup f\big|_{A\cap I\cap(-\infty,x_0)} & f \text{ crescente}\\ \inf f\big|_{A\cap I\cap(-\infty,x_0)} & f\text{ decrescente.}\end{cases}$$
**(ii)** Se $x_0$ è di accumulazione **destro** e $f$ è monotona su $A\cap I\cap(x_0,+\infty)$, allora
$$\exists\lim_{x\to x_0^+}f(x) = \begin{cases}\inf f\big|_{A\cap I\cap(x_0,+\infty)} & f\text{ crescente}\\ \sup f\big|_{A\cap I\cap(x_0,+\infty)} & f\text{ decrescente.}\end{cases}$$`, dim: R`
Faccio il caso sinistro con $f$ **crescente** (gli altri sono analoghi). Restringendomi all'intorno posso supporre che il dominio sia $A' = A\cap I\cap(-\infty,x_0)$. Sia $S = \sup_{A'}f\in\mathbb R\cup\lbrace+\infty\rbrace$, che esiste sempre.

**Caso 1: $S\in\mathbb R$.** Per la caratterizzazione del sup, dato $\varepsilon>0$ esiste $x_\varepsilon\in A'$ con $f(x_\varepsilon)>S-\varepsilon$, e $x_\varepsilon<x_0$.
- Se $x\in A'$ con $x_\varepsilon<x<x_0$, per **monotonia** $f(x)\ge f(x_\varepsilon)>S-\varepsilon$.
- $S$ è un maggiorante, quindi $f(x)\le S<S+\varepsilon$ per ogni $x\in A'$.

Quindi con $\delta = x_0-x_\varepsilon>0$: $|f(x)-S|<\varepsilon$ per ogni $x\in A'$ con $x_0-\delta<x<x_0$. Questo è $\lim_{x\to x_0^-}f(x) = S$.

**Caso 2: $S = +\infty$.** Fissato $M>0$, $f$ non è limitata superiormente, quindi esiste $x_M\in A'$ con $f(x_M)>M$. Per monotonia $f(x)>M$ per ogni $x\in A'$ con $x_M<x<x_0$. Quindi $\lim_{x\to x_0^-}f(x) = +\infty$. $\blacksquare$`, fig: "monotona" },

{ t: "oss", titolo: R`Il limite di una funzione monotona esiste sempre`, testo: R`
Il teorema dice in particolare che i limiti laterali di una funzione monotona **esistono sempre** (finiti o infiniti).` },

{ t: "es", titolo: R`Applicazioni: continuità delle funzioni elementari`, testo: R`
Usando il teorema (insieme ad altri argomenti, vedi sotto) si ottiene:
- $\displaystyle\lim_{x\to x_0}a^x = a^{x_0}$ per ogni $x_0\in\mathbb R$, $a>0$ ($a^x$ è crescente per $a>1$, costante per $a=1$, decrescente per $0<a<1$);
- $\displaystyle\lim_{x\to x_0}\log_ax = \log_ax_0$ per ogni $x_0>0$, e $\displaystyle\lim_{x\to0^+}\log_ax = -\infty$ se $a>1$, $+\infty$ se $0<a<1$;
- $\displaystyle\lim_{x\to x_0}x^\alpha = x_0^\alpha$ per $x_0>0$, e $\displaystyle\lim_{x\to0^+}x^\alpha = 0$ se $\alpha>0$, $+\infty$ se $\alpha<0$;
- $\displaystyle\lim_{x\to x_0}\sin x = \sin x_0$, $\displaystyle\lim_{x\to x_0}\cos x = \cos x_0$ (sono monotone a tratti).

**Attenzione, passaggio delicato.** Il teorema sulle monotone garantisce solo che i limiti **laterali esistono** (e valgono $\sup$/$\inf$), **non** che siano uguali a $f(x_0)$: la funzione segno è monotona ma salta in $0$. Gli appunti fanno lo stesso salto; per chiuderlo:
- **$a^x$:** $a^x = a^{x_0}\cdot a^{x-x_0}$ e, con $h = x-x_0\to0$, $\lim_{h\to0}a^h = 1$ (lezione del 19/10), quindi $a^x\to a^{x_0}$.
- **$\log_a x$:** è monotona e la sua immagine è tutto $\mathbb R$. Se ci fosse un salto in $x_0$ (es. $a>1$: $\lim_{x\to x_0^-}\log_ax<\log_ax_0$), i valori strettamente compresi tra il limite sinistro e $\log_ax_0$ non sarebbero assunti da nessun $x$, contro la suriettività. Quindi i limiti laterali valgono $\log_a x_0$.
- **$x^\alpha$ per $x_0>0$:** $x^\alpha = e^{\alpha\log x}$, composizione dei due casi precedenti (cambio di variabile).
- **$\sin$ e $\cos$:** già dimostrato con la prostaferesi (esercizio del 19/10).` },

{ t: "teo", s: "omessa", diff: 2, titolo: R`Limiti di funzioni monotone (caso infinito)`, testo: R`
**(i)** Sia $+\infty$ di accumulazione per $A$ e $f$ monotona definitivamente per $x\to+\infty$ (su $A\cap I$, $I$ intorno di $+\infty$). Allora
$$\exists\lim_{x\to+\infty}f(x) = \begin{cases}\sup f|_{A\cap I} & f\text{ crescente}\\ \inf f|_{A\cap I} & f\text{ decrescente.}\end{cases}$$
**(ii)** Sia $-\infty$ di accumulazione per $A$ e $f$ monotona definitivamente per $x\to-\infty$. Allora
$$\exists\lim_{x\to-\infty}f(x) = \begin{cases}\inf f|_{A\cap I} & f\text{ crescente}\\ \sup f|_{A\cap I} & f\text{ decrescente.}\end{cases}$$`, dim: R`
Non fatta a lezione, ma analoga al caso reale: per (i) con $f$ crescente e $S = \sup f$ finito, dato $\varepsilon$ esiste $x_\varepsilon$ con $f(x_\varepsilon)>S-\varepsilon$ e per monotonia $S-\varepsilon<f(x)\le S$ per ogni $x>x_\varepsilon$: l'intorno è $(x_\varepsilon,+\infty)$. $\blacksquare$` },

{ t: "es", titolo: R`Applicazioni: limiti agli estremi delle funzioni elementari`, testo: R`
- $\displaystyle\lim_{x\to+\infty}a^x = +\infty$ se $a>1$, $0$ se $0<a<1$; $\displaystyle\lim_{x\to-\infty}a^x = 0$ se $a>1$, $+\infty$ se $0<a<1$.
- $\displaystyle\lim_{x\to+\infty}\log_ax = +\infty$ se $a>1$, $-\infty$ se $0<a<1$.
- $\displaystyle\lim_{x\to+\infty}x^\alpha = +\infty$ se $\alpha>0$, $0$ se $\alpha<0$.

Domanda per dopo: sappiamo che $a^x$, $\log_ax$, $x^\alpha\to+\infty$ (con $a>1$, $\alpha>0$), ma **con quali velocità**? (Vedi gerarchia degli infiniti, 29/10.)` },

{ t: "oss", titolo: R`Limiti della forma $f(x)^{g(x)}$`, testo: R`
Con $f>0$, si usa $f(x)^{g(x)} = e^{g(x)\log f(x)}$: la funzione è la composizione di $x\mapsto g(x)\log f(x)$ e di $y\mapsto e^y$.

Quindi basta studiare $\lim_{x\to x_0}g(x)\log f(x) = y_0$ e poi usare il cambio di variabile (l'esponenziale è monotona crescente, con limiti noti):
$$\lim_{x\to x_0} f(x)^{g(x)} = \begin{cases} e^{y_0} & y_0\in\mathbb R\\ +\infty & y_0 = +\infty\\ 0 & y_0 = -\infty.\end{cases}$$
Esempio: $\lim_{x\to+\infty}\left(2+\frac1x\right)^x$: $x\log\left(2+\frac1x\right)\to+\infty\cdot\log2 = +\infty$ (regola 3), quindi il limite è $+\infty$.` },

{ t: "es", titolo: R`Esempio dagli appunti: $\lim_{x\to+\infty}x^{1/\log(1+x)} = e$`, testo: R`
Qui $f(x) = x$ e $g(x) = \dfrac1{\log(1+x)}$. Calcolo il limite dell'esponente:
$$g(x)\log f(x) = \frac{\log x}{\log(1+x)} = \frac{\log x}{\log\big(x(1+\frac1x)\big)} = \frac{\log x}{\log x+\log(1+\frac1x)} = \frac1{1+\dfrac{\log(1+\frac1x)}{\log x}}.$$
Ora $\log(1+\frac1x)\to\log1 = 0$ (cambio di variabile $y = 1+\frac1x\to1$) e $\log x\to+\infty$ (funzione crescente), quindi $\dfrac{\log(1+\frac1x)}{\log x}\to0$ per l'algebra dei limiti infiniti. Pertanto
$$\lim_{x\to+\infty}g(x)\log f(x) = \frac1{1+0} = 1,\qquad\text{da cui}\qquad\lim_{x\to+\infty}x^{1/\log(1+x)} = \lim_{y\to1}e^y = e.$$` },

]});
