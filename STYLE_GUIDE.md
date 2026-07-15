# AvatarHype Style Guide — "Green Spiral Notebook" Aesthetic

> Synthesized from VLM (glm-4.6v) analysis of 4 style reference images.
> Images analyzed: `avatar hype style 4.png`, `avatarhype hero.png`, `avatarhype style 3.png`, `style avatarhype.png`.

---

## 1. Overall Concept & Mood

The AvatarHype visual language is a **digital recreation of a used spiral-bound notebook**. It fuses:

- **Academic / studious** bones (grid paper, red margin line, spiral binding)
- **Casual / personal** warmth (handwritten sticky notes, highlighter marks, washi tape, coffee-stain doodles)
- **Modern SaaS** structure (clean sans-serif nav, bold black footer CTA bar, numbered cards)

The result is **playful but trustworthy** — it looks like a founder's working notebook, scanned and shipped as a landing page. It leans "indie / maker" rather than "corporate." Hand-drawn touches (torn tape, slanted sticky notes, marker strokes) are used sparingly so the page never feels chaotic.

---

## 2. Color Palette

### Core Neutrals
| Token | Hex | Use |
|---|---|---|
| `--paper` | `#F5F2E8` | Primary background (aged cream) |
| `--paper-alt` | `#F8F5E9` | Alt background variant |
| `--grid-line` | `#E0E0E0` | Notebook grid lines (1px, ~20px squares) |
| `--grid-line-faint` | `#E8E3D0` | Warmer grid variant |
| `--margin-red` | `#FF6666` / `#E8A5A5` | Vertical notebook margin line (1px) |
| `--ink` | `#000000` | Headlines, borders, footer |
| `--ink-body` | `#333333` / `#2D2D2D` | Body text |
| `--ink-soft` | `#4A4A4A` / `#666666` | Secondary text, nav links |
| `--ink-mute` | `#999999` / `#CCCCCC` | Tertiary text on dark footer |
| `--card` | `#FFFFFF` | Cards / "fresh page" surfaces |
| `--spiral` | `#B1B1B1` → `#C0C0C0` | Spiral binding metallic silver gradient |

### The Signature Greens (this is THE accent system)
| Token | Hex | Use |
|---|---|---|
| `--lime-bright` | `#D4FF00` | Top banner, primary CTA, highlight text |
| `--lime` | `#D4F873` | Nav strip, sticky notes, CTA buttons (primary brand green) |
| `--lime-deep` | `#C3E715` / `#B5E61D` | Numbered circles, footer CTA button |
| `--lime-hover` | `#C0E653` / `#A4CC1A` | Hover state (darker) |
| `--lime-soft` | `#E6FF99` | Washi tape (pale yellow-green) |

> **Rule of thumb:** lime green is used for *every* actionable or attention element (CTAs, numbered steps, banner, highlights, sticky notes). It is the unifying brand color. The exact shade can vary slightly across the page (highlighter yellow-green → deeper lime → pastel tape), but it always sits in the `#C0FF00–#E6FF99` band.

### Secondary Accents
| Token | Hex | Use |
|---|---|---|
| `--highlighter` | `#FFFF00` / `#FFFF33` | Yellow highlighter strokes under text |
| `--sticky-yellow` | `#FFFF00` | Yellow sticky notes |
| `--marker-red` | `#D62828` | Red marker boxes / circles around key words |
| `--price-strike` | `#E60000` | Red strikethrough on old price |
| `--footer-black` | `#000000` / `#1A1A1A` | Footer CTA bar |
| `--video-thumb` | `#F0E6D2` | Neutral beige for video placeholders |

---

## 3. Typography

### Font Stack
- **UI / Body**: Sans-serif — `Inter`, `Lato`, or `Montserrat` (all work; Inter is safest default). Regular weight 400, line-height 1.6.
- **Headlines**: Same sans-serif at weight 700–800, very tight tracking, sizes 48–72px on desktop.
- **Decorative / handwritten**: Script font for sticky notes and accent lines — `Pacifico`, `Dancing Script`, or `Caveat`. Slightly slanted (–8° to –10°), size 12–36px depending on use.
- **Sketch / sticker labels** (e.g., "DUALCAST • NEW"): A hand-drawn display font, 14px, uppercase, often in a sticker badge.

### Type Scale
| Role | Weight | Size | Color |
|---|---|---|---|
| H1 headline | 700–800 | 48–72px | `#000000` |
| H1 cursive subline | 400 | 36px | `#2D2D2D` |
| Eyebrow / kicker ("AI ADS FOR E-COMMERCE", "ENTRY 01, THE STORY / P. 01") | 500, uppercase, letter-spacing 0.5px | 12–14px | `#333333` / `#666666` |
| Body | 400 | 16–18px | `#333333` |
| Nav links | 500 | 14–16px | `#333333` |
| CTA button | 600–700 | 14–16px | `#000000` on lime |
| Footer main | 600 | 16px | `#FFFFFF` |
| Footer subtext | 300 | 12px | `#CCCCCC` |
| Sticky note | 400 italic | 12–14px | `#000000` |

---

## 4. The Spiral Binding (signature left border)

This is **the** defining element. Spec:

- **Position**: Vertical strip pinned to the left edge of the viewport, full height (top of header → bottom of footer).
- **Width**: ~28–32px total.
- **Color**: Matte silver / light gray with a vertical gradient (`#C0C0C0` top → `#AAAAAA` mid → `#B8B8B8` bottom). NOT chrome/shiny — it should read as **matte metal coil**.
- **Loop shape**: Each spiral is drawn as a vertical oval/ring (~20px wide × 24px tall) with a thin dark outline (`#888`) and a subtle inner highlight on the upper-left to fake 3D depth.
- **Spacing**: Loops repeat every ~24–30px vertically. ~12–16 visible loops in a typical viewport.
- **Shadow**: A faint 1–2px soft drop shadow cast to the right of the binding onto the paper, opacity ~15%.
- **Implementation note**: Render as an SVG `<pattern>` or a CSS `background-image` repeating linear-gradient + radial-gradient combo. Do NOT use a flat bar — the loops must be readable.
- **Above the paper**: The spiral sits on top of the red margin line and the grid, like a real notebook. A subtle dark "punch-hole" shadow can appear where each loop meets the paper edge.

---

## 5. Paper Texture & Ruled Lines

### Background layers (stacked, back → front)
1. **Paper base**: solid `#F5F2E8` (or `#F8F5E9`).
2. **Grain / paper noise**: an SVG `feTurbulence` or PNG noise overlay at **5–10% opacity**, multiply blend, to simulate recycled paper fiber.
3. **Grid**: 1px lines in `#E0E0E0` at 20px × 20px squares (classic engineering/graph paper). Drawn as a CSS `linear-gradient` pattern or repeating SVG.
4. **Red vertical margin line**: 1px solid `#FF6666` running full height, positioned ~30–40px from the left edge (just right of the spiral binding). Mimics the standard notebook margin.
5. **Optional horizontal ruled lines**: dotted `#E0E0E0`, 0.5px, every ~24px (more "notebook page" feel; some variants use grid only).

### Optional aged effects
- A faint beige circular "coffee stain" doodle in a corner (`#E6E6E6` at 30% opacity) — used sparingly.
- Slight irregularity / wobble on grid lines (±1px) enhances hand-drawn feel — only if rendering with SVG, not CSS gradients.

---

## 6. Layout & Structure

A typical page has 3–4 horizontal bands:

```
┌─────────────────────────────────────────────────────────┐
│ [Optional top banner: lime strip, ~50px]                │  ← "Vol 3 just dropped →"
├─────────────────────────────────────────────────────────┤
│ Header: avatarhype · Formats · Results · Pricing · [CTA]│  ← ~80px
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Main content area                                       │
│  - Eyebrow / kicker (ENTRY 01, THE STORY)               │
│  - Big headline (sans bold + cursive second line)        │
│  - Body text with highlighter + marker strokes          │
│  - Cards / numbered steps (white card cut-outs)         │
│  - Sticky notes overlaying cards (rotated)              │
│                                                          │
├─────────────────────────────────────────────────────────┤
│ Footer CTA bar (black, ~60–80px):                       │
│ Complete Pack · $109 USD · one-time payment · [Get it →]│
└─────────────────────────────────────────────────────────┘
   ↑ spiral binding runs full height along left edge ↑
```

- Content max-width ~1100–1200px, centered (right of the spiral).
- Generous vertical rhythm: 40–80px between sections.
- Two-column layouts are common: text left, visual card right (or two equal cards side-by-side).

---

## 7. Cards

Cards represent "loose paper cut-outs" placed on the notebook:

- **Background**: pure white `#FFFFFF`.
- **Border**: 1px solid `#000000` (sharp black ink outline).
- **Corner radius**: 6–8px (soft but not pillowy).
- **Shadow**: `0 2px 6px rgba(0,0,0,0.10)` — subtle, like paper lifted slightly off the page.
- **Inner padding**: 24–32px.
- **Header strip inside card** (optional): a torn washi-tape band in `--lime-soft` (`#E6FF99`), ~30px tall, with a rough/torn top edge, sitting across the top of the card.
- **Numbered circles** inside cards: filled `--lime-deep` (`#C3E715` / `#B5E61D`), 32–40px diameter, black bold number, often offset to overlap the top-left of the card.

---

## 8. Decorative Elements (the "maker" personality)

Use **2–3 per page**, never more — these lose impact when overused.

| Element | Spec |
|---|---|
| **Yellow sticky note** | `#FFFF00` / `#FFFF33` rectangle ~140×60px, slight gradient (lighter center), 4px corner radius, drop shadow `0 4px 8px rgba(0,0,0,0.15)`, rotated ±8–12°. Handwritten script text in `#000000`. Often contains a key takeaway ("this part is the key →"). |
| **Lime sticky note** | Same as above but in `#D4F873`. |
| **Washi tape** | `#E6FF99` strip ~30px tall, torn/jagged edges (use SVG path or `clip-path: polygon`), placed diagonally across a card top corner. |
| **Highlighter stroke** | A `#FFFF00` rectangle behind text, ~80% opacity, slightly rotated, mimicking a marker swipe. Wrap the word in a `<mark>` with `background: linear-gradient(180deg, transparent 30%, #FFFF00 30%)`. |
| **Red marker box** | A hand-drawn red rectangle around a key word, `#D62828`, 2px, slight wobble via SVG filter `feTurbulence` + `feDisplacementMap`. |
| **Hand-drawn arrow** | `→` in black, thin stroke, slight curve. Use inline SVG `<path>` for organic feel. |
| **Coffee-stain circle** | Faint `#E6E6E6` 30% opacity blob in a corner. |
| **Sticker badge** | Small rounded label in lime green with hand-drawn uppercase text ("DUALCAST • NEW"), optional rotation. |

---

## 9. Buttons

### Primary CTA (lime)
```css
.btn-primary {
  background: #D4F873;            /* or #D4FF00 for high-impact variant */
  color: #000000;
  font-weight: 600;
  font-size: 16px;
  padding: 12px 20px;
  border: 1px solid #000000;
  border-radius: 6px;
  box-shadow: 0 2px 0 #000000;   /* subtle hard offset, like a stamp */
  transition: all 0.15s ease;
}
.btn-primary:hover {
  background: #C0E653;
  transform: translateY(-2px);
  box-shadow: 0 4px 0 #000000;
}
```
- Always paired with an arrow: "I want in →", "Get it →".
- Sometimes the lime button has a 1px black border for sticker feel.

### Footer CTA (lime on black)
- Sits inside the black footer bar.
- Same lime styling, but the contrast pops harder against `#000000`.

### Secondary / play buttons
- Circular play buttons for video thumbnails: `#4CAF50` or `#B5E61D` fill, 30–40px diameter, white triangle icon, subtle shadow.

---

## 10. Header & Footer

### Header
- Height ~80px, transparent or `#F8F8F8` off-white.
- Left: **avatarhype** wordmark, black, bold, ~24px.
- Center/Right: nav links (Formats, Results, Pricing), `#333333`, 16px, medium weight.
- Far right: lime "I want in →" button.
- Thin black 1px bottom border separates header from main.

### Optional Top Banner (above header)
- Full-width lime strip (`#D4FF00`), ~50px tall.
- Centered black text: "Vol 3 just dropped • free updates for life →", 14px regular.
- Used for announcements.

### Footer
- Full-width black bar (`#000000` / `#1A1A1A`), ~60–80px tall.
- Left: **"Complete Pack · $109 USD"** white bold 16px, plus subtext **"one-time payment · never another monthly fee"** in `#CCCCCC` 12px.
- Right: lime **"Get it →"** button.

---

## 11. Icons

- **Style**: Mix of flat-fill (lime circles, play buttons) and thin-line hand-drawn (arrows, doodles).
- **Spiral binding**: rendered as a vector illustration, not an icon font.
- **Numbered step indicators**: solid lime circles with bold black numerals.
- **Avoid** generic outline icon sets (Lucide/Heroicons default look) — they clash with the notebook vibe. Prefer slightly imperfect, hand-stroked SVG icons.

---

## 12. Animation Cues

Subtle, paper-physical motions only:

- **Sticky notes**: gentle `transform: rotate()` on load (already rotated 8–12°), with a 0.4s ease-in entrance (translateY + opacity).
- **Cards**: `translateY(8px)` → `0` on scroll-into-view, 0.3s ease.
- **Buttons**: `translateY(-2px)` on hover with the hard-shadow offset increasing (faux 3D press).
- **Highlighter strokes**: optional "swipe-in" animation — width from 0 → 100% over 0.5s.
- **Spiral binding**: static — never animates (it's the physical structure).
- Avoid fade-ins, parallax, or anything that breaks the "scanned notebook" illusion.

---

## 13. Distinctive "Green Notebook" Summary — What Makes It *This* Style

1. **Matte silver spiral binding** on the full-height left edge, with visible loops.
2. **Cream graph-paper background** (`#F5F2E8`) with 20px gray grid + **red 1px vertical margin line**.
3. **A single lime-green family** (`#D4FF00` → `#D4F873` → `#C3E715` → `#E6FF99`) carrying every CTA, banner, sticky note, highlight, and numbered circle.
4. **Yellow highlighter + red marker strokes** over body text, like a student marked up the page.
5. **Handwritten script font** appearing once or twice per view (sticky notes, cursive sub-headlines) for personal voice.
6. **Black footer CTA bar** anchoring the bottom with a lime "Get it →" button.
7. **Cut-out white cards** with thin black borders and torn washi tape on top.
8. **Hand-drawn arrows** (`→`) threaded throughout copy and buttons.
9. **Overall mood**: casual + academic + playful + indie-maker. Never corporate, never sterile, never over-decorated.

---

## 14. Quick Reference: CSS Custom Properties

```css
:root {
  /* Paper */
  --paper: #F5F2E8;
  --grid-line: #E0E0E0;
  --margin-red: #FF6666;

  /* Ink */
  --ink: #000000;
  --ink-body: #333333;
  --ink-soft: #666666;
  --ink-mute: #999999;

  /* Spiral */
  --spiral-light: #C0C0C0;
  --spiral-dark: #AAAAAA;

  /* Signature greens */
  --lime-bright: #D4FF00;
  --lime: #D4F873;
  --lime-deep: #C3E715;
  --lime-hover: #C0E653;
  --lime-soft: #E6FF99;     /* washi tape */

  /* Marker accents */
  --highlighter: #FFFF00;
  --sticky-yellow: #FFFF33;
  --marker-red: #D62828;
  --price-strike: #E60000;

  /* Surfaces */
  --card: #FFFFFF;
  --footer: #000000;

  /* Type */
  --font-ui: 'Inter', system-ui, sans-serif;
  --font-script: 'Caveat', 'Dancing Script', cursive;

  /* Radii & shadows */
  --radius-card: 8px;
  --radius-btn: 6px;
  --shadow-card: 0 2px 6px rgba(0,0,0,0.10);
  --shadow-sticky: 0 4px 8px rgba(0,0,0,0.15);
  --shadow-btn: 0 2px 0 #000000;
}
```

---

## 15. Implementation Checklist for Developers

- [ ] Render spiral binding as a repeating SVG `<pattern>` or pre-baked PNG strip pinned `position: fixed; left: 0; top: 0; height: 100vh; width: 32px; z-index: 50;`.
- [ ] Apply paper background as three stacked layers: solid color → noise overlay → grid pattern → red margin line.
- [ ] Reserve `padding-left: 64px` on all content to clear the spiral + margin.
- [ ] Use `--lime` family for ALL interactive accents — never introduce a competing hue.
- [ ] Limit sticky notes to 2 per viewport; rotate with `transform: rotate(-8deg)`.
- [ ] Footer is the only solid-black surface in the layout (besides 1px borders).
- [ ] Body text uses `--font-ui` at 16–18px / line-height 1.6.
- [ ] Headlines pair a bold sans line with an optional cursive second line.
- [ ] Wrap highlighted words in `<mark class="highlighter">` with the swipe-up gradient background.
- [ ] Wrap "boxed" words in `<span class="marker-box">` with an SVG hand-drawn border (or a 2px `#D62828` border with slight `border-radius` irregularity).
- [ ] Buttons always end with `→` and use the hard-offset shadow.
- [ ] All animations ≤ 0.5s, ease-out, paper-physical only.

---

*End of style guide. Generated from VLM analysis of 4 reference images.*
