import { Header } from '@/components/navigation/header'
import { Footer } from '@/components/navigation/footer'
import { Container } from '@/components/ui/container'
import { cn } from '@/lib/utils'

interface BlogLayoutProps {
  children: React.ReactNode
  sidebar?: React.ReactNode
  className?: string
}

/**
 * BlogLayout
 *
 * A two-column layout for the blog listing and article pages.
 * Main content on the left, optional sidebar on the right.
 * On mobile, sidebar is stacked below content.
 */
export function BlogLayout({ children, sidebar, className }: BlogLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16" id="main-content">
        <Container size="xl" className={cn('py-12', className)}>
          {sidebar ? (
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_300px]">
              <div>{children}</div>
              <aside className="lg:sticky lg:top-24 lg:self-start" aria-label="Blog sidebar">
                {sidebar}
              </aside>
            </div>
          ) : (
            children
          )}
        </Container>
      </main>
      <Footer />
    </div>
  )
}

/**
 * DocLayout — placeholder for future documentation pages
 */
export function DocLayout({ children, sidebar, className }: BlogLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16" id="main-content">
        <div className={cn('flex', className)}>
          {sidebar && (
            <aside
              className="hidden lg:flex lg:w-64 lg:shrink-0 border-r border-border"
              aria-label="Documentation sidebar"
            >
              <div className="sticky top-16 h-[calc(100vh-4rem)] w-full overflow-y-auto p-6">
                {sidebar}
              </div>
            </aside>
          )}
          <Container size="full" className="py-12 flex-1">
            {children}
          </Container>
        </div>
      </main>
      <Footer />
    </div>
  )
}
