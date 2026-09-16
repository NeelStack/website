'use client'

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
  Suspense,
} from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Loader2 } from 'lucide-react'

// ─── TYPES & CONTEXT ────────────────────────────────────────────────────────

interface PageProgressContextType {
  startLoading: (message?: string) => void
  completeLoading: () => void
  isLoading: boolean
}

const PageProgressContext = createContext<PageProgressContextType>({
  startLoading: () => {},
  completeLoading: () => {},
  isLoading: false,
})

export const usePageProgress = () => useContext(PageProgressContext)

// ─── INNER PROGRESS LISTENER (WRAPPED IN SUSPENSE FOR NEXT.JS DEPLOYMENT) ───

function PageProgressListener() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { completeLoading } = usePageProgress()
  const currentPathRef = useRef(pathname)

  useEffect(() => {
    if (currentPathRef.current !== pathname) {
      currentPathRef.current = pathname
      completeLoading()
    }
  }, [pathname, searchParams, completeLoading])

  return null
}

// ─── COMPONENT ──────────────────────────────────────────────────────────────

export function PageProgressLoader() {
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [loadingMessage, setLoadingMessage] = useState<string>('Opening...')

  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const safetyTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const clearTimers = useCallback(() => {
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
    if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current)
  }, [])

  const completeLoading = useCallback(() => {
    clearTimers()
    setProgress(100)
    setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => setProgress(0), 300)
    }, 250)
  }, [clearTimers])

  const startLoading = useCallback(
    (msg = 'Opening...') => {
      clearTimers()
      setLoadingMessage(msg)
      setIsLoading(true)
      setProgress(18)

      // Increment progress realistically
      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev < 45) return prev + 14
          if (prev < 72) return prev + 6
          if (prev < 90) return prev + 2
          return prev
        })
      }, 120)

      // Safety fallback to prevent sticking
      safetyTimeoutRef.current = setTimeout(() => {
        completeLoading()
      }, 4500)
    },
    [clearTimers, completeLoading]
  )

  // Global click listener for internal route links & interactive options
  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      // Find nearest anchor or interactive element
      const target = event.target as HTMLElement | null
      if (!target) return

      const anchor = target.closest('a')
      if (anchor && anchor.href) {
        const href = anchor.getAttribute('href')
        const targetAttr = anchor.getAttribute('target')

        // Ignore new tabs, mailto, tel, downloads, or pure hash anchors
        if (
          targetAttr === '_blank' ||
          !href ||
          href.startsWith('mailto:') ||
          href.startsWith('tel:') ||
          href.startsWith('#') ||
          anchor.hasAttribute('download')
        ) {
          return
        }

        // Check if internal navigation
        try {
          const url = new URL(anchor.href, window.location.origin)
          const isInternal = url.origin === window.location.origin
          const isDifferentPage =
            url.pathname !== window.location.pathname ||
            url.search !== window.location.search

          if (isInternal && isDifferentPage) {
            // Determine friendly label from link text or href
            const linkText = anchor.textContent?.trim()
            const message = linkText && linkText.length < 30 ? `Opening ${linkText}...` : 'Opening...'
            startLoading(message)
          }
        } catch {
          // Ignore invalid URLs
        }
      }
    }

    document.addEventListener('click', handleGlobalClick, { capture: true })
    return () => {
      document.removeEventListener('click', handleGlobalClick, { capture: true })
      clearTimers()
    }
  }, [startLoading, clearTimers])

  return (
    <PageProgressContext.Provider value={{ startLoading, completeLoading, isLoading }}>
      <Suspense fallback={null}>
        <PageProgressListener />
      </Suspense>

      {/* ─── Top Glowing Progress Bar ─── */}
      <AnimatePresence>
        {(isLoading || progress > 0) && (
          <div
            className="fixed top-0 left-0 right-0 z-[999999] pointer-events-none h-[3.5px] overflow-visible bg-transparent"
            aria-hidden="true"
          >
            {/* Ambient Background Track Glow */}
            <div className="absolute inset-0 bg-blue-500/10 dark:bg-cyan-500/10" />

            {/* Glowing Active Progress Beam */}
            <motion.div
              className="h-full relative bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 dark:from-cyan-400 dark:via-blue-500 dark:to-violet-400 shadow-[0_0_12px_rgba(56,189,248,0.85)] transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Ultra-Bright Lead Spark Edge */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-3 bg-white/90 rounded-full blur-[2px] shadow-[0_0_16px_#FFFFFF]" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ─── Floating Tactical Route Progress Capsule (Top-Right) ─── */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-4 right-4 z-[999998] pointer-events-none"
            role="status"
            aria-live="polite"
          >
            <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-blue-500/30 dark:border-cyan-400/40 bg-background/90 dark:bg-slate-950/90 backdrop-blur-xl shadow-lg shadow-blue-500/10 dark:shadow-cyan-500/10 text-xs font-mono font-medium text-foreground">
              <Loader2 className="h-3.5 w-3.5 animate-spin text-blue-600 dark:text-cyan-400 shrink-0" />
              <span className="truncate max-w-[200px] tracking-tight">{loadingMessage}</span>
              <Sparkles className="h-3 w-3 text-cyan-500 dark:text-cyan-300 animate-pulse shrink-0 ml-0.5" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageProgressContext.Provider>
  )
}
