import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site-url'

/**
 * ToolVines Rule 3: Dynamic Site URLs.
 * Next.js App Router dynamic sitemap generator.
 * Combines all production-grade routes under the correct site url structure.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl()

  const routes = [
    '',
    '/about',
    '/services',
    '/industries',
    '/portfolio',
    '/case-studies',
    '/blog',
    '/careers',
    '/support',
    '/contact',
    '/request-quote',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/services' || route === '/industries' ? 0.8 : 0.5,
  }))
}
