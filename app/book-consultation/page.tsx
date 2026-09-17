import type { Metadata } from 'next'
import { Calendar, Clock, Video, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { Container } from '@/components/ui/container'
import { Breadcrumb } from '@/components/navigation/breadcrumb'
import { ConsultationForm } from '@/components/sections/consultation-form'
import { TrustBarSection } from '@/components/sections/trust-bar-section'
import { JsonLd } from '@/components/seo/json-ld'
import { getSiteUrl } from '@/lib/site-url'

export const metadata: Metadata = {
  title: 'Get Your First Consultation Call FREE! — Strategy Session | NeelStack India',
  description:
    'Schedule a 100% free 20-minute strategy call with NeelStack technical leads. Understand requirements, discuss project goals, and explore the ideal architecture solution.',
  alternates: {
    canonical: '/book-consultation',
  },
}

const CONSULTATION_AGENDA = [
  'In-depth analysis of your business requirements & technical challenges',
  'Evaluation of timeline goals, architecture trade-offs, and budget boundaries',
  'Custom recommendations: Next.js 16, Python FastAPI, WebAssembly, or Multi-Agent AI',
  'Direct technical Q&A with senior software engineers & system architects',
  'Zero sales pressure, zero commitment required — 100% actionable insights',
]

export default function BookConsultationPage() {
  return (
    <MarketingLayout>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Free Strategy Consultation Call — NeelStack',
          description:
            'Schedule a complimentary 20-minute architecture strategy session with NeelStack senior technical leads.',
          url: `${getSiteUrl()}/book-consultation`,
          publisher: {
            '@type': 'Organization',
            name: 'NeelStack Solutions Private Limited',
            url: getSiteUrl(),
          },
        }}
      />

      <div className="relative pt-20 pb-8 sm:pt-24 sm:pb-10 md:pt-28 md:pb-12 overflow-hidden bg-transparent">
        {/* Ambient background glows */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(37, 99, 235, 0.12), rgba(139, 92, 246, 0.08), transparent 70%)',
          }}
          aria-hidden="true"
        />

        <Container className="relative z-10 space-y-6 sm:space-y-8">
          {/* Breadcrumb Navigation */}
          <div>
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Free Consultation' }]} />
          </div>

          {/* Unified Split Layout: Value Prop on Left, Booking Form on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Headline, Value Proposition & Session Blueprint (Span 6) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-mono font-bold text-primary backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5 text-primary animate-pulse" />
                  <span>100% FREE STRATEGY SESSION</span>
                </div>

                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1] text-balance">
                  Get Your First Consultation Call{' '}
                  <span className="text-gradient-brand">FREE!</span>
                </h1>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Meet directly with one of our senior software architects for a structured 20-minute strategy call. We analyze your requirements, evaluate architecture options, and outline the ideal execution roadmap.
                </p>
              </div>

              {/* Call Format Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl border border-border/80 bg-card/80 dark:bg-card/50 backdrop-blur-md space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-500 text-xs font-bold">
                    <Clock className="h-4 w-4" />
                    <span>20 Minutes</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-snug">
                    Structured, high-density agenda
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl border border-border/80 bg-card/80 dark:bg-card/50 backdrop-blur-md space-y-1">
                  <div className="flex items-center gap-1.5 text-primary text-xs font-bold">
                    <Video className="h-4 w-4" />
                    <span>Google Meet</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-snug">
                    Direct calendar link sent instantly
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl border border-border/80 bg-card/80 dark:bg-card/50 backdrop-blur-md space-y-1">
                  <div className="flex items-center gap-1.5 text-violet-500 dark:text-violet-400 text-xs font-bold">
                    <Calendar className="h-4 w-4" />
                    <span>Global Slots</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-snug">
                    Mon – Sat (9 AM – 8 PM IST)
                  </p>
                </div>
              </div>

              {/* Call Agenda Breakdown */}
              <div className="p-5 sm:p-6 rounded-3xl border border-border/80 bg-card/60 dark:bg-[#0c1222]/80 backdrop-blur-xl space-y-3">
                <h2 className="font-heading text-sm sm:text-base font-bold text-foreground">
                  What We Cover in Your Strategy Session:
                </h2>
                <ul className="space-y-2.5">
                  {CONSULTATION_AGENDA.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80 leading-relaxed">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Confidentiality & Verified Entity Badge */}
              <div className="flex items-center gap-2.5 p-3.5 rounded-2xl border border-border/60 bg-muted/30 text-xs text-muted-foreground font-mono">
                <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                <span>100% Confidential Under Mutual NDA &bull; MCA &amp; DPIIT Verified</span>
              </div>
            </div>

            {/* Right Column: Form (Span 6) */}
            <div className="lg:col-span-6">
              <ConsultationForm />
            </div>
          </div>
        </Container>
      </div>

      <TrustBarSection />
    </MarketingLayout>
  )
}
