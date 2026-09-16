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
} from 'lucide-react'

export const MAIN_NAV: NavMenu[] = [
  {
    label: 'Services',
    groups: [
      {
        label: 'Core Engineering',
        items: [
          {
            label: 'AI Engineering & Agents',
            href: '/services/ai-development',
            description: 'Multi-agent workflows, Model Context Protocol (MCP) & GraphRAG',
            icon: Bot,
          },
          {
            label: 'Software & Web Development',
            href: '/services/web-applications',
            description: 'Sub-second Next.js SSR, React & WebAssembly (WASM) platforms',
            icon: Globe,
          },
          {
            label: 'Mobile App Development',
            href: '/services/mobile-development',
            description: 'Native iOS/Android & cross-platform React Native/Flutter apps',
            icon: Smartphone,
          },
          {
            label: 'Custom Software & ERP Platforms',
            href: '/services/custom-software',
            description: 'Internal business software, portals & backend systems',
            icon: Cpu,
          },
        ],
      },
      {
        label: 'Specialized Capabilities',
        items: [
          {
            label: 'Cloud Infrastructure & DevOps',
            href: '/services/devops-cloud',
            description: 'AWS edge, Docker containerization & CI/CD deployment',
            icon: Cloud,
          },
          {
            label: 'UI/UX & Product Design System',
            href: '/services/ui-ux-design',
            description: 'Design systems, accessibility & high-fidelity interactive UX',
            icon: Palette,
          },
        ],
      },
    ],
  },
  {
    label: 'Products',
    groups: [
      {
        label: 'Flagship Platforms',
        items: [
          {
            label: 'DhruvaOS (School OS)',
            href: '/products/dhruvaos',
            description: 'Unified school operating system — launching 2 October 2026',
            icon: Zap,
          },
          {
            label: 'ToolVines (Live Platform)',
            href: 'https://toolvines.com',
            description: '320+ client-side WebAssembly developer utilities',
            icon: Wrench,
            isExternal: true,
          },
          {
            label: 'AI Company OS',
            href: '/products/ai-company-os',
            description: 'Autonomous multi-agent executive workforce platform',
            icon: Bot,
          },
        ],
      },
      {
        label: 'Ecosystem & Roadmap',
        items: [
          {
            label: 'NaukariMitra (Planned)',
            href: '/products/naukarimitra',
            description: 'AI exam companion for Indian competitive aspirants',
            icon: GraduationCap,
          },
          {
            label: 'SarkariMitra (Planned)',
            href: '/products/sarkarimitra',
            description: 'Conversational citizen welfare & scheme discovery engine',
            icon: Building,
          },
          {
            label: 'All Products & Roadmap',
            href: '/products',
            description: 'Explore full 4-track software portfolio & milestones',
            icon: Grid,
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
            description: 'Company background, vision & engineering principles',
            icon: Info,
          },
          {
            label: 'Leadership & Team',
            href: '/about#leadership',
            description: 'Founders, software architects & AI executive partner',
            icon: Users,
          },
          {
            label: 'Careers (Talent Registry)',
            href: '/careers',
            description: 'Connect with our engineering lab & builders',
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
    { label: 'AI Engineering & Agents', href: '/services/ai-development' },
    { label: 'Software & Web Applications', href: '/services/web-applications' },
    { label: 'Mobile App Development', href: '/services/mobile-development' },
    { label: 'Custom Business Software', href: '/services/custom-software' },
    { label: 'Cloud Infrastructure & DevOps', href: '/services/devops-cloud' },
    { label: 'UI/UX & Product Design', href: '/services/ui-ux-design' },
    { label: 'Pricing & Plans', href: '/pricing' },
  ],
  products: [
    { label: 'ToolVines (Live)', href: '/products/toolvines' },
    { label: 'DhruvaOS (Ready for Launch)', href: '/products/dhruvaos' },
    { label: 'NaukriMitra (Planned)', href: '/products/naukarimitra' },
    { label: 'SarakariMitra (Planned)', href: '/products/sarkarimitra' },
    { label: 'AI Workforce Platform', href: '/products/ai-company-os' },
    { label: 'Public Product Roadmap', href: '/roadmap' },
  ],
  company: [
    { label: 'About NeelStack', href: '/about' },
    { label: 'Leadership & Team', href: '/about#leadership' },
    { label: 'Strategic Whitepaper', href: '/whitepapers/ai-company-operating-system' },
    { label: 'AI Agent Strategy', href: '/#ai-strategy' },
    { label: 'Architecture Blueprints', href: '/case-studies' },
    { label: 'Security & Compliance', href: '/security' },
    { label: 'Engineering Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact Us', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Refund Policy', href: '/refund-policy' },
    { label: 'Sitemap', href: '/sitemap.xml' },
  ],
}
