import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { CTASection } from '@/components/ui/cta-section'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Deep dives into how NeelStack has helped clients solve complex challenges with custom software, AI solutions, and ERP systems.',
}

const CASE_STUDIES = [
  {
    id: 'sarkarimitra-govt',
    title: 'Simplifying Public Schemes Discovery via Conversational AI',
    client: 'Government Agency Partner (Anonymized)',
    industry: 'Government',
    challenge:
      'Citizens struggling to identify eligibility criteria and document checklists for public benefits, leading to dense helpline queues.',
    result: 'Over 10,000 queries answered dynamically with zero search latency',
    tags: ['AI Integration', 'Public Sector', 'Search Engine'],
    href: '/contact',
  },
  {
    id: 'hospital-management-case',
    title: 'Unified Patient Records & Operational Workflow System',
    client: 'Healthcare Organization (India)',
    industry: 'Healthcare',
    challenge:
      'Fragmented, siloed patient records and billing systems causing long check-in queues and data access gaps for medical staff.',
    result: '50% reduction in queue processing time and error-free patient handoffs',
    tags: ['Healthcare IT', 'Database Design', 'Workflows'],
    href: '/contact',
  },
  {
    id: 'saas-platform',
    title: 'Rapid MVP Development for a B2B SaaS Platform',
    client: 'Technology Startup',
    industry: 'Technology',
    challenge:
      'A validated product idea with no in-house engineering team — needed a market-ready MVP built fast without compromising quality.',
    result: 'Production-ready MVP launched within agreed timeline',
    tags: ['SaaS', 'Startup', 'MVP'],
    href: '/contact',
  },
]

export default function CaseStudiesPage() {
  return (
    <MarketingLayout>
      <PageHero
        badge="Case studies"
        title="Real Problems. Real Results."
        description="Detailed accounts of how we partnered with clients to solve complex technical challenges and deliver measurable business outcomes."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Case Studies' }]}
      />

      <section className="py-16" aria-labelledby="case-studies-heading">
        <Container>
          <h2 id="case-studies-heading" className="sr-only">Case studies</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {CASE_STUDIES.map((cs) => (
              <Link
                key={cs.id}
                href={cs.href}
                className="group flex flex-col gap-5 rounded-2xl border border-border bg-card p-8 hover:border-primary/40 transition-all duration-200"
                aria-label={cs.title}
              >
                {/* Industry tag */}
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {cs.industry}
                </span>

                {/* Title */}
                <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors text-balance">
                  {cs.title}
                </h3>

                {/* Challenge */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {cs.challenge}
                </p>

                {/* Result */}
                <div className="rounded-xl bg-primary/10 border border-primary/20 px-4 py-3">
                  <p className="text-sm font-semibold text-primary">{cs.result}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA arrow */}
                <div className="flex items-center gap-1.5 text-sm font-medium text-primary">
                  Discuss similar builds
                  <ArrowRight
                    className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to write your own success story?"
        description="Let's talk about your project and how NeelStack can help you achieve measurable results."
        primaryLabel="Get Started"
        primaryHref="/request-quote"
        secondaryLabel="View Portfolio"
        secondaryHref="/portfolio"
      />
    </MarketingLayout>
  )
}
