'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  UserCheck,
  Users,
  CheckCircle2,
  CreditCard,
  FileSpreadsheet,
  ClipboardList,
  Award,
  FileText,
  Smartphone,
  Sliders,
  Laptop,
  MapPin,
  School,
  Library,
  Box,
  Send,
  Globe,
  BookOpen,
  Activity,
  Lock,
  Workflow,
  ArrowRight,
  ShieldCheck,
  Calendar,
  DollarSign
} from 'lucide-react'
import { cn } from '@/lib/utils'

/* ─────────────────────────────────────────────────────────────────────────────
   1. CATEGORIZED CORE FEATURE DIRECTORY (REPLACES 24-CARD WALL)
   ───────────────────────────────────────────────────────────────────────────── */

interface FeatureItem {
  label: string
  icon: React.ElementType
  desc: string
  tag: string
}

interface FeatureCategory {
  id: string
  name: string
  subtitle: string
  features: FeatureItem[]
}

const FEATURE_CATEGORIES: FeatureCategory[] = [
  {
    id: 'admin-governance',
    name: 'Administration & Governance',
    subtitle: 'End-to-end student lifecycle, official registries, and fiscal accounting.',
    features: [
      { label: 'Admissions Pipeline', icon: UserCheck, desc: 'Lead tracking, online applications, entrance test rankings, and automated seat allocation.', tag: 'Enrollment' },
      { label: '360° Student Information', icon: Users, desc: 'Unified student dossiers covering family records, medical logs, academic history, and billing.', tag: 'Registry' },
      { label: 'Dynamic Fee Ledgers', icon: CreditCard, desc: 'Multi-term fee structures, online gateway sync, concession slabs, and automated receipts.', tag: 'Finance' },
      { label: 'Staff HR & Payroll', icon: Users, desc: 'Biometric punch-ins, leave quotas, salary slips, and statutory compliance management.', tag: 'Human Resources' },
      { label: 'Asset & Inventory Control', icon: Box, desc: 'Departmental asset registers, consumable stocks, procurement requests, and vendor records.', tag: 'Operations' },
      { label: 'Official Certificate Engine', icon: Award, desc: 'Digital generation and tamper-proof verification of Transfer, Character, and Degree certificates.', tag: 'Compliance' },
    ],
  },
  {
    id: 'academics-lms',
    name: 'Academics & Instruction',
    subtitle: 'Classroom curriculum, grading policies, and continuous assessment systems.',
    features: [
      { label: 'Smart Attendance Registers', icon: CheckCircle2, desc: 'Period-wise roll calls, biometric/RFID gate sync, and automated instant parent SMS/WhatsApp alerts.', tag: 'Daily Ops' },
      { label: 'Digital Homework Desk', icon: FileSpreadsheet, desc: 'Teacher task broadcasting, student upload gates, plagiarism checks, and submission logs.', tag: 'Classroom' },
      { label: 'Assignment & Project Lab', icon: ClipboardList, desc: 'Multi-format file attachments, rubric-based grading, and peer-review workflows.', tag: 'Instruction' },
      { label: 'Examination Management', icon: Award, desc: 'Seating arrangements, dynamic admit cards, multi-examiner marks entry, and moderation rules.', tag: 'Evaluation' },
      { label: 'Dynamic Report Cards', icon: FileText, desc: 'Customizable CBSE, ICSE, IB, and State board marksheets with AI-assisted constructive remarks.', tag: 'Assessment' },
      { label: 'Integrated Learning (LMS)', icon: BookOpen, desc: 'Subject lesson banks, structured video lecture repositories, and interactive quiz modules.', tag: 'E-Learning' },
    ],
  },
  {
    id: 'portals-ecosystem',
    name: 'Stakeholder Portals & Apps',
    subtitle: 'Dedicated responsive clients ensuring seamless multi-device access.',
    features: [
      { label: 'Native Parent App', icon: Smartphone, desc: 'Tuition fees in two taps, live bus GPS feeds, attendance streaks, and direct teacher messaging.', tag: 'iOS & Android' },
      { label: 'Autonomous Teacher Suite', icon: Sliders, desc: 'Consolidated educator console for quick attendance, lesson plan drafting, and gradebooks.', tag: 'Web & Tablet' },
      { label: 'Student Workspace Portal', icon: Laptop, desc: 'Personalized timetable schedules, assignment desks, exam results, and study file vaults.', tag: 'Desktop & Web' },
      { label: 'Official Website CMS', icon: Globe, desc: 'No-code institutional website builder with dynamic news circulars and event galleries.', tag: 'Public Web' },
      { label: 'Omnichannel Communication', icon: Send, desc: 'Integrated WhatsApp API, broadcast SMS, urgent voice calls, and push notification feeds.', tag: 'Messaging' },
      { label: 'Predictive Analytics Hub', icon: Activity, desc: 'Campus health scores, admission velocity metrics, fee recovery rates, and dropout alerts.', tag: 'Executive BI' },
    ],
  },
  {
    id: 'campus-logistics',
    name: 'Campus Logistics & Facilities',
    subtitle: 'Physical infrastructure management, transport safety, and automated workflows.',
    features: [
      { label: 'Fleet Transport & GPS', icon: MapPin, desc: 'Live bus telemetry, driver roster management, geofenced stoppage alerts, and safety logs.', tag: 'Safety' },
      { label: 'Hostel & Residential Life', icon: School, desc: 'Room allocation matrices, warden visitor registries, mess billing, and night roll calls.', tag: 'Residential' },
      { label: 'Digital Library System', icon: Library, desc: 'Barcode book cataloging, circulation checkout tracking, and auto-calculated late fines.', tag: 'Resources' },
      { label: 'Document Cloud Vault', icon: Lock, desc: 'Encrypted document archive for student IDs, transfer certificates, and verification dossiers.', tag: 'Security' },
      { label: 'Automated Event Workflows', icon: Workflow, desc: 'Custom triggers for student promotion rules, fee overdue penalties, and scheduled backups.', tag: 'Automation' },
      { label: 'Alumni Network Portal', icon: Users, desc: 'Graduate directory, donation management, reunion event portals, and career mentoring feeds.', tag: 'Community' },
    ],
  },
]

export function DhruvaOSFeatureDirectory() {
  const [activeTab, setActiveTab] = useState<string>(FEATURE_CATEGORIES[0].id)
  const currentCategory = FEATURE_CATEGORIES.find((c) => c.id === activeTab) ?? FEATURE_CATEGORIES[0]

  return (
    <div className="space-y-6">
      {/* Category Tab Bar */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-muted/40 border border-border/70 max-w-3xl mx-auto">
        {FEATURE_CATEGORIES.map((cat) => {
          const isActive = cat.id === activeTab
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={cn(
                'px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer select-none',
                isActive
                  ? 'bg-card text-foreground font-bold shadow-xs border border-border/80'
                  : 'text-muted-foreground hover:text-foreground hover:bg-card/50'
              )}
            >
              {cat.name}
            </button>
          )
        })}
      </div>

      {/* Category Subtitle */}
      <div className="text-center max-w-xl mx-auto">
        <p className="text-xs sm:text-sm text-muted-foreground">
          {currentCategory.subtitle}
        </p>
      </div>

      {/* Editorial Feature Directory (Clean List — Zero Neon Boxes) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.15 }}
          className="border border-border/70 rounded-2xl bg-card/60 divide-y divide-border/60 overflow-hidden max-w-4xl mx-auto"
        >
          {currentCategory.features.map((feat) => {
            const Icon = feat.icon
            return (
              <div
                key={feat.label}
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-muted/20 transition-colors"
              >
                <div className="flex items-start sm:items-center gap-3.5 min-w-0">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted/50 border border-border/70 text-foreground/80 shrink-0 mt-0.5 sm:mt-0">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-foreground">
                      {feat.label}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                      {feat.desc}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 self-start sm:self-center pl-12 sm:pl-0">
                  <span className="text-[10px] font-mono font-medium text-muted-foreground/80 bg-muted/40 px-2 py-0.5 rounded border border-border/50">
                    {feat.tag}
                  </span>
                </div>
              </div>
            )
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   2. INTERACTIVE ROLE SHOWCASE (REPLACES 9 PERSONA CARDS)
   ───────────────────────────────────────────────────────────────────────────── */

interface RoleData {
  id: string
  role: string
  tagline: string
  description: string
  highlights: string[]
  devices: string
}

const ROLES: RoleData[] = [
  {
    id: 'principals',
    role: 'Principals & Directors',
    tagline: 'Comprehensive institutional oversight & compliance auditing',
    description:
      'Monitor cross-campus operational health, oversee faculty instructional pacing, review board exam forecasts, and generate certified regulatory compliance reports with one click.',
    highlights: [
      'Real-time student & faculty attendance telemetry',
      'Automated board & university accreditation reports',
      'Early warning risk alerts for student dropouts',
      'Institutional financial summary & budget tracking',
    ],
    devices: 'Web Console · iPad & Tablet · Executive Mobile App',
  },
  {
    id: 'management',
    role: 'Trust & Management',
    tagline: 'Multi-campus financial governance & capacity planning',
    description:
      'Gain holistic visibility across multi-branch trusts. Audit consolidated cash-flow streams, evaluate admission pipelines, forecast infrastructure expansion, and inspect department ledgers.',
    highlights: [
      'Consolidated multi-campus treasury balance sheet',
      'Admission conversion funnel & seat occupancy',
      'Vendor procurement & capital expenditure approvals',
      'Branch-by-branch operational performance scoring',
    ],
    devices: 'Executive Web Console · Biometric Security Portal',
  },
  {
    id: 'teachers',
    role: 'Teachers & Faculty',
    tagline: 'Reclaim 10+ weekly instruction hours with AI automation',
    description:
      'Eliminate manual clerical paperwork. Roll call attendance syncs in 10 seconds, AI lesson planners generate national standard curricula, and dynamic question generators compile custom exams instantly.',
    highlights: [
      'One-tap mobile roll call with parent notification',
      'AI curriculum & lesson plan drafting in seconds',
      'Rubric-based digital assignment & homework grading',
      'Automated constructive report card remarks',
    ],
    devices: 'Educator Web Suite · Teacher Mobile App',
  },
  {
    id: 'parents',
    role: 'Parents & Guardians',
    tagline: 'Stay securely connected to your child’s academic journey',
    description:
      'No more disconnected school diaries. Pay tuition fees in two taps, review daily homework submissions, trace the school bus GPS in real-time, and schedule parent-teacher meetings smoothly.',
    highlights: [
      'Direct fee payment gateway with instant receipts',
      'Live GPS bus tracking with arrival ETA alerts',
      'Daily academic diary, attendance & homework feed',
      'Secure 1-on-1 messaging with subject teachers',
    ],
    devices: 'Native iOS App · Native Android App · Web Portal',
  },
  {
    id: 'students',
    role: 'Students & Learners',
    tagline: 'A focused digital workspace for learning and achievements',
    description:
      'Access structured course materials, submit homework digitally, review upcoming test dates, and explore interactive learning resources in a distraction-free student portal.',
    highlights: [
      'Personalized daily timetable & exam schedules',
      'Digital homework submission with instant feedback',
      'Access to subject syllabus notes & video lectures',
      'Performance analytics & progress milestone tracking',
    ],
    devices: 'Student Web Workspace · Mobile Learning App',
  },
  {
    id: 'accountants',
    role: 'Finance & Accounts',
    tagline: 'Zero-leakage fee collection & automated financial reconciliation',
    description:
      'Manage complex multi-tier fee structures, process offline cash and online UPI payments, automate fine calculations, and export audit-ready financial reports effortlessly.',
    highlights: [
      'Custom fee structures by class, quota, and category',
      'Instant UPI, card, and net banking payment settlement',
      'Automated SMS/WhatsApp reminders for overdue dues',
      'Full GST e-invoicing & tally export integration',
    ],
    devices: 'Finance Web Console · POS Thermal Print Integration',
  },
]

export function DhruvaOSRoleShowcase() {
  const [activeRole, setActiveRole] = useState<string>(ROLES[0].id)
  const current = ROLES.find((r) => r.id === activeRole) ?? ROLES[0]

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Role Pill Switcher */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
        {ROLES.map((r) => {
          const isActive = r.id === activeRole
          return (
            <button
              key={r.id}
              onClick={() => setActiveRole(r.id)}
              className={cn(
                'px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer select-none',
                isActive
                  ? 'bg-primary text-primary-foreground font-bold shadow-xs'
                  : 'bg-muted/50 border border-border/70 text-muted-foreground hover:text-foreground hover:bg-muted'
              )}
            >
              {r.role}
            </button>
          )
        })}
      </div>

      {/* Active Role Showcase Panel (Clean Editorial Layout — Zero Neon Boxes) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeRole}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.15 }}
          className="border border-border/70 rounded-2xl bg-card/60 p-6 sm:p-8 space-y-5"
        >
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-foreground">
                {current.role}
              </h3>
              <span className="text-[11px] font-mono text-muted-foreground bg-muted/50 border border-border/60 px-2.5 py-0.5 rounded-full">
                {current.devices}
              </span>
            </div>
            <p className="text-xs font-mono text-primary font-semibold">
              {current.tagline}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {current.description}
          </p>

          <div className="pt-3 border-t border-border/60">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Key Capabilities &amp; Workflows
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {current.highlights.map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/90 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
