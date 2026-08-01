'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { CopyEmailButton } from '@/components/ui/copy-email-button'
import { CheckCircle2, AlertCircle, RefreshCw, DollarSign } from 'lucide-react'
import { useCurrency } from '@/components/providers/currency-provider'

const PROJECT_TYPES = [
  'Custom Software Development',
  'AI / Machine Learning Integration',
  'Web Application & SaaS Engineering',
  'Mobile Application Development',
  'Website Performance & UX Audit',
  'Technical Strategy & Architecture',
  'Other',
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
    const projectType = formData.get('project-type') as string
    const budgetValue = formData.get('budget') as string
    const timeline = formData.get('timeline') as string
    const description = formData.get('description') as string

    if (!firstName || !lastName || !email || !projectType || !description) {
      setError('Please fill in all required fields.')
      setSubmitting(false)
      return
    }

    const selectedOption = budgetOptions.find((b) => b.value === budgetValue)
    const budgetLabel = selectedOption
      ? `${selectedOption.label} (${config.code})`
      : budgetValue

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
          budget: budgetLabel,
          currency: config.code,
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
        <h3 className="font-heading text-lg font-semibold text-foreground">Quote Request Received!</h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          Thank you for your request. Our senior engineering team will review your requirements and respond within 1 business day with a detailed architecture proposal and estimate.
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
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 md:p-10 shadow-lg">
      <div className="pb-6 mb-6 border-b border-border/60">
        <h3 className="font-heading text-lg font-bold text-foreground">Get a Custom Project Estimate</h3>
        <p className="text-xs text-muted-foreground mt-0.5">Fill out your project brief for a response within 1 business day.</p>
      </div>

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
                <input
                  id="q-first-name"
                  name="first-name"
                  type="text"
                  required
                  autoComplete="given-name"
                  placeholder="e.g. John"
                  className={inputStyle}
                />
              </div>
              <div>
                <label htmlFor="q-last-name" className="block text-sm font-medium text-foreground mb-1.5">
                  Last Name <span aria-hidden="true" className="text-destructive">*</span>
                </label>
                <input
                  id="q-last-name"
                  name="last-name"
                  type="text"
                  required
                  autoComplete="family-name"
                  placeholder="e.g. Doe"
                  className={inputStyle}
                />
              </div>
            </div>
            <div>
              <label htmlFor="q-email" className="block text-sm font-medium text-foreground mb-1.5">
                Email Address <span aria-hidden="true" className="text-destructive">*</span>
              </label>
              <input
                id="q-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="e.g. john@company.com"
                className={inputStyle}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="q-company" className="block text-sm font-medium text-foreground mb-1.5">
                  Company / Organization / Institution
                </label>
                <input
                  id="q-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="e.g. Acme Tech Solutions"
                  className={inputStyle}
                />
              </div>
              <div>
                <label htmlFor="q-phone" className="block text-sm font-medium text-foreground mb-1.5">
                  Phone
                </label>
                <input
                  id="q-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="e.g. +1 (555) 019-2834"
                  className={inputStyle}
                />
              </div>
            </div>
          </div>
        </fieldset>

        <hr className="border-border/60" aria-hidden="true" />

        {/* Project details */}
        <fieldset>
          <legend className="font-heading text-base font-semibold text-foreground mb-4">
            Project &amp; Budget Brief
          </legend>
          <div className="space-y-4">
            <div>
              <label htmlFor="q-type" className="block text-sm font-medium text-foreground mb-1.5">
                Project Type <span aria-hidden="true" className="text-destructive">*</span>
              </label>
              <select id="q-type" name="project-type" required className={selectStyle}>
                <option value="">Select project type</option>
                {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            {/* Dynamic Currency converted budget options from JSON */}
            <div>
              <label htmlFor="q-budget" className="block text-sm font-medium text-foreground mb-1.5">
                Estimated Budget ({config.code})
              </label>
              <select id="q-budget" name="budget" className={selectStyle}>
                <option value="">Select estimated budget</option>
                {budgetOptions.map((b) => (
                  <option key={b.value} value={b.value}>
                    {b.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="q-timeline" className="block text-sm font-medium text-foreground mb-1.5">
                Expected Timeline
              </label>
              <select id="q-timeline" name="timeline" className={selectStyle}>
                <option value="">Select timeline</option>
                {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <div>
              <label htmlFor="q-description" className="block text-sm font-medium text-foreground mb-1.5">
                Project Description <span aria-hidden="true" className="text-destructive">*</span>
              </label>
              <textarea
                id="q-description"
                name="description"
                required
                rows={5}
                placeholder="e.g. We need an AI-powered SaaS web application with custom real-time data pipelines..."
                className={`${inputStyle} resize-none`}
              />
            </div>
          </div>
        </fieldset>

        {/* SLA Guarantee callout */}
        <div className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs sm:text-sm text-emerald-400 font-medium">
          <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Guarantee: We review every proposal brief and respond within 1 business day.</span>
        </div>

        <Button type="submit" size="lg" variant="gradient" className="w-full glow-cta" disabled={submitting}>
          {submitting ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Submitting Proposal Brief...
            </>
          ) : (
            'Submit Quote Request'
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
