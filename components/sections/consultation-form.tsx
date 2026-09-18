'use client'

import React, { useState, useRef, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { CopyEmailButton } from '@/components/ui/copy-email-button'
import { CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react'
import { validateConsultationForm, isValidEmail } from '@/lib/validation'

function ConsultationFormInner() {
  const searchParams = useSearchParams()
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const [formDataState, setFormDataState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    topic: '',
  })

  // Dynamically sync incoming query parameters with topic discussion
  useEffect(() => {
    const serviceParam = searchParams.get('service')?.toLowerCase()
    const topicParam = searchParams.get('topic')
    const subjectParam = searchParams.get('subject')

    if (topicParam || subjectParam || serviceParam) {
      setFormDataState((prev) => {
        if (prev.topic) return prev

        let initialTopic = topicParam || subjectParam || ''
        if (!initialTopic && serviceParam) {
          if (serviceParam.includes('dhruva')) {
            initialTopic = 'DhruvaOS Institutional School Operating System Architecture & Pilot Onboarding'
          } else if (serviceParam.includes('ai') || serviceParam.includes('agent')) {
            initialTopic = 'AI Application Development & Autonomous Agent Architecture Strategy'
          } else if (serviceParam.includes('web') || serviceParam.includes('saas')) {
            initialTopic = 'Modern Web Applications & Multi-Tenant SaaS System Architecture'
          } else if (serviceParam.includes('custom') || serviceParam.includes('backend')) {
            initialTopic = 'Custom Software Architecture & High-Throughput Backend Systems'
          } else if (serviceParam.includes('performance') || serviceParam.includes('optimization')) {
            initialTopic = 'Full-Stack Performance Optimization & UX Speed Audit'
          } else {
            initialTopic = `Enterprise Architecture Strategy Consultation (${serviceParam})`
          }
        }

        return { ...prev, topic: initialTopic }
      })
    }
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

    const validationResult = validateConsultationForm(formDataState)

    if (!validationResult.isValid) {
      setFieldErrors(validationResult.errors)
      const firstErrorField = Object.keys(validationResult.errors)[0]
      setError('Please fill in all mandatory fields highlighted below.')

      const invalidElement = formRef.current?.querySelector<HTMLElement>(`[name="${firstErrorField === 'firstName' ? 'first-name' : firstErrorField === 'lastName' ? 'last-name' : firstErrorField}"]`)
      if (invalidElement) {
        invalidElement.focus({ preventScroll: false })
        invalidElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return
    }

    setSubmitting(true)
    setFieldErrors({})

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'consultation',
          name: `${formDataState.firstName.trim()} ${formDataState.lastName.trim()}`,
          email: formDataState.email.trim(),
          phone: formDataState.phone.trim() || 'Not provided',
          topic: formDataState.topic.trim(),
        }),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit consultation request.')
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
        : 'border-border bg-card/90 focus:border-primary focus:ring-primary/25 [&:not(:placeholder-shown)]:border-primary/40'
    } backdrop-blur-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:bg-card shadow-sm hover:border-primary/30`
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
        <h3 className="font-heading text-xl font-bold text-foreground">Consultation Requested!</h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          Your request has been received. Our team will review the topic and reach out to you within 1 business day to confirm a time slot.
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
                phone: '',
                topic: '',
              })
              setTimeout(() => {
                firstInputRef.current?.focus({ preventScroll: true })
              }, 100)
            }}
          >
            Book another session
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={formContainerRef}
      id="consultation-form"
      className="scroll-mt-28 relative overflow-hidden rounded-3xl border border-border bg-card dark:bg-[#0b1329] p-6 sm:p-8 md:p-10 shadow-xl transition-all duration-300"
    >
      {/* Subtle emerald/cyan top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400" />

      <h3 className="font-heading text-xl font-bold text-foreground mb-6">
        Schedule Your Free Call
      </h3>

      <form
        ref={formRef}
        className="space-y-5"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="c-first-name" className="block text-sm font-medium text-foreground mb-1.5">
              First Name <span aria-hidden="true" className="text-red-500 font-bold">*</span>
            </label>
            <input
              ref={firstInputRef}
              id="c-first-name"
              name="firstName"
              type="text"
              required
              aria-required="true"
              aria-invalid={!!fieldErrors.firstName}
              value={formDataState.firstName}
              onChange={(e) => handleFieldChange('firstName', e.target.value)}
              autoComplete="given-name"
              placeholder="e.g. Priya"
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
            <label htmlFor="c-last-name" className="block text-sm font-medium text-foreground mb-1.5">
              Last Name <span aria-hidden="true" className="text-red-500 font-bold">*</span>
            </label>
            <input
              id="c-last-name"
              name="lastName"
              type="text"
              required
              aria-required="true"
              aria-invalid={!!fieldErrors.lastName}
              value={formDataState.lastName}
              onChange={(e) => handleFieldChange('lastName', e.target.value)}
              autoComplete="family-name"
              placeholder="e.g. Patel"
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

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="c-email" className="block text-sm font-medium text-foreground mb-1.5">
              Email Address <span aria-hidden="true" className="text-red-500 font-bold">*</span>
            </label>
            <input
              id="c-email"
              name="email"
              type="email"
              required
              aria-required="true"
              aria-invalid={!!fieldErrors.email}
              value={formDataState.email}
              onChange={(e) => handleFieldChange('email', e.target.value)}
              autoComplete="email"
              placeholder="e.g. priya@domain.com"
              className={getInputClass('email')}
            />
            {fieldErrors.email && (
              <p className="text-xs text-red-500 font-medium flex items-center gap-1.5 mt-1.5 animate-in fade-in duration-200">
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                <span>{fieldErrors.email}</span>
              </p>
            )}
          </div>
          <div>
            <label htmlFor="c-phone" className="block text-sm font-medium text-foreground mb-1.5">
              Phone / WhatsApp <span className="text-xs text-muted-foreground font-normal">(optional)</span>
            </label>
            <input
              id="c-phone"
              name="phone"
              type="tel"
              value={formDataState.phone}
              onChange={(e) => handleFieldChange('phone', e.target.value)}
              autoComplete="tel"
              placeholder="e.g. +91 98765 43210"
              className={getInputClass('phone')}
            />
          </div>
        </div>

        <div>
          <label htmlFor="c-topic" className="block text-sm font-medium text-foreground mb-1.5">
            What would you like to discuss? <span aria-hidden="true" className="text-red-500 font-bold">*</span>
          </label>
          <textarea
            id="c-topic"
            name="topic"
            required
            aria-required="true"
            aria-invalid={!!fieldErrors.topic}
            value={formDataState.topic}
            onChange={(e) => handleFieldChange('topic', e.target.value)}
            rows={4}
            placeholder="e.g. Brief description of your project requirements or questions..."
            className={`${getInputClass('topic')} resize-none`}
          />
          {fieldErrors.topic && (
            <p className="text-xs text-red-500 font-medium flex items-center gap-1.5 mt-1.5 animate-in fade-in duration-200">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{fieldErrors.topic}</span>
            </p>
          )}
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

        <div className="flex flex-col sm:flex-row items-center justify-center pt-2">
          <Button
            type="submit"
            variant="3d-yellow"
            size="lg"
            className="w-full sm:w-auto min-w-[260px] h-12 px-8 rounded-xl text-sm sm:text-base font-extrabold shadow-md flex items-center justify-center"
            disabled={submitting}
          >
            {submitting ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Requesting...
              </>
            ) : (
              'Request Free Consultation Call'
            )}
          </Button>
        </div>

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

export function ConsultationForm() {
  return (
    <Suspense fallback={<div className="h-96 rounded-3xl border border-border bg-card/50 animate-pulse" />}>
      <ConsultationFormInner />
    </Suspense>
  )
}

