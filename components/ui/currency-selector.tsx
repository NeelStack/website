'use client'

import React, { useState, useEffect } from 'react'
import { CURRENCIES, CurrencyCode } from '@/lib/currency'
import { useCurrency } from '@/components/providers/currency-provider'
import { Globe } from 'lucide-react'

export function CurrencySelector({ className }: { className?: string }) {
  const { currency, setCurrency } = useCurrency()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (code: CurrencyCode) => {
    setCurrency(code)
    localStorage.setItem('neelstack_currency', code)
  }

  if (!mounted) {
    return <div className="h-8 w-20 rounded-lg bg-card/40 border border-border" />
  }

  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      <Globe className="h-3.5 w-3.5 text-muted-foreground shrink-0" aria-hidden="true" />
      <select
        value={currency}
        onChange={(e) => handleChange(e.target.value as CurrencyCode)}
        aria-label="Select preferred currency"
        className="rounded-lg border border-border bg-card px-2 py-1 text-xs font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors cursor-pointer"
      >
        {Object.values(CURRENCIES).map((c) => (
          <option key={c.code} value={c.code}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  )
}
