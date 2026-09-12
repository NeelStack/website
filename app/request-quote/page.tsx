import type { Metadata } from 'next'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { QuoteForm } from '@/components/sections/quote-form'

export const metadata: Metadata = {
  title: 'Request a Quote — Project Estimate & Proposal | NeelStack India',
  description:
    'Get a free, no-obligation custom software estimate from NeelStack India. Base currency USD ($) with automatic local currency conversion (₹ INR, € EUR, £ GBP, AED). We respond within 1 business day.',
  alternates: {
    canonical: '/request-quote',
  },
}

export default function RequestQuotePage() {
  return (
    <MarketingLayout>
      <PageHero
        badge="Custom Software & AI Estimates"
        title="Tell Us About Your Project"
        description="Submit your project brief below. Our technical architects will evaluate your scope, architecture, and timeline, and deliver a detailed proposal within 1 business day."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Request a Quote' }]}
      />

      <section className="py-16" aria-labelledby="quote-form-heading">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 id="quote-form-heading" className="sr-only">
              Project inquiry form
            </h2>
            <QuoteForm />
          </div>
        </Container>
      </section>
    </MarketingLayout>
  )
}
