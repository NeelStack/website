import type { Metadata } from 'next'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { QuoteForm } from '@/components/sections/quote-form'

export const metadata: Metadata = {
  title: 'Request a Quote',
  description:
    'Get a free, no-obligation project estimate from NeelStack. Fill out our brief and we will respond within 3–5 business days.',
}

const PROJECT_TYPES = [
  'Custom Software Development',
  'AI / Machine Learning Integration',
  'ERP System',
  'SaaS Platform',
  'Mobile Application',
  'Web Application',
  'Cloud Infrastructure',
  'API Development',
  'UI/UX Design',
  'Software Modernization',
  'Consulting / Strategy',
  'Other',
]

const BUDGET_RANGES = [
  'Under ₹5 Lakhs',
  '₹5 – ₹15 Lakhs',
  '₹15 – ₹50 Lakhs',
  '₹50 Lakhs – ₹1 Crore',
  'Above ₹1 Crore',
  'Not sure yet',
]

const TIMELINES = [
  'ASAP (1–4 weeks)',
  '1–3 months',
  '3–6 months',
  '6–12 months',
  'Ongoing / Long-term',
  'Flexible',
]

export default function RequestQuotePage() {
  return (
    <MarketingLayout>
      <PageHero
        badge="Get a quote"
        title="Tell Us About Your Project"
        description="Fill out the brief below and our team will review your requirements and send a detailed proposal within 3–5 business days. No commitment required."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Request a Quote' }]}
      />

      <section className="py-16" aria-labelledby="quote-form-heading">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 id="quote-form-heading" className="sr-only">Project inquiry form</h2>
            <QuoteForm />
          </div>
        </Container>
      </section>
    </MarketingLayout>
  )
}
