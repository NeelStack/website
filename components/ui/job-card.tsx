import Link from 'next/link'
import { ArrowRight, Briefcase, Clock, MapPin, Monitor } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Job } from '@/types'

const jobTypeLabels: Record<string, string> = {
  'full-time': 'Full-time',
  'part-time': 'Part-time',
  contract: 'Contract',
  internship: 'Internship',
}

const jobModeColors: Record<string, string> = {
  remote: 'text-emerald-400',
  hybrid: 'text-amber-400',
  'on-site': 'text-blue-400',
}

interface JobCardProps {
  job: Job
  className?: string
}

export function JobCard({ job, className }: JobCardProps) {
  return (
    <Link
      href={job.href}
      className={cn(
        'group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6',
        'hover:border-primary/40 hover:bg-card/80 transition-all duration-200',
        className
      )}
      aria-label={`${job.title} — ${job.department}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
            {job.department}
          </p>
          <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {job.title}
          </h3>
        </div>
        <ArrowRight
          className="mt-1 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
          aria-hidden="true"
        />
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
        {job.description}
      </p>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {job.location}
        </span>
        <span className={cn('flex items-center gap-1.5', jobModeColors[job.mode])}>
          <Monitor className="h-3.5 w-3.5" aria-hidden="true" />
          {job.mode.charAt(0).toUpperCase() + job.mode.slice(1)}
        </span>
        <span className="flex items-center gap-1.5">
          <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
          {jobTypeLabels[job.type] ?? job.type}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {job.experience}
        </span>
      </div>
    </Link>
  )
}
