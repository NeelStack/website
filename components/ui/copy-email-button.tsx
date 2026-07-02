'use client'

import { useState } from 'react'

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('contact@neelstack.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="text-primary hover:underline font-mono focus:outline-none"
    >
      {copied ? 'copied!' : 'copy email address'}
    </button>
  )
}
