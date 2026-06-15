# Creative Dalaal — Design System

The visual language for creativedalaal.com. All tokens live in `css/style.css` under
`:root` — change them there and the whole site follows.

## Brand idea
**"The broker of creativity & business results."** *Dalaal* = dealer/broker. The site plays the
confident dealmaker / growth-partner role: editorial, a little cheeky, but the proof is rigorous
(real case files, real custom-build detail). Sign-off line: *"Source creativity, easily."*

## Colour
| Token | Value | Use |
|-------|-------|-----|
| `--ink` | `#16130E` | Primary text, dark sections |
| `--ink-soft` | `#4A453B` | Body / muted text |
| `--paper` | `#F4EFE4` | Page background (warm off-white) |
| `--paper-2` | `#ECE5D6` | Panels / cards |
| `--line` | `#D9D0BE` | Hairline borders |
| `--accent` | `#FF4D23` | Signature electric tangerine — CTAs, accent words |
| `--lime` | `#C8FF3D` | Secondary highlight, used sparingly on dark |
| `--night` | `#16130E` | Dark section / feature card background |

One accent only. Lime is a rare spark on dark surfaces, never on paper.

## Type
- **Display:** Fraunces (variable serif, optical sizing, italic for accent words).
- **UI/body:** Inter Tight.
- Fluid scale via `clamp()` tokens: `--fs-mega` (hero) → `--fs-small`.
- Headlines: tight tracking (`-0.02em`), line-height ~0.95–1.02.

## Motion
- Easing: `--ease` = `cubic-bezier(0.22,1,0.36,1)`.
- Hero lines slide up on load; sections fade+rise on scroll (`.reveal`, IntersectionObserver).
- Magnetic buttons, seamless marquee, floating hero blob, blinking "available" dot.
- All motion is disabled under `prefers-reduced-motion`.

## Texture
SVG fractal-noise film grain at 4.5% opacity over the whole page for a tactile, non-flat feel.

## Components (reusable)
`.btn` (`--primary` / `--accent` / `--ghost`) · `.eyebrow` · `.pill` · `.card` (+`--feature`) ·
`.chip` · `.stat` · `.service` · `.step` · `.segment` · `.marquee` · `.reveal`.

## Layout
- Max width `--maxw` 1320px, fluid side gutter `--gutter`.
- Section rhythm via `--space-section`.
- Breakpoints: 900px (nav → burger, grids collapse) and 520px (single-column).

## Next pages to build on this system
`/work` index · `/work/<slug>` case file template · `/blog` (Journal) index + post template ·
`/about` · `/contact`. Reuse the same tokens and components — the case-file template is the
priority since the homepage links to five of them.
