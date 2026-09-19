# 💎 NeelStack Enterprise Design System (NDS) — Specification & Standards

> **Unified Visual & Architectural Standard for all NeelStack Ecosystem Websites:**
> `neelstack.com` · `dhruvaos.com` · `toolvines.com` · `neelstack-foundation` · `naukarimitra` · `sarkarimitra`

---

## 1. Design Philosophy: "Tactile Neo-Depth Meets Cosmic Intelligence"

The NeelStack Design System bridges two core design pillars:
1. **Neo-Brutalist Tactile Elevation**: Hard-offset box-shadows (`4px 4px 0px`) creating chunky, physical depth. Hover mechanics lift elements diagonally (`translate(-3px, -3px)`) expanding the shadow. Cards, buttons, switches, and interactive elements all share this vocabulary — grounded, bold, and unmistakably tactile.
2. **Living 3D AI Neural Cosmos**: Atmospheric Canvas 2D engine with logarithmic spiral galaxy arms, streaming synaptic data pulses, volumetric chromatic nebulae, accretion orbital photons, and magnetic cursor/touch deflection.

---

## 2. Core Color Tokens (OKLCH Dual-Theme Science)

All tokens defined in `app/globals.css` using OKLCH for perceptual uniformity.

### A. Light Mode Palette (`:root, .light`)
```css
:root, .light {
  color-scheme: light;

  /* Core backgrounds */
  --background: oklch(0.982 0.004 250);         /* #fafbff — Warmer crisp off-white */
  --surface: oklch(0.958 0.008 250);            /* #f1f4fb — Section alternation */
  --foreground: oklch(0.13 0.02 250);           /* #0f172a — Deep obsidian text */

  /* Card surfaces */
  --card: oklch(1 0 0);                         /* #ffffff */
  --card-foreground: oklch(0.13 0.02 250);

  /* Primary — Royal Sapphire Indigo-Blue */
  --primary: oklch(0.52 0.24 255);              /* #2563eb */
  --primary-foreground: oklch(0.98 0 0);
  --primary-hover: oklch(0.46 0.22 255);        /* #1d4ed8 */

  /* Secondary */
  --secondary: oklch(0.92 0.01 250);
  --secondary-foreground: oklch(0.13 0.02 250);

  /* Muted */
  --muted: oklch(0.94 0.005 250);
  --muted-foreground: oklch(0.24 0.015 250);    /* #1e293b — High contrast */
  --muted-hover: oklch(0.90 0.01 250);

  /* Accent — Electric Violet */
  --accent: oklch(0.65 0.25 290);
  --accent-foreground: oklch(0.98 0 0);

  /* Brand (mirrors Primary) */
  --brand: oklch(0.52 0.24 255);
  --brand-foreground: oklch(0.98 0 0);

  /* Violet accent */
  --violet: oklch(0.65 0.25 290);
  --violet-foreground: oklch(0.98 0 0);

  /* Status tokens */
  --success: oklch(0.62 0.18 145);
  --warning: oklch(0.72 0.17 72);
  --info: oklch(0.65 0.16 230);
  --destructive: oklch(0.55 0.22 25);

  /* Surface elevation */
  --surface-elevated: oklch(0.97 0.005 250);
  --surface-raised: oklch(1 0 0);
  --surface-glass: rgba(255, 255, 255, 0.75);
  --surface-glass-border: rgba(255, 255, 255, 0.3);
  --surface-overlay: oklch(0.13 0.02 250 / 70%);

  /* Borders & inputs */
  --border: oklch(0.89 0.005 250);
  --input: oklch(0.91 0 0);
  --input-placeholder: oklch(0.33 0.015 250 / 50%);
  --ring: oklch(0.52 0.24 255 / 40%);
  --focus-ring-color: oklch(0.52 0.24 255 / 30%);

  /* Border radius — Modern 0.625rem base */
  --radius: 0.625rem;

  /* Glow tokens */
  --glow-blue: rgba(29, 78, 216, 0.22);
  --glow-teal: rgba(6, 182, 212, 0.15);
  --glow-violet: rgba(139, 92, 246, 0.22);
  --glow-amber: rgba(245, 141, 40, 0.22);
  --glow-emerald: rgba(52, 211, 153, 0.18);

  /* Gradient button stops */
  --btn-gradient-start: #2563eb;
  --btn-gradient-end: #0284c7;
  --btn-gradient-hover-start: #1d4ed8;
  --btn-gradient-hover-end: #0369a1;

  /* Text gradient stops */
  --text-gradient-start: #1d4ed8;
  --text-gradient-end: #0284c7;
}
```

### B. Dark Mode Palette (`.dark`)
```css
.dark {
  color-scheme: dark;

  /* Core backgrounds — Deep Midnight Near-Black */
  --background: oklch(0.07 0.015 255);          /* #070b14 midnight */
  --surface: oklch(0.10 0.018 255);             /* #0c1220 surface layer */
  --foreground: oklch(0.88 0.005 250);          /* #e2e8f0 — muted off-white for less eye strain */

  --card: oklch(0.11 0.018 255);                /* #0f1628 dark card */
  --card-foreground: oklch(0.88 0.005 250);

  /* Primary — Softer Sky Blue (NOT Cyber Cyan) */
  --primary: oklch(0.70 0.17 250);              /* #46A6FC */
  --primary-foreground: oklch(0.98 0 0);
  --primary-hover: oklch(0.74 0.16 250);

  --secondary: oklch(0.25 0.03 250);
  --secondary-foreground: oklch(0.96 0.005 250);

  --muted: oklch(0.15 0.012 255);
  --muted-foreground: oklch(0.83 0.005 250);    /* #cbd5e1 — High-contrast legible text on dark cards */
  --muted-hover: oklch(0.18 0.015 255);

  --accent: oklch(0.70 0.22 290);               /* Neon Violet */
  --accent-foreground: oklch(0.98 0 0);

  --brand: oklch(0.70 0.17 250);
  --brand-foreground: oklch(0.98 0 0);

  --violet: oklch(0.70 0.22 290);
  --violet-foreground: oklch(0.98 0 0);

  /* Status tokens (shared with light) */
  --success: oklch(0.62 0.18 145);
  --warning: oklch(0.72 0.17 72);
  --info: oklch(0.65 0.16 230);
  --destructive: oklch(0.65 0.22 25);

  /* Surface elevation */
  --surface-elevated: oklch(0.11 0.018 255);
  --surface-raised: oklch(0.13 0.020 255);
  --surface-glass: rgba(15, 23, 42, 0.65);
  --surface-glass-border: rgba(255, 255, 255, 0.08);
  --surface-overlay: oklch(0.07 0.015 255 / 70%);

  /* Borders & inputs */
  --border: oklch(1 0 0 / 7%);
  --input: oklch(1 0 0 / 9%);
  --input-placeholder: oklch(0.79 0.005 250 / 35%);
  --ring: oklch(0.70 0.17 250 / 40%);
  --focus-ring-color: oklch(0.70 0.17 250 / 30%);

  /* Glow tokens (tuned for dark) */
  --glow-blue: rgba(70, 166, 252, 0.22);
  --glow-teal: rgba(6, 182, 212, 0.16);
  --glow-violet: rgba(139, 92, 246, 0.28);
  --glow-amber: rgba(245, 141, 40, 0.20);
  --glow-emerald: rgba(52, 211, 153, 0.16);

  --text-gradient-start: #ffffff;
  --text-gradient-end: #38bdf8;
}
```

### C. Product-Specific Accent Extensions
- **NeelStack Services**: Sky Blue (`#46A6FC`) + Royal Sapphire (`#2563eb`) + Neon Violet (`#8b5cf6`).
- **DhruvaOS**: Emerald Green (`#10b981` / `#059669`) + Deep Teal (`#0d9488`) + Sky Cyan (`#0284c7`).
- **ToolVines**: Vivid Amber (`#f59e0b` / `#d97706`) + Cyber Orange (`#ea580c`) + Sapphire Blue.

### D. Body Background Gradients
```css
body {
  background: linear-gradient(to bottom, #f8fafc 0%, #f1f5f9 100%);
  background-attachment: fixed;
}
.dark body {
  background: linear-gradient(to bottom, #070B14 0%, #0B1220 100%);
  background-attachment: fixed;
}
```

---

## 3. Typography Architecture

### A. Font Stack Definitions (`app/layout.tsx` + `app/globals.css`)
- **Sans / Body:** `Geist`, `Inter`, system-ui fallback.
- **Display / Headings:** `Geist`, `Plus Jakarta Sans`, `Space Grotesk`, sans-serif.
- **Monospace / Badges:** `Geist Mono`, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace.

All fonts loaded via `next/font/google` with `display: 'swap'` for zero-layout-shift.

Font feature settings on `body` and headings: `"cv02", "cv03", "cv04", "cv11"` (geometric stylistic sets for Inter/Geist).

### B. Hierarchy & Scale Standards
| Role | Desktop Class | Mobile Class | Line Height | Weight |
|---|---|---|---|---|
| Hero Headline | `text-4.5xl lg:text-6xl` | `text-[1.85rem] xs:text-[2.25rem]` | `1.08` | `font-black` (800–900) |
| Section Headline | `text-3xl sm:text-4xl` | `text-2xl sm:text-3xl` | `1.15` | `font-extrabold` (800) |
| Card Title | `text-lg sm:text-xl` | `text-base sm:text-lg` | `1.25` | `font-bold` (700) |
| Subtitle / Lead | `text-base sm:text-lg` | `text-[13.5px] xs:text-[15px]` | `1.55` | `font-medium` (500) |
| Body Text | `text-sm sm:text-base` | `text-[13px] xs:text-sm` | `1.6` | `font-normal` (400) |
| Badge / Eyebrow | `text-xs sm:text-xs` | `text-[10px] xs:text-xs` | `1.2` | `font-bold tracking-wider` |

### C. 3D Headline Typography Depth
```css
.text-3d-headline {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(37, 99, 235, 0.06);
}
.dark .text-3d-headline {
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5), 0 0 35px rgba(56, 189, 248, 0.25);
}
```

---

## 4. Neo-Brutalist Tactile Card Architecture

### A. The Golden Card Rule
> **Cards use hard-offset neo-brutalist box-shadows (`4px 4px 0px 0px`).**
> Hover lifts diagonally (`translate(-3px, -3px)`) and expands the shadow (`7px 7px 0px 0px`).
> **NEVER wrap whole card containers in full-body 3D rotate matrix transforms (`rotateX`/`rotateY`).**
> An interactive mouse-following spotlight gradient overlay activates on hover via `::before` pseudo-element.

### B. CSS Implementation — `.tactile-card-3d` (`app/globals.css`)
```css
/* ─── Default (Light Mode) ─── */
.tactile-card-3d,
.card-spotlight,
.interactive-mesh-card {
  position: relative;
  overflow: hidden;
  border: 2px solid #cbd5e1;
  box-shadow: 4px 4px 0px 0px #0f172a;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.2s ease;
}

/* ─── Dark Mode ─── */
.dark .tactile-card-3d,
.dark .card-spotlight,
.dark .interactive-mesh-card {
  border-color: rgba(56, 189, 248, 0.45);
  box-shadow: 4px 4px 0px 0px #0284c7, 0 0 20px rgba(6, 182, 212, 0.25);
}

/* ─── Hover (Light) ─── */
.tactile-card-3d:hover,
.card-spotlight:hover {
  transform: translate(-3px, -3px);
  border-color: #2563eb;
  box-shadow: 7px 7px 0px 0px #1d4ed8;
}

/* ─── Hover (Dark) ─── */
.dark .tactile-card-3d:hover,
.dark .card-spotlight:hover {
  border-color: #38bdf8;
  box-shadow: 7px 7px 0px 0px #0284c7, 0 0 30px rgba(56, 189, 248, 0.45);
}
```

### C. Mouse-Following Spotlight Overlay (`::before`)
Cards have a radial-gradient spotlight that follows the cursor on hover. The spotlight is driven by CSS custom properties `--mouse-x` and `--mouse-y` set by the `MouseSpotlight` component (`components/effects/mouse-spotlight.tsx`).
```css
.tactile-card-3d::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: radial-gradient(
    450px circle at var(--mouse-x, -9999px) var(--mouse-y, -9999px),
    rgba(6, 182, 212, 0.16),
    rgba(99, 102, 241, 0.10) 40%,
    transparent 80%
  );
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.35s ease;
  z-index: 1;
}
.tactile-card-3d:hover::before { opacity: 1; }

/* Dark variant uses brighter colors */
.dark .tactile-card-3d::before {
  background: radial-gradient(
    480px circle at var(--mouse-x, -9999px) var(--mouse-y, -9999px),
    rgba(56, 189, 248, 0.22),
    rgba(167, 139, 250, 0.14) 40%,
    transparent 80%
  );
}
```

### D. Yellow Accent Cards (`.tactile-card-yellow`)
Used for DhruvaOS and featured product highlights.
```css
.tactile-card-yellow {
  border: 2px solid #b45309;
  box-shadow: 5px 5px 0px 0px #78350f;
}
.dark .tactile-card-yellow {
  border-color: #fde047;
  box-shadow: 5px 5px 0px 0px #b45309, 0 0 22px rgba(251, 191, 36, 0.4);
}
.tactile-card-yellow:hover {
  transform: translate(-3px, -3px);
  box-shadow: 8px 8px 0px 0px #78350f;
}
```

### E. AI Grid Hover Cards (`.card-ai-hover`)
Alternative hover style showing a blueprint grid pattern on hover:
```css
.card-ai-hover {
  @apply relative overflow-hidden transition-all duration-300
    hover:border-primary/50 hover:bg-primary/[0.04]
    dark:hover:bg-cyan-500/[0.06]
    hover:shadow-[0_0_35px_rgba(59,130,246,0.18)];
}
.card-ai-hover::before {
  background-image:
    linear-gradient(to right, rgba(59, 130, 246, 0.14) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(59, 130, 246, 0.14) 1px, transparent 1px);
  background-size: 2rem 2rem;
  opacity: 0;
}
.card-ai-hover:hover::before { opacity: 1; }
```

---

## 5. Button System — 3D Tactile with Animated Gradients & Specular Sheen

All buttons share the neo-brutalist vocabulary: hard-offset shadow, diagonal lift on hover, press-down on active.
Every button has an animated `::after` pseudo-element — a diagonal specular "sheen" that sweeps across on hover.

### A. `.tactile-btn-yellow` — Primary Gold CTA
```css
.tactile-btn-yellow {
  background: linear-gradient(135deg, #fef08a 0%, #fbbf24 25%, #f59e0b 50%, #fde047 75%, #fbbf24 100%);
  background-size: 250% 250%;
  animation: gradientShift 6s ease infinite;
  color: #000000;
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px 0px #000000;
  font-weight: 800;
}
.dark .tactile-btn-yellow {
  border-color: #fde047;
  box-shadow: 4px 4px 0px 0px #000000, 0 0 20px rgba(251, 191, 36, 0.4);
}
.tactile-btn-yellow:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px 0px #000000;
}
.tactile-btn-yellow:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0px 0px #000000;
}
```

### B. `.tactile-btn-primary` — Blue/Cyan Gradient CTA
```css
.tactile-btn-primary {
  background: linear-gradient(135deg, #2563eb 0%, #06b6d4 30%, #6366f1 60%, #3b82f6 80%, #06b6d4 100%);
  background-size: 250% 250%;
  animation: gradientShift 5s ease infinite;
  color: #ffffff;
  border: 2px solid #0f172a;
  box-shadow: 4px 4px 0px 0px #0f172a, 0 8px 24px rgba(37, 99, 235, 0.35);
}
.dark .tactile-btn-primary {
  border-color: #38bdf8;
  box-shadow: 4px 4px 0px 0px #0369a1, 0 0 20px rgba(6, 182, 212, 0.4);
}
```

### C. `.tactile-btn-secondary` — Glass/Violet Secondary
```css
.tactile-btn-secondary {
  background: linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(243,244,246,0.92) 50%, rgba(238,242,255,0.98) 100%);
  border: 2px solid rgba(139, 92, 246, 0.5);
  box-shadow: 4px 4px 0px 0px rgba(139, 92, 246, 0.4), 0 6px 16px rgba(139, 92, 246, 0.15);
}
.dark .tactile-btn-secondary {
  background: linear-gradient(135deg, rgba(20,15,40,0.95) 0%, rgba(15,23,42,0.95) 50%, rgba(30,27,75,0.95) 100%);
  border-color: rgba(167, 139, 250, 0.6);
  box-shadow: 4px 4px 0px 0px rgba(139, 92, 246, 0.6), 0 0 20px rgba(139, 92, 246, 0.3);
}
```

### D. `.tactile-btn-purple` — Purple/Fuchsia Gradient
```css
.tactile-btn-purple {
  background: linear-gradient(135deg, #7c3aed 0%, #a855f7 30%, #ec4899 60%, #8b5cf6 80%, #7c3aed 100%);
  background-size: 250% 250%;
  animation: gradientShift 5s ease infinite;
  color: #ffffff;
  border: 2px solid #3b0764;
  box-shadow: 4px 4px 0px 0px #3b0764, 0 8px 24px rgba(168, 85, 247, 0.35);
}
```

### E. Shared Hover/Active/Sheen Mechanics (All Buttons)
```
:hover  → transform: translate(-2px, -2px);  shadow expands to 6px 6px
:active → transform: translate(2px, 2px);    shadow shrinks to 1px 1px (press-down)
::after → Diagonal specular sheen: translateX(-150%) → translateX(150%) on hover
```

---

## 6. Living 3D AI Neural Cosmos Canvas Engine

### Implementation: `components/ui/ai-network-bg.tsx`

A Canvas 2D engine using `requestAnimationFrame` with the following visual systems:

### A. Node Configuration
- **Particle Count:** `58` (Mobile `<768px`) / `78` (Tablet) / `98` (Desktop) for an airy, elegant aesthetic.
- **Distribution:** 75% on 3 logarithmic spiral galaxy arms + 25% ambient full-viewport constellation nodes.
- **Hub Nodes:** Every 20th node is a "supermassive hub" with larger radius and higher energy.
- **Color Palette:** `'cyan' | 'blue' | 'violet' | 'white' | 'indigo'` — cycling.

### B. Visual Systems
1. **Logarithmic Spiral Galaxy Arms:** 3 arms, outward-framing. `spiralAngle = u * PI * 3.4 + armOffset`.
2. **Streaming Synaptic Data Pulses:** Luminous energy beacons travelling along connection filaments.
3. **Volumetric Chromatic Nebulae:** 2 (mobile) / 3 (desktop) soft drifting radial-gradient clouds at 0.04–0.07 opacity.
4. **Accretion Halo Orbital Photons:** Energy beads circulating along 3D tilted orbital rings.
5. **Supermassive Hub Pulsar Nodes:** Radar/sonar relativistic energy rings + JWST starbursts on hub nodes.
6. **Celestial Shockwave Interaction:** Click triggers a gravitational earthquake shockwave.
7. **Interactive Magnetic Gravitational Lens:** Elastic deflection around cursor/touch position.

### C. Performance Architecture
- `devicePixelRatio` capped at 2.
- Debounced resize handler (120ms).
- `document.visibilitychange` + `IntersectionObserver` pause rendering when off-screen.
- `prefers-reduced-motion` detection disables animations.

### D. Dual-Theme Color Science
- **Light:** Sapphire/Indigo tones — `rgba(37, 99, 235, ...)`.
- **Dark:** Radiant Cyan/Violet — `rgba(56, 189, 248, ...)` + `rgba(139, 92, 246, ...)`.
- Theme detection via `document.documentElement.classList.contains('dark')` checked every frame.

---

## 7. Enterprise Theme Switcher Engine

### Implementation: `components/ui/theme-toggle.tsx`

### Architecture Checklist
1. **Zero FOUC:** Inline `<script>` in `<head>` of `app/layout.tsx` checks both `localStorage.getItem('theme')` and `window.matchMedia('(prefers-color-scheme: dark)')` before first paint.
2. **Multi-Tab Sync:** `window.addEventListener('storage', ...)` listener — when theme changes in one tab, all others sync instantly.
3. **Live OS Listener:** `window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ...)` — only fires if no explicit `localStorage` override exists.
4. **WCAG 2.1 AA:** `role="switch"`, `aria-checked={isDark}`, `aria-label`, `Enter`/`Space` keyboard navigation, visible focus ring.
5. **Symmetrical Geometry:** `w-[68px] h-[32px]`, `24px x 24px` knob, exact 2px balanced margins on all 4 boundaries.

### CSS Class: `.tactile-switch-3d`
```css
.tactile-switch-3d {
  border: 2px solid #334155;
  box-shadow: 2.5px 2.5px 0px 0px #0f172a;
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.2s ease;
}
.dark .tactile-switch-3d {
  border-color: #38bdf8;
  box-shadow: 2.5px 2.5px 0px 0px #0284c7, 0 0 14px rgba(6, 182, 212, 0.45);
}
.tactile-switch-3d:hover {
  transform: translate(-1px, -1px);
  box-shadow: 3.5px 3.5px 0px 0px #0f172a;
}
.tactile-switch-3d:active {
  transform: translate(1px, 1px);
  box-shadow: 0px 0px 0px 0px #0f172a;
}
```

### Theme Init Script (`app/layout.tsx`, inside `<head>`)
```js
try {
  const storedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = storedTheme === 'dark' || (!storedTheme && systemPrefersDark);
  if (isDark) {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  } else {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  }
} catch (e) {
  document.documentElement.classList.add('light');
}
```

---

## 8. Floating AI Copilot Trigger

### CSS Class: `.tactile-copilot-3d`
```css
.tactile-copilot-3d {
  border: 2.5px solid #1e1b4b;
  box-shadow: 4px 4px 0px 0px #1e1b4b, 0 10px 25px rgba(79, 70, 229, 0.35);
  background: linear-gradient(135deg, #2563eb, #4f46e5, #7c3aed, #06b6d4);
  background-size: 250% 250%;
  animation: gradientShift 8s ease infinite;
}
.dark .tactile-copilot-3d {
  border-color: #38bdf8;
  box-shadow: 4px 4px 0px 0px #0369a1, 0 0 25px rgba(56, 189, 248, 0.5);
}
.tactile-copilot-3d:hover {
  transform: translate(-3px, -3px) scale(1.04);
  box-shadow: 6px 6px 0px 0px #1e1b4b, 0 12px 30px rgba(79, 70, 229, 0.5);
}
.tactile-copilot-3d:active {
  transform: translate(2px, 2px) scale(0.96);
  box-shadow: 1px 1px 0px 0px #1e1b4b;
}
```

---

## 9. Ambient Visual Effects & Utilities

### A. Enterprise Grain Noise Texture
Subtle SVG fractal noise overlay on `body::before` — `opacity: 0.05` (light), `opacity: 0.10` (dark). Adds analog warmth.

### B. Aurora Floating Orbs
Utility classes for radial-gradient ambient orbs with 64–72px blur, floating via CSS animations:
- `.aurora-orb-blue` — Sapphire radial gradient.
- `.aurora-orb-violet` — Violet radial gradient.
- `.aurora-orb-cyan` — Cyan radial gradient.
- `.aurora-orb-amber` — Amber radial gradient.

### C. Neon Glow Engine Lines
For engine/product bento section borders:
- `.neon-glow-engine-1` — Blue glow (`rgba(37, 99, 235, 0.25)`).
- `.neon-glow-engine-2` — Violet glow (`rgba(139, 92, 246, 0.25)`).
- `.neon-glow-engine-3` — Emerald glow (`rgba(16, 185, 129, 0.25)`).

### D. 3D Perspective Cyber Grid Floor
Animated CSS grid floor with 65 degree perspective tilt:
```css
.cyber-grid-3d { perspective: 450px; perspective-origin: 50% 30%; }
.cyber-grid-3d-plane {
  transform: rotateX(65deg) translateZ(0);
  background-image:
    linear-gradient(to right, rgba(59, 130, 246, 0.15) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(59, 130, 246, 0.15) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridPerspectiveDrift 14s linear infinite;
}
```

### E. Ambient Mesh Glow
```css
.ambient-mesh-glow {
  background: radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.12) 0%, rgba(6, 182, 212, 0.08) 35%, transparent 70%);
  animation: ambientPulse 8s ease-in-out infinite;
}
```

---

## 10. Route Navigation Progress Bar

GPU-accelerated top-of-viewport progress bar (`components/navigation-progress.tsx` + CSS in `globals.css`):
```css
.tv-route-progress-wrapper {
  position: fixed; top: 0; left: 0; right: 0;
  height: 3.5px; z-index: 9999999;
  filter: drop-shadow(0 1px 8px rgba(6, 182, 212, 0.7));
}
.tv-route-progress-bar {
  background: linear-gradient(90deg, #2563eb, #3b82f6, #6366f1, #a855f7, #06b6d4);
  box-shadow: 0 0 16px rgba(6, 182, 212, 0.95), 0 0 8px rgba(99, 102, 241, 0.9);
  will-change: transform;
}
.tv-route-progress-peg {
  /* White-hot leading edge */
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), #ffffff);
  box-shadow: 0 0 20px 2px #06b6d4, 0 0 10px 1px #ffffff;
}
```

---

## 11. Smooth Scrolling Architecture

Uses **Lenis** for butter-smooth inertial scrolling:
```css
html.lenis, html.lenis body { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto !important; }
.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
.lenis.lenis-stopped { overflow: hidden; }
```

---

## 12. Mobile-First UX & Layout Rhythms

1. **Uncluttered Mobile Header:**
   - Left: Brand Logo.
   - Right: Theme Toggle (`ThemeToggle`) + Hamburger Menu Button.
   - Omit extra secondary pills from the mobile top action strip.
2. **Carousel Navigation:**
   - Desktop: 3D tactile arrow buttons (`hidden sm:flex`).
   - Mobile: Animated slide tap/swipe indicator dots (`sm:hidden`).
3. **Zero Horizontal Overflow:**
   - All grids and containers must fit cleanly within 360px–412px viewports.
   - `overflow-x: clip` on both `html` and `body`.
   - Snug responsive section heights (`min-h-[195px]` to `min-h-[240px]`).

---

## 13. Accessibility Standards

1. **Interactive Elements:** All buttons, links, and switches have visible focus rings (`--focus-ring-color`).
2. **Cursor Discipline:** Interactive elements get `cursor: pointer`; disabled elements get `cursor: not-allowed`.
3. **Reduced Motion:** AI Canvas checks `prefers-reduced-motion: reduce` and disables animations.
4. **Semantic HTML:** Proper heading hierarchy, landmark regions, ARIA labels.

---

## 14. Content Integrity Standards

- **No fake testimonials.** Use verified technical trust signals and architecture proof.
- **No dummy phone numbers.** If no live helpline exists, route to official email.
- **No `href="#"` links.** All buttons must link to valid routes or `mailto:contact@neelstack.com`.
- **All legal routes must resolve.** `/privacy`, `/terms`, `/security`, `/refund-policy`.
- **Stats must be defensible.** Only publish substantiateable numbers.
- **Environment-Aware Canonical URLs:** Always use `getSiteUrl()` from `lib/site-url.ts`.
- **No placeholder comments** visible in production code.

---

## 15. SEO & Performance Standards

1. **Meta:** Every page has proper `<title>`, `<meta description>`, and Open Graph tags.
2. **Canonical:** `metadataBase: new URL(getSiteUrl())` in root `layout.tsx`.
3. **Noindex pages** (e.g., `not-found.tsx`) must also set `alternates: { canonical: null }`.
4. **Fonts:** All loaded with `display: 'swap'` via `next/font/google`.
5. **Images:** Next.js `<Image>` component for lazy loading and format optimization.
6. **Viewport:** `width: device-width, initial-scale: 1, maximum-scale: 5`.
7. **Theme Color:** `<meta name="theme-color">` set per color scheme preference.
