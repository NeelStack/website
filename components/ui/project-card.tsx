import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Tag } from '@/components/ui/status-badge'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  className?: string
}

const statusLabel: Record<Project['status'], string> = {
  live: 'Live',
  'in-progress': 'In Progress',
  'coming-soon': 'Coming Soon',
}

const statusClass: Record<Project['status'], string> = {
  live: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
  'in-progress': 'border-amber-500/30 bg-amber-500/10 text-amber-400',
  'coming-soon': 'border-blue-500/30 bg-blue-500/10 text-blue-400',
}

const sharedCardClass = (status: Project['status'], className?: string) =>
  cn(
    'group relative flex flex-col overflow-hidden rounded-2xl border-2 border-border bg-card w-full max-w-md',
    'tactile-card-3d hover:border-primary/50',
    status === 'coming-soon' && 'opacity-70',
    className
  )

export function ProjectCard({ project, className }: ProjectCardProps) {
  const isLinked = !!project.href

  if (isLinked) {
    return (
      <Link
        href={project.href}
        aria-label={`View project: ${project.name}`}
        className={sharedCardClass(project.status, className)}
      >
        <ProjectCardInner project={project} isLinked={true} />
      </Link>
    )
  }

  return (
    <div className={sharedCardClass(project.status, className)}>
      <ProjectCardInner project={project} isLinked={false} />
    </div>
  )
}

function ProjectCardInner({ project, isLinked }: { project: Project; isLinked: boolean }) {
  return (
    <>
      {/* Visual Header with brand gradient & subtle zoom */}
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/10 via-card to-accent/10">
        <div className="absolute inset-0 flex items-center justify-center bg-grid-pattern opacity-50 transition-transform duration-500 ease-out group-hover:scale-110">
          <span
            className="text-5xl font-heading font-black text-foreground/5 select-none"
            aria-hidden="true"
          >
            {project.name.charAt(0)}
          </span>
        </div>
        {isLinked && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/0 group-hover:bg-background/20 transition-all duration-300">
            <div className="p-3 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
              <ArrowUpRight
                className="h-6 w-6 text-foreground"
                aria-hidden="true"
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6">
        {/* Status & category */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className={cn(
              'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-transform duration-200 group-hover:scale-105',
              statusClass[project.status]
            )}
          >
            {statusLabel[project.status]}
          </span>
          <span className="text-xs text-muted-foreground">{project.category}</span>
        </div>

        <h3 className="font-heading text-lg font-bold text-foreground mb-1">{project.name}</h3>
        {project.client && (
          <p className="text-xs text-muted-foreground mb-2">Client: {project.client}</p>
        )}
        <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
          {project.year && <Tag>{project.year}</Tag>}
        </div>
      </div>
    </>
  )
}
