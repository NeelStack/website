import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { HeroSection } from '@/components/sections/hero-section'
import { StatsSection } from '@/components/sections/stats-section'
import { ProcessSection } from '@/components/sections/process-section'
import { FashionShowcaseSection } from '@/components/sections/fashion-showcase-section'
import { TechnologySection } from '@/components/sections/technology-section'
import { BlogPreviewSection } from '@/components/sections/blog-preview-section'
import { WebsiteAnalysisLeadMagnet } from '@/components/sections/website-analysis-lead-magnet'
import { FreeConsultationCTA } from '@/components/sections/free-consultation-cta'
import { IndustryCard } from '@/components/ui/industry-card'
import { INDUSTRIES } from '@/constants/industries'
import { getSiteUrl } from '@/lib/site-url'
import {
  ArrowRight,
  Bot,
  Sparkles,
  Zap,
  Sliders,
  Users,
  Smartphone,
  Cloud,
  Layers,
  Laptop,
  Shield,
  ExternalLink,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'NeelStack | Enterprise AI & Software Solutions',
  description:
    'NeelStack designs, develops, and delivers intelligent software platforms for businesses while creating next-generation AI-powered SaaS products.',
  keywords: [
    'Enterprise Software',
    'AI development',
    'Custom Software Development',
    'SaaS Product Engineering',
    'Cloud-Native Architectures',
    'NeelStack',
    'DhruvaOS',
    'ToolVines',
  ],
  alternates: {
    canonical: getSiteUrl(),
  },
}

/* ── Customer-First Primary Services ── */
const primaryServices = [
  {
    id: 'website-development',
    title: 'Website Development',
    icon: Laptop,
    desc: 'High-speed business websites, corporate portals, Next.js storefronts, and conversion-focused landing pages.',
    href: '/services/enterprise-web',
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-500/10 border-blue-500/25',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]',
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    icon: Smartphone,
    desc: 'Native iOS & Android apps, cross-platform Flutter/React Native solutions, and Progressive Web Apps (PWA).',
    href: '/services/mobile-development',
    color: 'text-cyan-600 dark:text-cyan-400',
    bgColor: 'bg-cyan-500/10 border-cyan-500/25',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.18)]',
  },
  {
    id: 'custom-software-erp',
    title: 'Custom Software & ERP/CRM',
    icon: Sparkles,
    desc: 'Tailored ERP systems, CRM client portals, internal team workflow tools, and multi-tenant SaaS products.',
    href: '/services/custom-software',
    color: 'text-violet-600 dark:text-violet-400',
    bgColor: 'bg-violet-500/10 border-violet-500/25',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.18)]',
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions & Agents',
    icon: Bot,
    desc: '24/7 AI chatbots, autonomous workflow agents, custom LLMs, and vector RAG document search engines.',
    href: '/services/ai-development',
    color: 'text-rose-600 dark:text-rose-400',
    bgColor: 'bg-rose-500/10 border-rose-500/25',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(244,63,94,0.18)]',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Infrastructure & DevOps',
    icon: Cloud,
    desc: 'AWS & Vercel hosting setups, Docker containerization, automated CI/CD pipelines, and zero-downtime scaling.',
    href: '/services/devops-cloud',
    color: 'text-amber-600 dark:text-amber-400',
    bgColor: 'bg-amber-500/10 border-amber-500/25',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.18)]',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Product Design',
    icon: Sliders,
    desc: 'Interactive Figma wireframing, high-fidelity design systems, conversion rate optimization, and brand identity.',
    href: '/services/ui-ux-design',
    color: 'text-emerald-600 dark:text-emerald-400',
    bgColor: 'bg-emerald-500/10 border-emerald-500/25',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.18)]',
  },
]

/* ── "Why Choose" differentiators ── */
const whyChoose = [
  {
    title: 'AI-First Engineering',
    desc: 'We weave cognitive LLM modules directly into database and server workflows rather than tacking on superficial bots.',
    icon: Bot,
    color: 'text-cyan-600 dark:text-cyan-400',
    borderColor: 'border-l-cyan-500',
    bgColor: 'bg-cyan-500/10 border-cyan-500/25',
  },
  {
    title: 'Cloud-Native Architecture',
    desc: 'Engineered for serverless execution, autoscaling, and global multi-region deployments with subsecond latency.',
    icon: Cloud,
    color: 'text-violet-600 dark:text-violet-400',
    borderColor: 'border-l-violet-500',
    bgColor: 'bg-violet-500/10 border-violet-500/25',
  },
  {
    title: 'Enterprise-Grade Security',
    desc: 'Role-based authorization matrices, database encryption at rest and in transit, and audit logging standards.',
    icon: Shield,
    color: 'text-amber-600 dark:text-amber-400',
    borderColor: 'border-l-amber-500',
    bgColor: 'bg-amber-500/10 border-amber-500/25',
  },
  {
    title: 'Dedicated Senior Engineers',
    desc: 'No outsourcing or junior handoffs. You work directly with senior software architects and engineers.',
    icon: Users,
    color: 'text-emerald-600 dark:text-emerald-400',
    borderColor: 'border-l-emerald-500',
    bgColor: 'bg-emerald-500/10 border-emerald-500/25',
  },
  {
    title: 'Modern Linear/Stripe UX',
    desc: 'Vibrant, minimal design languages built on strict CSS custom properties and spring micro-interactions.',
    icon: Layers,
    color: 'text-blue-600 dark:text-blue-400',
    borderColor: 'border-l-blue-500',
    bgColor: 'bg-blue-500/10 border-blue-500/25',
  },
  {
    title: 'Product Thinking',
    desc: 'We build with business commercial goals in mind — focusing on speed to market, user retention, and low maintenance.',
    icon: Sparkles,
    color: 'text-rose-600 dark:text-rose-400',
    borderColor: 'border-l-rose-500',
    bgColor: 'bg-rose-500/10 border-rose-500/25',
  },
]

export default function HomePage() {
  return (
    <MarketingLayout>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Stats & Proof Metrics Bar */}
      <StatsSection />

      {/* 3. Primary Customer-First Services */}
      <Section className="py-20 bg-surface relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-violet-500/5 blur-[120px] pointer-events-none" aria-hidden="true" />
        <Container className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/25">
              What We Build
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground tracking-tight">
              Customer-Centric Software Services
            </h2>
            <p className="text-sm text-muted-foreground">
              We design, develop, and scale digital products tailored to your commercial business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primaryServices.map((service) => {
              const ServiceIcon = service.icon
              return (
                <div
                  key={service.id}
                  className={`group rounded-2xl border border-border/80 bg-card p-6 flex flex-col justify-between space-y-4 card-hover relative overflow-hidden transition-all duration-300 ${service.glowColor}`}
                >
                  <div className="space-y-3 relative">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${service.bgColor} ${service.color}`}>
                      <ServiceIcon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{service.desc}</p>
                  </div>
                  <Link
                    href={service.href}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold ${service.color} hover:gap-2.5 transition-all relative`}
                  >
                    Explore service <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              )
            })}
          </div>

          <div className="text-center pt-4">
            <Button asChild variant="outline">
              <Link href="/services">Explore All Services &amp; Capabilities →</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* 4. Featured Software Products & Active Client Builds */}
      <Section className="py-20 relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-violet-500/5 blur-[120px] pointer-events-none" aria-hidden="true" />
        <Container className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold text-violet-500 dark:text-violet-400 uppercase tracking-widest bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/25">
              Proprietary SaaS &amp; Active Builds
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground tracking-tight">
              Featured Products &amp; Deliveries
            </h2>
            <p className="text-sm text-muted-foreground">
              We engineer our own live SaaS products and deliver custom enterprise software for clients worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* ToolVines Spotlight */}
            <div className="group rounded-2xl border border-blue-500/30 bg-card p-6 md:p-8 flex flex-col justify-between space-y-6 card-hover relative overflow-hidden">
              <div className="space-y-4 relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/25">
                    Productivity Suite
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/25 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live &amp; Deployed
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">ToolVines</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Browser-based productivity platform providing PDF, image, video, annotation, and document utility tools with AI-powered features.
                </p>
              </div>
              <div className="pt-4 border-t border-border/40 flex items-center justify-between relative">
                <Link
                  href="https://toolvines.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Visit ToolVines.com <ExternalLink className="h-3.5 w-3.5" />
                </Link>
                <Link href="/products/toolvines" className="text-xs text-muted-foreground hover:text-foreground">
                  Learn details →
                </Link>
              </div>
            </div>

            {/* DhruvaOS Spotlight */}
            <div className="group rounded-2xl border border-purple-500/30 bg-card p-6 md:p-8 flex flex-col justify-between space-y-6 card-hover relative overflow-hidden">
              <div className="space-y-4 relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/25">
                    Education OS (EdOS)
                  </span>
                  <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/25">
                    Beta Launching Soon
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">DhruvaOS</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Unified AI-powered operating system for schools and colleges — managing admissions, academics, fee invoices, analytics, and parent communications.
                </p>
              </div>
              <div className="pt-4 border-t border-border/40 flex items-center justify-between relative">
                <Link
                  href="/products/dhruvaos"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-purple-600 dark:text-purple-400 hover:underline"
                >
                  Explore DhruvaOS <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <span className="text-xs text-amber-600 dark:text-amber-400 font-mono">Beta: August 15</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. D2C Fashion & Apparel Engineering Showcase */}
      <FashionShowcaseSection />

      {/* 6. Industries We Serve */}
      <Section className="py-20 bg-surface relative overflow-hidden">
        <Container className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/25">
              Domain Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-sm text-muted-foreground">
              Delivering specialized software solutions built around real-world domain workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. Why Choose NeelStack */}
      <Section className="py-20 relative overflow-hidden">
        <Container className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/25">
              Why NeelStack
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground tracking-tight">
              Built for Engineering Quality &amp; Speed
            </h2>
            <p className="text-sm text-muted-foreground">
              What sets our software engineering methodology apart.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className={`group rounded-2xl border border-border/80 bg-card p-6 space-y-3 card-hover border-l-4 ${item.borderColor} relative overflow-hidden`}
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${item.bgColor} ${item.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* 8. Interactive Tech Stack Switcher */}
      <TechnologySection />

      {/* 9. Development Process */}
      <ProcessSection />

      {/* 10. Low-Cost Website Analysis Lead Magnet */}
      <WebsiteAnalysisLeadMagnet />

      {/* 11. Blog Preview */}
      <BlogPreviewSection />

      {/* 12. Single High-Impact Consultation CTA */}
      <FreeConsultationCTA />
    </MarketingLayout>
  )
}
