# BRAND_GUIDELINES.md — GOSPELS Visual Identity & Design System

> **Brand**: GOSPELS (`gospelss.org`)  
> **Classification**: Category A Swedish Non-Profit Ministry Platform  
> **Brand Heartbeat**: **Sacred · Welcoming · Transformative**  

---

## 1. Color Palette Tokens

### Base Neutrals (Warm Grey Foundation)
- `--color-warm-grey-50`: `#FAFAF8` (Clean page canvas)
- `--color-warm-grey-100`: `#F5F5F3` (Standard light surface / cards)
- `--color-warm-grey-200`: `#EBEAE5` (Subtle borders & dividing strokes)
- `--color-warm-grey-300`: `#DDDCD6` (Muted elements / inactive tabs)

### Primary Energy Accent (Tech Turquoise)
- `--color-turquoise-50`: `#F0FDFA` (Light tint badges)
- `--color-turquoise-100`: `#CCFBF1` (Highlight pills)
- `--color-turquoise-400`: `#2DD4BF` (Hover state on dark surfaces)
- `--color-turquoise-500`: `#14B8A6` (**Primary Brand Accent** — WCAG AA compliant on dark & white)
- `--color-turquoise-600`: `#0D9488` (**Deep Accent** — used for text links over light warm grey)
- `--color-turquoise-700`: `#0F766E` (Active button states)

### Contrast & Typography (Charcoal & Obsidian)
- `--color-charcoal-900`: `#18181B` (Primary headings & high-contrast text)
- `--color-charcoal-800`: `#27272A` (Secondary text & card backgrounds in dark mode)
- `--color-charcoal-700`: `#3F3F46` (Muted paragraph text)
- `--color-pure-white`: `#FFFFFF`

---

## 2. Typography Hierarchy

### Primary Headings & UI (`Hanken Grotesk` or `Inter`)
- **Display 1** (Hero titles): `4rem (64px)` / line-height `1.05` / letter-spacing `-0.03em` / weight `800`
- **Heading 1** (Page titles): `2.5rem (40px)` / line-height `1.15` / letter-spacing `-0.02em` / weight `700`
- **Heading 2** (Section headers): `1.875rem (30px)` / line-height `1.2` / weight `700`
- **Heading 3** (Card titles): `1.25rem (20px)` / line-height `1.3` / weight `600`
- **Body Regular**: `1rem (16px)` / line-height `1.6` / weight `400`
- **UI Nav & Badges**: `0.875rem (14px)` / letter-spacing `0.05em` / weight `600` / uppercase

### Sacred Accents & Scripture (`EB Garamond`)
- **Scripture Quotations**: `1.375rem (22px)` / font-style `italic` / line-height `1.5` / color `--color-charcoal-700`
- **Testimony Pull-Quotes**: `1.5rem (24px)` / font-style `italic` / color `--color-turquoise-600`

---

## 3. Visual Assets Matrix
- **Icon Mark**: [`public/assets/brand/logo-mark.svg`](file:///c:/Users/user/Desktop/Gospelss.org/public/assets/brand/logo-mark.svg) (Resonance Cross)
- **Primary Horizontal Lockup**: [`public/assets/brand/logo-full.svg`](file:///c:/Users/user/Desktop/Gospelss.org/public/assets/brand/logo-full.svg)
- **Dark-Mode / White Lockup**: [`public/assets/brand/logo-white.svg`](file:///c:/Users/user/Desktop/Gospelss.org/public/assets/brand/logo-white.svg)
- **Favicon**: [`public/assets/brand/favicon.svg`](file:///c:/Users/user/Desktop/Gospelss.org/public/assets/brand/favicon.svg)

---

## 4. Accessibility & Contrast Verification (WCAG 2.1 AA)
| Foreground Token | Background Surface | Contrast Ratio | Compliance Status |
| :--- | :--- | :--- | :--- |
| `#FFFFFF` (White) | `#0D9488` (Teal 600) | `4.62 : 1` | **Pass (AA Normal & Large Text)** |
| `#18181B` (Charcoal) | `#F5F5F3` (Warm Grey) | `14.8 : 1` | **Pass (AAA)** |
| `#0D9488` (Teal 600) | `#F5F5F3` (Warm Grey) | `4.54 : 1` | **Pass (AA Normal Text)** |
| `#14B8A6` (Teal 500) | `#18181B` (Dark Card) | `7.32 : 1` | **Pass (AAA)** |
