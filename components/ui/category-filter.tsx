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
      className="mb-5 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:pb-0 scrollbar-none max-w-full"
      role="group"
      aria-label="Filter services by category"
    >
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleSelect(cat)}
          className={cn(
            'shrink-0 rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer',
            active === cat
              ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
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
