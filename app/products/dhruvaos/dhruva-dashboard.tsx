'use client'

import { useState } from 'react'
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  FileText,
  Wallet,
  CreditCard,
  UserCog,
  MessageSquare,
  BarChart3,
  Bell,
  Settings,
  Star,
  TrendingUp,
  TrendingDown,
  ChevronLeft,
  ArrowRight,
  UserPlus,
  BookOpen,
  Clock,
} from 'lucide-react'

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Users, label: 'Students', badge: null },
  { icon: CalendarCheck, label: 'Attendance', badge: null },
  { icon: FileText, label: 'Examination', badge: null },
  { icon: Wallet, label: 'Accounts', badge: null },
  { icon: CreditCard, label: 'Payroll', badge: null },
  { icon: UserCog, label: 'HR', badge: null },
  { icon: MessageSquare, label: 'Communication', badge: 2 },
  { icon: BarChart3, label: 'Reports', badge: null },
]

const STAT_CARDS = [
  { label: 'TOTAL STUDENTS', value: '1,248', change: '+12%', positive: true, icon: '👥', iconBg: 'bg-blue-500' },
  { label: 'ACTIVE STAFF', value: '86', change: '+2', positive: true, icon: '🎓', iconBg: 'bg-green-500' },
  { label: 'PRESENT TODAY', value: '1,102', change: '+4%', positive: true, icon: '📅', iconBg: 'bg-amber-500' },
  { label: 'FEES COLLECTED', value: '₹4.2L', change: '-8%', positive: false, icon: '💳', iconBg: 'bg-rose-500' },
]

const RECENT_ACTIVITY = [
  {
    icon: UserPlus,
    iconBg: 'bg-blue-500/20 text-blue-400',
    title: 'New Student Admission',
    desc: 'Jane Doe admitted to Class 10-B, Roll No. 42',
    time: '8 min ago',
    status: 'COMPLETED',
    statusColor: 'bg-emerald-500/20 text-emerald-400',
  },
  {
    icon: CreditCard,
    iconBg: 'bg-amber-500/20 text-amber-400',
    title: 'Payroll Generation Initialized',
    desc: 'July 2026 salaries for 86 staff members',
    time: '2h ago',
    status: 'IN PROGRESS',
    statusColor: 'bg-amber-500/20 text-amber-400',
  },
  {
    icon: CalendarCheck,
    iconBg: 'bg-emerald-500/20 text-emerald-400',
    title: 'Attendance Report Generated',
    desc: 'Daily attendance for all 1,248 students',
    time: '3h ago',
    status: 'COMPLETED',
    statusColor: 'bg-emerald-500/20 text-emerald-400',
  },
]

const QUICK_ACTIONS = [
  { icon: UserPlus, label: 'Add New Student', desc: 'Register a new student' },
  { icon: CreditCard, label: 'Collect Fee', desc: 'Record fee payment' },
  { icon: BookOpen, label: 'Create Exam', desc: 'Schedule examination' },
  { icon: Clock, label: 'Mark Attendance', desc: 'Daily attendance entry' },
]

export function DhruvaDashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const today = new Date()
  const dateStr = today.toLocaleDateString('en-US', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  }).toUpperCase()
  const hour = today.getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'

  return (
    <div className="flex h-[520px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] text-white text-xs font-sans shadow-2xl">

      {/* Sidebar */}
      <aside className={`flex flex-col border-r border-white/10 bg-[#0f1923] transition-all duration-300 ${sidebarCollapsed ? 'w-14' : 'w-44'}`}>
        <div className="flex items-center gap-2.5 px-3.5 py-4 border-b border-white/10">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 font-bold text-white text-sm shadow-lg">
            <Star className="h-4 w-4" />
          </div>
          {!sidebarCollapsed && (
            <div className="leading-tight">
              <div className="font-bold text-sm text-white">Dhruva<span className="text-blue-400">OS</span></div>
              <div className="text-[9px] font-semibold tracking-widest text-blue-400 uppercase">School ERP</div>
            </div>
          )}
        </div>
        {!sidebarCollapsed && (
          <div className="px-3.5 pt-4 pb-1.5 text-[9px] font-bold tracking-widest text-white/30 uppercase">Navigation</div>
        )}
        <nav className="flex-1 px-2 space-y-0.5 py-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <button key={item.label} className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 transition-colors ${item.active ? 'bg-blue-600 text-white' : 'text-white/50 hover:bg-white/5 hover:text-white'}`}>
                <Icon className="h-3.5 w-3.5 shrink-0" />
                {!sidebarCollapsed && <span className="text-[11px] font-medium truncate">{item.label}</span>}
                {!sidebarCollapsed && item.badge && (
                  <span className="ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[9px] font-bold text-white">{item.badge}</span>
                )}
              </button>
            )
          })}
        </nav>
        <div className="border-t border-white/10 p-2.5 flex items-center gap-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-[10px] font-bold">MA</div>
          {!sidebarCollapsed && (
            <div className="min-w-0">
              <div className="text-[10px] font-semibold truncate">Mock Admin User</div>
              <div className="text-[9px] text-blue-400 font-bold uppercase tracking-wider">Admin</div>
            </div>
          )}
        </div>
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex items-center justify-between border-b border-white/10 bg-[#0d1117] px-5 py-3">
          <div className="flex items-center gap-2">
            <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="rounded-lg p-1 text-white/40 hover:bg-white/5 hover:text-white transition-colors">
              <ChevronLeft className={`h-4 w-4 transition-transform ${sidebarCollapsed ? 'rotate-180' : ''}`} />
            </button>
            <span className="text-sm font-semibold text-white">Dashboard</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-lg p-1.5 text-white/40 hover:bg-white/5 transition-colors"><Settings className="h-4 w-4" /></button>
            <div className="relative">
              <button className="rounded-lg p-1.5 text-white/40 hover:bg-white/5 transition-colors"><Bell className="h-4 w-4" /></button>
              <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-rose-500" />
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-2.5 py-1.5">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-[9px] font-bold">MA</div>
              <span className="text-[11px] font-medium text-white/80">Mock Admin User</span>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0d1117]">
          {/* Welcome */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#0f2044] via-[#0d1a3a] to-[#0f1923] border border-blue-500/20 p-5">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent pointer-events-none" />
            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-[10px] font-bold tracking-widest text-blue-400 uppercase mb-1">{dateStr}</p>
                <h2 className="text-xl font-extrabold text-white mb-1">{greeting}, Mock Admin User 👋</h2>
                <p className="text-xs text-white/50">Here&apos;s what&apos;s happening at your school today.</p>
              </div>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-xl shadow-blue-500/30">
                <Star className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-3">
            {STAT_CARDS.map((card) => (
              <div key={card.label} className="rounded-xl border border-white/10 bg-[#141c27] p-3.5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-xl ${card.iconBg} text-base shadow-lg`}>{card.icon}</div>
                  <span className={`flex items-center gap-0.5 text-[10px] font-bold ${card.positive ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {card.positive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                    {card.change}
                  </span>
                </div>
                <div>
                  <div className="text-[8px] font-bold tracking-widest text-white/40 uppercase mb-0.5">{card.label}</div>
                  <div className="text-lg font-extrabold text-white">{card.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Activity + Quick Actions */}
          <div className="grid grid-cols-5 gap-3">
            <div className="col-span-3 rounded-xl border border-white/10 bg-[#141c27] p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-xs font-bold text-white">Recent Activity</h3>
                  <p className="text-[9px] text-white/40">Latest system events and actions</p>
                </div>
                <button className="flex items-center gap-1 text-[10px] text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                  View All <ArrowRight className="h-3 w-3" />
                </button>
              </div>
              <div className="space-y-2.5">
                {RECENT_ACTIVITY.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex items-start gap-2.5 pb-2.5 border-b border-white/5 last:border-0 last:pb-0">
                      <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${item.iconBg}`}><Icon className="h-3.5 w-3.5" /></div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-[11px] font-semibold text-white truncate">{item.title}</p>
                          <span className="text-[9px] text-white/30 shrink-0">{item.time}</span>
                        </div>
                        <p className="text-[9px] text-white/40 truncate">{item.desc}</p>
                      </div>
                      <span className={`shrink-0 rounded-md px-1.5 py-0.5 text-[8px] font-bold ${item.statusColor}`}>{item.status}</span>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="col-span-2 rounded-xl border border-white/10 bg-[#141c27] p-4">
              <div className="mb-3">
                <h3 className="text-xs font-bold text-white">Quick Actions</h3>
                <p className="text-[9px] text-white/40">Frequently used shortcuts</p>
              </div>
              <div className="space-y-2">
                {QUICK_ACTIONS.map((action, i) => {
                  const Icon = action.icon
                  return (
                    <button key={i} className="flex w-full items-center gap-2.5 rounded-lg border border-white/5 bg-white/3 p-2.5 hover:bg-white/8 hover:border-blue-500/30 transition-all text-left group">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400 group-hover:bg-blue-600/30 transition-colors"><Icon className="h-3.5 w-3.5" /></div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-semibold text-white truncate">{action.label}</p>
                        <p className="text-[8px] text-white/35 truncate">{action.desc}</p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
