/**
 * Auth Layout — placeholder for future authentication flows.
 * Centers the auth form with a branded panel on larger screens.
 */
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface AuthLayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
  className?: string
}

function AuthBrandPanel() {
  return (
    <div className="hidden lg:flex lg:flex-col lg:w-1/2 bg-card border-r border-border p-12 relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" aria-hidden="true" />
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="NeelStack — Home"
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect width="32" height="32" rx="8" fill="oklch(0.62 0.22 258)" />
            <path
              d="M8 24V8h3.2L19.2 19.6V8H22.8V24h-3.2L11.6 12.4V24H8Z"
              fill="white"
            />
          </svg>
          <span className="font-heading font-bold text-lg text-foreground">NeelStack</span>
        </Link>

        {/* Quote */}
        <blockquote>
          <p className="text-xl font-medium text-foreground leading-relaxed">
            &ldquo;We build the software that powers tomorrow&rsquo;s enterprises.&rdquo;
          </p>
          <footer className="mt-4 text-sm text-muted-foreground">
            — NeelStack
          </footer>
        </blockquote>
      </div>
    </div>
  )
}

export function AuthLayout({ children, title, description, className }: AuthLayoutProps) {
  return (
    <div className={cn('flex min-h-screen bg-background', className)}>
      <AuthBrandPanel />

      {/* Form area */}
      <main
        className="flex flex-1 flex-col items-center justify-center px-6 py-12"
        role="main"
        aria-label="Authentication"
      >
        <div className="w-full max-w-sm">
          {(title || description) && (
            <div className="mb-8 text-center">
              {title && (
                <h1 className="font-heading text-2xl font-bold text-foreground">{title}</h1>
              )}
              {description && (
                <p className="mt-2 text-sm text-muted-foreground">{description}</p>
              )}
            </div>
          )}
          {children}
        </div>
      </main>
    </div>
  )
}
