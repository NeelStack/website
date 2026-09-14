import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Code,
  Compass,
  Cpu,
  Layers,
  Hourglass,
  Lock,
  LineChart,
  Terminal,
  Activity,
  Heart,
  Shield,
  Lightbulb,
  Sparkles,
  Bot,
  Brain,
  Rocket,
  ArrowRight,
} from 'lucide-react'
import Image from 'next/image'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { CTASection } from '@/components/ui/cta-section'
import { TrustBarSection } from '@/components/sections/trust-bar-section'
import { AccreditationBadges } from '@/components/ui/accreditation-badges'
import { SITE_CONFIG } from '@/constants/site'

export const metadata: Metadata = {
  title: 'About NeelStack Solutions | Software Products & AI Systems',
  description:
    'Learn about NeelStack Solutions — a software products and AI systems company incorporated in India in August 2026. Discover our vision, engineering principles, and product roadmap.',
  alternates: {
    canonical: '/about',
  },
}

const VALUES = [
  { icon: Code, title: 'Engineering Excellence', description: 'We hold ourselves to the highest standards. Clean code, deterministic architecture, and maintainability are fundamental.' },
  { icon: Compass, title: 'Honesty & Transparency', description: 'We are direct about where our products are today and where we are going. Transparency with our users builds enduring trust.' },
  { icon: Hourglass, title: 'Long-term Thinking', description: 'We design software systems built to endure and evolve. We do not take shortcuts that compromise long-term architecture.' },
  { icon: Cpu, title: 'AI-First Innovation', description: 'We build systems that leverage artificial intelligence and autonomous agent workflows to simplify complex business operations.' },
  { icon: Shield, title: 'Security & Privacy by Design', description: 'Zero-retention data policies and strict security boundaries are engineered into our product architectures from day one.' },
  { icon: Terminal, title: 'Developer Craftsmanship', description: 'We maintain strict type systems, modular codebases, and robust automated build verification across all repositories.' },
  { icon: Activity, title: 'Performance by Default', description: 'Sub-second interactions, client-side WebAssembly compute, and low-latency architectures are our default baseline.' },
  { icon: Layers, title: 'Modular Architecture', description: 'Composable services, structured relational schemas, and decoupled agent protocols ensure our platforms scale smoothly.' },
  { icon: Lightbulb, title: 'Continuous R&D', description: 'We invest aggressively into frontier AI capabilities, autonomous multi-agent coordination, and Model Context Protocol (MCP) tooling.' },
]

const PRINCIPLES = [
  { title: 'Build for Maintainability', description: 'Write readable, self-documenting code. Any engineer should be able to reason through the system architecture immediately.' },
  { title: 'Simplicity Over Complexity', description: 'Avoid unnecessary abstractions. Engineer the cleanest, most reliable architecture that solves the problem decisively.' },
  { title: 'Value-Driven AI Integration', description: 'Deploy AI agents and models where they create genuine utility and intelligence, not superficial hype.' },
  { title: 'Privacy & Security First', description: 'Protect user and organization data through client-side processing, localized compute, and strict tenant boundaries.' },
  { title: 'Automate Relentlessly', description: 'Script and automate testing, build validation, and deployments to maintain high velocity and zero regressions.' },
  { title: 'Modular & Extensible', description: 'Build reusable packages, composable tools, and standardized protocols across every product layer.' },
]

const WHY_NEELSTACK = [
  { title: 'Frontier AI & Agentic Runtimes', description: 'We research and build autonomous multi-agent systems, Model Context Protocol (MCP) integrations, and contextual company intelligence.' },
  { title: 'Modern Engineering Stack', description: 'We build with Next.js App Router, TypeScript, Python FastAPI, WebAssembly, Docker, and PostgreSQL for speed, resilience, and reliability.' },
  { title: 'Product Discipline', description: 'We build and operate our own software products, giving us firsthand insight into real-world performance, usability, and scale.' },
  { title: 'Clear Product Roadmap', description: 'We focus our engineering on high-impact products across productivity, education operations, and enterprise AI orchestration.' },
]

const JOURNEY = [
  {
    name: 'ToolVines (toolvines.com)',
    status: 'live',
    label: 'Live Product',
    detail: 'Browser-based productivity platform providing fast PDF, image, document, and AI tools with zero server-side file retention and client-side WebAssembly processing.',
  },
  {
    name: 'DhruvaOS (dhruvaos.com · Launching 2 October 2026)',
    status: 'launching',
    label: 'Ready for Launch — Launching 2 October 2026',
    detail: "NeelStack's unified school operating system, ready for launch and currently onboarding early pilot institutions. Features school onboarding, admin setup, CMS, official school website, mobile app, desktop app, institutional management, and intelligent AI workflows.",
  },
  {
    name: 'AI Workforce Platform / AI Company OS',
    status: 'dev',
    label: 'Research & Product Direction',
    detail: 'An AI-powered company operating layer exploring specialized autonomous agents (Executive, Engineering, Operations, Strategy) for organizational intelligence and workflow automation.',
  },
  {
    name: 'NaukariMitra (naukarimitra.in)',
    status: 'planned',
    label: 'Planned Product',
    detail: 'Planned career exploration and competitive exam preparation platform with guided learning workflows and structured resources.',
  },
  {
    name: 'SarakariMitra (sarakarimitra.org)',
    status: 'planned',
    label: 'Planned Product',
    detail: 'Planned public services and citizen guidance platform designed to help users discover and navigate government schemes and public documentation.',
  },
]

const LEADERSHIP = [
  {
    name: 'Shyam Chaurasiya',
    role: 'Founder & Legal CEO',
    badge: 'Founder & Legal CEO',
    bio: 'Founder, legal CEO, and ultimate accountable decision-maker directing technology architecture, company vision, and product execution across all NeelStack platforms.',
    category: 'leadership',
    avatarKey: '/images/illustrations/avatar-leader.png',
  },
  {
    name: 'Neelam Chaurasiya',
    role: 'Co-founder & Business Operations',
    badge: 'Co-founder',
    bio: 'Oversees company operations, organizational planning, and corporate strategy to guide NeelStack through its foundational growth and commercialization.',
    category: 'leadership',
    avatarKey: '/images/illustrations/avatar-cofounder-female.png',
  },
  {
    name: 'NeelStack AI CEO',
    role: 'Strategic AI Operating Partner',
    badge: 'AI Executive Partner',
    bio: 'Executive agentic intelligence partner supporting strategic analysis, multi-agent workforce coordination, bottleneck identification, and operational simulations alongside the human founder.',
    category: 'ai-leadership',
    avatarKey: '/images/illustrations/avatar-leader.png',
  },
]

export default function AboutPage() {
  return (
    <MarketingLayout>
      <PageHero
        badge="About NeelStack Solutions"
        title="Building the Software and AI Systems of Tomorrow"
        description="NeelStack Solutions Private Limited is a technology company incorporated in India in August 2026, building software products, AI-powered systems, and modern digital platforms."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      <TrustBarSection />
      <AccreditationBadges />

      {/* Corporate Philosophy & Vision */}
      <Section className="bg-card/60 backdrop-blur-sm border-t border-border/60">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            <div className="space-y-6">
              <div>
                <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary uppercase tracking-widest mb-4">
                  Our Mission &amp; Vision
                </span>
                <h2 className="font-heading text-3xl font-extrabold text-foreground md:text-4xl tracking-tight text-balance">
                  Empowering organizations with intelligent software and autonomous systems
                </h2>
              </div>
              
              <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5 space-y-3">
                <h3 className="font-heading text-base font-bold text-primary uppercase tracking-wider">Our Vision</h3>
                <p className="text-base text-foreground leading-relaxed font-medium">
                  &ldquo;Build technology that allows organizations and founders to operate with greater intelligence, automation and speed.&rdquo;
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border/70 bg-card/80 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-base font-bold text-foreground uppercase tracking-wider">Long-Term Vision</h3>
                  <Link href="/whitepapers/ai-company-operating-system" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                    Whitepaper <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  NeelStack aims to build the <strong>AI Company Operating System</strong> — an intelligent executive workforce platform (AI CEO, CTO, CFO, COO) that coordinates organizational intelligence, persistent institutional memory, and workflow execution alongside human founders.
                </p>
              </div>

              {/* Founding Story & Location */}
              <div className="p-6 rounded-2xl border border-border/70 bg-card/40 space-y-3">
                <h3 className="font-heading text-sm font-bold text-foreground uppercase tracking-wider">Company Background</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Incorporated on <strong className="text-foreground">31 August 2026</strong> in India ({SITE_CONFIG.legalName}), NeelStack operates through three complementary engines: <strong className="text-foreground">NeelStack Services</strong> (cash flow &amp; enterprise engineering), <strong className="text-foreground">DhruvaOS</strong> (School Operating System SaaS), and <strong className="text-foreground">ToolVines</strong> (browser utilities &amp; traffic platform).
                </p>
              </div>
            </div>

            {/* Why NeelStack grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {WHY_NEELSTACK.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-background/60 backdrop-blur-sm p-5 space-y-2 hover:border-primary/30 transition-colors"
                >
                  <h3 className="font-heading text-sm font-bold text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Product Roadmap & Journey */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary uppercase tracking-widest mb-4">
              Product Roadmap
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-foreground text-balance">
              Our Products &amp; Current Progress
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
              A transparent view of our live software, upcoming launches, and research initiatives.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {JOURNEY.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 hover:border-primary/30 transition-colors"
                >
                  <div className="flex-1 space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="font-heading text-base font-bold text-foreground">{item.name}</h3>
                      <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
                        item.status === 'live' ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' :
                        item.status === 'launching' ? 'border-amber-500/30 bg-amber-500/10 text-amber-400' :
                        item.status === 'dev' ? 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400' :
                        'border-violet-500/30 bg-violet-500/10 text-violet-400'
                      }`}>
                        {item.label}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Leadership Section */}
      <Section className="border-t border-border">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary uppercase tracking-widest mb-4">
              Company Leadership
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-foreground text-balance">
              Founders &amp; Leadership
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
              Guiding NeelStack with technical discipline, long-term vision, and focused execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {LEADERSHIP.map((person) => {
              const isAi = person.category === 'ai-leadership'
              return (
                <div
                  key={person.name}
                  className={`rounded-3xl border ${isAi ? 'border-cyan-500/30 bg-gradient-to-b from-card to-cyan-950/10' : 'border-primary/20 bg-card'} overflow-hidden flex flex-col shadow-lg transition-all duration-300 hover:shadow-xl`}
                >
                  {/* Avatar section */}
                  <div className={`relative flex items-end justify-center pt-8 pb-0 border-b border-border/40 ${isAi ? 'bg-gradient-to-b from-cyan-500/15 to-transparent' : 'bg-gradient-to-b from-primary/10 to-transparent'}`}>
                    <Image
                      src={person.avatarKey}
                      alt={`${person.name} portrait`}
                      width={160}
                      height={160}
                      className="h-40 w-auto object-contain object-bottom"
                      style={{
                        filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.15))',
                      }}
                    />
                  </div>

                  {/* Info section */}
                  <div className="p-6 md:p-7 flex flex-col gap-3 flex-1 justify-between">
                    <div className="space-y-3">
                      <div className={`inline-flex self-start items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${isAi ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/25' : 'bg-primary/10 text-primary border border-primary/20'}`}>
                        {person.badge || 'Leadership'}
                      </div>
                      <div>
                        <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground tracking-tight">{person.name}</h3>
                        <p className={`text-xs font-bold uppercase tracking-widest mt-1 ${isAi ? 'text-cyan-600 dark:text-cyan-400' : 'text-primary'}`}>{person.role}</p>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-3 border-t border-border/40">{person.bio}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Engineering Principles */}
      <Section className="bg-card/60 backdrop-blur-sm border-t border-border">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary uppercase tracking-widest mb-4">
              How We Build
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-foreground text-balance">
              Engineering Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {PRINCIPLES.map((principle) => (
              <div
                key={principle.title}
                className="flex flex-col gap-2 rounded-2xl border border-border bg-background/60 backdrop-blur-sm p-6"
              >
                <h3 className="font-heading text-base font-bold text-foreground">{principle.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Values section */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary uppercase tracking-widest mb-4">
              Core Values
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-foreground text-balance">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="flex flex-col gap-4 rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 hover:border-primary/20 card-ai-hover transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      <CTASection />
    </MarketingLayout>
  )
}

