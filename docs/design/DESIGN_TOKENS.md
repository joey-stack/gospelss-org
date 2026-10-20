# DESIGN_TOKENS.md — GOSPELS Styling Tokens Specification

> **Platform**: GOSPELS (`gospelss.org`)  
> **Source Token Bridge**: [`src/styles/tokens.css`](file:///c:/Users/user/Desktop/Gospelss.org/src/styles/tokens.css)  
> **Reference Guidelines**: [`docs/design/BRAND_GUIDELINES.md`](file:///c:/Users/user/Desktop/Gospelss.org/docs/design/BRAND_GUIDELINES.md)  
> **Accessibility Standard**: WCAG 2.1 AA Compliant  

---

## 1. Palette & Tone Distribution

The GOSPELS aesthetic embodies **Sacred Warmth** and **Contemporary Excellence**:
- The canvas relies on Scandinavian Warm Grey tones (`#FAFAF8` to `#EBEAE5`) rather than harsh sterile white or pitch black.
- The energy accent is Tech Turquoise (`#14B8A6` / `#0D9488`), representing worship life and clarity.
- Scripture accents use EB Garamond serif italics alongside clean geometric sans headings (Hanken Grotesk / Inter).

### Color Token Reference Table

| Category | CSS Token | Hex / Value | Semantic Role |
| :--- | :--- | :--- | :--- |
| **Canvas** | `--bg-canvas` | `#FAFAF8` | Main page background |
| **Surface** | `--bg-surface` | `#F5F5F3` | Section backgrounds, light wells |
| **Cards** | `--bg-card` | `#FFFFFF` | Elevated cards, forms, modals |
| **Borders** | `--border-subtle` | `#EBEAE5` | 1px hairline dividers |
| **Borders** | `--border-default`| `#DDDCD6` | Interactive inputs & controls |
| **Accent Primary** | `--color-turquoise-500` | `#14B8A6` | High-energy accent, active states |
| **Accent Deep** | `--color-turquoise-600` | `#0D9488` | Primary button bg, text links (AA pass) |
| **Charcoal 900** | `--color-charcoal-900` | `#18181B` | Headings, high contrast typography |
| **Charcoal 700** | `--color-charcoal-700` | `#3F3F46` | Body paragraph text |
| **Charcoal 500** | `--color-charcoal-500` | `#71717A` | Muted metadata, timestamps |
| **Sacred Gold** | `--color-gold-500` | `#D97706` | Special ministry badges, pull-quotes |

---

## 2. Typography Ramps

- **Headings Font**: `'Hanken Grotesk', 'Inter', sans-serif`
- **Scripture & Sacred Quote Font**: `'EB Garamond', Georgia, serif`

### Scale
- `--text-hero` (`4.5rem` / `72px`): Used on the homepage and concert hero sections with `--leading-tight` and `--tracking-tighter`.
- `--text-5xl` (`3rem` / `48px`): Major page headings.
- `--text-3xl` (`1.875rem` / `30px`): Section sub-headers.
- `--text-xl` (`1.25rem` / `20px`): Card headlines and feature callouts.
- `--text-base` (`1rem` / `16px`): Standard paragraph text with `--leading-relaxed`.
- `--text-sm` (`0.875rem` / `14px`): Secondary badges, form labels, and footer links.

---

## 3. Spacing & Rhythm Architecture

The UI adheres to a strict 4px grid with deliberate section pacing:
- **Card Padding**: `--space-6` (`1.5rem`) to `--space-8` (`2rem`).
- **Section Vertical Padding**: Minimum `--space-20` (`5rem`) to ensure contemplative, uncluttered breathing room.
- **Button Padding**: `--space-3` `--space-6` (`0.75rem` vertical, `1.5rem` horizontal).
- **Max Width Container**: `--container-max` (`1240px`) with `--container-gutter` (`1.5rem`) on mobile.

---

## 4. Elevation, Radii & Transitions

- **Soft Radii**: Elements use `--radius-lg` (`0.75rem` / `12px`) for cards and modals, and `--radius-pill` (`9999px`) for CTA buttons and filter badges.
- **Ambient Elevation**:
  - Cards: `--shadow-card` (Subtle dual-layer blur).
  - Hover states: `--shadow-hover` with `--transition-smooth` (`250ms`).
- **Focus Indicators**: All interactive elements utilize `--focus-ring` (Teal halo with `2px` offset) to guarantee keyboard accessibility.
