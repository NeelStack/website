'use client'

import { motion } from 'framer-motion'
import { Server, Cloud, Cpu, Sparkles, Building2, ShieldCheck, FileCheck2, Briefcase } from 'lucide-react'

// Define the trust items
const TECH_STACK = [
  { name: 'AWS Cloud', icon: Cloud },
  { name: 'Vercel Edge', icon: Server },
  { name: 'Gemini AI', icon: Sparkles },
  { name: 'Claude AI', icon: Cpu },
  { name: 'Antigravity IDE', icon: Briefcase },
]

const ACCREDITATIONS = [
  { name: 'Startup India', icon: ShieldCheck },
  { name: 'MCA Registered', icon: Building2 },
  { name: 'GST Verified', icon: FileCheck2 },
  { name: 'MSME Recognized', icon: ShieldCheck },
]

const ALL_ITEMS = [...TECH_STACK, ...ACCREDITATIONS]

export function TrustMarquee() {
  return (
    <section className="w-full py-8 border-y border-border/40 bg-background/50 backdrop-blur-sm overflow-hidden relative z-10">
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          style={{ width: "max-content" }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {/* Render twice for infinite loop effect */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center justify-around gap-12 sm:gap-20 px-6 sm:px-10">
              {ALL_ITEMS.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div 
                    key={`${i}-${idx}`} 
                    className="flex items-center gap-2.5 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
                    <span className="font-heading font-semibold text-sm sm:text-base tracking-tight text-foreground">
                      {item.name}
                    </span>
                  </div>
                )
              })}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
