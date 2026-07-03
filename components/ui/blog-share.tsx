'use client'

import { useState, useEffect } from 'react'
import { Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

function IconX({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

interface BlogShareProps {
  title: string
  slug: string
}

export function BlogShare({ title, slug }: BlogShareProps) {
  const [copied, setCopied] = useState(false)
  const [shareUrl, setShareUrl] = useState('')

  useEffect(() => {
    // Only access window on the client side
    setShareUrl(`${window.location.origin}/blog/${slug}`)
  }, [slug])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy URL', err)
    }
  }

  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`

  return (
    <div className="flex flex-col gap-4 border-t border-b border-border py-6 my-8 sm:flex-row sm:items-center sm:justify-between">
      <div className="text-sm font-medium text-muted-foreground">Share this article:</div>
      <div className="flex flex-wrap items-center gap-3">
        {/* Copy Link Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopy}
          className="gap-2 border-border/80 dark:border-input/50"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-emerald-500" />
              <span className="text-emerald-500 font-medium">Link Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span>Copy Link</span>
            </>
          )}
        </Button>

        {/* Twitter Share Button */}
        <Button
          variant="outline"
          size="sm"
          asChild
          className="gap-2 border-border/80 dark:border-input/50 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/30"
        >
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
            <IconX className="h-4 w-4 fill-current" />
            <span>Twitter</span>
          </a>
        </Button>

        {/* LinkedIn Share Button */}
        <Button
          variant="outline"
          size="sm"
          asChild
          className="gap-2 border-border/80 dark:border-input/50 hover:text-[#0A66C2] hover:border-[#0A66C2]/30"
        >
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <IconLinkedIn className="h-4 w-4 fill-current" />
            <span>LinkedIn</span>
          </a>
        </Button>
      </div>
    </div>
  )
}
