import {
  Brain,
  Globe,
  LayoutGrid,
  Cloud,
  Bot,
  Server,
  Zap,
  GitBranch,
  Palette,
  Lightbulb,
} from 'lucide-react'
import type { Service } from '@/types'

export const SERVICES: Service[] = [
  {
    id: 'ai-development',
    name: 'AI Application Development',
    description:
      'We design and deploy intelligent software layers—from custom LLM integrations and retrieval-augmented generation (RAG) pipelines to specialized agent workflows—that automate and enhance operations.',
    icon: Brain,
    color: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    href: '/services/ai-development',
    highlights: [
      'LLM Integration & Fine-tuning',
      'AI Assistants & Chat Interfaces',
      'Autonomous AI Agents',
      'Cognitive Search & Retrieval',
    ],
    category: 'AI',
  },
  {
    id: 'web-applications',
    name: 'Modern Web Applications',
    description:
      'We build highly performant, responsive, and SEO-optimized web applications utilizing Next.js, React, and TypeScript configured for long-term scalability.',
    icon: Globe,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    href: '/services/web-applications',
    highlights: [
      'Next.js & React Development',
      'TypeScript Development',
      'Frontend Engineering & Responsive CSS',
      'Core Web Vitals Optimization',
    ],
    category: 'Development',
  },
  {
    id: 'custom-software',
    name: 'Custom Software Development',
    description:
      'Tailored software solutions precisely engineered to match your business processes, target goals, and technical requirements.',
    icon: LayoutGrid,
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    href: '/services/custom-software',
    highlights: [
      'SaaS Product Development',
      'Developer Tool Development',
      'System Design & Engineering',
      'Source Code Ownership & Documentation',
    ],
    category: 'Development',
  },
  {
    id: 'workflow-automation',
    name: 'Workflow & Business Automation',
    description:
      'We eliminate manual overhead by scripting automated workflows, integrating APIs, and building custom dashboard triggers.',
    icon: Bot,
    color: 'text-lime-400',
    bgColor: 'bg-lime-500/10',
    href: '/services/workflow-automation',
    highlights: [
      'Workflow Automation scripts',
      'Business Automation integrations',
      'Custom webhook triggers',
      'Administrative admin panels',
    ],
    category: 'Automation',
  },
  {
    id: 'enterprise-platforms',
    name: 'Enterprise Web Platforms',
    description:
      'Robust enterprise software architectures that consolidate complex databases, simplify operations, and modernise legacy systems.',
    icon: Cloud,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    href: '/services/enterprise-platforms',
    highlights: [
      'Technical Architecture planning',
      'Monolith migrations & API gateways',
      'Scale-ready database clustering',
      'Secure internal corporate portals',
    ],
    category: 'Enterprise',
  },
  {
    id: 'api-development',
    name: 'REST API & Backend Engineering',
    description:
      'We build clean, rapid, and fully documented RESTful and GraphQL APIs that connect internal services and provide reliable endpoints.',
    icon: Zap,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    href: '/services/api-development',
    highlights: [
      'Node.js Development',
      'Python / FastAPI Development',
      'REST API Development & Docs',
      'Granular API Gateway Security',
    ],
    category: 'Development',
  },
  {
    id: 'database-systems',
    name: 'Database Design & Systems',
    description:
      'We optimize and configure database platforms to ensure rapid query results, data security, and long-term durability.',
    icon: Server,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    href: '/services/database-systems',
    highlights: [
      'PostgreSQL Optimization',
      'MySQL Cluster Management',
      'Query Performance Tuning',
      'Secure backups & replication models',
    ],
    category: 'Infrastructure',
  },
  {
    id: 'devops-cloud',
    name: 'DevOps & Cloud Deployment',
    description:
      'Continuous integration, containerization, and cloud hosting setups configured to automate software releases and scale on-demand.',
    icon: GitBranch,
    color: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
    href: '/services/devops-cloud',
    highlights: [
      'Docker Containerization',
      'Vercel Deployment pipelines',
      'Cloudflare configuration & caching',
      'GitHub Actions CI/CD automation',
    ],
    category: 'Infrastructure',
  },
  {
    id: 'technology-consulting',
    name: 'Technology Consulting',
    description:
      'We partner with startup founders and business leaders to review code systems, select modern stacks, and evaluate security risk.',
    icon: Lightbulb,
    color: 'text-sky-400',
    bgColor: 'bg-sky-500/10',
    href: '/services/technology-consulting',
    highlights: [
      'Technology Consulting audits',
      'System Design reviews',
      'Security-by-design guidelines',
      'Cost-performance calculations',
    ],
    category: 'Strategy',
  },
  {
    id: 'performance-engineering',
    name: 'Performance Optimization',
    description:
      'Audit, refactor, and speed up slow interfaces, database calls, and cloud server times to maximize efficiency.',
    icon: Palette,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    href: '/services/performance-engineering',
    highlights: [
      'Core Web Vitals audits',
      'Bundle size reduction',
      'Database query indexing',
      'Caching layers implementation',
    ],
    category: 'Design',
  },
]

export const SERVICE_CATEGORIES = [
  'All',
  'Development',
  'AI',
  'Enterprise',
  'Infrastructure',
  'Automation',
  'Strategy',
  'Design',
] as const
