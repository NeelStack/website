import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Mail, MessageCircle, Phone } from 'lucide-react'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { SITE_CONFIG } from '@/constants/site'

export const metadata: Metadata = {
  title: 'Support Center',
  description:
    'Get help from the NeelStack Technologies support team. Find answers, access documentation, or contact us directly.',
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

      <section className="py-16" aria-labelledby="support-options-heading">
        <Container>
          <h2 id="support-options-heading" className="sr-only">Support options</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SUPPORT_OPTIONS.map((option) => {
              const Icon = option.icon
              return (
                <div
                  key={option.title}
                  className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
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
                  <Link
                    href={option.action.href}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    {option.action.label}
                  </Link>
                </div>
              )
            })}
          </div>

          {/* SLA info */}
          <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-center">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Enterprise SLA
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Enterprise clients receive dedicated account managers, 24/7 priority support, guaranteed
              response times of under 1 hour, and a dedicated Slack channel. Contact sales to learn
              more about enterprise support plans.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              Contact Sales
            </Link>
          </div>
        </Container>
      </section>
    </MarketingLayout>
  )
}
