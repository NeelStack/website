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
  ShoppingBag,
  HeartPulse,
  Landmark,
  Rocket,
  Info,
  Briefcase,
  FileText
} from 'lucide-react'

export const MAIN_NAV: NavMenu[] = [
  {
    label: 'Services',
    groups: [
      {
        label: 'Core Services',
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
    items: [
      { label: 'ToolVines (Live)', href: '/products/toolvines', description: 'Browser productivity platform for PDF & image tools', icon: Sparkles },
      { label: 'DhruvaOS (Ready for Launch)', href: '/products/dhruvaos', description: 'School operating system — pilot onboarding open', icon: GraduationCap },
      { label: 'AI Workforce Platform', href: '/#ai-strategy', description: 'NeelStack AI-agent research and product direction', icon: Bot },
      { label: 'NaukariMitra (Planned)', href: '/products/naukarimitra', description: 'AI-powered government exam companion', icon: Map },
      { label: 'SarakariMitra (Planned)', href: '/products/sarkarimitra', description: 'AI citizen assistance platform', icon: Grid },
      { label: 'All Products Overview', href: '/products', description: 'Explore our product portfolio & roadmap', icon: Grid },
    ],
  },
  {
    label: 'Company',
    items: [
      { label: 'About NeelStack', href: '/about', description: 'Our story, founder-led team & principles', icon: Info },
      { label: 'Strategic Whitepaper', href: '/whitepapers/ai-company-operating-system', description: 'The AI Company Operating System charter', icon: FileText },
      { label: 'AI Agent Strategy', href: '/#ai-strategy', description: 'Long-term AI Company OS vision', icon: Bot },
      { label: 'Architecture & Blueprints', href: '/case-studies', description: 'Deep dives into our system designs', icon: Briefcase },
      { label: 'Security & Compliance', href: '/security', description: 'Data protection & regulatory alignment', icon: Info },
      { label: 'Careers (Talent Registry)', href: '/careers', description: 'Connect with our engineering team', icon: Rocket },
      { label: 'Contact Us', href: '/contact', description: 'Talk to our team at contact@neelstack.com', icon: Info },
    ],
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
  ],
  products: [
    { label: 'ToolVines (Live)', href: '/products/toolvines' },
    { label: 'DhruvaOS (Ready for Launch)', href: '/products/dhruvaos' },
    { label: 'NaukariMitra (Planned)', href: '/products/naukarimitra' },
    { label: 'SarakariMitra (Planned)', href: '/products/sarkarimitra' },
    { label: 'AI Workforce Direction', href: '/#ai-strategy' },
    { label: 'Public Product Roadmap', href: '/roadmap' },
  ],
  company: [
    { label: 'About NeelStack', href: '/about' },
    { label: 'Strategic Whitepaper', href: '/whitepapers/ai-company-operating-system' },
    { label: 'AI Agent Strategy', href: '/#ai-strategy' },
    { label: 'Architecture Blueprints', href: '/case-studies' },
    { label: 'Security & Compliance', href: '/security' },
    { label: 'Engineering Blog', href: '/blog' },
    { label: 'Technical Whitepapers', href: '/whitepapers' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact Us', href: '/contact' },
  ],
}
