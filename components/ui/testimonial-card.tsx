import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
  className?: string
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  const rating = testimonial.rating ?? 5

  return (
    <figure
      className={cn(
        'flex flex-col rounded-2xl border border-border bg-card p-6',
        'hover:border-primary/30 transition-all duration-300',
        className
      )}
    >
      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-4" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              'h-4 w-4',
              i < rating ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground'
            )}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="flex-1 mb-5">
        <p className="text-sm leading-relaxed text-foreground/80">&ldquo;{testimonial.quote}&rdquo;</p>
      </blockquote>

      {/* Author */}
      <figcaption className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary"
          aria-hidden="true"
        >
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
          <p className="text-xs text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </figcaption>
    </figure>
  )
}
