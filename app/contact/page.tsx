import type React from 'react'
import type { Metadata } from 'next'
import { Clock, Mail, Globe, ShieldCheck } from 'lucide-react'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { SafeEmailLink } from '@/components/ui/copy-email-button'
import { SITE_CONFIG } from '@/constants/site'
import { ContactForm } from '@/components/sections/contact-form'
import { JsonLd } from '@/components/seo/json-ld'
import { getSiteUrl } from '@/lib/site-url'

export const metadata: Metadata = {
  title: 'Contact NeelStack Solutions | Talk to Our Team',
  description:
    'Have a software, AI or product idea? Connect with NeelStack Solutions. Inquire about products, system integrations, or technology exploration.',
  alternates: {
    canonical: '/contact',
  },
}

interface ContactLine {
  label: string
  value: string
  href?: string
}

interface ContactCard {
  icon: React.ElementType
  title: string
  lines: ContactLine[]
}

const CONTACT_CARDS: ContactCard[] = [
  {
    icon: Mail,
    title: 'Official Contact Email',
    lines: [
      { label: 'Public Inquiries & Communication', value: SITE_CONFIG.email.general },
    ],
  },
  {
    icon: Globe,
    title: 'Company & Operations',
    lines: [
      { label: 'Registered Location', value: 'Gorakhpur, Uttar Pradesh, India' },
      { label: 'Workforce Model', value: 'Remote-first product & engineering team' },
    ],
  },
  {
    icon: Clock,
    title: 'Response SLA',
    lines: [
      { label: 'Operating Timezone', value: 'Indian Standard Time (IST)' },
      { label: 'Communication Standard', value: 'Founder & engineering response within 1 business day' },
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Data & Communication Privacy',
    lines: [
      { label: 'Privacy Standard', value: 'All inquiries and project details are held strictly confidential' },
    ],
  },
]

export default function ContactPage() {
  return (
    <MarketingLayout>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: SITE_CONFIG.legalName,
          image: `${getSiteUrl()}/opengraph-image`,
          url: `${getSiteUrl()}/contact`,
          email: 'contact@neelstack.com',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Gorakhpur',
            addressRegion: 'Uttar Pradesh',
            postalCode: '273406',
            addressCountry: 'IN',
          },
        }}
      />
      <PageHero
        badge="Contact NeelStack"
        title="Have a Software, AI or Product Idea? Talk to Our Team."
        description="Whether you are interested in our products, exploring software architectures, or looking to collaborate — we'd love to hear from you."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="py-16" aria-labelledby="contact-section-heading">
        <Container>
          <h2 id="contact-section-heading" className="sr-only">Contact information and form</h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">

            {/* Contact form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Contact info cards */}
            <aside className="lg:col-span-2">
              <div className="space-y-5">
                {CONTACT_CARDS.map((card) => {
                  const Icon = card.icon
                  return (
                    <div
                      key={card.title}
                      className="rounded-2xl border border-border bg-card p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                          <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                        </div>
                        <h3 className="font-heading text-sm font-semibold text-foreground">
                          {card.title}
                        </h3>
                      </div>
                      <dl className="space-y-1.5">
                        {card.lines.map((line, idx) => (
                          <div key={idx} className="flex flex-col">
                            {line.label && (
                              <dt className="text-xs text-muted-foreground">{line.label}</dt>
                            )}
                            <dd>
                              {line.value.includes('@') ? (
                                <SafeEmailLink
                                  user={line.value.split('@')[0]}
                                  domain={line.value.split('@')[1]}
                                  className="text-sm text-foreground hover:text-primary transition-colors font-mono"
                                />
                              ) : (
                                <span className="text-sm text-foreground">{line.value}</span>
                              )}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  )
                })}
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </MarketingLayout>
  )
}

