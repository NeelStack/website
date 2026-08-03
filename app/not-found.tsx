import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Home, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MarketingLayout } from '@/components/layouts/marketing-layout'

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
    <MarketingLayout>
      <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center py-20 relative overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full pointer-events-none opacity-12 blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.8) 0%, rgba(6,182,212,0.4) 50%, transparent 80%)' }}
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col items-center gap-8 max-w-lg">
          {/* Illustration + ghost 404 — fixed height container for proper layering */}
          <div className="relative flex items-center justify-center w-72 h-64" aria-hidden="true">
            {/* Ghost 404 text — fills the container */}
            <span className="absolute inset-0 flex items-center justify-center font-heading text-[9rem] font-black text-primary/7 select-none leading-none tracking-tight">
              404
            </span>

            {/* Robot illustration — floats above the ghost text */}
            <Image
              src="/images/illustrations/robot-404.png"
              alt="Confused robot illustration"
              width={220}
              height={220}
              className="relative z-10 w-48 h-auto object-contain animate-float"
              style={{
                filter: 'drop-shadow(0 16px 32px rgba(99,102,241,0.25))',
              }}
              priority
            />
          </div>

          <div className="space-y-3">
            <h1 className="font-heading text-3xl font-extrabold text-foreground md:text-4xl">
              Page Not Found
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              This page doesn&apos;t exist or may have been moved. Let&apos;s get you back on track.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild variant="gradient" size="lg">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" aria-hidden="true" />
                Go to Homepage
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </MarketingLayout>
  )
}
