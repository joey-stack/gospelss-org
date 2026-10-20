# COMPONENT_SPECS.md — GOSPELS Component Architecture & Primitive Specifications

> **Platform**: GOSPELS (`gospelss.org`)  
> **Brand**: Gospels (Swedish Org.nr: `802557-4883`, Gothenburg, Sweden)  
> **Classification**: Category A Non-Profit Ministry Platform  
> **Styling Bridge**: [`src/styles/tokens.css`](file:///c:/Users/user/Desktop/Gospelss.org/src/styles/tokens.css)  
> **Accessibility**: WCAG 2.1 AA Compliant (`48px` touch targets, visible focus halos)  

---

## 1. Design Principles & Anti-Slop Discipline

All components across the GOSPELS platform adhere to these inviolable rules:
1. **Sacred Warmth**: Use Warm Grey base surfaces (`#FAFAF8` / `#F5F5F3`) and Tech Turquoise accents (`#14B8A6` / `#0D9488`). Never use pure `#000000` or raw unstyled `#0000FF` blue links.
2. **Micro-Interactions**: Hover states must feature smooth elevation lifts (`translateY(-2px)`) and subtle ambient shadows rather than jarring color flashes.
3. **Typography Rigor**: UI labels and buttons use `Hanken Grotesk` or `Inter` with slight uppercase tracking (`0.05em`). Scripture quotations and contemplative testimony highlights use `EB Garamond` italic.
4. **Frictionless Form Ergonomics**: Forms must be single-column, clear, with floating or legible top labels and explicit Article 9 spiritual consent checkboxes.

---

## 2. Interactive Primitives (Buttons & Actions)

### 2.1 `PrimaryButton`
- **Purpose**: Primary calls-to-action (e.g., "RSVP Gratis", "Bli Kingdom Partner", "Skicka Böneämne").
- **Visuals**:
  - Background: `var(--action-primary-bg)` (`#0D9488`)
  - Text: `var(--action-primary-text)` (`#FFFFFF`)
  - Border-Radius: `var(--radius-pill)` (`9999px`)
  - Padding: `0.75rem 1.75rem` (Minimum height: `48px` for mobile touch)
  - Hover: Background `#0F766E`, shadow `var(--shadow-hover)`, `transform: translateY(-1px)`
  - Active: Background `#115E59`, `transform: translateY(0)`
  - Focus Ring: `var(--focus-ring)` with `var(--focus-ring-offset)`
- **TypeScript Interface**:
  ```typescript
  interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'turquoise' | 'charcoal';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    icon?: React.ReactNode;
    children: React.ReactNode;
  }
  ```

### 2.2 `SecondaryButton` & `OutlineButton`
- **SecondaryButton**: Warm grey neutral fill (`#EBEAE5`), dark text (`#18181B`), ideal for secondary actions like "Läs mer" or "Kalender".
- **OutlineButton**: Transparent background, `1px solid var(--border-default)`, text `var(--text-primary)`. Hover border transitions to `var(--color-turquoise-500)`.

---

## 3. Card & Container Primitives

### 3.1 `EventCard`
- **Purpose**: Displays upcoming worship events (e.g., *Holy Spirit Worship 2026*, *Göteborgs Lovsångskonsert 2027*).
- **Structure**:
  - Image container (16:9 ratio with atmospheric lighting and subtle gradient overlay).
  - Date & Venue Badge (e.g., "14 NOV 2026 · GÖTEBORG").
  - Title: `Heading 3` (`1.25rem`, semibold).
  - Short description: Warm grey paragraph text.
  - Action Row: Primary "RSVP Gratis" CTA + "Lägg till i kalender" secondary trigger.
- **Micro-Interaction**: `border: 1px solid var(--border-subtle)`. On hover: subtle scale `1.01`, border shifts to `var(--color-warm-grey-300)`, shadow `var(--shadow-card)`.

### 3.2 `PartnerTierCard`
- **Purpose**: Recurring Kingdom Partner tier display (150 SEK/mån, 300 SEK/mån, Custom).
- **Key Elements**:
  - Highlight badge ("Mest betydelsefull för Göteborgs unga").
  - Price: `150 kr` / månad (`Heading 1`).
  - Impact bullet points: Checkmarked list of transparent ministry allocations (e.g., "Fri entré för alla", "Professionell ljudproduktion", "Pastoral böneline").
  - Action button: Full-width `PrimaryButton`.

### 3.3 `TestimonyCard`
- **Purpose**: Community worship stories, healings, and life transformations.
- **Visuals**: Warm Grey 100 background, 1px subtle border, quotation mark badge in Tech Turquoise, text set in `EB Garamond` italic (`1.125rem`).

---

## 4. Forms & GDPR Article 9 Primitives

### 4.1 `TextInput` & `Textarea`
- **Styling**:
  - Background: `var(--bg-card)` (`#FFFFFF`)
  - Border: `1px solid var(--border-default)`
  - Border-Radius: `var(--radius-md)` (`8px`)
  - Padding: `0.75rem 1rem` (Minimum height: `48px`)
  - Focus: Border color `var(--color-turquoise-500)`, box-shadow `var(--focus-ring)`
- **Error State**: Red border `var(--color-error)` (`#DC2626`) with accessible `aria-invalid="true"` and live region error announcement.

### 4.2 `ConsentCheckbox` (Swedish GDPR Article 9 Compliant)
- **Purpose**: Captures explicit spiritual consent for confidential prayer requests and `< 18` volunteer parental consent.
- **Visuals**: Custom styled `20x20px` checkbox with Tech Turquoise check icon when checked.
- **Mandatory Copy**:
  - Prayer: *"Jag samtycker till att GOSPELS behandlar mitt böneämne i enlighet med GDPR Artikel 9. Mitt ämne förblir konfidentiellt och delas endast med vårt betrodda böneteam."*
  - Youth: *"Jag bekräftar att jag har målsmans godkännande att medverka som volontär."*

---

## 5. Navigation & Layout

### 5.1 `Navbar`
- **Behavior**: Sticky header. Starts semi-transparent on hero sections, smoothly transitions to frosted glass (`backdrop-filter: blur(12px); background: rgba(250, 250, 248, 0.88); border-bottom: 1px solid var(--border-subtle);`) on scroll.
- **Elements**:
  - Left: GOSPELS Logo lockup ([`public/assets/brand/logo-full.svg`](file:///c:/Users/user/Desktop/Gospelss.org/public/assets/brand/logo-full.svg)).
  - Center: Nav links (`Konserter`, `Om Oss`, `Ge ett stöd`, `Bön & Förbön`, `Media`).
  - Right: "RSVP Gratis" CTA pill + language toggle (SV / EN).

### 5.2 `Footer`
- **Content**:
  - Non-profit legal entity: *Gospels (Org.nr: 802557-4883, Göteborg, Sverige)*.
  - Giving info: Swish (`123 XXX XX XX`), Bankgiro (`XXX-XXXX`).
  - Navigation columns: Evenemang, Om Oss, Resurser, Integritetspolicy & Villkor.
  - Social & Contact links: Instagram, YouTube, info@gospelss.org.

---

## 6. Overlays & Modals

### 6.1 `RSVPModal`
- **Target Friction**: $\le 2$ interactions to complete.
- **Fields**: Namn, E-postadress, Antal platser (1–4).
- **Post-Submission**: Instant confirmation with affirmative next steps ("Lägg till i Apple/Google Kalender", "Dela konserten").

### 6.2 `SwishQRModal`
- **Purpose**: Desktop Swedish Swish giving experience.
- **Features**: Generates official Swish payment QR code or phone number copy trigger for mobile banking app.
