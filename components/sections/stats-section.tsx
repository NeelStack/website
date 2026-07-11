'use client'

import { Brain, Code2, Layers, Rocket } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { useInView } from '@/lib/use-in-view'
import { cn } from '@/lib/utils'

const pillars = [
  {
    title: 'Proprietary SaaS',
    subtitle: 'We build and run our own platforms',
    description: 'Our first live product, ToolVines, serves active workflows. We prove our system designs on our own products first.',
    icon: Layers,
    gradient: 'from-blue-500/20 to-cyan-500/10',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    title: 'High-Fidelity Engineering',
    subtitle: 'Custom builds for startups & SMBs',
    description: 'We apply the same engineering rigour and testing guidelines to client systems as we do to our proprietary builds.',
    icon: Code2,
    gradient: 'from-cyan-500/20 to-teal-500/10',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10 border-cyan-500/20',
  },
  {
    title: 'AI-First Delivery',
    subtitle: 'Agents, custom LLMs & workflows',
    description: 'We integrate retrieval-augmented generation (RAG) and workflow automations that create quantifiable business value.',
    icon: Brain,
    gradient: 'from-violet-500/20 to-blue-500/10',
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/10 border-violet-500/20',
  },
  {
    title: 'Modern Stack',
    subtitle: 'Production-grade architectures',
    description: 'We standardize on Next.js, React, FastAPI, PostgreSQL, and Docker to ensure clean deployments and cost efficiency.',
    icon: Rocket,
    gradient: 'from-emerald-500/20 to-cyan-500/10',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
  },
] as const

const staggerClasses = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4'] as const

export function StatsSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section
      className="border-y border-border bg-card py-16 md:py-24 relative overflow-hidden"
      aria-label="Core Pillars of Execution"
    >
      {/* Subtle top glow */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, oklch(0.62 0.22 258 / 30%) 50%, transparent 100%)' }}
        aria-hidden="true"
      />

      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-12">
          Why teams choose NeelStack
        </p>
        <div
          ref={ref}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className={cn(
                  'group flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 card-hover hover:border-primary/30 relative overflow-hidden animate-in-view',
                  staggerClasses[idx],
                  inView && 'is-visible'
                )}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={cn(
                    'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl',
                    pillar.gradient
                  )}
                  aria-hidden="true"
                />

                {/* Icon badge */}
                <span
                  className={cn(
                    'relative z-10 flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg',
                    pillar.iconBg
                  )}
                >
                  <Icon className={cn('h-5 w-5', pillar.iconColor)} aria-hidden="true" />
                </span>

                <div className="relative z-10">
                  <h3 className="font-heading text-base font-bold text-foreground">
                    {pillar.title}
                  </h3>
                  <span className="mt-1 text-xs font-semibold text-gradient-brand uppercase tracking-wide">
                    {pillar.subtitle}
                  </span>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
