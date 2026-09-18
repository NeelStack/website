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
        badge="Global Software & AI Proposals • USD ($), EUR (€), GBP (£), AED, INR (₹)"
        title="Tell Us About Your Project"
        description="Submit your project brief below. Our senior architects evaluate scope, architecture, and timeline for enterprise clients across the US, UK, UAE, Europe, and India — delivering a detailed proposal within 1 business day."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Request a Quote' }]}
      />

      <section id="form" className="pt-2 pb-8 md:pt-4 md:pb-12 scroll-mt-24" aria-labelledby="quote-form-heading">
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
