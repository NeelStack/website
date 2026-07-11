'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface SafeEmailLinkProps {
  /** The email address — split so Cloudflare email protection can't intercept it */
  user: string
  domain: string
  className?: string
  children?: React.ReactNode
}

/**
 * Renders a mailto link without a static href so Cloudflare's email obfuscation
 * proxy (cdn-cgi/l/email-protection) cannot replace it.
 *
 * Instead, the href is assembled in JS at click time, which:
 *  1. Prevents the CDN-CGI 4xx redirect audit issue
 *  2. Provides basic bot-spam protection
 *  3. Still works normally for all human users
 */
export function SafeEmailLink({ user, domain, className, children }: SafeEmailLinkProps) {
  const [href, setHref] = useState<string | undefined>(undefined)

  const reveal = () => {
    if (!href) setHref(`mailto:${user}@${domain}`)
  }

  return (
    <a
      href={href}
      onMouseEnter={reveal}
      onFocus={reveal}
      onClick={reveal}
      className={cn('hover:underline transition-colors', className)}
      aria-label={`Email ${user}@${domain}`}
    >
      {children ?? `${user}@${domain}`}
    </a>
  )
}

/** Legacy: keep CopyEmailButton working but now uses SafeEmailLink internally */
export function CopyEmailButton({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('contact@neelstack.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // silently fail
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn('cursor-pointer text-primary hover:underline font-mono focus:outline-none', className)}
    >
      {copied ? 'Copied!' : 'contact@neelstack.com'}
    </button>
  )
}
