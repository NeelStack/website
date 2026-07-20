import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

interface CTASectionProps {
  title?: string
  titleAccent?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  className?: string
  variant?: 'default' | 'bordered'
}

export function CTASection({
  title = 'Ready to build something',
  titleAccent = 'extraordinary?',
  description = "Let's talk about your project. Our team of engineers, architects, and strategists is ready to help you design and ship world-class software.",
  primaryLabel = 'Get a Free Quote',
  primaryHref = '/request-quote',
  secondaryLabel = 'Book a Consultation',
  secondaryHref = '/book-consultation',
  className,
  variant = 'default',
}: CTASectionProps) {
  return (
    <section
      className={cn(
        'py-20 md:py-32',
        variant === 'bordered' ? 'border-t border-b border-border' : '',
        className
      )}
      aria-labelledby="cta-heading"
    >
      <Container>
        <div className="relative rounded-3xl overflow-hidden bg-card border border-primary/20 p-10 md:p-16 text-center">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-dot-pattern opacity-40" aria-hidden="true" />
          {/* Top blue glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 40% at 50% 0%, oklch(0.62 0.22 258 / 18%) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />
          {/* Bottom teal glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 50% 100%, oklch(0.72 0.16 198 / 10%) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10">
            <h2
              id="cta-heading"
              className="font-heading text-3xl font-extrabold text-foreground md:text-4xl lg:text-5xl text-balance mx-auto max-w-3xl"
            >
              {title}{' '}
              <span className="text-gradient-brand">{titleAccent}</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty md:text-lg">
              {description}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="gradient" size="lg" className="gap-2 px-8 glow-cta">
                <Link href={primaryHref}>
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 px-8">
                <Link href={secondaryHref}>
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  {secondaryLabel}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
