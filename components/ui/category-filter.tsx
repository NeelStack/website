'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'

interface CategoryFilterProps {
  categories: readonly string[]
  active: string
}

/**
 * CategoryFilter
 *
 * Thin client component for the Services page filter tabs.
 * Reads/writes the `?category=` URL search param so the parent
 * Services page can remain a Server Component and export metadata.
 */
export function CategoryFilter({ categories, active }: CategoryFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSelect = (cat: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (cat === 'All') {
      params.delete('category')
    } else {
      params.set('category', cat)
    }
    router.push(`/services?${params.toString()}`, { scroll: false })
  }

  return (
    <div
      className="mb-10 flex flex-wrap gap-2"
      role="group"
      aria-label="Filter services by category"
    >
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleSelect(cat)}
          className={cn(
            'rounded-full px-4 py-2 text-sm font-medium transition-colors',
            active === cat
              ? 'bg-primary text-primary-foreground'
              : 'border border-border text-muted-foreground hover:text-foreground hover:border-border/80 hover:bg-muted'
          )}
          aria-pressed={active === cat}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
