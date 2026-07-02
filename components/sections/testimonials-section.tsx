import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'

const TRUST_SIGNALS = [
  {
    industry: 'Healthcare',
    description: 'Hospital management systems, EHR platforms, and telemedicine solutions for healthcare organizations across India.',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
  },
  {
    industry: 'Government',
    description: 'E-governance platforms and government recruitment systems used by public sector organizations.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
  {
    industry: 'Education',
    description: 'EdTech platforms and ERP systems for educational institutions, coaching centers, and government exam aspirants.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    industry: 'Startups & SaaS',
    description: 'MVPs, SaaS platforms, and scalable architectures for startups from initial validation to growth stage.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
  },
  {
    industry: 'Retail & E-Commerce',
    description: 'Omnichannel platforms, POS systems, and inventory management solutions for modern retail businesses.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    industry: 'Enterprise',
    description: 'Custom ERP, CRM, and workflow automation systems for mid-size and large enterprises.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
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
          {TRUST_SIGNALS.map((signal) => (
            <div
              key={signal.industry}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-6 hover:border-primary/30 transition-colors duration-200"
            >
              <span className={`text-xs font-bold uppercase tracking-widest ${signal.color}`}>
                {signal.industry}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {signal.description}
              </p>
            </div>
          ))}
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
