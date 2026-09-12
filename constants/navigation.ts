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
  Briefcase
} from 'lucide-react'

export const MAIN_NAV: NavMenu[] = [
  {
    label: 'Services',
    groups: [
      {
        label: 'Core Services',
        items: [
          {
            label: 'AI Solutions & Autonomous Agents',
            href: '/services/ai-development',
            description: 'Multi-agent LangGraph, Model Context Protocol (MCP) & GraphRAG',
            icon: Bot,
          },
          {
            label: 'Website & Web Application Engineering',
            href: '/services/web-applications',
            description: 'Sub-second Next.js 16 SSR & WebAssembly (WASM) platforms',
            icon: Globe,
          },
          {
            label: 'Mobile Application Development',
            href: '/services/mobile-development',
            description: 'Native iOS/Android & cross-platform Flutter apps',
            icon: Smartphone,
          },
          {
            label: 'Custom Enterprise Software & ERP/CRM',
            href: '/services/custom-software',
            description: 'Tailored ERP systems, client portals & SaaS platforms',
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
            description: 'AWS serverless, Docker containers & CI/CD automation',
            icon: Cloud,
          },
          {
            label: 'UI/UX & Product Design System',
            href: '/services/ui-ux-design',
            description: 'Interactive Figma wireframing & conversion design',
            icon: Palette,
          },
        ],
      },
    ],
  },
  {
    label: 'Products',
    items: [
      { label: 'ToolVines Productivity', href: '/products/toolvines', description: 'Flagship PDF & image utility tools platform', icon: Sparkles },
      { label: 'DhruvaOS Education OS', href: '/products/dhruvaos', description: 'AI-powered operating system for institutions', icon: GraduationCap },
      { label: 'Public Product Roadmap', href: '/roadmap', description: 'See upcoming releases & vote on features', icon: Map },
      { label: 'All Products Overview', href: '/products', description: 'Explore proprietary software solutions', icon: Grid },
    ],
  },
  {
    label: 'Industries',
    items: [
      { label: 'Fashion, Apparel & D2C', href: '/industries/fashion-d2c', icon: ShoppingBag },
      { label: 'Education & EdTech', href: '/industries/education', icon: GraduationCap },
      { label: 'Healthcare & Pharma', href: '/industries/healthcare', icon: HeartPulse },
      { label: 'Government & Public Sector', href: '/industries/government', icon: Landmark },
      { label: 'Startups & SaaS', href: '/industries/startups', icon: Rocket },
      { label: 'Retail & Digital Commerce', href: '/industries/retail', icon: ShoppingBag },
    ],
  },
  {
    label: 'Company',
    items: [
      { label: 'About NeelStack', href: '/about', description: 'Our engineering philosophy & executive team', icon: Info },
      { label: 'Case Studies', href: '/case-studies', description: 'Client engineering transformations', icon: Briefcase },
      { label: 'Security & Compliance', href: '/security', description: 'Enterprise trust & data protection', icon: Info },
      { label: 'Engineering Careers', href: '/careers', description: 'Join our senior engineering & AI teams', icon: Rocket },
    ],
  },
]

export const FOOTER_NAV = {
  services: [
    { label: 'AI Solutions & Agents', href: '/services/ai-development' },
    { label: 'Website & Web App Engineering', href: '/services/web-applications' },
    { label: 'Mobile App Development', href: '/services/mobile-development' },
    { label: 'Custom ERP & Software', href: '/services/custom-software' },
    { label: 'Cloud Infrastructure & DevOps', href: '/services/devops-cloud' },
    { label: 'UI/UX & Product Design', href: '/services/ui-ux-design' },
  ],
  products: [
    { label: 'ToolVines Tools Platform', href: '/products/toolvines' },
    { label: 'DhruvaOS EdTech Platform', href: '/products/dhruvaos' },
    { label: 'Public Product Roadmap', href: '/roadmap' },
    { label: 'All Products Catalog', href: '/products' },
  ],
  industries: [
    { label: 'Fashion, Apparel & D2C', href: '/industries/fashion-d2c' },
    { label: 'Education & EdTech', href: '/industries/education' },
    { label: 'Healthcare & Pharma', href: '/industries/healthcare' },
    { label: 'Government & Public Sector', href: '/industries/government' },
    { label: 'Startups & SaaS', href: '/industries/startups' },
    { label: 'Retail & Commerce', href: '/industries/retail' },
    { label: 'Pharmaceutical Systems', href: '/industries/pharmaceutical' },
  ],
  company: [
    { label: 'About NeelStack', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Whitepapers & Research', href: '/whitepapers' },
    { label: 'Security & Compliance', href: '/security' },
    { label: 'Engineering Blog', href: '/blog' },
    { label: 'Careers (Hiring)', href: '/careers' },
    { label: 'Contact Us', href: '/contact' },
  ],
}
