import * as React from 'react'
import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:scale-[0.97] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground border border-white/20 dark:border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_16px_rgba(37,99,235,0.25)] hover:bg-primary/90 hover:shadow-[0_0_24px_rgba(59,130,246,0.35)] active:scale-[0.98] transition-all duration-200 [a]:hover:bg-primary/80',
        gradient:
          'bg-gradient-button btn-shimmer text-white border border-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_4px_20px_rgba(37,99,235,0.3)] hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(139,92,246,0.35)] active:scale-[0.98] transition-all duration-300',
        outline:
          'border border-border/80 dark:border-white/15 bg-background/70 dark:bg-card/40 backdrop-blur-md text-foreground hover:border-primary/60 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.18)] aria-expanded:bg-muted active:scale-[0.98] transition-all duration-200',
        'outline-primary':
          'border border-primary/50 text-primary bg-transparent hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_22px_rgba(59,130,246,0.25)] active:scale-[0.98] transition-all duration-200',
        'outline-violet':
          'border border-violet-500/50 text-violet-500 dark:text-violet-400 bg-transparent hover:bg-violet-500/10 hover:border-violet-400 hover:shadow-[0_0_22px_rgba(139,92,246,0.25)] active:scale-[0.98] transition-all duration-200',
        'outline-red':
          'border border-destructive/50 text-destructive bg-transparent hover:bg-destructive/10 hover:border-destructive hover:shadow-[0_0_20px_rgba(239,68,68,0.25)] active:scale-[0.98] transition-all duration-200',
        secondary:
          'bg-secondary text-secondary-foreground border border-border/60 hover:bg-secondary/80 hover:border-border active:scale-[0.98] transition-all duration-200 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground',
        ghost:
          'hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50 transition-all duration-150',
        // ── 3D Tactile Button Variants with Color-Matched Main & Shadow Combos ──
        'tactile-brand':
          'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 text-white font-extrabold border-2 border-[#1e1b4b] dark:border-[#a78bfa] shadow-[2.5px_2.5px_0px_0px_#1e1b4b] dark:shadow-[2.5px_2.5px_0px_0px_#312e81,0_0_18px_rgba(139,92,246,0.35)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3.5px_3.5px_0px_0px_#1e1b4b] dark:hover:shadow-[3.5px_3.5px_0px_0px_#312e81,0_0_24px_rgba(139,92,246,0.55)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#1e1b4b] dark:active:shadow-[1px_1px_0px_0px_#312e81] transition-all duration-150',
        'tactile-yellow':
          'bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black border-2 border-slate-950 dark:border-amber-300 shadow-[2.5px_2.5px_0px_0px_#020617] dark:shadow-[2.5px_2.5px_0px_0px_#78350f,0_0_18px_rgba(251,191,36,0.35)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3.5px_3.5px_0px_0px_#020617] dark:hover:shadow-[3.5px_3.5px_0px_0px_#78350f,0_0_24px_rgba(251,191,36,0.55)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#020617] dark:active:shadow-[1px_1px_0px_0px_#78350f] transition-all duration-150',
        'tactile-primary':
          'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold border-2 border-[#1e3a8a] dark:border-[#38bdf8] shadow-[2.5px_2.5px_0px_0px_#172554] dark:shadow-[2.5px_2.5px_0px_0px_#0369a1,0_0_18px_rgba(6,182,212,0.35)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3.5px_3.5px_0px_0px_#172554] dark:hover:shadow-[3.5px_3.5px_0px_0px_#0369a1,0_0_24px_rgba(6,182,212,0.55)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#172554] dark:active:shadow-[1px_1px_0px_0px_#0369a1] transition-all duration-150',
        'tactile-secondary':
          'bg-gradient-to-b from-background/95 to-muted/80 dark:from-[#110c22]/95 dark:to-[#090615]/85 backdrop-blur-md text-foreground font-extrabold border-2 border-slate-700 dark:border-indigo-400 shadow-[2.5px_2.5px_0px_0px_#0f172a] dark:shadow-[2.5px_2.5px_0px_0px_#3730a3,0_0_18px_rgba(99,102,241,0.35)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-blue-600 dark:hover:border-indigo-300 hover:shadow-[3.5px_3.5px_0px_0px_#1e3a8a] dark:hover:shadow-[3.5px_3.5px_0px_0px_#3730a3,0_0_24px_rgba(99,102,241,0.5)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#0f172a] dark:active:shadow-[1px_1px_0px_0px_#3730a3] transition-all duration-150',
        'tactile-emerald':
          'bg-gradient-to-b from-emerald-400 via-emerald-500 to-teal-600 text-white font-extrabold border-2 border-[#065f46] dark:border-[#34d399] shadow-[2.5px_2.5px_0px_0px_#064e3b] dark:shadow-[2.5px_2.5px_0px_0px_#047857,0_0_18px_rgba(16,185,129,0.35)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3.5px_3.5px_0px_0px_#064e3b] dark:hover:shadow-[3.5px_3.5px_0px_0px_#047857,0_0_24px_rgba(16,185,129,0.55)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#064e3b] dark:active:shadow-[1px_1px_0px_0px_#047857] transition-all duration-150',
        'tactile-violet':
          'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-extrabold border-2 border-[#581c87] dark:border-[#c084fc] shadow-[2.5px_2.5px_0px_0px_#3b0764] dark:shadow-[2.5px_2.5px_0px_0px_#6b21a8,0_0_18px_rgba(192,132,252,0.35)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3.5px_3.5px_0px_0px_#3b0764] dark:hover:shadow-[3.5px_3.5px_0px_0px_#6b21a8,0_0_24px_rgba(192,132,252,0.55)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#3b0764] dark:active:shadow-[1px_1px_0px_0px_#6b21a8] transition-all duration-150',
        '3d-brand':
          'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 text-white font-extrabold border-2 border-[#1e1b4b] dark:border-[#a78bfa] shadow-[2.5px_2.5px_0px_0px_#1e1b4b] dark:shadow-[2.5px_2.5px_0px_0px_#312e81,0_0_18px_rgba(139,92,246,0.35)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3.5px_3.5px_0px_0px_#1e1b4b] dark:hover:shadow-[3.5px_3.5px_0px_0px_#312e81,0_0_24px_rgba(139,92,246,0.55)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#1e1b4b] dark:active:shadow-[1px_1px_0px_0px_#312e81] transition-all duration-150',
        '3d-yellow':
          'bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black border-2 border-slate-950 dark:border-amber-300 shadow-[2.5px_2.5px_0px_0px_#020617] dark:shadow-[2.5px_2.5px_0px_0px_#78350f,0_0_18px_rgba(251,191,36,0.35)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3.5px_3.5px_0px_0px_#020617] dark:hover:shadow-[3.5px_3.5px_0px_0px_#78350f,0_0_24px_rgba(251,191,36,0.55)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#020617] dark:active:shadow-[1px_1px_0px_0px_#78350f] transition-all duration-150',
        '3d-primary':
          'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold border-2 border-[#1e3a8a] dark:border-[#38bdf8] shadow-[2.5px_2.5px_0px_0px_#172554] dark:shadow-[2.5px_2.5px_0px_0px_#0369a1,0_0_18px_rgba(6,182,212,0.35)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3.5px_3.5px_0px_0px_#172554] dark:hover:shadow-[3.5px_3.5px_0px_0px_#0369a1,0_0_24px_rgba(6,182,212,0.55)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#172554] dark:active:shadow-[1px_1px_0px_0px_#0369a1] transition-all duration-150',
        '3d-secondary':
          'bg-gradient-to-b from-background/95 to-muted/80 dark:from-[#110c22]/95 dark:to-[#090615]/85 backdrop-blur-md text-foreground font-extrabold border-2 border-slate-700 dark:border-indigo-400 shadow-[2.5px_2.5px_0px_0px_#0f172a] dark:shadow-[2.5px_2.5px_0px_0px_#3730a3,0_0_18px_rgba(99,102,241,0.35)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-blue-600 dark:hover:border-indigo-300 hover:shadow-[3.5px_3.5px_0px_0px_#1e3a8a] dark:hover:shadow-[3.5px_3.5px_0px_0px_#3730a3,0_0_24px_rgba(99,102,241,0.5)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#0f172a] dark:active:shadow-[1px_1px_0px_0px_#3730a3] transition-all duration-150',
        '3d-emerald':
          'bg-gradient-to-b from-emerald-400 via-emerald-500 to-teal-600 text-white font-extrabold border-2 border-[#065f46] dark:border-[#34d399] shadow-[2.5px_2.5px_0px_0px_#064e3b] dark:shadow-[2.5px_2.5px_0px_0px_#047857,0_0_18px_rgba(16,185,129,0.35)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3.5px_3.5px_0px_0px_#064e3b] dark:hover:shadow-[3.5px_3.5px_0px_0px_#047857,0_0_24px_rgba(16,185,129,0.55)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#064e3b] dark:active:shadow-[1px_1px_0px_0px_#047857] transition-all duration-150',
        '3d-violet':
          'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-extrabold border-2 border-[#581c87] dark:border-[#c084fc] shadow-[2.5px_2.5px_0px_0px_#3b0764] dark:shadow-[2.5px_2.5px_0px_0px_#6b21a8,0_0_18px_rgba(192,132,252,0.35)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3.5px_3.5px_0px_0px_#3b0764] dark:hover:shadow-[3.5px_3.5px_0px_0px_#6b21a8,0_0_24px_rgba(192,132,252,0.55)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#3b0764] dark:active:shadow-[1px_1px_0px_0px_#6b21a8] transition-all duration-150',
        destructive:
          'bg-destructive/10 text-destructive border border-destructive/30 hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default:
          'h-10 gap-2 px-4.5 text-sm font-semibold rounded-xl has-data-[icon=inline-end]:pr-3.5 has-data-[icon=inline-start]:pl-3.5',
        xs: "h-7 gap-1 rounded-lg px-2.5 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8.5 gap-1.5 rounded-lg px-3 text-xs font-semibold in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3.5",
        lg: 'h-11.5 gap-2 px-6 text-sm sm:text-base font-bold rounded-xl has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5',
        xl: 'h-13.5 gap-3 px-8 text-base sm:text-lg font-extrabold rounded-2xl has-data-[icon=inline-end]:pr-6 has-data-[icon=inline-start]:pl-6',
        icon: 'size-9 rounded-xl',
        'icon-xs':
          "size-6 rounded-md in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        'icon-sm':
          'size-7.5 rounded-lg in-data-[slot=button-group]:rounded-lg',
        'icon-lg': 'size-10.5 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends Omit<ButtonPrimitive.Props, 'render'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  children?: React.ReactNode
}

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const resolvedClass = cn(buttonVariants({ variant, size, className }))

  if (asChild && React.isValidElement(children)) {
    // Clone the child element, merging our classes + props onto it
    return React.cloneElement(children as React.ReactElement<Record<string, unknown>>, {
      className: cn(
        resolvedClass,
        (children.props as Record<string, unknown>).className as string | undefined
      ),
      ...props,
    })
  }

  return (
    <ButtonPrimitive
      data-slot="button"
      className={resolvedClass}
      {...props}
    >
      {children}
    </ButtonPrimitive>
  )
}

export { Button, buttonVariants }
