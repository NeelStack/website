/**
 * Returns the canonical base URL for the site.
 *
 * Priority:
 *  1. NEXT_PUBLIC_SITE_URL env var  (set in .env.local or Vercel dashboard)
 *  2. Fallback to production URL
 *
 * Pattern from ToolVines AI Development Rules (Rule 2 — Canonical URL Helper):
 *   Never hardcode production URLs in metadata. Use an env-aware helper so that
 *   preview deployments and local dev get correct canonical/OG URLs.
 */
export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? 'https://neelstack.com'
}
