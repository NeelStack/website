# NeelStack Website — Claude & Agent Instructions

This repository contains the official corporate website and enterprise digital platform for **NeelStack Solutions Private Limited** (https://neelstack.com).

---

## 1. Quality Gates & Mandatory Verification

Before committing changes or opening PRs, execute the mandatory quality checks:
```bash
pnpm run lint
pnpm exec tsc --noEmit
pnpm run build
```
Or run the unified check:
```bash
pnpm run ci-check
```

---

## 2. Strict Git Rules (User-Only Commits & Pushes)

- **CRITICAL RULE:** AI agents must **NEVER** execute `git commit` or `git push` autonomously.
- The agent's scope is strictly writing code, linting, unit testing, and running `pnpm run ci-check`.
- Staging, committing, and pushing is performed exclusively by the user.

---

## 3. Core Architectural & SEO Rules

1. **Next.js Middleware:** Do NOT create `middleware.ts` in the root. The project uses Next.js 16+ where `proxy.ts` is preferred.
2. **SEO Canonical Discipline:**
   - Any page marked as `noindex` (e.g. `app/not-found.tsx`) must set `alternates: { canonical: null }`.
   - Never hardcode `https://neelstack.com` in metadata. Always use `getSiteUrl()` from `lib/site-url.ts`.
3. **React/JSX Comment Syntax (`react/jsx-no-comment-textnodes`):**
   - Never output bare `//` or `/*` inside JSX elements. Wrap as string literal `{"// Note"}` or JSX comment `{/* Note */}`.

---

## 4. Production Content Integrity (Zero Placeholders)

- **No dummy phone numbers.** If no real phone is assigned, omit the phone field entirely.
- **No fake testimonials.** Use verified industry trust signals, security SLA badges, and architectural proof.
- **No `href="#"` links.** Use real routes or `mailto:contact@neelstack.com`.
- **No placeholder comments** visible in production code.
- **All footer & navigation links must resolve.** `/privacy`, `/terms`, `/case-studies`, `/whitepapers/ai-company-operating-system` must exist.
- **Stats must be defensible.** Only publish substantiateable numbers.

---

## 5. Design System & Frontend Standards

> Full specification: [`docs/NEELSTACK_DESIGN_SYSTEM.md`](docs/NEELSTACK_DESIGN_SYSTEM.md)

1. **Neo-Brutalist Tactile Cards (`.tactile-card-3d` in `app/globals.css`):**
   - Cards use hard-offset neo-brutalist `box-shadow` (`4px 4px 0px 0px`) with diagonal hover lift (`translate(-3px, -3px)` expanding to `7px 7px 0px 0px`).
   - Mouse-following spotlight overlay via `::before` pseudo-element driven by `MouseSpotlight` (`components/effects/mouse-spotlight.tsx`).
   - Never tilt or warp whole card bounding boxes with `rotateX`/`rotateY`.
2. **Enterprise Theme Switcher (`components/ui/theme-toggle.tsx`):**
   - Zero FOUC: Inline `<script>` in `app/layout.tsx` `<head>` checks `localStorage` and `window.matchMedia('(prefers-color-scheme: dark)')`.
   - Cross-Tab Synchronization via `window.addEventListener('storage', ...)`.
   - Neo-Brutalist switch: `.tactile-switch-3d` with `2.5px 2.5px 0px` offset shadow. Geometry: `w-[68px] h-[32px]`, `24px × 24px` knob.
   - WCAG 2.1 AA accessible (`role="switch"`, `aria-checked`, `Enter`/`Space` keyboard navigation).
3. **Living 3D AI Neural Cosmos (`components/ui/ai-network-bg.tsx`):**
   - Canvas 2D engine: 58 nodes (mobile) / 78 (tablet) / 98 (desktop).
   - 3 logarithmic spiral arms (75%) + full-viewport ambient nodes (25%).
   - Streaming synaptic data pulses, volumetric chromatic nebulae, accretion orbital photons.
   - Magnetic cursor/touch deflection, celestial shockwave on click.
   - Performance: `IntersectionObserver` + `visibilitychange` + `prefers-reduced-motion` detection.

---

## 6. Corporate Identity & Legal Grounding

- **Legal Entity:** NeelStack Solutions Private Limited, incorporated on **31 August 2026**
  - **CIN:** `U62011UP2026PTC250857`
  - **GSTIN:** `09AALCN9356Q1ZA`
  - **Startup India:** `DIPP278202`
  - **MSME:** `UDYAM-UP-32-0131171`
- **Leadership:**
  - **Shyam Chaurasiya** — Founder & Legal CEO
  - **Neelam Chaurasiya** — Co-founder & Business Operations
  - **NeelStack AI CEO** — Strategic AI Operating Partner
- **Three Engines:**
  1. **NeelStack Services** — Enterprise AI development, agentic workflows, custom software.
  2. **DhruvaOS** — Flagship School Operating System (Launch date: **2 October 2026**).
  3. **ToolVines** — Free developer and growth tools network.
- **Unified Contact:** `contact@neelstack.com`
