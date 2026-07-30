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
  Building,
  HeartPulse,
  Pill,
  Landmark,
  ShoppingBasket,
  Rocket,
  Info,
  Briefcase,
  BookOpen,
  Terminal,
  ShieldCheck,
  FileText,
  Rss,
  UserCheck
} from 'lucide-react'

export const MAIN_NAV: NavMenu[] = [
  {
    label: 'Services',
    groups: [
      {
        label: 'Website Development',
        items: [
          { label: 'Corporate & Business Websites', href: '/services/enterprise-web', description: 'High-speed, conversion-focused company websites', icon: Globe },
          { label: 'Ecommerce & D2C Storefronts', href: '/services/enterprise-web', description: 'Custom online stores with sub-second checkout', icon: ShoppingBag },
          { label: 'Next.js 16 Web Applications', href: '/services/enterprise-web', description: 'Modern web apps built for performance & scale', icon: Terminal },
          { label: 'Custom CMS & Landing Pages', href: '/services/enterprise-web', description: 'Easy content management & marketing pages', icon: FileText },
        ],
      },
      {
        label: 'Mobile App Development',
        items: [
          { label: 'iOS & Android Native Apps', href: '/services/mobile-development', description: 'High-performance mobile apps for App Store & Play Store', icon: Smartphone },
          { label: 'Flutter & React Native Apps', href: '/services/mobile-development', description: 'Cross-platform mobile apps built from single codebase', icon: Cpu },
          { label: 'Progressive Web Apps (PWA)', href: '/services/mobile-development', description: 'Installable web apps with offline capabilities', icon: Globe },
        ],
      },
      {
        label: 'Custom Software & ERP/CRM',
        items: [
          { label: 'Custom ERP & Inventory Systems', href: '/services/custom-software', description: 'End-to-end business operations & stock management', icon: Cpu },
          { label: 'CRM & Client Relationship Portals', href: '/services/custom-software', description: 'Tailored lead management & customer pipelines', icon: UserCheck },
          { label: 'SaaS Product Engineering', href: '/services/custom-software', description: 'Multi-tenant SaaS products from MVP to scale', icon: Sparkles },
          { label: 'Internal Workflow Portals', href: '/services/custom-software', description: 'Automated team portals & administrative tools', icon: Briefcase },
        ],
      },
      {
        label: 'AI Solutions & Agents',
        items: [
          { label: 'AI Chatbots & Assistants', href: '/services/ai-development', description: '24/7 intelligent customer service & support bots', icon: Bot },
          { label: 'Autonomous AI Agents', href: '/services/ai-development', description: 'Automated business workflow & decision agents', icon: Sparkles },
          { label: 'LLM & Vector RAG Engines', href: '/services/ai-development', description: 'Semantic document search & proprietary AI knowledge', icon: Cpu },
        ],
      },
      {
        label: 'Cloud & DevOps',
        items: [
          { label: 'AWS & Vercel Cloud Hosting', href: '/services/devops-cloud', description: 'Scalable serverless & cloud infrastructure', icon: Cloud },
          { label: 'Docker & Kubernetes Setup', href: '/services/devops-cloud', description: 'Containerized deployments & microservices', icon: Cpu },
          { label: 'Automated CI/CD Pipelines', href: '/services/devops-cloud', description: 'Zero-downtime automated deployment workflows', icon: Terminal },
        ],
      },
      {
        label: 'UI/UX & Product Design',
        items: [
          { label: 'Product Prototyping & Wireframing', href: '/services/ui-ux-design', description: 'Interactive Figma prototypes & user research', icon: Palette },
          { label: 'Design Systems & UI Kits', href: '/services/ui-ux-design', description: 'Consistent brand design languages & components', icon: Palette },
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
      { label: 'Education & Academia', href: '/industries/education', icon: GraduationCap },
      { label: 'Healthcare Providers', href: '/industries/healthcare', icon: HeartPulse },
      { label: 'Pharmaceutical Systems', href: '/industries/pharmaceutical', icon: Pill },
      { label: 'Government & Public Sector', href: '/industries/government', icon: Landmark },
      { label: 'Retail & Digital Commerce', href: '/industries/retail', icon: ShoppingBasket },
      { label: 'Startups & SaaS Projects', href: '/industries/startups', icon: Rocket },
    ],
  },
  {
    label: 'Company',
    items: [
      { label: 'About Us', href: '/about', icon: Info },
      { label: 'Portfolio & Deliveries', href: '/portfolio', icon: Briefcase },
      { label: 'Case Studies', href: '/case-studies', icon: BookOpen },
      { label: 'Technologies', href: '/technologies', icon: Terminal },
      { label: 'Training & Internships', href: '/training', icon: GraduationCap },
      { label: 'Security & Compliance', href: '/security', icon: ShieldCheck },
      { label: 'Whitepapers & Guides', href: '/whitepapers', icon: FileText },
      { label: 'Blog', href: '/blog', icon: Rss },
      { label: 'Careers', href: '/careers', icon: UserCheck },
    ],
  },
]

export const FOOTER_NAV = {
  products: [
    { label: 'ToolVines Productivity', href: '/products/toolvines' },
    { label: 'DhruvaOS Education OS', href: '/products/dhruvaos' },
    { label: 'Public Roadmap', href: '/roadmap' },
    { label: 'All Products', href: '/products' },
  ],
  services: [
    { label: 'Website Development', href: '/services/enterprise-web' },
    { label: 'Mobile App Development', href: '/services/mobile-development' },
    { label: 'Custom Software & ERP/CRM', href: '/services/custom-software' },
    { label: 'AI Solutions & Agents', href: '/services/ai-development' },
    { label: 'Cloud Infrastructure & DevOps', href: '/services/devops-cloud' },
    { label: 'UI/UX & Product Design', href: '/services/ui-ux-design' },
  ],
  industries: [
    { label: 'Fashion, Apparel & D2C', href: '/industries/fashion-d2c' },
    { label: 'Education & Academia', href: '/industries/education' },
    { label: 'Healthcare Providers', href: '/industries/healthcare' },
    { label: 'Pharmaceutical Systems', href: '/industries/pharmaceutical' },
    { label: 'Government & Public Sector', href: '/industries/government' },
    { label: 'Retail & Digital Commerce', href: '/industries/retail' },
    { label: 'Startups & SaaS Projects', href: '/industries/startups' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio & Deliveries', href: '/portfolio' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Technologies', href: '/technologies' },
    { label: 'Training & Internships', href: '/training' },
    { label: 'Security & Compliance', href: '/security' },
    { label: 'Whitepapers', href: '/whitepapers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
  ],
}
