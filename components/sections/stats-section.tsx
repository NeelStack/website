import { Container } from '@/components/ui/container'

const pillars = [
  {
    title: 'Proprietary SaaS',
    subtitle: 'We build and run our own platforms',
    description: 'Our first live product, ToolVines, serves active workflows. We prove our system designs on our own products first.',
  },
  {
    title: 'High-Fidelity Engineering',
    subtitle: 'Custom builds for startups & SMBs',
    description: 'We apply the same engineering rigour and testing guidelines to client systems as we do to our proprietary builds.',
  },
  {
    title: 'AI-First Delivery',
    subtitle: 'Agents, custom LLMs & workflows',
    description: 'We integrate retrieval-augmented generation (RAG) and workflow automations that create quantifiable business value.',
  },
  {
    title: 'Modern Stack',
    subtitle: 'Production-grade architectures',
    description: 'We standardize on Next.js, React, FastAPI, PostgreSQL, and Docker to ensure clean deployments and cost efficiency.',
  },
] as const

export function StatsSection() {
  return (
    <section
      className="border-y border-border bg-card py-14 md:py-20"
      aria-label="Core Pillars of Execution"
    >
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col items-start px-4 py-2 border-l-2 border-primary/20"
            >
              <h3 className="font-heading text-lg font-bold text-foreground">
                {pillar.title}
              </h3>
              <span className="mt-1 text-xs font-semibold text-primary uppercase tracking-wide">
                {pillar.subtitle}
              </span>
              <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed text-left">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
