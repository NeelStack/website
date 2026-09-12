import Link from 'next/link'
import { ArrowRight, Globe, Smartphone, Bot, Wrench, ShieldCheck, Zap, Lock, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { AiNetworkBg } from '@/components/ui/ai-network-bg'
import { HeroSpotlight } from '@/components/ui/hero-spotlight'

const services = [
  { icon: Globe, label: 'Websites' },
  { icon: Smartphone, label: 'Mobile Apps' },
  { icon: Bot, label: 'AI Agents' },
  { icon: Wrench, label: 'Custom Software' },
]

const ENTERPRISE_METRICS = [
  { icon: ShieldCheck, label: 'Cloud-Native Architecture', desc: 'High-availability global edge' },
  { icon: Zap, label: '<250ms Agent Execution', desc: 'Optimized inference pipelines' },
  { icon: Lock, label: '100% VPC Data Residency', desc: 'Zero data leakage guarantee' },
  { icon: CheckCircle2, label: 'DPIIT & MCA Certified', desc: 'Govt of India recognized' },
]

export function HeroSection() {
  return (
    <HeroSpotlight>
      {/* AI Network Background Layer */}
      <AiNetworkBg />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] dark:opacity-[0.35] pointer-events-none z-0" aria-hidden="true" />

      {/* Static ambient mesh */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-40 dark:opacity-60 pointer-events-none z-0" aria-hidden="true" />

      <Container className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Main Centered Layout */}
        <div className="flex flex-col gap-6 text-center items-center">
          {/* Top Announcement Pill */}
          <div>
            <Link
              href="/products/dhruvaos"
              className="group inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/15 px-4 py-1.5 text-xs font-semibold text-blue-600 dark:text-cyan-400 transition-all duration-200 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.15)]"
            >
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Introducing <strong>DhruvaOS</strong> — AI-Native Cloud ERP for Institutions</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform text-cyan-500" />
            </Link>
          </div>

          {/* Main Title — Single clean gradient */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.85rem] font-extrabold tracking-tighter text-foreground text-balance leading-[1.08] lg:leading-[1.04]">
            We Build{' '}
            <span className="text-gradient-brand">Websites, Apps,</span>
            <br />
            <span className="text-gradient-brand">AI Agents</span>{' '}
            <span className="text-foreground">&amp; Custom Software</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground text-balance font-sans mt-2">
            We engineer high-performance digital platforms for clients — and ship{' '}
            <span className="text-foreground font-semibold">our own AI-powered SaaS products</span>.
            From autonomous{' '}
            <span className="text-foreground font-semibold">AI agents</span> to{' '}
            <span className="text-foreground font-semibold">mission-critical cloud architectures</span>, we deliver with velocity.
          </p>

          {/* Service Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
            {services.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/50 shadow-sm backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-foreground/85 tracking-wide hover:border-blue-500/40 transition-colors duration-200"
              >
                <Icon className="h-3.5 w-3.5 text-blue-500" aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 w-full sm:w-auto">
            <div className="w-full sm:w-auto transition-transform duration-200 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98]">
              <Button asChild size="lg" className="w-full sm:w-auto h-13 px-8 text-sm sm:text-base font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-xl shadow-lg shadow-blue-500/25 border-0 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 btn-shimmer">
                <Link href="/book-consultation" className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <div className="w-full sm:w-auto transition-transform duration-200 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98]">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-13 px-8 text-sm sm:text-base font-bold border border-border hover:border-blue-500/50 hover:bg-blue-500/5 text-foreground/85 hover:text-foreground rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
              >
                <Link href="/portfolio" className="flex items-center gap-2">
                  View Our Work
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Integrated Defensible Enterprise Metrics Strip */}
          <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 pt-8 border-t border-border/50">
            {ENTERPRISE_METRICS.map((metric) => {
              const Icon = metric.icon
              return (
                <div
                  key={metric.label}
                  className="flex flex-col items-center justify-center p-3 rounded-xl border border-border/60 bg-card/30 dark:bg-white/[0.02] backdrop-blur-sm transition-colors hover:border-blue-500/30"
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <Icon className="h-3.5 w-3.5 text-cyan-500" />
                    <span className="text-xs font-bold text-foreground tracking-tight">
                      {metric.label}
                    </span>
                  </div>
                  <span className="text-[11px] text-muted-foreground text-center">
                    {metric.desc}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </HeroSpotlight>
  )
}
