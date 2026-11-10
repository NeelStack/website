import type { NavMenu } from '@/types'
import {
  Globe,
  Smartphone,
  Cpu,
  Bot,
  Cloud,
  Palette,
  Sparkles,
  GraduationCap,
  Map,
  Grid,
  Rocket,
  Info,
  Briefcase,
  FileText,
  Shield,
  Wrench,
  Users,
  Zap,
  Building,
  RefreshCw,
  Layers,
  CheckCircle2,
  FileCheck,
  Handshake,
} from 'lucide-react'

export const MAIN_NAV: NavMenu[] = [
  {
    label: 'Services',
    groups: [
      {
        label: 'Enterprise Engineering',
        items: [
          {
            label: 'Custom Software & ERP',
            href: '/services/custom-software',
            description: 'Bespoke business platforms, internal portals & scalable backends',
            icon: Cpu,
          },
          {
            label: 'AI Engineering & Agents',
            href: '/services/ai-development',
            description: 'Multi-agent workflows, Model Context Protocol (MCP) & GraphRAG',
            icon: Bot,
          },
          {
            label: 'Legacy Modernization',
            href: '/services/legacy-modernisation',
            description: 'Deconstruct brittle monoliths into microservices with dual-write sync',
            icon: RefreshCw,
          },
        ],
      },
      {
        label: 'Platform & Infrastructure',
        items: [
          {
            label: 'Cloud Architecture & DevOps',
            href: '/services/devops-cloud',
            description: 'AWS multi-AZ clustering, Docker containerization & CI/CD automation',
            icon: Cloud,
          },
          {
            label: 'Web & Mobile Applications',
            href: '/services/web-applications',
            description: 'Next.js 16 SSR, React 19 & cross-platform React Native/Flutter apps',
            icon: Globe,
          },
          {
            label: 'All Engineering Services',
            href: '/services',
            description: 'Explore full catalog of 16 technology disciplines and capabilities',
            icon: Grid,
          },
        ],
      },
    ],
  },
  {
    label: 'Products',
    groups: [
      {
        label: 'Proprietary Software',
        items: [
          {
            label: 'DhruvaOS (Flagship School ERP)',
            href: '/products/dhruvaos',
            description: 'Unified AI-native School OS — Beta live · Launching 14 November 2026',
            icon: Zap,
          },
          {
            label: 'ToolVines (Live Platform)',
            href: 'https://toolvines.com',
            description: 'Client-side WebAssembly developer utilities & document tools',
            icon: Wrench,
            isExternal: true,
          },
        ],
      },
      {
        label: 'Ecosystem & Access',
        items: [
          {
            label: 'All Products & Ecosystem',
            href: '/products',
            description: 'Explore our software platforms and institutional solutions',
            icon: Grid,
          },
          {
            label: 'Product Roadmap',
            href: '/roadmap',
            description: 'Public development milestones and launch schedules',
            icon: Layers,
          },
          {
            label: 'Book DhruvaOS Demo',
            href: '/book-consultation',
            description: 'Schedule a tailored demonstration for school leadership',
            icon: Sparkles,
          },
        ],
      },
    ],
  },
  {
    label: 'Workforce',
    groups: [
      {
        label: 'Engineering Delivery',
        items: [
          {
            label: 'Contract Software Developers',
            href: '/services/contract-engineering',
            description: 'Vetted senior developers in Next.js, Python, Java & DevOps',
            icon: Users,
          },
          {
            label: 'Dedicated Engineering Pods',
            href: '/services/dedicated-teams',
            description: 'Managed squads (3–8 specialists) with tech leads & automated QA',
            icon: Layers,
          },
          {
            label: 'Vendor & Subcontracting',
            href: '/partnerships',
            description: 'Delivery partnerships & vendor onboarding for IT system integrators',
            icon: Handshake,
          },
        ],
      },
      {
        label: 'AI Data & Evaluation',
        items: [
          {
            label: 'AI Model Evaluation',
            href: '/services/ai-model-evaluation',
            description: 'Human-in-the-loop evaluation, RLHF ranking & accuracy benchmarking',
            icon: CheckCircle2,
          },
          {
            label: 'AI Data Annotation & QA',
            href: '/services/ai-data-annotation',
            description: 'Multilingual Indian vernacular validation, code & multimodal labeling',
            icon: FileCheck,
          },
        ],
      },
    ],
  },
  {
    label: 'Company',
    groups: [
      {
        label: 'About & Team',
        items: [
          {
            label: 'About NeelStack',
            href: '/about',
            description: 'Incorporation background, leadership & engineering principles',
            icon: Info,
          },
          {
            label: 'Leadership & Team',
            href: '/about#leadership',
            description: 'Founders, software architects & core delivery leadership',
            icon: Users,
          },
          {
            label: 'Careers (Talent Registry)',
            href: '/careers',
            description: 'Connect with our engineering lab and specialist developer network',
            icon: Rocket,
          },
        ],
      },
      {
        label: 'Architecture & Insights',
        items: [
          {
            label: 'Strategic Whitepaper',
            href: '/whitepapers/ai-company-operating-system',
            description: 'AI Company Operating System architecture v1.0',
            icon: FileText,
          },
          {
            label: 'Architecture Case Studies',
            href: '/case-studies',
            description: 'Deep dives into our system designs & verifiable metrics',
            icon: Briefcase,
          },
          {
            label: 'Engineering Blog',
            href: '/blog',
            description: 'Technical articles, agent architectures & insights',
            icon: FileText,
          },
        ],
      },
    ],
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export const FOOTER_NAV = {
  services: [
    { label: 'Custom Software & ERP', href: '/services/custom-software' },
    { label: 'AI Engineering & Agents', href: '/services/ai-development' },
    { label: 'Legacy Modernization', href: '/services/legacy-modernisation' },
    { label: 'Cloud Infrastructure & DevOps', href: '/services/devops-cloud' },
    { label: 'Web Applications & SaaS', href: '/services/web-applications' },
    { label: 'Mobile App Development', href: '/services/mobile-development' },
    { label: 'All Services Directory', href: '/services' },
  ],
  workforce: [
    { label: 'Contract Software Developers', href: '/services/contract-engineering' },
    { label: 'Dedicated Engineering Pods', href: '/services/dedicated-teams' },
    { label: 'AI Model Evaluation', href: '/services/ai-model-evaluation' },
    { label: 'AI Data Annotation & QA', href: '/services/ai-data-annotation' },
    { label: 'Vendor Subcontracting', href: '/partnerships' },
    { label: 'Pricing & Retainers', href: '/pricing' },
  ],
  products: [
    { label: 'DhruvaOS (Flagship School ERP)', href: '/products/dhruvaos' },
    { label: 'ToolVines (Live Platform)', href: 'https://toolvines.com' },
    { label: 'All Products & Ecosystem', href: '/products' },
    { label: 'Public Product Roadmap', href: '/roadmap' },
    { label: 'Book DhruvaOS Demo', href: '/book-consultation' },
  ],
  company: [
    { label: 'About NeelStack', href: '/about' },
    { label: 'Leadership & Team', href: '/about#leadership' },
    { label: 'Strategic Whitepaper v1.0', href: '/whitepapers/ai-company-operating-system' },
    { label: 'Architecture Case Studies', href: '/case-studies' },
    { label: 'Security & Compliance', href: '/security' },
    { label: 'Engineering Blog', href: '/blog' },
    { label: 'Careers (Talent Registry)', href: '/careers' },
    { label: 'Contact Us', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Refund Policy', href: '/refund-policy' },
    { label: 'Sitemap', href: '/sitemap.xml' },
  ],
}
