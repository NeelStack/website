import Link from 'next/link'
import { ArrowRight, Building2, GraduationCap, Heart, Layers, ShoppingBag, Users } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'

const TRUST_SIGNALS = [
  {
    industry: 'Healthcare',
    description: 'Hospital management systems, EHR platforms, and telemedicine solutions for healthcare organizations across India.',
    color: 'text-primary',
    bg: 'bg-primary/10 border-primary/20',
    icon: Heart,
  },
  {
    industry: 'Government',
    description: 'E-governance platforms and government recruitment systems used by public sector organizations.',
    color: 'text-accent',
    bg: 'bg-accent/10 border-accent/20',
    icon: Building2,
  },
  {
    industry: 'Education',
    description: 'EdTech platforms and ERP systems for educational institutions, coaching centers, and government exam aspirants.',
    color: 'text-primary',
    bg: 'bg-primary/10 border-primary/20',
    icon: GraduationCap,
  },
  {
    industry: 'Startups & SaaS',
    description: 'MVPs, SaaS platforms, and scalable architectures for startups from initial validation to growth stage.',
    color: 'text-accent',
    bg: 'bg-accent/10 border-accent/20',
    icon: Layers,
  },
  {
    industry: 'Retail & E-Commerce',
    description: 'Omnichannel platforms, POS systems, and inventory management solutions for modern retail businesses.',
    color: 'text-primary',
    bg: 'bg-primary/10 border-primary/20',
    icon: ShoppingBag,
  },
  {
    industry: 'Enterprise',
    description: 'Custom ERP, CRM, and workflow automation systems for mid-size and large enterprises.',
    color: 'text-accent',
    bg: 'bg-accent/10 border-accent/20',
    icon: Users,
  },
]

export function TestimonialsSection() {
  return (
    <Section id="testimonials" className="bg-card">
      <Container>
        <SectionHeader
          badge="Who we serve"
          title="Trusted Across Industries"
          description="From growing startups to established enterprises and government organizations — NeelStack delivers software that drives real outcomes across sectors."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_SIGNALS.map((signal) => {
            const Icon = signal.icon
            return (
              <div
                key={signal.industry}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 card-hover hover:border-primary/30"
              >
                {/* Icon badge */}
                <span className={`flex h-9 w-9 items-center justify-center rounded-lg border ${signal.bg} transition-shadow duration-300 group-hover:shadow-[0_0_14px_oklch(0.62_0.22_258/18%)]`}>
                  <Icon className={`h-4 w-4 ${signal.color}`} aria-hidden="true" />
                </span>
                <div>
                  <span className={`text-xs font-bold uppercase tracking-widest ${signal.color}`}>
                    {signal.industry}
                  </span>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {signal.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-200"
          >
            View our portfolio
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  )
}
