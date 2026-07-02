import type { Metadata } from 'next'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { PricingCard } from '@/components/ui/pricing-card'
import { Container } from '@/components/ui/container'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { CTASection } from '@/components/ui/cta-section'
import type { PricingPlan, FAQItem } from '@/types'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparent, flexible pricing for every stage of your business. Choose from Starter, Professional, or Enterprise plans — or request a custom quote.',
}

const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for startups and small projects looking to validate an idea quickly.',
    price: 'Custom',
    isPopular: false,
    features: [
      { label: 'Up to 3 months engagement', included: true },
      { label: 'Dedicated project manager', included: true },
      { label: '1 development team', included: true },
      { label: 'Weekly progress calls', included: true },
      { label: 'Basic UI/UX design', included: true },
      { label: 'Code repository access', included: true },
      { label: '30-day post-launch support', included: true },
      { label: 'SLA guarantee', included: false },
      { label: '24/7 support', included: false },
      { label: 'Dedicated account manager', included: false },
    ],
    ctaLabel: 'Get a Quote',
    ctaHref: '/request-quote',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For growing businesses that need reliable software built for scale.',
    price: 'Custom',
    isPopular: true,
    features: [
      { label: '3–9 month engagements', included: true },
      { label: 'Dedicated project manager', included: true },
      { label: 'Full cross-functional team', included: true },
      { label: 'Bi-weekly demos & reviews', included: true },
      { label: 'Full UI/UX design system', included: true },
      { label: 'Code repository access', included: true },
      { label: '90-day post-launch support', included: true },
      { label: 'SLA guarantee', included: true },
      { label: '24/7 support', included: false },
      { label: 'Dedicated account manager', included: true },
    ],
    ctaLabel: 'Get a Quote',
    ctaHref: '/request-quote',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For enterprises and organizations requiring a long-term, strategic technology partner.',
    isPopular: false,
    features: [
      { label: 'Ongoing partnership', included: true },
      { label: 'Dedicated account manager', included: true },
      { label: 'Multiple teams & workstreams', included: true },
      { label: 'Weekly executive reporting', included: true },
      { label: 'End-to-end design & brand system', included: true },
      { label: 'Source code ownership', included: true },
      { label: '12-month post-launch support', included: true },
      { label: 'SLA guarantee', included: true },
      { label: '24/7 priority support', included: true },
      { label: 'On-site visits available', included: true },
    ],
    ctaLabel: 'Contact Sales',
    ctaHref: '/contact',
  },
]

const PRICING_FAQ: FAQItem[] = [
  {
    question: 'Why is pricing listed as custom?',
    answer:
      'Software projects vary significantly in complexity, team size, and duration. We provide custom estimates based on your specific requirements after a free discovery call.',
  },
  {
    question: 'How do I get a quote?',
    answer:
      'Submit a request via our "Get a Quote" form or contact us directly at contact@neelstack.com. We will schedule a discovery call and provide a detailed proposal within 3–5 business days.',
  },
  {
    question: 'Do you offer fixed-price contracts?',
    answer:
      'Yes. For well-defined projects, we offer fixed-price contracts. For evolving requirements, we recommend a time-and-material engagement with monthly billing.',
  },
  {
    question: 'What payment terms do you offer?',
    answer:
      'Typically 40% upfront, 30% at mid-project milestone, and 30% upon delivery. Enterprise clients may negotiate custom payment schedules.',
  },
]

export default function PricingPage() {
  return (
    <MarketingLayout>
      <PageHero
        badge="Pricing"
        title="Transparent Pricing for Every Scale"
        description="No hidden fees. No surprises. We work with your budget to deliver exceptional software — whether you're a startup or a Fortune 500 enterprise."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Pricing' }]}
      />

      <section className="py-16" aria-labelledby="pricing-plans-heading">
        <Container>
          <h2 id="pricing-plans-heading" className="sr-only">Pricing plans</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PRICING_PLANS.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>

          {/* Pricing FAQ */}
          <div className="mt-20">
            <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-10">
              Pricing FAQ
            </h2>
            <div className="max-w-2xl mx-auto">
              <FAQAccordion items={PRICING_FAQ} />
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Not sure which plan fits you?"
        description="Book a free 30-minute consultation and we will help you figure out the right engagement model for your project."
        primaryLabel="Book Free Consultation"
        primaryHref="/book-consultation"
        secondaryLabel="Contact Sales"
        secondaryHref="/contact"
      />
    </MarketingLayout>
  )
}
