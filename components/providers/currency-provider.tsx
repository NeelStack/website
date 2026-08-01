'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { CURRENCY_CONFIGS, CurrencyCode, CurrencyConfig, detectUserCurrency } from '@/lib/currency'

interface CurrencyContextType {
  currency: CurrencyCode
  config: CurrencyConfig
  setCurrency: (code: CurrencyCode) => void
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: 'USD',
  config: CURRENCY_CONFIGS.USD,
  setCurrency: () => {},
})

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>('USD')

  useEffect(() => {
    const isManual = typeof window !== 'undefined' ? localStorage.getItem('neelstack_currency_manual') === 'true' : false
    const saved = typeof window !== 'undefined' ? (localStorage.getItem('neelstack_currency') as CurrencyCode) : null

    if (isManual && saved && CURRENCY_CONFIGS[saved]) {
      setCurrencyState(saved)
    } else {
      const detected = detectUserCurrency()
      setCurrencyState(detected)
    }
  }, [])

  const setCurrency = (code: CurrencyCode) => {
    setCurrencyState(code)
    if (typeof window !== 'undefined') {
      localStorage.setItem('neelstack_currency', code)
      localStorage.setItem('neelstack_currency_manual', 'true')
    }
  }

  const value: CurrencyContextType = {
    currency,
    config: CURRENCY_CONFIGS[currency] ?? CURRENCY_CONFIGS.USD,
    setCurrency,
  }

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
}

export function useCurrency() {
  return useContext(CurrencyContext)
}
