import { NextResponse } from 'next/server'
import {
  getIndexNowKey,
  getIndexNowKeyLocation,
  getPriorityUrls,
  getAllPublicUrls,
  submitToIndexNow,
  getSiteHost,
} from '@/lib/indexnow'

/**
 * Validates request authorization token against INDEXNOW_SECRET if configured.
 */
function isAuthorized(request: Request): boolean {
  const secret = process.env.INDEXNOW_SECRET?.trim()
  if (!secret) {
    // In local development, permit requests if no secret is explicitly configured.
    return process.env.NODE_ENV !== 'production'
  }

  const authHeader = request.headers.get('authorization')
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.substring(7).trim()
    if (token === secret) return true
  }

  const customHeader = request.headers.get('x-indexnow-secret')
  if (customHeader && customHeader.trim() === secret) return true

  const url = new URL(request.url)
  const querySecret = url.searchParams.get('secret')
  return querySecret === secret
}

/**
 * GET /api/indexnow
 * Diagnostic endpoint for inspecting IndexNow configuration and public URL counts.
 */
export async function GET(request: Request) {
  const host = getSiteHost()
  const key = getIndexNowKey()
  const keyLocation = getIndexNowKeyLocation(key)
  const priorityCount = getPriorityUrls().length
  const totalPublicCount = getAllPublicUrls().length

  const authorized = isAuthorized(request)

  return NextResponse.json(
    {
      service: 'NeelStack IndexNow Hub',
      host,
      keyConfigured: Boolean(key),
      keyLocation,
      priorityUrlCount: priorityCount,
      totalPublicUrlCount: totalPublicCount,
      authenticated: authorized,
      samplePriorityUrls: authorized ? getPriorityUrls().slice(0, 5) : undefined,
    },
    { status: 200 }
  )
}

/**
 * POST /api/indexnow
 * Submits URLs to IndexNow (Bing and search partners).
 *
 * Payload:
 * {
 *   "mode": "priority" | "all" | "custom",
 *   "urls": ["https://neelstack.com/custom-page"],
 *   "dryRun": false
 * }
 */
export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      {
        error: 'Unauthorized',
        message: 'A valid INDEXNOW_SECRET token is required to trigger search engine submissions.',
      },
      { status: 401 }
    )
  }

  let body: {
    mode?: 'priority' | 'all' | 'custom'
    urls?: string[]
    dryRun?: boolean
  } = {}

  try {
    body = await request.json()
  } catch {
    // If empty body, default to priority mode
  }

  const mode = body.mode || (body.urls && body.urls.length > 0 ? 'custom' : 'priority')
  const dryRun = Boolean(body.dryRun)

  let targetUrls: string[] = []

  if (mode === 'all') {
    targetUrls = getAllPublicUrls()
  } else if (mode === 'custom' && Array.isArray(body.urls) && body.urls.length > 0) {
    targetUrls = body.urls
  } else {
    targetUrls = getPriorityUrls()
  }

  const result = await submitToIndexNow(targetUrls, { dryRun })

  return NextResponse.json(
    {
      ...result,
      mode,
      totalTargeted: targetUrls.length,
      timestamp: new Date().toISOString(),
    },
    { status: result.statusCode === 200 || result.statusCode === 202 ? 200 : result.statusCode }
  )
}

