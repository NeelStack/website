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
            description: '24/7 AI chatbots, workflow agents & vector RAG search',
            icon: Bot,
          },
          {
            label: 'Website & Web Application Engineering',
            href: '/services/web-applications',
            description: 'High-speed Next.js corporate sites & D2C storefronts',
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
      { label: 'Enterprise & Finance', href: '/industries/enterprise', icon: Landmark },
    ],
  },
  {
    label: 'Company',
    items: [
      { label: 'About NeelStack', href: '/about', description: 'Our engineering philosophy & executive team', icon: Info },
      { label: 'Case Studies (Coming Soon)', href: '/case-studies', description: 'Upcoming client engineering transformations', icon: Briefcase },
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
    { label: 'Healthcare & Systems', href: '/industries/healthcare' },
    { label: 'Enterprise & SaaS', href: '/industries/enterprise' },
  ],
  company: [
    { label: 'About NeelStack', href: '/about' },
    { label: 'Case Studies (Coming Soon)', href: '/case-studies' },
    { label: 'Whitepapers & Research (Coming Soon)', href: '/whitepapers' },
    { label: 'Engineering Blog', href: '/blog' },
    { label: 'Careers (Hiring)', href: '/careers' },
    { label: 'Contact Us', href: '/contact' },
  ],
}
