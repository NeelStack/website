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
  Smartphone,
} from 'lucide-react'
import type { Service } from '@/types'

export const SERVICES: Service[] = [
  {
    id: 'ai-development',
    name: 'AI Application & Agent Development',
    description:
      'We design and deploy intelligent software layers—from custom LLM integrations and retrieval-augmented generation (RAG) pipelines to autonomous multi-agent workflows—that automate and enhance operations.',
    icon: Brain,
    color: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    href: '/services/ai-development',
    badge: 'Agentic AI & MCP',
    tagline: 'Autonomous swarms, MCP tool execution, and deterministic enterprise guardrails.',
    slaMetric: 'Sub-50ms Inference & Zero Data Leak',
    turnaround: '2–4 Weeks MVP',
    keyCapabilities: [
      {
        title: 'LangGraph Cyclic Agents',
        desc: 'Deterministic state-machine workflows with cyclic execution, human-in-the-loop approvals, and structured tool outputs.',
      },
      {
        title: 'Model Context Protocol (MCP)',
        desc: 'Standardized universal tool interface connecting frontier LLMs securely to enterprise databases, internal APIs, and sandbox environments.',
      },
      {
        title: 'GraphRAG & Neural Memory',
        desc: 'High-precision hybrid vector + knowledge graph retrieval with persistent contextual memory across user sessions (Mem0 / Zep).',
      },
      {
        title: 'NeMo & PII Guardrails',
        desc: 'Enterprise data leak prevention, prompt injection mitigation, automated PII sanitization, and strict compliance enforcement.',
      },
    ],
    highlights: [
      'LangGraph Multi-Agent Workflows',
      'Model Context Protocol (MCP) Integration',
      'GraphRAG & Neural Memory (Mem0)',
      'Enterprise Guardrails & PII Redaction',
      'Fine-Tuning & Air-Gapped Local LLMs',
      'Continuous Latency & Drift Observability',
    ],
    category: 'AI',
    techStack: [
      {
        label: 'Frontier Foundation LLMs',
        items: ['Anthropic Claude 3.5 Sonnet', 'Google Gemini 1.5/2.0 Pro', 'OpenAI GPT-4o', 'Meta Llama 3.3', 'Mistral Large', 'Cohere Command-R+'],
      },
      {
        label: 'Agentic AI & MCP Protocol',
        items: ['LangGraph', 'Model Context Protocol (MCP)', 'PydanticAI', 'Microsoft AutoGen', 'CrewAI', 'DSPy Pipelines'],
      },
      {
        label: 'GraphRAG & Neural Memory',
        items: ['Microsoft GraphRAG', 'Mem0', 'Letta (MemGPT)', 'LlamaIndex', 'Haystack 2.0', 'Zep'],
      },
      {
        label: 'AI Security & Observability',
        items: ['NVIDIA NeMo Guardrails', 'Langfuse', 'Microsoft Presidio (PII)', 'LangSmith', 'Promptfoo Red-Teaming', 'Lakera Guard'],
      },
      {
        label: 'Vector DBs & Embeddings',
        items: ['Qdrant', 'pgvector (PostgreSQL)', 'Pinecone', 'Milvus', 'Voyage AI', 'BAAI BGE-M3'],
      },
      {
        label: 'Backend & Inference Runtime',
        items: ['FastAPI (Python 3.12)', 'vLLM', 'Ollama (Air-Gapped)', 'AWS Bedrock', 'GCP Vertex AI'],
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'AI Strategy & Data Audit',
        description: 'We assess your existing data, define the AI use cases with highest ROI, and select the optimal model and architecture for your goals.',
      },
      {
        step: 2,
        title: 'Prototype & RAG Pipeline Build',
        description: 'Rapid prototype with LLM integration, embedding pipeline, vector store setup, and initial accuracy benchmarking against your data.',
      },
      {
        step: 3,
        title: 'Agent Workflows & Integration',
        description: 'Multi-agent orchestration, tool-use integrations, API connections to your existing systems, and evaluation harness setup.',
      },
      {
        step: 4,
        title: 'Production Deployment & Monitoring',
        description: 'Containerized deployment with observability dashboards, latency budgets, cost controls, and drift detection alerts.',
      },
    ],
    deliverables: [
      'Production-ready LLM application with 100% source code ownership',
      'RAG pipeline with vector database configured for your enterprise data',
      'Agent workflow scripts with evaluation test suite and regression harness',
      'OpenAPI documentation & integration guides for consumer services',
      'Cost & performance monitoring dashboard with token rate-limiting',
      'Operational runbook for model updates, fine-tuning, and dataset refreshes',
    ],
    faqs: [
      {
        question: 'Can you integrate AI into our existing product?',
        answer: 'Yes. We specialize in adding AI layers to existing applications via API integrations, embedding models into your backend, or building dedicated AI microservices that communicate with your product.',
      },
      {
        question: 'Do you fine-tune models or use RAG?',
        answer: 'Both — we evaluate which approach delivers better results and lower cost for your specific use case. RAG is preferred for knowledge-heavy applications; fine-tuning is used for specialized tone, format, or domain tasks.',
      },
      {
        question: 'How do you handle data privacy with AI?',
        answer: 'We can deploy models within your cloud VPC so no data leaves your infrastructure. We also support on-premises LLM deployment using models like Llama 3 or Mistral for fully air-gapped environments.',
      },
      {
        question: 'What ongoing costs should we expect?',
        answer: 'Token costs from LLM providers (OpenAI, Anthropic, etc.) and vector database storage are the main ongoing costs. We build cost monitoring dashboards and optimize prompts to minimize spend.',
      },
    ],
  },
  {
    id: 'web-applications',
    name: 'Modern Web Applications & Platforms',
    description:
      'We build highly performant, responsive, and SEO-optimized web applications utilizing Next.js, React, and TypeScript configured for high concurrency and sub-second edge response.',
    icon: Globe,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    href: '/services/web-applications',
    badge: 'Next.js 16 & Rust WASM',
    tagline: 'Sub-second Server Component architectures engineered for scale and speed.',
    slaMetric: '< 2.5s LCP & 95+ Lighthouse Score',
    turnaround: '2–4 Weeks MVP',
    keyCapabilities: [
      {
        title: 'Next.js 16 Turbopack & React 19',
        desc: 'Server Actions, streaming SSR, parallel data fetching, and edge route rendering for instant page transitions.',
      },
      {
        title: 'Client-Side WebAssembly (WASM)',
        desc: 'Rust-compiled modules executing heavy image, PDF, and compute tasks in-browser with zero server load.',
      },
      {
        title: 'OKLCH Design Systems & Tailwind v4',
        desc: 'Dynamic wide-gamut color palettes, WCAG 2.1 AA accessibility, fluid typography, and tactile micro-interactions.',
      },
      {
        title: 'Core Web Vitals Hardening',
        desc: 'Automated asset compression, sub-second TTFB, and zero layout shift on mobile and desktop screens.',
      },
    ],
    highlights: [
      'Next.js 16 & React 19 Server Components',
      'Client-Side Rust WebAssembly Modules',
      'TypeScript Strict Mode End-to-End',
      'Tailwind CSS v4 & OKLCH Design Tokens',
      'Core Web Vitals Green Guarantee (95+ Lighthouse)',
      'Automated CI/CD Preview Deployments',
    ],
    category: 'Development',
    techStack: [
      {
        label: 'Frontend Frameworks',
        items: ['Next.js 16 (Turbopack)', 'React 19', 'TypeScript 5.5+', 'Rust WebAssembly (WASM)', 'Vite'],
      },
      {
        label: 'Styling & Design System',
        items: ['Tailwind CSS v4 (OKLCH)', 'shadcn/ui', 'Radix UI', 'Framer Motion', 'Lucide Icons'],
      },
      {
        label: 'State & Data Fetching',
        items: ['TanStack Query v5', 'Zustand', 'Server Actions', 'SWR', 'React Hook Form'],
      },
      {
        label: 'Testing & Quality',
        items: ['Vitest', 'Playwright', 'Storybook', 'Lighthouse CI', 'ESLint 9'],
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Architecture & Design System',
        description: 'We define routing structure, component hierarchy, design tokens, and performance budgets before writing a line of code.',
      },
      {
        step: 2,
        title: 'Core Build & CMS Integration',
        description: 'Page scaffolding, shared layouts, CMS or API wiring, authentication, and accessibility baseline pass.',
      },
      {
        step: 3,
        title: 'Optimization & Testing',
        description: 'Core Web Vitals tuning (LCP < 2.5s, CLS < 0.1), end-to-end testing, mobile responsiveness checks, and SEO audit.',
      },
      {
        step: 4,
        title: 'CI/CD Deployment & Handover',
        description: 'Automated deployment pipeline, preview environments per PR, production release, and full codebase documentation handover.',
      },
    ],
    deliverables: [
      'Full Next.js / React application with strict TypeScript',
      'Responsive design across mobile, tablet, and widescreen desktop',
      'Core Web Vitals scores in green (95+ Lighthouse across all metrics)',
      'CI/CD pipeline with automated preview deployments per pull request',
      'Component documentation in Storybook or documented design tokens',
      'Programmatic SEO metadata, dynamic sitemap, and JSON-LD schema markup',
    ],
    faqs: [
      {
        question: 'What is your preferred hosting for web apps?',
        answer: 'We deploy Next.js apps to AWS (EC2, ECS, or Amplify), Vercel, or any VPS. For enterprise projects we configure custom Kubernetes clusters on AWS EKS or GCP GKE with full zero-downtime deploys.',
      },
      {
        question: 'Do you support headless CMS integration?',
        answer: 'Yes. We integrate Contentful, Sanity, Strapi, and Directus. We also build custom CMS solutions if your content model is too specific for off-the-shelf products.',
      },
      {
        question: 'How do you ensure long-term maintainability?',
        answer: 'We enforce TypeScript strict mode, co-located component tests, Storybook documentation, and a full architectural decision record (ADR) log so any future developer can onboard quickly.',
      },
    ],
  },
  {
    id: 'custom-software',
    name: 'Custom Software & ERP Systems',
    description:
      'Tailored business software solutions, enterprise resource planning (ERP), CRM portals, and multi-tenant SaaS platforms engineered with schema-level tenant isolation.',
    icon: LayoutGrid,
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    href: '/services/custom-software',
    badge: 'Multi-Tenant & ERP',
    tagline: 'Bespoke business software, CRM systems, and multi-tenant SaaS platforms.',
    slaMetric: '100% Data Isolation & Full IP Transfer',
    turnaround: '4–8 Weeks Delivery',
    keyCapabilities: [
      {
        title: 'Multi-Tenant RLS Isolation',
        desc: 'PostgreSQL Row-Level Security (RLS) policies ensuring complete cryptographic and database-level isolation between organizational accounts.',
      },
      {
        title: 'Custom ERP & Inventory Portals',
        desc: 'Tailored enterprise resource planning, warehouse logistics, role-based workflows, and automated invoice processing.',
      },
      {
        title: 'Unified Payment Webhooks',
        desc: 'Razorpay, Stripe, and PayU integration with automated ledger reconciliation, subscription logic, and tax handling.',
      },
      {
        title: 'Zero Vendor Lock-in',
        desc: 'Full git repository transfer, clean architecture layers, and developer runbooks enabling independent client maintenance.',
      },
    ],
    highlights: [
      'Multi-Tenant SaaS Architecture (Schema Isolation)',
      'Custom ERP, CRM & Logistics Platforms',
      'Granular Role-Based Access Control (RBAC)',
      'Automated Invoicing & Payment Webhooks',
      '100% Source Code Ownership & Git Transfer',
      'Comprehensive Developer Runbooks & ADRs',
    ],
    category: 'Development',
    techStack: [
      {
        label: 'Backend & APIs',
        items: ['Node.js', 'Python', 'FastAPI', 'Express.js', 'NestJS', 'Go'],
      },
      {
        label: 'Databases',
        items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Supabase', 'PlanetScale'],
      },
      {
        label: 'Auth & Payments',
        items: ['Auth0', 'Clerk', 'NextAuth.js', 'Stripe', 'Razorpay', 'PayU'],
      },
      {
        label: 'Infrastructure',
        items: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform'],
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Requirements Discovery',
        description: 'Deep-dive sessions to map business processes, document user roles, define data models, and produce a signed product specification.',
      },
      {
        step: 2,
        title: 'System Design & Prototype',
        description: 'Architecture diagrams, database schema design, API contracts, and a clickable Figma prototype reviewed before development begins.',
      },
      {
        step: 3,
        title: 'Agile Build Cycles',
        description: 'Two-week sprints with demo sessions, GitHub project board transparency, and continuous deployment to a staging environment.',
      },
      {
        step: 4,
        title: 'Launch, Handover & Support',
        description: 'Production release, load testing, full documentation package, developer onboarding, and optional SLA maintenance agreement.',
      },
    ],
    deliverables: [
      '100% source code ownership transferred to your GitHub/GitLab org',
      'Complete database schema, migration scripts, and seed data',
      'REST / GraphQL API with full OpenAPI 3.1 specifications',
      'Admin control panel with role-based permissions and audit logs',
      'Automated test suite (unit, integration, and e2e tests)',
      'Architecture Decision Records (ADRs) and onboarding runbooks',
    ],
    faqs: [
      {
        question: 'Can you build multi-tenant SaaS products?',
        answer: 'Yes. We have experience building multi-tenant architectures with row-level security, tenant-scoped data isolation, custom subdomain routing, and per-tenant billing via Stripe.',
      },
      {
        question: 'Do you build ERP and CRM systems?',
        answer: 'Yes. We build custom ERP and CRM systems for businesses that need workflows specific to their industry — from manufacturing order management to real estate client pipelines.',
      },
      {
        question: 'What is your payment integration support?',
        answer: 'We integrate Stripe, Razorpay, and PayU with full webhook handling, subscription billing, invoice generation, and multi-currency support.',
      },
    ],
  },
  {
    id: 'workflow-automation',
    name: 'Workflow & Business Automation',
    description:
      'We eliminate manual overhead by scripting automated workflows, integrating APIs, building custom dashboard triggers, and deploying resilient worker queues.',
    icon: Bot,
    color: 'text-lime-400',
    bgColor: 'bg-lime-500/10',
    href: '/services/workflow-automation',
    badge: 'Event-Driven Automation',
    tagline: 'Automated business pipelines, custom webhook triggers, and low-latency RPA bots.',
    slaMetric: '99.9% Execution Reliability',
    turnaround: '1–2 Weeks Sprints',
    keyCapabilities: [
      {
        title: 'n8n & Temporal.io Pipelines',
        desc: 'Fault-tolerant orchestration connecting multi-step enterprise workflows across SaaS platforms and internal systems.',
      },
      {
        title: 'Browser RPA (Playwright)',
        desc: 'Automated portal scraping, legacy government portal form entry, and headless PDF report compilation.',
      },
      {
        title: 'Webhook & Queue Systems',
        desc: 'BullMQ and Redis stream workers with automatic backoff, deduplication, and retry policies for guaranteed delivery.',
      },
      {
        title: 'Instant Slack & Teams Alerting',
        desc: 'Live anomaly notifications, interactive approval requests, and audit trail dashboards.',
      },
    ],
    highlights: [
      'Self-Hosted n8n & Temporal.io Workflows',
      'Custom Webhook Handlers & Event Queues',
      'Robotic Process Automation (Playwright RPA)',
      'Slack / Teams Interactive Operations Bots',
      'Automated Data Extraction & PDF Compilation',
      'Real-Time Failure Alerts & Dead-Letter Queues',
    ],
    category: 'Automation',
    techStack: [
      {
        label: 'Automation Platforms',
        items: ['n8n', 'Zapier', 'Make (Integromat)', 'Activepieces', 'Temporal.io'],
      },
      {
        label: 'Scripting & Bots',
        items: ['Python Scripts', 'Node.js Workers', 'Puppeteer', 'Playwright', 'Selenium'],
      },
      {
        label: 'Integrations',
        items: ['Slack', 'Microsoft Teams', 'Google Workspace', 'Notion', 'Airtable', 'HubSpot'],
      },
      {
        label: 'Scheduling & Queuing',
        items: ['BullMQ', 'Redis Queues', 'Cron Jobs', 'AWS SQS', 'RabbitMQ'],
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Process Mapping & Audit',
        description: 'We document your current manual workflows, identify bottlenecks, and estimate time savings per automation candidate.',
      },
      {
        step: 2,
        title: 'Automation Blueprint',
        description: 'Trigger-action flowcharts, API integration mapping, error handling design, and approval for build phase.',
      },
      {
        step: 3,
        title: 'Build & Test in Staging',
        description: 'Automation scripts developed and tested with real data in a sandboxed environment before production cutover.',
      },
      {
        step: 4,
        title: 'Go-Live & Monitoring',
        description: 'Production deployment with execution logs, failure alerting, and scheduled health checks so automations never silently break.',
      },
    ],
    deliverables: [
      'Production-tested automation scripts and n8n/Make workflow files',
      'API integration schemas with full error payload handling',
      'Slack / Microsoft Teams webhook alerting infrastructure',
      'Centralized execution logs and audit trail database',
      'Admin dashboard for monitoring run history and queue throughput',
      'Step-by-step handover guide for non-technical team management',
    ],
    faqs: [
      {
        question: 'Can you automate without replacing our existing tools?',
        answer: 'Yes. We build on top of your existing stack — connecting CRMs, ERPs, spreadsheets, and communication tools via APIs without forcing platform migrations.',
      },
      {
        question: 'What happens if an automation breaks?',
        answer: 'All automations include failure alerting via Slack or email. We can also implement retry logic and fallback queues so a single API error does not break an entire workflow.',
      },
      {
        question: 'Do you build RPA (Robotic Process Automation)?',
        answer: 'Yes. We use Playwright and Puppeteer for browser automation when APIs are not available — automating repetitive data entry, report generation, and portal extractions.',
      },
    ],
  },
  {
    id: 'enterprise-platforms',
    name: 'Enterprise Platforms & Re-Architecture',
    description:
      'Robust enterprise software architectures that consolidate complex databases, simplify operations, migrate monolithic systems, and enforce SOC 2 standards.',
    icon: Cloud,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    href: '/services/enterprise-platforms',
    badge: 'Strangler-Fig Migration',
    tagline: 'Modernizing monolithic legacy codebases into resilient, distributed microservices.',
    slaMetric: 'Zero-Downtime Migration SLA',
    turnaround: 'Phase-Based Roadmaps',
    keyCapabilities: [
      {
        title: 'Strangler-Fig Modernization',
        desc: 'Incremental service extraction without risky big-bang rewrites — keeping your core business operations live throughout.',
      },
      {
        title: 'Event-Driven & CQRS Design',
        desc: 'Kafka and RabbitMQ event streaming with high-throughput eventual consistency and schema registry validation.',
      },
      {
        title: 'Enterprise SSO & Directory Sync',
        desc: 'SAML 2.0 and OIDC integration with Okta, Azure AD, and fine-grained attribute-based access control (ABAC).',
      },
      {
        title: 'SOC 2 & DPDP Audit Readiness',
        desc: 'Tamper-proof audit logging, encrypted data layers at rest/transit, and automated compliance policy verification.',
      },
    ],
    highlights: [
      'Strangler-Fig Monolith-to-Microservices Migration',
      'Kafka / RabbitMQ Event-Driven Streaming',
      'Enterprise SAML 2.0 & OIDC SSO Integration',
      'CQRS & Distributed Database Partitioning',
      'Zero-Downtime Traffic Cutover SLA',
      'SOC 2 & India DPDP 2023 Security Baseline',
    ],
    category: 'Enterprise',
    techStack: [
      {
        label: 'Architecture Patterns',
        items: ['Microservices', 'Event-driven Architecture', 'CQRS', 'API Gateway', 'BFF Pattern'],
      },
      {
        label: 'Enterprise Backend',
        items: ['NestJS', 'Spring Boot', 'Go', 'gRPC', 'GraphQL Federation'],
      },
      {
        label: 'Messaging & Events',
        items: ['Apache Kafka', 'RabbitMQ', 'AWS SQS/SNS', 'NATS', 'Redis Streams'],
      },
      {
        label: 'Security & Compliance',
        items: ['OAuth 2.0 / OIDC', 'SAML SSO', 'RBAC / ABAC', 'Vault (HashiCorp)', 'SOC 2 Readiness'],
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Enterprise Discovery & Architecture Review',
        description: 'Technical assessment of current systems, security posture, scalability gaps, and integration points. Deliverable: detailed architecture report.',
      },
      {
        step: 2,
        title: 'Target Architecture Design',
        description: 'System design documentation, data flow diagrams, API gateway configuration, and phased migration roadmap approved by stakeholders.',
      },
      {
        step: 3,
        title: 'Incremental Build & Migration',
        description: 'Feature-by-feature strangler-fig migration with zero-downtime cutover strategies and database replication during transitions.',
      },
      {
        step: 4,
        title: 'Hardening, Compliance & Handover',
        description: 'Security hardening, penetration test review, compliance documentation, runbook delivery, and engineering team knowledge transfer.',
      },
    ],
    deliverables: [
      'Target architecture design document and data flow diagrams',
      'Microservices or modular monolith codebase with clean boundaries',
      'API gateway configuration with rate limiting, auth, and telemetry',
      'Event bus setup with schema registry and message contracts',
      'Security hardening report and SOC 2 / DPDP compliance checklist',
      'Operations runbook and incident response failover playbook',
    ],
    faqs: [
      {
        question: 'Can you migrate our legacy monolith to microservices?',
        answer: 'Yes. We use the strangler-fig pattern to incrementally extract services without big-bang rewrites — keeping your system live throughout the migration.',
      },
      {
        question: 'How do you handle enterprise SSO?',
        answer: 'We integrate SAML 2.0 and OIDC SSO with providers like Okta, Azure AD, Google Workspace, and Auth0, with fine-grained RBAC tied to your directory groups.',
      },
      {
        question: 'Do you support compliance requirements like SOC 2 or ISO 27001?',
        answer: 'We design systems with audit logging, encryption at rest and in transit, access controls, and documented security policies that support SOC 2 Type II and ISO 27001 audit readiness.',
      },
    ],
  },
  {
    id: 'api-development',
    name: 'REST API & Backend Engineering',
    description:
      'We build clean, rapid, and fully documented RESTful, GraphQL, and gRPC APIs that connect internal services, mobile apps, and third-party ecosystems with sub-50ms latency.',
    icon: Zap,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    href: '/services/api-development',
    badge: 'OpenAPI 3.1 & Sub-50ms',
    tagline: 'High-throughput RESTful, GraphQL, and gRPC backends with rigorous API contracts.',
    slaMetric: '< 50ms Edge API Response',
    turnaround: '2–3 Weeks Delivery',
    keyCapabilities: [
      {
        title: 'Python FastAPI & Node NestJS',
        desc: 'Asynchronous event loops, Pydantic type validation, and dependency injection architectures for lightning-fast execution.',
      },
      {
        title: 'Contract-First OpenAPI 3.1',
        desc: 'Synchronized Swagger docs, Postman collections, and automated client TypeScript SDK generation.',
      },
      {
        title: 'API Gateway & Rate Limiting',
        desc: 'Kong and Cloudflare edge gateways with token bucket rate limiting, JWT validation, and bot mitigation.',
      },
      {
        title: 'Real-Time WebSockets & SSE',
        desc: 'Sub-second bi-directional state sync, live push notification streams, and pub/sub message brokers.',
      },
    ],
    highlights: [
      'High-Throughput FastAPI & NestJS Backends',
      'Contract-First OpenAPI 3.1 & Swagger UI',
      'GraphQL & gRPC High-Speed Services',
      'Kong & Cloudflare Edge API Gateways',
      'Automated TypeScript & Python SDK Generation',
      'k6 Distributed Load Testing & Benchmarking',
    ],
    category: 'Development',
    techStack: [
      {
        label: 'API Frameworks',
        items: ['FastAPI', 'Express.js', 'NestJS', 'Hono', 'Django REST', 'Go Gin'],
      },
      {
        label: 'API Standards',
        items: ['REST / JSON:API', 'GraphQL', 'gRPC', 'WebSockets', 'Server-Sent Events'],
      },
      {
        label: 'Docs & Testing',
        items: ['OpenAPI / Swagger', 'Postman Collections', 'Insomnia', 'Bruno', 'k6 Load Testing'],
      },
      {
        label: 'API Security',
        items: ['JWT / OAuth 2.0', 'API Key Management', 'CORS Policies', 'Rate Limiting', 'Kong Gateway', 'AWS API Gateway'],
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'API Contract Design',
        description: 'OpenAPI spec or GraphQL schema written first. Consumer teams review and approve contracts before backend implementation begins.',
      },
      {
        step: 2,
        title: 'Backend Development',
        description: 'Service implementation with dependency injection, error handling, request validation, and database layer abstraction.',
      },
      {
        step: 3,
        title: 'Security & Performance Testing',
        description: 'Auth layer integration, CORS policy configuration, rate limit testing, and k6 load tests to validate throughput targets.',
      },
      {
        step: 4,
        title: 'Documentation & Deployment',
        description: 'Interactive Swagger UI, Postman collection export, versioned API gateway deployment, and SDK generation if required.',
      },
    ],
    deliverables: [
      'Production REST or GraphQL API codebase with 100% test coverage',
      'Interactive OpenAPI 3.1 specification and Swagger documentation',
      'Postman collection with pre-configured staging & production environments',
      'API gateway configuration with rate limiting and JWT auth policies',
      'Client SDK (TypeScript/Python) generated automatically from schema',
      'k6 benchmark report validating throughput and sub-50ms latency',
    ],
    faqs: [
      {
        question: 'Do you provide third-party API integrations?',
        answer: 'Yes. We integrate payment gateways (Stripe, Razorpay), communication APIs (Twilio, SendGrid), logistics APIs, ERP connectors, and government data APIs with proper error handling and retry logic.',
      },
      {
        question: 'How do you version APIs?',
        answer: 'We use URI versioning (/api/v1, /api/v2) with deprecation headers and sunset timelines, ensuring backward compatibility during major version transitions.',
      },
      {
        question: 'Can you add real-time capabilities to existing APIs?',
        answer: 'Yes. We add WebSocket channels or Server-Sent Events to existing REST APIs for live data updates, notifications, and collaborative features.',
      },
    ],
  },
  {
    id: 'database-systems',
    name: 'Database Architecture & Systems',
    description:
      'We design, optimize, and configure high-availability database platforms ensuring rapid sub-10ms query execution, data security, pgvector search, and zero-data-loss durability.',
    icon: Server,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    href: '/services/database-systems',
    badge: 'PostgreSQL 16 & HA',
    tagline: 'High-availability database clustering, query tuning, and pgvector embeddings.',
    slaMetric: '99.99% Availability & Disaster Recovery',
    turnaround: '1–2 Weeks Audit & Tune',
    keyCapabilities: [
      {
        title: 'PostgreSQL 16 & Read Replicas',
        desc: 'PgBouncer connection pooling, multi-AZ failover, and automated Patroni clustering for continuous uptime.',
      },
      {
        title: 'Vector Index Optimization',
        desc: 'HNSW and IVFFlat index tuning in pgvector for sub-10ms similarity searches across millions of embeddings.',
      },
      {
        title: 'Deep Query & Index Audits',
        desc: 'EXPLAIN ANALYZE execution reviews, slow-query elimination, and declarative table partitioning.',
      },
      {
        title: 'Point-in-Time Disaster Recovery',
        desc: 'Automated WAL archiving, continuous snapshot backups, and cross-region replication for zero data loss.',
      },
    ],
    highlights: [
      'PostgreSQL 16 Multi-AZ Clustering & Read Replicas',
      'pgvector & HNSW Vector Index Tuning',
      'PgBouncer Connection Pooling & Proxy Optimization',
      'Declarative Partitioning for Big Data Tables',
      'Continuous WAL Archiving & Point-in-Time Recovery',
      'Zero-Downtime Schema Migrations (Prisma / Drizzle)',
    ],
    category: 'Infrastructure',
    techStack: [
      {
        label: 'Relational Databases',
        items: ['PostgreSQL 16', 'MySQL 8', 'MariaDB', 'AWS RDS', 'AWS Aurora', 'Supabase'],
      },
      {
        label: 'NoSQL & Cache',
        items: ['MongoDB', 'Redis', 'DynamoDB', 'Cassandra', 'ClickHouse', 'Elasticsearch'],
      },
      {
        label: 'Migrations & ORM',
        items: ['Prisma', 'Drizzle ORM', 'TypeORM', 'Alembic', 'Flyway', 'Liquibase'],
      },
      {
        label: 'Monitoring & HA',
        items: ['pgBadger', 'pg_stat_statements', 'PgBouncer', 'Patroni', 'AWS RDS Proxy'],
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Schema & Query Audit',
        description: 'Slow query log analysis, execution plan review, index coverage analysis, and N+1 query identification across your codebase.',
      },
      {
        step: 2,
        title: 'Schema Optimization',
        description: 'Normalization review, composite index design, partitioning strategy for large tables, and foreign key constraint analysis.',
      },
      {
        step: 3,
        title: 'Replication & HA Setup',
        description: 'Read replica configuration, connection pooling with PgBouncer or RDS Proxy, failover testing, and backup schedule implementation.',
      },
      {
        step: 4,
        title: 'Monitoring & Ongoing Health',
        description: 'Slow query alerting, disk usage monitoring, automated daily backups with point-in-time recovery, and monthly performance reports.',
      },
    ],
    deliverables: [
      'Comprehensive database audit report with query optimization plan',
      'Optimized schema with version-controlled migration scripts',
      'Index strategy documentation for relational & vector data',
      'PgBouncer / RDS Proxy connection pooling configuration',
      'Automated disaster recovery and point-in-time restore runbook',
      'Query performance baseline & pg_stat_statements monitoring dashboard',
    ],
    faqs: [
      {
        question: 'Can you migrate our database to the cloud?',
        answer: 'Yes. We migrate on-premises databases to AWS RDS, Aurora, GCP Cloud SQL, or Azure Database with minimal downtime using replication-based migration strategies.',
      },
      {
        question: 'How do you handle database backups?',
        answer: 'We configure automated daily snapshots, transaction log backups (for point-in-time recovery), and cross-region backup replication for disaster recovery compliance.',
      },
      {
        question: 'What is your approach to database security?',
        answer: 'We enforce least-privilege role design, encrypt data at rest and in transit, set up VPC isolation, audit log all queries, and mask sensitive PII in non-production environments.',
      },
    ],
  },
  {
    id: 'devops-cloud',
    name: 'DevOps & Cloud Infrastructure',
    description:
      'End-to-end cloud infrastructure engineering, container orchestration, Terraform IaC, and CI/CD pipelines across AWS, GCP, and Azure — built to scale reliably and deploy with zero downtime.',
    icon: GitBranch,
    color: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
    href: '/services/devops-cloud',
    badge: 'Terraform & Kubernetes',
    tagline: 'Cloud infrastructure as code, automated CI/CD pipelines, and zero-downtime scaling.',
    slaMetric: '99.99% Production Uptime',
    turnaround: '1–3 Weeks IaC Setup',
    keyCapabilities: [
      {
        title: 'Terraform & Terragrunt IaC',
        desc: '100% reproducible AWS, GCP, and Azure cloud environments with version-controlled code and zero manual console drift.',
      },
      {
        title: 'Kubernetes & Docker Swarms',
        desc: 'Managed EKS/GKE clusters, Helm charts, horizontal pod autoscaling, and ArgoCD GitOps continuous deployment.',
      },
      {
        title: 'Blue-Green & Canary CI/CD',
        desc: 'GitHub Actions and GitLab CI with automated preview environments and rollback triggers for zero downtime.',
      },
      {
        title: 'Cloudflare Edge & WAF Lockdown',
        desc: 'DDoS mitigation, TLS 1.3 encryption, rate limiting, and private VPC subnet perimeter defense.',
      },
    ],
    highlights: [
      'Terraform Infrastructure as Code (AWS / GCP / Azure)',
      'Kubernetes (EKS / GKE) & Helm Chart Deployments',
      'ArgoCD GitOps & Automated Blue-Green Releases',
      'Cloudflare CDN, WAF & Zero-Trust Access',
      'Comprehensive Datadog & Prometheus Observability',
      'Cost Optimization & AWS Reserved Instance Planning',
    ],
    category: 'Infrastructure',
    techStack: [
      {
        label: 'Cloud Providers',
        items: ['AWS EC2 / ECS Fargate', 'AWS EKS', 'AWS RDS Aurora', 'AWS S3 + CloudFront', 'AWS Route 53', 'AWS IAM'],
      },
      {
        label: 'Google & Azure Cloud',
        items: ['GCP Cloud Run', 'GCP GKE', 'Google Cloud SQL', 'Azure Container Apps', 'Azure DevOps', 'Azure AKS'],
      },
      {
        label: 'Container & Orchestration',
        items: ['Docker', 'Docker Compose', 'Kubernetes', 'Helm Charts', 'Kustomize', 'ArgoCD'],
      },
      {
        label: 'Infrastructure as Code',
        items: ['Terraform', 'Terragrunt', 'Ansible', 'AWS CloudFormation', 'Pulumi'],
      },
      {
        label: 'CI/CD Pipelines',
        items: ['GitHub Actions', 'GitLab CI/CD', 'Jenkins', 'CircleCI', 'AWS CodePipeline'],
      },
      {
        label: 'Networking & Security',
        items: ['Cloudflare CDN', 'Cloudflare WAF', 'Cloudflare Workers', 'NGINX', 'Traefik', 'AWS VPC & Security Groups'],
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Infrastructure Audit & Cloud Design',
        description: 'Review existing infrastructure, define cloud architecture (VPC, subnets, IAM roles, compute sizing), and produce a cost estimate and architecture diagram.',
      },
      {
        step: 2,
        title: 'IaC & Environment Provisioning',
        description: 'Terraform modules written for all infrastructure. Dev, staging, and production environments provisioned identically from code — no manual console clicks.',
      },
      {
        step: 3,
        title: 'CI/CD Pipeline Build',
        description: 'Automated test, build, container image, and deploy pipeline. Blue/green or canary deploy strategies configured for zero-downtime production releases.',
      },
      {
        step: 4,
        title: 'Security Hardening & Observability',
        description: 'Security group lockdown, secrets management (AWS Secrets Manager or HashiCorp Vault), centralized logging (CloudWatch / ELK), and alerting dashboards.',
      },
    ],
    deliverables: [
      'Cloud architecture diagram (AWS / GCP / Azure)',
      'Terraform modules for all infrastructure (fully version-controlled)',
      'CI/CD pipeline configuration (GitHub Actions / GitLab CI)',
      'Kubernetes manifests or Helm charts with autoscaling rules',
      'Cloudflare CDN, WAF & DNS configuration',
      'Centralized Prometheus / Grafana / Datadog monitoring dashboards',
      'Operational runbook for scaling, failover, and incident response',
      'Cloud cost optimization report with right-sizing recommendations',
    ],
    faqs: [
      {
        question: 'Which cloud provider do you recommend?',
        answer: 'It depends on your workload, existing tooling, and regional compliance needs. AWS is our primary platform with the deepest capability set. GCP excels for ML/AI workloads and BigQuery analytics. Azure is ideal for Microsoft-heavy organizations. We work across all three and can design multi-cloud or hybrid setups.',
      },
      {
        question: 'Can you migrate our on-premises servers to the cloud?',
        answer: 'Yes. We plan and execute lift-and-shift or re-architecture cloud migrations with minimal downtime using replication, blue/green switching, and DNS-based cutover strategies.',
      },
      {
        question: 'What is Infrastructure as Code and why does it matter?',
        answer: 'Terraform lets us define your entire cloud infrastructure in version-controlled code. This means environments are reproducible, changes are reviewed in pull requests, and there is no infrastructure drift between dev, staging, and production.',
      },
      {
        question: 'How do you secure cloud infrastructure?',
        answer: 'We enforce least-privilege IAM policies, private VPC subnets, encrypted secrets management (Vault / AWS Secrets Manager), Cloudflare WAF rules, and automated compliance scans using tools like AWS Config and Trivy.',
      },
      {
        question: 'Do you support Kubernetes?',
        answer: 'Yes. We set up managed Kubernetes clusters (AWS EKS, GCP GKE, Azure AKS), write Helm charts for deployments, configure horizontal pod autoscaling, and implement ArgoCD for GitOps-based continuous delivery.',
      },
    ],
  },
  {
    id: 'technology-consulting',
    name: 'Technology Consulting & Architecture Audits',
    description:
      'We partner with startup founders and enterprise CTOs to audit codebases, select modern technology stacks, evaluate OWASP security risks, and optimize cloud infrastructure costs.',
    icon: Lightbulb,
    color: 'text-sky-400',
    bgColor: 'bg-sky-500/10',
    href: '/services/technology-consulting',
    badge: 'Code & Security Audit',
    tagline: 'Independent technical architecture reviews, OWASP security audits, and cloud cost optimization.',
    slaMetric: 'Risk-Rated Remediation Matrix',
    turnaround: '1–2 Weeks Assessment',
    keyCapabilities: [
      {
        title: 'Architecture & Code Quality Audit',
        desc: 'Deep static analysis, technical debt quantification, and architectural bottleneck mapping across your repositories.',
      },
      {
        title: 'OWASP Top 10 Security Review',
        desc: 'Vulnerability assessment, IAM privilege audits, dependency risk reviews, and penetration guidelines.',
      },
      {
        title: 'Cloud Cost Optimization',
        desc: 'Reserved instance planning, orphaned resource cleanup, and 30-50% infrastructure bill reduction strategies.',
      },
      {
        title: 'CTO Advisory & Build vs. Buy',
        desc: 'Strategic vendor evaluation, technology stack selection, and 12-month engineering roadmaps.',
      },
    ],
    highlights: [
      'Comprehensive Codebase & Architecture Audit',
      'OWASP Top 10 Security & Dependency Vulnerability Scan',
      '30–50% Cloud Infrastructure Cost Optimization',
      'Strategic Build vs. Buy & Vendor Evaluation',
      '12-Month Actionable Technology Roadmap',
      'Architecture Decision Records (ADR) Deliverable',
    ],
    category: 'Strategy',
    techStack: [
      {
        label: 'Audit Scope',
        items: ['Code Quality Review', 'Architecture Assessment', 'Database Design Review', 'API Design Audit', 'CI/CD Maturity'],
      },
      {
        label: 'Security Assessment',
        items: ['OWASP Top 10 Review', 'Dependency Vulnerability Scan', 'IAM & Access Audit', 'Secrets Hygiene Check', 'Penetration Test Guidance'],
      },
      {
        label: 'Cloud Cost Optimization',
        items: ['AWS Cost Explorer Analysis', 'Right-sizing Recommendations', 'Reserved Instance Planning', 'Spot Instance Strategy', 'Multi-cloud Cost Comparison'],
      },
      {
        label: 'Deliverable Formats',
        items: ['Technical Audit Report', 'Architecture Decision Records', 'Risk Register', 'Vendor Comparison Matrix', 'Technology Roadmap'],
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Discovery & Stakeholder Interviews',
        description: 'Meetings with engineering leads, product managers, and operations teams to understand current challenges, growth plans, and technical constraints.',
      },
      {
        step: 2,
        title: 'Deep Codebase & Infrastructure Review',
        description: 'Hands-on review of repository, CI/CD pipelines, cloud architecture, database design, and security configurations.',
      },
      {
        step: 3,
        title: 'Analysis & Recommendations Report',
        description: 'Prioritized findings document with risk ratings, specific remediation steps, estimated effort, and recommended technology choices.',
      },
      {
        step: 4,
        title: 'Roadmap & Implementation Support',
        description: 'Optional: we execute the highest-priority recommendations ourselves or support your team with detailed technical specifications and pairing sessions.',
      },
    ],
    deliverables: [
      'Executive-level technical audit report with risk-rated findings',
      'Recommended target architecture blueprint and migration path',
      'Technology stack comparison matrix with pros/cons',
      'Security remediation checklist aligned with OWASP standards',
      'Cloud cost optimization plan with immediate savings levers',
      '12-month actionable technology roadmap and hiring blueprint',
    ],
    faqs: [
      {
        question: 'Who benefits most from technology consulting?',
        answer: 'Startups approaching Series A/B (needing enterprise-grade architecture), companies with legacy systems blocking growth, businesses concerned about security compliance, and teams evaluating major technology migrations.',
      },
      {
        question: 'How long does a typical audit take?',
        answer: 'A focused code and architecture audit takes 1–2 weeks. A comprehensive security + cloud + architecture review for a large platform typically takes 3–4 weeks including the report and recommendations session.',
      },
      {
        question: 'Do you help implement the recommendations?',
        answer: 'Yes. Many clients engage us to implement the highest-priority findings directly after the audit. We can also provide specifications for your internal team or work alongside them as embedded engineers.',
      },
    ],
  },
  {
    id: 'mobile-development',
    name: 'Mobile App Development (iOS & Android)',
    description:
      'High-performance native iOS, Android, Flutter, and React Native mobile applications engineered with 60 FPS fluidity, offline-first sync, and App Store readiness.',
    icon: Smartphone,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    href: '/services/mobile-development',
    badge: '60 FPS & Offline-First',
    tagline: 'Native iOS & Android apps and cross-platform Flutter/React Native solutions.',
    slaMetric: '60 FPS Fluidity & Offline Data Sync',
    turnaround: '4–8 Weeks App Launch',
    keyCapabilities: [
      {
        title: 'React Native & Flutter Cross-Platform',
        desc: 'Unified single-codebase apps with native performance and platform-specific HIG / Material UI adaptations.',
      },
      {
        title: 'SwiftUI & Jetpack Compose Native',
        desc: 'Hardware-accelerated native iOS and Android engineering for mission-critical and sensor-heavy use cases.',
      },
      {
        title: 'Offline-First SQLite & Realm',
        desc: 'Background sync queues allowing continuous uninterrupted usage without active cellular or Wi-Fi connection.',
      },
      {
        title: 'App Store & Play Store Handover',
        desc: 'Full release management, developer certificate signing, screenshot assets, and compliance review pass.',
      },
    ],
    highlights: [
      'Native Swift (iOS) & Kotlin (Android) Development',
      'React Native & Flutter Cross-Platform Architecture',
      'Offline-First Local SQLite & Realm Sync Engine',
      '60 FPS Smooth Gestures & Fluid Animations',
      'In-App Subscriptions (Stripe / RevenueCat)',
      'Complete App Store & Google Play Store Submission',
    ],
    category: 'Development',
    techStack: [
      {
        label: 'Cross-Platform',
        items: ['React Native', 'Flutter', 'Expo', 'Capacitor', 'Ionic'],
      },
      {
        label: 'Native Platforms',
        items: ['Swift (iOS)', 'SwiftUI', 'Kotlin (Android)', 'Jetpack Compose', 'Xcode / Android Studio'],
      },
      {
        label: 'Backend & Sync',
        items: ['Firebase', 'Supabase', 'Realm (Atlas)', 'SQLite', 'WatermelonDB', 'AWS Amplify'],
      },
      {
        label: 'Payments & Analytics',
        items: ['Stripe Mobile SDK', 'Razorpay', 'RevenueCat', 'Firebase Analytics', 'Mixpanel', 'Segment'],
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'UX Research & Wireframing',
        description: 'User flow mapping, Figma wireframes, prototype testing on real devices, and platform-specific UX guideline review (HIG + Material Design).',
      },
      {
        step: 2,
        title: 'Core App Development',
        description: 'Navigation architecture, state management, API integration, offline sync engine, and push notification infrastructure.',
      },
      {
        step: 3,
        title: 'QA & Performance Testing',
        description: 'Device matrix testing (iOS 16+, Android 12+), memory profiling, battery usage analysis, and accessibility audit.',
      },
      {
        step: 4,
        title: 'App Store Submission & Launch',
        description: 'App Store and Play Store submissions including metadata, screenshots, privacy policies, and review process management.',
      },
    ],
    deliverables: [
      'Native or cross-platform mobile application source code (100% ownership)',
      'Figma design files with platform-specific component library',
      'Configured App Store and Google Play Store listings and certificates',
      'Push notification infrastructure (FCM / APNs) setup',
      'CI/CD pipeline for Over-The-Air (OTA) updates and TestFlight distribution',
      'Device compatibility test report across iOS and Android matrix',
    ],
    faqs: [
      {
        question: 'Flutter or React Native — which do you recommend?',
        answer: 'Flutter offers superior UI consistency and 60 FPS performance for custom interfaces. React Native is better for teams already using React/JavaScript and for apps requiring extensive native module access. We assess your team\'s existing skills and UI requirements to recommend the best choice.',
      },
      {
        question: 'Do you build offline-first mobile apps?',
        answer: 'Yes. We implement offline-first architectures using WatermelonDB, SQLite, or Realm with background sync queues so users can work without internet and data syncs automatically when connectivity returns.',
      },
      {
        question: 'Can you publish to both App Store and Play Store?',
        answer: 'Yes. We handle the full submission process including Apple Developer and Google Play Console setup, app signing, review submission, and compliance with both stores\' guidelines.',
      },
    ],
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX & Product Design Systems',
    description:
      'Pixel-perfect design systems, interactive Figma prototypes, OKLCH color scales, and high-converting user interfaces built for modern digital products and luxury editorial web experiences.',
    icon: Palette,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    href: '/services/ui-ux-design',
    badge: 'Design System & WCAG AA',
    tagline: 'Editorial luxury user interfaces, Figma design tokens, and high-converting product UX.',
    slaMetric: 'WCAG 2.1 AA & Sub-10ms Feedback',
    turnaround: '2–4 Weeks System Build',
    keyCapabilities: [
      {
        title: 'Figma Tokenized Design Systems',
        desc: 'Component libraries with auto-layout, OKLCH variables, typography scales, and seamless Dev Mode specifications.',
      },
      {
        title: 'Interactive Prototypes & Motion',
        desc: 'Framer Motion micro-animations, clickable realistic flows, and user testing feedback loops.',
      },
      {
        title: 'User Research & Conversion UX',
        desc: 'Heatmap analysis, friction point elimination, checkout funnel optimization, and information architecture mapping.',
      },
      {
        title: 'WCAG 2.1 AA Accessibility',
        desc: 'Contrast audits, keyboard navigation flows, and screen-reader accessibility baseline across all UI components.',
      },
    ],
    highlights: [
      'Interactive Figma Prototypes & Dev Mode Specs',
      'Scalable Design Systems & OKLCH Design Tokens',
      'WCAG 2.1 AA Accessibility Compliance Guaranteed',
      'Conversion Rate & Funnel Optimization Research',
      'Framer Motion Micro-Interaction Blueprints',
      'Dark / Light Mode Semantic Token Variables',
    ],
    category: 'Design',
    techStack: [
      {
        label: 'Design Tools',
        items: ['Figma', 'FigJam', 'Framer', 'Principle', 'Lottie Animations', 'Spline 3D'],
      },
      {
        label: 'Research & Testing',
        items: ['Hotjar', 'Maze', 'Lookback.io', 'UserTesting', 'Google Analytics 4', 'A/B Testing'],
      },
      {
        label: 'Design Systems',
        items: ['Token Studio', 'Style Dictionary', 'Storybook', 'Chromatic', 'OKLCH Color System'],
      },
      {
        label: 'Handoff & Implementation',
        items: ['Figma Dev Mode', 'Zeplin', 'CSS Variables', 'Tailwind Design Tokens', 'shadcn/ui'],
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Discovery & Research',
        description: 'Competitor analysis, user interview synthesis, persona development, and journey map creation to ground design in real user needs.',
      },
      {
        step: 2,
        title: 'Wireframes & Information Architecture',
        description: 'Low-fidelity wireframes, navigation structure, content hierarchy, and interactive prototype for early user testing.',
      },
      {
        step: 3,
        title: 'Visual Design & Design System',
        description: 'Brand-aligned high-fidelity screens, OKLCH color palette, typography scale, spacing system, and fully documented component library.',
      },
      {
        step: 4,
        title: 'Prototype Testing & Dev Handoff',
        description: 'Interactive prototype tested with real users, feedback iterations, and pixel-perfect Figma handoff with auto-layout, variables, and developer specs.',
      },
    ],
    deliverables: [
      'Figma design files with auto-layout components and variables',
      'Interactive high-fidelity clickable prototype for usability testing',
      'Comprehensive design system with semantic design tokens',
      'User research insights report and customer journey maps',
      'Accessibility audit report (WCAG 2.1 AA compliance pass)',
      'Developer handoff documentation with spacing & typography guides',
    ],
    faqs: [
      {
        question: 'Do you design for both web and mobile?',
        answer: 'Yes. We design adaptive experiences across desktop, tablet, and mobile breakpoints, and create platform-specific variants for iOS (HIG) and Android (Material You) when needed.',
      },
      {
        question: 'Can you redesign an existing product?',
        answer: 'Yes. We conduct UX audits of existing products, identify friction points and conversion blockers, and produce a redesign that improves metrics while preserving user familiarity.',
      },
      {
        question: 'Do you implement the designs in code?',
        answer: 'Yes. Our design team works alongside engineers and we offer implementation as an extension of design engagements — ensuring the live product matches the Figma designs pixel-perfectly.',
      },
    ],
  },
]

export const SERVICE_CATEGORIES = [
  'All',
  'AI',
  'Development',
  'Enterprise',
  'Infrastructure',
  'Automation',
  'Strategy',
  'Design',
] as const
