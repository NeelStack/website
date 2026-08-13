import { Header } from '@/components/navigation/header'
import { Footer } from '@/components/navigation/footer'
import { MouseSpotlight } from '@/components/ui/mouse-spotlight'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { FloatingConversionWidget } from '@/components/ui/floating-conversion-widget'
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider'
import { CookieConsent } from '@/components/ui/cookie-consent'
import { cn } from '@/lib/utils'

interface MarketingLayoutProps {
  children: React.ReactNode
  className?: string
}

/**
 * MarketingLayout
 *
 * The primary layout for all public-facing marketing pages.
 * Includes smooth scroll, custom cursor, animated background, sticky header,
 * interactive mouse spotlight, floating conversion widget, and footer.
 */
export function MarketingLayout({ children, className }: MarketingLayoutProps) {
  return (
    <SmoothScrollProvider>
      <div className="flex min-h-screen flex-col relative z-[1]">
        <AnimatedBackground />
        <MouseSpotlight />
        <Header />
        <main className={cn('flex-1', className)} id="main-content">
          {children}
        </main>
        <Footer />
        <FloatingConversionWidget />
        <CookieConsent />
      </div>
    </SmoothScrollProvider>
  )
}
