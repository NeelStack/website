'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { CURRENCY_CONFIGS, CurrencyConfig, detectUserCurrency } from '@/lib/currency'

interface CurrencyContextType {
  currency: 'USD' | 'INR'
  config: CurrencyConfig
  setCurrency: (code: 'USD' | 'INR') => void
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: 'USD',
  config: CURRENCY_CONFIGS.USD,
  setCurrency: () => {},
})

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<'USD' | 'INR'>('USD')

  useEffect(() => {
    const detected = detectUserCurrency()
    setCurrencyState(detected)
  }, [])

  const setCurrency = (code: 'USD' | 'INR') => {
    setCurrencyState(code)
  }

  const value: CurrencyContextType = {
    currency,
    config: CURRENCY_CONFIGS[currency],
    setCurrency,
  }

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
}

export function useCurrency() {
  return useContext(CurrencyContext)
}
