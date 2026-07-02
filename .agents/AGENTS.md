# NeelStack Website — Agent Rules

These rules apply to all AI agents working on this repository. They are derived from the ToolVines AI Development Rules & Architectural Learnings.

---

## 1. Next.js Middleware

- **Rule:** Do NOT create `middleware.ts` in the root. The project uses Next.js 16+ where `proxy.ts` is preferred.
- **Status:** No middleware file exists. Keep it that way unless explicitly adding routing logic.

## 2. SEO — Noindex Pages Must NOT Have Canonical URLs

- **Rule:** Any page marked as noindex must also set `alternates: { canonical: null }`.
- **Applied to:** `app/not-found.tsx` — already has `robots: { index: false }` and `alternates: { canonical: null }`.
- **Note:** `app/error.tsx` must remain `'use client'` per Next.js constraints — error boundaries cannot export metadata. Error pages return non-200 status codes which crawlers ignore naturally.

## 3. Environment-Aware Canonical URLs

- **Rule:** Never hardcode `https://neelstack.com` in metadata. Always use `getSiteUrl()` from `lib/site-url.ts`.
- **Helper:** `lib/site-url.ts` — reads `NEXT_PUBLIC_SITE_URL` env var, falls back to `https://neelstack.com`.
- **Used in:** `app/layout.tsx` — `metadataBase: new URL(getSiteUrl())`.

## 4. Local Fallback Registries

- **Rule:** For regional APIs with known coverage gaps (e.g. Indian holidays), implement static local fallbacks.
- **Status:** Not yet applicable to this marketing site. Apply when building tool pages.

---

## 5. Content Integrity (Production Grade)

- **No dummy phone numbers.** If real phone is not set, do not show one.
- **No fake testimonials.** Use industry trust signals instead until real quotes are collected.
- **No `href="#"` on user-facing links.** Use `mailto:` or a real route as fallback.
- **No placeholder comments** (`// Placeholder data — replace with real`) visible in production code.
- **Stats must be defensible.** Only publish numbers you can substantiate.
- **All footer links must resolve.** `/privacy` and `/terms` pages must exist.
- **Careers job links must resolve.** Point to `mailto:careers@neelstack.com` until individual job pages are built.
