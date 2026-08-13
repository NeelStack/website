'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Cookie } from 'lucide-react'
import { Button } from './button'

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const savedConsent = localStorage.getItem('neelstack_cookie_consent')
    if (!savedConsent) {
      const timer = setTimeout(() => setShowBanner(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    const consent = { essential: true, analytics: true, marketing: true }
    localStorage.setItem('neelstack_cookie_consent', JSON.stringify(consent))
    setShowBanner(false)
    window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: consent }))
  }

  const handleRejectAll = () => {
    const consent = { essential: true, analytics: false, marketing: false }
    localStorage.setItem('neelstack_cookie_consent', JSON.stringify(consent))
    setShowBanner(false)
    window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: consent }))
  }

  if (!showBanner) return null

  return (
    <div
      className="fixed bottom-4 right-4 z-50 flex w-[calc(100%-2rem)] max-w-sm flex-col gap-3 rounded-2xl border border-border/60 bg-card/90 p-4 shadow-2xl backdrop-blur-xl transition-all duration-300 animate-in slide-in-from-bottom-8 fade-in sm:bottom-6 sm:right-6"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <Cookie className="h-4 w-4 text-primary" />
          <span>We use cookies</span>
        </div>
        <button
          onClick={handleRejectAll}
          className="text-muted-foreground hover:text-foreground transition-colors p-0.5"
          aria-label="Decline and close"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      
      <p className="text-xs text-muted-foreground leading-relaxed">
        We use cookies to improve your experience and analyze site traffic. Read our{' '}
        <Link href="/privacy" className="font-medium text-foreground hover:underline">
          Privacy Policy
        </Link>.
      </p>

      <div className="flex items-center gap-2 pt-1">
        <Button
          onClick={handleAcceptAll}
          className="h-8 w-full bg-primary text-xs font-semibold text-primary-foreground hover:bg-primary/95"
        >
          Accept all
        </Button>
        <Button
          variant="outline"
          onClick={handleRejectAll}
          className="h-8 w-full border-border/80 text-xs text-muted-foreground hover:text-foreground"
        >
          Decline
        </Button>
      </div>
    </div>
  )
}
