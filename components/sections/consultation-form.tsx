'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CopyEmailButton } from '@/components/ui/copy-email-button'
import { CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react'

export function ConsultationForm() {
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const checkAutoClearError = (form: HTMLFormElement) => {
    if (!error) return
    const formData = new FormData(form)
    const firstName = formData.get('first-name') as string
    const lastName = formData.get('last-name') as string
    const email = formData.get('email') as string
    const topic = formData.get('topic') as string

    if (firstName?.trim() && lastName?.trim() && email?.trim() && topic?.trim()) {
      setError(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)
    const firstName = (formData.get('first-name') as string)?.trim()
    const lastName = (formData.get('last-name') as string)?.trim()
    const email = (formData.get('email') as string)?.trim()
    const topic = (formData.get('topic') as string)?.trim()

    if (!firstName || !lastName || !email || !topic) {
      setError('Please fill in all required fields.')
      setSubmitting(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.')
      setSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'consultation',
          name: `${firstName} ${lastName}`,
          email,
          topic,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send email.')
      }

      setSuccess(true)
    } catch (err) {
      console.error(err)
      setError('Failed to submit via API. You can still email us directly at contact@neelstack.com.')
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center space-y-4">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <CheckCircle2 className="h-6 w-6 text-emerald-400" />
        </div>
        <h3 className="font-heading text-lg font-semibold text-foreground">Consultation Requested!</h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          Your request has been received. Our team will review the topic and reach out to you within 1 business day to confirm a time slot.
        </p>
        <div className="pt-2">
          <Button type="button" variant="outline" size="sm" onClick={() => setSuccess(false)}>
            Book another session
          </Button>
        </div>
      </div>
    )
  }

  const inputStyle =
    'w-full rounded-xl border border-border/80 bg-card/70 backdrop-blur-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary focus:bg-card [&:not(:placeholder-shown)]:border-primary/40 [&:not(:placeholder-shown)]:bg-card/90 shadow-sm hover:border-border'

  return (
    <div className="rounded-2xl border border-border bg-black/10 backdrop-blur-xl p-8">
      <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
        Schedule Your Call
      </h3>

      <form
        className="space-y-5"
        onSubmit={handleSubmit}
        onChange={(e) => checkAutoClearError(e.currentTarget)}
        noValidate
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="c-first-name" className="block text-sm font-medium text-foreground mb-1.5">
              First Name <span aria-hidden="true" className="text-destructive">*</span>
            </label>
            <input
              id="c-first-name"
              name="first-name"
              type="text"
              required
              autoComplete="given-name"
              placeholder="e.g. Priya"
              className={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="c-last-name" className="block text-sm font-medium text-foreground mb-1.5">
              Last Name <span aria-hidden="true" className="text-destructive">*</span>
            </label>
            <input
              id="c-last-name"
              name="last-name"
              type="text"
              required
              autoComplete="family-name"
              placeholder="e.g. Patel"
              className={inputStyle}
            />
          </div>
        </div>

        <div>
          <label htmlFor="c-email" className="block text-sm font-medium text-foreground mb-1.5">
            Email Address <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <input
            id="c-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="e.g. priya@domain.com"
            className={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="c-topic" className="block text-sm font-medium text-foreground mb-1.5">
            What would you like to discuss? <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <textarea
            id="c-topic"
            name="topic"
            required
            rows={4}
            placeholder="e.g. Brief description of your project requirements or questions..."
            className={`${inputStyle} resize-none`}
          />
        </div>

        {/* Preferred time note */}
        <div className="rounded-xl border border-border bg-muted/40 px-4 py-3">
          <p className="text-xs text-muted-foreground leading-relaxed">
            After submitting, our team will reach out within 1 business day to confirm a
            time slot that works for you. Sessions are available{' '}
            <span className="font-medium text-foreground">Mon – Sat, 9 AM – 7 PM IST</span>.
          </p>
        </div>

        {/* Validation Error Banner directly above Submit button */}
        {error && (
          <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-3.5 flex items-center gap-3 text-destructive animate-in fade-in slide-in-from-bottom-2">
            <AlertCircle className="h-4.5 w-4.5 shrink-0" />
            <p className="text-xs font-semibold leading-normal">{error}</p>
          </div>
        )}

        <Button type="submit" size="lg" className="w-full" disabled={submitting}>
          {submitting ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Requesting...
            </>
          ) : (
            'Request Consultation'
          )}
        </Button>

        <p className="text-[11px] text-muted-foreground text-center mt-3 leading-relaxed">
          By submitting this form, you consent to our processing of your details according to our{' '}
          <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
        </p>

        <p className="text-xs text-muted-foreground text-center mt-3">
          Using webmail? Click to <CopyEmailButton />.
        </p>
      </form>
    </div>
  )
}
