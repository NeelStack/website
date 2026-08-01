'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CopyEmailButton } from '@/components/ui/copy-email-button'
import { CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react'
import { useCurrency } from '@/components/providers/currency-provider'

const INQUIRY_TYPES = [
  'Custom Software Development',
  'AI / Intelligent Systems Integration',
  'Product Design & Strategy',
  'Technical Partnership Request',
  'General Partnership Inquiry',
  'Other Inquiries',
]

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { config } = useCurrency()

  const budgetOptions = config.budgetRanges
    ? config.budgetRanges.map((b) => ({ value: b.id, label: b.label }))
    : [
        { value: 'under-1000', label: config.formatOptions.under100 },
        { value: '1000-5000', label: config.formatOptions.range100To1000 },
        { value: '5000-15000', label: config.formatOptions.range1000To5000 },
        { value: '15000-plus', label: config.formatOptions.above5000 },
      ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const firstName = formData.get('first-name') as string
    const lastName = formData.get('last-name') as string
    const email = formData.get('email') as string
    const company = formData.get('company') as string
    const inquiryType = formData.get('inquiry-type') as string
    const budget = formData.get('budget') as string
    const message = formData.get('message') as string

    if (!firstName || !lastName || !email || !inquiryType || !message) {
      setError('Please fill in all required fields.')
      setSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'general',
          name: `${firstName} ${lastName}`,
          email,
          company,
          service: inquiryType,
          budget,
          message,
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

  const inputStyle =
    'w-full rounded-xl border border-input/60 bg-muted/10 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/35 placeholder:italic transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:border-cyan-500/60 focus:bg-background [&:not(:placeholder-shown)]:border-cyan-500/40 [&:not(:placeholder-shown)]:bg-cyan-500/[0.04] [&:not(:placeholder-shown)]:font-semibold shadow-sm'
  const selectStyle =
    'w-full rounded-xl border border-input/60 bg-muted/10 px-4 py-2.5 text-sm text-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:border-cyan-500/60 focus:bg-background cursor-pointer shadow-sm font-medium'

  if (success) {
    return (
      <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center space-y-4">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <CheckCircle2 className="h-6 w-6 text-emerald-400" />
        </div>
        <h3 className="font-heading text-lg font-semibold text-foreground">Message Received!</h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          Thank you for reaching out. We have logged your inquiry and will review the details. Our engineering lead will get back to you within 1 business day.
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
    <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
      <h3 className="font-heading text-xl font-bold text-foreground mb-6">Send us a Message</h3>
      
      {error && (
        <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4 mb-6 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">{error}</p>
        </div>
      )}

      <form className="space-y-5" aria-label="Contact form" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-foreground mb-1.5">
              First Name <span aria-hidden="true" className="text-destructive">*</span>
            </label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              required
              autoComplete="given-name"
              placeholder="e.g. Rajesh"
              className={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-foreground mb-1.5">
              Last Name <span aria-hidden="true" className="text-destructive">*</span>
            </label>
            <input
              id="last-name"
              name="last-name"
              type="text"
              required
              autoComplete="family-name"
              placeholder="e.g. Sharma"
              className={inputStyle}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
            Email Address <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="e.g. rajesh@domain.com"
            className={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">
            Company / Organization / Institution
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="e.g. Acme Tech Solutions"
            className={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="inquiry-type" className="block text-sm font-medium text-foreground mb-1.5">
            What can we help you with? <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <select
            id="inquiry-type"
            name="inquiry-type"
            required
            className={selectStyle}
          >
            <option value="">Select an inquiry type</option>
            {INQUIRY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-1.5">
            Estimated Budget Range ({config.code})
          </label>
          <select
            id="budget"
            name="budget"
            className={selectStyle}
          >
            <option value="">Select budget range (optional)</option>
            {budgetOptions.map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
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
            placeholder="e.g. Tell us about your project, target audience, timeline, and goals..."
            className={`${inputStyle} resize-none`}
          />
        </div>

        {/* Response SLA Callout Banner */}
        <div className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-medium">
          <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Guarantee: Our senior technical team responds within 1 business day.</span>
        </div>

        <Button type="submit" size="lg" className="w-full" disabled={submitting}>
          {submitting ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            'Send Message'
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
