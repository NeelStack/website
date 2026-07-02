import { cn } from '@/lib/utils'
import type { ProcessStep } from '@/types'

interface ProcessStepCardProps {
  step: ProcessStep
  isLast?: boolean
  className?: string
}

export function ProcessStepCard({ step, isLast = false, className }: ProcessStepCardProps) {
  const Icon = step.icon

  return (
    <div className={cn('relative flex gap-5', className)}>
      {/* Step line connector */}
      {!isLast && (
        <div
          className="absolute left-5 top-12 bottom-0 w-px bg-border"
          aria-hidden="true"
        />
      )}

      {/* Step number + icon */}
      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card">
        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="pb-10">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-semibold text-muted-foreground">
            Step {step.step.toString().padStart(2, '0')}
          </span>
        </div>
        <h3 className="font-heading text-base font-semibold text-foreground mb-1.5">
          {step.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
      </div>
    </div>
  )
}
