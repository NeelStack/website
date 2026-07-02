import type { Metadata } from 'next'
import {
  Code,
  Compass,
  Cpu,
  Layers,
  CheckCircle2,
  Hourglass,
  Layout,
  Lock,
  LineChart,
  Terminal,
  Activity,
  Heart,
  Shield,
  Lightbulb,
} from 'lucide-react'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { CTASection } from '@/components/ui/cta-section'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about NeelStack — our mission, our values, our engineering principles, and our journey building the future of AI-powered software.',
}

const VALUES = [
  { icon: Code, title: 'Engineering Excellence', description: 'We hold ourselves to the highest standards. Clean code, scalable architecture, and maintainability are non-negotiable.' },
  { icon: Compass, title: 'Transparency', description: 'We are honest about where we are today and where we are going. Transparency with our clients and users builds lasting trust.' },
  { icon: Hourglass, title: 'Long-term Thinking', description: 'We design software to scale and grow for the next 10+ years. We do not compromise on technical debt for short-term gain.' },
  { icon: Cpu, title: 'AI-first Innovation', description: 'We actively design systems that harness artificial intelligence to simplify workflows and solve real-world problems.' },
  { icon: Heart, title: 'Customer Success', description: 'Our custom software delivery focus is centered on driving tangible business outcomes and building partnerships.' },
  { icon: Lightbulb, title: 'Continuous Learning', description: 'We invest heavily in refining our stack, testing new architectures, and adopting superior developer tools.' },
  { icon: Shield, title: 'Security by Design', description: 'Data protection and secure boundaries are coded directly into our system architectures from day one.' },
  { icon: Terminal, title: 'Developer Experience', description: 'We care deeply about clean environments, fast rebuild times, and tools that make software engineering a pleasure.' },
  { icon: Activity, title: 'Performance by Default', description: 'We construct low-latency systems. Optimization is integrated into our core development cycles, not treated as an afterthought.' },
  { icon: Layers, title: 'Scalable Architecture', description: 'Modular designs, structured database schemas, and decoupled workflows ensure our platforms adapt on-demand.' },
]

const PRINCIPLES = [
  { title: 'Build for Maintainability', description: 'Write readable, self-documenting code. Future developers should understand the architecture instantly.' },
  { title: 'Simplicity Over Complexity', description: 'Avoid unnecessary abstractions. Build the simplest system that solves the problem robustly.' },
  { title: 'Value-driven AI Integration', description: 'Only deploy AI models where they create measurable value, rather than following temporary hype cycles.' },
  { title: 'Performance & Security Default', description: 'Every query, interface transition, and route is designed for fast loads and strict data isolation by default.' },
  { title: 'Automation Over Repetition', description: 'If a workflow is performed more than twice, automate it. We script deployments, integration checks, and releases.' },
  { title: 'Build Reusable Systems', description: 'Form modular components and utilities. Reusable packages ensure velocity and reliability across all builds.' },
  { title: 'Continuous Improvement', description: 'Regularly audit, profile, and refactor existing architectures to eliminate bottlenecks.' },
]

const WHY_NEELSTACK = [
  { title: 'AI-first Approach', description: 'We integrate intelligent agent layers and retrieval pipelines natively into custom business systems.' },
  { title: 'Modern Stack', description: 'We leverage Next.js App Router, FastAPI, Tailwind CSS, PostgreSQL, and Docker for speed and security.' },
  { title: 'Transparent Communication', description: 'We build in public and provide clients with absolute clarity regarding system scope and progress.' },
  { title: 'Product Mindset', description: 'We build our own SaaS platforms, meaning we understand the challenges of hosting, scaling, and conversion optimization firsthand.' },
  { title: 'Long-term Partnerships', description: 'We run as a technology partner, consulting on technical roadmaps and product strategies over many years.' },
  { title: 'Clean Engineering', description: 'No shortcut codes, no ignored type checks. We enforce strict TypeScript and automated verification pipelines.' },
]

const JOURNEY = [
  { status: 'live', name: 'ToolVines', detail: 'Browser-based productivity platform providing PDF, image, video, annotation and document utilities with AI-powered features designed to simplify everyday workflows for individuals, professionals and businesses.', label: 'Live (2026)' },
  { status: 'launching', name: 'LifeAsia Website', detail: 'Corporate website for a pharmaceutical company. The company develops, brands, markets and distributes pharmaceutical and healthcare products while partnering with certified third-party pharmaceutical manufacturers for product development and manufacturing.', label: 'Launching Soon' },
  { status: 'dev', name: 'NaukariMitra', detail: 'AI-powered government job preparation platform providing exam guidance, mock tests, previous papers, study resources and personalized learning assistance.', label: 'In Development' },
  { status: 'dev', name: 'SarkariMitra', detail: 'AI-powered citizen assistance platform helping people discover government schemes, benefits, public services, eligibility criteria, required documents and application guidance through conversational AI.', label: 'In Development' },
  { status: 'dev', name: 'DhruvaOS', detail: 'AI-powered social media automation platform helping creators, startups and businesses automate content publishing, workflow management and digital growth.', label: 'In Development' },
  { status: 'dev', name: 'School Management System', detail: 'Custom software platform for school administration, operations and management.', label: 'In Development' },
  { status: 'dev', name: 'Book Store Management System', detail: 'Custom software platform for educational book stores and institutional book distribution management.', label: 'In Development' },
]

const LEADERSHIP = [
  {
    name: 'Shyam Chaurasiya',
    role: 'Founder & Engineering Lead',
    bio: 'Responsible for product architecture, software engineering and technology strategy.',
  },
  {
    name: 'Neelam Chaurasiya',
    role: 'Co-Founder',
    bio: 'Focused on operations, business strategy and company growth.',
  },
]

export default function AboutPage() {
  return (
    <MarketingLayout>
      <PageHero
        badge="About NeelStack"
        title="Ambitious Early-Stage AI Software Startup"
        description="NeelStack is a distributed technology lab based in India. We design and deploy custom software architectures for clients worldwide while building our own proprietary SaaS platforms."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      {/* Corporate Philosophy */}
      <Section className="bg-card">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-5">
                Our Mission
              </span>
              <h2 className="font-heading text-3xl font-extrabold text-foreground md:text-4xl text-balance">
                Building proprietary SaaS platforms while engineering custom client solutions
              </h2>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                NeelStack is a focused, engineering-first software company. We believe in the power of simplicity, 
                high-agency execution, and transparent communication. We build our own proprietary AI products 
                while partnering with startups, SMBs, and healthcare/education providers globally to deliver custom builds.
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Rather than operating as a legacy outsourcing shop, we act as a modern product lab. We apply the 
                exact same code formatting, strict TypeScript rules, and optimized deployment pipelines to client systems 
                as we do to our own codebases.
              </p>
            </div>

            {/* Why NeelStack grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {WHY_NEELSTACK.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-background p-5"
                >
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1.5">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Journey timeline */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-5">
              Transparent Progress
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-foreground text-balance">
              Our Journey & Current Progress
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
              We believe in showing exactly what we are building today without exaggerations or fake timelines.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {JOURNEY.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-1">
                      <h3 className="font-heading text-lg font-bold text-foreground">{item.name}</h3>
                      <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-2xs font-medium ${
                        item.status === 'live' ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' :
                        item.status === 'launching' ? 'border-amber-500/30 bg-amber-500/10 text-amber-400' :
                        'border-blue-500/30 bg-blue-500/10 text-blue-400'
                      }`}>
                        {item.label}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
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
            <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-5">
              Leadership
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-foreground text-balance">
              The Leadership Team
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            {LEADERSHIP.map((person) => (
              <div
                key={person.name}
                className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">{person.name}</h3>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mt-1">
                    {person.role}
                  </p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {person.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Engineering Principles */}
      <Section className="bg-card border-t border-border">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-5">
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
                className="flex flex-col gap-2 rounded-2xl border border-border bg-background p-6"
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
            <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-5">
              Core Pillars
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
                  className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 hover:border-primary/20 transition-colors"
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
