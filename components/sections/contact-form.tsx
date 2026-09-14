'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CopyEmailButton } from '@/components/ui/copy-email-button'
import { CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react'

const WHAT_DO_YOU_NEED_OPTIONS = [
  'Explore NeelStack Products (ToolVines, DhruvaOS, etc.)',
  'AI Systems & Autonomous Agent Architecture',
  'Software Development & Product Engineering',
  'Platform Architecture & Modern Web Applications',
  'Technical Partnership or Collaboration',
  'Other Inquiries',
]

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const checkAutoClearError = (form: HTMLFormElement) => {
    if (!error) return
    const formData = new FormData(form)
    const name = (formData.get('name') as string)?.trim()
    const email = (formData.get('email') as string)?.trim()
    const need = (formData.get('need') as string)?.trim()
    const message = (formData.get('message') as string)?.trim()

    if (name && email && need && message) {
      setError(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)
    const name = (formData.get('name') as string)?.trim()
    const company = (formData.get('company') as string)?.trim()
    const email = (formData.get('email') as string)?.trim()
    const phone = (formData.get('phone') as string)?.trim()
    const need = (formData.get('need') as string)?.trim()
    const message = (formData.get('message') as string)?.trim()

    if (!name || !email || !need || !message) {
      setError('Please fill in all required fields (Name, Work Email, What do you need, Message).')
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
          type: 'general',
          name,
          email,
          company: company || 'Not provided',
          phone: phone || 'Not provided',
          service: need,
          message,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send inquiry.')
      }

      setSuccess(true)
    } catch (err) {
      console.error(err)
      setError('Failed to submit via form. Please email us directly at contact@neelstack.com.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputStyle =
    'w-full rounded-xl border border-border/80 bg-card/70 backdrop-blur-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary focus:bg-card [&:not(:placeholder-shown)]:border-primary/40 [&:not(:placeholder-shown)]:bg-card/90 shadow-sm hover:border-border'
  const selectStyle =
    'w-full appearance-none rounded-xl border border-border/80 bg-card/70 backdrop-blur-sm px-4 py-2.5 text-sm text-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary focus:bg-card cursor-pointer shadow-sm font-medium hover:border-border'

  if (success) {
    return (
      <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center space-y-4">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <CheckCircle2 className="h-6 w-6 text-emerald-400" />
        </div>
        <h3 className="font-heading text-lg font-semibold text-foreground">Message Received!</h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          Thank you for reaching out. We have logged your inquiry and our team will review the details and get back to you within 1 business day.
        </p>
        <div className="pt-2">
          <Button type="button" variant="outline" size="sm" onClick={() => setSuccess(false)}>
            Send another message
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-border bg-card/70 dark:bg-black/10 backdrop-blur-xl p-8 md:p-10">
      <h3 className="font-heading text-xl font-bold text-foreground mb-6">Send Us a Message</h3>

      <form
        className="space-y-5"
        aria-label="Contact form"
        onSubmit={handleSubmit}
        onChange={(e) => checkAutoClearError(e.currentTarget)}
        noValidate
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
              Name <span aria-hidden="true" className="text-destructive">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="e.g. Shyam Chaurasiya"
              className={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">
              Company / Organization
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="e.g. Acme Tech or School Name"
              className={inputStyle}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
              Work Email <span aria-hidden="true" className="text-destructive">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="e.g. name@company.com"
              className={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
              Phone Number <span className="text-xs text-muted-foreground font-normal">(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="e.g. +91 98765 43210"
              className={inputStyle}
            />
          </div>
        </div>

        <div>
          <label htmlFor="need" className="block text-sm font-medium text-foreground mb-1.5">
            What do you need? <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <select
            id="need"
            name="need"
            required
            className={selectStyle}
          >
            <option value="">Select an option</option>
            {WHAT_DO_YOU_NEED_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
            Message <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your requirements, project scope, ideas, or questions..."
            className={`${inputStyle} resize-none`}
          />
        </div>

        {/* Response SLA Callout Banner */}
        <div className="flex items-center gap-3 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-xs sm:text-sm text-foreground font-medium">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          <span>We respond to all verified inquiries within 1 business day.</span>
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
              Sending...
            </>
          ) : (
            'Talk to NeelStack'
          )}
        </Button>

        <p className="text-[11px] text-muted-foreground text-center mt-3 leading-relaxed">
          By submitting this form, you consent to our processing of your details according to our{' '}
          <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
        </p>

        <p className="text-xs text-muted-foreground text-center mt-3">
          Prefer email directly? <CopyEmailButton />.
        </p>
      </form>
    </div>
  )
}

