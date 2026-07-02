import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DocsSidebarItem {
  label: string
  href: string
}

interface DocsSidebarGroup {
  title: string
  items: DocsSidebarItem[]
}

interface DocsLayoutProps {
  children: React.ReactNode
  sidebar?: DocsSidebarGroup[]
  className?: string
}

function DocsSidebar({ groups }: { groups: DocsSidebarGroup[] }) {
  return (
    <aside
      className="hidden lg:block w-64 shrink-0"
      aria-label="Documentation navigation"
    >
      <div className="sticky top-24 space-y-6">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {group.title}
            </h3>
            <ul className="space-y-0.5">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm transition-colors',
                      'text-muted-foreground hover:text-foreground hover:bg-muted'
                    )}
                  >
                    <ChevronRight className="h-3 w-3 shrink-0" aria-hidden="true" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  )
}

export function DocsLayout({ children, sidebar, className }: DocsLayoutProps) {
  return (
    <div className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12', className)}>
      <div className="flex gap-12">
        {sidebar && <DocsSidebar groups={sidebar} />}
        <main className="min-w-0 flex-1" role="main">
          {children}
        </main>
      </div>
    </div>
  )
}
