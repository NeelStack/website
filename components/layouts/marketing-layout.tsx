import { Header } from '@/components/navigation/header'
import { Footer } from '@/components/navigation/footer'
import { MouseSpotlight } from '@/components/ui/mouse-spotlight'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { FloatingConversionWidget } from '@/components/ui/floating-conversion-widget'
import { cn } from '@/lib/utils'

interface MarketingLayoutProps {
  children: React.ReactNode
  className?: string
}

/**
 * MarketingLayout
 *
 * The primary layout for all public-facing marketing pages.
 * Includes animated background, sticky header, interactive mouse spotlight,
 * persistent floating conversion widget, main content area, and full-width footer.
 */
export function MarketingLayout({ children, className }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col relative">
      <AnimatedBackground />
      <MouseSpotlight />
      <Header />
      <main className={cn('flex-1', className)} id="main-content">
        {children}
      </main>
      <Footer />
      <FloatingConversionWidget />
    </div>
  )
}
