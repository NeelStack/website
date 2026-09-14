'use client'

import React, { useState, useRef, useEffect, useCallback, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { CopyEmailButton } from '@/components/ui/copy-email-button'
import { CheckCircle2, AlertCircle, RefreshCw, School, Sparkles, Building2, Layers } from 'lucide-react'

const WHAT_DO_YOU_NEED_OPTIONS = [
  'Explore NeelStack Products (ToolVines, DhruvaOS, etc.)',
  'AI Systems & Autonomous Agent Architecture',
  'Software Development & Product Engineering',
  'Platform Architecture & Modern Web Applications',
  'Technical Partnership or Collaboration',
  'Other Inquiries',
]

const DHRUVA_ROLES = [
  'Principal',
  'School Owner / Director / Trustee',
  'Academic Coordinator / Vice Principal',
  'Administrator / Registrar',
  'IT Head / System Admin',
  'Other',
]

const DHRUVA_INSTITUTION_TYPES = [
  'K-12 School (CBSE Affiliated)',
  'K-12 School (ICSE Affiliated)',
  'State Board School',
  'Degree College / Higher Education',
  'Multi-Campus Educational Trust',
  'Coaching / Training Academy',
]

const DHRUVA_STUDENT_STRENGTHS = [
  'Under 500 Students',
  '500 – 1,500 Students',
  '1,500 – 3,000 Students',
  '3,000+ Students',
]

const DHRUVA_PRIORITY_MODULES = [
  'Fee Management & Parent Mobile App',
  'Biometric & Attendance Tracking',
  'AI Lesson Planner & Auto-Exam Generator',
  'Student Admissions & Web CMS',
  'Complete Unified EdOS / ERP Migration',
]

function ContactFormInner() {
  const searchParams = useSearchParams()
  const isDhruvaParam = searchParams.get('product') === 'dhruvaos' || 
                        searchParams.get('subject')?.toLowerCase().includes('dhruvaos')

  const [mode, setMode] = useState<'general' | 'dhruvaos'>(isDhruvaParam ? 'dhruvaos' : 'general')
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const firstInputRef = useRef<HTMLInputElement>(null)
  const formContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isDhruvaParam) {
      setMode('dhruvaos')
    }
  }, [isDhruvaParam])

  const focusFirstInput = useCallback(() => {
    setTimeout(() => {
      const input = formContainerRef.current?.querySelector<HTMLInputElement | HTMLTextAreaElement>(
        'input:not([type=hidden]):not([disabled]), textarea:not([disabled])'
      )
      input?.focus({ preventScroll: true })
    }, 150)
  }, [])

  useEffect(() => {
    // Smooth auto-scroll to form on arrival
    const timer = setTimeout(() => {
      if (formContainerRef.current) {
        const headerOffset = 90
        const elementPosition = formContainerRef.current.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth',
        })

        setTimeout(() => {
          firstInputRef.current?.focus({ preventScroll: true })
        }, 450)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [isDhruvaParam])

  const checkAutoClearError = (form: HTMLFormElement) => {
    if (!error) return
    const formData = new FormData(form)
    const name = (formData.get('name') as string)?.trim()
    const email = (formData.get('email') as string)?.trim()
    const message = (formData.get('message') as string)?.trim()

    if (mode === 'dhruvaos') {
      const institutionName = (formData.get('institutionName') as string)?.trim()
      const phone = (formData.get('phone') as string)?.trim()
      if (name && email && institutionName && phone && message) {
        setError(null)
      }
    } else {
      const need = (formData.get('need') as string)?.trim()
      if (name && email && need && message) {
        setError(null)
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    const name = (formData.get('name') as string)?.trim()
    const email = (formData.get('email') as string)?.trim()
    const phone = (formData.get('phone') as string)?.trim()
    const message = (formData.get('message') as string)?.trim()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      setError('Please enter a valid email address.')
      setSubmitting(false)
      return
    }

    if (!name || !message) {
      setError('Please fill in your name and message details.')
      setSubmitting(false)
      return
    }

    let payload: Record<string, string> = {}

    if (mode === 'dhruvaos') {
      const institutionName = (formData.get('institutionName') as string)?.trim()
      const role = (formData.get('role') as string)?.trim() || 'Institution Leader'
      const institutionType = (formData.get('institutionType') as string)?.trim() || 'K-12 School'
      const studentStrength = (formData.get('studentStrength') as string)?.trim() || '500 – 1,500 Students'
      const priorityModule = (formData.get('priorityModule') as string)?.trim() || 'Full Unified EdOS'

      if (!institutionName) {
        setError('Please provide your School or Institution name.')
        setSubmitting(false)
        return
      }

      if (!phone) {
        setError('Please enter a phone number so our solutions lead can coordinate onboarding.')
        setSubmitting(false)
        return
      }

      payload = {
        type: 'dhruvaos',
        name,
        email,
        phone,
        institutionName,
        role,
        institutionType,
        studentStrength,
        priorityModule,
        message,
      }
    } else {
      const company = (formData.get('company') as string)?.trim() || 'Not provided'
      const need = (formData.get('need') as string)?.trim()

      if (!need) {
        setError('Please select what service or product you are looking for.')
        setSubmitting(false)
        return
      }

      payload = {
        type: 'general',
        name,
        email,
        company,
        phone: phone || 'Not provided',
        service: need,
        message,
      }
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
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
    'w-full rounded-xl border border-border bg-card/90 backdrop-blur-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary focus:bg-card [&:not(:placeholder-shown)]:border-primary/40 shadow-sm hover:border-primary/30'
  const selectStyle =
    'w-full appearance-none rounded-xl border border-border bg-card/90 backdrop-blur-sm px-4 py-2.5 text-sm text-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary focus:bg-card cursor-pointer shadow-sm font-medium hover:border-primary/30'

  if (success) {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center space-y-4 shadow-xl backdrop-blur-md">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/30">
          <CheckCircle2 className="h-7 w-7 text-emerald-400" />
        </div>
        <h3 className="font-heading text-xl font-bold text-foreground">
          {mode === 'dhruvaos' ? 'DhruvaOS Pilot Application Received!' : 'Message Received!'}
        </h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          {mode === 'dhruvaos'
            ? 'Thank you for applying. Our institutional solutions engineering team will review your campus details and reach out within 1 business day with architecture details and pilot onboarding steps.'
            : 'Thank you for reaching out. We have logged your inquiry and our team will review the details and get back to you within 1 business day.'}
        </p>
        <div className="pt-2">
          <Button type="button" variant="outline" size="sm" onClick={() => setSuccess(false)}>
            Submit another application
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={formContainerRef}
      id="contact-form"
      className="scroll-mt-28 relative overflow-hidden rounded-3xl border border-border bg-card dark:bg-[#0b1329] p-6 sm:p-8 md:p-10 shadow-xl transition-all duration-300"
    >
      {/* Decorative top ambient indicator */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
          mode === 'dhruvaos'
            ? 'from-emerald-500 via-teal-400 to-cyan-500'
            : 'from-blue-600 via-violet-500 to-cyan-400'
        }`}
      />

      {/* Inquiry Type Mode Switcher Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-6 p-1 rounded-2xl bg-muted/50 border border-border/80 w-fit">
        <button
          type="button"
          onClick={() => {
            setMode('dhruvaos')
            setError(null)
            focusFirstInput()
          }}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            mode === 'dhruvaos'
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
          }`}
        >
          <School className="h-3.5 w-3.5" />
          <span>✦ DhruvaOS School Onboarding</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setMode('general')
            setError(null)
            focusFirstInput()
          }}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            mode === 'general'
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
          }`}
        >
          <Building2 className="h-3.5 w-3.5" />
          <span>General Software &amp; AI</span>
        </button>
      </div>

      {/* Dynamic Header Section */}
      {mode === 'dhruvaos' ? (
        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
            <Sparkles className="h-3 w-3" />
            <span>School Operating System &middot; Pilot Program</span>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
            Apply for DhruvaOS Pilot Program &amp; Demo
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Direct onboarding for schools, colleges &amp; educational trusts. Secure early-adopter pilot pricing and dedicated migration support.
          </p>
        </div>
      ) : (
        <div className="space-y-1 mb-6">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
            Send Us a Message
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Tell us about your project or technical challenge. We respond within 1 business day.
          </p>
        </div>
      )}

      <form
        className="space-y-5"
        aria-label="Inquiry form"
        onSubmit={handleSubmit}
        onChange={(e) => checkAutoClearError(e.currentTarget)}
        noValidate
      >
        {mode === 'dhruvaos' ? (
          /* ──────── DhruvaOS School-Specific Form Fields ──────── */
          <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                  Your Full Name <span aria-hidden="true" className="text-destructive">*</span>
                </label>
                <input
                  ref={firstInputRef}
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
                <label htmlFor="role" className="block text-sm font-medium text-foreground mb-1.5">
                  Your Role / Designation <span aria-hidden="true" className="text-destructive">*</span>
                </label>
                <select id="role" name="role" required className={selectStyle}>
                  {DHRUVA_ROLES.map((role) => (
                    <option key={role} value={role} className="bg-card text-foreground py-2">
                      {role}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="institutionName" className="block text-sm font-medium text-foreground mb-1.5">
                School / College / Institution Name <span aria-hidden="true" className="text-destructive">*</span>
              </label>
              <input
                id="institutionName"
                name="institutionName"
                type="text"
                required
                placeholder="e.g. St. Xavier's Senior Secondary School"
                className={inputStyle}
              />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="institutionType" className="block text-sm font-medium text-foreground mb-1.5">
                  Institution Type <span aria-hidden="true" className="text-destructive">*</span>
                </label>
                <select id="institutionType" name="institutionType" required className={selectStyle}>
                  {DHRUVA_INSTITUTION_TYPES.map((type) => (
                    <option key={type} value={type} className="bg-card text-foreground py-2">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="studentStrength" className="block text-sm font-medium text-foreground mb-1.5">
                  Student Strength <span aria-hidden="true" className="text-destructive">*</span>
                </label>
                <select id="studentStrength" name="studentStrength" required className={selectStyle}>
                  {DHRUVA_STUDENT_STRENGTHS.map((strength) => (
                    <option key={strength} value={strength} className="bg-card text-foreground py-2">
                      {strength}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                  Official / Work Email <span aria-hidden="true" className="text-destructive">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="e.g. principal@school.edu.in"
                  className={inputStyle}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                  Phone / WhatsApp <span aria-hidden="true" className="text-destructive">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="e.g. +91 98765 43210"
                  className={inputStyle}
                />
              </div>
            </div>

            <div>
              <label htmlFor="priorityModule" className="block text-sm font-medium text-foreground mb-1.5">
                Primary Module Priority Focus
              </label>
              <select id="priorityModule" name="priorityModule" className={selectStyle}>
                {DHRUVA_PRIORITY_MODULES.map((mod) => (
                  <option key={mod} value={mod} className="bg-card text-foreground py-2">
                    {mod}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                Current Setup, Software &amp; Migration Requirements <span aria-hidden="true" className="text-destructive">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tell us about your campus, existing software in use, migration needs, or specific questions..."
                className={`${inputStyle} resize-none`}
              />
            </div>
          </>
        ) : (
          /* ──────── General B2B Software Inquiry Fields ──────── */
          <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                  Name <span aria-hidden="true" className="text-destructive">*</span>
                </label>
                <input
                  ref={firstInputRef}
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
                  placeholder="e.g. Acme Tech"
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
                <option value="" className="bg-card text-foreground py-2">
                  Select an option
                </option>
                {WHAT_DO_YOU_NEED_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-card text-foreground py-2">
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
                rows={4}
                placeholder="Tell us about your requirements, project scope, ideas, or questions..."
                className={`${inputStyle} resize-none`}
              />
            </div>
          </>
        )}

        {/* Response SLA Callout Banner */}
        <div className="flex items-center gap-3 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-xs sm:text-sm text-foreground font-medium">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          <span>
            {mode === 'dhruvaos'
              ? 'Institutional pilot applications receive priority response within 1 business day.'
              : 'We respond to all verified inquiries within 1 business day.'}
          </span>
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
              Submitting Application...
            </>
          ) : mode === 'dhruvaos' ? (
            'Submit DhruvaOS Pilot Application'
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

export function ContactForm() {
  return (
    <Suspense fallback={<div className="h-96 rounded-3xl border border-border bg-card/50 animate-pulse" />}>
      <ContactFormInner />
    </Suspense>
  )
}
