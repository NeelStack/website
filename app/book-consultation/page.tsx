import type { Metadata } from 'next'
import { Calendar, CheckCircle, Clock, Video, Sparkles, CheckCircle2 } from 'lucide-react'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { ConsultationForm } from '@/components/sections/consultation-form'

export const metadata: Metadata = {
  title: 'Get Your First Consultation Call FREE! — 20-Min Strategy Session',
  description:
    'Schedule a 100% free 20-minute strategy call with NeelStack technical leads. Understand requirements, discuss project goals, and explore the ideal architecture solution.',
  alternates: {
    canonical: '/book-consultation',
  },
}

const CONSULTATION_AGENDA = [
  'Understand client requirements & technical challenges in depth',
  'Discuss project expectations, timeline goals, and budget boundaries',
  'Capture lead details and recommend the most suitable architecture solution',
  'Live technical Q&A with senior software engineers',
  'Zero sales pressure, zero commitment required',
]

export default function BookConsultationPage() {
  return (
    <MarketingLayout>
      <PageHero
        badge="100% Free Strategy Session"
        title="Get Your First Consultation Call FREE!"
        description="Meet with one of our senior software architects for a 20-minute strategy call. We will analyze your requirements, evaluate expectations, and outline the ideal solution."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Free Consultation' }]}
      />

      <section className="py-16" aria-labelledby="consultation-section-heading">
        <Container>
          <h2 id="consultation-section-heading" className="sr-only">Book free consultation</h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            {/* Left: Info */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Complimentary 20-Min Strategy Call</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground">
                What to Expect on Your Free Call
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Whether you are validating an early SaaS idea, upgrading legacy infrastructure, or looking for an execution partner — our engineering leads provide actionable clarity.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                  <Clock className="h-5 w-5 text-emerald-400 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-bold text-foreground">20 Minutes</p>
                    <p className="text-xs text-muted-foreground">High-density, structured strategy agenda</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                  <Video className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-bold text-foreground">Google Meet / Zoom Video Call</p>
                    <p className="text-xs text-muted-foreground">Direct link sent instantly to your email</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                  <Calendar className="h-5 w-5 text-purple-400 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-bold text-foreground">Flexible Slots (Mon – Sat)</p>
                    <p className="text-xs text-muted-foreground">9 AM – 8 PM IST / Global Timezone Compatible</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="font-heading text-base font-bold text-foreground mb-3">
                  Call Agenda Breakdown:
                </h4>
                <ul className="space-y-2.5" aria-label="Consultation agenda">
                  {CONSULTATION_AGENDA.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <ConsultationForm />
          </div>
        </Container>
      </section>
    </MarketingLayout>
  )
}
