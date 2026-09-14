import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { Container } from '@/components/ui/container'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { Breadcrumb } from '@/components/navigation/breadcrumb'
import { JsonLd } from '@/components/seo/json-ld'
import { getSiteUrl } from '@/lib/site-url'
import { Button } from '@/components/ui/button'
import {
  FileText,
  Sparkles,
  ShieldCheck,
  Code2,
  Zap,
  Globe,
  ArrowRight,
  ExternalLink,
  Lock,
  ImageIcon,
  Check,
  X,
  Laptop,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'ToolVines | Browser-Native Developer & Productivity Tools | NeelStack India',
  description:
    'ToolVines is NeelStack’s live browser-native productivity platform with 50+ developer utilities running 100% client-side via Rust WebAssembly. Zero data uploaded to servers, zero telemetry, instant offline processing.',
  keywords: [
    'ToolVines',
    'Browser-native developer tools',
    'Client-side PDF tools',
    'Rust WebAssembly tools',
    'Private developer utilities',
    'Offline JSON formatter',
    'NeelStack Products',
  ],
  alternates: {
    canonical: '/products/toolvines',
  },
}

// 24 Featured Tools in Catalog
const FEATURED_TOOLS = [
  {
    category: 'Developer Utilities',
    icon: Code2,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    tools: [
      { name: 'JSON Formatter & Validator', desc: 'Syntax highlight, tree traversal, and error tracing with zero server upload.' },
      { name: 'JWT Debugger & Decoder', desc: 'Inspect header, payload, and signatures locally without sending secrets to any cloud.' },
      { name: 'SQL Query Beautifier', desc: 'Format complex PostgreSQL, MySQL, and BigQuery SQL queries instantaneously.' },
      { name: 'Regex Sandbox & Tester', desc: 'Real-time PCRE pattern testing with match groups and visual capture breakdown.' },
      { name: 'Cron Expression Builder', desc: 'Natural language to cron expression generator with upcoming schedule preview.' },
      { name: 'Diff Viewer & Text Compare', desc: 'Character and line-by-line diff engine with side-by-side split visualization.' },
    ],
  },
  {
    category: 'Security & Cryptography',
    icon: Lock,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    tools: [
      { name: 'SHA-256 / SHA-512 Hasher', desc: 'Vectorized WebCrypto hashing calculating checksums entirely inside the browser thread.' },
      { name: 'Base64 & URL Encoder', desc: 'Bi-directional encode and decode for strings, binary buffers, and data URLs.' },
      { name: 'UUID v4 / v7 Generator', desc: 'Cryptographically secure random UUID generation supporting bulk batches up to 10,000.' },
      { name: 'HMAC Signature Generator', desc: 'Keyed-hash message authentication code verification using browser WebCrypto APIs.' },
      { name: 'Password Strength Analyzer', desc: 'Zxcvbn entropy calculation assessing dictionary attacks without logging inputs.' },
      { name: 'Public Key & Certificate Decoder', desc: 'Parse PEM certificates, X.509 metadata, and expiration dates locally.' },
    ],
  },
  {
    category: 'PDF & Document Engines',
    icon: FileText,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    tools: [
      { name: 'PDF Merger & Combiner', desc: 'Assemble multiple PDF documents locally using client-side WebAssembly rendering.' },
      { name: 'PDF Splitter & Extractor', desc: 'Extract page ranges or burst whole documents into standalone PDF files instantly.' },
      { name: 'PDF Page Reorder & Rotate', desc: 'Drag-and-drop page rotation, re-ordering, and removal with zero server uploads.' },
      { name: 'Client-Side OCR Reader', desc: 'Tesseract WebAssembly optical character recognition operating in a local Web Worker.' },
      { name: 'Markdown to HTML Engine', desc: 'GitHub-flavored markdown live compiler with syntax highlighting and instant export.' },
      { name: 'Text Case & Slug Converter', desc: 'Convert text between camelCase, snake_case, kebab-case, and URL slugs.' },
    ],
  },
  {
    category: 'Media & Design Tools',
    icon: ImageIcon,
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    tools: [
      { name: 'WebP Image Converter', desc: 'Transform PNG and JPEG files into lightweight WebP format using browser Canvas.' },
      { name: 'Image Compressor & Resizer', desc: 'Lossy and lossless image compression with real-time visual quality slider.' },
      { name: 'SVG Optimizer & Minifier', desc: 'Strip unnecessary metadata and minify SVG vector paths locally.' },
      { name: 'OKLCH Color Studio', desc: 'High dynamic-range color palette generator with APCA contrast ratio testing.' },
      { name: 'CSS Box Shadow Generator', desc: 'Layered elevation shadow generator with smooth multi-layer ambient blur.' },
      { name: 'QR Code Generator & Scanner', desc: 'High-res SVG and PNG QR codes with error correction levels.' },
    ],
  },
]

// Architectural Comparison Points
const ARCHITECTURE_COMPARISON = [
  {
    criteria: 'Data Privacy & Security',
    traditional: 'Uploads files to remote servers; potential data retention and leak vectors',
    toolvines: '100% Client-Side: 0 bytes uploaded to servers; executes locally in memory',
  },
  {
    criteria: 'Execution Latency',
    traditional: '800ms – 3,000ms round-trip latency depending on network speed and upload size',
    toolvines: 'Sub-millisecond: local Rust WebAssembly threads execute instantly',
  },
  {
    criteria: 'Offline Availability',
    traditional: 'Completely broken without an active internet connection',
    toolvines: 'Fully functional offline via Progressive Web App & Service Worker caching',
  },
  {
    criteria: 'Commercial Distraction',
    traditional: 'Littered with intrusive popups, third-party ad trackers, and cookie walls',
    toolvines: 'Clean, distraction-free institutional interface with zero third-party telemetry',
  },
  {
    criteria: 'File Processing Limits',
    traditional: 'Strict paywalls or 5MB file caps enforced by server infrastructure costs',
    toolvines: 'Limited only by your device hardware; process 100MB+ files effortlessly',
  },
]

// FAQ Items
const FAQ_ITEMS = [
  {
    question: 'Is any of my data ever sent to NeelStack servers?',
    answer:
      'No. ToolVines is engineered under a strict zero-telemetry architecture. All string manipulations, PDF transformations, image compressions, and cryptographic operations run locally inside your browser sandbox via WebAssembly and Web Workers. Your data never touches our servers.',
  },
  {
    question: 'How can ToolVines work completely offline?',
    answer:
      'ToolVines uses modern Progressive Web App (PWA) service workers. Once you load the application once, the compiled WebAssembly binaries and runtime assets are securely cached on your machine via the Cache API. You can disconnect your internet and continue using all tools seamlessly.',
  },
  {
    question: 'What technologies power ToolVines under the hood?',
    answer:
      'ToolVines is built with Next.js 16, TypeScript, Tailwind CSS, and core compute engines written in Rust and compiled to WebAssembly (WASM) with SIMD optimizations. Heavy operations run in dedicated background Web Workers to maintain a silky 60 FPS UI.',
  },
  {
    question: 'Can ToolVines handle large files like 50MB PDFs or high-res images?',
    answer:
      'Yes. Because computations occur on your local device CPU and RAM rather than a shared server container, ToolVines easily handles large files that would crash or time out on traditional free tool websites.',
  },
  {
    question: 'Can our company license ToolVines for an internal on-premise portal?',
    answer:
      'Yes. NeelStack Solutions licenses and customizes ToolVines for corporate intranets, defense agencies, healthcare networks, and banks requiring air-gapped developer tool portals with proprietary compliance rules.',
  },
  {
    question: 'Is ToolVines completely free for developers to use?',
    answer:
      'Yes. ToolVines is NeelStack’s flagship live contribution to the global developer community. It is free, ad-free, and requires zero account registration for standard utilities.',
  },
]

export default function ToolVinesProductPage() {
  return (
    <MarketingLayout>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'ToolVines',
          operatingSystem: 'Web, macOS, Windows, Linux, iOS, Android',
          applicationCategory: 'DeveloperApplication',
          url: 'https://toolvines.com',
          description:
            'Browser-native developer and productivity platform with 50+ client-side utilities powered by Rust WebAssembly. Zero data retention.',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          provider: {
            '@type': 'Organization',
            name: 'NeelStack Solutions Private Limited',
            url: getSiteUrl(),
          },
        }}
      />

      {/* ─── Hero Section ────────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-transparent">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />

        <Container className="relative z-10 text-center space-y-8">
          {/* Breadcrumbs */}
          <div className="flex justify-center">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Products', href: '/products' },
                { label: 'ToolVines' },
              ]}
            />
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-blue-600 dark:text-cyan-400">
              Live in Production &middot; toolvines.com &middot; 100% Client-Side WASM
            </span>
          </div>

          {/* Heading */}
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-foreground">
              ToolVines &mdash; Browser-Native <br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 dark:from-cyan-400 dark:via-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
                Developer &amp; Productivity Tools
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A high-performance suite of 50+ developer utilities, document formatters, crypto engines, and media tools. Everything executes locally in your browser with Rust WebAssembly &mdash; zero bytes leave your device.
            </p>
          </div>

          {/* CTA Button Strip */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button asChild size="lg" className="w-full sm:w-auto glow-cta h-12 px-8 font-bold gap-2">
              <a href="https://toolvines.com" target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4" />
                Launch ToolVines Platform
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-12 px-7 font-bold">
              <Link href="#tool-catalog">
                Explore Tool Catalog
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Defensible Technical Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-4 text-left">
            <div className="p-4 rounded-2xl border border-border/80 bg-card/70 backdrop-blur-sm space-y-1">
              <div className="flex items-center gap-2 text-primary font-bold">
                <Code2 className="h-4 w-4" />
                <span className="font-heading text-lg sm:text-xl">50+ Tools</span>
              </div>
              <p className="text-xs text-muted-foreground">Developer, PDF, crypto &amp; media utilities</p>
            </div>

            <div className="p-4 rounded-2xl border border-border/80 bg-card/70 backdrop-blur-sm space-y-1">
              <div className="flex items-center gap-2 text-emerald-500 font-bold">
                <ShieldCheck className="h-4 w-4" />
                <span className="font-heading text-lg sm:text-xl">100% Local</span>
              </div>
              <p className="text-xs text-muted-foreground">Zero server uploads; absolute data privacy</p>
            </div>

            <div className="p-4 rounded-2xl border border-border/80 bg-card/70 backdrop-blur-sm space-y-1">
              <div className="flex items-center gap-2 text-cyan-500 font-bold">
                <Zap className="h-4 w-4" />
                <span className="font-heading text-lg sm:text-xl">0ms Latency</span>
              </div>
              <p className="text-xs text-muted-foreground">Instant Rust WebAssembly thread execution</p>
            </div>

            <div className="p-4 rounded-2xl border border-border/80 bg-card/70 backdrop-blur-sm space-y-1">
              <div className="flex items-center gap-2 text-violet-500 font-bold">
                <Laptop className="h-4 w-4" />
                <span className="font-heading text-lg sm:text-xl">Offline PWA</span>
              </div>
              <p className="text-xs text-muted-foreground">Works without internet via Service Workers</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Interactive Tool Catalog Matrix ──────────────────────────────────────── */}
      <section id="tool-catalog" className="py-12 sm:py-16 md:py-20 border-t border-border/60 bg-surface/50 scroll-mt-20">
        <Container className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              Tool Ecosystem
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
              Comprehensive Browser-Native Tool Directory
            </h2>
            <p className="text-sm text-muted-foreground">
              Categorized suite of developer, document, cryptographic, and media engines operating in high-performance WebAssembly sandboxes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {FEATURED_TOOLS.map((group) => {
              const GroupIcon = group.icon
              return (
                <div
                  key={group.category}
                  className="rounded-3xl border border-border/80 bg-card/80 backdrop-blur-md p-6 sm:p-8 space-y-6 shadow-md"
                >
                  <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${group.bgColor} ${group.color}`}>
                      <GroupIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground">{group.category}</h3>
                      <p className="text-xs text-muted-foreground">Running locally via Rust WASM &amp; Web Workers</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {group.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="p-3.5 rounded-xl border border-border/60 bg-background/60 hover:border-primary/40 hover:bg-card transition-all space-y-1 group"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                            {tool.name}
                          </h4>
                          <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                            WASM
                          </span>
                        </div>
                        <p className="text-[11px] text-muted-foreground leading-relaxed">
                          {tool.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Quick Launch CTA Banner */}
          <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-transparent p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                Want to explore the live tools right now?
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Visit toolvines.com and start formatting, hashing, or converting with zero sign-up required.
              </p>
            </div>
            <Button asChild className="glow-cta font-bold shrink-0">
              <a href="https://toolvines.com" target="_blank" rel="noopener noreferrer" className="gap-2">
                Open toolvines.com
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </Container>
      </section>

      {/* ─── Architecture Deep Dive ─────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 md:py-20 border-t border-border/60 bg-transparent">
        <Container className="space-y-12 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Architecture &amp; Privacy
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
              Why Browser-Native Architecture Matters
            </h2>
            <p className="text-sm text-muted-foreground">
              Most web utilities upload your sensitive PDFs, documents, and API tokens to remote cloud servers. ToolVines executes everything on your local device.
            </p>
          </div>

          {/* Comparison Matrix Table */}
          <div className="rounded-3xl border border-border/80 bg-card/80 backdrop-blur-md p-6 sm:p-8 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-border text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    <th className="py-3 px-4 w-1/3">Evaluation Vector</th>
                    <th className="py-3 px-4 w-1/3 text-rose-500">Traditional Web Utilities</th>
                    <th className="py-3 px-4 w-1/3 text-emerald-500">ToolVines (NeelStack)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {ARCHITECTURE_COMPARISON.map((row, idx) => (
                    <tr key={idx} className="hover:bg-muted/30 transition-colors">
                      <td className="py-4 px-4 font-bold text-foreground">{row.criteria}</td>
                      <td className="py-4 px-4 text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <X className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>{row.traditional}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-foreground font-medium">
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{row.toolvines}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Enterprise Custom Tool Portals ─────────────────────────────────────── */}
      <section className="py-12 sm:py-16 md:py-20 border-t border-border/60 bg-surface/50">
        <Container className="max-w-5xl">
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl space-y-4">
              <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                Enterprise Solutions
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground">
                Need a Private, Air-Gapped Developer Portal for Your Enterprise?
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Security-conscious engineering teams at banks, healthcare organizations, and high-compliance enterprises cannot allow engineers to paste company code, API keys, or PII into random public websites.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                NeelStack packages and deploys proprietary, air-gapped instances of ToolVines behind your enterprise VPN or Single Sign-On (SSO) with custom internal company plugins, verified schemas, and audit compliance.
              </p>
              <div className="pt-2">
                <Button asChild size="lg" className="glow-cta font-bold">
                  <Link href="/contact?subject=Enterprise%20Developer%20Portal%20Inquiry" className="gap-2">
                    Inquire About Enterprise Deployment
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Structured FAQs ────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 md:py-20 border-t border-border/60 bg-transparent">
        <Container className="max-w-4xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-primary">
              Frequently Asked Questions
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground">
              Technical &amp; Privacy Specifications
            </h2>
          </div>

          <FAQAccordion
            items={FAQ_ITEMS.map((faq) => ({
              question: faq.question,
              answer: faq.answer,
            }))}
          />
        </Container>
      </section>

      {/* ─── Pre-Footer CTA ──────────────────────────────────────────────────────── */}
      <section className="py-16 border-t border-border/60 bg-gradient-to-b from-card to-surface text-center">
        <Container className="max-w-3xl space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
            Experience the Future of Client-Side Web Tools
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Zero wait time. Zero tracking cookies. Instant WebAssembly performance right in your browser.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="glow-cta px-8 font-bold">
              <a href="https://toolvines.com" target="_blank" rel="noopener noreferrer" className="gap-2">
                Launch ToolVines Live
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-7 font-bold">
              <Link href="/contact">Talk to Engineering</Link>
            </Button>
          </div>
        </Container>
      </section>
    </MarketingLayout>
  )
}
