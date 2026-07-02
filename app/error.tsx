/**
 * ToolVines Rule 2 Note: error.tsx must be 'use client' per Next.js requirements.
 * Client components cannot export metadata. The error page is a transient state
 * (not a real route) so search engines should never index it in practice — error
 * responses return non-200 status codes which crawlers ignore.
 *
 * The ErrorUI is kept here directly (no server wrapper needed for this file).
 */
'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertCircle, RefreshCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to monitoring service in production
    console.error('[NeelStack] Application error:', error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-60" aria-hidden="true" />

      <div className="relative z-10">
        <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-2xl border border-destructive/30 bg-destructive/10 mb-6">
          <AlertCircle className="h-8 w-8 text-destructive" aria-hidden="true" />
        </div>

        <h1 className="font-heading text-3xl font-extrabold text-foreground md:text-4xl">
          Something Went Wrong
        </h1>
        <p className="mt-4 max-w-md text-base text-muted-foreground leading-relaxed">
          An unexpected error occurred. Our team has been notified. Please try again or contact
          support if the issue persists.
        </p>

        {error.digest && (
          <p className="mt-2 font-mono text-xs text-muted-foreground/60">
            Error ID: {error.digest}
          </p>
        )}

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={reset}>
            <RefreshCcw className="mr-2 h-4 w-4" aria-hidden="true" />
            Try Again
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Go to Homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
