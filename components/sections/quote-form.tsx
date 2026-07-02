'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CopyEmailButton } from '@/components/ui/copy-email-button'
import { CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react'

const PROJECT_TYPES = [
  'Custom Software Development',
  'AI / Machine Learning Integration',
  'Product Design & Strategy',
  'Technical Partnership Request',
  'General Partnership Inquiry',
  'Other Inquiries',
]

const BUDGET_RANGES = [
  'Less than $5,000',
  '$5,000 - $15,000',
  '$15,000 - $35,000',
  '$35,000+',
]

const TIMELINES = [
  'Urgent (Less than 1 month)',
  '1 - 3 months',
  '3 - 6 months',
  'Flexible (6+ months)',
]

export function QuoteForm() {
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
    const projectType = formData.get('project-type') as string
    const budget = formData.get('budget') as string
    const timeline = formData.get('timeline') as string
    const description = formData.get('description') as string

    if (!firstName || !lastName || !email || !projectType || !description) {
      setError('Please fill in all required fields.')
      setSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'quote',
          name: `${firstName} ${lastName}`,
          email,
          company,
          projectType,
          budget,
          timeline,
          description,
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
        <h3 className="font-heading text-lg font-semibold text-foreground">Quote Request Received!</h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          Thank you for request. We have received your project details. Our solutions architect will review the requirements and respond within 3–5 business days with a detailed proposal.
        </p>
        <div className="pt-2">
          <Button type="button" variant="outline" size="sm" onClick={() => setSuccess(false)}>
            Submit another request
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
      {error && (
        <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4 mb-6 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">{error}</p>
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        {/* Contact details */}
        <fieldset>
          <legend className="font-heading text-base font-semibold text-foreground mb-4">
            Your Details
          </legend>
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="q-first-name" className="block text-sm font-medium text-foreground mb-1.5">
                  First Name <span aria-hidden="true" className="text-destructive">*</span>
                </label>
                <input id="q-first-name" name="first-name" type="text" required autoComplete="given-name"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label htmlFor="q-last-name" className="block text-sm font-medium text-foreground mb-1.5">
                  Last Name <span aria-hidden="true" className="text-destructive">*</span>
                </label>
                <input id="q-last-name" name="last-name" type="text" required autoComplete="family-name"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>
            <div>
              <label htmlFor="q-email" className="block text-sm font-medium text-foreground mb-1.5">
                Work Email <span aria-hidden="true" className="text-destructive">*</span>
              </label>
              <input id="q-email" name="email" type="email" required autoComplete="email"
                placeholder="you@company.com"
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="q-company" className="block text-sm font-medium text-foreground mb-1.5">
                  Company
                </label>
                <input id="q-company" name="company" type="text" autoComplete="organization"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label htmlFor="q-phone" className="block text-sm font-medium text-foreground mb-1.5">
                  Phone
                </label>
                <input id="q-phone" name="phone" type="tel" autoComplete="tel"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>
          </div>
        </fieldset>

        <hr className="border-border" aria-hidden="true" />

        {/* Project details */}
        <fieldset>
          <legend className="font-heading text-base font-semibold text-foreground mb-4">
            Project Details
          </legend>
          <div className="space-y-4">
            <div>
              <label htmlFor="q-type" className="block text-sm font-medium text-foreground mb-1.5">
                Project Type <span aria-hidden="true" className="text-destructive">*</span>
              </label>
              <select id="q-type" name="project-type" required
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="">Select project type</option>
                {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="q-budget" className="block text-sm font-medium text-foreground mb-1.5">
                Estimated Budget
              </label>
              <select id="q-budget" name="budget"
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="">Select budget range</option>
                {BUDGET_RANGES.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="q-timeline" className="block text-sm font-medium text-foreground mb-1.5">
                Expected Timeline
              </label>
              <select id="q-timeline" name="timeline"
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="">Select timeline</option>
                {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="q-description" className="block text-sm font-medium text-foreground mb-1.5">
                Project Description <span aria-hidden="true" className="text-destructive">*</span>
              </label>
              <textarea id="q-description" name="description" required rows={6}
                placeholder="Describe your project, the problem you are solving, and any specific requirements or constraints..."
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none animate-none" />
            </div>
          </div>
        </fieldset>

        <Button type="submit" size="lg" className="w-full" disabled={submitting}>
          {submitting ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Request'
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center mt-4">
          We will review your request and respond within 3–5 business days. Using webmail? Click to <CopyEmailButton />.
        </p>
      </form>
    </div>
  )
}
