'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { FAQItem } from '@/types'

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

interface FAQItemProps {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
}

function FAQItemRow({ item, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className={cn('border-b border-border last:border-0 transition-colors duration-200', isOpen && 'bg-primary/3')}>
      <button
        className={cn(
          'flex w-full cursor-pointer items-center justify-between py-5 text-left gap-4',
          isOpen ? 'pl-3 border-l-2 border-primary' : 'pl-0 border-l-2 border-transparent',
          'transition-all duration-200'
        )}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-${item.question.slice(0, 20).replace(/\s/g, '-')}`}
      >
        <span
          className={cn(
            'text-sm sm:text-base transition-colors duration-200',
            isOpen ? 'font-semibold text-foreground' : 'font-medium text-foreground/80'
          )}
        >
          {item.question}
        </span>
        <ChevronDown
          className={cn(
            'h-5 w-5 shrink-0 transition-all duration-200',
            isOpen ? 'rotate-180 text-primary' : 'text-muted-foreground'
          )}
          aria-hidden="true"
        />
      </button>
      <div
        id={`faq-${item.question.slice(0, 20).replace(/\s/g, '-')}`}
        role="region"
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        )}
      >
        <p className="text-sm text-muted-foreground leading-relaxed pl-0">{item.answer}</p>
      </div>
    </div>
  )
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx))
  }

  return (
    <div className={cn('divide-y divide-border rounded-2xl border border-border bg-card px-6', className)}>
      {items.map((item, idx) => (
        <FAQItemRow
          key={idx}
          item={item}
          isOpen={openIndex === idx}
          onToggle={() => handleToggle(idx)}
        />
      ))}
    </div>
  )
}
