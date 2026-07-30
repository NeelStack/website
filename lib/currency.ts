/**
 * Unified Currency Detection & Pricing Helper
 *
 * Automatically detects whether visitor is in India (INR ₹) or International (USD $ default).
 * Ensures 100% consistent pricing copy across all buttons, bars, hero CTAs, and widgets.
 */

export type CurrencyCode = 'USD' | 'INR'

export interface CurrencyConfig {
  code: CurrencyCode
  name: string
  symbol: string
  auditPriceFormatted: string
  auditPrice: string
  auditPriceNumber: number
  consultationText: string
  formatOptions: {
    under100: string
    range100To1000: string
    range1000To5000: string
    above5000: string
  }
}

export const CURRENCY_CONFIGS: Record<CurrencyCode, CurrencyConfig> = {
  USD: {
    code: 'USD',
    name: 'USD ($)',
    symbol: '$',
    auditPriceFormatted: '$6',
    auditPrice: '$6',
    auditPriceNumber: 6,
    consultationText: 'Free 20-Min Architecture Brief',
    formatOptions: {
      under100: 'Under $1,000',
      range100To1000: '$1,000 - $5,000',
      range1000To5000: '$5,000 - $15,000',
      above5000: '$15,000+',
    },
  },
  INR: {
    code: 'INR',
    name: 'INR (₹)',
    symbol: '₹',
    auditPriceFormatted: '₹499',
    auditPrice: '₹499',
    auditPriceNumber: 499,
    consultationText: 'Free 20-Min Technical Audit',
    formatOptions: {
      under100: 'Under ₹50,000',
      range100To1000: '₹50,000 - ₹2,00,000',
      range1000To5000: '₹2,00,000 - ₹5,00,000',
      above5000: '₹5,00,000+',
    },
  },
}

export const CURRENCIES = CURRENCY_CONFIGS

/**
 * Detects visitor currency based on browser locale and timezone.
 * Defaults to USD ($) for international visitors.
 */
export function detectUserCurrency(): CurrencyCode {
  if (typeof window === 'undefined') return 'USD'

  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone ?? ''
    const languages = navigator.languages ?? [navigator.language]

    if (
      timeZone.includes('Kolkata') ||
      timeZone.includes('Calcutta') ||
      timeZone === 'Asia/Colombo'
    ) {
      return 'INR'
    }

    if (languages.some((lang) => lang.toLowerCase().includes('en-in') || lang.toLowerCase().includes('hi'))) {
      return 'INR'
    }
  } catch {
    // Fallback to USD on error
  }

  return 'USD'
}

export const detectDefaultCurrency = detectUserCurrency
