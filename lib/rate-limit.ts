// Simple in-memory rate limiter for serverless environments (best effort per container)
// For robust cluster-wide rate limiting, use Cloudflare WAF Rate Limiting or Vercel KV/Redis.

interface RateLimitTracker {
  count: number
  resetTime: number
}

const trackerStore = new Map<string, RateLimitTracker>()

// Clean up expired entries every 5 minutes to prevent memory leaks
if (typeof global !== 'undefined') {
  const globalAny = global as any
  if (!globalAny.__rateLimitCleanupInterval) {
    globalAny.__rateLimitCleanupInterval = setInterval(() => {
      const now = Date.now()
      for (const [key, value] of trackerStore.entries()) {
        if (now > value.resetTime) {
          trackerStore.delete(key)
        }
      }
    }, 5 * 60 * 1000)
  }
}

interface RateLimitOptions {
  limit: number      // Max requests allowed in the window
  windowMs: number   // Time window in milliseconds
}

export function rateLimit(ip: string, options: RateLimitOptions): { success: boolean; limit: number; remaining: number } {
  const now = Date.now()
  const key = ip

  let tracker = trackerStore.get(key)

  if (!tracker || now > tracker.resetTime) {
    // Start a new window
    tracker = {
      count: 1,
      resetTime: now + options.windowMs
    }
    trackerStore.set(key, tracker)
    return {
      success: true,
      limit: options.limit,
      remaining: options.limit - 1
    }
  }

  // Increment within current window
  tracker.count += 1
  const remaining = Math.max(0, options.limit - tracker.count)

  if (tracker.count > options.limit) {
    return {
      success: false,
      limit: options.limit,
      remaining: 0
    }
  }

  return {
    success: true,
    limit: options.limit,
    remaining
  }
}
