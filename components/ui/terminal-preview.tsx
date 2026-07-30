'use client'

import React, { useState, useEffect } from 'react'
import { Check, Copy, Terminal as TerminalIcon } from 'lucide-react'

const TERMINAL_LINES = [
  { text: '$ neelstack init --template ai-enterprise-suite', type: 'cmd' },
  { text: '✔ Initializing Next.js 16 + FastAPI + PostgreSQL core...', type: 'success' },
  { text: '✔ Configuring vector embeddings & RAG pipeline...', type: 'success' },
  { text: '✔ Injecting RBAC & Enterprise Security protocols...', type: 'success' },
  { text: '⚡ Deployment successful. System ready at https://app.neelstack.io', type: 'highlight' },
]

export function TerminalPreview() {
  const [copied, setCopied] = useState(false)
  const [visibleLines, setVisibleLines] = useState<number>(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => (prev < TERMINAL_LINES.length ? prev + 1 : 1))
    }, 2400)
    return () => clearInterval(timer)
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText('npx create-neelstack-app@latest')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full max-w-3xl mx-auto rounded-2xl border border-border/80 bg-card/90 shadow-2xl backdrop-blur-md overflow-hidden card-hover">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-muted/40">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-rose-500/80" />
            <div className="h-3 w-3 rounded-full bg-amber-500/80" />
            <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="ml-3 flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
            <TerminalIcon className="h-3.5 w-3.5" />
            <span>neelstack-cli — bash</span>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded border border-border/40 hover:bg-muted"
          title="Copy command"
        >
          {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
          <span className="font-mono text-[11px]">{copied ? 'Copied' : 'Copy setup'}</span>
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-5 font-mono text-xs md:text-sm space-y-2.5 min-h-[165px] bg-background/50 text-left">
        {TERMINAL_LINES.slice(0, visibleLines).map((line, idx) => (
          <div key={idx} className="flex items-start gap-2 animate-in-view">
            {line.type === 'cmd' && <span className="text-primary font-bold shrink-0">›</span>}
            <span
              className={
                line.type === 'cmd'
                  ? 'text-foreground font-semibold'
                  : line.type === 'success'
                  ? 'text-emerald-400'
                  : 'text-cyan-400 font-semibold'
              }
            >
              {line.text}
            </span>
          </div>
        ))}
        {visibleLines < TERMINAL_LINES.length && (
          <div className="inline-block w-2 h-4 bg-primary animate-pulse ml-1" />
        )}
      </div>
    </div>
  )
}
