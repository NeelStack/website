import Link from 'next/link'
import { ArrowRight, Clock, FileText } from 'lucide-react'
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
          'hover:opacity-85 transition-opacity',
          className
        )}
        aria-label={post.title}
      >
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">{post.category}</p>
          <h3 className="text-sm font-bold text-foreground line-clamp-2 mb-1 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-xs text-muted-foreground">{post.publishedAt}</p>
        </div>
        <ArrowRight
          className="shrink-0 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all mt-1"
          aria-hidden="true"
        />
      </Link>
    )
  }

  if (variant === 'featured') {
    return (
      <article
        className={cn(
          'group relative overflow-hidden rounded-2xl border border-border bg-card shadow-md hover:shadow-lg card-hover',
          'hover:border-primary/40 transition-all duration-300',
          className
        )}
      >
        <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-primary/15 via-card to-accent/15 dark:from-primary/10 dark:to-accent/10">
          <div className="absolute inset-0 flex items-center justify-center bg-grid-pattern opacity-40">
            <span
              className="text-4xl font-heading font-black text-foreground/5 select-none"
              aria-hidden="true"
            >
              {post.category}
            </span>
          </div>
          <div className="absolute top-4 left-4">
            <Tag variant="primary">{post.category}</Tag>
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors text-balance leading-tight">
            {post.title}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between border-t border-border/50 pt-4 mt-2">
            <div className="flex items-center gap-2">
              <div
                className="h-8 w-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold text-primary"
                aria-hidden="true"
              >
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-bold text-foreground leading-none">{post.author.name}</p>
                <div className="flex items-center gap-1 text-[10px] text-muted-foreground mt-0.5">
                  <Clock className="h-3 w-3" aria-hidden="true" />
                  {post.readTime}
                </div>
              </div>
            </div>
            <Link
              href={post.href}
              className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:gap-2 transition-all duration-200"
              aria-label={`Read ${post.title}`}
            >
              Read Article
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
        'group flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md card-hover',
        'hover:border-primary/40 transition-all duration-300',
        className
      )}
    >
      {/* Decorative header gradient with abstract file layout */}
      <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-primary/15 via-card to-accent/15 dark:from-primary/10 dark:to-accent/10 flex items-center justify-center border-b border-border/40">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" aria-hidden="true" />
        <div className="absolute top-4 left-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
            {post.category}
          </span>
        </div>
        <FileText className="h-10 w-10 text-primary/30 group-hover:scale-110 transition-transform duration-300" />
      </div>

      <div className="flex flex-col flex-1 p-5 space-y-3">
        <h3 className="font-heading text-base font-bold text-foreground group-hover:text-primary transition-colors text-balance leading-snug">
          {post.title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto border-t border-border/40 pt-4">
          <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-medium">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{post.readTime}</span>
            <span>·</span>
            <span>{post.publishedAt}</span>
          </div>
          <Link
            href={post.href}
            className="text-xs font-bold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all duration-200"
            aria-label={`Read ${post.title}`}
          >
            Read Article
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}
