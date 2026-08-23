import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../../lib/utils'

interface SectionLabelProps {
  index: string
  title: string
  tone?: 'light' | 'dark'
  className?: string
}

export function SectionLabel({ index, title, tone = 'light', className }: SectionLabelProps) {
  const reduced = useReducedMotion()

  return (
    <div className={cn('flex items-center gap-4', tone === 'dark' ? 'text-paper/60' : 'text-muted', className)}>
      <span className="label-mono whitespace-nowrap">
        {index} <span aria-hidden>/</span> {title}
      </span>
      {reduced ? (
        <div className="h-px flex-1 bg-current opacity-25" />
      ) : (
        <motion.div
          className="h-px flex-1 origin-left bg-current opacity-25"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        />
      )}
    </div>
  )
}
