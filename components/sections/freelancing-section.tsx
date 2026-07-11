'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Brain,
  Calendar,
  Check,
  Code2,
  Cpu,
  Layers,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { useInView } from '@/lib/use-in-view'

const RATE_TIERS = [
  {
    id: 'starter',
    label: 'Starter',
    role: 'Junior Full-Stack Dev',
    rate: '$15',
    unit: '/hr',
    description: 'Great for MVPs, landing pages, simple web apps, and short-term tasks.',
    icon: Code2,
    iconColor: 'text-sky-400',
    iconBg: 'bg-sky-500/10 border-sky-500/25',
    cardBorder: 'border-sky-500/20 hover:border-sky-400/50',
    glowColor: 'rgba(14,165,233,0.10)',
    accentColor: 'text-sky-400',
    gradientFrom: 'from-sky-500/10',
    gradientTo: 'to-transparent',
    scope: [
      'React / Next.js frontends',
      'REST API integration',
      'Basic database design',
      'Bug fixing & small features',
    ],
    isPopular: false,
  },
  {
    id: 'pro',
    label: 'Pro',
    role: 'Senior Full-Stack Dev',
    rate: '$35',
    unit: '/hr',
    description: 'Production-grade apps, complex business logic, and scalable architectures.',
    icon: Layers,
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10 border-blue-500/30',
    cardBorder: 'border-blue-500/35 hover:border-blue-400/70',
    glowColor: 'rgba(59,130,246,0.14)',
    accentColor: 'text-blue-400',
    gradientFrom: 'from-blue-500/12',
    gradientTo: 'to-cyan-500/5',
    scope: [
      'Full-stack SaaS platforms',
      'System architecture design',
      'Performance optimization',
      'Team lead & code reviews',
    ],
    isPopular: true,
  },
  {
    id: 'expert',
    label: 'Expert',
    role: 'AI / ML Engineer',
    rate: '$55',
    unit: '/hr',
    description: 'LLM integrations, RAG pipelines, AI agents, and intelligent workflow automation.',
    icon: Brain,
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/10 border-violet-500/25',
    cardBorder: 'border-violet-500/25 hover:border-violet-400/55',
    glowColor: 'rgba(139,92,246,0.12)',
    accentColor: 'text-violet-400',
    gradientFrom: 'from-violet-500/10',
    gradientTo: 'to-blue-500/5',
    scope: [
      'LLM & RAG pipeline builds',
      'Custom AI agents & tools',
      'ML model fine-tuning',
      'AI workflow automation',
    ],
    isPopular: false,
  },
  {
    id: 'elite',
    label: 'Elite',
    role: 'Tech Lead / Architect',
    rate: '$75',
    unit: '/hr',
    description: 'End-to-end solution design, CTO-as-a-service, and enterprise modernization.',
    icon: Cpu,
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10 border-cyan-500/25',
    cardBorder: 'border-cyan-500/20 hover:border-cyan-400/55',
    glowColor: 'rgba(6,182,212,0.10)',
    accentColor: 'text-cyan-400',
    gradientFrom: 'from-cyan-500/10',
    gradientTo: 'to-teal-500/5',
    scope: [
      'Technical architecture design',
      'CTO-as-a-Service advisory',
      'Enterprise modernization',
      'Cross-team delivery oversight',
    ],
    isPopular: false,
  },
] as const

const staggerClasses = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4'] as const

export function FreelancingSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.08 })

  return (
    <Section id="hire-developer" className="bg-background relative overflow-hidden">
      {/* Violet mesh background accent */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-60 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 40% at 50% 0%, oklch(0.65 0.25 290 / 5%) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <SectionHeader
          badge="Hire a Developer"
          title="Expert Developers, Hourly"
          description="Skip the hiring overhead. Get battle-tested NeelStack engineers on-demand for your project — billed by the hour, no lock-in."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {RATE_TIERS.map((tier, idx) => {
            const Icon = tier.icon
            return (
              <div
                key={tier.id}
                className={cn(
                  'group relative flex flex-col rounded-2xl border bg-card p-6 overflow-hidden transition-all duration-300 ease-out animate-in-view',
                  tier.cardBorder,
                  'hover:-translate-y-1.5',
                  staggerClasses[idx],
                  inView && 'is-visible'
                )}
                style={{
                  boxShadow: 'none',
                  ['--hover-glow' as string]: tier.glowColor,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.boxShadow = `0 0 32px ${tier.glowColor}, 0 8px 32px rgba(0,0,0,0.35)`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Gradient overlay */}
                <div
                  className={cn(
                    'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none',
                    tier.gradientFrom,
                    tier.gradientTo
                  )}
                  aria-hidden="true"
                />

                {/* Popular badge */}
                {tier.isPopular && (
                  <div className="absolute top-0 right-0" aria-label="Most popular tier">
                    <div className="relative">
                      <div className="rounded-bl-xl rounded-tr-2xl bg-brand-gradient px-3 py-1 text-[10px] font-bold text-white tracking-wide shadow-lg">
                        POPULAR
                      </div>
                    </div>
                  </div>
                )}

                {/* Icon + tier label */}
                <div className="relative z-10 flex items-center gap-3 mb-5">
                  <span
                    className={cn(
                      'flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110',
                      tier.iconBg
                    )}
                    aria-hidden="true"
                  >
                    <Icon className={cn('h-5 w-5', tier.iconColor)} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      {tier.label}
                    </p>
                    <p className="text-sm font-semibold text-foreground">{tier.role}</p>
                  </div>
                </div>

                {/* Rate */}
                <div className="relative z-10 mb-3">
                  <div className="flex items-baseline gap-1">
                    <span className={cn('font-heading text-4xl font-extrabold', tier.accentColor)}>
                      {tier.rate}
                    </span>
                    <span className="text-muted-foreground text-sm font-medium">{tier.unit}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="relative z-10 my-4 h-px bg-border/60" />

                {/* Scope list */}
                <ul className="relative z-10 flex-1 space-y-2.5 mb-6">
                  {tier.scope.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <Check
                        className={cn('h-3.5 w-3.5 mt-0.5 shrink-0', tier.iconColor)}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/book-consultation"
                  className={cn(
                    'relative z-10 inline-flex w-full items-center justify-center gap-2 rounded-xl border py-2.5 text-sm font-semibold transition-all duration-200',
                    tier.isPopular
                      ? 'border-transparent bg-brand-gradient text-white hover:opacity-90 glow-cta'
                      : `border-current ${tier.accentColor} hover:bg-white/5`
                  )}
                  aria-label={`Book ${tier.role} consultation`}
                >
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  Book a Call
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-muted-foreground max-w-lg text-pretty">
            All engagements start with a <strong className="text-foreground">free 30-min discovery call</strong>.
            Minimum 10 hours. Flexible scope, weekly billing, cancel anytime.
          </p>
          <Button asChild variant="outline" size="sm" className="gap-2 mt-1">
            <Link href="/pricing">
              View full pricing details
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
