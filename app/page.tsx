import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import {
  ArrowRight,
  Bot,
  Sparkles,
  Zap,
  Sliders,
  Users,
  CreditCard,
  UserCheck,
  Smartphone,
  Lock,
  Cpu,
  Globe,
  Database,
  Server,
  Cloud,
  Layers,
  CheckCircle2,
  Workflow,
  Laptop,
  Check,
  TrendingUp,
  HeartHandshake,
  Wrench,
  Gauge,
  Boxes,
  Terminal,
  Shield,
  FileSpreadsheet
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'NeelStack Technologies — AI-Native Enterprise Software & Products',
  description:
    'NeelStack Technologies designs, develops, and delivers intelligent software platforms for businesses while creating next-generation AI-powered SaaS products.',
  keywords: [
    'Enterprise Software',
    'AI development',
    'Custom Software Development',
    'SaaS Product Engineering',
    'Cloud-Native Architectures',
    'NeelStack Technologies',
    'DhruvaOS'
  ],
  alternates: {
    canonical: 'https://neelstack.com'
  }
}

export default function HomePage() {
  
  // Roadmap items
  const roadmapProducts = [
    { title: 'DhruvaOS', type: 'Education Platform', desc: 'AI-Powered Education Operating System for schools, colleges, and academic trusts.', status: 'Launching Soon', color: 'border-amber-500/25 bg-amber-500/5 text-amber-305 text-[10px]' },
    { title: 'HealthOS', type: 'Healthcare Platform', desc: 'Clinical workflow automation, patient charts, and AI medical assistants.', status: 'Research & Planning', color: 'border-purple-500/25 bg-purple-500/5 text-purple-305 text-[10px]' },
    { title: 'PharmaOS', type: 'Pharmacy Platform', desc: 'Inventory trackers, drug interactions databases, and smart sales workflows.', status: 'Concept Validation', color: 'border-cyan-500/25 bg-cyan-500/5 text-cyan-305 text-[10px]' },
    { title: 'RetailOS', type: 'Retail Platform', desc: 'Multi-store cash systems, supply chain automation, and purchase analysis.', status: 'Future Roadmap', color: 'border-border bg-muted/20 text-muted-foreground text-[10px]' },
    { title: 'HospitalityOS', type: 'Hospitality Platform', desc: 'Booking engine, room service schedules, and guest experience portals.', status: 'Future Roadmap', color: 'border-border bg-muted/20 text-muted-foreground text-[10px]' },
    { title: 'Enterprise AI Platform', type: 'AI Automation Platform', desc: 'Workflow triggers, automated compliance parsing, and internal AI agents.', status: 'Vision', color: 'border-border bg-muted/20 text-muted-foreground text-[10px]' }
  ]

  // Services
  const services = [
    { title: 'Enterprise Web Applications', icon: Laptop, desc: 'Highly responsive web architectures powered by Next.js and TypeScript.' },
    { title: 'AI Application Development', icon: Bot, desc: 'Custom LLM agents, cognitive workflows, and semantic vector indexing.' },
    { title: 'SaaS Product Development', icon: Sparkles, desc: 'Multi-tenant cloud apps designed for subsecond latency and rapid scaling.' },
    { title: 'ERP Development', icon: Sliders, desc: 'Tailored administrative systems linking directories, billing, and logs.' },
    { title: 'CRM Development', icon: Users, desc: 'Pipeline pipelines, customer portfolios, and automated notifications.' },
    { title: 'Mobile Applications', icon: Smartphone, desc: 'Native iOS and Android client apps using React Native.' },
    { title: 'Cloud & DevOps', icon: Cloud, desc: 'Docker/Kubernetes orchestration, Vercel deployments, and CI/CD pipelines.' },
    { title: 'API Development', icon: Server, desc: 'Fast, secure REST & GraphQL backend services built on FastAPI and Node.js.' },
    { title: 'UI/UX Engineering', icon: Layers, desc: 'Premium responsive design systems built on vanilla CSS values.' },
    { title: 'Data Engineering', icon: Database, desc: 'High-throughput PostgreSQL and Redis database configurations.' },
    { title: 'Application Modernization', icon: Workflow, desc: 'Deconstruct monolithic codebases into performant microservices.' },
    { title: 'Software Maintenance', icon: Wrench, desc: 'Periodic patch rolls, vulnerability upgrades, and server monitoring.' },
    { title: 'Technical Consulting', icon: Sliders, desc: 'CTO-level system architecture audits and AI integration mapping.' }
  ]

  // Tech stack
  const techStack = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'React Native'] },
    { category: 'Backend', items: ['Python', 'FastAPI', 'Node.js', 'PostgreSQL', 'Redis'] },
    { category: 'Infrastructure', items: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Cloudflare'] },
    { category: 'AI Native', items: ['OpenAI API', 'Gemini API', 'Anthropic API', 'Vector Search', 'RAG Structures', 'AI Agentic Loops'] }
  ]

  // Engagement Models
  const engagements = [
    { model: 'Project Based', desc: 'Defined scope, timelines, and budgets. Ideal for targeted software modules.' },
    { model: 'Dedicated Team', desc: 'Senior engineers allocated exclusively to your products, reporting to your leadership.' },
    { model: 'Technology Partner', desc: 'Continuous engineering, updates, and architecture audits as you scale.' },
    { model: 'Product Engineering', desc: 'Collaborative designs where we shape, code, and deploy SaaS builds.' },
    { model: 'Long-term Support', desc: 'Ongoing database patches, SLAs, and optimization iterations.' },
    { model: 'Enterprise Consulting', desc: 'CTO advisory, custom software strategy audits, and design blueprints.' }
  ]

  // Industries badges
  const industries = [
    'Education', 'Healthcare', 'Retail', 'Pharmaceutical', 'Hospitality', 'Manufacturing',
    'Logistics', 'Professional Services', 'Government', 'SMEs', 'Startups', 'Enterprises'
  ]

  // Why choose cards
  const whyChoose = [
    { title: 'AI-First Engineering', desc: 'We weave cognitive LLM modules directly into database and server workflows.' },
    { title: 'Cloud-Native Architecture', desc: 'Built for serverless execution, autoscaling, and global multi-region deployments.' },
    { title: 'Enterprise-Grade Security', desc: 'Role-based authorization matrices, database encryption, and compliance logs.' },
    { title: 'Scalable Platforms', desc: 'Engineered for subsecond responses even at millions of active client entries.' },
    { title: 'Modern User Experience', desc: 'Vibrant, minimal design languages that match Linear, Stripe, and Figma standards.' },
    { title: 'Performance Focused', desc: 'Optimized query indexes, lightweight asset bundles, and fast execution logs.' },
    { title: 'Long-term Partnership', desc: 'A dedicated team that continuously advises on engineering pipelines.' },
    { title: 'Future-ready Code', desc: 'Modular TypeScript and API structures prepared for incoming scaling shifts.' },
    { title: 'Product Thinking', desc: 'We build with SaaS commercial goals in mind, not just specifications.' },
    { title: 'Dedicated Senior Engineers', desc: 'No outsourcing. You work directly with architects and developers.' }
  ]

  return (
    <MarketingLayout>
      
      {/* ─── Hero Section ────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-blue-950/15 via-background to-background">
        {/* Grids and glows */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-500/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[110px] pointer-events-none" />

        <Container className="relative z-10 text-center space-y-10">
          
          {/* Pre-heading Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-semibold text-primary">
              AI-Native Software Engineering
            </span>
          </div>

          {/* Heading */}
          <div className="max-w-4xl mx-auto space-y-5">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-foreground">
              Building AI-Powered <br />
              <span className="bg-gradient-to-r from-primary via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                Enterprise Software
              </span> That Scales.
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              NeelStack designs, develops, and delivers intelligent software platforms for businesses while creating next-generation AI-powered SaaS products that digitally transform industries.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4.5">
            <Link
              href="/book-consultation"
              className="inline-flex items-center justify-center px-6.5 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-semibold transition-all shadow-md shadow-primary/20"
            >
              Book a Consultation
            </Link>
            <Link
              href="#roadmap"
              className="inline-flex items-center justify-center px-6.5 py-3 rounded-xl border border-border bg-card/60 hover:bg-muted text-foreground text-sm font-semibold transition-all"
            >
              Explore Our Products
            </Link>
          </div>

          {/* Hero Stats Strip */}
          <div className="pt-10 max-w-3xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Clients Served', value: '6+', sub: 'Across education & pharma' },
                { label: 'Live Products', value: '1', sub: 'ToolVines — live now' },
                { label: 'Services Offered', value: '13+', sub: 'Custom software services' },
                { label: 'In Development', value: '2+', sub: 'DhruvaOS & more' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-5 text-center flex flex-col gap-1">
                  <span className="font-heading text-3xl font-extrabold text-foreground">{stat.value}</span>
                  <span className="text-xs font-semibold text-primary">{stat.label}</span>
                  <span className="text-[10px] text-muted-foreground">{stat.sub}</span>
                </div>
              ))}
            </div>
          </div>

        </Container>
      </section>

      {/* ─── Clients Section ─────────────────────────────────────────────────── */}
      <Section className="py-14 border-t border-border/40 bg-muted/5">
        <Container>
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
              Trusted By
            </span>
            <h2 className="font-heading text-2xl font-extrabold text-foreground mt-4 mb-2">
              Businesses &amp; Institutions We&apos;ve Built For
            </h2>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              From pharmaceutical companies to educational institutions — real clients, delivered software.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 max-w-4xl mx-auto">
            {/* Client 1 */}
            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 border border-amber-500/20 text-amber-400 font-bold text-sm font-mono">
                  LP
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground">Lifeasia Pharma</h3>
                  <span className="text-[10px] font-medium text-amber-400 uppercase tracking-wide">Pharmaceutical</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Corporate website and digital presence for a pharmaceutical company involved in product development, branding, and healthcare distribution.
              </p>
              <span className="inline-flex w-fit items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-amber-400">
                ⏳ Delivering This Month
              </span>
            </div>

            {/* Client 2 */}
            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 border border-blue-500/20 text-blue-400 font-bold text-sm font-mono">
                  KD
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground">K.D. Singh Public School</h3>
                  <span className="text-[10px] font-medium text-blue-400 uppercase tracking-wide">Education · Gorakhpur</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Custom school management platform covering institutional operations, student data, and parent communication workflows.
              </p>
              <span className="inline-flex w-fit items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-amber-400">
                ⏳ Delivering This Month
              </span>
            </div>

            {/* Client 3 */}
            <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 border border-violet-500/20 text-violet-400 font-bold text-sm font-mono">
                  NM
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground">New Model Convent School</h3>
                  <span className="text-[10px] font-medium text-violet-400 uppercase tracking-wide">Education · Ghazipur</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Digital school management system for admissions, attendance, fee collection, and parent engagement.
              </p>
              <span className="inline-flex w-fit items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-amber-400">
                ⏳ Delivering This Month
              </span>
            </div>
          </div>

          {/* Anonymous clients note */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            + 3 additional clients across education and healthcare sectors — names withheld by agreement.
          </p>
        </Container>
      </Section>

      {/* ─── Three Pillars Section ("What We Do") ─────────────────────────────────── */}
      <Section className="py-20 border-t border-border/40">

        <Container className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
              Pillars of NeelStack
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Proprietary Products & Custom Software Engineering
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              We design, build, and optimize software platforms that solve complex workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pillar 1: Enterprise Software */}
            <div className="rounded-2xl border border-border bg-card/20 p-6 flex flex-col justify-between hover:border-primary/30 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-all">
                  <Laptop className="h-5 w-5" />
                </div>
                <h3 className="text-base font-heading font-bold text-foreground">Enterprise Software</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Engineered for mission-critical operations. We design custom web systems, microservices architectures, and business automation pipelines.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['Web platforms', 'Cloud-native', 'System modernization', 'Microservices', 'API development'].map((pt) => (
                    <span key={pt} className="text-[9px] bg-muted/60 border border-border px-2 py-0.5 rounded text-muted-foreground">{pt}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Pillar 2: Product Engineering */}
            <div className="rounded-2xl border border-border bg-card/20 p-6 flex flex-col justify-between hover:border-primary/30 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-all">
                  <Cpu className="h-5 w-5" />
                </div>
                <h3 className="text-base font-heading font-bold text-foreground">Product Engineering</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We conceptualize and build proprietary SaaS software products tailored to digitize industries, starting with academic organizations.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['DhruvaOS', 'Healthcare Platforms', 'Pharmacy systems', 'Retail roadmaps'].map((pt) => (
                    <span key={pt} className="text-[9px] bg-muted/60 border border-border px-2 py-0.5 rounded text-muted-foreground">{pt}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Pillar 3: Technology Consulting */}
            <div className="rounded-2xl border border-border bg-card/20 p-6 flex flex-col justify-between hover:border-primary/30 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-all">
                  <Sliders className="h-5 w-5" />
                </div>
                <h3 className="text-base font-heading font-bold text-foreground">Technology Consulting</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  High-level consulting to steer technical roadmaps. We optimize databases, advise on Cloud DevOps setups, and construct AI strategies.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['Architecture strategy', 'DevOps audit', 'Performance tuning', 'AI strategies'].map((pt) => (
                    <span key={pt} className="text-[9px] bg-muted/60 border border-border px-2 py-0.5 rounded text-muted-foreground">{pt}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </Container>
      </Section>

      {/* ─── Featured Product Spot (DhruvaOS) ────────────────────────────────────── */}
      <Section className="py-20 bg-muted/10 relative">
        <Container className="space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center bg-purple-500/5 border border-purple-500/10 rounded-3xl p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full blur-2xl pointer-events-none" />

            <div className="lg:col-span-3 space-y-6">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/25 bg-purple-500/10 text-purple-300">
                <Zap className="h-3.5 w-3.5 animate-pulse text-purple-400" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Featured Product — Launching Soon</span>
              </div>

              <div className="space-y-2">
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground">DhruvaOS</h3>
                <p className="text-sm font-semibold text-purple-300">AI-Powered Education Operating System</p>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                A complete digital operating platform built for schools, colleges, universities, coaching institutes, and educational organizations. Replaces legacy ERP systems with unified, AI-native academic and billing workflows.
              </p>

              <div className="flex items-center gap-4.5">
                <Link
                  href="/products/dhruvaos"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-300 hover:text-purple-450 transition-colors"
                >
                  Learn More About DhruvaOS
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

            </div>

            {/* Simulated mini dashboard visual */}
            <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-[#0d1117] text-white p-5 space-y-4 shadow-2xl relative overflow-hidden font-sans">
              {/* Window chrome header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[9px] font-mono text-muted-foreground ml-1">DhruvaOS Admin Portal</span>
                </div>
                <span className="text-[9px] text-blue-400 font-bold uppercase tracking-wider">Mock UI</span>
              </div>

              {/* Greeting */}
              <div className="rounded-xl bg-gradient-to-r from-[#0f2044] to-[#0f1923] border border-blue-500/20 p-3 space-y-1">
                <span className="text-[7px] text-blue-400 font-bold tracking-widest uppercase">SATURDAY, 11 JULY 2026</span>
                <h4 className="text-xs font-extrabold text-white">Good evening, Admin 👋</h4>
              </div>

              {/* Mini Stats Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="rounded-lg border border-white/10 bg-[#141c27] p-2.5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">👥</span>
                    <span className="text-[8px] font-bold text-emerald-400">+12%</span>
                  </div>
                  <div>
                    <span className="text-[6px] text-muted-foreground uppercase block font-bold tracking-wide">Students</span>
                    <span className="text-xs font-extrabold text-white">1,248</span>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-[#141c27] p-2.5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">💳</span>
                    <span className="text-[8px] font-bold text-rose-400">-8%</span>
                  </div>
                  <div>
                    <span className="text-[6px] text-muted-foreground uppercase block font-bold tracking-wide">Fees</span>
                    <span className="text-xs font-extrabold text-white">₹4.2L</span>
                  </div>
                </div>
              </div>

              {/* AI Recommendation Alert */}
              <div className="rounded-lg border border-purple-500/20 bg-purple-500/5 p-2.5 text-[8px] text-purple-300 flex items-start gap-2">
                <Bot className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                <span>
                  <strong>AI Alert</strong>: Attendance trigger recommended for standard 10-B due to consecutive absences.
                </span>
              </div>
            </div>

          </div>

        </Container>
      </Section>

      {/* ─── Product Roadmap Section ────────────────────────────────────────────── */}
      <Section id="roadmap" className="py-20">
        <Container className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
              Product Development Pipeline
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Building the Future of Enterprise Software
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              NeelStack is building a family of industry-focused AI platforms that help organizations digitize operations and accelerate growth.
            </p>
          </div>

          {/* Grid of roadmap products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {roadmapProducts.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-card/25 p-5 flex flex-col justify-between hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-primary/5 px-2 py-0.5 rounded border border-primary/10">
                      {p.type}
                    </span>
                    <span className={`px-2 py-0.5 rounded border font-mono ${p.color}`}>
                      {p.status}
                    </span>
                  </div>

                  <h3 className="text-base font-heading font-bold text-foreground">
                    {p.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                {p.title === 'DhruvaOS' && (
                  <div className="pt-4 mt-4 border-t border-border/40 flex justify-end">
                    <Link
                      href="/products/dhruvaos"
                      className="text-[10px] font-bold uppercase tracking-wider text-purple-305 hover:text-purple-400 flex items-center gap-1 transition-colors"
                    >
                      View Workspace
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

        </Container>
      </Section>

      {/* ─── Services Section ────────────────────────────────────────────────────── */}
      <Section id="services" className="py-20 bg-card/5 border-t border-border/40">
        <Container className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
              Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Enterprise Engineering Services
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Custom systems designed, developed, and optimized by senior software engineers.
            </p>
          </div>

          {/* Grid list of services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {services.map((item) => {
              const IconComp = item.icon
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-card/20 p-5 hover:border-primary/20 hover:bg-card/50 transition-all duration-300 group"
                >
                  <div className="h-9 w-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform mb-4">
                    <IconComp className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-sm font-heading font-bold text-foreground mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>

        </Container>
      </Section>

      {/* ─── Why Choose NeelStack ────────────────────────────────────────────────── */}
      <Section className="py-20 bg-muted/10 relative">
        <Container className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              AI-First Software Engineering
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Why enterprise directors select NeelStack for mission-critical software systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card/25 p-5 flex flex-col justify-between hover:border-primary/15 transition-all duration-200"
              >
                <div className="space-y-2">
                  <div className="h-6 w-6 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <h3 className="text-xs font-heading font-bold text-foreground uppercase tracking-wider">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </Container>
      </Section>

      {/* ─── Industries We Serve ────────────────────────────────────────────────── */}
      <Section className="py-16 border-y border-border/40 bg-card/10">
        <Container className="space-y-8 text-center">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-xl font-heading font-bold text-foreground">Industries We Serve</h2>
            <p className="text-xs text-muted-foreground">
              Tailoring custom systems and software structures across diverse commercial sectors.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {industries.map((ind) => (
              <span
                key={ind}
                className="px-3.5 py-1.5 rounded-xl border border-border bg-card text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-primary/20 transition-all cursor-default"
              >
                {ind}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {/* ─── Technology Expertise ────────────────────────────────────────────────── */}
      <Section className="py-20">
        <Container className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Enterprise Technology Stack
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              We leverage modern, proven backend and AI frameworks to ensure robust system scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {techStack.map((stack) => (
              <div key={stack.category} className="rounded-2xl border border-border bg-card/20 p-5 space-y-4">
                <h3 className="text-xs font-heading font-bold text-primary uppercase tracking-widest border-b border-border/40 pb-2">
                  {stack.category}
                </h3>
                <ul className="space-y-2">
                  {stack.items.map((tech) => (
                    <li key={tech} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </Container>
      </Section>

      {/* ─── Engagement Models ───────────────────────────────────────────────────── */}
      <Section className="py-20 bg-muted/10 border-t border-border/40">
        <Container className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Flexible Engagement Models
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Partner with our engineering team in the structure that aligns with your development cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {engagements.map((eng) => (
              <div
                key={eng.model}
                className="rounded-2xl border border-border bg-card/25 p-5 flex flex-col justify-between hover:border-primary/20 transition-all duration-350"
              >
                <div className="space-y-2">
                  <h3 className="text-xs font-heading font-bold text-foreground uppercase tracking-wider">
                    {eng.model}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {eng.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </Container>
      </Section>

      {/* ─── Company Vision ──────────────────────────────────────────────────────── */}
      <Section className="py-20">
        <Container className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/20">
            <Globe className="h-5 w-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-foreground">
            Our Vision
          </h2>
          
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto italic">
            &quot;NeelStack exists to build intelligent software that empowers organizations through technology and artificial intelligence.&quot;
          </p>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Our long-term vision is to create a portfolio of AI-native enterprise platforms across multiple industries while continuing to help businesses solve complex engineering challenges through custom software development.
          </p>
        </Container>
      </Section>

      {/* ─── Rebranded Final CTA Section ────────────────────────────────────────── */}
      <Section className="relative py-24 overflow-hidden bg-gradient-to-t from-blue-950/20 via-background to-background border-t border-border/40">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-cyan-500/2 to-indigo-500/5 pointer-events-none" />
        
        <Container className="relative z-10 text-center space-y-8 max-w-3xl">
          
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground">
            Let&apos;s Build Something <br />
            Extraordinary Together.
          </h2>
          
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Whether you need a custom enterprise platform, an AI-powered application, or a long-term technology partner, NeelStack is ready to help.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4.5 pt-4">
            <Link
              href="/book-consultation"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary hover:bg-primary/95 text-white text-sm font-semibold transition-all shadow-md shadow-primary/10"
            >
              Book Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-border bg-card hover:bg-muted text-foreground text-sm font-semibold transition-all"
            >
              Start Your Project
            </Link>
            <Link
              href="/products/dhruvaos"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-muted/40 hover:bg-muted/65 text-muted-foreground hover:text-white text-sm font-semibold transition-all"
            >
              Explore DhruvaOS
            </Link>
          </div>

        </Container>
      </Section>

    </MarketingLayout>
  )
}
