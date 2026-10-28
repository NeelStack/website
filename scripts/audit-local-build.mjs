import fs from 'node:fs'
import path from 'node:path'

const testPages = [
  { file: '.next/server/app/index.html', route: '/' },
  { file: '.next/server/app/about.html', route: '/about' },
  { file: '.next/server/app/products.html', route: '/products' },
  { file: '.next/server/app/products/dhruvaos.html', route: '/products/dhruvaos' },
  { file: '.next/server/app/products/toolvines.html', route: '/products/toolvines' },
  { file: '.next/server/app/products/ai-company-os.html', route: '/products/ai-company-os' },
  { file: '.next/server/app/blog.html', route: '/blog' },
  { file: '.next/server/app/contact.html', route: '/contact' },
  { file: '.next/server/app/pricing.html', route: '/pricing' },
  { file: '.next/server/app/technologies.html', route: '/technologies' },
  { file: '.next/server/app/whitepapers.html', route: '/whitepapers' },
  { file: '.next/server/app/whitepapers/ai-company-operating-system.html', route: '/whitepapers/ai-company-operating-system' },
  { file: '.next/server/app/careers.html', route: '/careers' },
  { file: '.next/server/app/privacy.html', route: '/privacy' },
  { file: '.next/server/app/terms.html', route: '/terms' },
  { file: '.next/server/app/support.html', route: '/support' },
]

console.log('Auditing pre-rendered production HTML files from Next.js build:\n')
let passed = 0

for (const p of testPages) {
  if (!fs.existsSync(p.file)) {
    console.error(`❌ File not found: ${p.file}`)
    continue
  }
  const html = fs.readFileSync(p.file, 'utf8')

  // Check Title
  const titleMatch = html.match(/<title>([^<]*)<\/title>/i)
  const title = titleMatch ? titleMatch[1] : null

  // Check Description
  const descMatch =
    html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
    html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i)
  const desc = descMatch ? descMatch[1] : null

  // Check Canonical
  const canMatch =
    html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) ||
    html.match(/<link[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["']/i)
  const canonical = canMatch ? canMatch[1] : null

  // Check H1 Count
  const h1Matches = html.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || []
  const h1Count = h1Matches.length

  // Check JSON-LD
  const jsonLdMatches = html.match(/<script[^>]*type=["']application\/ld\+json["']/gi) || []
  const jsonLdCount = jsonLdMatches.length

  // Check Google 48px Favicon
  const hasFavicon48 = html.includes('favicon-48x48.png')

  // Check Web Manifest
  const hasManifest = html.includes('manifest.webmanifest')

  // Check OpenGraph & Twitter tags
  const hasOG = html.includes('property="og:title"') || html.includes('name="og:title"')
  const hasTwitter = html.includes('name="twitter:card"')

  const isAllOk =
    Boolean(title) &&
    Boolean(desc) &&
    Boolean(canonical) &&
    h1Count === 1 &&
    jsonLdCount >= 1 &&
    hasFavicon48 &&
    hasManifest &&
    hasOG &&
    hasTwitter

  if (isAllOk) passed++

  const badge = isAllOk ? 'PASS' : 'WARN'
  console.log(
    `[${badge}] ${p.route.padEnd(42)} | H1: ${h1Count} | Canonical: ${canonical ? 'OK' : 'MISSING'} | JSON-LD: ${jsonLdCount} | Favicon48: ${hasFavicon48 ? 'OK' : 'FAIL'} | Manifest: ${hasManifest ? 'OK' : 'FAIL'}`
  )
}

console.log(`\n========================================================================`)
console.log(`Audit Summary: ${passed}/${testPages.length} core routes passed 100% of all SEO & metadata checks.`)
console.log(`========================================================================\n`)

if (passed < testPages.length) {
  process.exitCode = 1
}
