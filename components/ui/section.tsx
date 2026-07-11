import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  as?: React.ElementType
}

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

export function Section({ children, className, id, as: Component = 'section' }: SectionProps) {
  return (
    <Component id={id} className={cn('py-20 md:py-28', className)}>
      {children}
    </Component>
  )
}

export function SectionHeader({
  badge,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align]

  return (
    <div className={cn('flex flex-col gap-4 mb-12 md:mb-16', alignClass, className)}>
      {badge && (
        <span className="relative inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary shadow-[0_0_12px_oklch(0.62_0.22_258/12%)]">
          <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          {badge}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
          {description}
        </p>
      )}
    </div>
  )
}
