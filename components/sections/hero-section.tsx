import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { SITE_CONFIG } from '@/constants/site'

const trustedBy = [
  'Startups',
  'Healthcare Orgs',
  'Gov Agencies',
  'Universities',
  'Enterprises',
  'Pharma Companies',
]

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32"
      aria-label="Hero section"
    >
      {/* Background grid — reduced opacity so content stays dominant */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" aria-hidden="true" />

      {/* Primary electric-blue ambient glow — top center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'radial-gradient(ellipse 70% 50% at 50% 0%, #3b82f622 0%, transparent 65%)',
            'radial-gradient(ellipse 40% 30% at 70% 10%, #06b6d414 0%, transparent 55%)',
          ].join(', '),
        }}
        aria-hidden="true"
      />

      {/* Secondary teal ambient orb — bottom right for depth */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 80% 100%, #06b6d40e 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
          {/* Pre-heading badge with animated pulse ring */}
          <span className="relative inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary shadow-[0_0_16px_oklch(0.62_0.22_258/15%)]">
            {/* Animated pulse dot */}
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Ambitious AI Software Startup
          </span>

          {/* Main heading */}
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            Building the{' '}
            <span className="text-gradient-brand">Future</span>
            {' '}of{' '}
            <span className="text-gradient">Enterprise Software</span>
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-xl text-pretty">
            NeelStack Technologies designs and delivers enterprise software, AI solutions, SaaS
            products, ERP systems, and mobile & web applications — engineered for scale.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <Button asChild size="lg" className="gap-2 glow-cta">
              <Link href="/request-quote">
                Get a Free Quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <Link href="/portfolio">
                <Play className="h-4 w-4" aria-hidden="true" />
                View Our Work
              </Link>
            </Button>
          </div>

          {/* Trusted by marquee */}
          <div className="mt-8 flex flex-col items-center gap-4 w-full">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Serving industries across
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {trustedBy.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-primary/5 transition-all duration-200 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
