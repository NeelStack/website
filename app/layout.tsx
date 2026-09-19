import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans, Space_Grotesk, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { getSiteUrl } from '@/lib/site-url'
import { JsonLd } from '@/components/seo/json-ld'
import { CurrencyProvider } from '@/components/providers/currency-provider'
import { MouseSpotlight } from '@/components/effects/mouse-spotlight'
import { NavigationProgressProvider } from '@/components/navigation-progress'


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
    default: 'NeelStack Solutions | Software Products & AI Systems',
    template: '%s | NeelStack Solutions',
  },
  description:
    'NeelStack Solutions builds software products, AI systems and digital platforms, including ToolVines and DhruvaOS.',
  keywords: [
    'NeelStack Solutions',
    'Software products India',
    'AI systems company',
    'ToolVines',
    'DhruvaOS school operating system',
    'AI Company OS',
    'Agentic AI',
    'Enterprise software development',
    'Digital platforms India',
    'NeelStack Solutions Private Limited',
  ],
  authors: [{ name: 'NeelStack Solutions', url: getSiteUrl() }],
  creator: 'NeelStack Solutions',
  publisher: 'NeelStack Solutions',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: getSiteUrl(),
    siteName: 'NeelStack Solutions',
    title: 'NeelStack Solutions | Software Products & AI Systems',
    description:
      'NeelStack Solutions builds software products, AI systems and digital platforms, including ToolVines and DhruvaOS.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'NeelStack Solutions — Software Products & AI Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@neelstack',
    creator: '@neelstack',
    title: 'NeelStack Solutions | Software Products & AI Systems',
    description:
      'NeelStack Solutions builds software products, AI systems and digital platforms, including ToolVines and DhruvaOS.',
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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#070b14' },
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
      className={`${inter.variable} ${jakarta.variable} ${spaceGrotesk.variable} ${geist.variable} ${geistMono.variable} bg-background text-foreground`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('theme');
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const isDark = storedTheme === 'dark' || (!storedTheme && systemPrefersDark);
                if (isDark) {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                } else {
                  document.documentElement.classList.add('light');
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {
                document.documentElement.classList.add('light');
              }
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground" suppressHydrationWarning>
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
              'NeelStack Solutions builds software products, AI-powered systems and digital platforms for businesses and organizations. Incorporated in India in August 2026.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Gorakhpur',
              addressLocality: 'Gorakhpur',
              addressRegion: 'Uttar Pradesh',
              postalCode: '273406',
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
            ],

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
              'PostgreSQL Row-Level Security (RLS) Multi-Tenancy Architecture',
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
              'https://www.linkedin.com/company/neelstack',
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
          <NavigationProgressProvider>
            <MouseSpotlight />
            {children}
          </NavigationProgressProvider>
        </CurrencyProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
