# NeelStack Corporate Website Structure & Contents Map

This document provides a complete layout mapping and index of the NeelStack Technologies website. It reflects our current stage as an early-stage AI software startup building proprietary SaaS platforms while providing custom software engineering services.

---

## 📂 1. Directory Tree & Architecture
```
d:/poc/website/
├── .agents/
│   └── AGENTS.md               # ToolVines project rules & conventions
├── app/
│   ├── about/                  # About NeelStack Page (company values, engineering principles, timeline tracker, leadership team)
│   ├── blog/                   # Insights & Engineering Blog (aligned categories)
│   ├── book-consultation/      # Consultation request form (integrated with fallback actions)
│   ├── careers/                # Careers Page (High-Agency Talent Pool invitation registry)
│   ├── case-studies/           # Anonymized client success studies
│   ├── contact/                # Contact Page (Timezone synchronization & distributed operations)
│   ├── error.tsx               # Client error boundary (noindex, standard Next.js error fallback)
│   ├── globals.css             # OKLCH tailwind-first design system styles
│   ├── industries/             # Sectors served page
│   ├── layout.tsx              # Root HTML wrapper (metadata, dynamic canonical base)
│   ├── not-found.tsx           # Custom 404 page (noindex, alternates: { canonical: null })
│   ├── opengraph-image.tsx     # Dynamic branded og-image generator (1200x630)
│   ├── page.tsx                # Corporate Homepage
│   ├── portfolio/              # Live products, roadmap products, and client projects portfolio
│   ├── pricing/                # Startup-friendly custom quote segments
│   ├── privacy/                # Privacy Policy
│   ├── products/               # Products index (ToolVines and roadmap builds)
│   ├── request-quote/          # RFQ submission form
│   ├── robots.ts               # Dynamic crawlers control config
│   ├── services/               # 10 core capability areas listing
│   ├── sitemap.ts              # Dynamic search engine sitemap.xml mapper
│   └── terms/                  # Terms of Service
├── components/
│   ├── layouts/
│   │   └── marketing-layout.tsx # Public layout wrapping Header, Main, and Footer
│   ├── navigation/
│   │   ├── breadcrumb.tsx      # Multi-level link navigator
│   │   ├── footer.tsx          # Nav columns synced with current products & services
│   │   └── header.tsx          # Responsive navigation dropdown and action drawer
│   └── sections/
│       ├── blog-preview-section.tsx
│       ├── hero-section.tsx    # Branded with "Ambitious AI Software Startup" pre-heading
│       ├── process-section.tsx # 6-step project delivery pathway
│       ├── stats-section.tsx   # Core Pillars of Execution (SaaS, Custom Software, AI, Stack)
│       ├── technology-section.tsx
│       └── testimonials-section.tsx # "Who We Serve" sector trust cards
├── constants/
│   ├── industries.ts           # Sector definitions
│   ├── navigation.ts           # Main menus synced with roadmap & services
│   ├── products.ts             # 4 proprietary builds (ToolVines, NaukariMitra, SarkariMitra, DhruvaOS)
│   ├── services.ts             # 10 active engineering services & 30 capabilities
│   └── site.ts                 # Real office details and social handles
├── lib/
│   ├── site-url.ts             # Environment-aware host URL resolution helper
│   └── utils.ts                # Class merger utility (clsx + tailwind-merge)
└── types/
    └── index.ts                # Corporate Domain TypeScript Interfaces (ProductStatus expanded)
```

---

## 📄 2. Detailed Route Inventory

### 🏠 Homepage (`app/page.tsx`)
*   **Purpose**: Main entry point showcasing value proposition, technical stack, core services, delivery process, and sector alignment.
*   **Key Sections**:
    1.  `HeroSection`: Features gradients, action CTAs, and a `"Ambitious AI Software Startup"` trust badge.
    2.  `StatsSection`: Displays the **4 Core Pillars of Execution** (Proprietary SaaS, High-Fidelity Engineering, AI-First Delivery, and Modern Stack).
    3.  `ServicesSection`: Displays a grid preview of core developer services.
    4.  `TestimonialsSection`: Displays sector cards outlining targets served (Healthcare, Government, Education, SaaS, Retail, and Enterprise).

### 🏢 About Us (`app/about/page.tsx`)
*   **Purpose**: Corporate philosophy, engineering principles, company values, and roadmap.
*   **Key Sections**:
    *   `Why NeelStack`: Core strengths (AI-first approach, Modern stack, Transparency, Product mindset, Long-term partnerships, Clean engineering).
    *   `Our Journey`: Honest progress tracker (ToolVines Live, other roadmaps and client builds marked as In Development or Launching Soon).
    *   `Engineering Principles`: High-agency developer principles (Build for maintainability, Simplicity, Value-driven AI, Performance/Security default, Automation).
    *   `What We Stand For`: 10 core company values (Engineering Excellence, Transparency, Long-term Thinking, Developer Experience, etc.).

### 📦 Products Index (`app/products/page.tsx`)
*   **Purpose**: Live and dev products catalog.
*   **Inventory**:
    *   **Live Products**: `ToolVines` (AI-powered productivity platform for PDF, image, video and annotation workflows).
    *   **In Development**: `NaukariMitra` (AI government job prep), `SarkariMitra` (AI citizen assistance), and `DhruvaOS` (social automation).

### 📂 Portfolio (`app/portfolio/page.tsx`)
*   **Purpose**: Shipped products and client platforms portfolio.
*   **Inventory**:
    *   `Live Products`: `ToolVines`
    *   `Products In Development`: `NaukariMitra`, `SarkariMitra`, `DhruvaOS`
    *   `Client Projects`: `LifeAsia Website` (Launching Soon), `School Management System` (In Dev), `Book Store Management System` (In Dev).

### 🛠️ Services Index (`app/services/page.tsx`)
*   **Purpose**: Full interactive directory of all technical offerings.
*   **List of Services (10)**:
    1.  **AI Application Development**: Custom LLMs, agents, and RAG pipelines.
    2.  **Modern Web Applications**: Next.js, React, and TypeScript platforms.
    3.  **Custom Software Development**: SaaS products and custom developer tools.
    4.  **Workflow & Business Automation**: Automated scripts and dashboard triggers.
    5.  **Enterprise Web Platforms**: Modular enterprise systems and architectures.
    6.  **REST API & Backend Engineering**: FastAPI and Node.js backend development.
    7.  **Database Design & Systems**: PostgreSQL and MySQL optimization models.
    8.  **DevOps & Cloud Deployment**: Vercel, Docker, and GitHub Actions CI/CD setups.
    9.  **Technology Consulting**: Code auditing, technology selections, and roadmap reviews.
    10. **Performance Optimization**: Profile and speed up slow databases and Core Web Vitals.

### ✉️ Contact (`app/contact/page.tsx`)
*   **Purpose**: Inquiry form and operations coordinates.
*   **Key Sections**:
    *   `Inquiry Form`: Dropdowns aligned with services and mapped exclusively to mailto targets.
    *   `Distributed Operations`: Remote-first delivery model based out of India.
    *   `Timezone Synchronization`: Outlines active timezone synchronization (IST) and global coverage (EST and CET) handoff setups.

### 🧑‍💻 Careers (`app/careers/page.tsx`)
*   **Purpose**: "High-Agency Talent Pool Registry" open builder invitation.
*   **Key Sections**:
    *   `Connect With Us`: Invite to talented builders to submit past projects and GitHub credentials.
    *   `What We Value In Builders`: Highlights high-agency execution, simplicity, security, and building in public.

---

## 🗃️ 3. Core Configuration Constants

### ⚙️ Site Configuration (`constants/site.ts`)
```typescript
export const SITE_CONFIG = {
  name: 'NeelStack Technologies',
  shortName: 'NeelStack',
  tagline: 'Building the Future of Enterprise Software',
  description: 'NeelStack Technologies builds enterprise software...',
  url: 'https://neelstack.com',
  email: {
    general: 'contact@neelstack.com',
    support: 'contact@neelstack.com',
    sales: 'contact@neelstack.com',
    careers: 'contact@neelstack.com',
  },
  address: {
    line1: 'Remote-first Operations',
    line2: 'Based in India',
    city: 'Noida',
    state: 'Uttar Pradesh',
    pincode: '201301',
    country: 'India',
  },
  social: {
    twitter: 'https://x.com/neelstack',
    linkedin: 'https://linkedin.com/company/neelstack',
    github: 'https://github.com/neelstack',
    youtube: 'https://youtube.com/@neelstack',
    instagram: 'https://instagram.com/neelstack',
  },
}
```
