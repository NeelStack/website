import {
  CheckCircle,
  Code2,
  FileSearch,
  Lightbulb,
  Rocket,
  Users,
} from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'
import type { ProcessStep } from '@/types'

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Discovery & Requirements',
    description:
      'We start by deeply understanding your business goals, technical constraints, and user needs. Detailed scoping ensures we build exactly what you need.',
    icon: FileSearch,
  },
  {
    step: 2,
    title: 'Strategy & Architecture',
    description:
      'Our architects design a scalable, secure system architecture. We choose the right technology stack, define APIs, and plan for future growth.',
    icon: Lightbulb,
  },
  {
    step: 3,
    title: 'UI/UX Design',
    description:
      'We create wireframes, prototypes, and pixel-perfect designs that are intuitive, accessible, and aligned with your brand identity.',
    icon: Users,
  },
  {
    step: 4,
    title: 'Agile Development',
    description:
      'Our engineers build in sprints, delivering working software incrementally. You get full visibility through regular demos and code reviews.',
    icon: Code2,
  },
  {
    step: 5,
    title: 'QA & Testing',
    description:
      'Every release goes through rigorous automated and manual testing — unit, integration, performance, security, and accessibility testing.',
    icon: CheckCircle,
  },
  {
    step: 6,
    title: 'Deployment & Support',
    description:
      'We deploy to production with zero-downtime strategies, set up monitoring, and provide ongoing support and maintenance to keep your system healthy.',
    icon: Rocket,
  },
]

export function ProcessSection() {
  return (
    <Section id="process" className="bg-card">
      <Container>
        <SectionHeader
          badge="How we work"
          title="Our Development Process"
          description="We follow a proven, structured process that delivers predictable outcomes — on time, on scope, and on budget."
        />

        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={step.step}
                className="relative flex flex-col gap-4 rounded-2xl p-8 border border-border card-hover hover:border-primary/30 hover:bg-muted/20 overflow-hidden"
              >
                {/* Large decorative background step number */}
                <span
                  className="absolute top-4 right-5 font-heading font-black text-7xl text-primary/8 select-none leading-none"
                  aria-hidden="true"
                >
                  {step.step.toString().padStart(2, '0')}
                </span>

                {/* Icon + step number row */}
                <div className="flex items-center gap-3 relative z-10">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 group-hover:shadow-[0_0_16px_oklch(0.62_0.22_258/20%)] transition-shadow duration-300">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground/50 tabular-nums">
                    Step {step.step.toString().padStart(2, '0')}
                  </span>
                </div>

                <h3 className="font-heading text-base font-semibold text-foreground relative z-10">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
