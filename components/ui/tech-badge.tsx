import { cn } from '@/lib/utils'

interface TechBadgeProps {
  name: string
  className?: string
}

export function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border/70 bg-card/80 dark:bg-card/40 backdrop-blur-xs',
        'px-3 py-1.5 text-xs font-medium text-foreground/85 dark:text-slate-200',
        'hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-foreground dark:hover:text-white hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-200 cursor-default',
        className
      )}
    >
      {name}
    </span>
  )
}

interface TechCategoryBlockProps {
  title: string
  technologies: string[]
  className?: string
}

export function TechCategoryBlock({ title, technologies, className }: TechCategoryBlockProps) {
  return (
    <div className={cn('group space-y-3 card-hover hover:border-primary/30', className)}>
      <h3 className="text-xs font-semibold uppercase tracking-widest text-gradient-brand">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
      </div>
    </div>
  )
}
