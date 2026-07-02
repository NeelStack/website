import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { INDUSTRIES } from '@/constants/industries'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { CTASection } from '@/components/ui/cta-section'
import { CheckCircle2 } from 'lucide-react'

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const industry = INDUSTRIES.find((i) => i.id === resolvedParams.id)
  if (!industry) return { title: 'Industry Not Found' }
  return {
    title: `${industry.name} Solutions`,
    description: industry.description,
  }
}

export async function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ id: i.id }))
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const resolvedParams = await params
  const industry = INDUSTRIES.find((i) => i.id === resolvedParams.id)
  
  if (!industry) {
    notFound()
  }

  const Icon = industry.icon

  return (
    <MarketingLayout>
      <PageHero
        badge="Industries"
        title={industry.name}
        description={industry.description}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '/industries' },
          { label: industry.name },
        ]}
      />

      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {/* Industry Info */}
              <div className="md:col-span-2 space-y-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 mb-4">
                  <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                </div>
                
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Sector Overview & Solutions
                </h2>
                
                <p className="text-base text-muted-foreground leading-relaxed">
                  We design software systems optimized for the operational workflows, security boundaries, and scalability needs of the {industry.name.toLowerCase()} sector.
                </p>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  By standardizing our software models on modern architectures, we help organizations accelerate workflows and automate repetitive administrative tasks cleanly.
                </p>
              </div>

              {/* Solutions list */}
              <div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-heading text-sm font-bold text-foreground mb-4 uppercase tracking-wider">
                    Core Solutions
                  </h3>
                  <ul className="space-y-3" aria-label="Sector solutions highlights">
                    {industry.solutions.map((solution) => (
                      <li key={solution} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title={`Looking for customized ${industry.name.toLowerCase()} software?`}
        description="Connect with us to design a tailored system configured for your organization."
        primaryLabel="Start a Conversation"
        primaryHref="/contact"
      />
    </MarketingLayout>
  )
}
