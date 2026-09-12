async function verify() {
  const routes = [
    { path: '/', expectedCanonical: 'https://neelstack.com' },
    { path: '/about', expectedCanonical: 'https://neelstack.com/about' },
    { path: '/products', expectedCanonical: 'https://neelstack.com/products' },
    { path: '/blog', expectedCanonical: 'https://neelstack.com/blog' },
    { path: '/services', expectedCanonical: 'https://neelstack.com/services' },
    { path: '/contact', expectedCanonical: 'https://neelstack.com/contact' },
    { path: '/pricing', expectedCanonical: 'https://neelstack.com/pricing' },
    { path: '/careers', expectedCanonical: 'https://neelstack.com/careers' },
    { path: '/technologies', expectedCanonical: 'https://neelstack.com/technologies' },
    { path: '/case-studies', expectedCanonical: 'https://neelstack.com/case-studies' },
  ]

  console.log('Verifying child canonical URLs:')
  for (const r of routes) {
    const res = await fetch(`http://localhost:3000${r.path}`)
    const text = await res.text()
    const match = text.match(/<link rel="canonical" href="([^"]+)"/)
    const canonical = match ? match[1] : 'NONE'
    const isCorrect = canonical === r.expectedCanonical
    console.log(`${r.path.padEnd(16)} -> ${canonical} [${isCorrect ? 'PASS' : 'FAIL'}]`)
  }
}

verify().catch(console.error)
