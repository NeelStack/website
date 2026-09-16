'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Mail, RefreshCw, AlertCircle } from 'lucide-react'
import { isValidEmail } from '@/lib/validation'

export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const msgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (status === 'success' && msgRef.current) {
      msgRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      msgRef.current.focus({ preventScroll: true })
    }
  }, [status])

  const handleEmailChange = (val: string) => {
    setEmail(val)
    if (status === 'error') {
      setStatus('idle')
      setMessage('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !isValidEmail(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address (e.g. alex@company.com).')
      return
    }

    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setMessage('Subscribed! We will keep you updated.')
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Failed to subscribe. Please try again or email contact@neelstack.com.')
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
        <div
          ref={msgRef}
          tabIndex={-1}
          role="status"
          aria-live="polite"
          className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 rounded-xl outline-none animate-in fade-in duration-200"
        >
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span>{message}</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-1.5">
          <div className="flex gap-2">
            <input
              type="email"
              required
              aria-required="true"
              aria-invalid={status === 'error'}
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              placeholder="e.g. alex@company.com"
              className={`flex-1 min-w-0 rounded-xl border ${
                status === 'error'
                  ? 'border-red-500/80 bg-red-500/[0.04] focus:ring-red-500/30 focus:border-red-500'
                  : 'border-input/60 bg-muted/10 focus:border-primary focus:ring-primary/30 [&:not(:placeholder-shown)]:border-primary/40'
              } px-3.5 py-2 text-xs text-foreground placeholder:text-muted-foreground/35 placeholder:italic transition-all duration-200 focus:outline-none focus:ring-2 focus:bg-background shadow-sm`}
            />
            <Button type="submit" size="sm" disabled={status === 'loading'} className="shrink-0">
              {status === 'loading' ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : 'Subscribe'}
            </Button>
          </div>
          {status === 'error' && (
            <p className="text-xs text-red-500 font-medium flex items-center gap-1 mt-1 animate-in fade-in duration-200">
              <AlertCircle className="h-3 w-3 shrink-0" />
              <span>{message}</span>
            </p>
          )}
        </form>
      )}
    </div>
  )
}

