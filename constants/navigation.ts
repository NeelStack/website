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
        label: 'In Development',
        items: [
          {
            label: 'NaukariMitra',
            href: '/products/naukarimitra',
            description: 'Government job prep & AI career assistant',
          },
          {
            label: 'SarkariMitra',
            href: '/products/sarkarimitra',
            description: 'Government recruitment & workflow automation',
          },
          {
            label: 'DhruvaOS',
            href: '/products/dhruvaos',
            description: 'AI educational operating system & workspace',
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
    { label: 'ToolVines (Live)', href: '/products/toolvines' },
    { label: 'NaukariMitra (Dev)', href: '/products/naukarimitra' },
    { label: 'SarkariMitra (Dev)', href: '/products/sarkarimitra' },
    { label: 'DhruvaOS (Dev)', href: '/products/dhruvaos' },
  ],
  services: [
    { label: 'AI Application Dev', href: '/services/ai-development' },
    { label: 'Modern Web Apps', href: '/services/web-applications' },
    { label: 'Custom Software', href: '/services/custom-software' },
    { label: 'DevOps & Cloud', href: '/services/devops-cloud' },
    { label: 'Tech Consulting', href: '/services/technology-consulting' },
    { label: 'Performance Engineering', href: '/services/performance-engineering' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact Us', href: '/contact' },
  ],
  resources: [
    { label: 'Pricing', href: '/pricing' },
    { label: 'Request a Quote', href: '/request-quote' },
    { label: 'Book Consultation', href: '/book-consultation' },
    { label: 'Support Center', href: '/support' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Refund Policy', href: '/refund-policy' },
  ],
} as const
