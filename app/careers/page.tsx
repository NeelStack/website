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
  title: 'Careers — Join Our Software & AI Engineering Team | NeelStack India',
  description:
    'Build with NeelStack India. Although we are not actively hiring today, we are always looking to connect with high-agency engineers and designers who build with ownership and velocity.',
  alternates: {
    canonical: '/careers',
  },
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
            <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 mb-4">
              <Inbox className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
              Connect With Us
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              We&apos;re always interested in connecting with talented engineers, designers and builders.
              Although we don&apos;t have active openings today, we&apos;d love to hear from passionate people interested in building modern software.
            </p>
            
            <div className="flex justify-center gap-4">
              <Button asChild variant="3d-yellow" size="lg" className="rounded-xl font-bold">
                <Link href="mailto:contact@neelstack.com?subject=NeelStack: Talent & Engineering Inquiries">
                  Connect With Us
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* What we value in engineers */}
      <Section className="bg-card border-t border-border">
        <Container>
          <div className="text-center mb-6 sm:mb-8">
            <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-3">
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
                  className="flex flex-col gap-4 rounded-2xl border-2 border-border bg-background p-6 tactile-card-3d hover:border-primary/50"
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
          <div className="rounded-3xl border-2 border-border bg-gradient-to-r from-primary/5 via-transparent to-accent/5 p-8 md:p-12 text-center max-w-4xl mx-auto tactile-card-3d">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              How to reach out
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto mb-6">
              When you write to us, tell us what you&apos;re building, 
              share your GitHub profile, and describe interesting technical challenges you enjoy solving.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="mailto:contact@neelstack.com" className="text-sm font-mono text-primary font-semibold hover:underline">
                contact@neelstack.com
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </MarketingLayout>
  )
}
