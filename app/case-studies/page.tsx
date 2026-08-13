import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, ShieldCheck, Mail } from 'lucide-react'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { CTASection } from '@/components/ui/cta-section'

export const metadata: Metadata = {
  title: 'Case Studies (Coming Soon) — NeelStack',
  description:
    'Deep dives into how NeelStack builds custom software, AI solutions, and enterprise platforms. Case studies currently in preparation.',
  alternates: {
    canonical: '/case-studies',
  },
}

const UPCOMING_CASE_STUDIES = [
  {
    id: 'govt-conversational-ai',
    title: 'Public Scheme Discovery & Conversational AI Integration',
    category: 'Gov-Tech & AI',
    status: 'In Documentation',
    summary:
      'Detailed breakdown of intent classification, vector document search, and low-latency multilingual voice/text chat architectures for public sector portals.',
    tags: ['Conversational AI', 'Vector RAG', 'Gov-Tech'],
  },
  {
    id: 'healthcare-workflow-erp',
    title: 'Hospital Workflow Digitization & Unified Patient Records',
    category: 'Healthcare & Systems',
    status: 'In Review',
    summary:
      'Architectural review of microservices database synchronization, HIPAA-compliant audit logs, and real-time patient queue management.',
    tags: ['Healthcare IT', 'Database Architecture', 'Microservices'],
  },
  {
    id: 'b2b-saas-mvp-engineering',
    title: 'Rapid Production-Grade B2B SaaS MVP Architecture',
    category: 'SaaS & Enterprise',
    status: 'In Documentation',
    summary:
      'Engineering blueprints for multi-tenant isolation, automated CI/CD deployment pipelines, and Stripe/Razorpay billing integration.',
    tags: ['SaaS Architecture', 'Multi-Tenancy', 'Next.js 16'],
  },
]

export default function CaseStudiesPage() {
  return (
    <MarketingLayout>
      <PageHero
        badge="Case Studies — Coming Soon"
        title="Real Engineering. Verified Results."
        description="We are currently compiling comprehensive technical case studies from our client engagements. Full architecture breakdowns and performance metrics will be published here soon."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Case Studies' }]}
      />

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-primary/25 bg-primary/[0.03] p-8 md:p-10 text-center space-y-5 mb-16 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/10 blur-3xl rounded-full" aria-hidden="true" />
            <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              <Clock className="h-3.5 w-3.5" />
              <span>Full Write-ups Launching Soon</span>
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Strict Confidentiality & Verification
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
              At NeelStack, we respect client NDA agreements. Every published case study undergoes thorough technical verification and client review prior to release.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  <Mail className="h-4 w-4" />
                  Request Client References & Demos
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">Explore Live Product Portfolio</Link>
              </Button>
            </div>
            </div>
          </div>

          <SectionHeader
            badge="Upcoming Releases"
            title="Case Studies In Preparation"
            description="Preview the technical write-ups currently being authored by our engineering team."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {UPCOMING_CASE_STUDIES.map((cs) => (
              <div
                key={cs.id}
                className="flex flex-col justify-between gap-5 rounded-2xl border border-border bg-card p-6 md:p-8 card-hover"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {cs.category}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-medium text-amber-600 dark:text-amber-400">
                      <Clock className="h-3 w-3" />
                      {cs.status}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {cs.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {cs.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-[11px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/40">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                  >
                    Inquire about this architecture
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Planning a custom software or AI build?"
        description="Speak directly with our senior engineering architects about your requirements."
        primaryLabel="Schedule Engineering Consultation"
        primaryHref="/contact"
        secondaryLabel="View Live Portfolio"
        secondaryHref="/portfolio"
      />
    </MarketingLayout>
  )
}
