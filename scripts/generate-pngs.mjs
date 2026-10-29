import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const ROOT = process.cwd()
const PUBLIC_DIR = path.join(ROOT, 'public')
const APP_DIR = path.join(ROOT, 'app')

async function run() {
  console.log('Generating Google-compliant brand PNG & ICO assets...')

  const logoDarkSvgPath = path.join(PUBLIC_DIR, 'logo-dark.svg')
  const logoLightSvgPath = path.join(PUBLIC_DIR, 'logo-light.svg')
  const logoMarkDarkSvgPath = path.join(PUBLIC_DIR, 'logo-mark-dark.svg')
  const socialAvatarSvgPath = path.join(PUBLIC_DIR, 'social-avatar.svg')

  const logoDarkSvg = fs.readFileSync(logoDarkSvgPath)
  const logoLightSvg = fs.readFileSync(logoLightSvgPath)
  const logoMarkDarkSvg = fs.readFileSync(logoMarkDarkSvgPath)
  const socialAvatarSvg = fs.readFileSync(socialAvatarSvgPath)

  // 1. Master High-Contrast Favicon Badge SVG
  // Designed for Google Search 16x16 SERP snippet visibility, high-DPI retina, and dark/light UI
  const faviconBadgeSvg = `
    <svg width="192" height="192" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="192" height="192" rx="42" fill="#070B14"/>
      <g transform="translate(32, 32) scale(1.28)">
        <defs>
          <linearGradient id="favicon-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#3B82F6" />
            <stop offset="100%" stop-color="#8B5CF6" />
          </linearGradient>
        </defs>
        <!-- Top Half (Royal Blue) -->
        <path
          d="M15.36,70 L15.36,30 L50,10 L84.64,30"
          fill="none"
          stroke="#3B82F6"
          stroke-width="6.8"
          stroke-linejoin="round"
          stroke-linecap="round"
        />
        <!-- Bottom Half (Rich Violet) -->
        <path
          d="M84.64,30 L84.64,70 L50,90 L15.36,70"
          fill="none"
          stroke="#8B5CF6"
          stroke-width="6.8"
          stroke-linejoin="round"
          stroke-linecap="round"
        />
        <!-- Geometric N Synapse -->
        <path
          d="M38,67 V33 L62,67 V33"
          fill="none"
          stroke="url(#favicon-grad)"
          stroke-width="8.4"
          stroke-linejoin="round"
          stroke-linecap="butt"
        />
      </g>
    </svg>
  `
  const faviconBadgeBuffer = Buffer.from(faviconBadgeSvg)

  // Write vector icon.svg in public and app
  fs.writeFileSync(path.join(PUBLIC_DIR, 'icon.svg'), faviconBadgeSvg.trim())
  fs.writeFileSync(path.join(APP_DIR, 'icon.svg'), faviconBadgeSvg.trim())

  // 2. Google Search & Web Favicon PNGs (Multiples of 48px square per Google Search guidelines)
  console.log('Generating Google Search compliant favicon PNGs (48x48, 96x96, 144x144)...')
  await sharp(faviconBadgeBuffer, { density: 300 }).resize(48, 48).png().toFile(path.join(PUBLIC_DIR, 'favicon-48x48.png'))
  await sharp(faviconBadgeBuffer, { density: 300 }).resize(96, 96).png().toFile(path.join(PUBLIC_DIR, 'favicon-96x96.png'))
  await sharp(faviconBadgeBuffer, { density: 300 }).resize(144, 144).png().toFile(path.join(PUBLIC_DIR, 'favicon-144x144.png'))
  await sharp(faviconBadgeBuffer, { density: 300 }).resize(96, 96).png().toFile(path.join(PUBLIC_DIR, 'favicon.png'))
  await sharp(faviconBadgeBuffer, { density: 300 }).resize(32, 32).png().toFile(path.join(PUBLIC_DIR, 'favicon-32x32.png'))
  await sharp(faviconBadgeBuffer, { density: 300 }).resize(16, 16).png().toFile(path.join(PUBLIC_DIR, 'favicon-16x16.png'))
  await sharp(faviconBadgeBuffer, { density: 300 }).resize(48, 48).png().toFile(path.join(APP_DIR, 'icon.png'))

  // 3. Apple Touch Icon & Android Chrome PWA Icons
  console.log('Generating Apple Touch Icon & Android Chrome PWA assets...')
  await sharp(faviconBadgeBuffer, { density: 300 }).resize(180, 180).png().toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png'))
  await sharp(faviconBadgeBuffer, { density: 300 }).resize(180, 180).png().toFile(path.join(APP_DIR, 'apple-icon.png'))
  await sharp(faviconBadgeBuffer, { density: 300 }).resize(192, 192).png().toFile(path.join(PUBLIC_DIR, 'android-chrome-192x192.png'))
  await sharp(faviconBadgeBuffer, { density: 300 }).resize(512, 512).png().toFile(path.join(PUBLIC_DIR, 'android-chrome-512x512.png'))

  // 4. Social Avatar
  console.log('Generating social-avatar.png and social-logo.png...')
  await sharp(socialAvatarSvg, { density: 300 }).resize(512, 512).png().toFile(path.join(PUBLIC_DIR, 'social-avatar.png'))
  await sharp(socialAvatarSvg, { density: 300 }).resize(512, 512).png().toFile(path.join(PUBLIC_DIR, 'social-logo.png'))

  // 5. Logo Marks (Monogram)
  console.log('Generating logo-mark.png, logo-mark-dark.png, logo-mark-light.png...')
  await sharp(faviconBadgeBuffer, { density: 300 }).resize(512, 512).png().toFile(path.join(PUBLIC_DIR, 'logo-mark.png'))
  await sharp(logoMarkDarkSvg, { density: 300 }).resize(512, 512).png().toFile(path.join(PUBLIC_DIR, 'logo-mark-dark.png'))
  await sharp(faviconBadgeBuffer, { density: 300 }).resize(512, 512).png().toFile(path.join(PUBLIC_DIR, 'logo-mark-light.png'))

  // 6. Full Wordmark Logos
  console.log('Generating logo-dark.png, logo-light.png, logo.png...')
  await sharp(logoDarkSvg, { density: 300 }).resize(1000, 200, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(PUBLIC_DIR, 'logo-dark.png'))
  await sharp(logoLightSvg, { density: 300 }).resize(1000, 200, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(PUBLIC_DIR, 'logo-light.png'))
  await sharp(logoDarkSvg, { density: 300 }).resize(1000, 200, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(PUBLIC_DIR, 'logo.png'))

  // 7. OpenGraph & Twitter Billboard PNGs (1200x630)
  console.log('Generating og-image.png and twitter-image.png...')
  const ogSvgPath = path.join(PUBLIC_DIR, 'og-billboard-light.svg')
  if (fs.existsSync(ogSvgPath)) {
    const ogSvg = fs.readFileSync(ogSvgPath)
    await sharp(ogSvg, { density: 150 }).resize(1200, 630).png().toFile(path.join(PUBLIC_DIR, 'og-image.png'))
    await sharp(ogSvg, { density: 150 }).resize(1200, 630).png().toFile(path.join(PUBLIC_DIR, 'twitter-image.png'))
  }

  // 8. Multi-size ICO file for /favicon.ico (contains 16x16, 32x32, 48x48)
  console.log('Generating multi-size /favicon.ico (16px, 32px, 48px)...')
  const b16 = await sharp(faviconBadgeBuffer, { density: 300 }).resize(16, 16).png().toBuffer()
  const b32 = await sharp(faviconBadgeBuffer, { density: 300 }).resize(32, 32).png().toBuffer()
  const b48 = await sharp(faviconBadgeBuffer, { density: 300 }).resize(48, 48).png().toBuffer()

  const icoHeader = Buffer.alloc(6)
  icoHeader.writeUInt16LE(0, 0) // Reserved
  icoHeader.writeUInt16LE(1, 2) // Type: ICO
  icoHeader.writeUInt16LE(3, 4) // Number of images: 3

  const images = [
    { width: 16, height: 16, buffer: b16 },
    { width: 32, height: 32, buffer: b32 },
    { width: 48, height: 48, buffer: b48 },
  ]

  let offset = 6 + (16 * images.length)
  const entries = []
  for (const img of images) {
    const entry = Buffer.alloc(16)
    entry.writeUInt8(img.width, 0)
    entry.writeUInt8(img.height, 1)
    entry.writeUInt8(0, 2) // Palette
    entry.writeUInt8(0, 3) // Reserved
    entry.writeUInt16LE(1, 4) // Color planes
    entry.writeUInt16LE(32, 6) // Bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8) // Size of bitmap
    entry.writeUInt32LE(offset, 12) // Offset to bitmap
    entries.push(entry)
    offset += img.buffer.length
  }

  const icoBuffer = Buffer.concat([icoHeader, ...entries, ...images.map(img => img.buffer)])
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.ico'), icoBuffer)
  fs.writeFileSync(path.join(APP_DIR, 'favicon.ico'), icoBuffer)

  console.log('✓ All Google-compliant favicon, logo, and brand assets successfully generated!')
}

run().catch(err => {
  console.error(err)
  process.exit(1)
})
