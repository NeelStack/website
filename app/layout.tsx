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
    default: 'NeelStack – AI, Cloud & Enterprise Software',
    template: '%s | NeelStack',
  },
  description:
    'NeelStack builds enterprise software, AI solutions, SaaS products, ERP systems, and custom applications for startups, SMBs, enterprises, healthcare, government, and organizations worldwide.',
  keywords: [
    'enterprise software',
    'AI development',
    'SaaS products',
    'ERP systems',
    'custom software development',
    'cloud solutions',
    'web applications',
    'mobile apps',
    'NeelStack',
    'software company India',
    'hire developer hourly',
  ],
  authors: [{ name: 'NeelStack', url: 'https://neelstack.com' }],
  creator: 'NeelStack',
  publisher: 'NeelStack',
  alternates: {
    canonical: getSiteUrl(),
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
    other: {
      'msvalidate.01': '1DF5012D21BE5D63AD02D85C003C479D',
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
      className={`${inter.variable} ${jakarta.variable} ${geist.variable} ${geistMono.variable} bg-background`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
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
        {/* Skip-to-content: WCAG 2.4.1 — visible only on keyboard focus */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Skip to main content
        </a>
        {/* Organization JSON-LD Structured Data */}
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'NeelStack Solutions Private Limited',
            url: getSiteUrl(),
            logo: `${getSiteUrl()}/icon.svg`,
            description:
              'NeelStack designs, develops, and delivers enterprise software, AI solutions, SaaS products, and custom applications.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Gorakhpur',
              addressRegion: 'Uttar Pradesh',
              addressCountry: 'IN',
            },
            sameAs: [
              'https://x.com/neelstack',
              'https://linkedin.com/company/neelstack',
              'https://github.com/neelstack',
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'contact@neelstack.com',
              contactType: 'customer service',
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
