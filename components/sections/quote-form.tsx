'use client'

import React, { useState, useRef, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { CopyEmailButton } from '@/components/ui/copy-email-button'
import { CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react'
import { useCurrency } from '@/components/providers/currency-provider'
import { validateQuoteForm, isValidEmail } from '@/lib/validation'

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

function QuoteFormInner() {
  const searchParams = useSearchParams()
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const { config } = useCurrency()

  const [formDataState, setFormDataState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
  })

  // Dynamically sync query parameters from services or engagement CTA buttons
  useEffect(() => {
    const serviceParam = searchParams.get('service')?.toLowerCase()
    const projectTypeParam = searchParams.get('projectType')
    const engagementParam = searchParams.get('engagement')?.toLowerCase()
    const budgetParam = searchParams.get('budget')
    const timelineParam = searchParams.get('timeline')

    setFormDataState((prev) => {
      let nextProjectType = prev.projectType
      let nextTimeline = prev.timeline
      let nextDescription = prev.description

      if (projectTypeParam && PROJECT_TYPES.includes(projectTypeParam)) {
        nextProjectType = projectTypeParam
      } else if (serviceParam) {
        if (serviceParam.includes('ai') || serviceParam.includes('agent') || serviceParam.includes('automation')) {
          nextProjectType = 'AI / Machine Learning Integration'
        } else if (serviceParam.includes('web') || serviceParam.includes('saas')) {
          nextProjectType = 'Web Application & SaaS Engineering'
        } else if (serviceParam.includes('performance') || serviceParam.includes('optimization')) {
          nextProjectType = 'Website Performance & UX Audit'
        } else if (serviceParam.includes('consulting') || serviceParam.includes('strategy')) {
          nextProjectType = 'Technical Strategy & Architecture'
        } else if (serviceParam.includes('mobile') || serviceParam.includes('app')) {
          nextProjectType = 'Mobile Application Development'
        } else {
          nextProjectType = 'Custom Software Development'
        }
      }

      if (engagementParam === 'fixed-sprint') {
        nextTimeline = '1 - 3 months'
        if (!nextDescription) {
          nextDescription = 'We would like to scope a 2-4 week Fixed-Scope MVP Sprint for rapid prototype delivery.'
        }
      } else if (engagementParam === 'dedicated-pod') {
        nextTimeline = 'Flexible (6+ months)'
        if (!nextDescription) {
          nextDescription = 'We are interested in booking a Dedicated Embedded Engineering Pod for ongoing development.'
        }
      } else if (engagementParam === 'enterprise-migration') {
        nextTimeline = '3 - 6 months'
        if (!nextDescription) {
          nextDescription = 'We are planning an Enterprise Modernization & Architecture Migration project.'
        }
      }

      if (timelineParam && TIMELINES.includes(timelineParam)) {
        nextTimeline = timelineParam
      }

      return {
        ...prev,
        projectType: nextProjectType || prev.projectType,
        timeline: nextTimeline || prev.timeline,
        budget: budgetParam || prev.budget,
        description: nextDescription || prev.description,
      }
    })
  }, [searchParams])

  const formRef = useRef<HTMLFormElement>(null)
  const firstInputRef = useRef<HTMLInputElement>(null)
  const formContainerRef = useRef<HTMLDivElement>(null)
  const successCardRef = useRef<HTMLDivElement>(null)
  const errorBannerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to success message when submitted
  useEffect(() => {
    if (success && successCardRef.current) {
      const timer = setTimeout(() => {
        const headerOffset = 110
        const elementPosition = successCardRef.current?.getBoundingClientRect().top ?? 0
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth',
        })
        successCardRef.current?.focus({ preventScroll: true })
      }, 60)
      return () => clearTimeout(timer)
    }
  }, [success])

  // Auto-scroll to error banner or first invalid field
  useEffect(() => {
    if (error && errorBannerRef.current) {
      errorBannerRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [error])

  const budgetOptions = config.budgetRanges
    ? config.budgetRanges.map((b) => ({ value: b.id, label: b.label }))
    : [
        { value: 'under-1000', label: config.formatOptions.under100 },
        { value: '1000-5000', label: config.formatOptions.range100To1000 },
        { value: '5000-15000', label: config.formatOptions.range1000To5000 },
        { value: '15000-plus', label: config.formatOptions.above5000 },
      ]

  const handleFieldChange = (field: string, value: string) => {
    setFormDataState((prev) => ({ ...prev, [field]: value }))

    if (fieldErrors[field]) {
      const isFieldNowValid = field === 'email' ? isValidEmail(value) : value.trim().length > 0
      if (isFieldNowValid) {
        setFieldErrors((prev) => {
          const next = { ...prev }
          delete next[field]
          if (Object.keys(next).length === 0) {
            setError(null)
          }
          return next
        })
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    const validationResult = validateQuoteForm(formDataState)

    if (!validationResult.isValid) {
      setFieldErrors(validationResult.errors)
      const firstErrorField = Object.keys(validationResult.errors)[0]
      setError('Please fill in all mandatory fields highlighted below.')

      const invalidElement = formRef.current?.querySelector<HTMLElement>(`[name="${firstErrorField === 'firstName' ? 'first-name' : firstErrorField === 'lastName' ? 'last-name' : firstErrorField === 'projectType' ? 'project-type' : firstErrorField}"]`)
      if (invalidElement) {
        invalidElement.focus({ preventScroll: false })
        invalidElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return
    }

    setSubmitting(true)
    setFieldErrors({})

    const selectedOption = budgetOptions.find((b) => b.value === formDataState.budget)
    const budgetLabel = selectedOption
      ? `${selectedOption.label} (${config.code})`
      : formDataState.budget || 'Flexible'

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'quote',
          name: `${formDataState.firstName.trim()} ${formDataState.lastName.trim()}`,
          email: formDataState.email.trim(),
          company: formDataState.company.trim() || 'Not provided',
          projectType: formDataState.projectType.trim(),
          budget: budgetLabel,
          currency: config.code,
          timeline: formDataState.timeline || 'Flexible',
          description: formDataState.description.trim(),
        }),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit quote request.')
      }

      setSuccess(true)
    } catch (err: any) {
      console.error(err)
      setError(err?.message || 'Failed to submit via API. You can still email us directly at contact@neelstack.com.')
    } finally {
      setSubmitting(false)
    }
  }

  const getInputClass = (fieldName: string) => {
    const hasError = !!fieldErrors[fieldName]
    return `w-full rounded-xl border ${
      hasError
        ? 'border-red-500/80 bg-red-500/[0.04] focus:ring-red-500/30 focus:border-red-500'
        : 'border-border/80 bg-card/70 focus:border-primary focus:ring-primary/25 [&:not(:placeholder-shown)]:border-primary/40 [&:not(:placeholder-shown)]:bg-card/90'
    } backdrop-blur-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:bg-card shadow-sm hover:border-border`
  }

  const getSelectClass = (fieldName: string) => {
    const hasError = !!fieldErrors[fieldName]
    return `w-full rounded-xl border ${
      hasError
        ? 'border-red-500/80 bg-red-500/[0.04] focus:ring-red-500/30 focus:border-red-500'
        : 'border-border/80 bg-card/70 focus:border-primary focus:ring-primary/25'
    } backdrop-blur-sm px-4 py-2.5 text-sm text-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:bg-card cursor-pointer shadow-sm font-medium hover:border-border`
  }

  if (success) {
    return (
      <div
        ref={successCardRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center space-y-4 shadow-xl backdrop-blur-md outline-none animate-in fade-in zoom-in-95 duration-300"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/30">
          <CheckCircle2 className="h-7 w-7 text-emerald-400" />
        </div>
        <h3 className="font-heading text-xl font-bold text-foreground">Quote Request Received!</h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          Thank you for your request. Our senior engineering team will review your requirements and respond within 1 business day with a detailed architecture proposal and estimate.
        </p>
        <div className="pt-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              setSuccess(false)
              setFormDataState({
                firstName: '',
                lastName: '',
                email: '',
                company: '',
                phone: '',
                projectType: '',
                budget: '',
                timeline: '',
                description: '',
              })
              setTimeout(() => {
                firstInputRef.current?.focus({ preventScroll: true })
              }, 100)
            }}
          >
            Submit another request
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={formContainerRef}
      id="quote-form"
      className="scroll-mt-28 relative overflow-hidden rounded-3xl border border-border bg-card dark:bg-[#0b1329] p-6 sm:p-8 md:p-10 shadow-xl transition-all duration-300"
    >
      {/* Subtle violet/cyan ambient accent top bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400" />

      <div className="pb-6 mb-6 border-b border-border/60">
        <h3 className="font-heading text-lg font-bold text-foreground">Get a Custom Project Estimate</h3>
        <p className="text-xs text-muted-foreground mt-0.5">Fill out your project brief for a response within 1 business day.</p>
      </div>

      <form
        ref={formRef}
        className="space-y-6"
        onSubmit={handleSubmit}
        noValidate
      >
        {/* Contact details */}
        <fieldset>
          <legend className="font-heading text-base font-semibold text-foreground mb-4">
            Your Details
          </legend>
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="q-first-name" className="block text-sm font-medium text-foreground mb-1.5">
                  First Name <span aria-hidden="true" className="text-red-500 font-bold">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  id="q-first-name"
                  name="firstName"
                  type="text"
                  required
                  aria-required="true"
                  aria-invalid={!!fieldErrors.firstName}
                  value={formDataState.firstName}
                  onChange={(e) => handleFieldChange('firstName', e.target.value)}
                  autoComplete="given-name"
                  placeholder="e.g. John"
                  className={getInputClass('firstName')}
                />
                {fieldErrors.firstName && (
                  <p className="text-xs text-red-500 font-medium flex items-center gap-1.5 mt-1.5 animate-in fade-in duration-200">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                    <span>{fieldErrors.firstName}</span>
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="q-last-name" className="block text-sm font-medium text-foreground mb-1.5">
                  Last Name <span aria-hidden="true" className="text-red-500 font-bold">*</span>
                </label>
                <input
                  id="q-last-name"
                  name="lastName"
                  type="text"
                  required
                  aria-required="true"
                  aria-invalid={!!fieldErrors.lastName}
                  value={formDataState.lastName}
                  onChange={(e) => handleFieldChange('lastName', e.target.value)}
                  autoComplete="family-name"
                  placeholder="e.g. Doe"
                  className={getInputClass('lastName')}
                />
                {fieldErrors.lastName && (
                  <p className="text-xs text-red-500 font-medium flex items-center gap-1.5 mt-1.5 animate-in fade-in duration-200">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                    <span>{fieldErrors.lastName}</span>
                  </p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="q-email" className="block text-sm font-medium text-foreground mb-1.5">
                Email Address <span aria-hidden="true" className="text-red-500 font-bold">*</span>
              </label>
              <input
                id="q-email"
                name="email"
                type="email"
                required
                aria-required="true"
                aria-invalid={!!fieldErrors.email}
                value={formDataState.email}
                onChange={(e) => handleFieldChange('email', e.target.value)}
                autoComplete="email"
                placeholder="e.g. john@company.com"
                className={getInputClass('email')}
              />
              {fieldErrors.email && (
                <p className="text-xs text-red-500 font-medium flex items-center gap-1.5 mt-1.5 animate-in fade-in duration-200">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>{fieldErrors.email}</span>
                </p>
              )}
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
                  value={formDataState.company}
                  onChange={(e) => handleFieldChange('company', e.target.value)}
                  autoComplete="organization"
                  placeholder="e.g. Acme Tech Solutions"
                  className={getInputClass('company')}
                />
              </div>
              <div>
                <label htmlFor="q-phone" className="block text-sm font-medium text-foreground mb-1.5">
                  Phone <span className="text-xs text-muted-foreground font-normal">(optional)</span>
                </label>
                <input
                  id="q-phone"
                  name="phone"
                  type="tel"
                  value={formDataState.phone}
                  onChange={(e) => handleFieldChange('phone', e.target.value)}
                  autoComplete="tel"
                  placeholder="e.g. +1 (555) 019-2834"
                  className={getInputClass('phone')}
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
                Project Type <span aria-hidden="true" className="text-red-500 font-bold">*</span>
              </label>
              <select
                id="q-type"
                name="projectType"
                required
                aria-required="true"
                aria-invalid={!!fieldErrors.projectType}
                value={formDataState.projectType}
                onChange={(e) => handleFieldChange('projectType', e.target.value)}
                className={getSelectClass('projectType')}
              >
                <option value="" className="bg-card text-foreground dark:bg-[#0c1220] dark:text-slate-100 py-2">Select project type</option>
                {PROJECT_TYPES.map((t) => <option key={t} value={t} className="bg-card text-foreground dark:bg-[#0c1220] dark:text-slate-100 py-2">{t}</option>)}
              </select>
              {fieldErrors.projectType && (
                <p className="text-xs text-red-500 font-medium flex items-center gap-1.5 mt-1.5 animate-in fade-in duration-200">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>{fieldErrors.projectType}</span>
                </p>
              )}
            </div>

            {/* Dynamic Currency converted budget options from JSON */}
            <div>
              <label htmlFor="q-budget" className="block text-sm font-medium text-foreground mb-1.5">
                Estimated Budget ({config.code})
              </label>
              <select
                id="q-budget"
                name="budget"
                value={formDataState.budget}
                onChange={(e) => handleFieldChange('budget', e.target.value)}
                className={getSelectClass('budget')}
              >
                <option value="" className="bg-card text-foreground dark:bg-[#0c1220] dark:text-slate-100 py-2">Select estimated budget</option>
                {budgetOptions.map((b) => (
                  <option key={b.value} value={b.value} className="bg-card text-foreground dark:bg-[#0c1220] dark:text-slate-100 py-2">
                    {b.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="q-timeline" className="block text-sm font-medium text-foreground mb-1.5">
                Expected Timeline
              </label>
              <select
                id="q-timeline"
                name="timeline"
                value={formDataState.timeline}
                onChange={(e) => handleFieldChange('timeline', e.target.value)}
                className={getSelectClass('timeline')}
              >
                <option value="" className="bg-card text-foreground dark:bg-[#0c1220] dark:text-slate-100 py-2">Select timeline</option>
                {TIMELINES.map((t) => <option key={t} value={t} className="bg-card text-foreground dark:bg-[#0c1220] dark:text-slate-100 py-2">{t}</option>)}
              </select>
            </div>

            <div>
              <label htmlFor="q-description" className="block text-sm font-medium text-foreground mb-1.5">
                Project Description <span aria-hidden="true" className="text-red-500 font-bold">*</span>
              </label>
              <textarea
                id="q-description"
                name="description"
                required
                aria-required="true"
                aria-invalid={!!fieldErrors.description}
                value={formDataState.description}
                onChange={(e) => handleFieldChange('description', e.target.value)}
                rows={5}
                placeholder="e.g. We need an AI-powered SaaS web application with custom real-time data pipelines..."
                className={`${getInputClass('description')} resize-none`}
              />
              {fieldErrors.description && (
                <p className="text-xs text-red-500 font-medium flex items-center gap-1.5 mt-1.5 animate-in fade-in duration-200">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>{fieldErrors.description}</span>
                </p>
              )}
            </div>
          </div>
        </fieldset>

        {/* SLA Guarantee callout */}
        <div className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs sm:text-sm text-emerald-400 font-medium">
          <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Guarantee: We review every proposal brief and respond within 1 business day.</span>
        </div>

        {/* Validation Error Banner directly above Submit button */}
        {error && (
          <div
            ref={errorBannerRef}
            tabIndex={-1}
            role="alert"
            className="rounded-xl border border-destructive/30 bg-destructive/10 p-3.5 flex items-center gap-3 text-destructive animate-in fade-in slide-in-from-bottom-2 outline-none"
          >
            <AlertCircle className="h-4.5 w-4.5 shrink-0" />
            <p className="text-xs font-semibold leading-normal">{error}</p>
          </div>
        )}

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

export function QuoteForm() {
  return (
    <Suspense fallback={<div className="h-96 rounded-3xl border border-border bg-card/50 animate-pulse" />}>
      <QuoteFormInner />
    </Suspense>
  )
}

