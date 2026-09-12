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
          '/api/',
          '/cdn-cgi/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
