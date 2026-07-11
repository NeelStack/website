import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, Geist_Mono } from 'next/font/google'
import './globals.css'
import { getSiteUrl } from '@/lib/site-url'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: 'NeelStack Technologies — Enterprise Software & AI Solutions',
    template: '%s | NeelStack Technologies',
  },
  description:
    'NeelStack Technologies builds enterprise software, AI solutions, SaaS products, ERP systems, and custom applications for startups, SMBs, enterprises, healthcare, government, and organizations worldwide.',
  keywords: [
    'enterprise software',
    'AI development',
    'SaaS products',
    'ERP systems',
    'custom software development',
    'cloud solutions',
    'web applications',
    'mobile apps',
    'NeelStack Technologies',
    'software company India',
    'hire developer hourly',
  ],
  authors: [{ name: 'NeelStack Technologies', url: 'https://neelstack.com' }],
  creator: 'NeelStack Technologies',
  publisher: 'NeelStack Technologies',
  // SEO fix: canonical link — resolves "Canonical link not found" audit warning
  alternates: {
    canonical: 'https://neelstack.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://neelstack.com',
    siteName: 'NeelStack Technologies',
    title: 'NeelStack Technologies — Enterprise Software & AI Solutions',
    description:
      'Building enterprise software, AI solutions, SaaS products, and custom applications for organizations worldwide.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NeelStack Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@neelstack',
    creator: '@neelstack',
    title: 'NeelStack Technologies — Enterprise Software & AI Solutions',
    description:
      'Building enterprise software, AI solutions, SaaS products, and custom applications for organizations worldwide.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/icon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#070b14' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} bg-background`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="font-sans antialiased min-h-screen" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
