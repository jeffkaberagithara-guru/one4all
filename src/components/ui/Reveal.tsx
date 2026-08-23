import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../../lib/utils'
import { EASE } from '../../lib/motion'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

export function Reveal({ children, className, delay = 0, y = 28 }: RevealProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 0.85, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}

interface LineRevealProps {
  className?: string
  delay?: number
}

export function LineReveal({ className, delay = 0 }: LineRevealProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className} />
  }

  return (
    <motion.div
      className={cn('origin-left', className)}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 1.1, ease: EASE, delay }}
    />
  )
}

interface MaskRevealProps {
  children: ReactNode
  delay?: number
  className?: string
  onLoad?: boolean
}

export function MaskReveal({ children, delay = 0, className, onLoad = false }: MaskRevealProps) {
  const reduced = useReducedMotion()
  const animationProps = onLoad
    ? ({ animate: { y: '0%' } } as const)
    : ({ whileInView: { y: '0%' }, viewport: { once: true, margin: '-8% 0px' } } as const)

  if (reduced) {
    return <span className={cn('block', className)}>{children}</span>
  }

  return (
    <span className={cn('block overflow-hidden', className)}>
      <motion.span
        className="block"
        initial={{ y: '112%' }}
        transition={{ duration: 1, ease: EASE, delay }}
        {...animationProps}
      >
        {children}
      </motion.span>
    </span>
  )
}
