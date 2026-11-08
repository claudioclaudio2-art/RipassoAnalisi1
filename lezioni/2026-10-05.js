L({ data: "2026-10-05", n: 5, titolo: "Intervalli, estremo superiore e inferiore, modulo", voci: [

{ t: "def", titolo: R`Intervallo`, testo: R`
$I\subseteq\mathbb R$ è un **intervallo** se $\forall a,b\in I$ con $a\le b$ vale $a\le x\le b \Rightarrow x \in I$ (contiene tutti i punti tra due suoi punti).

Con $a<b$ reali:
- **limitati**: $(a,b)$ aperto, $[a,b]$ chiuso, $[a,b)$ e $(a,b]$;
- **illimitati**: $(a,+\infty)$, $[a,+\infty)$, $(-\infty,b)$, $(-\infty, b]$.

Es. $[2,3]\cup[4,5]$ **non** è un intervallo.` },

{ t: "att", titolo: R`$\pm\infty$ sono simboli, non numeri`, testo: R`
Scritture come $\infty - 5$ o $\frac{\infty}{27}$ sono **errate**. Si usa la retta estesa $\overline{\mathbb R} = \mathbb R\cup\lbrace-\infty,+\infty\rbrace$.` },

{ t: "def", titolo: R`Maggiorante, minorante, insieme limitato`, testo: R`
Sia $\emptyset\neq A\subseteq\mathbb R$.
- $A$ è **superiormente limitato** se $\exists M\in\mathbb R$ con $a\le M$ $\forall a\in A$. $M$ si dice **maggiorante** ($\iff A\subseteq(-\infty,M]$).
- $A$ è **inferiormente limitato** se $\exists m\in\mathbb R$ con $a\ge m$ $\forall a \in A$. $m$ si dice **minorante**.

Es. $A = [2,3]\cup\lbrace5\rbrace$: maggioranti $5, 6, 99{,}7,\dots$ (ma **non** $4$, perché $5\in A$); minoranti $2, 1, -17,\dots$ (ma **non** $3{,}5$).

Es. $A = \lbrace x\in\mathbb Q: x\ge0,\ x^2<2\rbrace$: maggioranti $200$, $3$, $\sqrt2$; minoranti $0$, $-\frac57$.` },

{ t: "def", titolo: R`Massimo e minimo di un insieme`, testo: R`
- $M = \max A$ se $M$ è un maggiorante di $A$ **e** $M\in A$.
- $m = \min A$ se $m$ è un minorante di $A$ **e** $m\in A$.

Un intervallo aperto $(a,b)$ non ha né massimo né minimo.` },

{ t: "prop", s: "dim", diff: 1, titolo: R`Unicità di massimo e minimo`, testo: R`
Sia $\emptyset\neq A\subseteq\mathbb R$. Se $\min A$ (o $\max A$) esiste, allora è unico.`, dim: R`
Siano $m_1, m_2$ due minimi di $A$.
- $m_1$ è minorante e $m_2\in A$ $\Rightarrow$ $m_1\le m_2$;
- $m_2$ è minorante e $m_1\in A$ $\Rightarrow$ $m_2\le m_1$.

Quindi $m_1 = m_2$. Per il massimo è analogo. $\blacksquare$` },

{ t: "def", titolo: R`Estremo superiore e inferiore`, testo: R`
Se $A$ è superiormente limitato, il suo **estremo superiore** è il **minimo dei maggioranti**:
$$\sup A = \min\lbrace M\in\mathbb R : a\le M\ \forall a\in A\rbrace.$$
Se $A$ è inferiormente limitato, il suo **estremo inferiore** è il **massimo dei minoranti**:
$$\inf A = \max\lbrace m\in\mathbb R : a\ge m\ \forall a\in A\rbrace.$$
Es. $\inf(a,b) = a$ ma $\min(a,b)$ non esiste; $\sup(a,b] = \max(a,b] = b$.`, fig: "sup" },

{ t: "es", s: "casa", diff: 1, titolo: R`Se esiste $\max A$ allora $\max A = \sup A$`, testo: R`
Dimostrare: se $A$ ammette massimo allora $\max A = \sup A$ (e se ammette minimo, $\min A = \inf A$).`, dim: R`
Sia $M = \max A$. $M$ è un maggiorante. Se $M'$ è un altro maggiorante, siccome $M\in A$ vale $M\le M'$. Quindi $M$ è il più piccolo dei maggioranti: $M = \sup A$. Per il minimo è analogo. $\blacksquare$` },

{ t: "teo", s: "dim", diff: 2, titolo: R`Completezza di $\mathbb R$ (2ª forma: esistenza del sup)`, testo: R`
1. Ogni $\emptyset\neq A\subseteq\mathbb R$ superiormente limitato ammette estremo superiore.
2. Ogni $\emptyset\neq A\subseteq\mathbb R$ inferiormente limitato ammette estremo inferiore.`, dim: R`
Facciamo (1); (2) è analoga. Sia $B = \lbrace$maggioranti di $A\rbrace$: dobbiamo mostrare che $B$ ha minimo.

$B\neq\emptyset$ perché $A$ è superiormente limitato, e per definizione di maggiorante $a\le b$ per ogni $a\in A$, $b\in B$.

Per la completezza (1ª forma) esiste un separatore $c\in\mathbb R$ con $a\le c\le b$ per ogni $a\in A$, $b\in B$. Allora:
- $a \le c\ \forall a\in A$: $c$ è un maggiorante, cioè $c\in B$;
- $c\le b\ \forall b\in B$: $c$ è un minorante di $B$.

Quindi $c = \min B = \sup A$. $\blacksquare$` },

{ t: "def", titolo: R`Insieme illimitato: $\sup A = +\infty$`, testo: R`
$A$ è **superiormente illimitato** (non sup. limitato), e si scrive $\sup A = +\infty$, se
$$\forall M\in\mathbb R\ \exists a\in A : a > M.$$
Analogamente $\inf A = -\infty$ se $\forall m\in\mathbb R\ \exists a\in A: a < m$.

Esempi: $\sup\mathbb N = +\infty$, $\inf\mathbb N = \min\mathbb N = 1$. Per $A = \mathbb R$: $\sup\mathbb R = +\infty$, $\inf\mathbb R = -\infty$, e $\mathbb R$ non ha né massimo né minimo. Attenzione: in $\overline{\mathbb R}$ il prof **barra** le scritture "$\sup\overline{\mathbb R} = +\infty$" e "$\max\overline{\mathbb R} = +\infty$" (sup e max sono definiti per sottoinsiemi di $\mathbb R$). Per $A = \lbrace x\in\mathbb Q: x\ge0, x^2<3\rbrace$: $\sup A = \sqrt3$ (non è massimo), $\min A = 0$.` },

{ t: "teo", s: "omessa", diff: 2, titolo: R`Caratterizzazione di sup e inf`, testo: R`
Sia $A$ superiormente limitato. Allora $s = \sup A$ se e solo se
1. $s$ è un maggiorante di $A$: $a\le s\ \forall a\in A$;
2. $\forall\varepsilon > 0\ \exists a\in A : a > s - \varepsilon$.

Sia $A$ inferiormente limitato. Allora $i = \inf A$ se e solo se
1. $i$ è un minorante di $A$;
2. $\forall \varepsilon >0\ \exists a\in A : a < i + \varepsilon$.`, dim: R`
($\Rightarrow$) $s$ è un maggiorante per definizione. Se per qualche $\varepsilon>0$ fosse $a\le s-\varepsilon$ per ogni $a\in A$, allora $s-\varepsilon$ sarebbe un maggiorante più piccolo di $s$, assurdo.

($\Leftarrow$) $s$ è un maggiorante. Se $M < s$ fosse un altro maggiorante, prendendo $\varepsilon = s - M > 0$ troverei $a\in A$ con $a > s-\varepsilon = M$, contro il fatto che $M$ è maggiorante. Quindi $s$ è il minimo dei maggioranti. $\blacksquare$` },

{ t: "def", titolo: R`Modulo (valore assoluto)`, testo: R`
Per $a\in\mathbb R$:
$$|a| = \begin{cases} a & a\ge 0\\ -a & a < 0\end{cases}\qquad\text{equivalentemente}\qquad|a| = \max\lbrace a,-a\rbrace.$$` },

{ t: "prop", s: "casa", diff: 1, titolo: R`Proprietà del modulo`, testo: R`
Per ogni $a,b\in\mathbb R$:
1. $-|a|\le a\le |a|$;
2. se $M\in\mathbb R$: $|a|\le M \iff M\ge0 \text{ e } -M\le a\le M$ (negli appunti è scritta solo l'implicazione $\Rightarrow$);
3. $|a| = 0\iff a = 0$;
4. $|ab| = |a|\,|b|$;
5. **disuguaglianza triangolare**: $|a+b|\le|a|+|b|$;
6. **disuguaglianza triangolare inversa**: $\big||a|-|b|\big|\le|a-b|$ (dimostrata il 6/10).`, dim: R`
1.–4. seguono dalla definizione distinguendo i casi di segno.

5. Entrambi i membri sono $\ge0$, quindi basta confrontare i quadrati:
$$|a+b|^2 = a^2 + 2ab + b^2 \le a^2 + 2|a||b| + b^2 = (|a|+|b|)^2,$$
perché $ab\le|ab| = |a||b|$. $\blacksquare$` },

]});
