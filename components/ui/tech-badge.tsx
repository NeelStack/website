import { cn } from '@/lib/utils'

interface TechBadgeProps {
  name: string
  className?: string
}

export function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border bg-muted',
        'px-3 py-1.5 text-xs font-medium text-muted-foreground',
        'hover:border-primary/30 hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-default',
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
