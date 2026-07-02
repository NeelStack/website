import { Header } from '@/components/navigation/header'
import { Footer } from '@/components/navigation/footer'
import { cn } from '@/lib/utils'

interface MarketingLayoutProps {
  children: React.ReactNode
  className?: string
}

/**
 * MarketingLayout
 *
 * The primary layout for all public-facing marketing pages.
 * Includes sticky header, main content area, and full-width footer.
 * Add `pt-16` to the first section of each page to account for the fixed header.
 */
export function MarketingLayout({ children, className }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className={cn('flex-1', className)} id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  )
}
