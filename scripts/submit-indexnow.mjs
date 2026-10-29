#!/usr/bin/env node

/**
 * NeelStack Solutions — IndexNow Submission CLI
 *
 * Automatically notifies Microsoft Bing and participating IndexNow search engines
 * (Yandex, Seznam.cz, Naver) when pages are created or updated.
 *
 * Usage:
 *   node scripts/submit-indexnow.mjs                 # Submits priority URLs
 *   node scripts/submit-indexnow.mjs --dry-run       # Simulates payload without network request
 *   node scripts/submit-indexnow.mjs --all           # Submits all sitemap URLs
 *   node scripts/submit-indexnow.mjs --url <URL>     # Submits a specific URL
 *   node scripts/submit-indexnow.mjs --verify-key    # Verifies local & remote key file existence
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

const DEFAULT_KEY = '4efb3296786e407f973201563accd273'
const INDEXNOW_API_ENDPOINT = 'https://api.indexnow.org/indexnow'
const BING_INDEXNOW_ENDPOINT = 'https://www.bing.com/indexnow'

function parseArgs() {
  const args = process.argv.slice(2)
  const options = {
    dryRun: false,
    all: false,
    priority: true,
    url: null,
    verifyKey: false,
    useBingEndpoint: false,
    help: false,
  }

  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    if (arg === '--dry-run') options.dryRun = true
    else if (arg === '--all') {
      options.all = true
      options.priority = false
    } else if (arg === '--priority') {
      options.priority = true
      options.all = false
    } else if (arg === '--url' && args[i + 1]) {
      options.url = args[++i]
      options.priority = false
      options.all = false
    } else if (arg === '--verify-key') options.verifyKey = true
    else if (arg === '--bing') options.useBingEndpoint = true
    else if (arg === '--help' || arg === '-h') options.help = true
  }

  return options
}

function getSiteUrl() {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (envUrl) return envUrl.replace(/\/+$/, '')
  return 'https://neelstack.com'
}

function getKey() {
  return process.env.INDEXNOW_KEY?.trim() || DEFAULT_KEY
}

function getHost(baseUrl) {
  try {
    return new URL(baseUrl).hostname
  } catch {
    return 'neelstack.com'
  }
}

function verifyLocalKeyFile(key) {
  const expectedPath = path.join(rootDir, 'public', `${key}.txt`)
  if (!fs.existsSync(expectedPath)) {
    console.error(`❌ Local key file missing: public/${key}.txt`)
    return false
  }

  const content = fs.readFileSync(expectedPath, 'utf8').trim()
  if (content !== key) {
    console.error(`❌ Key file content mismatch! Expected "${key}", found "${content}"`)
    return false
  }

  console.log(`✅ Local verification key verified: public/${key}.txt matches API key.`)
  return true
}

async function verifyRemoteKeyFile(baseUrl, key) {
  const remoteUrl = `${baseUrl}/${key}.txt`
  console.log(`🔍 Checking remote verification URL: ${remoteUrl}`)
  try {
    const res = await fetch(remoteUrl, { method: 'GET' })
    if (!res.ok) {
      console.warn(`⚠️ Remote key returned HTTP ${res.status}. (Site might not be deployed yet).`)
      return false
    }
    const text = (await res.text()).trim()
    if (text === key) {
      console.log(`✅ Remote verification URL is live and serves exact key!`)
      return true
    } else {
      console.warn(`⚠️ Remote verification URL returned non-matching content: "${text.substring(0, 50)}..."`)
      return false
    }
  } catch (err) {
    console.warn(`⚠️ Could not reach remote URL: ${err.message}`)
    return false
  }
}

function getPriorityUrlList(baseUrl) {
  return [
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
    `${baseUrl}/products/dhruvaos`,
    `${baseUrl}/products/toolvines`,
    `${baseUrl}/services/autonomous-agents`,
    `${baseUrl}/services/fullstack-ai-engineering`,
    `${baseUrl}/services/llm-rag-integration`,
    `${baseUrl}/services/enterprise-chatbots`,
    `${baseUrl}/services/cloud-native-modernization`,
    `${baseUrl}/services/mvp-development`,
  ]
}

function getAllUrlList(baseUrl) {
  const priority = getPriorityUrlList(baseUrl)
  const additional = [
    `${baseUrl}/industries`,
    `${baseUrl}/portfolio`,
    `${baseUrl}/training`,
    `${baseUrl}/roadmap`,
    `${baseUrl}/security`,
    `${baseUrl}/careers`,
    `${baseUrl}/support`,
    `${baseUrl}/privacy`,
    `${baseUrl}/terms`,
    `${baseUrl}/refund-policy`,
    `${baseUrl}/blog/why-vertical-ai-operating-systems-beat-horizontal-saas`,
    `${baseUrl}/blog/building-production-rag-pipelines-anti-patterns`,
    `${baseUrl}/blog/dhruvaos-modern-education-infrastructure`,
    `${baseUrl}/blog/autonomous-agent-swarms-langgraph-mcp`,
    `${baseUrl}/blog/agentic-workflows-replacing-traditional-middleware`,
    `${baseUrl}/blog/cost-optimization-strategies-frontier-llm-apis`,
    `${baseUrl}/services/autonomous-agents/for/education`,
    `${baseUrl}/services/autonomous-agents/for/healthcare`,
    `${baseUrl}/services/autonomous-agents/for/fintech`,
  ]
  return Array.from(new Set([...priority, ...additional]))
}

async function main() {
  const options = parseArgs()

  if (options.help) {
    console.log(`
NeelStack IndexNow CLI
======================
Commands:
  node scripts/submit-indexnow.mjs               Submit priority pages (Home, Services, Products, Blog)
  node scripts/submit-indexnow.mjs --all         Submit all public URLs from sitemap
  node scripts/submit-indexnow.mjs --url <URL>   Submit a single specific URL
  node scripts/submit-indexnow.mjs --dry-run     Preview URLs without making network requests
  node scripts/submit-indexnow.mjs --verify-key  Verify local & remote key file existence
  node scripts/submit-indexnow.mjs --bing        Use Bing endpoint directly
`)
    return
  }

  const baseUrl = getSiteUrl()
  const key = getKey()
  const host = getHost(baseUrl)
  const keyLocation = `${baseUrl}/${key}.txt`
  const endpoint = options.useBingEndpoint ? BING_INDEXNOW_ENDPOINT : INDEXNOW_API_ENDPOINT

  console.log(`\n======================================================`)
  console.log(`🚀 NeelStack Solutions — IndexNow Engine`)
  console.log(`======================================================`)
  console.log(`Domain:        ${host}`)
  console.log(`Base URL:      ${baseUrl}`)
  console.log(`IndexNow Key:  ${key}`)
  console.log(`Key Location:  ${keyLocation}`)
  console.log(`Endpoint:      ${endpoint}`)
  console.log(`Dry Run:       ${options.dryRun ? 'YES (Simulated)' : 'NO (Live Submission)'}`)
  console.log(`------------------------------------------------------\n`)

  const isLocalKeyOk = verifyLocalKeyFile(key)
  if (!isLocalKeyOk) {
    console.error('Aborting: Please ensure public/<YOUR_KEY>.txt exists with your key.')
    process.exitCode = 1
    return
  }

  if (options.verifyKey) {
    await verifyRemoteKeyFile(baseUrl, key)
    return
  }

  let urls = []
  if (options.url) {
    urls = [options.url]
  } else if (options.all) {
    urls = getAllUrlList(baseUrl)
  } else {
    urls = getPriorityUrlList(baseUrl)
  }

  console.log(`Targeting ${urls.length} URLs:`)
  urls.slice(0, 8).forEach((u) => console.log(` • ${u}`))
  if (urls.length > 8) {
    console.log(`   ... and ${urls.length - 8} more.`)
  }
  console.log('')

  const payload = {
    host,
    key,
    keyLocation,
    urlList: urls,
  }

  if (options.dryRun) {
    console.log(`✨ [DRY RUN SUCCESSFUL] Payload ready for submission:`)
    console.log(JSON.stringify(payload, null, 2))
    return
  }

  console.log(`📤 Sending POST request to ${endpoint}...`)

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'User-Agent': 'NeelStack-IndexNow-CLI/1.0',
      },
      body: JSON.stringify(payload),
    })

    const status = response.status
    const text = await response.text()

    console.log(`\n------------------------------------------------------`)
    console.log(`HTTP Status:   ${status}`)

    if (status === 200) {
      console.log(`✅ Success (200 OK): URLs submitted and acknowledged by search engines.`)
    } else if (status === 202) {
      console.log(`ℹ️ Accepted (202): URLs received. Key validation is pending.`)
    } else if (status === 400) {
      console.log(`❌ Bad Request (400): Invalid request format.`)
    } else if (status === 403) {
      console.log(`❌ Forbidden (403): Key not found or key location inaccessible at ${keyLocation}.`)
    } else if (status === 422) {
      console.log(`❌ Unprocessable (422): URLs do not match host "${host}".`)
    } else if (status === 429) {
      console.log(`⚠️ Too Many Requests (429): Rate limited by IndexNow.`)
    } else {
      console.log(`Response body: ${text || '(empty)'}`)
    }
    console.log(`------------------------------------------------------\n`)

    if (status === 200 || status === 202) {
      console.log(`🎉 Search engines (Bing, Yandex, Seznam) have been notified of your URLs!`)
      console.log(`Verify delivery in Bing Webmaster Tools -> IndexNow tab.`)
    }
  } catch (err) {
    console.error(`❌ Network error while submitting to IndexNow: ${err.message}`)
    process.exitCode = 1
  }
}

main().catch((err) => {
  console.error('Fatal CLI Error:', err)
  process.exitCode = 1
})
