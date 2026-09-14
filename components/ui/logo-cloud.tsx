import React from 'react'
import { cn } from '@/lib/utils'

interface TechItem {
  name: string
  initials: string
  category: string
  color: string
}

const DEFAULT_TECHS: TechItem[] = [
  { name: 'Next.js 16', initials: 'NX', category: 'React Framework', color: 'text-blue-400 border-blue-500/20 bg-blue-500/10' },
  { name: 'Python FastAPI', initials: 'PY', category: 'Backend Engine', color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10' },
  { name: 'PostgreSQL 16', initials: 'PG', category: 'Database Vault', color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/10' },
  { name: 'WebAssembly', initials: 'WA', category: 'Client WASM', color: 'text-purple-400 border-purple-500/20 bg-purple-500/10' },
  { name: 'LangGraph & AI', initials: 'AI', category: 'Agentic Workflows', color: 'text-amber-400 border-amber-500/20 bg-amber-500/10' },
]

interface LogoCloudProps {
  title?: string
  className?: string
}

export function LogoCloud({ title = 'Engineered With Modern Production Technologies', className }: LogoCloudProps) {
  return (
    <div className={cn('py-8 text-center space-y-6', className)}>
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {title}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
        {DEFAULT_TECHS.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-2.5 px-4 py-2 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm shadow-sm hover:border-primary/30 transition-all card-hover"
          >
            <div className={cn('flex h-7 w-7 items-center justify-center rounded-lg border font-mono font-bold text-xs', tech.color)}>
              {tech.initials}
            </div>
            <div className="text-left">
              <span className="text-xs font-bold text-foreground block leading-tight">{tech.name}</span>
              <span className="text-[10px] text-muted-foreground block leading-tight">{tech.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
