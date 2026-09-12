import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { getSiteUrl } from '@/lib/site-url'
import { JsonLd } from '@/components/seo/json-ld'
import { CurrencyProvider } from '@/components/providers/currency-provider'


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
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
    default: 'NeelStack — Best Software Development & Enterprise AI Company in India',
    template: '%s | NeelStack',
  },
  description:
    'NeelStack is a premier enterprise AI and custom software engineering company based in Gorakhpur, UP, India. We build autonomous agentic AI, enterprise chatbots, custom ERPs, SaaS platforms, and modern cloud applications for businesses worldwide.',
  keywords: [
    'best software development company in India',
    'software development company in Gorakhpur',
    'AI development company India',
    'build AI chatbot India',
    'agentic AI company Gorakhpur UP',
    'custom software company Uttar Pradesh',
    'enterprise software development company India',
    'hire AI developers India',
    'Model Context Protocol MCP developers',
    'LangGraph multi-agent engineering',
    'custom ERP software development India',
    'Next.js 16 app development company',
    'SaaS product engineering firm',
    'best IT company in Gorakhpur',
    'NeelStack Solutions Private Limited',
  ],
  authors: [{ name: 'NeelStack', url: getSiteUrl() }],
  creator: 'NeelStack',
  publisher: 'NeelStack',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: getSiteUrl(),
    siteName: 'NeelStack',
    title: 'NeelStack | Enterprise AI & Software Solutions',
    description:
      'Building enterprise software, AI solutions, SaaS products, and custom applications for organizations worldwide.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'NeelStack — Enterprise AI & Software Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@neelstack',
    creator: '@neelstack',
    title: 'NeelStack | Enterprise AI & Software Solutions',
    description:
      'Building enterprise software, AI solutions, SaaS products, and custom applications for organizations worldwide.',
    images: ['/twitter-image'],
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
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? { google: process.env.GOOGLE_SITE_VERIFICATION }
      : {}),
    yandex: '677af401490644ff',
    other: {
      'msvalidate.01': '1DF5012D21BE5D63AD02D85C003C479D',
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
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
      className={`${inter.variable} ${jakarta.variable} ${geist.variable} ${geistMono.variable} bg-background`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('theme');
                if (t === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen" suppressHydrationWarning>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4LKMDMPC3J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4LKMDMPC3J');
          `}
        </Script>

        {/* Skip-to-content: WCAG 2.4.1 — visible only on keyboard focus */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Skip to main content
        </a>
        {/* Organization & ProfessionalService JSON-LD Structured Data */}
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': ['Organization', 'ProfessionalService'],
            name: 'NeelStack Solutions Private Limited',
            alternateName: ['NeelStack', 'NeelStack AI', 'NeelStack Technologies'],
            url: getSiteUrl(),
            logo: `${getSiteUrl()}/icon.svg`,
            image: `${getSiteUrl()}/opengraph-image`,
            description:
              'NeelStack is a premier enterprise software development and Agentic AI company based in Gorakhpur, Uttar Pradesh, India. We engineer autonomous multi-agent systems, AI chatbots, custom ERPs, and high-performance cloud applications for businesses worldwide.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Gorakhpur',
              addressLocality: 'Gorakhpur',
              addressRegion: 'Uttar Pradesh',
              postalCode: '273001',
              addressCountry: 'IN',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 26.7606,
              longitude: 83.3732,
            },
            areaServed: [
              { '@type': 'Country', name: 'India' },
              { '@type': 'State', name: 'Uttar Pradesh' },
              { '@type': 'City', name: 'Gorakhpur' },
              { '@type': 'Country', name: 'United States' },
              { '@type': 'Country', name: 'United Kingdom' },
              { '@type': 'Country', name: 'United Arab Emirates' },
              { '@type': 'AdministrativeArea', name: 'Worldwide' },
            ],
            priceRange: '$$',
            knowsAbout: [
              'Agentic AI Development',
              'AI Chatbots & Cognitive Assistants',
              'Model Context Protocol (MCP)',
              'LangGraph Multi-Agent Workflows',
              'Microsoft GraphRAG & Vector Search',
              'Custom Enterprise ERP Systems',
              'Next.js 16 Web Application Engineering',
              'Rust WebAssembly Development',
              'Python FastAPI Microservices',
              'PostgreSQL Schema-per-Tenant Architecture',
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Enterprise Software & AI Engineering Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Autonomous AI Agents & Enterprise Chatbots',
                    description: 'Custom multi-agent workflows, Model Context Protocol tools, and cognitive search engines.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Custom Enterprise Software & ERP Development',
                    description: 'Schema-isolated multi-tenant ERP, supply chain, and CRM platforms with automated compliance.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Modern Web & WebAssembly Engineering',
                    description: 'Sub-second Next.js 16 web applications and client-side Rust WASM tools.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Cross-Platform Mobile Application Development',
                    description: '60 FPS React Native and Flutter mobile applications for iOS and Android.',
                  },
                },
              ],
            },
            sameAs: [
              'https://x.com/neelstack',
              'https://linkedin.com/company/neelstack',
              'https://github.com/neelstack',
              'https://www.youtube.com/@NeelStack',
              'https://www.instagram.com/_neelstack/',
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'contact@neelstack.com',
              contactType: 'customer service',
              areaServed: 'Worldwide',
              availableLanguage: ['English', 'Hindi'],
            },
          }}
        />
        <CurrencyProvider>
          {children}
        </CurrencyProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
