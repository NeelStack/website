'use client'

import React, { useState, useRef, useEffect, useCallback, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { CopyEmailButton } from '@/components/ui/copy-email-button'
import { CheckCircle2, AlertCircle, RefreshCw, School, Sparkles, Building2, Layers } from 'lucide-react'

const WHAT_DO_YOU_NEED_OPTIONS = [
  'DhruvaOS School Operating System & Education OS',
  'AI Systems & Autonomous Agent Architecture',
  'Software Development & Product Engineering',
  'Platform Architecture & Modern Web Applications',
  'Technical Partnership or Enterprise Collaboration',
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

import { validateContactForm, isValidEmail, isValidPhone } from '@/lib/validation'

function ContactFormInner() {
  const searchParams = useSearchParams()
  const isDhruvaParam = searchParams.get('product') === 'dhruvaos' || 
                        searchParams.get('mode') === 'dhruvaos' ||
                        searchParams.get('subject')?.toLowerCase().includes('dhruvaos')

  const [mode, setMode] = useState<'general' | 'dhruvaos'>(isDhruvaParam ? 'dhruvaos' : 'general')
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  // Form values state for real-time reactivity
  const [formDataState, setFormDataState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    need: '',
    message: '',
    institutionName: '',
    role: DHRUVA_ROLES[0],
    institutionType: DHRUVA_INSTITUTION_TYPES[0],
    studentStrength: DHRUVA_STUDENT_STRENGTHS[1],
    priorityModule: DHRUVA_PRIORITY_MODULES[0],
  })

  const formRef = useRef<HTMLFormElement>(null)
  const firstInputRef = useRef<HTMLInputElement>(null)
  const formContainerRef = useRef<HTMLDivElement>(null)
  const successCardRef = useRef<HTMLDivElement>(null)
  const errorBannerRef = useRef<HTMLDivElement>(null)

  // Dynamically sync form fields with incoming query parameters
  useEffect(() => {
    if (isDhruvaParam) {
      setMode('dhruvaos')
    }

    const serviceParam = searchParams.get('service')?.toLowerCase()
    const subjectParam = searchParams.get('subject')
    const inquiryParam = searchParams.get('inquiry')?.toLowerCase()
    const moduleParam = searchParams.get('module')?.toLowerCase()

    setFormDataState((prev) => {
      let nextNeed = prev.need
      let nextMessage = prev.message
      let nextModule = prev.priorityModule

      if (serviceParam) {
        if (serviceParam.includes('ai') || serviceParam.includes('agent') || serviceParam.includes('automation')) {
          nextNeed = 'AI Systems & Autonomous Agent Architecture'
        } else if (serviceParam.includes('web') || serviceParam.includes('performance')) {
          nextNeed = 'Platform Architecture & Modern Web Applications'
        } else if (serviceParam.includes('custom') || serviceParam.includes('backend') || serviceParam.includes('api') || serviceParam.includes('cloud')) {
          nextNeed = 'Software Development & Product Engineering'
        } else if (serviceParam.includes('consulting') || serviceParam.includes('design')) {
          nextNeed = 'Technical Partnership or Enterprise Collaboration'
        }
      }

      if (inquiryParam === 'training') {
        nextNeed = 'Technical Partnership or Enterprise Collaboration'
        if (!nextMessage) {
          nextMessage = 'Inquiry regarding Enterprise AI & Architecture Engineering Training Programs.'
        }
      }

      if (subjectParam && !nextMessage) {
        nextMessage = `Inquiry regarding ${subjectParam}.`
      }

      if (moduleParam) {
        const matched = DHRUVA_PRIORITY_MODULES.find((m) =>
          m.toLowerCase().includes(moduleParam)
        )
        if (matched) nextModule = matched
      }

      return {
        ...prev,
        need: nextNeed || prev.need,
        message: nextMessage || prev.message,
        priorityModule: nextModule || prev.priorityModule,
      }
    })
  }, [searchParams, isDhruvaParam])

  const focusFirstInput = useCallback(() => {
    setTimeout(() => {
      const input = formContainerRef.current?.querySelector<HTMLInputElement | HTMLTextAreaElement>(
        'input:not([type=hidden]):not([disabled]), textarea:not([disabled])'
      )
      input?.focus({ preventScroll: true })
    }, 150)
  }, [])

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
    if (error) {
      if (errorBannerRef.current) {
        errorBannerRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }
    }
  }, [error])

  const handleFieldChange = (field: string, value: string) => {
    setFormDataState((prev) => ({ ...prev, [field]: value }))

    // Real-time error removal: clear error as soon as user enters valid input
    if (fieldErrors[field]) {
      let isFieldNowValid = false

      if (field === 'email') {
        isFieldNowValid = isValidEmail(value)
      } else if (field === 'phone') {
        isFieldNowValid = mode === 'dhruvaos' ? isValidPhone(value) : true
      } else {
        isFieldNowValid = value.trim().length > 0
      }

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

    const validationResult = validateContactForm({
      mode,
      name: formDataState.name,
      email: formDataState.email,
      phone: formDataState.phone,
      company: formDataState.company,
      need: formDataState.need,
      message: formDataState.message,
      institutionName: formDataState.institutionName,
      role: formDataState.role,
      institutionType: formDataState.institutionType,
      studentStrength: formDataState.studentStrength,
      priorityModule: formDataState.priorityModule,
    })

    if (!validationResult.isValid) {
      setFieldErrors(validationResult.errors)
      const firstErrorField = Object.keys(validationResult.errors)[0]
      setError('Please review and fill the mandatory fields highlighted below.')
      
      // Auto-focus first invalid input
      const invalidElement = formRef.current?.querySelector<HTMLElement>(`[name="${firstErrorField}"]`)
      if (invalidElement) {
        invalidElement.focus({ preventScroll: false })
        invalidElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return
    }

    setSubmitting(true)
    setFieldErrors({})

    let payload: Record<string, string> = {}

    if (mode === 'dhruvaos') {
      payload = {
        type: 'dhruvaos',
        name: formDataState.name.trim(),
        email: formDataState.email.trim(),
        phone: formDataState.phone.trim(),
        institutionName: formDataState.institutionName.trim(),
        role: formDataState.role.trim() || 'Institution Leader',
        institutionType: formDataState.institutionType.trim() || 'K-12 School',
        studentStrength: formDataState.studentStrength.trim() || '500 – 1,500 Students',
        priorityModule: formDataState.priorityModule.trim() || 'Full Unified EdOS',
        message: formDataState.message.trim(),
      }
    } else {
      payload = {
        type: 'general',
        name: formDataState.name.trim(),
        email: formDataState.email.trim(),
        company: formDataState.company.trim() || 'Not provided',
        phone: formDataState.phone.trim() || 'Not provided',
        service: formDataState.need.trim(),
        message: formDataState.message.trim(),
      }
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send inquiry.')
      }

      setSuccess(true)
    } catch (err: any) {
      console.error(err)
      setError(err?.message || 'Failed to submit via form. Please email us directly at contact@neelstack.com.')
    } finally {
      setSubmitting(false)
    }
  }

  const getInputClass = (fieldName: string) => {
    const hasError = !!fieldErrors[fieldName]
    return `w-full rounded-xl border ${
      hasError
        ? 'border-red-500/80 bg-red-500/[0.04] focus:ring-red-500/30 focus:border-red-500'
        : 'border-border bg-card/90 focus:border-primary focus:ring-primary/30 [&:not(:placeholder-shown)]:border-primary/40'
    } backdrop-blur-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:bg-card shadow-sm hover:border-primary/30`
  }

  const getSelectClass = (fieldName: string) => {
    const hasError = !!fieldErrors[fieldName]
    return `w-full appearance-none rounded-xl border ${
      hasError
        ? 'border-red-500/80 bg-red-500/[0.04] focus:ring-red-500/30 focus:border-red-500'
        : 'border-border bg-card/90 focus:border-primary focus:ring-primary/30'
    } backdrop-blur-sm px-4 py-2.5 text-sm text-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:bg-card cursor-pointer shadow-sm font-medium hover:border-primary/30`
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
        <h3 className="font-heading text-xl font-bold text-foreground">
          {mode === 'dhruvaos' ? 'DhruvaOS Pilot Application Received!' : 'Message Received!'}
        </h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          {mode === 'dhruvaos'
            ? 'Thank you for applying. Our institutional solutions engineering team will review your campus details and reach out within 1 business day with architecture details and pilot onboarding steps.'
            : 'Thank you for reaching out. We have logged your inquiry and our team will review the details and get back to you within 1 business day.'}
        </p>
        <div className="pt-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              setSuccess(false)
              focusFirstInput()
            }}
          >
            {mode === 'dhruvaos' ? 'Submit another application' : 'Send another message'}
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
        ref={formRef}
        className="space-y-5"
        aria-label="Inquiry form"
        onSubmit={handleSubmit}
        noValidate
      >
        {mode === 'dhruvaos' ? (
          /* ──────── DhruvaOS School-Specific Form Fields ──────── */
          <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                  Your Full Name <span aria-hidden="true" className="text-red-500 font-bold">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  id="name"
                  name="name"
                  type="text"
                  required
                  aria-required="true"
                  aria-invalid={!!fieldErrors.name}
                  value={formDataState.name}
                  onChange={(e) => handleFieldChange('name', e.target.value)}
                  autoComplete="name"
                  placeholder="e.g. Shyam Chaurasiya"
                  className={getInputClass('name')}
                />
                {fieldErrors.name && (
                  <p className="text-xs text-red-500 font-medium flex items-center gap-1.5 mt-1.5 animate-in fade-in duration-200">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                    <span>{fieldErrors.name}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-foreground mb-1.5">
                  Your Role / Designation <span aria-hidden="true" className="text-red-500 font-bold">*</span>
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  aria-required="true"
                  value={formDataState.role}
                  onChange={(e) => handleFieldChange('role', e.target.value)}
                  className={getSelectClass('role')}
                >
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
                School / College / Institution Name <span aria-hidden="true" className="text-red-500 font-bold">*</span>
              </label>
              <input
                id="institutionName"
                name="institutionName"
                type="text"
                required
                aria-required="true"
                aria-invalid={!!fieldErrors.institutionName}
                value={formDataState.institutionName}
                onChange={(e) => handleFieldChange('institutionName', e.target.value)}
                placeholder="e.g. St. Xavier's Senior Secondary School"
                className={getInputClass('institutionName')}
              />
              {fieldErrors.institutionName && (
                <p className="text-xs text-red-500 font-medium flex items-center gap-1.5 mt-1.5 animate-in fade-in duration-200">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>{fieldErrors.institutionName}</span>
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="institutionType" className="block text-sm font-medium text-foreground mb-1.5">
                  Institution Type <span aria-hidden="true" className="text-red-500 font-bold">*</span>
                </label>
                <select
                  id="institutionType"
                  name="institutionType"
                  required
                  aria-required="true"
                  value={formDataState.institutionType}
                  onChange={(e) => handleFieldChange('institutionType', e.target.value)}
                  className={getSelectClass('institutionType')}
                >
                  {DHRUVA_INSTITUTION_TYPES.map((type) => (
                    <option key={type} value={type} className="bg-card text-foreground py-2">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="studentStrength" className="block text-sm font-medium text-foreground mb-1.5">
                  Student Strength <span aria-hidden="true" className="text-red-500 font-bold">*</span>
                </label>
                <select
                  id="studentStrength"
                  name="studentStrength"
                  required
                  aria-required="true"
                  value={formDataState.studentStrength}
                  onChange={(e) => handleFieldChange('studentStrength', e.target.value)}
                  className={getSelectClass('studentStrength')}
                >
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
                  Official / Work Email <span aria-hidden="true" className="text-red-500 font-bold">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  aria-required="true"
                  aria-invalid={!!fieldErrors.email}
                  value={formDataState.email}
                  onChange={(e) => handleFieldChange('email', e.target.value)}
                  autoComplete="email"
                  placeholder="e.g. principal@school.edu.in"
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
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                  Phone / WhatsApp <span aria-hidden="true" className="text-red-500 font-bold">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  aria-required="true"
                  aria-invalid={!!fieldErrors.phone}
                  value={formDataState.phone}
                  onChange={(e) => handleFieldChange('phone', e.target.value)}
                  autoComplete="tel"
                  placeholder="e.g. +91 98765 43210"
                  className={getInputClass('phone')}
                />
                {fieldErrors.phone && (
                  <p className="text-xs text-red-500 font-medium flex items-center gap-1.5 mt-1.5 animate-in fade-in duration-200">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                    <span>{fieldErrors.phone}</span>
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="priorityModule" className="block text-sm font-medium text-foreground mb-1.5">
                Primary Module Priority Focus
              </label>
              <select
                id="priorityModule"
                name="priorityModule"
                value={formDataState.priorityModule}
                onChange={(e) => handleFieldChange('priorityModule', e.target.value)}
                className={getSelectClass('priorityModule')}
              >
                {DHRUVA_PRIORITY_MODULES.map((mod) => (
                  <option key={mod} value={mod} className="bg-card text-foreground py-2">
                    {mod}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                Current Setup, Software &amp; Migration Requirements <span aria-hidden="true" className="text-red-500 font-bold">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                aria-required="true"
                aria-invalid={!!fieldErrors.message}
                value={formDataState.message}
                onChange={(e) => handleFieldChange('message', e.target.value)}
                rows={4}
                placeholder="Tell us about your campus, existing software in use, migration needs, or specific questions..."
                className={`${getInputClass('message')} resize-none`}
              />
              {fieldErrors.message && (
                <p className="text-xs text-red-500 font-medium flex items-center gap-1.5 mt-1.5 animate-in fade-in duration-200">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>{fieldErrors.message}</span>
                </p>
              )}
            </div>
          </>
        ) : (
          /* ──────── General B2B Software Inquiry Fields ──────── */
          <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                  Name <span aria-hidden="true" className="text-red-500 font-bold">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  id="name"
                  name="name"
                  type="text"
                  required
                  aria-required="true"
                  aria-invalid={!!fieldErrors.name}
                  value={formDataState.name}
                  onChange={(e) => handleFieldChange('name', e.target.value)}
                  autoComplete="name"
                  placeholder="e.g. Shyam Chaurasiya"
                  className={getInputClass('name')}
                />
                {fieldErrors.name && (
                  <p className="text-xs text-red-500 font-medium flex items-center gap-1.5 mt-1.5 animate-in fade-in duration-200">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                    <span>{fieldErrors.name}</span>
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">
                  Company / Organization
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formDataState.company}
                  onChange={(e) => handleFieldChange('company', e.target.value)}
                  autoComplete="organization"
                  placeholder="e.g. Acme Tech"
                  className={getInputClass('company')}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                  Work Email <span aria-hidden="true" className="text-red-500 font-bold">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  aria-required="true"
                  aria-invalid={!!fieldErrors.email}
                  value={formDataState.email}
                  onChange={(e) => handleFieldChange('email', e.target.value)}
                  autoComplete="email"
                  placeholder="e.g. name@company.com"
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
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                  Phone Number <span className="text-xs text-muted-foreground font-normal">(optional)</span>
                </label>
                <input
                  id="phone"
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
              <label htmlFor="need" className="block text-sm font-medium text-foreground mb-1.5">
                What do you need? <span aria-hidden="true" className="text-red-500 font-bold">*</span>
              </label>
              <select
                id="need"
                name="need"
                required
                aria-required="true"
                aria-invalid={!!fieldErrors.need}
                value={formDataState.need}
                onChange={(e) => handleFieldChange('need', e.target.value)}
                className={getSelectClass('need')}
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
              {fieldErrors.need && (
                <p className="text-xs text-red-500 font-medium flex items-center gap-1.5 mt-1.5 animate-in fade-in duration-200">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>{fieldErrors.need}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                Message <span aria-hidden="true" className="text-red-500 font-bold">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                aria-required="true"
                aria-invalid={!!fieldErrors.message}
                value={formDataState.message}
                onChange={(e) => handleFieldChange('message', e.target.value)}
                rows={4}
                placeholder="Tell us about your requirements, project scope, ideas, or questions..."
                className={`${getInputClass('message')} resize-none`}
              />
              {fieldErrors.message && (
                <p className="text-xs text-red-500 font-medium flex items-center gap-1.5 mt-1.5 animate-in fade-in duration-200">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>{fieldErrors.message}</span>
                </p>
              )}
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

        <Button type="submit" variant="3d-yellow" size="lg" className="w-full h-12 rounded-xl text-sm font-extrabold" disabled={submitting}>
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
