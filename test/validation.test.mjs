import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  isValidEmail,
  isValidPhone,
  validateContactForm,
  validateConsultationForm,
  validateQuoteForm,
} from '../lib/validation.ts'

describe('Email & Phone Validation Helpers', () => {
  it('should validate standard and RFC compliant email formats', () => {
    assert.equal(isValidEmail('test@neelstack.com'), true)
    assert.equal(isValidEmail('user.name+tag@domain.co.in'), true)
    assert.equal(isValidEmail(''), false)
    assert.equal(isValidEmail('invalid-email'), false)
    assert.equal(isValidEmail('user@'), false)
    assert.equal(isValidEmail('@domain.com'), false)
  })

  it('should validate phone numbers correctly', () => {
    assert.equal(isValidPhone('+91 98765 43210'), true)
    assert.equal(isValidPhone('1234567890'), true)
    assert.equal(isValidPhone('+1-555-0199'), true)
    assert.equal(isValidPhone('123'), false)
    assert.equal(isValidPhone(''), false)
  })
})

describe('Contact Form Validation', () => {
  it('should reject empty general contact form', () => {
    const result = validateContactForm({ mode: 'general' })
    assert.equal(result.isValid, false)
    assert.ok(result.errors.name)
    assert.ok(result.errors.email)
    assert.ok(result.errors.need)
    assert.ok(result.errors.message)
  })

  it('should pass valid general contact form', () => {
    const result = validateContactForm({
      mode: 'general',
      name: 'Alex Mercer',
      email: 'alex@company.com',
      need: 'AI Systems & Autonomous Agent Architecture',
      message: 'Looking for multi-agent architecture integration.',
    })
    assert.equal(result.isValid, true)
    assert.deepEqual(result.errors, {})
  })

  it('should enforce DhruvaOS pilot required fields', () => {
    const result = validateContactForm({
      mode: 'dhruvaos',
      name: 'Principal Sharma',
      email: 'sharma@school.edu',
      message: 'Need fee management module.',
    })
    assert.equal(result.isValid, false)
    assert.ok(result.errors.institutionName)
    assert.ok(result.errors.city)
    assert.ok(result.errors.phone)
  })

  it('should pass complete DhruvaOS pilot application', () => {
    const result = validateContactForm({
      mode: 'dhruvaos',
      name: 'Principal Sharma',
      email: 'sharma@school.edu.in',
      phone: '+91 98765 43210',
      institutionName: 'Delhi Heritage Academy',
      city: 'New Delhi, Delhi NCR',
      message: 'Interested in full Unified EdOS migration from legacy desktop ERP.',
    })
    assert.equal(result.isValid, true)
    assert.deepEqual(result.errors, {})
  })
})

describe('Consultation Form Validation', () => {
  it('should flag all required fields when submitting empty', () => {
    const result = validateConsultationForm({})
    assert.equal(result.isValid, false)
    assert.ok(result.errors.firstName)
    assert.ok(result.errors.lastName)
    assert.ok(result.errors.email)
    assert.ok(result.errors.topic)
  })

  it('should pass valid consultation payload', () => {
    const result = validateConsultationForm({
      firstName: 'Sarah',
      lastName: 'Connor',
      email: 'sarah@skynet.ai',
      topic: 'Vector RAG and knowledge retrieval pipeline sizing.',
    })
    assert.equal(result.isValid, true)
    assert.deepEqual(result.errors, {})
  })
})

describe('Quote Form Validation', () => {
  it('should flag missing quote inputs', () => {
    const result = validateQuoteForm({})
    assert.equal(result.isValid, false)
    assert.ok(result.errors.firstName)
    assert.ok(result.errors.lastName)
    assert.ok(result.errors.email)
    assert.ok(result.errors.projectType)
    assert.ok(result.errors.description)
  })

  it('should pass complete quote request', () => {
    const result = validateQuoteForm({
      firstName: 'Bruce',
      lastName: 'Wayne',
      email: 'bruce@wayneenterprises.com',
      projectType: 'AI / Machine Learning Integration',
      description: 'Autonomous security log anomaly detection agents.',
    })
    assert.equal(result.isValid, true)
    assert.deepEqual(result.errors, {})
  })
})
