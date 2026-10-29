import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  DEFAULT_INDEXNOW_KEY,
  getIndexNowKey,
  getIndexNowKeyLocation,
  getSiteHost,
  filterEligibleUrls,
  getPriorityUrls,
  getAllPublicUrls,
  submitToIndexNow,
} from '../lib/indexnow.ts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

/**
 * Validates that an array contains an exact URL by parsing URL components.
 * Prevents CodeQL 'js/incomplete-url-substring-sanitization' false-positives
 * triggered by string substring searches on URL literals.
 */
function containsExactUrl(urlList, expectedUrl) {
  const target = new URL(expectedUrl)
  return urlList.some((item) => {
    try {
      const parsed = new URL(item)
      return (
        parsed.protocol === target.protocol &&
        parsed.host === target.host &&
        parsed.pathname === target.pathname
      )
    } catch {
      return false
    }
  })
}

describe('IndexNow Verification File', () => {
  it('should verify the static key verification file exists in public/ with exact key content', () => {
    const key = DEFAULT_INDEXNOW_KEY
    const filePath = path.join(rootDir, 'public', `${key}.txt`)

    assert.equal(fs.existsSync(filePath), true, `Expected ${filePath} to exist`)

    const content = fs.readFileSync(filePath, 'utf8').trim()
    assert.equal(content, key, 'Content of key verification file must match the key exactly')
  })
})

describe('IndexNow Configuration & Helpers', () => {
  it('should return correct default key and keyLocation', () => {
    const key = getIndexNowKey()
    assert.equal(key, '4efb3296786e407f973201563accd273')

    const location = getIndexNowKeyLocation()
    assert.match(location, /https:\/\/neelstack\.com\/4efb3296786e407f973201563accd273\.txt/)
  })

  it('should parse site host correctly', () => {
    const host = getSiteHost()
    assert.equal(host, 'neelstack.com')
  })
})

describe('IndexNow URL Filtering and Validation', () => {
  it('should allow valid canonical URLs on the site host', () => {
    const input = [
      'https://neelstack.com',
      'https://neelstack.com/',
      'https://neelstack.com/services',
      'https://neelstack.com/products/dhruvaos',
    ]
    const filtered = filterEligibleUrls(input, 'neelstack.com')
    assert.equal(filtered.length, 3) // https://neelstack.com and https://neelstack.com/ normalize to same root
    assert.ok(containsExactUrl(filtered, 'https://neelstack.com/'))
    assert.ok(containsExactUrl(filtered, 'https://neelstack.com/services'))
    assert.ok(containsExactUrl(filtered, 'https://neelstack.com/products/dhruvaos'))
  })

  it('should filter out external domains, private API paths, and noindex routes', () => {
    const input = [
      'https://neelstack.com/services',
      'https://google.com/search',
      'https://neelstack.com/api/contact',
      'https://neelstack.com/cdn-cgi/trace',
      'https://neelstack.com/not-found',
      'https://neelstack.com/404',
      'javascript:void(0)',
      'mailto:contact@neelstack.com',
      '',
    ]
    const filtered = filterEligibleUrls(input, 'neelstack.com')
    assert.equal(filtered.length, 1)
    assert.equal(filtered[0], 'https://neelstack.com/services')
  })

  it('should strip fragments and normalize URLs', () => {
    const input = [
      'https://neelstack.com/services#features',
      'https://neelstack.com/services',
    ]
    const filtered = filterEligibleUrls(input, 'neelstack.com')
    assert.equal(filtered.length, 1)
    assert.equal(filtered[0], 'https://neelstack.com/services')
  })
})

describe('Priority & All URLs Generators', () => {
  it('should generate non-empty priority URL list including key pillars', () => {
    const priority = getPriorityUrls()
    assert.ok(priority.length > 5)
    assert.ok(containsExactUrl(priority, 'https://neelstack.com/'))
    assert.ok(containsExactUrl(priority, 'https://neelstack.com/services'))
    assert.ok(containsExactUrl(priority, 'https://neelstack.com/products'))
    assert.ok(containsExactUrl(priority, 'https://neelstack.com/technologies'))
    assert.ok(containsExactUrl(priority, 'https://neelstack.com/whitepapers/ai-company-operating-system'))
  })

  it('should generate comprehensive public URLs list', () => {
    const all = getAllPublicUrls()
    assert.ok(all.length >= 25)
    assert.ok(containsExactUrl(all, 'https://neelstack.com/products/dhruvaos'))
    assert.ok(containsExactUrl(all, 'https://neelstack.com/products/toolvines'))
  })
})

describe('Dry Run Submission Simulation', () => {
  it('should simulate submission payload in dryRun mode without firing network calls', async () => {
    const sampleUrls = [
      'https://neelstack.com/',
      'https://neelstack.com/services',
      'https://neelstack.com/products',
    ]
    const res = await submitToIndexNow(sampleUrls, { dryRun: true })
    assert.equal(res.success, true)
    assert.equal(res.statusCode, 200)
    assert.equal(res.submittedUrls.length, 3)
    assert.match(res.message, /\[Dry Run\]/)
    assert.match(res.keyLocation, /4efb3296786e407f973201563accd273\.txt/)
  })

  it('should reject submission if no valid URLs remain after filtering', async () => {
    const res = await submitToIndexNow(['https://external.com/test', '/api/secret'], { dryRun: true })
    assert.equal(res.success, false)
    assert.equal(res.statusCode, 400)
    assert.equal(res.submittedUrls.length, 0)
  })
})

