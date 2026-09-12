/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── SEO: enforce no trailing slash so /page/ redirects to /page
  // This prevents duplicate content from both URL forms being indexed.
  trailingSlash: false,

  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  devIndicators: {
    appIsrStatus: false,
  },

  // ── SEO: redirect index.html and index.php requests to canonical paths
  async redirects() {
    return [
      // Critical: index page redirect (audit flagged /index.html and /index.php)
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      // Redirect any path ending in /index.html → parent path
      {
        source: '/:path*/index.html',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/:path*/index.php',
        destination: '/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
