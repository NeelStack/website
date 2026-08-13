'use client'

import { LogoMark, NeelStackLogo } from '@/components/ui/logo'

/**
 * Complete Executive Brand Identity Board
 * Renders Full Color, Dark Mode, Light Mode, Pure Black, Pure White, and Favicon logo variations.
 */
export function BrandIdentityBoard() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 md:p-10 space-y-10 bg-slate-950/90 rounded-3xl border border-border/40 shadow-2xl backdrop-blur-2xl text-white">
      {/* Header Title */}
      <div className="text-center space-y-2 border-b border-border/40 pb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-400">NeelStack Master System</span>
        <h2 className="text-2xl md:text-3xl font-black font-heading tracking-tight text-white">
          Brand Identity &amp; Logo Variation Grid
        </h2>
        <p className="text-xs text-slate-400 max-w-xl mx-auto">
          Point-Up Hexagon Monogram in Primary Blue to Accent Cyan Gradient, Dark Mode, Light Mode, Pure Monochrome, and 16×16 Favicon.
        </p>
      </div>

      {/* Grid of Logo Variations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Variant 1: Primary Full Color (Dark Container) */}
        <div className="bg-slate-900/90 rounded-2xl p-6 border border-border/50 flex flex-col justify-between space-y-6">
          <div className="flex justify-between items-center text-[10px] font-mono text-blue-400">
            <span>Primary Brand Logo</span>
            <span>Full Gradient</span>
          </div>

          <div className="p-6 rounded-xl bg-slate-950 border border-blue-500/20 flex items-center justify-center min-h-[120px]">
            <NeelStackLogo size="md" variant="full" />
          </div>

          <span className="text-xs text-slate-400 text-center">
            Primary Blue (#3B72FE) to Accent Cyan (#2EC7F2)
          </span>
        </div>

        {/* Variant 2: Dark Mode Logo (White Text + Gradient Icon) */}
        <div className="bg-slate-900/90 rounded-2xl p-6 border border-border/50 flex flex-col justify-between space-y-6">
          <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
            <span>Dark Mode Version</span>
            <span>Dark Theme</span>
          </div>

          <div className="p-6 rounded-xl bg-black border border-white/10 flex items-center justify-center min-h-[120px]">
            <div className="flex items-center gap-3">
              <LogoMark size="md" variant="full" />
              <span className="font-heading font-black text-xl text-white tracking-[-0.05em]">NeelStack</span>
            </div>
          </div>

          <span className="text-xs text-slate-400 text-center">
            For Dark Backgrounds &amp; Headers
          </span>
        </div>

        {/* Variant 3: Light Mode Logo (Black Text + Gradient Icon) */}
        <div className="bg-slate-900/90 rounded-2xl p-6 border border-border/50 flex flex-col justify-between space-y-6">
          <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
            <span>Light Mode Version</span>
            <span>Light Theme</span>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 flex items-center justify-center min-h-[120px]">
            <div className="flex items-center gap-3">
              <LogoMark size="md" variant="full" />
              <span className="font-heading font-black text-xl text-slate-950 tracking-[-0.05em]">NeelStack</span>
            </div>
          </div>

          <span className="text-xs text-slate-400 text-center">
            For Light Backgrounds &amp; Stationery
          </span>
        </div>

        {/* Variant 4: Pure White Monochrome (Dark Mode) */}
        <div className="bg-slate-900/90 rounded-2xl p-6 border border-border/50 flex flex-col justify-between space-y-6">
          <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
            <span>Pure White Monochrome</span>
            <span>100% White</span>
          </div>

          <div className="p-6 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center min-h-[120px]">
            <div className="flex items-center gap-3 text-white">
              <LogoMark size="md" variant="monochrome" className="text-white" />
              <span className="font-heading font-black text-xl text-white tracking-[-0.05em]">NeelStack</span>
            </div>
          </div>

          <span className="text-xs text-slate-400 text-center">
            For Single-Color Dark Press &amp; Avatars
          </span>
        </div>

        {/* Variant 5: Pure Black Monochrome (Light Mode) */}
        <div className="bg-slate-900/90 rounded-2xl p-6 border border-border/50 flex flex-col justify-between space-y-6">
          <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
            <span>Pure Black Monochrome</span>
            <span>100% Black</span>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 flex items-center justify-center min-h-[120px]">
            <div className="flex items-center gap-3 text-black">
              <LogoMark size="md" variant="monochrome" className="text-black" />
              <span className="font-heading font-black text-xl text-black tracking-[-0.05em]">NeelStack</span>
            </div>
          </div>

          <span className="text-xs text-slate-400 text-center">
            For Official Documents &amp; Print Press
          </span>
        </div>

        {/* Variant 6: Favicon & App Icon Mockup */}
        <div className="bg-slate-900/90 rounded-2xl p-6 border border-border/50 flex flex-col justify-between space-y-6">
          <div className="flex justify-between items-center text-[10px] font-mono text-blue-400">
            <span>Favicon &amp; App Icon</span>
            <span>16×16 px</span>
          </div>

          <div className="p-6 rounded-xl bg-slate-950 border border-border/40 flex items-center justify-around min-h-[120px]">
            <div className="text-center space-y-1.5">
              <span className="text-[10px] text-slate-400 font-mono block">16px Tab</span>
              <div className="w-5 h-5 rounded bg-slate-900 flex items-center justify-center border border-white/10 mx-auto shadow">
                <LogoMark size="sm" variant="full" className="scale-50" />
              </div>
            </div>

            <div className="text-center space-y-1.5">
              <span className="text-[10px] text-slate-400 font-mono block">App Icon</span>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-900 to-black p-2 flex items-center justify-center border border-blue-500/30 shadow-lg mx-auto">
                <LogoMark size="sm" variant="full" />
              </div>
            </div>
          </div>

          <span className="text-xs text-slate-400 text-center">
            Favicon, Mobile App &amp; GitHub Avatar
          </span>
        </div>

      </div>
    </div>
  )
}
