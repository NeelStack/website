/**
 * Form Validation Library for NeelStack Web Applications
 * Provides robust validation routines and field-level error mapping.
 */

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const PHONE_REGEX = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/

export function isValidEmail(email?: string | null): boolean {
  if (!email) return false
  return EMAIL_REGEX.test(email.trim())
}

export function isValidPhone(phone?: string | null): boolean {
  if (!phone) return false
  const cleaned = phone.replace(/[\s\-().]/g, '')
  return cleaned.length >= 7 && cleaned.length <= 15
}

export interface ContactValidationInput {
  mode: 'general' | 'dhruvaos'
  name?: string
  email?: string
  phone?: string
  company?: string
  need?: string
  message?: string
  institutionName?: string
  role?: string
  institutionType?: string
  studentStrength?: string
  priorityModule?: string
}

export function validateContactForm(data: ContactValidationInput): {
  isValid: boolean
  errors: Record<string, string>
} {
  const errors: Record<string, string> = {}

  const name = data.name?.trim()
  const email = data.email?.trim()
  const message = data.message?.trim()

  if (!name) {
    errors.name = 'Full name is required.'
  }

  if (!email) {
    errors.email = 'Email address is required.'
  } else if (!isValidEmail(email)) {
    errors.email = 'Please enter a valid email address (e.g. alex@company.com).'
  }

  if (!message) {
    errors.message = data.mode === 'dhruvaos'
      ? 'Please provide campus requirements or priority questions.'
      : 'Please describe your project, timeline, or inquiries.'
  }

  if (data.mode === 'dhruvaos') {
    const institutionName = data.institutionName?.trim()
    const phone = data.phone?.trim()

    if (!institutionName) {
      errors.institutionName = 'School or Institution name is required.'
    }

    if (!phone) {
      errors.phone = 'Phone number is required for pilot coordination.'
    } else if (!isValidPhone(phone)) {
      errors.phone = 'Please enter a valid phone number with area/country code.'
    }
  } else {
    const need = data.need?.trim()
    if (!need) {
      errors.need = 'Please select the service or product you are looking for.'
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

export interface ConsultationValidationInput {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  topic?: string
}

export function validateConsultationForm(data: ConsultationValidationInput): {
  isValid: boolean
  errors: Record<string, string>
} {
  const errors: Record<string, string> = {}

  const firstName = data.firstName?.trim()
  const lastName = data.lastName?.trim()
  const email = data.email?.trim()
  const topic = data.topic?.trim()

  if (!firstName) {
    errors.firstName = 'First name is required.'
  }

  if (!lastName) {
    errors.lastName = 'Last name is required.'
  }

  if (!email) {
    errors.email = 'Email address is required.'
  } else if (!isValidEmail(email)) {
    errors.email = 'Please enter a valid business email address.'
  }

  if (!topic) {
    errors.topic = 'Please provide details on what you want to discuss.'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

export interface QuoteValidationInput {
  firstName?: string
  lastName?: string
  email?: string
  company?: string
  projectType?: string
  budget?: string
  timeline?: string
  description?: string
}

export function validateQuoteForm(data: QuoteValidationInput): {
  isValid: boolean
  errors: Record<string, string>
} {
  const errors: Record<string, string> = {}

  const firstName = data.firstName?.trim()
  const lastName = data.lastName?.trim()
  const email = data.email?.trim()
  const projectType = data.projectType?.trim()
  const description = data.description?.trim()

  if (!firstName) {
    errors.firstName = 'First name is required.'
  }

  if (!lastName) {
    errors.lastName = 'Last name is required.'
  }

  if (!email) {
    errors.email = 'Email address is required.'
  } else if (!isValidEmail(email)) {
    errors.email = 'Please enter a valid work email address.'
  }

  if (!projectType) {
    errors.projectType = 'Please select a primary project type.'
  }

  if (!description) {
    errors.description = 'Please provide an overview of your project requirements.'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}
