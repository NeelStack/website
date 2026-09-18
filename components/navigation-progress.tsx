'use client'

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  Suspense,
} from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

type NavigationProgressContextValue = {
  isNavigating: boolean
  progress: number
  label: string
  startNavigation: (customLabel?: string) => void
  stopNavigation: () => void
}

const NavigationProgressContext = createContext<NavigationProgressContextValue | null>(null)

function normalizeUrl(url: URL): string {
  return `${url.pathname}${url.search}`.replace(/\/$/, '') || '/'
}

export function triggerNavigationProgress(label?: string) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('tv:start-navigation', {
        detail: { label: label || 'Opening...' },
      })
    )
  }
}

export function stopNavigationProgress() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('tv:stop-navigation'))
  }
}

/**
 * RouteWatcher listens to Next.js route & query param changes.
 * When the route actually changes and the new page renders, it completes the progress bar.
 */
function RouteWatcher({ onComplete }: { onComplete: () => void }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentKey = `${pathname || '/'}${searchParams?.toString() ? `?${searchParams.toString()}` : ''}`
  const prevKeyRef = useRef(currentKey)

  useEffect(() => {
    if (prevKeyRef.current !== currentKey) {
      prevKeyRef.current = currentKey
      onComplete()

      // Guaranteed Scroll-to-Top on Page Navigation (Fixes mobile staying at bottom on navigate)
      if (typeof window !== 'undefined') {
        if (!window.location.hash) {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
        }
      }
    }
  }, [currentKey, onComplete])

  return null
}

export function NavigationProgressProvider({ children }: { children: React.ReactNode }) {
  const [isNavigating, setIsNavigating] = useState(false)
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)
  const [label, setLabel] = useState('Opening...')

  const isNavigatingRef = useRef(false)
  const visibleRef = useRef(false)
  const trickleTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const watchdogTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const finishTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearAllTimers = useCallback(() => {
    if (trickleTimerRef.current !== null) {
      clearInterval(trickleTimerRef.current)
      trickleTimerRef.current = null
    }
    if (watchdogTimerRef.current !== null) {
      clearTimeout(watchdogTimerRef.current)
      watchdogTimerRef.current = null
    }
    if (finishTimerRef.current !== null) {
      clearTimeout(finishTimerRef.current)
      finishTimerRef.current = null
    }
    if (resetTimerRef.current !== null) {
      clearTimeout(resetTimerRef.current)
      resetTimerRef.current = null
    }
  }, [])

  const completeNavigation = useCallback(() => {
    if (!isNavigatingRef.current && !visibleRef.current) {
      return
    }

    if (trickleTimerRef.current !== null) {
      clearInterval(trickleTimerRef.current)
      trickleTimerRef.current = null
    }
    if (watchdogTimerRef.current !== null) {
      clearTimeout(watchdogTimerRef.current)
      watchdogTimerRef.current = null
    }

    isNavigatingRef.current = false
    setProgress(100)

    // Hold at 100% for 300ms for clear visual confirmation, then fade out
    finishTimerRef.current = setTimeout(() => {
      setVisible(false)
      visibleRef.current = false

      resetTimerRef.current = setTimeout(() => {
        setProgress(0)
        setIsNavigating(false)
        finishTimerRef.current = null
        resetTimerRef.current = null
      }, 300)
    }, 300)
  }, [])

  const startNavigation = useCallback((customLabel?: string) => {
    clearAllTimers()

    isNavigatingRef.current = true
    visibleRef.current = true
    setIsNavigating(true)
    setVisible(true)
    setLabel(customLabel || 'Opening...')
    setProgress(28)

    // Trickle progress continuously until completion
    trickleTimerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return 95
        if (prev < 48) return prev + Math.random() * 8 + 6
        if (prev < 70) return prev + Math.random() * 5 + 3
        if (prev < 85) return prev + Math.random() * 2 + 1
        if (prev < 92) return prev + Math.random() * 0.8 + 0.3
        return prev + 0.1
      })
    }, 120)

    // Safety watchdog: auto-complete after 4.5 seconds to guarantee no stuck states
    watchdogTimerRef.current = setTimeout(() => {
      completeNavigation()
    }, 4500)
  }, [clearAllTimers, completeNavigation])

  const stopNavigation = useCallback(() => {
    completeNavigation()
  }, [completeNavigation])

  useEffect(() => {
    function handleCustomStart(e: Event) {
      const customEvent = e as CustomEvent<{ label?: string }>
      startNavigation(customEvent?.detail?.label)
    }

    function handleCustomStop() {
      stopNavigation()
    }

    function handleDocumentClick(event: MouseEvent) {
      // Ignore right/middle clicks or modifier keys (new tab/window)
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return
      }

      const target = event.target
      if (!(target instanceof Element)) return

      const anchor = target.closest('a[href]')
      if (!(anchor instanceof HTMLAnchorElement)) return

      const href = anchor.getAttribute('href')
      if (
        !href ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('javascript:') ||
        anchor.hasAttribute('download')
      ) {
        return
      }

      if (anchor.target && anchor.target !== '_self') return

      try {
        const nextUrl = new URL(anchor.href, window.location.href)
        const currentUrl = new URL(window.location.href)

        const currentNorm = normalizeUrl(currentUrl)
        const targetNorm = normalizeUrl(nextUrl)

        // Same page and query -> ignore (in-page hash/scroll)
        if (nextUrl.origin === currentUrl.origin && currentNorm === targetNorm) {
          return
        }

        startNavigation()
      } catch {}
    }

    function handlePopState() {
      startNavigation()
    }

    function handlePageShow() {
      completeNavigation()
    }

    window.addEventListener('tv:start-navigation', handleCustomStart)
    window.addEventListener('tv:stop-navigation', handleCustomStop)
    document.addEventListener('click', handleDocumentClick, true)
    window.addEventListener('popstate', handlePopState)
    window.addEventListener('pageshow', handlePageShow)

    return () => {
      window.removeEventListener('tv:start-navigation', handleCustomStart)
      window.removeEventListener('tv:stop-navigation', handleCustomStop)
      document.removeEventListener('click', handleDocumentClick, true)
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('pageshow', handlePageShow)
      clearAllTimers()
    }
  }, [startNavigation, stopNavigation, completeNavigation, clearAllTimers])

  const value = useMemo(
    () => ({
      isNavigating,
      progress,
      label,
      startNavigation,
      stopNavigation,
    }),
    [isNavigating, progress, label, startNavigation, stopNavigation]
  )

  return (
    <NavigationProgressContext.Provider value={value}>
      <Suspense fallback={null}>
        <RouteWatcher onComplete={completeNavigation} />
      </Suspense>

      {/* Top 3D Laser Progress Bar */}
      <div
        aria-hidden="true"
        className="tv-route-progress-wrapper"
        style={{
          opacity: visible ? 1 : 0,
          transition: visible ? 'none' : 'opacity 300ms ease-out',
        }}
      >
        <div
          className="tv-route-progress-bar"
          style={{
            transform: `translate3d(${progress - 100}%, 0, 0)`,
            transition: progress === 0 ? 'none' : 'transform 220ms cubic-bezier(0.1, 0.9, 0.2, 1)',
          }}
        >
          <div className="tv-route-progress-peg" />
        </div>
      </div>

      {children}
    </NavigationProgressContext.Provider>
  )
}

export function useNavigationProgress() {
  const context = useContext(NavigationProgressContext)
  if (!context) {
    throw new Error('useNavigationProgress must be used within NavigationProgressProvider')
  }
  return context
}
