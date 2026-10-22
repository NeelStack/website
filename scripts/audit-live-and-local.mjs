import fs from 'fs'
import { BLOG_POSTS } from '../constants/blog.ts'
import { SERVICES } from '../constants/services.ts'
import { PRODUCTS } from '../constants/products.ts'
import { INDUSTRIES } from '../constants/industries.ts'

const BASE_URL = 'https://neelstack.com'

const corePages = [
  '/',
  '/about',
  '/services',
  '/products',
  '/technologies',
  '/blog',
  '/case-studies',
  '/industries',
  '/portfolio',
  '/pricing',
  '/training',
  '/roadmap',
  '/whitepapers',
  '/whitepapers/ai-company-operating-system',
  '/security',
  '/careers',
  '/contact',
  '/book-consultation',
  '/request-quote',
  '/privacy',
  '/terms',
  '/refund-policy',
  '/support',
]

const productPages = PRODUCTS.map(p => `/products/${p.id}`)
const servicePages = SERVICES.map(s => `/services/${s.id}`)
const industryPages = INDUSTRIES.map(i => `/industries/${i.id}`)
const blogPages = BLOG_POSTS.map(b => `/blog/${b.slug}`)

// Sample representative matrix pages (first 5)
const sampleMatrixPages = []
for (let i = 0; i < Math.min(3, SERVICES.length); i++) {
  for (let j = 0; j < Math.min(2, INDUSTRIES.length); j++) {
    sampleMatrixPages.push(`/services/${SERVICES[i].id}/for/${INDUSTRIES[j].id}`)
  }
}

const allTestRoutes = [
  ...corePages,
  ...productPages,
  ...servicePages,
  ...industryPages,
  ...blogPages.slice(0, 5), // sample top 5 blog posts
  ...sampleMatrixPages
]

console.log(`Auditing ${allTestRoutes.length} representative routes on live site (${BASE_URL})...\n`)

function extractTextContent(htmlStr) {
  let text = ''
  let insideTag = false
  for (let i = 0; i < htmlStr.length; i++) {
    if (htmlStr[i] === '<') {
      insideTag = true
    } else if (htmlStr[i] === '>') {
      insideTag = false
    } else if (!insideTag) {
      text += htmlStr[i]
    }
  }
  return text.trim()
}

async function auditRoute(route) {
  const url = `${BASE_URL}${route}`
  try {
    const res = await fetch(url, {
      redirect: 'manual',
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; NeelStackAuditBot/1.0)' }
    })
    
    const status = res.status
    let location = res.headers.get('location')
    let canonical = null
    let title = null
    let description = null
    let h1s = []
    let jsonLdCount = 0
    let robots = null

    if (status === 200) {
      const html = await res.text()
      
      const titleMatch = html.match(/<title>([^<]*)<\/title>/i)
      title = titleMatch ? titleMatch[1] : null

      const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
                        html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i)
      description = descMatch ? descMatch[1] : null

      const canMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) ||
                       html.match(/<link[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["']/i)
      canonical = canMatch ? canMatch[1] : null

      const robotsMatch = html.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']*)["']/i)
      robots = robotsMatch ? robotsMatch[1] : null

      const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)]
      h1s = h1Matches.map(m => extractTextContent(m[1]))

      const jsonLdMatches = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
      jsonLdCount = jsonLdMatches.length
    }

    return {
      route,
      status,
      location,
      title,
      titleLength: title ? title.length : 0,
      description,
      descLength: description ? description.length : 0,
      canonical,
      robots,
      h1Count: h1s.length,
      h1s,
      jsonLdCount
    }
  } catch (err) {
    return {
      route,
      status: 'FETCH_ERROR',
      error: err.message
    }
  }
}

async function main() {
  const results = []
  for (const r of allTestRoutes) {
    const res = await auditRoute(r)
    results.push(res)
    const h1Status = res.h1Count === 1 ? 'OK' : `FAIL(${res.h1Count})`
    const canStatus = (() => {
      if (!res.canonical) return 'NONE'
      try {
        const canonicalHost = new URL(res.canonical).hostname.toLowerCase()
        const allowedCanonicalHosts = new Set(['neelstack.com', 'www.neelstack.com'])
        return allowedCanonicalHosts.has(canonicalHost) ? 'OK' : 'INVALID'
      } catch {
        return 'INVALID'
      }
    })()
    console.log(`[${res.status}] ${r.padEnd(35)} | Canonical: ${canStatus} | H1: ${h1Status} | JSON-LD: ${res.jsonLdCount} | TitleLen: ${res.titleLength}`)
  }

  // Summary analysis
  console.log('\n--- AUDIT SUMMARY ---')
  const missingH1 = results.filter(r => r.h1Count === 0 && r.status === 200)
  const multipleH1 = results.filter(r => r.h1Count > 1 && r.status === 200)
  const missingDesc = results.filter(r => !r.description && r.status === 200)
  const missingCanonical = results.filter(r => !r.canonical && r.status === 200)
  const non200 = results.filter(r => r.status !== 200)

  console.log(`Routes audited: ${results.length}`)
  console.log(`Non-200 responses: ${non200.length}`)
  if (non200.length > 0) {
    non200.forEach(r => console.log(`  - ${r.route}: ${r.status} ${r.location || ''} ${r.error || ''}`))
  }
  console.log(`Missing H1: ${missingH1.length}`)
  if (missingH1.length > 0) {
    missingH1.forEach(r => console.log(`  - ${r.route}`))
  }
  console.log(`Multiple H1s: ${multipleH1.length}`)
  if (multipleH1.length > 0) {
    multipleH1.forEach(r => console.log(`  - ${r.route} (${r.h1Count}): ${JSON.stringify(r.h1s)}`))
  }
  console.log(`Missing Description: ${missingDesc.length}`)
  if (missingDesc.length > 0) {
    missingDesc.forEach(r => console.log(`  - ${r.route}`))
  }
  console.log(`Missing Canonical: ${missingCanonical.length}`)
  if (missingCanonical.length > 0) {
    missingCanonical.forEach(r => console.log(`  - ${r.route}`))
  }

  fs.writeFileSync('scripts/audit-results.json', JSON.stringify(results, null, 2))
  console.log('\nWrote full audit results to scripts/audit-results.json')
}

main().catch(console.error)

