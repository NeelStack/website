import type { Metadata } from 'next'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { SITE_CONFIG } from '@/constants/site'

export const metadata: Metadata = {
  title: 'Refund and Cancellation Policy',
  description:
    'Refund and cancellation policy for NeelStack — terms governing service cancellations, consultations, and product refunds.',
}

const LAST_UPDATED = 'July 4, 2026'

export default function RefundPolicyPage() {
  return (
    <MarketingLayout>
      <PageHero
        badge="Legal"
        title="Refund & Cancellation"
        description={`Last updated: ${LAST_UPDATED}`}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Refund Policy' }]}
      />

      <section className="py-16" aria-labelledby="refund-content">
        <Container>
          <div className="max-w-3xl mx-auto space-y-10 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">1. Scope of Policy</h2>
              <p>
                This Refund and Cancellation Policy governs the services, customized software development projects, technical consultations, and software-as-a-service (SaaS) subscriptions provided by NeelStack Solutions Private Limited (&quot;NeelStack&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">2. Customized Software & Professional Services</h2>
              <p>
                For customized software development, AI solutions, web applications, and enterprise systems:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>
                  <strong className="text-foreground">Cancellations:</strong> Clients may request cancellation of active projects subject to the terms of their specific Statement of Work (SOW) or Professional Services Agreement. Requests must be submitted in writing to{' '}
                  <a href={`mailto:${SITE_CONFIG.email.sales}`} className="text-primary hover:underline">{SITE_CONFIG.email.sales}</a>.
                </li>
                <li>
                  <strong className="text-foreground">Refunds:</strong> Since resources are allocated dynamically for custom projects, milestones already completed and paid for are non-refundable. Any advance deposits for unstarted milestones may be partially or fully refundable, subject to a review of accrued administrative costs.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">3. Technical Consultations & Discovery Sessions</h2>
              <p>
                For booked discovery calls, technical evaluations, or CTO advisory sessions:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>
                  <strong className="text-foreground">Rescheduling:</strong> You may reschedule an session up to 24 hours prior to the scheduled start time without any fee.
                </li>
                <li>
                  <strong className="text-foreground">Cancellations & Refunds:</strong> Cancellation of paid consultation calls must be made at least 24 hours in advance to receive a full refund. Cancellations made less than 24 hours in advance, or failure to attend (no-show), are ineligible for refund.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">4. Software-as-a-Service (SaaS) Products</h2>
              <p>
                For subscriptions to our proprietary SaaS builds (e.g., ToolVines):
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>
                  <strong className="text-foreground">Monthly Subscriptions:</strong> You can cancel your subscription at any time. Your access will remain active through the end of your current billing period. We do not offer prorated refunds for mid-cycle cancellations.
                </li>
                <li>
                  <strong className="text-foreground">Annual Subscriptions:</strong> Annual plans are committed for 12 months. If you cancel, your subscription will not renew, and access continues through the term. Refunds for annual plans are evaluated on a case-by-case basis within 14 days of purchase.
                </li>
                <li>
                  <strong className="text-foreground">Free Trials / Credits:</strong> Trial versions are provided free of charge, and no refund rights apply to trial usages.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">5. Processing of Refunds</h2>
              <p>
                Approved refunds will be processed within 7 to 10 business days. Refunds will be credited back to the original payment method used during the transaction. Please note that additional processing delays may occur due to intermediary banking systems or credit card issuers.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">6. Contact Information</h2>
              <p>
                If you have questions, require clarification, or wish to initiate a cancellation or refund request, please reach out to us at:
              </p>
              <address className="mt-3 not-italic space-y-1 text-sm">
                <p className="font-medium text-foreground">{SITE_CONFIG.name}</p>
                <p>{SITE_CONFIG.address.line1}</p>
                <p>{SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}, {SITE_CONFIG.address.country}</p>
                <p className="mt-2">
                  Email:{' '}
                  <a href={`mailto:${SITE_CONFIG.email.general}`} className="text-primary hover:underline">
                    {SITE_CONFIG.email.general}
                  </a>
                </p>
              </address>
            </div>
          </div>
        </Container>
      </section>
    </MarketingLayout>
  )
}
