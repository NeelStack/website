# NeelStack Solutions — Production SEO Remediation Action Plan

**Plan Version:** 1.0  
**Status:** Implemented in Source & Validated Locally  
**Target Domain:** `https://neelstack.com` / `https://www.neelstack.com`  
**Repository:** `NeelStack/neelstack-foundation` (`d:\NeelStack\website`)  
**Lead Architect:** Principal Technical SEO Engineer & Senior Full-Stack Architect  

---

## 1. Remediation Hierarchy & Priority Framework

Every identified deficiency has been triaged into a strict three-tier priority framework based on its impact on organic search crawlability, indexation integrity, accessibility compliance, and end-user conversion performance.

```
┌─────────────────────────────────────────────────────────────┐
│ P0: CRITICAL (Crawlability, Canonical Integrity, Core SEO)   │
│ - Apex vs WWW Vercel canonical redirect loop               │
│ - Descriptive anchor text replacement (Lighthouse 92 -> 100)│
├─────────────────────────────────────────────────────────────┤
│ P1: HIGH (Accessibility, Document Structure, Snippet Quality│
│ - Footer tagline WCAG 1.4.3 color contrast (A11y 96 -> 100) │
│ - Logo accessible name WCAG 2.5.3 match                     │
│ - Title tag dual-branding de-duplication across 29 routes   │
├─────────────────────────────────────────────────────────────┤
│ P2: MEDIUM (Performance, Social Graph & AI Search Ready)    │
│ - Global MouseSpotlight main-thread de-duplication          │
│ - Hero LCP headline render delay elimination                │
│ - OpenGraph / Twitter Card completeness across 26 pages     │
│ - Rich JSON-LD Schemas (WebSite, Breadcrumbs, FAQPage)       │
│ - AI Bot explicit permissions in robots.txt                 │
│ - Implementation of llms.txt and llms-full.txt standards     │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Architectural Rationale & Technical Decisions

### 2.1 Next.js 16+ App Router Metadata Architecture
- **Decision:** Utilize Next.js static and dynamic `Metadata` objects exclusively via `export const metadata: Metadata` and `generateMetadata()`.
- **Rationale:** Next.js 16 (Turbopack) compiles static metadata into pristine, pre-rendered `<head>` tags at build time (`output: export` compatible SSG). This guarantees that search engine bots (which may not execute JavaScript or may run an older headless Chromium engine) immediately receive 100% complete title, description, canonical, robots, and openGraph directives in the initial HTTP 200 payload.
- **Rule Enforced:** No manual `<Head>` component injections or runtime client-side DOM mutations for meta tags.

### 2.2 Suffix De-Duplication via Root Title Template
- **Decision:** Remove all hardcoded suffixes (e.g. `| NeelStack India`, `| NeelStack Solutions`) from individual route metadata files.
- **Rationale:** `app/layout.tsx` defines:
  ```typescript
  title: {
    default: 'NeelStack Solutions | Enterprise AI & Custom Software Engineering',
    template: '%s | NeelStack Solutions',
  }
  ```
  When a sub-page declares `title: 'About Us | NeelStack India'`, Next.js interpolates this to `'About Us | NeelStack India | NeelStack Solutions'`. This exceeded 70 characters, causing Google to truncate snippets and dilute brand authority. Clean page titles (e.g., `'About Us — Enterprise AI Engineering'`) result in perfect 50-60 character titles.

### 2.3 Semantic Anchor Text & Internal PageRank Distribution
- **Decision:** Replace generic `"Learn More"` anchor links in `industries-overview-section.tsx` with keyword-rich descriptive labels (`Explore Healthcare Solutions`, `Explore Retail & E-Commerce`, `Explore Startup Engineering`, etc.) pointing to real destination hubs.
- **Rationale:** Google's Search Central documentation explicitly emphasizes anchor text as a primary signal for topical relevance. Generic "Learn More" links fail the Lighthouse descriptive text audit and fail to pass contextual relevance to destination pages. Linking directly to target industry and service hubs reinforces the site's topical clustering and internal link authority.

### 2.4 Server/Client Boundary Preservation
- **Decision:** Retain `app/services/page.tsx` as a pure React Server Component, avoiding attempts to pass complex Lucide icon objects to client components.
- **Rationale:** React 19 and Next.js 16 forbid passing functions (including JSX-rendering icon component functions) across the server/client serialization boundary. Keeping service overview pages as server components ensures instant static HTML generation, zero JavaScript overhead, and flawless hydration.

### 2.5 Main-Thread Event Listener De-duplication
- **Decision:** Remove the redundant `<MouseSpotlight />` call from `components/layouts/marketing-layout.tsx` because it was already mounted sitewide in `app/layout.tsx`.
- **Rationale:** A second global mouse tracker doubled window `pointermove` listeners, leading to unnecessary main-thread CPU spikes on high-refresh-rate displays. Eliminating it frees up main-thread cycles for lower Total Blocking Time (TBT).

### 2.6 AI Search Optimization (LLM Crawlers & `llmstxt.org`)
- **Decision:** Deploy explicit bot permissions in `app/robots.ts` and author `/public/llms.txt` and `/public/llms-full.txt`.
- **Rationale:** AI engines (Perplexity, OpenAI ChatGPT, Anthropic Claude, Apple Intelligence) are increasingly serving search queries through RAG and agentic tools. Standardized `llms.txt` files provide clean markdown context outlining company background, legal entity information, core offerings, and URL indexes, allowing AI agents to cite NeelStack with 100% factual accuracy.

---

## 3. Hosting, Domain & Vercel DNS Configuration (CRITICAL)

### The Production Issue
During the live audit, we identified a critical host discrepancy between the live Vercel domain setting and the codebase canonical helper:

1. **Live Network Behavior:**
   ```
   GET https://neelstack.com/
   HTTP/2 308 Permanent Redirect
   Location: https://www.neelstack.com/
   ```
2. **Live HTML Canonical Tag:**
   ```html
   <link rel="canonical" href="https://neelstack.com" />
   ```
This creates a **canonical redirect loop**: search crawlers landing on `https://www.neelstack.com/` are instructed to index `https://neelstack.com`, which immediately redirects back to `https://www.neelstack.com/`.

### Recommended Vercel Production Fix (Action for User)

The repository uses `lib/site-url.ts`, which respects the environment variable `NEXT_PUBLIC_SITE_URL`:
```typescript
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/+$/, '');
  }
  return 'https://neelstack.com';
}
```

To resolve this conflict permanently, the repository administrator should execute **Option A** (Industry standard for modern tech brands) or **Option B**:

#### Option A: Apex Primary (Recommended)
1. Navigate to the **Vercel Dashboard** -> Project Settings -> **Domains**.
2. Set `neelstack.com` as the **Primary Domain**.
3. Configure `www.neelstack.com` to **Redirect to `neelstack.com`** (308).
4. Verify DNS records at your domain registrar:
   - Apex `A` record pointing to `76.76.21.21` (Vercel).
   - `CNAME` for `www` pointing to `cname.vercel-dns.com`.
5. This matches the codebase default (`https://neelstack.com`), requiring zero environment variable changes.

#### Option B: WWW Primary
If the organization prefers `www.neelstack.com` as the primary address:
1. Keep `www.neelstack.com` as Primary Domain in Vercel.
2. In Vercel Project Settings -> **Environment Variables**, set:
   ```
   NEXT_PUBLIC_SITE_URL = https://www.neelstack.com
   ```
3. Trigger a redeploy. Next.js will then generate all canonical tags and sitemaps with `https://www.neelstack.com`.

---

## 4. Dependencies, Tooling & Quality Gate Verification

All remediation work was implemented without introducing new external npm packages or runtime overhead. The existing dependencies continue to satisfy all security and quality thresholds:

- **Next.js:** 16.2.6 (Turbopack)
- **React:** 19.0.0
- **TypeScript:** 5.7.3
- **Tailwind CSS:** 4.0
- **Lucide React:** 0.468.0

### Quality Gate Check Sequence
Every modification was subjected to the strict quality gate:
```bash
pnpm run ci-check
```
Which executes:
1. `node --test test/*.test.mjs` — Form validation, phone, email, and payload integrity (10/10 passed).
2. `eslint .` — Zero ESLint warnings or errors (`react/jsx-no-comment-textnodes` compliant).
3. `pnpm exec tsc --noEmit` — 100% clean type check across all components and pages.
4. `next build` — Optimized production compilation with 153/153 static pages generated successfully.

