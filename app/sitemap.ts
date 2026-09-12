import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site-url'
import { BLOG_POSTS } from '@/constants/blog'
import { SERVICES } from '@/constants/services'
import { PRODUCTS } from '@/constants/products'
import { INDUSTRIES } from '@/constants/industries'

/**
 * Next.js App Router dynamic sitemap generator.
 * Indexes 100% of all public production routes including:
 * - Core pages & technology hubs
 * - All blog posts (with published dates)
 * - All services & service-for-industry landing pages
 * - All products & public roadmap
 * - All industry hubs
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl()
  const now = new Date()

  // 1. Core Top-Level Pages
  const corePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/products`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/technologies`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/case-studies`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/industries`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/portfolio`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/training`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/roadmap`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/whitepapers`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/security`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/careers`, lastModified: now, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/book-consultation`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/request-quote`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/refund-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]

  // 2. Blog Posts
  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => {
    let postDate = now
    try {
      const parsed = new Date(post.publishedAt)
      if (!isNaN(parsed.getTime())) postDate = parsed
    } catch {}
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: postDate,
      changeFrequency: 'monthly',
      priority: post.featured ? 0.9 : 0.8,
    }
  })

  // 3. Products
  const productRoutes: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: product.id === 'dhruvaos' || product.id === 'toolvines' ? 0.95 : 0.85,
  }))

  // 4. Services
  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  // 5. Industries
  const industryRoutes: MetadataRoute.Sitemap = INDUSTRIES.map((ind) => ({
    url: `${baseUrl}/industries/${ind.id}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // 6. Service-for-Industry Matrix
  const matrixRoutes: MetadataRoute.Sitemap = []
  for (const s of SERVICES) {
    for (const ind of INDUSTRIES) {
      matrixRoutes.push({
        url: `${baseUrl}/services/${s.id}/for/${ind.id}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.65,
      })
    }
  }

  return [
    ...corePages,
    ...blogRoutes,
    ...productRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...matrixRoutes,
  ]
}
