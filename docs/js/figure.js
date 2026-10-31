// Figure SVG che accompagnano alcune voci. Colori dai token CSS.
window.FIGURE = {

sup: `<svg viewBox="0 0 440 120" role="img" aria-label="Insieme A, maggioranti ed estremo superiore">
<line x1="10" y1="62" x2="430" y2="62" style="stroke:var(--ink3)"/>
<path d="M425 57l6 5-6 5" style="stroke:var(--ink3)"/>
<line x1="70" y1="62" x2="250" y2="62" style="stroke:var(--c-def);stroke-width:6"/>
<circle cx="70" cy="62" r="4.5" style="fill:var(--c-def);stroke:none"/>
<circle cx="250" cy="62" r="5" style="fill:var(--card);stroke:var(--c-def);stroke-width:2"/>
<line x1="250" y1="44" x2="420" y2="44" style="stroke:var(--c-teo);stroke-dasharray:5 4"/>
<text x="335" y="36" text-anchor="middle" style="fill:var(--c-teo);stroke:none;font:13px var(--sans)">maggioranti</text>
<text x="160" y="88" text-anchor="middle" style="fill:var(--c-def);stroke:none;font:600 14px var(--serif)">A</text>
<text x="250" y="88" text-anchor="middle" style="fill:var(--ink);stroke:none;font:13px var(--sans)">sup A = s</text>
<line x1="205" y1="70" x2="205" y2="54" style="stroke:var(--c-dim)"/>
<text x="205" y="108" text-anchor="middle" style="fill:var(--c-dim);stroke:none;font:13px var(--sans)">s − ε</text>
<circle cx="228" cy="62" r="3.5" style="fill:var(--c-es);stroke:none"/>
<text x="228" y="30" text-anchor="middle" style="fill:var(--c-es);stroke:none;font:13px var(--sans)">a ∈ A, a &gt; s − ε</text>
<line x1="228" y1="36" x2="228" y2="55" style="stroke:var(--c-es);stroke-dasharray:2 3"/>
</svg>`,

intorni: `<svg viewBox="0 0 440 150" role="img" aria-label="Intorni di un punto reale e di più e meno infinito">
<g style="font:13px var(--sans)">
<line x1="20" y1="30" x2="420" y2="30" style="stroke:var(--ink3)"/>
<line x1="150" y1="30" x2="290" y2="30" style="stroke:var(--c-def);stroke-width:6"/>
<circle cx="150" cy="30" r="4.5" style="fill:var(--card);stroke:var(--c-def);stroke-width:2"/>
<circle cx="290" cy="30" r="4.5" style="fill:var(--card);stroke:var(--c-def);stroke-width:2"/>
<circle cx="220" cy="30" r="3.5" style="fill:var(--ink);stroke:none"/>
<text x="220" y="52" text-anchor="middle" style="fill:var(--ink);stroke:none">r</text>
<text x="150" y="52" text-anchor="middle" style="fill:var(--ink2);stroke:none">r − ε</text>
<text x="290" y="52" text-anchor="middle" style="fill:var(--ink2);stroke:none">r + ε</text>
<line x1="20" y1="85" x2="420" y2="85" style="stroke:var(--ink3)"/>
<line x1="250" y1="85" x2="420" y2="85" style="stroke:var(--c-teo);stroke-width:6"/>
<circle cx="250" cy="85" r="4.5" style="fill:var(--card);stroke:var(--c-teo);stroke-width:2"/>
<text x="250" y="106" text-anchor="middle" style="fill:var(--ink2);stroke:none">M</text>
<text x="400" y="106" text-anchor="middle" style="fill:var(--c-teo);stroke:none">→ +∞</text>
<line x1="20" y1="128" x2="420" y2="128" style="stroke:var(--ink3)"/>
<line x1="20" y1="128" x2="190" y2="128" style="stroke:var(--c-es);stroke-width:6"/>
<circle cx="190" cy="128" r="4.5" style="fill:var(--card);stroke:var(--c-es);stroke-width:2"/>
<text x="190" y="148" text-anchor="middle" style="fill:var(--ink2);stroke:none">M</text>
<text x="40" y="148" text-anchor="middle" style="fill:var(--c-es);stroke:none">−∞ ←</text>
</g></svg>`,

unicita: `<svg viewBox="0 0 440 200" role="img" aria-label="Due intorni disgiunti dei due presunti limiti">
<g style="font:13px var(--sans)">
<line x1="40" y1="180" x2="420" y2="180" style="stroke:var(--ink3)"/>
<line x1="40" y1="10" x2="40" y2="180" style="stroke:var(--ink3)"/>
<rect x="41" y="30" width="379" height="40" style="fill:var(--c-def-bg);stroke:none"/>
<rect x="41" y="105" width="379" height="40" style="fill:var(--c-teo-bg);stroke:none"/>
<text x="30" y="54" text-anchor="end" style="fill:var(--c-def);stroke:none">ℓ₁</text>
<text x="30" y="129" text-anchor="end" style="fill:var(--c-teo);stroke:none">ℓ₂</text>
<text x="410" y="25" text-anchor="end" style="fill:var(--c-def);stroke:none">U₁</text>
<text x="410" y="160" text-anchor="end" style="fill:var(--c-teo);stroke:none">U₂</text>
<line x1="170" y1="180" x2="310" y2="180" style="stroke:var(--c-dim);stroke-width:6"/>
<text x="240" y="198" text-anchor="middle" style="fill:var(--c-dim);stroke:none">I = I₁ ∩ I₂ intorno di x₀</text>
<line x1="240" y1="20" x2="240" y2="176" style="stroke:var(--ink3);stroke-dasharray:3 4"/>
<text x="250" y="92" style="fill:var(--ink);stroke:none">f(x) non può stare in U₁ e U₂</text>
</g></svg>`,

carabinieri: `<svg viewBox="0 0 440 200" role="img" aria-label="Tre funzioni f minore uguale g minore uguale h che convergono allo stesso limite">
<g style="font:13px var(--sans)">
<line x1="20" y1="180" x2="425" y2="180" style="stroke:var(--ink3)"/>
<line x1="230" y1="20" x2="230" y2="184" style="stroke:var(--ink3);stroke-dasharray:3 4"/>
<line x1="20" y1="100" x2="425" y2="100" style="stroke:var(--ink3);stroke-dasharray:2 5"/>
<path d="M30 30 C120 40 190 95 230 100 C270 105 340 50 420 25" style="stroke:var(--c-att);stroke-width:2.4"/>
<path d="M30 170 C120 160 190 106 230 100 C270 94 340 150 420 172" style="stroke:var(--c-def);stroke-width:2.4"/>
<path d="M30 105 C60 70 90 140 120 95 C150 60 180 120 205 96 C215 88 222 104 230 100 C240 95 250 108 262 98 C290 75 320 130 360 90 C390 60 405 120 420 105" style="stroke:var(--c-dim);stroke-width:2.2"/>
<text x="400" y="20" style="fill:var(--c-att);stroke:none">h</text>
<text x="404" y="194" style="fill:var(--c-def);stroke:none">f</text>
<text x="400" y="122" style="fill:var(--c-dim);stroke:none">g</text>
<text x="14" y="96" style="fill:var(--ink);stroke:none">ℓ</text>
<text x="230" y="196" text-anchor="middle" style="fill:var(--ink);stroke:none">x₀</text>
</g></svg>`,

monotona: `<svg viewBox="0 0 440 200" role="img" aria-label="Funzione crescente che si avvicina al suo estremo superiore da sinistra">
<g style="font:13px var(--sans)">
<line x1="30" y1="180" x2="425" y2="180" style="stroke:var(--ink3)"/>
<line x1="30" y1="15" x2="30" y2="180" style="stroke:var(--ink3)"/>
<line x1="30" y1="40" x2="420" y2="40" style="stroke:var(--c-teo);stroke-dasharray:5 4"/>
<rect x="31" y="40" width="389" height="28" style="fill:var(--c-teo-bg);stroke:none;opacity:.8"/>
<line x1="330" y1="20" x2="330" y2="180" style="stroke:var(--ink3);stroke-dasharray:3 4"/>
<path d="M40 165 C120 150 190 120 240 80 C280 55 310 45 328 41" style="stroke:var(--c-def);stroke-width:2.6"/>
<circle cx="330" cy="40" r="4.5" style="fill:var(--card);stroke:var(--c-def);stroke-width:2"/>
<circle cx="250" cy="74" r="4" style="fill:var(--c-es);stroke:none"/>
<line x1="250" y1="74" x2="250" y2="180" style="stroke:var(--c-es);stroke-dasharray:2 3"/>
<line x1="250" y1="180" x2="330" y2="180" style="stroke:var(--c-dim);stroke-width:5"/>
<text x="20" y="44" text-anchor="end" style="fill:var(--c-teo);stroke:none">S</text>
<text x="20" y="72" text-anchor="end" style="fill:var(--c-teo);stroke:none">S−ε</text>
<text x="250" y="196" text-anchor="middle" style="fill:var(--c-es);stroke:none">x_ε</text>
<text x="330" y="196" text-anchor="middle" style="fill:var(--ink);stroke:none">x₀</text>
<text x="345" y="110" style="fill:var(--ink2);stroke:none">f crescente:</text>
<text x="345" y="127" style="fill:var(--ink2);stroke:none">S−ε &lt; f(x) ≤ S</text>
</g></svg>`,
};
