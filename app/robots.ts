import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site-url'

/**
 * Next.js App Router dynamic robots.txt generator.
 * Blocks forms and support pages from index scanners while keeping SEO pages visible.
 * Also blocks Cloudflare CDN paths that return 4xx and pollute SEO audits.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSiteUrl()

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/book-consultation',
          '/request-quote',
          '/api/',
          // SEO fix: block Cloudflare CDN utility paths from being crawled
          // (these return 4xx and were flagged in the SEO audit)
          '/cdn-cgi/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
