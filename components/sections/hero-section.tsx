import Link from 'next/link'
import { ArrowRight, ExternalLink, Play, Zap } from 'lucide-react'
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
      className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-36"
      aria-label="Hero section"
    >
      {/* ── Background grid ── */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" aria-hidden="true" />

      {/* ── Mesh gradient backdrop ── */}
      <div className="absolute inset-0 bg-mesh-gradient" aria-hidden="true" />

      {/* ── Primary electric-blue ambient glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'radial-gradient(ellipse 80% 55% at 50% -5%, #3b82f628 0%, transparent 60%)',
            'radial-gradient(ellipse 45% 35% at 75% 8%, #06b6d416 0%, transparent 55%)',
          ].join(', '),
        }}
        aria-hidden="true"
      />

      {/* ── Floating decorative orbs (CSS only) ── */}
      <div
        className="absolute top-24 left-[8%] w-56 h-56 rounded-full animate-float-slow pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #3b82f60f 0%, transparent 70%)',
          filter: 'blur(32px)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-40 right-[5%] w-72 h-72 rounded-full animate-float-delayed pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #06b6d40c 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-[30%] w-64 h-64 rounded-full animate-float pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #8b5cf60a 0%, transparent 70%)',
          filter: 'blur(36px)',
        }}
        aria-hidden="true"
      />

      {/* ── Secondary teal ambient orb ── */}
      <div
        className="absolute bottom-0 right-0 w-[640px] h-[420px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 80% 100%, #06b6d40e 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center gap-7 max-w-4xl mx-auto">

          {/* ── ToolVines announcement bar ── */}
          <Link
            href="https://toolvines.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/8 px-4 py-2 text-sm font-medium text-emerald-300 hover:border-emerald-400/50 hover:bg-emerald-500/12 transition-all duration-300 animate-float"
            aria-label="ToolVines is now live"
          >
            <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span>
              <span className="font-semibold">ToolVines is live</span>
              {' '}— our first product, deployed & growing
            </span>
            <ExternalLink className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
          </Link>

          {/* ── Pre-heading badge ── */}
          <span className="relative inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary shadow-[0_0_20px_oklch(0.62_0.22_258/18%)]">
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Ambitious AI Software Startup
          </span>

          {/* ── Main heading with stagger ── */}
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            Building the{' '}
            <span className="text-gradient-brand">Future</span>
            {' '}of{' '}
            <span className="text-gradient">Enterprise Software</span>
          </h1>

          {/* ── Subheading ── */}
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-xl text-pretty">
            NeelStack Technologies designs and delivers enterprise software, AI solutions, SaaS
            products, ERP systems, and mobile &amp; web applications — engineered for scale.
          </p>

          {/* ── CTAs ── */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-1">
            <Button asChild size="lg" className="gap-2 glow-cta px-7">
              <Link href="/request-quote">
                Get a Free Quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 hover:border-primary/40 hover:text-primary transition-colors"
            >
              <Link href="/portfolio">
                <Play className="h-4 w-4" aria-hidden="true" />
                View Our Work
              </Link>
            </Button>
          </div>

          {/* ── DhruvaOS beta notice ── */}
          <Link
            href="/products/dhruvaos"
            className="group inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/8 px-4 py-1.5 text-xs font-medium text-amber-300 hover:border-amber-400/40 hover:bg-amber-500/12 transition-all duration-300"
          >
            <Zap className="h-3.5 w-3.5 animate-pulse" aria-hidden="true" />
            <span>DhruvaOS — AI-Powered Education Operating System Beta drops <strong>July 15</strong></span>
            <ArrowRight className="h-3 w-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
          </Link>

          {/* ── Trusted by ── */}
          <div className="mt-6 flex flex-col items-center gap-4 w-full">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Serving industries across
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {trustedBy.map((item, i) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-muted/60 px-4 py-1.5 text-sm font-medium text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-primary/5 transition-all duration-200 cursor-default backdrop-blur-sm"
                  style={{ animationDelay: `${i * 80}ms` }}
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
