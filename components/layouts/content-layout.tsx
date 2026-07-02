import { Header } from '@/components/navigation/header'
import { Footer } from '@/components/navigation/footer'
import { Container } from '@/components/ui/container'
import { Breadcrumb } from '@/components/navigation/breadcrumb'
import { cn } from '@/lib/utils'
import type { BreadcrumbItem } from '@/types'

interface ContentLayoutProps {
  children: React.ReactNode
  className?: string
  breadcrumbs?: BreadcrumbItem[]
  /**
   * Page hero section displayed below the header
   */
  hero?: React.ReactNode
}

/**
 * ContentLayout
 *
 * A centered, article-style layout for content-heavy pages:
 * About, Case Studies detail pages, blog posts, legal pages, etc.
 * Has a narrow max-width content column and optional breadcrumb.
 */
export function ContentLayout({ children, className, breadcrumbs, hero }: ContentLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16" id="main-content">
        {hero}
        <Container size="md" className={cn('py-12', className)}>
          {breadcrumbs && breadcrumbs.length > 0 && (
            <Breadcrumb items={breadcrumbs} className="mb-8" />
          )}
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  )
}
