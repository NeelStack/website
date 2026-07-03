import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Tag } from '@/components/ui/status-badge'
import type { BlogPost } from '@/types'

interface BlogCardProps {
  post: BlogPost
  className?: string
  variant?: 'default' | 'featured' | 'compact'
}

export function BlogCard({ post, className, variant = 'default' }: BlogCardProps) {
  if (variant === 'compact') {
    return (
      <Link
        href={post.href}
        className={cn(
          'group flex items-start gap-4 py-4 border-b border-border last:border-0',
          'hover:opacity-80 transition-opacity',
          className
        )}
        aria-label={post.title}
      >
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-primary mb-1">{post.category}</p>
          <h3 className="text-sm font-semibold text-foreground line-clamp-2 mb-1 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-xs text-muted-foreground">{post.publishedAt}</p>
        </div>
        <ArrowRight
          className="shrink-0 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1"
          aria-hidden="true"
        />
      </Link>
    )
  }

  if (variant === 'featured') {
    return (
      <article
        className={cn(
          'group relative overflow-hidden rounded-2xl border border-border bg-card',
          'hover:border-primary/30 transition-all duration-300',
          className
        )}
      >
        {/* Image placeholder with brand gradient */}
        <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-primary/10 via-card to-accent/10">
          <div className="absolute inset-0 flex items-center justify-center bg-grid-pattern opacity-40">
            <span
              className="text-4xl font-heading font-black text-foreground/5 select-none"
              aria-hidden="true"
            >
              {post.category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Tag variant="primary">{post.category}</Tag>
            {post.featured && <Tag variant="accent">Featured</Tag>}
          </div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors text-balance">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="h-7 w-7 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-foreground"
                aria-hidden="true"
              >
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-medium text-foreground">{post.author.name}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" aria-hidden="true" />
                  {post.readTime}
                </div>
              </div>
            </div>
            <Link
              href={post.href}
              className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:gap-2 transition-all duration-200"
              aria-label={`Read ${post.title}`}
            >
              Read more
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article
      className={cn(
        'group flex flex-col rounded-2xl border border-border bg-card overflow-hidden',
        'hover:border-primary/30 transition-all duration-300',
        className
      )}
    >
      {/* Image placeholder with brand gradient */}
      <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-primary/10 via-card to-accent/10">
        <div className="absolute inset-0 flex items-center justify-center bg-dot-pattern opacity-40">
          <span
            className="text-2xl font-heading font-black text-foreground/5 select-none"
            aria-hidden="true"
          >
            {post.category}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-2 mb-3">
          <Tag variant="primary">{post.category}</Tag>
        </div>
        <h3 className="font-heading text-base font-bold text-foreground mb-2 flex-1 group-hover:text-primary transition-colors text-balance">
          {post.title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" aria-hidden="true" />
            {post.readTime}
            <span>·</span>
            <span>{post.publishedAt}</span>
          </div>
          <Link
            href={post.href}
            className="text-xs font-medium text-primary inline-flex items-center gap-1 hover:gap-2 transition-all duration-200"
            aria-label={`Read ${post.title}`}
          >
            Read
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}
