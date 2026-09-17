import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Mail, MessageCircle, Phone } from 'lucide-react'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/constants/site'

export const metadata: Metadata = {
  title: 'Support Center — Technical Assistance | NeelStack India',
  description:
    'Get prompt technical help, documentation, and enterprise SLAs from the NeelStack support engineering team in India.',
  alternates: {
    canonical: '/support',
  },
}

const SUPPORT_OPTIONS = [
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us a detailed message and we will respond within 4 business hours.',
    action: { label: 'Email Support', href: `mailto:${SITE_CONFIG.email.support}` },
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'For quick questions, reach us via email and mention \'Live Chat\' in the subject. We reply fast.',
    action: { label: 'Chat via Email', href: `mailto:${SITE_CONFIG.email.support}?subject=Live Chat Request` },
  },
  {
    icon: Phone,
    title: 'Enterprise Support',
    description: 'Enterprise clients receive a dedicated support channel with guaranteed response times.',
    action: { label: 'Contact Sales', href: '/contact' },
    badge: 'Enterprise',
  },
  {
    icon: BookOpen,
    title: 'Documentation',
    description: 'Browse our product documentation, integration guides, and API references.',
    action: { label: 'Email for Docs', href: `mailto:${SITE_CONFIG.email.support}?subject=Documentation Request` },
    badge: 'Coming Soon',
  },
]

export default function SupportPage() {
  return (
    <MarketingLayout>
      <PageHero
        badge="Support center"
        title="How Can We Help?"
        description="Our support team is here to help you get the most out of NeelStack products and services."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Support' }]}
      />

      <section className="py-8 sm:py-10 md:py-12" aria-labelledby="support-options-heading">
        <Container>
          <h2 id="support-options-heading" className="sr-only">Support options</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SUPPORT_OPTIONS.map((option) => {
              const Icon = option.icon
              return (
                <div
                  key={option.title}
                  className="flex flex-col gap-4 rounded-2xl border-2 border-border bg-card p-6 tactile-card-3d hover:border-primary/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    {option.badge && (
                      <span className="rounded-full bg-muted border border-border px-2 py-0.5 text-xs font-medium text-muted-foreground">
                        {option.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {option.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {option.description}
                  </p>
                  <Button asChild variant="3d-secondary" size="sm" className="w-full rounded-xl font-bold mt-2">
                    <Link href={option.action.href}>
                      {option.action.label}
                    </Link>
                  </Button>
                </div>
              )
            })}
          </div>

          {/* SLA info */}
          <div className="mt-8 sm:mt-10 rounded-2xl border-2 border-border bg-card p-6 sm:p-8 text-center tactile-card-3d">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Enterprise SLA
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Enterprise clients receive dedicated account managers, 24/7 priority support, guaranteed
              response times of under 1 hour, and a dedicated Slack channel. Contact sales to learn
              more about enterprise support plans.
            </p>
            <div className="mt-6 flex justify-center">
              <Button asChild variant="3d-yellow" size="lg" className="rounded-xl font-bold">
                <Link href="/contact">
                  Contact Enterprise Sales
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </MarketingLayout>
  )
}
