export const DEFAULT_INDEXNOW_KEY = '4efb3296786e407f973201563accd273'
export const INDEXNOW_API_ENDPOINT = 'https://api.indexnow.org/indexnow'
export const BING_INDEXNOW_ENDPOINT = 'https://www.bing.com/indexnow'

export const PRIORITY_SERVICE_SLUGS = [
  'autonomous-agents',
  'fullstack-ai-engineering',
  'llm-rag-integration',
  'enterprise-chatbots',
  'cloud-native-modernization',
  'mvp-development',
]

export const PRIORITY_PRODUCT_SLUGS = [
  'dhruvaos',
  'toolvines',
]

export const PRIORITY_BLOG_SLUGS = [
  'why-vertical-ai-operating-systems-beat-horizontal-saas',
  'building-production-rag-pipelines-anti-patterns',
  'dhruvaos-modern-education-infrastructure',
  'autonomous-agent-swarms-langgraph-mcp',
  'agentic-workflows-replacing-traditional-middleware',
  'cost-optimization-strategies-frontier-llm-apis',
]

export interface IndexNowSubmitOptions {
  key?: string
  keyLocation?: string
  endpoint?: string
  dryRun?: boolean
  maxRetries?: number
}

export interface IndexNowResponse {
  success: boolean
  statusCode: number
  message: string
  submittedUrls: string[]
  endpoint: string
  keyLocation: string
  rawResponse?: string
}

/**
 * Returns the canonical base URL for the site.
 */
export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? 'https://neelstack.com'
}

/**
 * Returns the active IndexNow API key from environment variables or fallback.
 */
export function getIndexNowKey(): string {
  return process.env.INDEXNOW_KEY?.trim() || DEFAULT_INDEXNOW_KEY
}

/**
 * Returns the public URL where the IndexNow verification text file is hosted.
 */
export function getIndexNowKeyLocation(key?: string): string {
  const activeKey = key || getIndexNowKey()
  const siteUrl = getSiteUrl().replace(/\/+$/, '')
  return `${siteUrl}/${activeKey}.txt`
}

/**
 * Extracts and normalizes the host from the canonical site URL.
 */
export function getSiteHost(): string {
  try {
    const siteUrl = getSiteUrl()
    const url = new URL(siteUrl)
    return url.hostname
  } catch {
    return 'neelstack.com'
  }
}

/**
 * Validates and filters URLs before submitting to IndexNow:
 * - Checks protocol (http/https)
 * - Ensures the hostname strictly matches the configured site host
 * - Excludes private/internal paths (/api/, /cdn-cgi/)
 * - Excludes error and noindex routes (/not-found, /404, /500)
 * - Strips fragments (#...)
 * - Removes duplicates
 */
export function filterEligibleUrls(urls: string[], allowedHost?: string): string[] {
  const targetHost = (allowedHost || getSiteHost()).toLowerCase()
  const disallowedPrefixes = ['/api/', '/cdn-cgi/', '/_next/', '/static/']
  const disallowedExact = ['/not-found', '/404', '/500']

  const eligible = new Set<string>()

  for (const rawUrl of urls) {
    if (!rawUrl || typeof rawUrl !== 'string') continue

    try {
      // Normalize URL
      const parsed = new URL(rawUrl.trim(), getSiteUrl())

      // Enforce protocol
      if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
        continue
      }

      // Enforce host match
      if (parsed.hostname.toLowerCase() !== targetHost) {
        continue
      }

      // Enforce path restrictions
      const pathname = parsed.pathname
      if (disallowedPrefixes.some((prefix) => pathname.startsWith(prefix))) {
        continue
      }
      if (disallowedExact.includes(pathname)) {
        continue
      }

      // Remove fragment and normalize trailing slash consistency (preserve root '/')
      parsed.hash = ''
      const normalizedUrl = parsed.toString().replace(/\/$/, '')
      const finalUrl = normalizedUrl === parsed.origin ? `${parsed.origin}/` : normalizedUrl

      eligible.add(finalUrl)
    } catch {
      // Ignore invalid URLs
    }
  }

  return Array.from(eligible)
}

/**
 * Returns the priority URLs for NeelStack recommended for immediate IndexNow submission.
 * Includes homepage, key service landing pages, products, whitepapers, and recent blog posts.
 */
export function getPriorityUrls(): string[] {
  const baseUrl = getSiteUrl().replace(/\/+$/, '')

  const priorityUrls: string[] = [
    `${baseUrl}/`,
    `${baseUrl}/services`,
    `${baseUrl}/products`,
    `${baseUrl}/technologies`,
    `${baseUrl}/blog`,
    `${baseUrl}/case-studies`,
    `${baseUrl}/about`,
    `${baseUrl}/contact`,
    `${baseUrl}/pricing`,
    `${baseUrl}/whitepapers`,
    `${baseUrl}/whitepapers/ai-company-operating-system`,
    `${baseUrl}/book-consultation`,
    `${baseUrl}/request-quote`,
  ]

  for (const slug of PRIORITY_PRODUCT_SLUGS) {
    priorityUrls.push(`${baseUrl}/products/${slug}`)
  }

  for (const slug of PRIORITY_SERVICE_SLUGS) {
    priorityUrls.push(`${baseUrl}/services/${slug}`)
  }

  for (const slug of PRIORITY_BLOG_SLUGS) {
    priorityUrls.push(`${baseUrl}/blog/${slug}`)
  }

  return filterEligibleUrls(priorityUrls)
}

/**
 * Returns all public, indexable production URLs.
 */
export function getAllPublicUrls(): string[] {
  const baseUrl = getSiteUrl().replace(/\/+$/, '')

  const allUrls: string[] = [
    `${baseUrl}/`,
    `${baseUrl}/services`,
    `${baseUrl}/products`,
    `${baseUrl}/technologies`,
    `${baseUrl}/blog`,
    `${baseUrl}/case-studies`,
    `${baseUrl}/about`,
    `${baseUrl}/industries`,
    `${baseUrl}/portfolio`,
    `${baseUrl}/pricing`,
    `${baseUrl}/training`,
    `${baseUrl}/roadmap`,
    `${baseUrl}/whitepapers`,
    `${baseUrl}/whitepapers/ai-company-operating-system`,
    `${baseUrl}/security`,
    `${baseUrl}/careers`,
    `${baseUrl}/contact`,
    `${baseUrl}/book-consultation`,
    `${baseUrl}/request-quote`,
    `${baseUrl}/support`,
    `${baseUrl}/privacy`,
    `${baseUrl}/terms`,
    `${baseUrl}/refund-policy`,
  ]

  for (const slug of PRIORITY_BLOG_SLUGS) {
    allUrls.push(`${baseUrl}/blog/${slug}`)
  }

  for (const slug of PRIORITY_PRODUCT_SLUGS) {
    allUrls.push(`${baseUrl}/products/${slug}`)
  }

  for (const slug of PRIORITY_SERVICE_SLUGS) {
    allUrls.push(`${baseUrl}/services/${slug}`)
  }

  return filterEligibleUrls(allUrls)
}

/**
 * Human-readable description for IndexNow response status codes.
 */
function getStatusDescription(statusCode: number): string {
  switch (statusCode) {
    case 200:
      return 'OK: URLs submitted and processed successfully.'
    case 202:
      return 'Accepted: URLs received; key validation is pending or key file being verified.'
    case 400:
      return 'Bad Request: Invalid payload or URL format.'
    case 403:
      return 'Forbidden: Key is not valid or the key file was not found at keyLocation.'
    case 422:
      return 'Unprocessable Entity: The URLs do not belong to the host, or key does not match.'
    case 429:
      return 'Too Many Requests: Rate limited by IndexNow.'
    default:
      return `Unexpected response from IndexNow (HTTP ${statusCode}).`
  }
}

/**
 * Submits a list of URLs to the IndexNow protocol endpoint (Bing / IndexNow).
 *
 * IndexNow distributes submissions across all participating search engines
 * (Microsoft Bing, Yandex, Seznam.cz, Naver, etc.).
 */
export async function submitToIndexNow(
  urls: string[],
  options: IndexNowSubmitOptions = {}
): Promise<IndexNowResponse> {
  const key = options.key?.trim() || getIndexNowKey()
  const host = getSiteHost()
  const keyLocation = options.keyLocation || getIndexNowKeyLocation(key)
  const endpoint = options.endpoint || INDEXNOW_API_ENDPOINT
  const maxRetries = options.maxRetries ?? 2

  const sanitizedUrls = filterEligibleUrls(urls, host)

  if (sanitizedUrls.length === 0) {
    return {
      success: false,
      statusCode: 400,
      message: 'No valid or eligible URLs provided for IndexNow submission.',
      submittedUrls: [],
      endpoint,
      keyLocation,
    }
  }

  // In dry run mode, return simulated payload
  if (options.dryRun) {
    return {
      success: true,
      statusCode: 200,
      message: `[Dry Run] Prepared payload with ${sanitizedUrls.length} URLs for host "${host}". Key file: ${keyLocation}`,
      submittedUrls: sanitizedUrls,
      endpoint,
      keyLocation,
    }
  }

  const payload = {
    host,
    key,
    keyLocation,
    urlList: sanitizedUrls,
  }

  let attempt = 0
  let lastError: Error | null = null

  while (attempt <= maxRetries) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'User-Agent': 'NeelStack-IndexNow-Client/1.0',
        },
        body: JSON.stringify(payload),
      })

      const rawResponse = await response.text()
      const statusCode = response.status
      const isSuccess = statusCode === 200 || statusCode === 202

      return {
        success: isSuccess,
        statusCode,
        message: getStatusDescription(statusCode),
        submittedUrls: sanitizedUrls,
        endpoint,
        keyLocation,
        rawResponse: rawResponse.trim() || undefined,
      }
    } catch (err: unknown) {
      lastError = err instanceof Error ? err : new Error(String(err))
      attempt++

      if (attempt <= maxRetries) {
        // Exponential backoff wait (e.g. 500ms, 1000ms)
        const delay = Math.pow(2, attempt) * 250
        await new Promise((resolve) => setTimeout(resolve, delay))
      }
    }
  }

  return {
    success: false,
    statusCode: 500,
    message: `Network failure while connecting to ${endpoint}: ${lastError?.message || 'Unknown network error'}`,
    submittedUrls: sanitizedUrls,
    endpoint,
    keyLocation,
  }
}
