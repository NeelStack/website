# NeelStack Solutions — Corporate Website

Official marketing site and client portal for NeelStack. Built on Next.js (App Router), React, and Tailwind CSS. Representing our identity as an early-stage, transparent, AI-first software company based in India.

---

## 🚀 Technology Stack
- **Framework**: Next.js (App Router)
- **Design Tokens**: Tailwind CSS & HSL design variables
- **Icons**: Lucide React
- **Development Tooling**: TypeScript, ESLint, Prettier

---

## 📂 Project Architecture & Routes Map
```
├── app/
│   ├── about/                  # About Us Page (Values, Engineering Principles, Leadership grid)
│   ├── blog/                   # Insights & Engineering Blog (Shyam & Neelam Chaurasiya posts)
│   ├── book-consultation/      # Consultation request form
│   ├── careers/                # Careers (High-Agency Builder Open invite registry)
│   ├── case-studies/           # Case Studies (anonymized client setups)
│   ├── contact/                # Contact Us (timezone synchronization details)
│   ├── error.tsx               # Client error boundary
│   ├── globals.css             # OKLCH design variables
│   ├── industries/             # Consolidated 6 sectors we serve
│   ├── layout.tsx              # Root HTML wrapper
│   ├── not-found.tsx           # Custom 404 page
│   ├── opengraph-image.tsx     # Dynamic social banner image generator (1200x630)
│   ├── page.tsx                # Homepage
│   ├── portfolio/              # Live products, roadmap pipeline, and client builds portfolio
│   ├── pricing/                # Custom quote segments
│   ├── privacy/                # Privacy Policy
│   ├── products/               # Products Index (3-track roadmap matrix)
│   ├── request-quote/          # RFQ submission form
│   ├── robots.ts               # Dynamic crawlers control config
│   ├── services/               # 10 core capability areas
│   ├── sitemap.ts              # Dynamic search engine sitemap.xml mapper
│   └── terms/                  # Terms of Service
├── components/
│   ├── layouts/
│   │   └── marketing-layout.tsx # Public layout wrapping Header, Main, and Footer
│   ├── navigation/
│   │   ├── footer.tsx          # Nav columns synced with current products & services
│   │   └── header.tsx          # Responsive navigation dropdown and action drawer
│   └── sections/
│       ├── blog-preview-section.tsx
│       ├── hero-section.tsx    # Branded with "Ambitious AI Software Startup" pre-heading
│       └── stats-section.tsx   # Core Pillars of Execution (SaaS, Custom Software, AI, Stack)
├── constants/
│   ├── industries.ts           # 6 active sector definitions
│   ├── navigation.ts           # Main menus synced with roadmap & services
│   ├── products.ts             # 4 proprietary builds (ToolVines, NaukariMitra, SarkariMitra, DhruvaOS)
│   ├── services.ts             # 10 active engineering services & 30 capabilities
│   └── site.ts                 # Real office details and social handles
└── lib/
    ├── site-url.ts             # Environment-aware host URL resolution helper
    └── utils.ts                # Class merger utility
```

---

## 🛠️ Getting Started

### 1. Prerequisites
Ensure you have **Node.js 20+** installed. We use `npm` as the package manager.

### 2. Installation
Install the project dependencies using npm:
```bash
npm install
```

### 3. Environment Configuration
Create a local environment file:
```bash
cp .env.local.example .env.local
```
Configure `NEXT_PUBLIC_SITE_URL` and `RESEND_API_KEY` to run dispatches:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=re_your_api_key
CONTACT_RECEIVER_EMAIL=your_resend_registered_inbox@gmail.com # (Optional) Required for local Sandbox testing
CONTACT_SENDER_EMAIL=NeelStack <contact@neelstack.com> # (Optional) Custom sender address for production
```

### 4. Development Server
Run the local dev compiler:
```bash
npm run dev
```

### 5. Production Build
Verify TypeScript compilation and package output before committing code:
```bash
npm run build
```

---

## 🏛️ Architectural Rules (ToolVines Standards)
To maintain code cleanliness and compatibility across deployment setups, all modifications must follow these guidelines:

1. **Next.js Middleware**:
   Do **not** create a root `middleware.ts`. Use Next.js route configurations or layout-level wrappers instead.
2. **SEO & Noindex Pages**:
   Any route marked as noindex must not contain a canonical link tag. Add `robots: { index: false }` and `alternates: { canonical: null }` to the page's metadata export.
3. **Environment-Aware Canonical URLs**:
   Never hardcode `https://neelstack.com` inside page metadata. Always use the `getSiteUrl()` utility from `lib/site-url.ts` to ensure local port values are dynamically mapped.
4. **Form Integration**:
   Forms must post JSON payloads to `/api/contact`, which processes Resend email dispatches. Ensure `RESEND_API_KEY` is configured in the environment.
