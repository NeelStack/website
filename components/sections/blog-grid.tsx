'use client'

import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { BlogCard } from '@/components/ui/blog-card'
import type { BlogPost } from '@/types'

interface BlogGridProps {
  posts: BlogPost[]
  featuredPost?: BlogPost
  categories: string[]
}

export function BlogGrid({ posts, featuredPost, categories }: BlogGridProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const activeCategory = searchParams.get('category') || 'All'

  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (category === 'All') {
      params.delete('category')
    } else {
      params.set('category', category)
    }
    // Update URL without full page reload
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const filteredRegularPosts = posts.filter(
    (post) => activeCategory === 'All' || post.category === activeCategory
  )
  
  const isAll = activeCategory === 'All'

  return (
    <>
      {/* Category filter */}
      <div
        className="mb-5 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:pb-0 scrollbar-none max-w-full"
        role="group"
        aria-label="Filter posts by category"
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat
          return (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`shrink-0 rounded-full border px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                isActive
                  ? 'border-primary bg-primary/10 text-primary font-semibold'
                  : 'border-border text-muted-foreground hover:text-foreground hover:border-border/80'
              }`}
              aria-pressed={isActive}
            >
              {cat}
            </button>
          )
        })}
      </div>

      {/* Featured post (only show on 'All' category) */}
      {featuredPost && isAll && (
        <div className="mb-7">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            Featured
          </p>
          <BlogCard post={featuredPost} variant="featured" />
        </div>
      )}

      {/* Regular posts grid */}
      {filteredRegularPosts.length > 0 ? (
        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredRegularPosts.map((post) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={post.id}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="py-24 text-center">
          <p className="text-muted-foreground">No posts found for this category.</p>
          <button 
            onClick={() => handleCategoryClick('All')}
            className="mt-4 text-primary hover:underline text-sm font-medium"
          >
            Clear filter
          </button>
        </div>
      )}
    </>
  )
}
