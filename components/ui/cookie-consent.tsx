'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShieldCheck, X, Settings2, Info } from 'lucide-react'
import { Button } from './button'

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem('neelstack_cookie_consent')
    if (!savedConsent) {
      // Delay slightly for better UX/intro feel
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

  const handleSavePreferences = () => {
    localStorage.setItem('neelstack_cookie_consent', JSON.stringify(preferences))
    setShowBanner(false)
    setShowPreferences(false)
    window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: preferences }))
  }

  if (!showBanner) return null

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-2xl bg-card/85 backdrop-blur-md border border-border/80 rounded-2xl shadow-2xl z-50 overflow-hidden transition-all duration-300 animate-in slide-in-from-bottom-8 fade-in"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500" />
      
      <div className="p-6 md:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h2 id="cookie-consent-title" className="font-heading text-lg font-bold text-foreground">
              Cookie Consent & Privacy
            </h2>
          </div>
          <button
            onClick={handleRejectAll}
            className="text-muted-foreground hover:text-foreground transition-colors p-1"
            aria-label="Reject all and close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Description or Preferences */}
        {!showPreferences ? (
          <div className="space-y-4">
            <p id="cookie-consent-desc" className="text-sm text-muted-foreground leading-relaxed">
              We use cookies to optimize website performance, analyze site traffic, and personalize services. By clicking &quot;Accept All&quot;, you consent to our use of all cookies. You can manage preferences anytime in our{' '}
              <Link href="/privacy" className="text-primary hover:underline font-medium">
                Privacy Policy
              </Link>.
            </p>
          </div>
        ) : (
          <div className="space-y-4 border-t border-border/40 pt-4">
            <p className="text-xs text-muted-foreground mb-4">
              Select which categories of cookies you consent to use. Essential cookies are necessary for website stability.
            </p>
            
            <div className="space-y-3.5">
              {/* Essential */}
              <div className="flex items-center justify-between gap-4 p-3 rounded-xl bg-muted/40">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-semibold text-foreground">Strictly Necessary</span>
                    <span className="text-[10px] bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded font-mono font-medium">Required</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Required to maintain session security and core site components.</p>
                </div>
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="h-4 w-4 rounded border-border text-primary focus:ring-primary/30 opacity-70 cursor-not-allowed"
                />
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between gap-4 p-3 rounded-xl bg-muted/40">
                <div className="space-y-0.5">
                  <span className="text-sm font-semibold text-foreground">Performance & Analytics</span>
                  <p className="text-xs text-muted-foreground">Helps us monitor site speed, traffic flow, and identify issues.</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="h-4 w-4 rounded border-border text-primary focus:ring-primary/30"
                />
              </div>

              {/* Marketing */}
              <div className="flex items-center justify-between gap-4 p-3 rounded-xl bg-muted/40">
                <div className="space-y-0.5">
                  <span className="text-sm font-semibold text-foreground">Marketing & Personalization</span>
                  <p className="text-xs text-muted-foreground">Used to customize consultation requests and coordinate service offerings.</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="h-4 w-4 rounded border-border text-primary focus:ring-primary/30"
                />
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/40 pt-5">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Info className="h-4 w-4 text-primary shrink-0" />
            <span>Manage permissions anytime.</span>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-3 w-full sm:w-auto">
            {!showPreferences ? (
              <>
                <Button
                  variant="outline"
                  onClick={() => setShowPreferences(true)}
                  className="gap-1.5 text-sm h-9 px-4 border-border/80 w-full sm:w-auto"
                >
                  <Settings2 className="h-4 w-4 text-muted-foreground" />
                  Preferences
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  className="text-sm h-9 px-4 bg-primary text-primary-foreground hover:bg-primary/95 shadow-md w-full sm:w-auto"
                >
                  Accept All
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  onClick={() => setShowPreferences(false)}
                  className="text-sm h-9 px-4 w-full sm:w-auto"
                >
                  Back
                </Button>
                <Button
                  onClick={handleSavePreferences}
                  className="text-sm h-9 px-4 bg-primary text-primary-foreground hover:bg-primary/95 shadow-md w-full sm:w-auto"
                >
                  Save Choices
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
