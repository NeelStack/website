/**
 * Dashboard Layout — placeholder for future authenticated portal.
 * Provides a sidebar + main content structure ready for expansion.
 */
import { cn } from '@/lib/utils'

interface DashboardLayoutProps {
  children: React.ReactNode
  sidebar?: React.ReactNode
  header?: React.ReactNode
  className?: string
}

export function DashboardLayout({
  children,
  sidebar,
  header,
  className,
}: DashboardLayoutProps) {
  return (
    <div className={cn('flex min-h-screen bg-background', className)}>
      {/* Sidebar */}
      {sidebar && (
        <aside
          className="hidden md:flex md:w-64 md:flex-col border-r border-border bg-card shrink-0"
          aria-label="Dashboard navigation"
        >
          <div className="flex-1 overflow-y-auto p-4">{sidebar}</div>
        </aside>
      )}

      {/* Main area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {header && (
          <header className="border-b border-border bg-card px-6 py-4" role="banner">
            {header}
          </header>
        )}
        <main
          className="flex-1 overflow-y-auto p-6"
          role="main"
          aria-label="Dashboard content"
        >
          {children}
        </main>
      </div>
    </div>
  )
}
