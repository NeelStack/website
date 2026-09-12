import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const ROOT = process.cwd()
const PUBLIC_DIR = path.join(ROOT, 'public')
const APP_DIR = path.join(ROOT, 'app')

async function run() {
  console.log('Generating PNG assets from brand SVGs...')

  const iconSvgPath = path.join(PUBLIC_DIR, 'icon.svg')
  const logoDarkSvgPath = path.join(PUBLIC_DIR, 'logo-dark.svg')
  const logoLightSvgPath = path.join(PUBLIC_DIR, 'logo-light.svg')
  const logoMarkDarkSvgPath = path.join(PUBLIC_DIR, 'logo-mark-dark.svg')
  const socialAvatarSvgPath = path.join(PUBLIC_DIR, 'social-avatar.svg')

  const iconSvg = fs.readFileSync(iconSvgPath)
  const logoDarkSvg = fs.readFileSync(logoDarkSvgPath)
  const logoLightSvg = fs.readFileSync(logoLightSvgPath)
  const logoMarkDarkSvg = fs.readFileSync(logoMarkDarkSvgPath)
  const socialAvatarSvg = fs.readFileSync(socialAvatarSvgPath)

  // 1. Favicon PNGs
  console.log('Generating favicon PNGs...')
  await sharp(iconSvg, { density: 300 }).resize(16, 16).png().toFile(path.join(PUBLIC_DIR, 'favicon-16x16.png'))
  await sharp(iconSvg, { density: 300 }).resize(32, 32).png().toFile(path.join(PUBLIC_DIR, 'favicon-32x32.png'))
  await sharp(iconSvg, { density: 300 }).resize(32, 32).png().toFile(path.join(PUBLIC_DIR, 'favicon.png'))
  await sharp(iconSvg, { density: 300 }).resize(48, 48).png().toFile(path.join(PUBLIC_DIR, 'favicon-48x48.png'))
  await sharp(iconSvg, { density: 300 }).resize(32, 32).png().toFile(path.join(APP_DIR, 'icon.png'))

  // 2. Apple Touch Icon & Android Chrome
  console.log('Generating Apple Touch Icon & Android Chrome...')
  // For Apple Touch Icon, render on sleek dark background with padding
  const appleIconSvg = `
    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="180" height="180" rx="36" fill="#070B14"/>
      <g transform="translate(25, 25) scale(1.3)">
        <defs>
          <linearGradient id="apple-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#3B72FE" />
            <stop offset="100%" stop-color="#2EC7F2" />
          </linearGradient>
        </defs>
        <path
          d="M50,10 L84.64,30 V70 L50,90 L15.36,70 V30 Z"
          fill="none"
          stroke="url(#apple-grad)"
          stroke-width="5.8"
          stroke-linejoin="round"
          stroke-linecap="round"
        />
        <path
          d="M39,68 V32 L65.5,62 V31 L67,28.4"
          fill="none"
          stroke="url(#apple-grad)"
          stroke-width="8"
          stroke-linejoin="round"
          stroke-linecap="butt"
        />
      </g>
    </svg>
  `
  await sharp(Buffer.from(appleIconSvg)).resize(180, 180).png().toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png'))
  await sharp(Buffer.from(appleIconSvg)).resize(180, 180).png().toFile(path.join(APP_DIR, 'apple-icon.png'))
  await sharp(Buffer.from(appleIconSvg)).resize(192, 192).png().toFile(path.join(PUBLIC_DIR, 'android-chrome-192x192.png'))
  await sharp(Buffer.from(appleIconSvg)).resize(512, 512).png().toFile(path.join(PUBLIC_DIR, 'android-chrome-512x512.png'))

  // 3. Social Avatar
  console.log('Generating social-avatar.png and social-logo.png...')
  await sharp(socialAvatarSvg, { density: 300 }).resize(512, 512).png().toFile(path.join(PUBLIC_DIR, 'social-avatar.png'))
  await sharp(socialAvatarSvg, { density: 300 }).resize(512, 512).png().toFile(path.join(PUBLIC_DIR, 'social-logo.png'))

  // 4. Logo Marks (Monogram)
  console.log('Generating logo-mark.png, logo-mark-dark.png, logo-mark-light.png...')
  await sharp(iconSvg, { density: 300 }).resize(512, 512).png().toFile(path.join(PUBLIC_DIR, 'logo-mark.png'))
  await sharp(iconSvg, { density: 300 }).resize(512, 512).png().toFile(path.join(PUBLIC_DIR, 'logo-mark-dark.png'))
  await sharp(iconSvg, { density: 300 }).resize(512, 512).png().toFile(path.join(PUBLIC_DIR, 'logo-mark-light.png'))

  // 5. Full Wordmark Logos
  console.log('Generating logo-dark.png, logo-light.png, logo.png...')
  // Higher resolution for crisp rendering
  await sharp(logoDarkSvg, { density: 300 }).resize(1000, 200, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(PUBLIC_DIR, 'logo-dark.png'))
  await sharp(logoLightSvg, { density: 300 }).resize(1000, 200, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(PUBLIC_DIR, 'logo-light.png'))
  // Standard logo.png matches logo-dark.png (transparent background with crisp white Neel and gradient Stack)
  await sharp(logoDarkSvg, { density: 300 }).resize(1000, 200, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(PUBLIC_DIR, 'logo.png'))

  // 6. OpenGraph & Twitter Billboard PNGs (1200x630)
  console.log('Generating og-image.png and twitter-image.png...')
  const ogSvgPath = path.join(PUBLIC_DIR, 'og-billboard-light.svg')
  if (fs.existsSync(ogSvgPath)) {
    const ogSvg = fs.readFileSync(ogSvgPath)
    await sharp(ogSvg, { density: 150 }).resize(1200, 630).png().toFile(path.join(PUBLIC_DIR, 'og-image.png'))
    await sharp(ogSvg, { density: 150 }).resize(1200, 630).png().toFile(path.join(PUBLIC_DIR, 'twitter-image.png'))
  }

  // 7. Multi-size ICO file for /favicon.ico
  console.log('Generating favicon.ico...')
  const b16 = await sharp(iconSvg, { density: 300 }).resize(16, 16).png().toBuffer()
  const b32 = await sharp(iconSvg, { density: 300 }).resize(32, 32).png().toBuffer()
  const b48 = await sharp(iconSvg, { density: 300 }).resize(48, 48).png().toBuffer()

  // Simple ICO builder
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

  console.log('✓ All PNG and ICO assets successfully generated!')
}

run().catch(err => {
  console.error(err)
  process.exit(1)
})
