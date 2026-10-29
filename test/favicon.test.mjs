import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

describe('Google Search Favicon & Icon Compliance', () => {
  it('should have 48x48 PNG favicon required by Google Search guidelines', async () => {
    const file48 = path.join(rootDir, 'public', 'favicon-48x48.png')
    assert.equal(fs.existsSync(file48), true, 'favicon-48x48.png must exist in public/')

    const meta = await sharp(file48).metadata()
    assert.equal(meta.width, 48)
    assert.equal(meta.height, 48)
    assert.equal(meta.format, 'png')
  })

  it('should have 96x96 PNG favicon for high-DPI retina search displays', async () => {
    const file96 = path.join(rootDir, 'public', 'favicon-96x96.png')
    assert.equal(fs.existsSync(file96), true, 'favicon-96x96.png must exist in public/')

    const meta = await sharp(file96).metadata()
    assert.equal(meta.width, 96)
    assert.equal(meta.height, 96)
  })

  it('should have multi-size favicon.ico with valid image entries', () => {
    const icoPath = path.join(rootDir, 'public', 'favicon.ico')
    assert.equal(fs.existsSync(icoPath), true)

    const buf = fs.readFileSync(icoPath)
    const count = buf.readUInt16LE(4)
    assert.ok(count >= 3, 'favicon.ico must contain at least 3 resolutions')
  })

  it('should have Google-compliant PWA manifest with icon declarations', () => {
    const manifestPath = path.join(rootDir, 'public', 'site.webmanifest')
    assert.equal(fs.existsSync(manifestPath), true)

    const content = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
    assert.equal(content.short_name, 'NeelStack')
    assert.ok(content.icons && content.icons.length >= 4)
  })

  it('should have high-resolution Apple touch and Android chrome icons', async () => {
    const applePath = path.join(rootDir, 'public', 'apple-touch-icon.png')
    const androidPath = path.join(rootDir, 'public', 'android-chrome-192x192.png')

    assert.equal(fs.existsSync(applePath), true)
    assert.equal(fs.existsSync(androidPath), true)

    const appleMeta = await sharp(applePath).metadata()
    assert.equal(appleMeta.width, 180)
    assert.equal(appleMeta.height, 180)

    const androidMeta = await sharp(androidPath).metadata()
    assert.equal(androidMeta.width, 192)
    assert.equal(androidMeta.height, 192)
  })
})
