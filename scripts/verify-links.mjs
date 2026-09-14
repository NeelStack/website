import fs from 'fs'
import path from 'path'

const appDir = 'd:/NeelStack/website/app'
const componentsDir = 'd:/NeelStack/website/components'
const constantsDir = 'd:/NeelStack/website/constants'

// Find all tsx and ts files
function getFiles(dir) {
  let results = []
  const list = fs.readdirSync(dir)
  list.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(filePath))
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(filePath)
    }
  })
  return results
}

const allFiles = [...getFiles(appDir), ...getFiles(componentsDir), ...getFiles(constantsDir)]

const hrefRegex = /href=(?:["']([^"']+)["']|\{[`"']([^`"']+)["'`]\})/g

const links = new Set()
const externalLinks = new Set()
const mailtoLinks = new Set()
const hashLinks = []

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf8')
  let match
  while ((match = hrefRegex.exec(content)) !== null) {
    const link = match[1] || match[2]
    if (!link) continue

    if (link === '#' || link === '/#') {
      // check if it's hash only
      if (link === '#') hashLinks.push({ file, link })
    } else if (link.startsWith('mailto:')) {
      mailtoLinks.add(link)
    } else if (link.startsWith('http://') || link.startsWith('https://')) {
      externalLinks.add(link)
    } else if (link.startsWith('/')) {
      links.add(link.split('?')[0].split('#')[0])
    }
  }
}

console.log(`Found ${links.size} unique internal routes, ${externalLinks.size} external links, ${mailtoLinks.size} mailto links.`)
console.log(`Dead hash links (href="#"): ${hashLinks.length}`)

if (hashLinks.length > 0) {
  console.log('Dead hash links found:', hashLinks)
}

console.log('\nInternal routes found:')
for (const l of [...links].sort()) {
  console.log(' - ' + l)
}
