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
      'Cognitive Search & Retrieval (RAG)',
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
      'Production-ready LLM application with full source code',
      'RAG pipeline with vector database configured for your data',
      'Agent workflow scripts with evaluation test suite',
      'API documentation & integration guides',
      'Cost & performance monitoring dashboard',
      'Runbook for model updates and dataset refreshes',
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
      'Full Next.js / React application with TypeScript',
      'Responsive design across mobile, tablet, and desktop',
      'Core Web Vitals scores in green (90+ Lighthouse)',
      'CI/CD pipeline with preview deployments',
      'Component documentation in Storybook',
      'SEO metadata, sitemap, and schema markup',
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
    name: 'Custom Software Development',
    description:
      'Tailored software solutions precisely engineered to match your business processes, target goals, and technical requirements.',
    icon: LayoutGrid,
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    href: '/services/custom-software',
    highlights: [
      'SaaS Product Development',
      'ERP & CRM Systems',
      'Multi-tenant Architecture',
      'Source Code Ownership & Documentation',
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
      '100% source code ownership transferred on delivery',
      'Complete database schema & migration scripts',
      'REST / GraphQL API with OpenAPI documentation',
      'Admin panel for business operations',
      'Automated test suite (unit, integration, e2e)',
      'Architecture decision record (ADR) & developer runbook',
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
      'We eliminate manual overhead by scripting automated workflows, integrating APIs, and building custom dashboard triggers.',
    icon: Bot,
    color: 'text-lime-400',
    bgColor: 'bg-lime-500/10',
    href: '/services/workflow-automation',
    highlights: [
      'No-code / Low-code Automations',
      'Business API Integrations',
      'Custom Webhook Triggers',
      'Internal Admin Dashboards',
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
      'Automation scripts or n8n/Make workflow files',
      'API integration documentation',
      'Error alerting with Slack/email notifications',
      'Execution logs and audit trail',
      'Admin dashboard for monitoring run history',
      'Handover guide for internal team management',
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
    name: 'Enterprise Web Platforms',
    description:
      'Robust enterprise software architectures that consolidate complex databases, simplify operations, and modernise legacy systems.',
    icon: Cloud,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    href: '/services/enterprise-platforms',
    highlights: [
      'Technical Architecture Planning',
      'Monolith Migrations & API Gateways',
      'Scale-ready Database Clustering',
      'Secure Internal Corporate Portals',
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
      'Target architecture design document',
      'Microservices or modular monolith codebase',
      'API gateway configuration with rate limiting & auth',
      'Event bus setup with schema registry',
      'Security hardening report & compliance checklist',
      'Operations runbook & incident response playbook',
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
      'We build clean, rapid, and fully documented RESTful and GraphQL APIs that connect internal services and provide reliable endpoints.',
    icon: Zap,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    href: '/services/api-development',
    highlights: [
      'Node.js & Python FastAPI',
      'REST & GraphQL APIs',
      'OpenAPI Documentation',
      'API Gateway Security & Rate Limiting',
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
      'Production REST or GraphQL API codebase',
      'OpenAPI 3.1 specification document',
      'Postman collection with environment configs',
      'API gateway configuration with auth & rate limiting',
      'Unit and integration test suite',
      'SDK or code snippets for client integration',
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
    name: 'Database Design & Systems',
    description:
      'We optimize and configure database platforms to ensure rapid query results, data security, and long-term durability.',
    icon: Server,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    href: '/services/database-systems',
    highlights: [
      'PostgreSQL & MySQL Optimization',
      'Query Performance Tuning',
      'Read Replicas & Clustering',
      'Secure Backups & Disaster Recovery',
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
      'Database audit report with optimization recommendations',
      'Optimized schema with migration scripts',
      'Index strategy documentation',
      'Replication & connection pooling configuration',
      'Automated backup & restore runbook',
      'Query performance baseline & monitoring dashboard',
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
      'End-to-end cloud infrastructure engineering, container orchestration, and CI/CD pipelines across AWS, GCP, and Azure — built to scale reliably and deploy with zero downtime.',
    icon: GitBranch,
    color: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
    href: '/services/devops-cloud',
    highlights: [
      'AWS, GCP & Azure Infrastructure',
      'Kubernetes & Container Orchestration',
      'Terraform Infrastructure as Code',
      'CI/CD Pipelines & Zero-Downtime Deploys',
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
      'Kubernetes manifests or Helm charts',
      'Cloudflare CDN, WAF & DNS configuration',
      'Monitoring dashboards with alert thresholds',
      'Runbook for scaling, failover, and incident response',
      'Cost optimization report with right-sizing recommendations',
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
    name: 'Technology Consulting',
    description:
      'We partner with startup founders and business leaders to review code systems, select modern stacks, and evaluate security risk.',
    icon: Lightbulb,
    color: 'text-sky-400',
    bgColor: 'bg-sky-500/10',
    href: '/services/technology-consulting',
    highlights: [
      'Technology Stack Audits',
      'System Design Reviews',
      'Security-by-Design Guidelines',
      'Build vs. Buy Analysis',
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
      'Technical audit report with risk-rated findings',
      'Recommended target architecture diagram',
      'Technology stack comparison matrix',
      'Security remediation checklist',
      'Cloud cost optimization plan',
      '12-month technology roadmap',
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
    name: 'Mobile App Development',
    description:
      'High-performance native iOS, Android, Flutter, and React Native mobile applications engineered with 60 FPS fluidity and offline-first capabilities.',
    icon: Globe,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    href: '/services/mobile-development',
    highlights: [
      'iOS & Android Native Development',
      'React Native & Flutter Cross-Platform',
      'Offline-First Architecture',
      'App Store & Play Store Publishing',
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
      'Native or cross-platform mobile application source code',
      'Figma design files with component library',
      'App Store and Play Store listings (fully configured)',
      'Push notification infrastructure',
      'CI/CD pipeline for OTA updates (Expo) or TestFlight/Firebase',
      'Device compatibility test report',
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
    name: 'UI/UX & Product Design',
    description:
      'Pixel-perfect design systems, interactive Figma prototypes, and high-converting user interfaces built for modern digital products.',
    icon: Palette,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    href: '/services/ui-ux-design',
    highlights: [
      'Interactive Figma Prototypes',
      'Design Systems & Component Libraries',
      'User Research & Journey Mapping',
      'Conversion Rate Optimization',
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
      'Figma design file with auto-layout components',
      'Interactive high-fidelity prototype',
      'Design system with tokens (color, type, spacing)',
      'User research report and journey maps',
      'Accessibility audit (WCAG 2.1 AA)',
      'Developer handoff documentation',
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
  'Development',
  'AI',
  'Enterprise',
  'Infrastructure',
  'Automation',
  'Strategy',
  'Design',
] as const
