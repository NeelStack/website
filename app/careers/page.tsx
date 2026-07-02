import type { Metadata } from 'next'
import {
  Code,
  Flame,
  Globe,
  Inbox,
  ShieldAlert,
  Zap,
} from 'lucide-react'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Build with NeelStack. Although we are not actively hiring today, we are always looking to connect with high-agency engineers and designers.',
}

const VALUES_BUILDERS = [
  {
    icon: Code,
    title: 'High-Agency Engineers',
    description: 'We value engineers who take complete ownership of features, from layout code to database triggers, without hand-holding.',
  },
  {
    icon: Zap,
    title: 'Simplicity & Speed',
    description: 'We write simple code to solve complex problems. We ship quickly and avoid over-engineering solutions.',
  },
  {
    icon: Flame,
    title: 'Build in Public',
    description: 'We document our journey, write technical insights, and share our learnings with the developer community.',
  },
  {
    icon: ShieldAlert,
    title: 'Security from Day One',
    description: 'Security is not a checklist item. We build secure boundaries and data protection policies directly into our architectures.',
  },
]

export default function CareersPage() {
  return (
    <MarketingLayout>
      <PageHero
        badge="Join our talent registry"
        title="We are always looking for builders"
        description="NeelStack is a distributed technology lab based in India. We design and build proprietary SaaS systems alongside custom architectures for clients worldwide."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Careers' }]}
      />

      {/* Main Invitation Section */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 mb-6">
              <Inbox className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              Connect With Us
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              We&apos;re always interested in connecting with talented engineers, designers and builders.
              Although we don&apos;t have active openings today, we&apos;d love to hear from passionate people interested in building modern software.
            </p>
            
            <div className="flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="mailto:contact@neelstack.com?subject=Talent Registry: High-Agency Builder Application">
                  Join Our Talent Pool
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* What we value in engineers */}
      <Section className="bg-card border-t border-border">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-5">
              Our Culture
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-foreground text-balance">
              What We Value In Builders
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES_BUILDERS.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Open invite call */}
      <Section>
        <Container>
          <div className="rounded-3xl border border-border bg-gradient-to-r from-primary/5 via-transparent to-accent/5 p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              How to reach out
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto mb-6">
              When you write to us, skip the generic cover letter. Tell us what you&apos;re building, 
              share your GitHub profile, and describe the most complex technical challenge you have solved.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <span className="text-sm font-mono text-primary">
                contact@neelstack.com
              </span>
            </div>
          </div>
        </Container>
      </Section>
    </MarketingLayout>
  )
}
