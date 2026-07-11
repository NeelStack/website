import type { NavMenu } from '@/types'

export const MAIN_NAV: NavMenu[] = [
  {
    label: 'Products',
    groups: [
      {
        label: 'Live Products',
        items: [
          {
            label: 'ToolVines',
            href: '/products/toolvines',
            description: 'PDF, image, video tools & AI document processing',
          },
        ],
      },
      {
        label: 'Launching Soon',
        items: [
          {
            label: 'DhruvaOS',
            href: '/products/dhruvaos',
            description: 'AI-Powered School Management & Education Operating System',
          },
        ],
      },
      {
        label: 'In Development',
        items: [
          {
            label: 'NaukariMitra',
            href: '/products/naukarimitra',
            description: 'AI-powered government job prep & career assistant',
          },
          {
            label: 'SarkariMitra',
            href: '/products/sarkarimitra',
            description: 'Government schemes & citizen services assistant',
          },
        ],
      },
    ],
  },
  {
    label: 'Services',
    groups: [
      {
        label: 'Development & AI',
        items: [
          {
            label: 'AI Application Development',
            href: '/services/ai-development',
            description: 'Custom LLM, agents & cognitive pipelines',
          },
          {
            label: 'Modern Web Applications',
            href: '/services/web-applications',
            description: 'Next.js, React & TypeScript platforms',
          },
          {
            label: 'Custom Software Development',
            href: '/services/custom-software',
            description: 'SaaS products & custom developer tools',
          },
          {
            label: 'REST API & Backend',
            href: '/services/api-development',
            description: 'FastAPI & Node.js API services',
          },
        ],
      },
      {
        label: 'Infrastructure & Operations',
        items: [
          {
            label: 'Workflow Automation',
            href: '/services/workflow-automation',
            description: 'Business automation & webhooks',
          },
          {
            label: 'Enterprise Web Platforms',
            href: '/services/enterprise-platforms',
            description: 'Modular enterprise architectures & systems',
          },
          {
            label: 'Database Design & Systems',
            href: '/services/database-systems',
            description: 'PostgreSQL & MySQL performance optimizations',
          },
          {
            label: 'DevOps & Cloud Deployment',
            href: '/services/devops-cloud',
            description: 'CI/CD automation, Docker & Vercel setups',
          },
          {
            label: 'Technology Consulting',
            href: '/services/technology-consulting',
            description: 'CTO advisory & architecture reviews',
          },
          {
            label: 'Performance Optimization',
            href: '/services/performance-engineering',
            description: 'Refactoring slow queries & Core Web Vitals',
          },
        ],
      },
    ],
  },
  {
    label: 'Industries',
    items: [
      { label: 'Education', href: '/industries/education' },
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Pharmaceutical', href: '/industries/pharmaceutical' },
      { label: 'Government', href: '/industries/government' },
      { label: 'Retail & E-Commerce', href: '/industries/retail' },
      { label: 'Startups', href: '/industries/startups' },
    ],
  },
  {
    label: 'Company',
    items: [
      { label: 'About Us', href: '/about' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Technologies', href: '/technologies' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
    ],
  },
]

export const FOOTER_NAV = {
  products: [
    { label: 'ToolVines', href: '/products/toolvines' },
    { label: 'DhruvaOS', href: '/products/dhruvaos' },
    { label: 'Future Platforms', href: '/#roadmap' },
  ],
  services: [
    { label: 'Enterprise Development', href: '/services/custom-software' },
    { label: 'AI Solutions', href: '/services/ai-development' },
    { label: 'Cloud Engineering', href: '/services/devops-cloud' },
    { label: 'Technology Consulting', href: '/services/technology-consulting' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Documentation', href: '/docs' },
    { label: 'Support', href: '/support' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
} as const


