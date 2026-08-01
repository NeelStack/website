import budgetRangesData from '@/constants/budget-ranges.json'

export type CurrencyCode = 'USD' | 'INR' | 'EUR' | 'GBP'

export interface BudgetRangeOption {
  id: string
  label: string
  min: number
  max: number | null
}

export interface CurrencyConfig {
  code: CurrencyCode
  name: string
  symbol: string
  auditPriceFormatted: string
  auditPrice: string
  auditPriceNumber: number
  consultationText: string
  budgetRanges: BudgetRangeOption[]
  formatOptions: {
    under100: string
    range100To1000: string
    range1000To5000: string
    above5000: string
  }
}

export const BUDGET_RANGES_BY_CURRENCY = budgetRangesData

export const CURRENCY_CONFIGS: Record<CurrencyCode, CurrencyConfig> = {
  USD: {
    code: 'USD',
    name: 'USD ($)',
    symbol: '$',
    auditPriceFormatted: budgetRangesData.USD.auditPriceFormatted,
    auditPrice: budgetRangesData.USD.auditPriceFormatted,
    auditPriceNumber: budgetRangesData.USD.auditPriceNumber,
    consultationText: budgetRangesData.USD.consultationText,
    budgetRanges: budgetRangesData.USD.ranges,
    formatOptions: {
      under100: budgetRangesData.USD.ranges[0].label,
      range100To1000: budgetRangesData.USD.ranges[1].label,
      range1000To5000: budgetRangesData.USD.ranges[2].label,
      above5000: budgetRangesData.USD.ranges[3].label,
    },
  },
  INR: {
    code: 'INR',
    name: 'INR (₹)',
    symbol: '₹',
    auditPriceFormatted: budgetRangesData.INR.auditPriceFormatted,
    auditPrice: budgetRangesData.INR.auditPriceFormatted,
    auditPriceNumber: budgetRangesData.INR.auditPriceNumber,
    consultationText: budgetRangesData.INR.consultationText,
    budgetRanges: budgetRangesData.INR.ranges,
    formatOptions: {
      under100: budgetRangesData.INR.ranges[0].label,
      range100To1000: budgetRangesData.INR.ranges[1].label,
      range1000To5000: budgetRangesData.INR.ranges[2].label,
      above5000: budgetRangesData.INR.ranges[3].label,
    },
  },
  EUR: {
    code: 'EUR',
    name: 'EUR (€)',
    symbol: '€',
    auditPriceFormatted: budgetRangesData.EUR.auditPriceFormatted,
    auditPrice: budgetRangesData.EUR.auditPriceFormatted,
    auditPriceNumber: budgetRangesData.EUR.auditPriceNumber,
    consultationText: budgetRangesData.EUR.consultationText,
    budgetRanges: budgetRangesData.EUR.ranges,
    formatOptions: {
      under100: budgetRangesData.EUR.ranges[0].label,
      range100To1000: budgetRangesData.EUR.ranges[1].label,
      range1000To5000: budgetRangesData.EUR.ranges[2].label,
      above5000: budgetRangesData.EUR.ranges[3].label,
    },
  },
  GBP: {
    code: 'GBP',
    name: 'GBP (£)',
    symbol: '£',
    auditPriceFormatted: budgetRangesData.GBP.auditPriceFormatted,
    auditPrice: budgetRangesData.GBP.auditPriceFormatted,
    auditPriceNumber: budgetRangesData.GBP.auditPriceNumber,
    consultationText: budgetRangesData.GBP.consultationText,
    budgetRanges: budgetRangesData.GBP.ranges,
    formatOptions: {
      under100: budgetRangesData.GBP.ranges[0].label,
      range100To1000: budgetRangesData.GBP.ranges[1].label,
      range1000To5000: budgetRangesData.GBP.ranges[2].label,
      above5000: budgetRangesData.GBP.ranges[3].label,
    },
  },
}

export const CURRENCIES = CURRENCY_CONFIGS

/**
 * Detects visitor currency based on browser timezone, UTC offset, and locale.
 * Automatically defaults to INR for visitors in India, EUR for Europe, GBP for UK, and USD for US/Global.
 */
export function detectUserCurrency(): CurrencyCode {
  if (typeof window === 'undefined') return 'USD'

  try {
    const dateStr = new Date().toString()
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone ?? ''
    const offset = new Date().getTimezoneOffset() // IST is UTC+5:30 -> offset is -330 (or 330 depending on spec)
    const languages = (navigator.languages ?? [navigator.language]).map((l) => l.toLowerCase())

    // 1. India (INR) Detection via UTC Offset, Timezone String, or Timezone Name
    const isIndiaOffset = Math.abs(offset) === 330
    const isIndiaTimeString =
      dateStr.includes('+0530') ||
      dateStr.includes('India') ||
      dateStr.includes('IST')

    const isIndiaTimezone =
      timeZone.includes('Kolkata') ||
      timeZone.includes('Calcutta') ||
      timeZone.includes('Asia/Kolkata') ||
      timeZone.includes('Asia/Calcutta') ||
      timeZone === 'Asia/Colombo'

    if (isIndiaOffset || isIndiaTimeString || isIndiaTimezone) {
      return 'INR'
    }

    // 2. India (INR) Detection via Browser Locales (e.g. en-in, hi-in, hi, ta-in, te-in, gu-in, etc.)
    const indianLocales = [
      'en-in', 'hi', 'hi-in', 'bn-in', 'te-in', 'mr-in', 'ta-in',
      'ur-in', 'gu-in', 'kn-in', 'ml-in', 'or-in', 'pa-in', 'as-in',
    ]
    if (languages.some((lang) => indianLocales.some((loc) => lang.includes(loc)))) {
      return 'INR'
    }

    // 3. United Kingdom (GBP) Detection
    if (timeZone === 'Europe/London' || languages.some((lang) => lang === 'en-gb')) {
      return 'GBP'
    }

    // 4. European Union (EUR) Detection
    const europeanTimezones = [
      'Europe/Paris', 'Europe/Berlin', 'Europe/Madrid', 'Europe/Rome',
      'Europe/Amsterdam', 'Europe/Brussels', 'Europe/Vienna', 'Europe/Athens',
      'Europe/Helsinki', 'Europe/Dublin', 'Europe/Lisbon', 'Europe/Warsaw',
    ]
    if (europeanTimezones.some((tz) => timeZone.startsWith(tz))) {
      return 'EUR'
    }
  } catch {
    // Fallback to USD on error
  }

  return 'USD'
}

export const detectDefaultCurrency = detectUserCurrency



