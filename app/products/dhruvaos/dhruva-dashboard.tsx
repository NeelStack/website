'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import {
  Bot,
  Calendar,
  Sparkles,
  TrendingUp,
  MessageSquare,
  Send,
  Plus,
  Play,
  Pause,
  RotateCcw,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  BookOpen,
  Award,
  Clock,
  ShieldCheck
} from 'lucide-react'

// Tab definitions
type DashboardTab = 'ai-coach' | 'planner' | 'quiz' | 'analytics'

interface ChatMessage {
  sender: 'user' | 'ai'
  text: string
  timestamp: string
}

interface Course {
  id: string
  name: string
  progress: number
  totalModules: number
  completedModules: number
  modules: { id: string; title: string; completed: boolean }[]
}

export function DhruvaDashboard() {
  const [activeTab, setActiveTab] = useState<DashboardTab>('ai-coach')
  const [ageConsentStatus, setAgeConsentStatus] = useState<'pending' | 'verified'>('pending')
  const [consentCheckbox, setConsentCheckbox] = useState(false)
  const [isOver18, setIsOver18] = useState(false)

  // ─── Tab 1: AI Study Coach State ──────────────────────────────────────────
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      sender: 'ai',
      text: 'Hello! I am your Dhruva AI Study Companion. Choose a prompt below or ask me any question to start learning!',
      timestamp: '10:00 AM'
    }
  ])
  const [chatInput, setChatInput] = useState('')
  const [isAiTyping, setIsAiTyping] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  const samplePrompts = [
    { label: 'Explain Quantum Physics simply', query: 'Explain Quantum Physics simply like I am 5 years old.' },
    { label: 'Summarize French Revolution events', query: 'Summarize the key events of the French Revolution chronologically.' },
    { label: 'Give a mnemonic for the Krebs cycle', query: 'What is a good mnemonic to remember the Krebs cycle steps in biology?' }
  ]

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatMessages, isAiTyping])

  const sendPromptMessage = (queryText: string) => {
    if (isAiTyping) return
    
    const userMsg: ChatMessage = {
      sender: 'user',
      text: queryText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setChatMessages(prev => [...prev, userMsg])
    setIsAiTyping(true)

    // Simulate AI response stream
    setTimeout(() => {
      let responseText = ''
      if (queryText.includes('Quantum Physics')) {
        responseText = 'Quantum physics is the study of the teeny-tiny building blocks of our universe—things even smaller than atoms. Imagine if the rules of the world changed when you shrank down: in the quantum world, particles can be in two places at once, and they can pass through solid walls like ghosts! We call this wave-particle duality and quantum tunneling.'
      } else if (queryText.includes('French Revolution')) {
        responseText = 'The French Revolution (1789–1799) had 3 main phases:\n1. 1789: The Estates-General meets, the Bastille is stormed, and the Declaration of Rights of Man is published.\n2. 1792–1794: The Monarchy falls, leading to the Reign of Terror under Robespierre.\n3. 1795–1799: Stability is sought under the Directory, culminating in Napoleon Bonaparte seizing power in 1799.'
      } else if (queryText.includes('Krebs cycle')) {
        responseText = 'Here is a popular classic Krebs cycle mnemonic: "Citric Acid Is Krebs Starting Substrate For Making Oxaloacetate".\n• Citric (Citrate)\n• Acid (Aconitate)\n• Is (Isocitrate)\n• Krebs (alpha-Ketoglutarate)\n• Starting (Succinyl-CoA)\n• Substrate (Succinate)\n• For (Fumarate)\n• Making (Malate)\n• Oxaloacetate (Oxaloacetate)'
      } else {
        responseText = `That is an excellent academic inquiry! As a demo, I can answer queries about Quantum Physics, the French Revolution, or mnemonic aids. In the full DhruvaOS workspace, I integrate directly with your imported syllabus, class notes, and textbook PDFs to answer queries specifically based on your course files.`
      }

      setChatMessages(prev => [...prev, {
        sender: 'ai',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }])
      setIsAiTyping(false)
    }, 1200)
  }

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault()
    if (!chatInput.trim()) return
    sendPromptMessage(chatInput.trim())
    setChatInput('')
  }

  // ─── Tab 2: Study Planner State ───────────────────────────────────────────
  const [courses, setCourses] = useState<Course[]>([
    {
      id: 'alg',
      name: 'Advanced Algorithms & Data Structures',
      progress: 75,
      totalModules: 4,
      completedModules: 3,
      modules: [
        { id: 'alg-1', title: 'Asymptotic Analysis & Big O notation', completed: true },
        { id: 'alg-2', title: 'Dynamic Programming & Memoization', completed: true },
        { id: 'alg-3', title: 'Graph Algorithms: Dijkstra & A*', completed: true },
        { id: 'alg-4', title: 'NP-Completeness & Approximation', completed: false }
      ]
    },
    {
      id: 'chem',
      name: 'Organic Chemistry II',
      progress: 25,
      totalModules: 4,
      completedModules: 1,
      modules: [
        { id: 'chem-1', title: 'Structure and Properties of Arenes', completed: true },
        { id: 'chem-2', title: 'Electrophilic Aromatic Substitution', completed: false },
        { id: 'chem-3', title: 'Spectroscopic Identification of Isomers', completed: false },
        { id: 'chem-4', title: 'Synthesis and Reactions of Alcohols', completed: false }
      ]
    }
  ])

  const toggleModule = (courseId: string, moduleId: string) => {
    setCourses(prevCourses =>
      prevCourses.map(course => {
        if (course.id !== courseId) return course
        const updatedModules = course.modules.map(mod =>
          mod.id === moduleId ? { ...mod, completed: !mod.completed } : mod
        )
        const completedCount = updatedModules.filter(m => m.completed).length
        const newProgress = Math.round((completedCount / course.totalModules) * 100)
        return {
          ...course,
          modules: updatedModules,
          completedModules: completedCount,
          progress: newProgress
        }
      })
    )
  }

  // Focus Timer Sub-Widget
  const [timeLeft, setTimeLeft] = useState(25 * 60)
  const [timerRunning, setTimerRunning] = useState(false)
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (timerRunning) {
      timerIntervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setTimerRunning(false)
            clearInterval(timerIntervalRef.current!)
            return 25 * 60
          }
          return prev - 1
        })
      }, 1000)
    } else {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current)
    }

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current)
    }
  }, [timerRunning])

  const toggleTimer = () => setTimerRunning(!timerRunning)
  const resetTimer = () => {
    setTimerRunning(false)
    setTimeLeft(25 * 60)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  // ─── Tab 3: Quiz Center State ─────────────────────────────────────────────
  interface QuizQuestion {
    id: number
    question: string
    options: string[]
    correctIndex: number
    explanation: string
  }

  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: 'Which subatomic particles are combined to form a proton?',
      options: [
        'Two Up Quarks and One Down Quark',
        'One Up Quark and Two Down Quarks',
        'Three Down Quarks',
        'Two Leptons and One Neutrino'
      ],
      correctIndex: 0,
      explanation: 'Protons are baryonic composite particles composed of three quarks: two up quarks (charge +2/3 each) and one down quark (charge -1/3), resulting in a total net positive charge of +1.'
    },
    {
      id: 2,
      question: 'In computer science, what is the worst-case time complexity of searching in a Balanced Binary Search Tree (BST) like an AVL tree?',
      options: [
        'O(1)',
        'O(N)',
        'O(log N)',
        'O(N log N)'
      ],
      correctIndex: 2,
      explanation: 'AVL trees are self-balancing BSTs. Due to strict height balancing, operations like search, insertion, and deletion have a guaranteed worst-case time complexity of O(log N).'
    }
  ]

  const [currentQuizIndex, setCurrentQuizIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [quizSubmitted, setQuizSubmitted] = useState(false)

  const handleSelectOption = (index: number) => {
    if (quizSubmitted) return
    setSelectedAnswer(index)
  }

  const handleQuizSubmit = () => {
    if (selectedAnswer === null) return
    setQuizSubmitted(true)
  }

  const handleNextQuiz = () => {
    setSelectedAnswer(null)
    setQuizSubmitted(false)
    setCurrentQuizIndex(prev => (prev + 1) % quizQuestions.length)
  }

  // ─── Tab 4: Analytics State ───────────────────────────────────────────────
  const mockWeeklyStats = [
    { day: 'Mon', hours: 4.5 },
    { day: 'Tue', hours: 6.2 },
    { day: 'Wed', hours: 3.8 },
    { day: 'Thu', hours: 7.0 },
    { day: 'Fri', hours: 5.1 },
    { day: 'Sat', hours: 8.4 },
    { day: 'Sun', hours: 4.2 }
  ]

  if (ageConsentStatus === 'pending') {
    return (
      <div className="w-full max-w-5xl mx-auto rounded-3xl border border-border bg-card shadow-2xl overflow-hidden flex flex-col items-center justify-center p-8 text-center h-[680px] relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-cyan-500/5 to-blue-500/10 pointer-events-none" />
        <div className="max-w-md space-y-6 relative z-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
            <ShieldCheck className="h-8 w-8 animate-pulse" />
          </div>
          
          <div className="space-y-2">
            <h3 className="font-heading text-xl font-bold text-foreground">
              DhruvaOS Workspace Initialization
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              In compliance with Section 9 of the India DPDP Act 2023, educational operating environments must record verified age status or parental authorization.
            </p>
          </div>

          <div className="space-y-3.5 pt-2 text-left">
            <button
              onClick={() => {
                setIsOver18(true)
                setConsentCheckbox(true)
              }}
              className={`w-full p-4 rounded-xl border text-xs md:text-sm text-left transition-colors flex items-center justify-between ${
                isOver18 && consentCheckbox
                  ? 'border-purple-500 bg-purple-500/5 text-purple-300'
                  : 'border-border bg-muted/20 text-muted-foreground hover:bg-muted/40 hover:text-foreground'
              }`}
            >
              <div>
                <p className="font-semibold">I am 18 years or older</p>
                <p className="text-[10px] opacity-80 mt-0.5">Self-directed student or academic educator.</p>
              </div>
              <div className={`h-4.5 w-4.5 rounded-full border flex items-center justify-center shrink-0 ${isOver18 && consentCheckbox ? 'border-purple-400 bg-purple-500 text-white' : 'border-border'}`}>
                {isOver18 && consentCheckbox && <CheckCircle className="h-3 w-3 stroke-[3]" />}
              </div>
            </button>

            <button
              onClick={() => {
                setIsOver18(false)
                setConsentCheckbox(true)
              }}
              className={`w-full p-4 rounded-xl border text-xs md:text-sm text-left transition-colors flex items-center justify-between ${
                !isOver18 && consentCheckbox
                  ? 'border-purple-500 bg-purple-500/5 text-purple-300'
                  : 'border-border bg-muted/20 text-muted-foreground hover:bg-muted/40 hover:text-foreground'
              }`}
            >
              <div>
                <p className="font-semibold">I am under 18 (Parental Consent Required)</p>
                <p className="text-[10px] opacity-80 mt-0.5">Authorized by parent or legal guardian.</p>
              </div>
              <div className={`h-4.5 w-4.5 rounded-full border flex items-center justify-center shrink-0 ${!isOver18 && consentCheckbox ? 'border-purple-400 bg-purple-500 text-white' : 'border-border'}`}>
                {!isOver18 && consentCheckbox && <CheckCircle className="h-3 w-3 stroke-[3]" />}
              </div>
            </button>
          </div>

          <Button
            onClick={() => setAgeConsentStatus('verified')}
            disabled={!consentCheckbox}
            className="w-full h-11 bg-purple-500 hover:bg-purple-600 disabled:opacity-50 text-white font-semibold shadow-md shadow-purple-500/20 text-xs uppercase tracking-wider"
          >
            Launch Interactive OS Preview
          </Button>

          <p className="text-[10px] text-muted-foreground leading-relaxed pt-2">
            This verification state satisfies safety guidelines. Verified statuses are saved locally within the session.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl border border-border bg-card shadow-2xl overflow-hidden flex flex-col md:flex-row h-[680px]">
      
      {/* ─── Sidebar Navigation ──────────────────────────────────────────────── */}
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-border bg-muted/20 p-5 flex flex-row md:flex-col justify-between shrink-0">
        <div className="flex flex-row md:flex-col gap-1 w-full justify-around md:justify-start">
          
          <div className="hidden md:flex items-center gap-2 px-3 py-4 mb-4 border-b border-border/40">
            <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="font-heading text-sm font-semibold tracking-wider text-muted-foreground uppercase">
              DhruvaOS Preview
            </span>
          </div>

          <button
            onClick={() => setActiveTab('ai-coach')}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors w-full ${
              activeTab === 'ai-coach'
                ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent'
            }`}
          >
            <Bot className="h-4.5 w-4.5" />
            <span className="hidden md:inline">AI Study Coach</span>
          </button>

          <button
            onClick={() => setActiveTab('planner')}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors w-full ${
              activeTab === 'planner'
                ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent'
            }`}
          >
            <Calendar className="h-4.5 w-4.5" />
            <span className="hidden md:inline">Study Planner</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors w-full ${
              activeTab === 'quiz'
                ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent'
            }`}
          >
            <Sparkles className="h-4.5 w-4.5" />
            <span className="hidden md:inline">Quiz Center</span>
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors w-full ${
              activeTab === 'analytics'
                ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent'
            }`}
          >
            <TrendingUp className="h-4.5 w-4.5" />
            <span className="hidden md:inline">Analytics</span>
          </button>
        </div>

        {/* Sidebar Info footer (desktop only) */}
        <div className="hidden md:block p-3.5 rounded-xl bg-purple-500/5 border border-purple-500/10">
          <h4 className="text-xs font-semibold text-foreground mb-1">Product Status</h4>
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            Pivoted EdTech Engine in prototype. Experience client interactions in this mockup frame.
          </p>
        </div>
      </aside>

      {/* ─── Main Workspace Pane ────────────────────────────────────────────── */}
      <main className="flex-1 bg-card flex flex-col h-full overflow-hidden relative">
        
        {/* Workspace Gradient Background Element */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/2 via-cyan-500/0 to-blue-500/2 pointer-events-none" />

        {/* ─── TAB 1: AI STUDY COACH ────────────────────────────────────────── */}
        {activeTab === 'ai-coach' && (
          <div className="flex-1 flex flex-col h-full overflow-hidden p-6 relative z-10">
            {/* Chat header */}
            <div className="flex items-center justify-between pb-4 border-b border-border/60">
              <div>
                <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                  <Bot className="h-5 w-5 text-purple-400 animate-bounce" />
                  Dhruva AI Coach
                </h3>
                <p className="text-xs text-muted-foreground">Ask anything or import study guides</p>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                Active Session
              </span>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1 scrollbar-thin">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-3 max-w-[85%] ${
                    msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
                  }`}
                >
                  <div
                    className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 text-xs font-medium ${
                      msg.sender === 'user'
                        ? 'bg-purple-500/25 text-purple-300'
                        : 'bg-blue-500/10 text-blue-400 border border-blue-500/15'
                    }`}
                  >
                    {msg.sender === 'user' ? 'U' : <Bot className="h-4.5 w-4.5" />}
                  </div>
                  <div className="space-y-1">
                    <div
                      className={`p-3.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line border ${
                        msg.sender === 'user'
                          ? 'bg-purple-500/10 border-purple-500/20 text-purple-100 rounded-tr-none'
                          : 'bg-muted/30 border-border/50 text-muted-foreground rounded-tl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[10px] text-muted-foreground/60 block px-1">
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {isAiTyping && (
                <div className="flex gap-3 max-w-[80%] mr-auto items-center">
                  <div className="h-7 w-7 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/15 flex items-center justify-center shrink-0">
                    <Bot className="h-4.5 w-4.5" />
                  </div>
                  <div className="bg-muted/20 border border-border/40 p-3 rounded-2xl rounded-tl-none flex items-center gap-1">
                    <span className="h-1.5 w-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="h-1.5 w-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="h-1.5 w-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Prompt Suggestion Chips */}
            <div className="py-2.5 flex flex-wrap gap-2 border-t border-border/40">
              {samplePrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => sendPromptMessage(p.query)}
                  disabled={isAiTyping}
                  className="text-xs px-3 py-1.5 rounded-full border border-border bg-card hover:bg-muted/40 hover:text-purple-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Chat Input form */}
            <form onSubmit={handleSendChat} className="flex gap-2 items-center">
              <input
                type="text"
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                placeholder="Ask about formulas, concepts, summaries..."
                className="flex-1 bg-muted/30 border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500/40 text-foreground"
              />
              <button
                type="submit"
                disabled={!chatInput.trim() || isAiTyping}
                className="h-10 w-10 shrink-0 bg-purple-500 text-white rounded-xl flex items-center justify-center hover:bg-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-purple-500/10"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        )}

        {/* ─── TAB 2: STUDY PLANNER ─────────────────────────────────────────── */}
        {activeTab === 'planner' && (
          <div className="flex-1 flex flex-col md:flex-row h-full overflow-hidden p-6 gap-6 relative z-10">
            {/* Courses Column */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-1 scrollbar-thin">
              <div className="border-b border-border/60 pb-3">
                <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-purple-400" />
                  Syllabus Tracker
                </h3>
                <p className="text-xs text-muted-foreground">Simulate curriculum progression</p>
              </div>

              {courses.map(course => (
                <div key={course.id} className="rounded-xl border border-border bg-muted/15 p-4 space-y-3.5">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-sm font-semibold text-foreground leading-snug">{course.name}</h4>
                    <span className="text-xs font-mono font-bold text-purple-400 shrink-0">
                      {course.progress}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-border/40 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-cyan-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>

                  {/* Modules check list */}
                  <div className="space-y-2">
                    {course.modules.map(mod => (
                      <button
                        key={mod.id}
                        onClick={() => toggleModule(course.id, mod.id)}
                        className="flex items-center gap-2.5 w-full text-left p-2.5 rounded-lg border border-border/30 bg-card hover:bg-muted/40 transition-colors group"
                      >
                        <div
                          className={`h-4.5 w-4.5 rounded border flex items-center justify-center shrink-0 transition-colors ${
                            mod.completed
                              ? 'bg-purple-500 border-purple-500 text-white'
                              : 'border-border bg-card group-hover:border-purple-500/50'
                          }`}
                        >
                          {mod.completed && <CheckCircle className="h-3.5 w-3.5 fill-current text-purple-500 stroke-white" />}
                        </div>
                        <span
                          className={`text-xs transition-colors ${
                            mod.completed ? 'text-muted-foreground line-through' : 'text-foreground'
                          }`}
                        >
                          {mod.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Pomodoro Focus Timer Panel */}
            <div className="w-full md:w-64 shrink-0 flex flex-col justify-between rounded-2xl border border-border bg-muted/20 p-5 h-auto md:h-full">
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-border/40">
                  <Clock className="h-4.5 w-4.5 text-purple-400" />
                  <span className="text-xs font-semibold text-foreground uppercase tracking-wider">
                    Focus Engine (Pomodoro)
                  </span>
                </div>
                
                <div className="text-center py-6">
                  <div className="font-mono text-4xl font-extrabold text-foreground tracking-tight select-none">
                    {formatTime(timeLeft)}
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-widest">
                    Deep Focus Mode
                  </p>
                </div>

                <div className="flex justify-center items-center gap-3">
                  <button
                    onClick={toggleTimer}
                    className={`h-10 px-4 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-md ${
                      timerRunning
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:bg-amber-500/15'
                        : 'bg-purple-500 text-white hover:bg-purple-600 shadow-purple-500/10'
                    }`}
                  >
                    {timerRunning ? (
                      <>
                        <Pause className="h-4 w-4" /> Pause
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 fill-current" /> Start Focus
                      </>
                    )}
                  </button>
                  <button
                    onClick={resetTimer}
                    className="h-10 w-10 rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground flex items-center justify-center transition-colors"
                    aria-label="Reset Timer"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="border-t border-border/40 pt-4 mt-6 md:mt-0 text-[10px] text-muted-foreground leading-relaxed flex items-start gap-2">
                <AlertCircle className="h-4.5 w-4.5 text-purple-400/70 shrink-0 mt-0.5" />
                <span>
                  The timer runs client-side. In the actual OS, completing sessions earns cognitive credits and feeds analytics.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ─── TAB 3: QUIZ CENTER ───────────────────────────────────────────── */}
        {activeTab === 'quiz' && (
          <div className="flex-1 flex flex-col h-full overflow-hidden p-6 relative z-10">
            <div className="border-b border-border/60 pb-3 mb-5">
              <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-purple-400" />
                Adaptive Quiz Module
              </h3>
              <p className="text-xs text-muted-foreground">Test retention with AI-generated queries</p>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              {/* Question Box */}
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/15">
                    Question {quizQuestions[currentQuizIndex].id} of {quizQuestions.length}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">
                    Subject: Academic Science & CS
                  </span>
                </div>

                <h4 className="text-sm md:text-base font-bold text-foreground leading-relaxed">
                  {quizQuestions[currentQuizIndex].question}
                </h4>

                {/* Option list */}
                <div className="grid grid-cols-1 gap-3">
                  {quizQuestions[currentQuizIndex].options.map((option, idx) => {
                    let optionStyle = 'border-border bg-card text-foreground hover:bg-muted/30'
                    if (selectedAnswer === idx) {
                      optionStyle = 'border-purple-500 bg-purple-500/5 text-purple-300'
                    }
                    if (quizSubmitted) {
                      if (idx === quizQuestions[currentQuizIndex].correctIndex) {
                        optionStyle = 'border-emerald-500 bg-emerald-500/10 text-emerald-300 font-medium'
                      } else if (selectedAnswer === idx) {
                        optionStyle = 'border-red-500 bg-red-500/10 text-red-300'
                      } else {
                        optionStyle = 'border-border/40 bg-card/40 text-muted-foreground opacity-60'
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        disabled={quizSubmitted}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border text-left text-xs md:text-sm transition-all duration-200 ${optionStyle}`}
                      >
                        <span className="h-5 w-5 rounded-full border border-border shrink-0 flex items-center justify-center font-bold text-xs select-none">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{option}</span>
                      </button>
                    )
                  })}
                </div>

                {/* Explanation Alert */}
                {quizSubmitted && (
                  <div className="p-4 rounded-xl border border-border/80 bg-muted/40 text-xs md:text-sm text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-3">
                    <div className="flex items-center gap-2 mb-1.5 font-semibold text-foreground text-xs uppercase tracking-wider">
                      {selectedAnswer === quizQuestions[currentQuizIndex].correctIndex ? (
                        <span className="text-emerald-400 flex items-center gap-1">
                          <CheckCircle className="h-4 w-4" /> Correct Answer
                        </span>
                      ) : (
                        <span className="text-red-400 flex items-center gap-1">
                          <AlertCircle className="h-4 w-4" /> Incorrect Answer
                        </span>
                      )}
                    </div>
                    {quizQuestions[currentQuizIndex].explanation}
                  </div>
                )}
              </div>

              {/* Action area */}
              <div className="border-t border-border/40 pt-4 flex items-center justify-between gap-4">
                <span className="text-xs text-muted-foreground">
                  Score feedback is tracked in real-time.
                </span>

                {!quizSubmitted ? (
                  <Button
                    onClick={handleQuizSubmit}
                    disabled={selectedAnswer === null}
                    className="h-9 text-xs px-4 bg-purple-500 hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed text-white shadow-md shadow-purple-500/10"
                  >
                    Submit Answer
                  </Button>
                ) : (
                  <Button
                    onClick={handleNextQuiz}
                    className="h-9 text-xs px-4 bg-card border border-border hover:bg-muted text-foreground flex items-center gap-1.5"
                  >
                    Next Question
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ─── TAB 4: ANALYTICS ─────────────────────────────────────────────── */}
        {activeTab === 'analytics' && (
          <div className="flex-1 flex flex-col h-full overflow-hidden p-6 relative z-10">
            <div className="border-b border-border/60 pb-3 mb-5">
              <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-400" />
                Cognitive Performance Dashboard
              </h3>
              <p className="text-xs text-muted-foreground">Weekly mastery progression & metrics</p>
            </div>

            <div className="flex-1 overflow-y-auto space-y-6 pr-1 scrollbar-thin">
              {/* Metric Card Row */}
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-xl border border-border bg-muted/10 p-4 text-center">
                  <div className="flex h-8 w-8 mx-auto items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 mb-2">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div className="font-mono text-lg md:text-xl font-bold text-foreground">39.2 hrs</div>
                  <p className="text-[10px] text-muted-foreground uppercase mt-0.5">Time Focused</p>
                </div>
                
                <div className="rounded-xl border border-border bg-muted/10 p-4 text-center">
                  <div className="flex h-8 w-8 mx-auto items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 mb-2">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div className="font-mono text-lg md:text-xl font-bold text-foreground">112</div>
                  <p className="text-[10px] text-muted-foreground uppercase mt-0.5">Quizzes Solved</p>
                </div>

                <div className="rounded-xl border border-border bg-muted/10 p-4 text-center">
                  <div className="flex h-8 w-8 mx-auto items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 mb-2">
                    <Award className="h-4 w-4" />
                  </div>
                  <div className="font-mono text-lg md:text-xl font-bold text-foreground">87.5%</div>
                  <p className="text-[10px] text-muted-foreground uppercase mt-0.5">Mastery Rate</p>
                </div>
              </div>

              {/* Bar Chart Representation (CSS/Tailwind Grid) */}
              <div className="rounded-xl border border-border bg-card p-4 space-y-4">
                <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider">
                  Daily study distribution (Hours)
                </h4>
                
                <div className="h-40 flex items-end justify-between gap-2.5 pt-6 px-4">
                  {mockWeeklyStats.map((item, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                      <span className="text-[10px] font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {item.hours}h
                      </span>
                      {/* Bar fill */}
                      <div
                        className="w-full bg-gradient-to-t from-purple-500 to-cyan-400 rounded-t-md hover:from-purple-400 hover:to-cyan-300 transition-all duration-300 shadow-md shadow-purple-500/5"
                        style={{ height: `${(item.hours / 9) * 100}%` }}
                      />
                      <span className="text-xs font-medium text-muted-foreground shrink-0 mt-1">
                        {item.day}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cognitive Assessment Text Box */}
              <div className="p-4 rounded-xl border border-border bg-purple-500/5 space-y-2">
                <h5 className="text-xs font-bold text-purple-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Bot className="h-4 w-4" />
                  AI Cognitive Recommendation
                </h5>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Your performance data reveals high cognitive retention during morning study cycles (8:00 AM – 11:00 AM) with an average quiz accuracy of 92%. We recommend scheduling your next Advanced Algorithms session during this window.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
