import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site-url'

/**
 * Next.js App Router dynamic robots.txt generator.
 * Permissively permits indexation of all public routes while protecting
 * private API routes and Cloudflare internal paths.
 * Explicitly declares access permissions for primary search and AI agents
 * (Googlebot, Bingbot, OAI-SearchBot, Claude-SearchBot, PerplexityBot).
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSiteUrl()

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/cdn-cgi/'],
      },
      {
        userAgent: [
          'Googlebot',
          'Googlebot-Image',
          'Bingbot',
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-SearchBot',
          'PerplexityBot',
          'Google-Extended',
          'Applebot-Extended',
          'CCBot',
        ],
        allow: '/',
        disallow: ['/api/', '/cdn-cgi/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
