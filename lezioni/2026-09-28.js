L({ data: "2026-09-28", n: 1, titolo: "Logica e insiemi", voci: [

{ t: "def", titolo: "Quantificatori", testo: R`
- **Quantificatore universale** $\forall$: "per ogni".
- **Quantificatore esistenziale** $\exists$: "esiste (almeno un)".
- **Esistenziale unico** $\exists!$: "esiste ed è unico".
- **Negazione dell'esistenziale** $\nexists$: "non esiste".

Esempio: "ogni elefante ha un'unica proboscide" si scrive $\forall$ elefante $\exists!$ proboscide.` },

{ t: "def", titolo: "Connettivi logici", testo: R`
- **Negazione** $\neg P$ (NOT, "non").
- **Congiunzione** $P \land Q$ (AND, "e").
- **Disgiunzione inclusiva** $P \lor Q$ (OR, "o").
- **Disgiunzione esclusiva** AUT…AUT: vera se è vera esattamente una delle due.
- **Implicazione** $P \Rightarrow Q$ (IF…THEN, "se… allora").
- **Doppia implicazione** $P \Leftrightarrow Q$ (IFF, "se e solo se").

Simbolo "tale che": $:$ oppure $|$ (in inglese *such that*).` },

{ t: "def", titolo: "Proposizione e tavole di verità", testo: R`
Una **proposizione** è una frase/proprietà matematica che è o **vera (V)** o **falsa (F)**. Può dipendere da una variabile: $P(n)$ = "$n$ è un numero pari" è vera per $n=2$, falsa per $n=3$.

Tavole di verità:
- $P \land Q$ è V solo se entrambe sono V.
- $P \lor Q$ è F solo se entrambe sono F.
- $P \Rightarrow Q$ è F solo se $P$ è V e $Q$ è F.` },

{ t: "oss", titolo: "Struttura di un teorema", testo: R`
Ogni enunciato matematico (teorema, proposizione, corollario, lemma) è un'**implicazione logica**
$$\text{IPOTESI} \Rightarrow \text{TESI}.$$` },

{ t: "def", titolo: "Dimostrazione diretta, per assurdo, per contrapposizione", testo: R`
- **Diretta**: si parte dall'ipotesi e con una catena di implicazioni si arriva alla tesi.
- **Per contrapposizione (inversa)**: si usa l'equivalenza
$$(P \Rightarrow Q) \iff (\neg Q \Rightarrow \neg P),$$
cioè si nega la tesi e si dimostra la negazione dell'ipotesi.
- **Per assurdo**: si suppone vera l'ipotesi e falsa la tesi e si arriva a una contraddizione.

Esempio di vita: "se piove prendo l'ombrello" equivale a "se non ho l'ombrello allora non piove".` },

{ t: "prop", s: "dim", diff: 1, titolo: "Se $n$ è multiplo di 10 allora è pari (dim. diretta e per assurdo)", testo: R`
Sia $n \in \mathbb{N}$. Se $n$ è multiplo di $10$, allora $n$ è multiplo di $2$, cioè è pari.`, dim: R`
**Diretta.** $n$ multiplo di $10$ $\Rightarrow$ $n = 10k$ per qualche $k\in\mathbb N$ $\Rightarrow$ $n = 2\cdot(5k)$ $\Rightarrow$ $n$ è multiplo di $2$, cioè pari.

**Per contrapposizione/assurdo.** Supponiamo che $n$ non sia multiplo di $2$: allora $n$ è dispari. Tutti i multipli di $10$ sono pari ($10k = 2\cdot 5k$), quindi $n$ non può essere multiplo di $10$: abbiamo ottenuto la negazione dell'ipotesi. $\blacksquare$` },

{ t: "def", titolo: "Insieme, appartenenza, insieme vuoto", testo: R`
Un **insieme** (collezione) è un **concetto primitivo**; si indica con lettere maiuscole $A, B, C, \dots$

- $a \in A$: "$a$ appartiene ad $A$"; $a \notin A$: "non appartiene".
- Esempi: $\mathbb N = \lbrace 1,2,3,\dots \rbrace$, $\mathbb N_0 = \lbrace 0,1,2,\dots\rbrace$, $A = \lbrace n\in\mathbb N : n \text{ pari}\rbrace$.

L'**insieme vuoto** $\emptyset$ è l'unico insieme senza elementi (anch'esso concetto primitivo).` },

{ t: "att", titolo: R`$\emptyset \neq \lbrace\emptyset\rbrace$`, testo: R`
$\emptyset$ non ha elementi, mentre $\lbrace \emptyset \rbrace$ **ha un elemento** (l'insieme vuoto). Non sono lo stesso insieme.` },

]});
