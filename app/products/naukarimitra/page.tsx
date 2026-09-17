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
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Search,
  Bot,
  Clock,
  BookOpen,
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
  Cpu,
  Layers,
  Award,
  Users,
  BrainCircuit,
  FileCheck2,
  Flame,
  Globe2,
  TrendingUp,
  Target,
  BarChart3,
  HelpCircle,
  School,
  Lock,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'NaukariMitra | AI-Powered Government Exam Preparation Platform | NeelStack India',
  description:
    'NaukariMitra is NeelStack’s planned AI exam preparation platform engineered to democratize competitive exam guidance for over 3 Crore Indian aspirants across UPSC, SSC, Banking, Railways, and State PSCs with zero distraction.',
  keywords: [
    'NaukariMitra',
    'AI Government Exam Preparation',
    'UPSC AI Tutor',
    'SSC CGL Mock Test AI',
    'Bhashini Multilingual Exam Prep',
    'Competitive Exam RAG',
    'NeelStack Products',
    'EdTech India',
  ],
  alternates: {
    canonical: '/products/naukarimitra',
  },
}

// 8 Major Exam Hubs Covered
const EXAM_HUBS = [
  {
    title: 'UPSC Civil Services',
    code: 'CSE / IFS / IPS',
    desc: 'Comprehensive coverage of Prelims GS Paper 1, CSAT Paper 2, and Mains GS Papers 1–4 with model answer evaluation.',
    tag: 'National Tier 1',
  },
  {
    title: 'SSC CGL & CHSL',
    code: 'Tier 1 & Tier 2',
    desc: 'Quantitative aptitude, reasoning tricks, general awareness, English comprehension, and computer knowledge modules.',
    tag: 'Staff Selection',
  },
  {
    title: 'Banking & Insurance',
    code: 'IBPS PO / SBI PO / RBI',
    desc: 'Speed-math calculation drills, financial awareness, high-level puzzle solving, and data interpretation tests.',
    tag: 'Banking Sector',
  },
  {
    title: 'Railways RRB',
    code: 'NTPC / Group D / ALP',
    desc: 'General science fundamentals, technical domain questions, reasoning drills, and speed arithmetic practice.',
    tag: 'Indian Railways',
  },
  {
    title: 'State PSCs',
    code: 'UPPSC / BPSC / MPPSC / MPSC',
    desc: 'State-specific history, geography, local economy, and regional language papers tailored to provincial syllabus matrices.',
    tag: 'State Commissions',
  },
  {
    title: 'Defense & Paramilitary',
    code: 'CDS / NDA / AFCAT / CAPF',
    desc: 'Mathematics, general knowledge, English proficiency, and SSB interview psychological reasoning preparation.',
    tag: 'Defense Forces',
  },
  {
    title: 'Teaching & Eligibility',
    code: 'CTET / State TET / UGC NET',
    desc: 'Child development and pedagogy (CDP), teaching methodologies, subject specializations, and research aptitude.',
    tag: 'Education Sector',
  },
  {
    title: 'Regulatory & Law',
    code: 'SEBI / NABARD / CLAT PG',
    desc: 'Economic and social issues, securities regulation, agricultural finance, and constitutional law question banks.',
    tag: 'Regulatory Bodies',
  },
]

// 6 Core Cognitive Architecture Subsystems
const CORE_SUBSYSTEMS = [
  {
    title: '50+ Exam Syllabus Vector Graph',
    icon: Search,
    tech: 'Hierarchical GraphRAG + pgvector',
    desc: 'Semantic retrieval graph indexing official ministry gazettes, recruitment notifications, syllabus matrices, and standard reference textbooks into interconnected concept nodes.',
  },
  {
    title: 'Adaptive Mock Exam Simulator',
    icon: Target,
    tech: 'Historical Difficulty Calibration',
    desc: 'AI-calibrated test generation dynamically balancing easy, moderate, and hard question distributions matching historical negative-marking patterns and sectional time boundaries.',
  },
  {
    title: 'Step-by-Step AI Concept Tutor',
    icon: Bot,
    tech: 'Low-Latency Conversational Socratic LLM',
    desc: 'Conversational mentor breaking down complex quantitative theorems, syllogisms, and Indian constitutional articles into first-principles visual analogies.',
  },
  {
    title: 'Spaced Repetition Active Recall',
    icon: BrainCircuit,
    tech: 'SM-2 Algorithmic Memory Scheduler',
    desc: 'Automated flashcard review schedules that predict memory decay curves, ensuring historical dates, formulas, and vocabulary are reinforced right before forgetting occurs.',
  },
  {
    title: 'Bhashini Vernacular Voice & Text',
    icon: Globe2,
    tech: 'Indian AI Language Models',
    desc: 'Native conversational explanations in Hindi, Hinglish, Tamil, Telugu, Marathi, Bengali, Gujarati, and Kannada, eliminating language barriers for rural aspirants.',
  },
  {
    title: 'Time-Leak & Concept Diagnosis',
    icon: BarChart3,
    tech: 'Fine-Grained Telemetry Analytics',
    desc: 'Identifies specific question traps, time wasted on unrewarding problems, and guessing patterns to generate personalized remedial study tracks.',
  },
]

// 6 Personas
const PERSONAS = [
  {
    role: 'Rural & Tier-2/3 Aspirants',
    desc: 'Access premier-quality coaching, verified study material, and personalized doubt clearing without having to relocate to expensive coaching hubs like Delhi or Prayagraj.',
  },
  {
    role: 'Working Professionals',
    desc: 'Maximize limited 2–3 hour daily study windows using targeted 15-minute concept drills, automated revision queues, and high-yield flashcard decks on mobile.',
  },
  {
    role: 'Coaching Mentors & Teachers',
    desc: 'Compile balanced test papers in seconds, analyze batch performance heatmaps, and automate personalized doubt explanations for large student cohorts.',
  },
  {
    role: 'Peer Study Groups & Circles',
    desc: 'Compete in collaborative time-gated mock battles, compare percentile rankings, and share custom concept decks in a zero-distraction environment.',
  },
  {
    role: 'First-Time College Aspirants',
    desc: 'Demystify intimidating exam notifications with clear step-by-step syllabus roadmaps, eligibility checks, and structured 12-month preparation schedules.',
  },
  {
    role: 'Vernacular Medium Students',
    desc: 'Study complex general studies and legal reasoning topics in native Indian languages with accurate terminology translations derived from official gazettes.',
  },
]

// FAQs
const FAQ_ITEMS = [
  {
    question: 'When will NaukariMitra be available for public testing?',
    answer:
      'NaukariMitra is staged in Phase 3 of NeelStack’s product roadmap. Data ingestion pipelines, syllabus vector graphs, and mock test calibration engines are currently in active R&D. We plan to release early pilot access to select study cohorts following our core commercial infrastructure rollouts.',
  },
  {
    question: 'Is NaukariMitra affiliated with or endorsed by any government entity?',
    answer:
      'No. NaukariMitra is an independent proprietary AI ed-tech concept engineered by NeelStack Solutions Private Limited. It is NOT affiliated with, sponsored by, or endorsed by UPSC, SSC, IBPS, Indian Railways, or any state public service commission. All official application submissions must be done exclusively on official government portals.',
  },
  {
    question: 'How will NaukariMitra differ from existing commercial test prep apps?',
    answer:
      'Traditional test prep apps prioritize high-frequency paid upsells, distracting advertising banners, and clickbait test series. NaukariMitra is designed as a calm, institutional utility using low-latency LLMs, verified reference textbooks (NCERT, Laxmikanth, Spectrum), and vector memory to pinpoint specific conceptual gaps rather than encouraging mindless rote memorization.',
  },
  {
    question: 'Will NaukariMitra support vernacular Indian languages?',
    answer:
      'Yes. Through integration with Indian language models (including the Bhashini initiative), NaukariMitra is architected to deliver natural voice queries and text explanations in Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, and Hinglish.',
  },
  {
    question: 'How does the adaptive mock test engine calibrate question difficulty?',
    answer:
      'Our engine analyzes over a decade of official previous year question papers (PYQs), calculating discriminating power, average resolution times, and historical cutoff patterns to assemble mock tests that accurately mirror real exam pressure and negative-marking dynamics.',
  },
  {
    question: 'Will candidate data or test scores ever be sold to third parties?',
    answer:
      'Never. In accordance with NeelStack’s core security safeguards and the Digital Personal Data Protection (DPDP) Act 2023, candidate learning telemetry is encrypted and strictly private. We never monetize student profiles, sell data to third-party advertisers, or push commercial loan spam.',
  },
  {
    question: 'Can educators or coaching academies partner on early pilot programs?',
    answer:
      'Yes. We invite academic mentors, competitive coaching teachers, and non-profit educational trusts to connect with our engineering team to explore pilot curriculum ingestion and co-validation.',
  },
  {
    question: 'What tech stack powers the NaukariMitra backend?',
    answer:
      'NaukariMitra is built with Next.js 16, Python 3.13 FastAPI microservices, PostgreSQL 16 with pgvector for hybrid BM25 and dense vector search, and local/cloud LLM inference routers optimized for sub-second token generation.',
  },
]

export default function NaukariMitraPage() {
  return (
    <MarketingLayout>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'NaukariMitra',
          operatingSystem: 'Web, iOS, Android',
          applicationCategory: 'EducationalApplication',
          description:
            'Planned AI-powered government exam preparation platform designed to provide syllabus breakdowns, adaptive mock tests, and multilingual concept tutoring.',
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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-cyan-500/8 rounded-full blur-[110px] pointer-events-none" />

        <Container className="relative z-10 text-center space-y-8">
          {/* Breadcrumb */}
          <div className="flex justify-center">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Products', href: '/products' },
                { label: 'NaukariMitra' },
              ]}
            />
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              Phase 3 Roadmap &middot; AI Exam Intelligence &middot; 3 Crore+ Indian Aspirants
            </span>
          </div>

          {/* Headline */}
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-foreground">
              NaukariMitra &mdash; AI-Powered <br />
              <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
                Government Exam Companion
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Democratizing premier competitive exam preparation for millions of Indian students. Multilingual syllabus vector indexing, adaptive mock tests, and personalized AI concept tutoring with zero distraction.
            </p>
          </div>

          {/* Statutory Notice Banner */}
          <div className="max-w-3xl mx-auto rounded-2xl border border-amber-500/30 bg-amber-500/8 p-4 sm:p-5 text-left flex items-start gap-3 backdrop-blur-sm">
            <ShieldAlert className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-600 dark:text-amber-400 leading-relaxed">
              <strong className="font-bold">Statutory &amp; Independent Disclaimer: </strong>
              NaukariMitra (naukarimitra.in) is an independent AI ed-tech research initiative engineered by NeelStack Solutions Private Limited. It is <strong>NOT</strong> affiliated with, operated by, or endorsed by any government department, public recruitment board, or examination commission.
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button asChild variant="3d-yellow" size="lg" className="w-full sm:w-auto h-12 px-8 font-bold gap-2 rounded-xl">
              <Link href="/contact?product=naukarimitra&subject=NaukariMitra%20Pilot%20Inquiry">
                Register for Early Pilot Access
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button asChild variant="3d-secondary" size="lg" className="w-full sm:w-auto h-12 px-7 font-bold rounded-xl">
              <Link href="#architecture">
                Explore Cognitive Architecture
              </Link>
            </Button>
          </div>

          {/* Defensible Architecture Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-4 text-left">
            <div className="p-4 rounded-2xl border-2 border-border/80 bg-card/70 backdrop-blur-sm space-y-1 tactile-card-3d">
              <div className="flex items-center gap-2 text-emerald-500 font-bold">
                <Target className="h-4 w-4" />
                <span className="font-heading text-lg sm:text-xl">50+ Exams</span>
              </div>
              <p className="text-xs text-muted-foreground">UPSC, SSC, Banking, Railways, State PSCs</p>
            </div>

            <div className="p-4 rounded-2xl border-2 border-border/80 bg-card/70 backdrop-blur-sm space-y-1 tactile-card-3d">
              <div className="flex items-center gap-2 text-cyan-500 font-bold">
                <Globe2 className="h-4 w-4" />
                <span className="font-heading text-lg sm:text-xl">8+ Languages</span>
              </div>
              <p className="text-xs text-muted-foreground">Bhashini AI multilingual voice &amp; text</p>
            </div>

            <div className="p-4 rounded-2xl border-2 border-border/80 bg-card/70 backdrop-blur-sm space-y-1 tactile-card-3d">
              <div className="flex items-center gap-2 text-teal-500 font-bold">
                <BrainCircuit className="h-4 w-4" />
                <span className="font-heading text-lg sm:text-xl">SM-2 Spaced</span>
              </div>
              <p className="text-xs text-muted-foreground">Predictive recall memory scheduling</p>
            </div>

            <div className="p-4 rounded-2xl border-2 border-border/80 bg-card/70 backdrop-blur-sm space-y-1 tactile-card-3d">
              <div className="flex items-center gap-2 text-amber-500 font-bold">
                <Lock className="h-4 w-4" />
                <span className="font-heading text-lg sm:text-xl">100% Ad-Free</span>
              </div>
              <p className="text-xs text-muted-foreground">Zero candidate data monetization</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 8 Major Exam Hubs ──────────────────────────────────────────────────── */}
      <Section className="bg-card/40 backdrop-blur-sm border-y border-border/40">
        <Container className="space-y-6 sm:space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
              Comprehensive Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              8 Major Competitive Exam Hubs
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Structured syllabus graphs, previous year question indexing, and customized mock blueprints for every tier.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {EXAM_HUBS.map((hub) => (
              <div
                key={hub.title}
                className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5 space-y-2 hover:border-emerald-500/30 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    {hub.tag}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground">{hub.code}</span>
                </div>
                <h3 className="text-sm font-heading font-bold text-foreground group-hover:text-emerald-500 transition-colors">
                  {hub.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{hub.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ─── Cognitive Architecture Subsystems ──────────────────────────────────── */}
      <section id="architecture" className="py-8 sm:py-10 md:py-12 border-b border-border/40 bg-surface/50 scroll-mt-20">
        <Container className="space-y-6 sm:space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Cognitive Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Subsystems Engineered for Deep Learning
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Replacing fragmented video lectures and ad-heavy mock sites with an integrated intelligence engine.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {CORE_SUBSYSTEMS.map((sub) => {
              const IconComp = sub.icon
              return (
                <div
                  key={sub.title}
                  className="rounded-3xl border border-border/80 bg-card/80 backdrop-blur-md p-6 space-y-3 hover:border-emerald-500/30 transition-all"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-foreground">{sub.title}</h3>
                  <p className="text-[10px] font-mono text-emerald-500/80">{sub.tech}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{sub.desc}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ─── Personas & Impact ─────────────────────────────────────────────────── */}
      <Section className="bg-card/40 backdrop-blur-sm border-b border-border/40">
        <Container className="space-y-6 sm:space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Built for Every Aspirant Journey
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Tailored workflows for students, working candidates, educators, and study groups.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {PERSONAS.map((per) => (
              <div
                key={per.role}
                className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5 space-y-2 hover:border-emerald-500/25 transition-all"
              >
                <h3 className="text-sm font-heading font-bold text-emerald-500">
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
      <section className="py-8 sm:py-10 md:py-12 border-b border-border/40 bg-transparent">
        <Container className="max-w-4xl space-y-6">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-emerald-500">
              Frequently Asked Questions
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground">
              Program Details &amp; Research Architecture
            </h2>
          </div>

          <FAQAccordion items={FAQ_ITEMS} />
        </Container>
      </section>

      {/* ─── Pre-Footer CTA ──────────────────────────────────────────────────────── */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-card to-surface text-center">
        <Container className="max-w-3xl space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
            Join the Next Era of Competitive Exam Mentorship
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Interested in piloting curriculum modules, contributing dataset research, or joining our academic advisory circle? Connect with us today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="glow-cta px-8 font-bold">
              <Link href="/contact?product=naukarimitra&subject=NaukariMitra%20Academic%20Pilot" className="gap-2">
                Register Pilot Interest
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
