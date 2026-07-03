import { Brain, Code2, Layers, Rocket } from 'lucide-react'
import { Container } from '@/components/ui/container'

const pillars = [
  {
    title: 'Proprietary SaaS',
    subtitle: 'We build and run our own platforms',
    description: 'Our first live product, ToolVines, serves active workflows. We prove our system designs on our own products first.',
    icon: Layers,
  },
  {
    title: 'High-Fidelity Engineering',
    subtitle: 'Custom builds for startups & SMBs',
    description: 'We apply the same engineering rigour and testing guidelines to client systems as we do to our proprietary builds.',
    icon: Code2,
  },
  {
    title: 'AI-First Delivery',
    subtitle: 'Agents, custom LLMs & workflows',
    description: 'We integrate retrieval-augmented generation (RAG) and workflow automations that create quantifiable business value.',
    icon: Brain,
  },
  {
    title: 'Modern Stack',
    subtitle: 'Production-grade architectures',
    description: 'We standardize on Next.js, React, FastAPI, PostgreSQL, and Docker to ensure clean deployments and cost efficiency.',
    icon: Rocket,
  },
] as const

export function StatsSection() {
  return (
    <section
      className="border-y border-border bg-card py-14 md:py-20"
      aria-label="Core Pillars of Execution"
    >
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-10">
          Why teams choose NeelStack
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 card-hover hover:border-primary/30"
              >
                {/* Icon badge */}
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 group-hover:shadow-[0_0_16px_oklch(0.62_0.22_258/20%)] transition-shadow duration-300">
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </span>

                <div>
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
