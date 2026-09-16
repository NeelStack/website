import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { Breadcrumb } from '@/components/navigation/breadcrumb'
import { JsonLd } from '@/components/seo/json-ld'
import { getSiteUrl } from '@/lib/site-url'
import { Button } from '@/components/ui/button'
import {
  Building,
  Sparkles,
  ShieldCheck,
  Search,
  MessageSquare,
  FileCheck2,
  Users,
  Compass,
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
  Layers,
  HeartHandshake,
  Landmark,
  Wheat,
  Home,
  GraduationCap,
  Briefcase,
  Heart,
  Baby,
  Mic,
  MapPin,
  Lock,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'SarkariMitra | AI Citizen Assistance & Government Scheme Discovery Engine | NeelStack India',
  description:
    'SarkariMitra is NeelStack’s planned AI civic assistance platform indexing 1,500+ Central and State welfare schemes, providing plain-language conversational eligibility checks, document checklists, and scam-free official redirects for 140 Crore Indian citizens.',
  keywords: [
    'SarkariMitra',
    'SarakariMitra',
    'Government Scheme Discovery AI',
    'Citizen Welfare Eligibility Calculator',
    'PM Kisan AI Eligibility',
    'Ayushman Bharat Scheme Checker',
    'Civic Tech India',
    'NeelStack Products',
  ],
  alternates: {
    canonical: '/products/sarkarimitra',
  },
}

// 8 Scheme Taxonomy Clusters (1,500+ Indexed Schemes)
const SCHEME_CLUSTERS = [
  {
    title: 'Agriculture & Farmer Welfare',
    icon: Wheat,
    schemes: 'PM-KISAN, PMFBY, KCC, Solar KUSUM, Soil Health',
    desc: 'Direct income support, crop insurance coverage, subsidized fertilizer cards, and solar water pump installations.',
  },
  {
    title: 'Healthcare & Social Security',
    icon: Heart,
    schemes: 'Ayushman Bharat PM-JAY, PMJJBY, PMSBY, APY',
    desc: '₹5 Lakh annual secondary/tertiary hospital coverage, low-cost life insurance, and guaranteed pension retirement plans.',
  },
  {
    title: 'Women & Child Development',
    icon: Baby,
    schemes: 'Sukanya Samriddhi, PMMVY, Matru Vandana, Ladli Behna',
    desc: 'High-interest girl-child savings accounts, maternal nutrition financial aid, and women empowerment grants.',
  },
  {
    title: 'Housing & Rural Utilities',
    icon: Home,
    schemes: 'PMAY Urban & Gramin, PM Ujjwala, Jal Jeevan Mission',
    desc: 'Pucca house construction subsidies, free LPG cooking gas connections, and functional household tap water connections.',
  },
  {
    title: 'Education & Scholarships',
    icon: GraduationCap,
    schemes: 'NSP Portal, Post-Matric SC/ST/OBC, PM-YASASVI',
    desc: 'Merit-cum-means financial assistance, higher education fee waivers, and central sector scholarship disbursements.',
  },
  {
    title: 'MSME, Artisans & Enterprise',
    icon: Briefcase,
    schemes: 'PM Vishwakarma, PM Mudra Yojana, Stand-Up India',
    desc: 'Collateral-free business loans up to ₹20 Lakh, tool-kit incentives, and skill upgrade stipends for traditional craftsmen.',
  },
  {
    title: 'Youth & Skill Development',
    icon: Sparkles,
    schemes: 'PMKVY Skill India, Apprenticeship NAPS, Agniveer',
    desc: 'Industry-recognized technical certifications, paid apprenticeship placements, and youth self-employment support.',
  },
  {
    title: 'Senior Citizens & Divyangjan',
    icon: Landmark,
    schemes: 'PM Vaya Vandana, National Disability Pension, ADIP',
    desc: 'Guaranteed monthly senior citizen interest returns, assistive device distribution, and disability allowance subsidies.',
  },
]

// 6 Core Civic Subsystem Modules
const CIVIC_SUBSYSTEMS = [
  {
    title: '1,500+ Scheme Knowledge Graph',
    icon: Layers,
    tech: 'Relational & Semantic Graph Database',
    desc: 'Unified schema indexing Central and 28 State government welfare policies, gazettes, subsidy limits, and renewal deadlines.',
  },
  {
    title: 'Conversational Eligibility Evaluator',
    icon: MessageSquare,
    tech: 'Natural Language Decision-Tree Logic',
    desc: 'Asks 5–6 simple everyday questions (age, occupation, state, annual income, land size) to calculate exact scheme qualification without bureaucratic jargon.',
  },
  {
    title: 'Document Readiness Verifier',
    icon: FileCheck2,
    tech: 'Prerequisite Dependency Tracker',
    desc: 'Generates a verified, actionable checklist of required identity proofs (Aadhaar, Ration Card, Income/Caste Certificate, Bank Account seeding).',
  },
  {
    title: 'Multilingual Voice-First Interface',
    icon: Mic,
    tech: 'Regional Dialect Speech Engine',
    desc: 'Allows rural citizens, farmers, and first-time smartphone users to speak queries naturally in their mother tongue and listen to clear audio explanations.',
  },
  {
    title: 'Official Redirection Shield',
    icon: Compass,
    tech: 'Authentic .gov.in Verification',
    desc: 'Redirects citizens exclusively to authentic official government portals (.gov.in / .nic.in), protecting users against fake fee portals and predatory middlemen.',
  },
  {
    title: 'Jan Seva Kendra / CSC Locator',
    icon: MapPin,
    tech: 'Geospatial Seva Kendra Directory',
    desc: 'Maps nearest physical Common Service Centers (CSCs) and government Seva Kendras for citizens requiring assisted offline document submission.',
  },
]

// 6 Personas
const PERSONAS = [
  {
    role: 'Small & Marginal Farmers',
    desc: 'Verify PM-KISAN installment status, calculate crop insurance claim requirements, and discover state agricultural equipment subsidies with zero middlemen.',
  },
  {
    role: 'Self-Help Group (SHG) Leaders',
    desc: 'Guide neighborhood women to micro-credit enterprise schemes, maternal healthcare grants, and skill training workshops in local dialects.',
  },
  {
    role: 'Village Level Entrepreneurs (VLEs)',
    desc: 'Help local citizens at CSC kiosks quickly verify eligibility and required paperwork before initiating official portal filings, reducing application rejections.',
  },
  {
    role: 'Daily Wage & Unorganized Workers',
    desc: 'Discover e-Shram social security benefits, accident insurance, and subsidized food grain entitlement rules through simple voice queries.',
  },
  {
    role: 'First-Generation College Students',
    desc: 'Identify Central and State scholarship deadlines, fee reimbursement policies, and education loan interest subsidy qualifications effortlessly.',
  },
  {
    role: 'Elderly Citizens & Caregivers',
    desc: 'Navigate old-age pension criteria, Ayushman Bharat senior citizen health benefits, and assistive device distributions with clear audio guidance.',
  },
]

// FAQs
const FAQ_ITEMS = [
  {
    question: 'When will SarkariMitra launch for public citizen testing?',
    answer:
      'SarkariMitra is staged in Phase 3 of NeelStack’s product roadmap. Knowledge graph ingestion of Central and State gazettes is currently in active research. We plan to roll out early pilot trials with rural outreach partners and digital literacy centers following our commercial infrastructure releases.',
  },
  {
    question: 'Is SarkariMitra an official government portal or application?',
    answer:
      'No. SarkariMitra (sarakarimitra.org) is an independent public information and civic assistance initiative engineered by NeelStack Solutions Private Limited. It is NOT operated by, affiliated with, or endorsed by any central ministry or state department. All final scheme applications must be submitted exclusively on official government portals (.gov.in / .nic.in).',
  },
  {
    question: 'Does SarkariMitra charge any fees to citizens for checking eligibility?',
    answer:
      'No. SarkariMitra is designed as a free public utility. We never charge citizens for searching schemes, calculating eligibility, or viewing document checklists.',
  },
  {
    question: 'How does SarkariMitra prevent online fraud and phishing scams?',
    answer:
      'Our Official Redirection Shield cryptographically verifies external links and redirects citizens exclusively to verified, authentic .gov.in and .nic.in domains. We warn users never to pay money on third-party unofficial websites.',
  },
  {
    question: 'How does SarkariMitra protect citizen privacy and personal data?',
    answer:
      'We follow a strict zero-telemetry, zero-retention privacy architecture. Citizen conversational sessions are ephemeral; no Aadhaar numbers, personal phone numbers, or identity documents are ever stored, logged, or monetized.',
  },
  {
    question: 'Will SarkariMitra support Indian regional dialects and voice inputs?',
    answer:
      'Yes. Understanding that many beneficiaries are first-time smartphone users, SarkariMitra is architected for voice-first interaction in Hindi, Marathi, Bengali, Tamil, Telugu, Kannada, Gujarati, and other regional dialects.',
  },
  {
    question: 'How are scheme eligibility criteria kept accurate and up-to-date?',
    answer:
      'Our data ingestion pipelines continuously ingest published gazettes, ministry press releases (PIB), and official portal updates, cross-verifying income thresholds, age brackets, and document lists to eliminate obsolete guidelines.',
  },
  {
    question: 'Can NGOs, rural literacy programs, or research bodies partner with NeelStack?',
    answer:
      'Yes. We actively invite grassroots organizations, digital literacy trusts, and civic technology researchers to connect with us for pilot trials and field validations.',
  },
]

export default function SarkariMitraPage() {
  return (
    <MarketingLayout>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'SarkariMitra',
          operatingSystem: 'Web, iOS, Android',
          applicationCategory: 'GovernmentApplication',
          description:
            'Planned AI-powered citizen assistance platform helping people discover government schemes, benefits, public services, eligibility criteria, and required documents.',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'INR',
          },
          provider: {
            '@type': 'Organization',
            name: 'NeelStack Solutions Private Limited',
            url: getSiteUrl(),
          },
        }}
      />

      {/* ─── Hero Section ────────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-transparent">
        {/* Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-orange-500/8 rounded-full blur-[110px] pointer-events-none" />

        <Container className="relative z-10 text-center space-y-8">
          {/* Breadcrumb */}
          <div className="flex justify-center">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Products', href: '/products' },
                { label: 'SarkariMitra' },
              ]}
            />
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
              Phase 3 Roadmap &middot; Civic Intelligence &middot; 140 Crore Citizens
            </span>
          </div>

          {/* Headline */}
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-foreground">
              SarkariMitra &mdash; AI Citizen <br />
              <span className="bg-gradient-to-r from-amber-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Welfare &amp; Scheme Navigator
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Bridging the gap between government welfare policy and grassroots citizen access. Plain-language conversational eligibility checks, multilingual voice queries, and verified document checklists with zero middleman exploitation.
            </p>
          </div>

          {/* Statutory Notice Banner */}
          <div className="max-w-3xl mx-auto rounded-2xl border border-amber-500/30 bg-amber-500/8 p-4 sm:p-5 text-left flex items-start gap-3 backdrop-blur-sm">
            <ShieldAlert className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-600 dark:text-amber-400 leading-relaxed">
              <strong className="font-bold">Statutory &amp; Independent Disclaimer: </strong>
              SarkariMitra (sarakarimitra.org) is an independent civic information concept engineered by NeelStack Solutions Private Limited. It is <strong>NOT</strong> affiliated with, operated by, or endorsed by any government department, public agency, or ministry. All official filings are redirected exclusively to official government portals (.gov.in / .nic.in).
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button asChild variant="3d-yellow" size="lg" className="w-full sm:w-auto h-12 px-8 font-bold gap-2 rounded-xl">
              <Link href="/contact?product=sarkarimitra&subject=SarkariMitra%20Civic%20Pilot">
                Register Civic Pilot Interest
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button asChild variant="3d-secondary" size="lg" className="w-full sm:w-auto h-12 px-7 font-bold rounded-xl">
              <Link href="#schemes">
                Explore Scheme Taxonomy
              </Link>
            </Button>
          </div>

          {/* Defensible Civic Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-4 text-left">
            <div className="p-4 rounded-2xl border-2 border-border/80 bg-card/70 backdrop-blur-sm space-y-1 tactile-card-3d">
              <div className="flex items-center gap-2 text-amber-500 font-bold">
                <Layers className="h-4 w-4" />
                <span className="font-heading text-lg sm:text-xl">1,500+ Schemes</span>
              </div>
              <p className="text-xs text-muted-foreground">Central &amp; 28 State welfare policies</p>
            </div>

            <div className="p-4 rounded-2xl border-2 border-border/80 bg-card/70 backdrop-blur-sm space-y-1 tactile-card-3d">
              <div className="flex items-center gap-2 text-orange-500 font-bold">
                <Mic className="h-4 w-4" />
                <span className="font-heading text-lg sm:text-xl">Voice-First</span>
              </div>
              <p className="text-xs text-muted-foreground">Regional vernacular dialects &amp; audio</p>
            </div>

            <div className="p-4 rounded-2xl border-2 border-border/80 bg-card/70 backdrop-blur-sm space-y-1 tactile-card-3d">
              <div className="flex items-center gap-2 text-emerald-500 font-bold">
                <Compass className="h-4 w-4" />
                <span className="font-heading text-lg sm:text-xl">100% .gov.in</span>
              </div>
              <p className="text-xs text-muted-foreground">Direct authentic government redirection</p>
            </div>

            <div className="p-4 rounded-2xl border-2 border-border/80 bg-card/70 backdrop-blur-sm space-y-1 tactile-card-3d">
              <div className="flex items-center gap-2 text-cyan-500 font-bold">
                <Lock className="h-4 w-4" />
                <span className="font-heading text-lg sm:text-xl">Zero-PII</span>
              </div>
              <p className="text-xs text-muted-foreground">Ephemeral sandbox; no Aadhaar stored</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Scheme Taxonomy Clusters ───────────────────────────────────────────── */}
      <section id="schemes" className="py-20 bg-card/40 backdrop-blur-sm border-y border-border/40 scroll-mt-20">
        <Container className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Scheme Index
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              8 Welfare Domains &amp; 1,500+ Schemes
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Unified knowledge graph classifying central, state, and rural social welfare initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {SCHEME_CLUSTERS.map((cluster) => {
              const IconComp = cluster.icon
              return (
                <div
                  key={cluster.title}
                  className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5 space-y-2 hover:border-amber-500/30 transition-all group"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 group-hover:scale-105 transition-transform">
                    <IconComp className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-sm font-heading font-bold text-foreground group-hover:text-amber-500 transition-colors">
                    {cluster.title}
                  </h3>
                  <p className="text-[10px] font-mono text-amber-500/80">{cluster.schemes}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{cluster.desc}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ─── Civic Subsystems ───────────────────────────────────────────────────── */}
      <Section className="py-20 border-b border-border/40 bg-surface/50">
        <Container className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
              Civic Technology
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Subsystems Built for Citizen Empowerment
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Replacing dense 40-page PDF notifications with plain-language conversational assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {CIVIC_SUBSYSTEMS.map((sub) => {
              const IconComp = sub.icon
              return (
                <div
                  key={sub.title}
                  className="rounded-3xl border border-border/80 bg-card/80 backdrop-blur-md p-6 space-y-3 hover:border-amber-500/30 transition-all"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-foreground">{sub.title}</h3>
                  <p className="text-[10px] font-mono text-amber-500/80">{sub.tech}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{sub.desc}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* ─── Personas & Impact ─────────────────────────────────────────────────── */}
      <Section className="py-20 bg-card/40 backdrop-blur-sm border-b border-border/40">
        <Container className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Serving Every Indian Household
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Designed for farmers, women entrepreneurs, village leaders, and unorganized workers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {PERSONAS.map((per) => (
              <div
                key={per.role}
                className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5 space-y-2 hover:border-amber-500/25 transition-all"
              >
                <h3 className="text-sm font-heading font-bold text-amber-500">
                  {per.role}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {per.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ─── Structured FAQs ────────────────────────────────────────────────────── */}
      <section className="py-20 border-b border-border/40 bg-transparent">
        <Container className="max-w-4xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-amber-500">
              Frequently Asked Questions
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground">
              Civic Access &amp; Privacy Specifications
            </h2>
          </div>

          <FAQAccordion items={FAQ_ITEMS} />
        </Container>
      </section>

      {/* ─── Pre-Footer CTA ──────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-b from-card to-surface text-center">
        <Container className="max-w-3xl space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
            Partner with Us on Civic Literacy &amp; Access
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Are you an NGO, digital literacy trust, or civic technology researcher interested in piloting voice-first scheme discovery in rural clusters? Connect with us today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="glow-cta px-8 font-bold">
              <Link href="/contact?product=sarkarimitra&subject=SarkariMitra%20NGO%20Partnership" className="gap-2">
                Register Civic Partnership
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-7 font-bold">
              <Link href="/products">Explore All Products</Link>
            </Button>
          </div>
        </Container>
      </section>
    </MarketingLayout>
  )
}
