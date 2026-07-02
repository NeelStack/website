import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import type { FAQItem } from '@/types'

const HOME_FAQ: FAQItem[] = [
  {
    question: 'What types of projects does NeelStack take on?',
    answer:
      'We work on a wide range of projects — from custom software development and AI integrations to full ERP systems and SaaS platforms. Whether you are a startup building your first product or an enterprise modernizing legacy systems, we can help.',
  },
  {
    question: 'How long does it take to build a typical project?',
    answer:
      'It depends on the scope. A simple web application or MVP can take 6–10 weeks. A complex ERP system or SaaS platform typically takes 4–9 months. We provide a detailed timeline after the discovery phase.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes. We work with clients across India, the US, UK, UAE, and other countries. We have experience navigating different time zones and communication preferences.',
  },
  {
    question: 'What is your pricing model?',
    answer:
      'We offer fixed-price contracts for well-defined projects and time-and-material engagements for ongoing development or evolving requirements. Contact us for a free estimate tailored to your project.',
  },
  {
    question: 'Do you provide support and maintenance after launch?',
    answer:
      'Absolutely. We offer post-launch support plans that include bug fixes, security updates, performance monitoring, and feature enhancements. Our enterprise clients get 24/7 priority support.',
  },
  {
    question: 'Can I start with a small engagement and scale up?',
    answer:
      'Yes. Many of our best client relationships started with a small discovery or prototype engagement. We believe in earning trust incrementally before taking on large-scale commitments.',
  },
]

export function FAQSection() {
  return (
    <Section id="faq" className="bg-card">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Header */}
          <div>
            <SectionHeader
              badge="FAQ"
              title="Frequently Asked Questions"
              description="Everything you need to know about working with NeelStack. Can't find what you're looking for?"
              align="left"
            />
            <a
              href="mailto:contact@neelstack.com"
              className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              Reach us at contact@neelstack.com
            </a>
          </div>

          {/* Right: Accordion */}
          <div>
            <FAQAccordion items={HOME_FAQ} />
          </div>
        </div>
      </Container>
    </Section>
  )
}
