'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Mail, RefreshCw } from 'lucide-react'

export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return

    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setMessage('Subscribed! We will keep you updated.')
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Failed to subscribe. Please try again.')
    }
  }

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <Mail className="h-4 w-4 text-primary" />
        <span>Get Monthly Engineering Insights</span>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Deep dives on AI agent architectures, Next.js optimization, and cloud software engineering. No spam.
      </p>

      {status === 'success' ? (
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 rounded-xl">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span>{message}</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="flex-1 min-w-0 rounded-xl border border-input bg-background px-3.5 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
          />
          <Button type="submit" size="sm" disabled={status === 'loading'} className="shrink-0">
            {status === 'loading' ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : 'Subscribe'}
          </Button>
        </form>
      )}
      {status === 'error' && <p className="text-xs text-destructive">{message}</p>}
    </div>
  )
}
