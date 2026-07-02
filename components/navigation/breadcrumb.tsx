import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { BreadcrumbItem } from '@/types'

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex', className)}>
      <ol
        className="flex items-center gap-1.5 text-xs text-muted-foreground"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link
            href="/"
            className="flex items-center hover:text-foreground transition-colors"
            itemProp="item"
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="sr-only" itemProp="name">
              Home
            </span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {items.map((item, index) => (
          <li
            key={item.label}
            className="flex items-center gap-1.5"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <ChevronRight className="h-3 w-3 text-muted-foreground/50" aria-hidden="true" />
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-foreground transition-colors"
                itemProp="item"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span className="text-foreground font-medium" itemProp="name" aria-current="page">
                {item.label}
              </span>
            )}
            <meta itemProp="position" content={String(index + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  )
}
