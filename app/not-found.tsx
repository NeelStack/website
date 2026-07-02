import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * ToolVines Rule 2: Noindex pages must NOT have a canonical URL.
 * Set robots.index=false AND alternates.canonical=null together to prevent
 * Search Console canonical/noindex conflict warnings.
 */
export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: null,
  },
}

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" aria-hidden="true" />

      <div className="relative z-10">
        {/* 404 */}
        <p className="font-heading text-8xl font-extrabold text-primary/20 md:text-9xl" aria-hidden="true">
          404
        </p>

        <h1 className="mt-4 font-heading text-3xl font-extrabold text-foreground md:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 max-w-md text-base text-muted-foreground leading-relaxed">
          The page you are looking for does not exist or has been moved. Let&apos;s get you back on track.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" aria-hidden="true" />
              Go to Homepage
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
