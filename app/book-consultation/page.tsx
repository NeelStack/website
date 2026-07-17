import type { Metadata } from 'next'
import { Calendar, CheckCircle, Clock, Video } from 'lucide-react'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { ConsultationForm } from '@/components/sections/consultation-form'

export const metadata: Metadata = {
  title: 'Book a Consultation',
  description:
    'Schedule a free 30-minute consultation with the NeelStack team. Discuss your project, get expert advice, and explore how we can help.',
}

const CONSULTATION_BENEFITS = [
  'Understand your project requirements in depth',
  'Get expert advice on technology choices',
  'Receive a rough timeline and cost estimate',
  'Meet the engineers who will build your product',
  'No commitment, no sales pressure',
]

export default function BookConsultationPage() {
  return (
    <MarketingLayout>
      <PageHero
        badge="Free consultation"
        title="Book a 30-Minute Call"
        description="Meet with one of our senior engineers or architects to discuss your project. We will give you honest, expert advice — no sales pitch."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Book a Consultation' }]}
      />

      <section className="py-16" aria-labelledby="consultation-section-heading">
        <Container>
          <h2 id="consultation-section-heading" className="sr-only">Book consultation</h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">

            {/* Left: Info */}
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                What to expect
              </h3>

              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                  <Clock className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-foreground">30 minutes</p>
                    <p className="text-xs text-muted-foreground">Focused, agenda-driven session</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                  <Video className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Google Meet or Zoom</p>
                    <p className="text-xs text-muted-foreground">Video or audio — your choice</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                  <Calendar className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Available Mon – Sat</p>
                    <p className="text-xs text-muted-foreground">9 AM – 7 PM IST</p>
                  </div>
                </div>
              </div>

              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                We will cover:
              </h3>
              <ul className="space-y-2.5" aria-label="Consultation agenda">
                {CONSULTATION_BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <ConsultationForm />
          </div>
        </Container>
      </section>
    </MarketingLayout>
  )
}
