import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import {
  School,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Sliders,
  Users,
  CreditCard,
  UserCheck,
  Smartphone,
  Bot,
  MapPin,
  FileText,
  Check,
  Award,
  Calendar,
  Lock,
  Cpu,
  Globe,
  Share2,
  Layers,
  Key,
  Database,
  Server,
  Cloud,
  HardDrive,
  Zap,
  ArrowRight,
  HelpCircle,
  FileSpreadsheet,
  Activity,
  PhoneCall,
  Clock,
  BookOpen,
  ClipboardList,
  Library,
  Box,
  BadgeAlert,
  Send,
  Workflow,
  Laptop
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'DhruvaOS | AI-Powered Education Operating System (EdOS)',
  description:
    'Digitally transform schools, colleges, universities, and educational trusts with DhruvaOS. The modern, enterprise-grade AI-powered operating system for all administrative, academic, financial, and AI workflows.',
  keywords: [
    'Education Operating System',
    'EdOS',
    'School ERP',
    'College Management Software',
    'University Administration System',
    'AI Education Platform',
    'NeelStack',
    'DhruvaOS'
  ],
  alternates: {
    canonical: 'https://neelstack.com/products/dhruvaos'
  }
}

export default function DhruvaOSPage() {
  
  // 24 Core feature cards
  const coreFeatures = [
    { label: 'Admissions', icon: UserCheck, desc: 'Manage lead pipelines, online registrations, and seat allocations.' },
    { label: 'Student Information', icon: Users, desc: '360-degree profile including academic records, billing, and logs.' },
    { label: 'Attendance', icon: CheckCircle2, desc: 'Automated registers, biometric sync, and parent alerts.' },
    { label: 'Fee Management', icon: CreditCard, desc: 'Custom fee structures, payment collection, and receipts.' },
    { label: 'Homework', icon: FileSpreadsheet, desc: 'Digital homework trackers with student submission gates.' },
    { label: 'Assignments', icon: ClipboardList, desc: 'Online assignment managers supporting file attachments.' },
    { label: 'Examinations', icon: Award, desc: 'Custom test plans, grade divisions, and mark entries.' },
    { label: 'Report Cards', icon: FileText, desc: 'AI-assisted, print-ready, dynamic progress reports.' },
    { label: 'Parent App', icon: Smartphone, desc: 'Mobile console for tuition fees, diaries, and live tracking.' },
    { label: 'Teacher Portal', icon: Sliders, desc: 'Consolidated tools for attendance, lesson plans, and grades.' },
    { label: 'Student Portal', icon: Laptop, desc: 'Structured dashboard for files, timetables, and assignments.' },
    { label: 'Transport', icon: MapPin, desc: 'Vehicle route mapping, driver assignments, and live tracking.' },
    { label: 'Hostel', icon: School, desc: 'Room allocation plans, warden records, and attendance.' },
    { label: 'Library', icon: Library, desc: 'Book catalogs, barcode scanners, and auto-overdue fines.' },
    { label: 'Inventory', icon: Box, desc: 'Asset registers, department stocks, and vendor orders.' },
    { label: 'HR & Payroll', icon: Users, desc: 'Staff lists, attendance check-ins, leaves, and salary slips.' },
    { label: 'Communication', icon: Send, desc: 'Integrated circulars, SMS, WhatsApp, and push updates.' },
    { label: 'Certificates', icon: Award, desc: 'Generate Transfer, Character, and Degree certificates.' },
    { label: 'Website CMS', icon: Globe, desc: 'Administer your official public website domain easily.' },
    { label: 'Learning Management', icon: BookOpen, desc: 'Structured syllabi, file banks, and video lectures.' },
    { label: 'Analytics', icon: Activity, desc: 'Institutional growth metrics, attendance records, and stats.' },
    { label: 'AI Assistant', icon: Bot, desc: 'Integrated AI companion for instant document drafting.' },
    { label: 'Documents', icon: Lock, desc: 'Secure cloud storage for student records and folders.' },
    { label: 'Workflow Automation', icon: Workflow, desc: 'Automate student promotions, fee reminders, and logs.' }
  ]

  // 12 AI modules
  const aiModules = [
    { title: 'AI Homework Generator', desc: 'Auto-compile daily home tasks based on active class lecture summaries.' },
    { title: 'AI Lesson Planner', desc: 'Instantly structure lesson plans matching national curricular guidelines.' },
    { title: 'AI Question Paper Generator', desc: 'Compile custom assessments and exams matching difficulty levels.' },
    { title: 'AI Attendance Insights', desc: 'Spot patterns in absences to identify institutional bottlenecks.' },
    { title: 'AI Student Risk Detection', desc: 'Identify students at academic or enrollment dropout risk early.' },
    { title: 'AI Parent Assistant', desc: 'Auto-translate updates and answer parent queries 24/7.' },
    { title: 'AI Teacher Assistant', desc: 'Automate answer evaluations, grade structures, and card remarks.' },
    { title: 'AI Report Card Generator', desc: 'Draft personalized, constructive remarks based on academic data.' },
    { title: 'AI Circular Generator', desc: 'Generate professional parent notices and circular emails instantly.' },
    { title: 'AI Timetable Generator', desc: 'Solve teacher double-bookings, slots, and availability in seconds.' },
    { title: 'AI Academic Analytics', desc: 'Predict board exam performance and recommend syllabus pace changes.' },
    { title: 'AI Chat Assistant', desc: 'Secure internal chatbot answering student and faculty support tickets.' }
  ]

  // Personas
  const personas = [
    { role: 'Principal', desc: 'Gain 360-degree institutional oversight, generate compliance reports, and oversee faculty analytics.' },
    { role: 'School Management', desc: 'Track cash-flow streams, evaluate admission pipelines, and monitor overall health scores.' },
    { role: 'Teachers', desc: 'Automate attendance roll calls, construct exams, and design lessons with AI support.' },
    { role: 'Students', desc: 'Engage with structured LMS workspaces, submit homework, and track performance scores.' },
    { role: 'Parents', desc: 'Submit fee payments, trace school bus positions, and view daily diaries from native apps.' },
    { role: 'Accountants', desc: 'Set up multi-term fee heads, generate online receipts, and audit collections.' },
    { role: 'Librarians', desc: 'Catalog library books, trace issued stocks, and calculate late fee collections.' },
    { role: 'Transport Managers', desc: 'Configure bus routes, review driver logs, and broadcast route updates.' },
    { role: 'HR & Admin', desc: 'Track faculty punch-ins, calculate leave allocations, and generate monthly payrolls.' }
  ]

  // Deployment options
  const deployments = [
    { model: 'SaaS (Shared Cloud)', desc: 'Hosted on secure shared cloud instances. Zero maintenance, automatic patches, and quick setups. Perfect for growing institutions.', tag: 'Scalable' },
    { model: 'White Label (Custom Domain)', desc: 'Deploy under your private branding, app store identities, and custom domains. Maintain your unique brand value.', tag: 'Branded' },
    { model: 'Dedicated Cloud', desc: 'Isolated private databases and cloud infrastructure allocated specifically to your trust. Enhanced enterprise safety and speed.', tag: 'Enterprise' },
    { model: 'Self Hosted (On-Premises)', desc: 'Deploy inside your own physical campus servers or private clouds. Maintain complete ownership of data assets.', tag: 'Custom' }
  ]

  // Integrations list
  const integrations = [
    { title: 'Payment Gateways', desc: 'Razorpay, Stripe, and UPI transfers.' },
    { title: 'Communication API', desc: 'Twilio WhatsApp, SMS nodes, and Email.' },
    { title: 'Workplace Suites', desc: 'Google Workspace & Microsoft 365 Sync.' },
    { title: 'Hardware Sync', desc: 'Biometric fingerprint & RFID card readers.' },
    { title: 'GPS Tracking', desc: 'Live vehicular location feeds.' },
    { title: 'Developer API', desc: 'Comprehensive REST APIs for databases.' }
  ]

  // FAQ items
  const faqItems = [
    { question: 'Who is DhruvaOS for?', answer: 'DhruvaOS is designed for school owners, directors, principals, college management committees, university boards, and educational trusts who want to centralize their entire academic, financial, and operational tasks inside a single workspace.' },
    { question: 'Can colleges use it?', answer: 'Yes. DhruvaOS has modular structures tailored to college schedules, semester tracking, elective divisions, GPA grading schemes, and department audits.' },
    { question: 'Can universities use it?', answer: 'Absolutely. It supports multi-campus architectures, independent department configurations, comprehensive registry systems, and large-scale trust accounting.' },
    { question: 'Can coaching institutes use it?', answer: 'Yes. Coaching centers and training academies can customize the registration pipelines, batch schedules, test structures, and online LMS features.' },
    { question: 'Can it run on our own server?', answer: 'Yes. Our Self-Hosted model allows you to deploy the entire EdOS on your institution\'s internal servers, ensuring absolute data control.' },
    { question: 'Do you support custom domains?', answer: 'Yes. With our White-Label model, you can map portals to your own domain names (e.g. portal.yourschool.edu) and run native apps under your own developer accounts.' },
    { question: 'Do you provide mobile apps?', answer: 'Yes. We deploy native apps for Parents, Teachers, Students, Administrators, and Drivers on both the Apple App Store and Google Play Store.' },
    { question: 'Can we migrate from our existing ERP?', answer: 'Yes. NeelStack provides end-to-end data migration. Our engineering team securely transfers student directories, billing archives, and grading cards from your legacy software.' },
    { question: 'How secure is our data?', answer: 'We employ bank-grade AES-256 encryption at rest, HTTPS/TLS 1.3 in transit, automated backups, role-based access gates, and isolated databases depending on your cloud model.' }
  ]

  return (
    <MarketingLayout>
      
      {/* ─── Hero Section ────────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-b from-purple-950/20 via-background to-background">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

        <Container className="relative z-10 text-center space-y-12">
          
          {/* Top Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            <span className="text-xs font-semibold text-purple-300">
              India&apos;s Modern AI-Powered EdOS
            </span>
          </div>

          {/* Heading Pitch */}
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground">
              AI-Powered Education <br />
              <span className="bg-gradient-to-r from-purple-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                Operating System
              </span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Digitally transform schools, colleges, universities, and educational institutions with one unified platform for administration, academics, communication, finance, analytics, and AI-powered learning.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20"
            >
              Book Demo
            </Link>
            <Link
              href="/book-consultation"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-border bg-muted/40 hover:bg-muted/60 text-foreground hover:text-white text-sm font-semibold transition-all duration-200"
            >
              Become a Pilot School
            </Link>
          </div>

          {/* Animated Statistics Banner */}
          <div className="max-w-4xl mx-auto grid grid-cols-3 gap-2 sm:gap-4 py-6 border-y border-border/40 bg-card/25 backdrop-blur-sm rounded-2xl px-6">
            <div className="text-center">
              <span className="font-mono text-xl sm:text-2xl font-bold text-foreground">99.9%</span>
              <p className="text-[10px] text-muted-foreground uppercase mt-0.5">Uptime SLA</p>
            </div>
            <div className="text-center border-x border-border/40">
              <span className="font-mono text-xl sm:text-2xl font-bold text-foreground">10x</span>
              <p className="text-[10px] text-muted-foreground uppercase mt-0.5">Workload Velocity</p>
            </div>
            <div className="text-center">
              <span className="font-mono text-xl sm:text-2xl font-bold text-foreground">100%</span>
              <p className="text-[10px] text-muted-foreground uppercase mt-0.5">Data Sovereignty</p>
            </div>
          </div>


        </Container>
      </section>

      {/* ─── Trusted By Section ─────────────────────────────────────────────────── */}
      <Section className="border-y border-border/40 bg-muted/10 py-10">
        <Container>
          <div className="text-center space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Designed for Pilot Partners & Progressive Institutions
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60">
              {['K-12 School Chains', 'Autonomous Colleges', 'Private Universities', 'Educational Trusts', 'Coaching Academies'].map((inst) => (
                <span
                  key={inst}
                  className="font-heading text-sm font-bold tracking-wider text-muted-foreground hover:text-foreground transition-colors cursor-default"
                >
                  {inst}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ─── Orchestrate Your Academy — Grid Section ────────────────────────────── */}
      <Section className="py-20 bg-card/5 border-y border-border/40">
        <Container className="max-w-5xl mx-auto text-center space-y-12">
          
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="inline-flex text-xs font-bold text-purple-400 uppercase tracking-widest bg-purple-500/10 px-3 py-1 rounded-full">
              Admin Console
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
              Orchestrate Your Academy with{' '}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Infrastructure
              </span>{' '}
              for Every Workflow
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              DhruvaOS gives school administrators a unified command center — one place to monitor attendance, manage fees, run payroll, track staff, and view AI-driven institutional health in real time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            {[
              {
                title: 'Live Stats Dashboard',
                desc: 'Real-time indicators across student rosters, active staff, fee collection status, and daily attendance.',
              },
              {
                title: 'One-Click Quick Actions',
                desc: 'Instantly admit students, collect tuition payments, create examinations, or register attendance logs.',
              },
              {
                title: 'Integrated HR & Payroll',
                desc: 'Manage staff roles, track attendance, and trigger monthly payroll generation in a single screen.',
              },
              {
                title: 'Audit-Ready Activity Log',
                desc: 'Chronological, searchable action logs capture all administrative events across departments for full accountability.',
              },
              {
                title: 'Granular Role Controls',
                desc: 'Define custom access gates and dashboard scopes for Admins, Teachers, Accountants, and Directors.',
              },
              {
                title: 'AI-Driven Anomalies',
                desc: 'Smart predictive models automatically highlight dropout patterns, fee default risks, and attendance declines.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card/20 p-5 space-y-2 hover:border-purple-500/20 transition-colors">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-500/15 border border-purple-500/25 text-purple-400">
                    <CheckCircle2 className="h-3 w-3" />
                  </span>
                  <h3 className="text-sm font-heading font-bold text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 text-white text-sm font-semibold transition-all shadow-lg shadow-purple-500/20"
            >
              Book a Live Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </Container>
      </Section>

      {/* ─── Everything Your Institution Needs Grid ────────────────────────────── */}
      <Section className="py-20 bg-card/10">

        <Container className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest bg-purple-500/10 px-3 py-1 rounded-full">
              Unified Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              One Platform. Every Educational Workflow.
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Replace dozens of fragmented, slow utilities with a single, integrated operating system.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {coreFeatures.map((feat) => {
              const IconComp = feat.icon
              return (
                <div
                  key={feat.label}
                  className="rounded-2xl border border-border bg-card/30 p-5 hover:border-purple-500/30 hover:bg-card/60 transition-all duration-300 group"
                >
                  <div className="h-9 w-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform mb-4">
                    <IconComp className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-sm font-heading font-bold text-foreground mb-1">
                    {feat.label}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              )
            })}
          </div>

        </Container>
      </Section>

      {/* ─── AI Everywhere ──────────────────────────────────────────────────────── */}
      <Section className="py-20 bg-muted/10 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[110px] pointer-events-none" />

        <Container className="space-y-12 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest bg-purple-500/10 px-3 py-1 rounded-full flex items-center gap-1.5 w-fit mx-auto">
              <Bot className="h-3.5 w-3.5 text-purple-400 animate-pulse" />
              AI-Native Integrations
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Deep Cognitive Automation
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Instead of an isolated chatbot, DhruvaOS embeds contextual AI tools directly within every operation.
            </p>
          </div>

          {/* AI Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {aiModules.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-purple-500/15 bg-purple-500/2 p-5 hover:border-purple-450 hover:bg-purple-500/5 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 h-10 w-10 bg-purple-500/5 rounded-bl-3xl flex items-center justify-center">
                  <Sparkles className="h-3.5 w-3.5 text-purple-400" />
                </div>
                <h3 className="text-xs font-heading font-bold text-foreground uppercase tracking-wider mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </Container>
      </Section>

      {/* ─── Platform For Everyone (Personas) ────────────────────────────────────── */}
      <Section className="py-20">
        <Container className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              One Interface, Tailored for Everyone
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Different portals connected to the same core ledger, ensuring zero communication lag.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {personas.map((per) => (
              <div
                key={per.role}
                className="rounded-2xl border border-border bg-card/20 p-5 hover:border-purple-500/25 transition-all duration-200"
              >
                <h3 className="text-sm font-heading font-bold text-purple-400 mb-2">
                  For {per.role}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {per.desc}
                </p>
              </div>
            ))}
          </div>

        </Container>
      </Section>

      {/* ─── Connected Lifecycle Chart ───────────────────────────────────────────── */}
      <Section className="py-20 bg-card/15 border-y border-border/40 relative">
        <Container className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Connected Operational Lifecycle
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Watch data flow automatically. No dual-entry, no sync delays.
            </p>
          </div>

          {/* Lifecycle Flowchart */}
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-3 sm:gap-4.5 pt-4">
            {[
              'Admissions',
              'Students',
              'Attendance',
              'Fees',
              'Homework',
              'Exams',
              'Results',
              'Certificates',
              'Alumni'
            ].map((node, idx) => (
              <div key={node} className="flex items-center gap-2.5">
                <div className="px-3.5 py-2.5 rounded-xl border border-purple-500/20 bg-purple-500/5 text-xs font-semibold text-purple-300 hover:border-purple-500/40 transition-colors">
                  {node}
                </div>
                {idx < 8 && (
                  <ArrowRight className="h-4.5 w-4.5 text-muted-foreground/50 shrink-0 hidden sm:block" />
                )}
              </div>
            ))}
          </div>

        </Container>
      </Section>

      {/* ─── Parent & Teacher Specialized Experiences ────────────────────────────── */}
      <Section className="py-20 bg-muted/10 relative">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Parent App Specs */}
          <div className="space-y-6">
            <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Smartphone className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground">
              Unified Parent Experience
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Parents remain active stakeholders. From paying fees in two taps to checking attendance streaks and tracking physical bus location in real-time, our native mobile apps keep families securely informed.
            </p>
            <ul className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
              {['Tuition Gateway', 'Attendance Streak', 'Digital Diary Feed', 'Live GPS Tracking', 'PTM Chats', 'Grade Reports'].map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Teacher Console Specs */}
          <div className="space-y-6">
            <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Sliders className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground">
              Autonomous Teacher Suite
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Empower educators by eliminating administrative overload. With automated roll calls, instant lesson outline structures, and AI question compilation, teachers can reclaim hundreds of instruction hours each term.
            </p>
            <ul className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
              {['AI Lesson Planners', 'Roll Call Registers', 'AI Exam Generators', 'Auto grading remarks', 'Direct PTM Chats', 'Homework Trackers'].map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </Container>
      </Section>

      {/* ─── Deployment Models ───────────────────────────────────────────────────── */}
      <Section className="py-20">
        <Container className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Flexible Deployment Models
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Choose the architectural layout that matches your regulatory, branding and data sovereignty goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {deployments.map((dep) => (
              <div
                key={dep.model}
                className="rounded-2xl border border-border bg-card/25 p-5 flex flex-col justify-between hover:border-purple-500/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className="space-y-3">
                  <span className="text-[9px] uppercase font-bold text-purple-300 bg-purple-500/10 border border-purple-500/15 px-2 py-0.5 rounded-full inline-block">
                    {dep.tag}
                  </span>
                  <h3 className="text-sm font-heading font-bold text-foreground">
                    {dep.model}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {dep.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </Container>
      </Section>

      {/* ─── Mobile Apps Support ─────────────────────────────────────────────────── */}
      <Section className="py-16 bg-muted/10">
        <Container className="space-y-4 text-center max-w-xl mx-auto">
          <div className="space-y-2">
            <h2 className="text-xl font-heading font-bold text-foreground">Unified Mobile App</h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              A single native application on iOS & Android dynamically adaptive to all roles — providing tailored views for Parents, Teachers, Students, and Administrators.
            </p>
          </div>
        </Container>
      </Section>

      {/* ─── Security & Compliance ──────────────────────────────────────────────── */}
      <Section className="py-20">
        <Container className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Enterprise Security Safeguards
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Complying with national regulatory standards, including Section 9 of the DPDP Act 2023.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { title: 'Role-Based Access', desc: 'Granular file rights lock sensitive data columns.', icon: Key },
              { title: 'Full Encryption', desc: 'AES-256 at rest, TLS 1.3 in-transit tunnels.', icon: Lock },
              { title: 'Audit Registries', desc: 'Record every admin edit with system traces.', icon: FileText },
              { title: 'Auto Backups', desc: 'Secure database archives backed up hourly.', icon: Database }
            ].map((item) => {
              const IconComp = item.icon
              return (
                <div key={item.title} className="rounded-2xl border border-border bg-card/10 p-5 space-y-3">
                  <div className="h-9 w-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <IconComp className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-xs font-heading font-bold text-foreground uppercase tracking-wider">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>

        </Container>
      </Section>

      {/* ─── Integrations Panel ──────────────────────────────────────────────────── */}
      <Section className="py-20 bg-muted/10 relative">
        <Container className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Seamless Infrastructure Integrations
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Sync DhruvaOS with your existing software suite and physical hardware grids.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {integrations.map((integ) => (
              <div
                key={integ.title}
                className="rounded-2xl border border-border bg-card/25 p-5 hover:border-purple-500/20 transition-all"
              >
                <h3 className="text-sm font-heading font-bold text-foreground mb-1.5">{integ.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{integ.desc}</p>
              </div>
            ))}
          </div>

        </Container>
      </Section>

      {/* ─── Why DhruvaOS / Pricing ──────────────────────────────────────────────── */}
      <Section className="py-20">
        <Container className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Why Institutional Directors Select DhruvaOS
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Engineering parameters set by NeelStack for enterprise safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Why Card 1 */}
            <div className="rounded-2xl border border-border bg-card/20 p-6 space-y-3">
              <h4 className="text-sm font-heading font-bold text-purple-400">AI Native & Modern</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Rather than retrofitting AI onto decades-old legacy codebases, DhruvaOS is architected from day one to utilize generative LLM structures for lesson structuring, scheduling, and risk evaluations.
              </p>
            </div>

            {/* Why Card 2 */}
            <div className="rounded-2xl border border-border bg-card/20 p-6 space-y-3">
              <h4 className="text-sm font-heading font-bold text-purple-400">API First Ecosystem</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Connect external systems seamlessly. Our REST APIs allow your IT engineers to access database tables and trigger scripts safely, keeping operations open.
              </p>
            </div>

            {/* Why Card 3 (Pricing Hook) */}
            <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[9px] uppercase font-bold text-purple-300 bg-purple-500/10 border border-purple-500/15 px-2.5 py-0.5 rounded-full inline-block">
                  Pricing Models
                </span>
                <h4 className="text-base font-heading font-bold text-foreground">Pilot Partner Rates</h4>
                <p className="text-xs text-purple-300 leading-relaxed">
                  Enterprise Pricing is currently custom-quoted. Reach out to secure early Pilot School rates.
                </p>
              </div>

              <Link
                href="/contact"
                className="w-full text-center py-2.5 rounded-xl bg-purple-500 text-white font-semibold text-xs uppercase tracking-wider hover:bg-purple-650 transition-all shadow"
              >
                Request Custom Quote
              </Link>
            </div>

          </div>

        </Container>
      </Section>

      {/* ─── FAQ Accordion Section ──────────────────────────────────────────────── */}
      <Section className="py-20 bg-muted/10 border-t border-border/40">
        <Container className="max-w-4xl mx-auto space-y-8">
          
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-heading font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Answers to common inquiries regarding deployments, domains and database security.
            </p>
          </div>

          <FAQAccordion items={faqItems} />

        </Container>
      </Section>

      {/* ─── Final CTA ───────────────────────────────────────────────────────────── */}
      <Section className="relative py-24 overflow-hidden bg-gradient-to-t from-purple-950/20 via-background to-background border-t border-border/40">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-cyan-500/2 to-indigo-500/5 pointer-events-none" />
        
        <Container className="relative z-10 text-center space-y-8 max-w-3xl">
          
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground">
            Ready to Digitally Transform <br />
            Your Educational Institution?
          </h2>
          
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Book a product demonstration with our solution engineers or register as an early Pilot School partner today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4.5 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 text-white text-sm font-semibold transition-all shadow-md shadow-purple-500/10"
            >
              Book a Demo
            </Link>
            <Link
              href="/book-consultation"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-border bg-card hover:bg-muted text-foreground text-sm font-semibold transition-all"
            >
              Become a Pilot Partner
            </Link>
            <Link
              href="/contact?subject=DhruvaOS%20Sales"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-muted/40 hover:bg-muted/60 text-muted-foreground hover:text-white text-sm font-semibold transition-all"
            >
              Contact Sales
            </Link>
          </div>

        </Container>
      </Section>

    </MarketingLayout>
  )
}
