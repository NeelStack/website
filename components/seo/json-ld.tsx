import React from 'react'

interface JsonLdProps {
  data: Record<string, unknown>
}

/**
 * JsonLd component renders structured data for search engines.
 * Safe to render in Server Components or layout files.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
