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
    icon: Globe,
    title: 'Global Delivery & Client Reach',
    lines: [
      { label: 'Client Geographic Reach', value: 'Serving clients and businesses globally' },
      { label: 'Workforce Architecture', value: 'Remote-first engineering with multi-timezone overlap' },
      { label: 'Commercial Terms', value: 'Invoicing in USD ($), EUR (€), GBP (£), AED & INR (₹)' },
    ],
  },
  {
    icon: Clock,
    title: 'Timezone Alignment & SLAs',
    lines: [
      { label: 'Operating Timezone Coverage', value: 'EST, GMT, GST, and IST business hours' },
      { label: 'Response Standard', value: 'Founder & senior architect response within 1 business day' },
    ],
  },
  {
    icon: Mail,
    title: 'Direct Official Channel',
    lines: [
      { label: 'Unified Communications', value: SITE_CONFIG.email.general },
      { label: 'Confidentiality Standard', value: 'Mutual NDA supported before technical disclosures' },
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Legal Entity & IP Protection',
    lines: [
      { label: 'Incorporated Entity', value: 'NeelStack Solutions Private Limited (CIN: U62011UP2026PTC250857)' },
      { label: 'Intellectual Property', value: 'Full IP assignment under international common law' },
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

      <section id="form" className="pt-2 pb-8 md:pt-4 md:pb-12 scroll-mt-24" aria-labelledby="contact-section-heading">
        <Container>
          <h2 id="contact-section-heading" className="sr-only">Contact information and form</h2>
          
          {/* Centered Primary Contact Form */}
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>

          {/* Institutional Trust & Operating Standards Grid */}
          <div className="max-w-5xl mx-auto mt-8 pt-6 sm:mt-10 sm:pt-8 border-t border-border/60">
            <div className="text-center mb-5 sm:mb-6 space-y-1.5">
              <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-primary">
                Operating Standards
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                Official Channels &amp; Client Reach
              </h3>
              <p className="text-xs text-muted-foreground max-w-lg mx-auto">
                Direct communication, guaranteed 1-business-day response, and international IP assignment standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CONTACT_CARDS.map((card) => {
                const Icon = card.icon
                return (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm p-5 space-y-3 transition-all hover:border-primary/40 hover:bg-card/90 flex flex-col justify-between shadow-sm"
                  >
                    <div className="space-y-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <h4 className="font-heading text-xs font-bold text-foreground leading-tight">
                        {card.title}
                      </h4>
                    </div>
                    <dl className="space-y-2 text-xs">
                      {card.lines.map((line, idx) => (
                        <div key={idx} className="flex flex-col">
                          {line.label && (
                            <dt className="text-[10px] text-muted-foreground font-medium">{line.label}</dt>
                          )}
                          <dd className="mt-0.5">
                            {line.value.includes('@') ? (
                              <SafeEmailLink
                                user={line.value.split('@')[0]}
                                domain={line.value.split('@')[1]}
                                className="text-xs text-foreground font-semibold hover:text-primary transition-colors font-mono"
                              />
                            ) : (
                              <span className="text-xs text-foreground font-medium leading-relaxed break-words">{line.value}</span>
                            )}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </section>
    </MarketingLayout>
  )
}

