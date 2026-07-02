import type React from 'react'
import type { Metadata } from 'next'
import { Clock, Mail, MapPin, Globe } from 'lucide-react'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { SITE_CONFIG } from '@/constants/site'
import { ContactForm } from '@/components/sections/contact-form'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with NeelStack. Reach us for custom software builds, AI integration inquiries, or general partnership questions.',
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
    title: 'Email',
    lines: [
      { label: 'General & Inquiry', value: SITE_CONFIG.email.general, href: `mailto:${SITE_CONFIG.email.general}` },
    ],
  },
  {
    icon: Globe,
    title: 'Distributed Operations',
    lines: [
      { label: 'Core Base', value: 'Gorakhpur, Uttar Pradesh, India' },
      { label: 'Delivery Model', value: 'Remote-first, serving clients worldwide' },
    ],
  },
  {
    icon: Clock,
    title: 'Timezone Synchronization',
    lines: [
      { label: 'India', value: 'Active IST (Indian Standard Time)' },
      { label: 'Global Coverage', value: 'Developer handoffs align to support EST & CET' },
    ],
  },
]

const INQUIRY_TYPES = [
  'AI Application Development / Agents',
  'Modern Web Applications (Next.js / React)',
  'Custom Software & SaaS Product Dev',
  'Workflow & Business Automation',
  'REST API & Backend Engineering',
  'Technology Consulting & System Audit',
  'Other',
]

export default function ContactPage() {
  return (
    <MarketingLayout>
      <PageHero
        badge="Get in touch"
        title="Let's Build Something Together"
        description="Whether you have a product in mind, want to design a custom application, or have questions about our stack — we are here to help. We respond within one business day."
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
                              {line.href ? (
                                <a
                                  href={line.href}
                                  className="text-sm text-foreground hover:text-primary transition-colors font-mono"
                                >
                                  {line.value}
                                </a>
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
