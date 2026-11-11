L({ data: "2026-11-09", n: 25, titolo: "Gerarchia per successioni, Stirling, criterio del rapporto, successioni monotone, serie numeriche", voci: [

{ t: "teo", s: "dim", diff: 2, titolo: R`Gerarchia degli infiniti per successioni`, testo: R`
Valgono i seguenti limiti:
1. $\displaystyle\lim_{n\to+\infty}\frac{(\log_an)^\beta}{n^\alpha} = 0\qquad\forall a>1,\ \forall\alpha,\beta>0$;
2. $\displaystyle\lim_{n\to+\infty}\frac{n^\alpha}{a^n} = 0\qquad\forall a>1,\ \forall\alpha>0$;
3. $\displaystyle\lim_{n\to+\infty}\frac{a^n}{n!} = 0\qquad\forall a>1$;
4. $\displaystyle\lim_{n\to+\infty}\frac{n!}{n^n} = 0$.

Quindi, per $n\to+\infty$: $\ (\log n)^\beta\ \ll\ n^\alpha\ \ll\ a^n\ \ll\ n!\ \ll\ n^n$.`, dim: R`
**1 e 2** seguono dalla gerarchia degli infiniti per funzioni (29/10) e dalla caratterizzazione sequenziale del limite (5/11), con $a_n = n\to+\infty$.

**4.** Scrivo
$$\frac{n!}{n^n} = \frac{1\cdot2\cdot3\cdots n}{n\cdot n\cdot n\cdots n} = \frac1n\cdot\underbrace{\frac2n}_{\le1}\cdot\underbrace{\frac3n}_{\le1}\cdots\underbrace{\frac nn}_{\le1}\le\frac1n\qquad\forall n\in\mathbb N,$$
e quindi $0\le\frac{n!}{n^n}\le\frac1n$ per ogni $n\in\mathbb N$. Pertanto $\lim\frac{n!}{n^n} = 0$ per il teorema dei due carabinieri.

**3.** Osservo che
$$\frac{a^n}{n!} = \underbrace{\frac a1\cdot\frac a2\cdot\frac a3\cdots\frac an}_{n\text{ volte}}.$$
Siccome $a>1$ è fissato, esiste $N\in\mathbb N$ tale che $N\ge a$ (ad esempio $N = \lceil a\rceil$). Allora per ogni $n\in\mathbb N$ con $n>N$:
$$\frac{a^n}{n!} = \underbrace{\frac a1\cdots\frac aN}_{=\,a^N/N!}\cdot\underbrace{\frac a{N+1}}_{\le1}\cdots\underbrace{\frac a{n-1}}_{\le1}\cdot\frac an\le\frac{a^N}{N!}\cdot\frac an.$$
Quindi, dato $a>1$ e scelto $N\ge a$, vale
$$0\le\frac{a^n}{n!}\le\frac{a^{N+1}}{N!}\cdot\frac1n\qquad\text{definitivamente per } n\to+\infty,$$
e il secondo membro tende a $0$ (è una costante per $\frac1n$). Concludo con il teorema dei due carabinieri. $\blacksquare$` },

{ t: "teo", s: "omessa", titolo: R`Formula di Stirling`, testo: R`
Il punto 4 della gerarchia si può rendere più preciso:
$$\lim_{n\to+\infty}\frac{n!}{\sqrt{2\pi n}\left(\frac ne\right)^n} = 1,\qquad\text{cioè}\qquad n!\sim\sqrt{2\pi n}\left(\frac ne\right)^n\quad\text{per } n\to+\infty.$$
(Dimostrazione omessa.)` },

{ t: "es", titolo: R`$\sqrt[n]{n!}\to+\infty$ con Stirling`, testo: R`
Sia $a_n = \sqrt[n]{n!}$ per $n\ge2$. Per Stirling
$$a_n\sim\sqrt[n]{\sqrt{2\pi n}\left(\frac ne\right)^n} = (2\pi n)^{\frac1{2n}}\cdot\frac ne\qquad\text{per } n\to+\infty.$$
Osservo che $(2\pi n)^{\frac1{2n}}\to1$, perché
$$(2\pi n)^{\frac1{2n}} = e^{\frac{\log(2\pi n)}{2n}}\quad\text{e}\quad\frac{\log(2\pi n)}{2n}\to0\ \text{ per gerarchia}.$$
Quindi $a_n\sim\frac ne\to+\infty$, e dunque $\lim_{n\to+\infty}\sqrt[n]{n!} = +\infty$ per sostituzione asintotica.` },

{ t: "teo", s: "omessa", titolo: R`Criterio del rapporto`, testo: R`
Sia $(a_n)_{n\in\mathbb N}$ tale che $a_n>0$ definitivamente. Se
$$\exists\lim_{n\to+\infty}\frac{a_{n+1}}{a_n} = \ell\in[0,+\infty)\cup\lbrace+\infty\rbrace,$$
allora:
1. $\ell<1\ \Rightarrow\ \displaystyle\lim_{n\to+\infty}a_n = 0$;
2. $\ell>1\ \Rightarrow\ \displaystyle\lim_{n\to+\infty}a_n = +\infty$;
3. $\ell = 1$: **non posso dire nulla**.

(Dimostrazione omessa, ma segue dal confronto con la progressione geometrica.)` },

{ t: "es", titolo: R`Criterio del rapporto: il caso $\ell = 1$ non decide`, testo: R`
- $a_n = n$ per ogni $n\in\mathbb N$: $\lim a_n = +\infty$, ma $\dfrac{a_{n+1}}{a_n} = \dfrac{n+1}n\to1$.
- $b_n = \frac1n$ per ogni $n\in\mathbb N$: $\lim b_n = 0$, ma $\dfrac{b_{n+1}}{b_n} = \dfrac n{n+1}\to1$.

Stesso $\ell = 1$, comportamenti opposti.` },

{ t: "teo", s: "dim", diff: 1, titolo: R`Esistenza del limite per successioni monotone`, testo: R`
Se $(a_n)$ è **definitivamente monotona**, allora ammette limite:
$$\exists\lim_{n\to+\infty}a_n\in\mathbb R\cup\lbrace\pm\infty\rbrace.$$
Inoltre:
- se $(a_n)_{n\in\mathbb N}$ è definitivamente monotona **crescente**, allora $\displaystyle\lim_{n\to+\infty}a_n = \sup_{n\in\mathbb N}a_n$;
- se $(a_n)_{n\in\mathbb N}$ è definitivamente monotona **decrescente**, allora $\displaystyle\lim_{n\to+\infty}a_n = \inf_{n\in\mathbb N}a_n$.`, dim: R`
Già dimostrato: è un caso particolare, con $A = \mathbb N$ e $f:A\to\mathbb R$, $f(n) = a_n$, dell'analogo risultato per funzioni monotone (27/10), con $x_0 = +\infty = \sup\mathbb N$. (Se la monotonia vale solo da un certo $N$ in poi, si applica il teorema alla successione $(a_n)_{n\ge N}$: il limite non cambia, e sup/inf vanno presi sui termini con $n\ge N$.) $\blacksquare$` },

{ t: "oss", titolo: R`Monotona e limitata ⇒ convergente`, testo: R`
Se $(a_n)_{n\in\mathbb N}$ è **limitata** e definitivamente **monotona**, allora è **convergente**, cioè ammette limite finito. Infatti
$$\lim_{n\to+\infty}a_n = \begin{cases}\sup_{n\in\mathbb N}a_n\in\mathbb R & \text{se crescente}\\[2pt] \inf_{n\in\mathbb N}a_n\in\mathbb R & \text{se decrescente}\end{cases}$$
e sup e inf sono finiti perché la successione è limitata.` },

{ t: "def", titolo: R`Serie numerica`, testo: R`
Idea: una serie numerica è una "somma infinita".

Data una successione $(a_n)_{n\in\mathbb N}$ in $\mathbb R$, la **successione delle somme parziali** di $(a_n)$ è $(S_k)_{k\in\mathbb N}$ definita ponendo
$$S_k = \sum_{n=1}^ka_n\qquad\forall k\in\mathbb N.$$
Quindi $S_1 = a_1$, $S_2 = a_1+a_2$, $S_3 = a_1+a_2+a_3$, … e in generale $S_k = a_1+a_2+\dots+a_k$.

Si dice **serie numerica** di termine generale $a_n$ il limite, se esiste, della successione delle somme parziali:
$$\sum_{n=1}^{+\infty}a_n = \lim_{k\to+\infty}S_k = \lim_{k\to+\infty}\sum_{n=1}^ka_n\in\mathbb R\cup\lbrace\pm\infty\rbrace.$$
La serie $\sum_{n=1}^{+\infty}a_n$ si dice
- **convergente** se $(S_k)$ è convergente;
- **divergente** (a $\pm\infty$) se $(S_k)$ è divergente a $\pm\infty$;
- **indeterminata** (o irregolare) se $(S_k)$ è irregolare.` },

{ t: "es", titolo: R`Primi esempi di serie`, testo: R`
- $a_n = 0$ $\forall n$: $S_k = 0$ $\forall k$, quindi $\sum_{n=1}^{+\infty}0 = 0$.
- $a_n = c\in\mathbb R$ $\forall n$: $S_k = k\cdot c$, quindi
$$\sum_{n=1}^{+\infty}c = \lim_{k\to+\infty}k\,c = \begin{cases}+\infty & c>0\\ 0 & c=0\\ -\infty & c<0.\end{cases}$$
- $a_n = n$: $S_k = 1+2+\dots+k = \frac{k(k+1)}2$ (Gauss), quindi $\sum_{n=1}^{+\infty}n = +\infty$.
- $a_n = (-1)^{n+1}$: $S_k = \begin{cases}1 & k\text{ dispari}\\ 0 & k\text{ pari}\end{cases}$, quindi $(S_k)$ è irregolare e la serie $\sum_{n=1}^{+\infty}(-1)^{n+1}$ è **indeterminata**.` },

{ t: "teo", s: "dim", diff: 1, titolo: R`Serie geometrica`, testo: R`
Sia $r\in\mathbb R$ (la ragione). Allora
$$\sum_{n=0}^{+\infty}r^n = \begin{cases}\dfrac1{1-r} & |r|<1\ \text{(converge)}\\[4pt] +\infty & r\ge1\ \text{(diverge)}\\[2pt] \nexists & r\le-1\ \text{(indeterminata)}.\end{cases}$$`, dim: R`
Dato $r\in\mathbb R$, $r\neq1$, sappiamo (per induzione, lezione del 1/10) che
$$\sum_{n=0}^kr^n = \frac{1-r^{k+1}}{1-r}\qquad\forall k\in\mathbb N_0.$$
Ora prendiamo $a_n = r^n$, $n\in\mathbb N_0$, la progressione geometrica di ragione $r$. Da quanto detto sopra
$$\sum_{n=0}^{+\infty}r^n = \lim_{k\to+\infty}\frac{1-r^{k+1}}{1-r},$$
e dal limite della progressione geometrica (5/11):
- $|r|<1$: $r^{k+1}\to0$, quindi la somma è $\frac1{1-r}$;
- $r>1$: $r^{k+1}\to+\infty$ e $1-r<0$, quindi la somma è $+\infty$;
- $r = 1$: $S_k = k+1\to+\infty$;
- $r\le-1$: $r^{k+1}$ non ha limite, quindi neanche $S_k$. $\blacksquare$` },

{ t: "es", titolo: R`Serie di Mengoli (somma telescopica)`, testo: R`
(Vedi foglio della settimana 1.) Sappiamo che
$$S_k = \sum_{n=1}^k\frac1{n(n+1)} = \sum_{n=1}^k\left(\frac1n-\frac1{n+1}\right) = 1-\frac1{k+1}$$
(somma **telescopica**: i termini intermedi si cancellano a due a due), e quindi
$$\sum_{n=1}^{+\infty}\frac1{n(n+1)} = \lim_{k\to+\infty}\left(1-\frac1{k+1}\right) = 1.$$` },

{ t: "teo", s: "dim", diff: 3, titolo: R`Serie armonica generalizzata`, testo: R`
Dato $\alpha\in\mathbb R$ vale
$$\sum_{n=1}^{+\infty}\frac1{n^\alpha}\ \begin{cases}\text{converge} & \alpha>1\\ \text{diverge a }+\infty & \alpha\le1.\end{cases}$$
(Il prof enuncia il teorema per $\alpha\in(0,+\infty)$ e tratta $\alpha\le0$ con un'osservazione; il caso $\alpha>1$ è dimostrato nella lezione del 10/11, qui riunito.)
Per $\alpha = 1$ è la **serie armonica** $\sum\frac1n$.`, dim: R`
Per casi.

**$\alpha\le0$.** Si ha $\frac1{n^\alpha} = n^{-\alpha}\ge1$ per ogni $n\in\mathbb N$, quindi $S_k\ge k\to+\infty$ e la serie diverge a $+\infty$ (anche per la condizione necessaria: il termine generale non tende a $0$).

**$\alpha\in(0,1)$.** Allora
$$S_k = 1+\frac1{2^\alpha}+\frac1{3^\alpha}+\dots+\frac1{k^\alpha}\ge\underbrace{\frac1{k^\alpha}+\dots+\frac1{k^\alpha}}_{k\text{ volte}} = \frac k{k^\alpha} = k^{1-\alpha}\xrightarrow[k\to+\infty]{}+\infty,$$
perché $1-\alpha>0$. Quindi $\sum\frac1{n^\alpha}$ diverge a $+\infty$ (singolo carabiniere).

**$\alpha = 1$.** Osservo che $S_k = \sum_{n=1}^k\frac1n$ è strettamente crescente, infatti
$$S_{k+1} = S_k+\frac1{k+1}>S_k\qquad\forall k\in\mathbb N.$$
Pertanto $(S_k)$ ha limite e vale
$$\sum_{n=1}^{+\infty}\frac1n = \lim_{k\to+\infty}S_k = \sup_{k\in\mathbb N}S_k =: S\in\mathbb R\cup\lbrace+\infty\rbrace.$$
Vogliamo dimostrare che $S = +\infty$. Supponiamo per assurdo che $S\in\mathbb R$. Osservo che
$$S_{2k}-S_k = \sum_{n=k+1}^{2k}\frac1n = \frac1{k+1}+\frac1{k+2}+\dots+\frac1{2k}\ge\underbrace{\frac1{2k}+\dots+\frac1{2k}}_{k\text{ volte}} = k\cdot\frac1{2k} = \frac12.$$
Quindi $S_{2k}-S_k\ge\frac12$ per ogni $k\in\mathbb N$. Passo al limite per $k\to+\infty$ (anche $S_{2k}\to S$, è un'estratta) e trovo $S-S\ge\frac12$, cioè $0\ge\frac12$, che è assurdo. Dunque deve essere $S = +\infty$.

**$\alpha>1$** (lezione del 10/11). Come per $\alpha = 1$, $S_k = \sum_{n=1}^k\frac1{n^\alpha}$ è crescente ($S_{k+1} = S_k+\frac1{(k+1)^\alpha}\ge S_k$ per ogni $k\in\mathbb N$). Quindi di nuovo
$$\lim_{k\to+\infty}S_k = \sup_{k\in\mathbb N}S_k =: S\in\mathbb R\cup\lbrace+\infty\rbrace.$$
Vogliamo dimostrare che $S\neq+\infty$, cioè $S\in\mathbb R$.

Osserviamo che in $S_{2k+1}$, tolto il primo termine $1$, restano $2k$ termini, che raggruppo in $k$ coppie (un pari $2n$ e il dispari successivo $2n+1$):
$$S_{2k+1} = 1+\sum_{n=1}^k\left(\frac1{(2n)^\alpha}+\frac1{(2n+1)^\alpha}\right)\le1+\sum_{n=1}^k\frac2{(2n)^\alpha} = 1+\frac2{2^\alpha}\sum_{n=1}^k\frac1{n^\alpha} = 1+2^{1-\alpha}S_k,$$
dove ho usato $\frac1{(2n+1)^\alpha}\le\frac1{(2n)^\alpha}$. Per monotonia $S_k\le S_{2k+1}$, quindi
$$S_{2k+1}\le1+2^{1-\alpha}S_{2k+1}\qquad\forall k\in\mathbb N,$$
cioè
$$S_{2k+1}\left(1-2^{1-\alpha}\right)\le1\qquad\forall k\in\mathbb N.$$
Siccome $\alpha>1$, si ha $1-\alpha<0$ e quindi $2^{1-\alpha}<1$: il fattore $1-2^{1-\alpha}$ è **positivo**. Dunque
$$0<S_{2k+1}\le\frac1{1-2^{1-\alpha}}\qquad\forall k\in\mathbb N.$$
Passando al limite per $k\to+\infty$ ($S_{2k+1}$ è un'estratta di $S_k$, quindi tende a $S$):
$$S\le\frac1{1-2^{1-\alpha}},$$
e quindi $S\in\mathbb R$: la serie converge, e anzi $\displaystyle\sum_{n=1}^{+\infty}\frac1{n^\alpha}\le\frac1{1-2^{1-\alpha}}$. $\blacksquare$` },

{ t: "oss", titolo: R`Curiosità: il problema di Basilea`, testo: R`
Per $\alpha = 2$ si può dire di più (Eulero, 1735):
$$\sum_{n=1}^{+\infty}\frac1{n^2} = \frac{\pi^2}6.$$` },

]});
