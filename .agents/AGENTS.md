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

---

## 6. Git Branch Workflow & Conflict Prevention ("Fix It For Always")

- **STRICT RULE — NEVER COMMIT OR PUSH (USER ONLY):**
  - AI agents must **NEVER** run `git commit` or `git push` autonomously under any circumstance.
  - The agent's responsibility is strictly limited to code changes, local linting, testing, and builds (`pnpm run ci-check`).
  - Staging, committing, and remote pushes must be performed exclusively by the USER.

- **The Problem (Squash-Merge Divergence):**
  When GitHub PRs from `dev` to `main` are merged using **"Squash and Merge"**, GitHub creates a synthetic commit on `main` that does not exist in `dev`'s commit history.
  Continuing feature development on `dev` causes Git to compare against a stale common ancestor, resulting in false merge conflicts across 20+ files on subsequent PRs.

- **The Golden Rules for Branch Management:**
  1. **GitHub PR Merge Setting:** When merging `dev` into `main` on GitHub, prefer **"Create a merge commit"** or **"Rebase and merge"** so commit graphs stay aligned without squash divergence.
  2. **Post-Merge Ancestry Sync (Run immediately after every PR merge):**
     ```bash
     pnpm run sync:main
     # Push is performed by the user:
     # git push origin dev
     ```
     This runs `git fetch origin && git merge -s ours origin/main`. It establishes `origin/main`'s latest commit as a parent of `dev` without altering working files, ensuring subsequent PRs merge with **zero conflicts**.
  3. **Clean Reset Option (When switching fresh):**
     ```bash
     git checkout main && git pull origin main
     git checkout -B dev main
     # Force push is performed by the user:
     # git push origin dev --force-with-lease
     ```
  4. **No Conflict Markers in Code:** Never commit `<<<<<<< HEAD`, `=======`, or `>>>>>>>`. Always inspect with `git status` and test build before pushing.

---

## 7. CI / Quality Gates & Code Integrity

- **Mandatory Pre-Push Quality Gate:**
  Before pushing any commit to `dev` or opening a PR to `main`, run:
  ```bash
  pnpm run lint
  pnpm exec tsc --noEmit
  pnpm run build
  ```
  Or run the unified check:
  ```bash
  pnpm run ci-check
  ```

- **React/JSX Comment Syntax (`react/jsx-no-comment-textnodes`):**
  - **Rule:** Never output raw comment syntax (`//` or `/*`) as bare text inside JSX elements (e.g. `<p>// Note</p>` triggers an ESLint fatal error in CI).
  - **Fix:** Wrap the string literal explicitly: `<p>{"// Note"}</p>` or use proper JSX comment blocks: `{/* Note */}`.

---

## 8. Company Identity & Strategic Grounding

- **Legal Entity:** NeelStack Solutions Private Limited, incorporated on **31 August 2026** (CIN: `U62011UP2026PTC250857`, GSTIN: `09AALCN9356Q1ZA`, Startup India: `DIPP278202`, MSME: `UDYAM-UP-32-0131171`).
- **Leadership Structure:**
  - **Shyam Chaurasiya** — Founder & Legal CEO
  - **Neelam Chaurasiya** — Co-founder & Business Operations
  - **NeelStack AI CEO** — Strategic AI Operating Partner (ChatGPT / Frontier Multi-Agent Intelligence Layer)
- **Three Engines Architecture:**
  1. **NeelStack Services** — Enterprise AI development, agentic workflows, custom software, full-stack systems.
  2. **DhruvaOS** — School Operating System (Launch date: **2 October 2026** across all pages).
  3. **ToolVines** — Free developer and growth tools network.
- **Strategic Whitepaper:** Version 1.0 published at `/whitepapers/ai-company-operating-system`.
- **Contact Channel:** Single unified email `contact@neelstack.com`.

