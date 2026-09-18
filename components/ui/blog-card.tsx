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
          'group flex items-start gap-4 py-4 border-b border-border/70 last:border-0',
          'hover:opacity-90 transition-opacity',
          className
        )}
        aria-label={post.title}
      >
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-mono font-bold text-primary uppercase tracking-wider mb-1">{post.category}</p>
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
          'group relative overflow-hidden rounded-3xl border-2 border-border/90 bg-card p-6 sm:p-7 shadow-md tactile-card-3d',
          'hover:border-primary/60 transition-all duration-200 bg-gradient-to-br from-primary/[0.04] via-card to-accent/[0.04]',
          className
        )}
      >
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-0.5">
            <div className="flex items-center gap-2">
              <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                ✦ Featured Publication
              </span>
              <Tag variant="primary">{post.category}</Tag>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{post.readTime}</span>
              <span>·</span>
              <span>{post.publishedAt}</span>
            </div>
          </div>

          <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-foreground group-hover:text-primary transition-colors text-balance leading-tight">
            {post.title}
          </h3>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between border-t border-border/50 pt-4 mt-2">
            <div className="flex items-center gap-2.5">
              <div
                className="h-8 w-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold text-primary"
                aria-hidden="true"
              >
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-bold text-foreground leading-none">{post.author.name}</p>
                <p className="text-[10.5px] text-muted-foreground mt-0.5 font-mono">{post.author.role}</p>
              </div>
            </div>
            <Link
              href={post.href}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-primary hover:gap-2 transition-all duration-200 font-heading"
              aria-label={`Read ${post.title}`}
            >
              Read Article
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article
      className={cn(
        'group flex flex-col justify-between rounded-3xl border-2 border-border/90 bg-card p-5 sm:p-6 shadow-sm tactile-card-3d',
        'hover:border-primary/60 transition-all duration-200',
        className
      )}
    >
      <div className="flex flex-col flex-1 space-y-3">
        {/* Top category & timing strip */}
        <div className="flex items-center justify-between gap-2 pb-1">
          <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
            {post.category}
          </span>
          <div className="flex items-center gap-1 text-[11px] font-mono text-muted-foreground font-medium">
            <Clock className="h-3 w-3" aria-hidden="true" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-heading text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors text-balance leading-snug">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto border-t border-border/50 pt-4">
          <div className="flex items-center gap-2">
            <div
              className="h-7 w-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold text-primary"
              aria-hidden="true"
            >
              {post.author.name.charAt(0)}
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground leading-none">{post.author.name}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5 font-mono">{post.publishedAt}</p>
            </div>
          </div>
          <Link
            href={post.href}
            className="text-xs font-extrabold font-heading text-primary inline-flex items-center gap-1 hover:gap-1.5 transition-all duration-200"
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

