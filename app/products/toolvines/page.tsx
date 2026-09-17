import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
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
  Cpu,
  Layers,
  Database,
  Terminal,
  Activity,
  CheckCircle2,
  Workflow,
  Sliders,
  Palette,
  QrCode,
  Network,
  RefreshCw,
  HardDrive,
  Users,
  ShieldAlert,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'ToolVines | 320+ Browser-Native Developer & Productivity Tools | NeelStack India',
  description:
    'ToolVines is NeelStack’s live browser-native productivity platform with 320+ developer utilities running 100% client-side via Rust WebAssembly. Zero server uploads, zero telemetry, instant offline processing.',
  keywords: [
    'ToolVines',
    'Browser-native developer tools',
    'Client-side PDF tools',
    'Rust WebAssembly tools',
    'Private developer utilities',
    'Offline JSON formatter',
    'Zero telemetry tools',
    'NeelStack Products',
  ],
  alternates: {
    canonical: '/products/toolvines',
  },
}

// 8 Comprehensive Tool Taxonomy Categories (48+ Tools)
const TOOL_CATEGORIES = [
  {
    category: 'PDF & Document Engines',
    tagline: 'Client-Side Document Transformation',
    icon: FileText,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    tools: [
      { name: 'PDF Merger & Combiner', desc: 'Assemble multi-volume PDFs locally in browser memory with zero server uploads.', wasm: true },
      { name: 'PDF Splitter & Burst', desc: 'Extract page ranges or burst large documents into individual PDF files in milliseconds.', wasm: true },
      { name: 'PDF Page Reorder & Rotate', desc: 'Visual drag-and-drop page matrix for reordering, deleting, and rotating pages.', wasm: true },
      { name: 'Client-Side OCR Reader', desc: 'Multi-lingual Tesseract WebAssembly optical character recognition in background Web Workers.', wasm: true },
      { name: 'PDF Lossless Compressor', desc: 'Strip unreferenced PDF objects, font streams, and metadata to reduce filesize.', wasm: true },
      { name: 'Markdown to PDF Compiler', desc: 'GitHub-flavored markdown compiler with KaTeX math and Prism code syntax styling.', wasm: false },
    ],
  },
  {
    category: 'Code & Developer Utilities',
    tagline: 'High-Frequency Engineering Tools',
    icon: Code2,
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    tools: [
      { name: 'JSON Formatter & Tree Explorer', desc: 'Collapsible tree visualizer, syntax linter, and schema validator for large payloads.', wasm: true },
      { name: 'JWT Debugger & Secret Verifier', desc: 'Inspect header, payload claims, and verify HMAC/RSA signatures entirely offline.', wasm: true },
      { name: 'SQL Query Beautifier & Minifier', desc: 'Dialect-aware formatter for PostgreSQL, MySQL, SQLite, BigQuery, and Snowflake.', wasm: false },
      { name: 'Regex Sandbox & Analyzer', desc: 'Real-time PCRE pattern testing with named match groups, visual breakdown, and explanation.', wasm: true },
      { name: 'Cron Expression Builder', desc: 'Natural language to cron expression generator with 10 upcoming schedule execution timestamps.', wasm: false },
      { name: 'Side-by-Side Diff Engine', desc: 'Character, word, and line-level diff viewer with split side-by-side or unified inline modes.', wasm: true },
    ],
  },
  {
    category: 'Security & Cryptography',
    tagline: 'WebCrypto & Zero-Knowledge Hashing',
    icon: Lock,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    tools: [
      { name: 'SHA-256 / SHA-512 / SHA-3 Hasher', desc: 'Hardware-accelerated WebCrypto cryptographic checksum computation with hex/base64 output.', wasm: true },
      { name: 'HMAC Signature Generator', desc: 'Keyed-hash message authentication code verification across SHA-256, SHA-384, and SHA-512.', wasm: true },
      { name: 'UUID v4 / v7 Bulk Generator', desc: 'Cryptographically secure monotonic UUID v7 and random v4 generator supporting 10,000+ batch output.', wasm: true },
      { name: 'X.509 Certificate & CSR Decoder', desc: 'Parse PEM/DER certificates, public keys, SANs, validity dates, and fingerprint metadata.', wasm: true },
      { name: 'Password Entropy Analyzer', desc: 'Zxcvbn algorithm evaluating spatial patterns, dictionary attacks, and crack-time metrics.', wasm: false },
      { name: 'Bcrypt / Argon2 Hash Tester', desc: 'Evaluate key derivation function work factors and test password verification locally.', wasm: true },
    ],
  },
  {
    category: 'Image & Media Canvas',
    tagline: 'Client-Side Canvas & Vector Ops',
    icon: ImageIcon,
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20',
    tools: [
      { name: 'WebP / AVIF Modern Transcoder', desc: 'Convert PNG and JPEG images to WebP or AVIF using browser hardware Canvas APIs.', wasm: true },
      { name: 'Lossless Image Compressor', desc: 'Multi-pass compression reducing image file size with real-time visual side-by-side comparison.', wasm: true },
      { name: 'SVG Optimizer & Path Minifier', desc: 'Strip unnecessary vector metadata, clean attributes, and minify SVG coordinate paths.', wasm: true },
      { name: 'Exif Metadata Stripper', desc: 'Remove GPS coordinates, camera serials, and sensitive timestamps before sharing photos.', wasm: false },
      { name: 'Favicon & App Icon Generator', desc: 'Generate 16x16, 32x32, 192x192, 512x512 PNG, ICO, and webmanifest bundles in one click.', wasm: true },
      { name: 'Canvas Image Resizer & Cropper', desc: 'Precise pixel/percentage aspect-ratio locking with bicubic and lanczos resampling.', wasm: true },
    ],
  },
  {
    category: 'Data & Format Converters',
    tagline: 'Schema & Structural Transformation',
    icon: Database,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    tools: [
      { name: 'CSV ⇄ JSON ⇄ YAML Converter', desc: 'Bi-directional tabular-to-hierarchical data conversion with automatic type inference.', wasm: true },
      { name: 'XML to JSON & JSON to XML', desc: 'Parse complex nested XML structures with attributes, CDATA blocks, and namespace preservation.', wasm: true },
      { name: 'Base64 & Data URL Encoder', desc: 'Bi-directional binary and string encoding with MIME-type detection and instant asset preview.', wasm: false },
      { name: 'Text Case & Slug Transformer', desc: 'Convert text between camelCase, snake_case, PascalCase, kebab-case, and URL slugs.', wasm: false },
      { name: 'HTML Entities & URL Component', desc: 'Encode and decode URI components, UTF-8 byte sequences, and HTML entities securely.', wasm: false },
      { name: 'Epoch Unix Timestamp Converter', desc: 'Convert between milliseconds, seconds, ISO 8601, RFC 2822, and all world timezones.', wasm: false },
    ],
  },
  {
    category: 'Design & Color Studio',
    tagline: 'Modern High Dynamic Range Systems',
    icon: Palette,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/20',
    tools: [
      { name: 'OKLCH Dynamic Color Studio', desc: 'Perceptually uniform color palette generator with chroma, hue, and gamut mapping.', wasm: true },
      { name: 'APCA & WCAG 3.0 Contrast Checker', desc: 'Advanced Perceptual Contrast Algorithm testing text readability across light/dark surfaces.', wasm: false },
      { name: 'Layered CSS Box Shadow Generator', desc: 'Multi-layer ambient and key elevation shadow builder with natural penumbra falloff.', wasm: false },
      { name: 'Mesh & Linear Gradient Studio', desc: 'CSS gradient generator with ease-in/ease-out color stop interpolation.', wasm: false },
      { name: 'Glassmorphism & Backdrop Filter', desc: 'Generate cross-browser CSS frosted glass overlays with saturation and blur tuning.', wasm: false },
      { name: 'Fluid Typography Calculator', desc: 'Generate responsive CSS clamp() formulas for smooth viewport-based font scaling.', wasm: false },
    ],
  },
  {
    category: 'Network & Web Utilities',
    tagline: 'API, Headers & Routing Tools',
    icon: Network,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/20',
    tools: [
      { name: 'cURL to Fetch / Axios Converter', desc: 'Parse complex cURL commands into clean TypeScript, Python requests, or Go code snippets.', wasm: false },
      { name: 'HTTP Status Code Encyclopedia', desc: 'Comprehensive guide covering 1xx–5xx status codes, RFC references, and debugging tips.', wasm: false },
      { name: 'URL Query Param Parser & Builder', desc: 'Deconstruct complex query strings, decode encoded objects, and build clean parameterized URLs.', wasm: false },
      { name: 'Subnet CIDR Calculator & Masker', desc: 'Calculate network ranges, broadcast addresses, usable host counts, and wildcard masks.', wasm: true },
      { name: 'User-Agent & Client Hints Inspector', desc: 'Parse browser client hints, rendering engines, OS architectures, and mobile flags.', wasm: false },
      { name: 'CSP Header Policy Generator', desc: 'Construct hardened Content Security Policy headers with script, style, and frame directives.', wasm: false },
    ],
  },
  {
    category: 'Barcodes & QR Engines',
    tagline: 'Vectorized Code Generation',
    icon: QrCode,
    color: 'text-rose-500',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/20',
    tools: [
      { name: 'Vector SVG QR Code Generator', desc: 'Generate high-res QR codes supporting Wi-Fi credentials, vCards, URLs, and crypto addresses.', wasm: true },
      { name: 'Micro QR & Aztec Matrix Engine', desc: 'Compact 2D matrix code generation for high-density space-constrained applications.', wasm: true },
      { name: 'Code 128 / EAN-13 Barcode Studio', desc: 'Standard 1D retail and logistics barcode generator with printable vector SVG output.', wasm: true },
      { name: 'Client-Side QR Code Camera Scanner', desc: 'Zero-upload barcode and QR decoder utilizing browser MediaStream and Canvas APIs.', wasm: true },
      { name: 'Custom Styled & Logo QR Maker', desc: 'Embed center branding logos and custom dot geometry without breaking Reed-Solomon recovery.', wasm: true },
      { name: 'Bulk Batch QR Code Generator', desc: 'Generate thousands of serialized QR codes from CSV datasets in a single client-side batch.', wasm: true },
    ],
  },
]

// Architecture Comparison Matrix
const ARCHITECTURE_COMPARISON = [
  {
    criteria: 'Data Privacy & Security',
    traditional: 'Uploads raw files and payloads to remote cloud servers; prone to retention, leaks, and training scraping',
    toolvines: '100% Client-Side: 0.00 KB uploaded to servers; all data executes inside ephemeral browser RAM',
  },
  {
    criteria: 'Execution Latency',
    traditional: '800ms – 3,500ms round-trip latency depending on network speed, upload bandwidth, and server queues',
    toolvines: 'Sub-millisecond: local Rust WebAssembly threads execute instantly at native device speed',
  },
  {
    criteria: 'Offline Availability',
    traditional: 'Completely inoperable without an active high-speed internet connection',
    toolvines: 'Fully functional offline via Service Worker caching & Progressive Web App (PWA) architecture',
  },
  {
    criteria: 'User Experience & Telemetry',
    traditional: 'Littered with intrusive third-party ad banners, video popups, affiliate cookies, and user tracking scripts',
    toolvines: 'Institutional, distraction-free interface with zero advertising, zero trackers, and zero telemetry',
  },
  {
    criteria: 'File Processing Limits',
    traditional: 'Enforces strict 5MB/10MB paywalls or file caps to curb server container hosting costs',
    toolvines: 'Governed only by your local machine RAM; process 100MB+ documents and datasets effortlessly',
  },
  {
    criteria: 'Corporate Compliance',
    traditional: 'Violates enterprise NDA, HIPAA, and GDPR policies by sending proprietary keys and PII off-site',
    toolvines: 'Completely air-gap compliant; safe for sensitive financial tokens, database dumps, and medical PDFs',
  },
]

// Developer Personas
const PERSONAS = [
  {
    role: 'Frontend & Full-Stack Engineers',
    icon: Code2,
    desc: 'Format messy JSON payloads, inspect decoded JWT session tokens, debug complex regex patterns, and generate CSS color palettes without leaving their IDE tabs.',
  },
  {
    role: 'Security & Pen-Testing Auditors',
    icon: ShieldCheck,
    desc: 'Inspect X.509 certificates, calculate cryptographically secure hashes (SHA-256/512), test password entropy, and generate monotonic UUID v7 keys without sending secrets to any cloud.',
  },
  {
    role: 'DevOps & Cloud Architects',
    icon: Terminal,
    desc: 'Calculate CIDR subnets, construct hardened CSP policies, validate cron expressions, and convert cURL reproduction commands into clean automation scripts.',
  },
  {
    role: 'Enterprise Privacy Officers',
    icon: Lock,
    desc: 'Ensure company engineers and analysts process sensitive PDFs, strip EXIF metadata from confidential documents, and convert formats with absolute zero-cloud-leak guarantees.',
  },
  {
    role: 'Product Designers & Creators',
    icon: Palette,
    desc: 'Transcode images to modern WebP/AVIF formats, optimize SVG paths, generate high-resolution QR codes with logos, and evaluate APCA contrast ratios for design systems.',
  },
]

// FAQ Items
const FAQ_ITEMS = [
  {
    question: 'Is any of my data or uploaded files ever transmitted to NeelStack servers?',
    answer:
      'No. ToolVines is engineered under a strict zero-telemetry architecture. All file transformations, string manipulations, PDF burst/merge ops, cryptographic hashing, and image transcodings occur entirely inside your browser sandbox via Rust WebAssembly and Web Workers. Zero bytes ever leave your device.',
  },
  {
    question: 'How can ToolVines operate completely offline without internet?',
    answer:
      'ToolVines leverages Progressive Web App (PWA) service workers and the Cache API. When you first visit toolvines.com, all compiled WebAssembly binaries, worker scripts, and UI assets are cached on your local storage. You can disconnect your network entirely and every tool continues running at full native speed.',
  },
  {
    question: 'What underlying technologies power ToolVines?',
    answer:
      'The platform is built with Next.js 16, React 19, TypeScript, Tailwind CSS, and core compute engines written in Rust and compiled to WebAssembly (WASM) with SIMD optimizations. Heavy computations run in asynchronous Web Worker pools, preventing any UI frame drops and guaranteeing silky 60 FPS performance.',
  },
  {
    question: 'Can ToolVines process large files like 100MB PDFs or high-resolution images?',
    answer:
      'Yes. Because computations execute directly on your local device CPU and RAM rather than on a constrained server container, ToolVines easily handles multi-megabyte datasets and large PDF books that would crash or hit paywalls on traditional cloud converter sites.',
  },
  {
    question: 'Can enterprises deploy ToolVines as an internal, air-gapped portal?',
    answer:
      'Yes. NeelStack Solutions licenses, white-labels, and customizes ToolVines for banks, defense contractors, healthcare systems, and tech enterprises requiring private, air-gapped developer portals integrated with corporate Single Sign-On (SSO) and proprietary internal tool plugins.',
  },
  {
    question: 'Is ToolVines completely free and ad-free for individual developers?',
    answer:
      'Yes. ToolVines is NeelStack’s flagship live contribution to the global developer and engineering community. It is 100% free, free of advertisements, and requires zero registration or account sign-up.',
  },
  {
    question: 'How does the client-side OCR engine work without a cloud backend?',
    answer:
      'Our optical character recognition uses Tesseract.js compiled into WebAssembly. The language model weights are loaded dynamically into an isolated Web Worker thread that performs visual analysis and text extraction on local image buffers without any cloud API calls.',
  },
  {
    question: 'How does ToolVines handle cryptographic security for tokens and passwords?',
    answer:
      'All cryptographic operations use the W3C WebCrypto API and verified Rust implementations. Random numbers use crypto.getRandomValues(), ensuring cryptographically secure entropy for UUID generation, password hashing, and token signing.',
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
            'Browser-native developer and productivity platform with 320+ client-side utilities powered by Rust WebAssembly. Zero data uploaded to servers.',
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
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-cyan-500/8 rounded-full blur-[110px] pointer-events-none" />

        <Container className="relative z-10 text-center space-y-8">
          {/* Breadcrumb */}
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
              Live in Production &middot; toolvines.com &middot; 320+ Tools &middot; 100% Client-Side WASM
            </span>
          </div>

          {/* Headline */}
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-foreground">
              ToolVines &mdash; Browser-Native <br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 dark:from-cyan-400 dark:via-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
                Developer &amp; Productivity Platform
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A high-performance suite of 320+ developer utilities, document formatters, crypto engines, and media tools. Everything executes locally in your browser with Rust WebAssembly &mdash; zero bytes leave your device.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button asChild variant="3d-yellow" size="lg" className="w-full sm:w-auto h-12 px-8 font-bold gap-2 rounded-xl">
              <a href="https://toolvines.com" target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4" />
                Launch ToolVines Platform
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </Button>
            <Button asChild variant="3d-secondary" size="lg" className="w-full sm:w-auto h-12 px-7 font-bold rounded-xl">
              <Link href="#tool-catalog">
                Explore 8 Tool Categories
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Telemetry Proof Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-4 text-left">
            <div className="p-4 rounded-2xl border-2 border-border/80 bg-card/70 backdrop-blur-sm space-y-1 tactile-card-3d">
              <div className="flex items-center gap-2 text-primary font-bold">
                <Code2 className="h-4 w-4" />
                <span className="font-heading text-lg sm:text-xl">320+ Tools</span>
              </div>
              <p className="text-xs text-muted-foreground">8 engineering taxonomy categories</p>
            </div>

            <div className="p-4 rounded-2xl border-2 border-border/80 bg-card/70 backdrop-blur-sm space-y-1 tactile-card-3d">
              <div className="flex items-center gap-2 text-emerald-500 font-bold">
                <ShieldCheck className="h-4 w-4" />
                <span className="font-heading text-lg sm:text-xl">0.00 KB Cloud</span>
              </div>
              <p className="text-xs text-muted-foreground">Zero server uploads; 100% ephemeral RAM</p>
            </div>

            <div className="p-4 rounded-2xl border-2 border-border/80 bg-card/70 backdrop-blur-sm space-y-1 tactile-card-3d">
              <div className="flex items-center gap-2 text-cyan-500 font-bold">
                <Zap className="h-4 w-4" />
                <span className="font-heading text-lg sm:text-xl">&lt; 1ms Latency</span>
              </div>
              <p className="text-xs text-muted-foreground">Native Rust SIMD WebAssembly execution</p>
            </div>

            <div className="p-4 rounded-2xl border-2 border-border/80 bg-card/70 backdrop-blur-sm space-y-1 tactile-card-3d">
              <div className="flex items-center gap-2 text-violet-500 font-bold">
                <Laptop className="h-4 w-4" />
                <span className="font-heading text-lg sm:text-xl">100% Offline</span>
              </div>
              <p className="text-xs text-muted-foreground">Cached locally via Service Worker PWA</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Client-Side Compute Architecture ────────────────────────────────────── */}
      <Section className="bg-card/40 backdrop-blur-sm border-y border-border/40">
        <Container className="space-y-6 sm:space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
              WASM Engine Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Zero-Server Client Compute Pipeline
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Engineered with Rust, WebAssembly, and concurrent Web Workers to isolate compute threads from the UI rendering layer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              {
                title: 'Browser Thread (60 FPS)',
                tech: 'React 19 + Tailwind CSS',
                icon: Activity,
                desc: 'Maintains butter-smooth UI rendering and responsive inputs without jank.',
              },
              {
                title: 'WASM Runtime Sandbox',
                tech: 'Rust Compiled Bytecode',
                icon: Cpu,
                desc: 'Near-native speed matrix math and byte manipulation directly in memory.',
              },
              {
                title: 'Parallel Web Workers',
                tech: 'Multi-Threaded Spawns',
                icon: Layers,
                desc: 'Offloads CPU-heavy compression, hashing, and OCR pipelines to background threads.',
              },
              {
                title: 'Air-Gapped Client RAM',
                tech: 'Zero Remote State',
                icon: ShieldCheck,
                desc: 'Files and data never transmit over the wire; state drops automatically on tab close.',
              },
            ].map((arch) => {
              const IconComp = arch.icon
              return (
                <div
                  key={arch.title}
                  className="rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm p-5 space-y-2.5 hover:border-primary/30 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <IconComp className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-heading font-bold text-foreground">{arch.title}</h3>
                      <p className="text-[10px] font-mono text-primary/80">{arch.tech}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {arch.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* ─── 4 Flagship Showcase Bento ────────────────────────────────────────────── */}
      <Section className="bg-card/60 backdrop-blur-sm border-b border-border/40">
        <Container className="space-y-6 sm:space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
              Flagship Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Deep Engineering in Action
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Explore four of ToolVines’ most powerful browser-native engines built to replace expensive cloud software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Bento 1: PDF Engine */}
            <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-card via-card to-blue-500/5 p-6 sm:p-8 space-y-4 hover:border-blue-500/40 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20">
                  <FileText className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Rust WASM PDF
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                High-Speed Client-Side PDF Engine
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Merge 50+ PDF files, burst pages, rotate layouts, and strip unreferenced objects in sub-second time without uploading contracts or sensitive financial reports to any third-party cloud.
              </p>
              <ul className="grid grid-cols-2 gap-2 text-xs text-muted-foreground pt-2">
                {['Zero-Upload Merge', 'Page Burst & Split', 'Lossless Object Strip', 'Drag-and-Drop Matrix'].map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bento 2: JWT & Security */}
            <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-card via-card to-emerald-500/5 p-6 sm:p-8 space-y-4 hover:border-emerald-500/40 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  <Lock className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Air-Gapped Crypto
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                Air-Gapped JWT &amp; Secret Inspector
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Inspect authorization tokens, parse header claims, calculate SHA-256/512 checksums, and decode PEM certificates without risking production API keys or internal user tokens on public web services.
              </p>
              <ul className="grid grid-cols-2 gap-2 text-xs text-muted-foreground pt-2">
                {['Offline Signature Verify', 'X.509 PEM Decoder', 'WebCrypto SHA-512', 'Monotonic UUID v7'].map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bento 3: OCR Engine */}
            <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-card via-card to-purple-500/5 p-6 sm:p-8 space-y-4 hover:border-purple-500/40 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500 border border-purple-500/20">
                  <Cpu className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  Tesseract WASM
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                Client-Side Tesseract OCR Engine
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Extract text from scanned invoices, receipts, and screenshots directly in your browser. Neural network weights load dynamically into a dedicated Web Worker thread for zero-latency processing.
              </p>
              <ul className="grid grid-cols-2 gap-2 text-xs text-muted-foreground pt-2">
                {['Multi-Language Models', 'Background Worker Thread', 'Instant TXT/JSON Export', 'Zero Image Retention'].map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-purple-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bento 4: OKLCH & Color */}
            <div className="rounded-3xl border border-violet-500/20 bg-gradient-to-br from-card via-card to-violet-500/5 p-6 sm:p-8 space-y-4 hover:border-violet-500/40 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500 border border-violet-500/20">
                  <Palette className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  HDR Color Space
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                OKLCH Dynamic Color Studio &amp; APCA
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Design perceptually uniform design tokens in OKLCH color space. Test real-world accessibility using Advanced Perceptual Contrast Algorithm (APCA) scoring for next-generation web apps.
              </p>
              <ul className="grid grid-cols-2 gap-2 text-xs text-muted-foreground pt-2">
                {['APCA Contrast Scoring', 'Gamut Clipping Protection', 'Tailwind Token Generator', 'Layered Shadow Studio'].map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-violet-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* ─── 8 Tool Taxonomy Directory ─────────────────────────────────────────── */}
      <section id="tool-catalog" className="py-8 sm:py-10 md:py-12 border-t border-border/60 bg-surface/50 scroll-mt-20">
        <Container className="space-y-6 sm:space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              Complete Directory
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
              320+ Tools Across 8 Engineering Clusters
            </h2>
            <p className="text-sm text-muted-foreground">
              Every tool runs locally in your browser. Select any category to see the underlying architecture and capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {TOOL_CATEGORIES.map((group) => {
              const GroupIcon = group.icon
              return (
                <div
                  key={group.category}
                  className="rounded-3xl border border-border/80 bg-card/80 backdrop-blur-md p-6 sm:p-8 space-y-6 shadow-md hover:border-primary/20 transition-all"
                >
                  <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${group.bgColor} ${group.color}`}>
                      <GroupIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground">{group.category}</h3>
                      <p className="text-xs text-muted-foreground">{group.tagline}</p>
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
                          <span
                            className={`text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded ${
                              tool.wasm
                                ? 'bg-primary/10 text-primary border border-primary/20'
                                : 'bg-muted text-muted-foreground'
                            }`}
                          >
                            {tool.wasm ? 'WASM' : 'Client'}
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

          {/* Banner */}
          <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-transparent p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                Want to start formatting, converting, or hashing right now?
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Launch toolvines.com with zero sign-up, zero account barriers, and zero delay.
              </p>
            </div>
            <Button asChild className="glow-cta font-bold shrink-0">
              <a href="https://toolvines.com" target="_blank" rel="noopener noreferrer" className="gap-2">
                Open toolvines.com Live
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </Container>
      </section>

      {/* ─── Architecture Comparison Matrix ─────────────────────────────────────── */}
      <section className="py-8 sm:py-10 md:py-12 border-t border-border/60 bg-transparent">
        <Container className="space-y-6 sm:space-y-8 max-w-5xl">
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

          <div className="rounded-3xl border border-border/80 bg-card/80 backdrop-blur-md p-6 sm:p-8 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-border text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    <th className="py-3 px-4 w-1/3">Evaluation Vector</th>
                    <th className="py-3 px-4 w-1/3 text-rose-500">Traditional Cloud Utilities</th>
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

      {/* ─── Developer & Enterprise Personas ────────────────────────────────────── */}
      <Section className="bg-card/40 backdrop-blur-sm border-t border-border/40">
        <Container className="space-y-6 sm:space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Engineered for Critical Technical Roles
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              How different technical specialists leverage ToolVines in their daily workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {PERSONAS.map((per) => {
              const IconComp = per.icon
              return (
                <div
                  key={per.role}
                  className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5 space-y-2 hover:border-primary/30 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                      <IconComp className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-heading font-bold text-foreground">
                      {per.role}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {per.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* ─── Enterprise Custom Portals ──────────────────────────────────────────── */}
      <section className="py-8 sm:py-10 md:py-12 border-t border-border/60 bg-surface/50">
        <Container className="max-w-5xl">
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl space-y-4">
              <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                Enterprise &amp; Compliance
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
                  <Link href="/contact?product=toolvines&subject=Enterprise%20Air-Gapped%20Portal%20Inquiry" className="gap-2">
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
      <section className="py-8 sm:py-10 md:py-12 border-t border-border/60 bg-transparent">
        <Container className="max-w-4xl space-y-6">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-primary">
              Frequently Asked Questions
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground">
              Technical &amp; Privacy Specifications
            </h2>
          </div>

          <FAQAccordion items={FAQ_ITEMS} />
        </Container>
      </section>

      {/* ─── Pre-Footer CTA ──────────────────────────────────────────────────────── */}
      <section className="py-8 sm:py-10 md:py-12 border-t border-border/60 bg-gradient-to-b from-card to-surface text-center">
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
              <Link href="/contact?product=toolvines">Talk to Engineering</Link>
            </Button>
          </div>
        </Container>
      </section>
    </MarketingLayout>
  )
}
