'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CopyEmailButton } from '@/components/ui/copy-email-button'
import { CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react'

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
              placeholder="Rajesh"
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
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
              placeholder="Sharma"
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
            />
          </div>
        </div>

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
            placeholder="rajesh@company.com"
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
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
            placeholder="Acme Corp"
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
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
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
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
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
            Message <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project, timeline, and budget..."
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
          />
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

        <p className="text-xs text-muted-foreground text-center mt-4">
          We respond within 1 business day. Using webmail? Click to <CopyEmailButton />.
        </p>
      </form>
    </div>
  )
}
