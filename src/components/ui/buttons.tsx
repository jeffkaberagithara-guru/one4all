import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { cn } from '../../lib/utils'

type ButtonVariant = 'primary' | 'outlineLight' | 'ghost'

const base = 'group inline-flex items-center gap-3 px-7 py-4 text-[12px] font-medium uppercase tracking-caps transition-colors duration-300 ease-out'

const variants: Record<ButtonVariant, string> = {
  primary: 'border border-ink bg-transparent text-ink hover:bg-ink hover:text-paper',
  outlineLight: 'border border-paper/50 text-paper hover:border-paper hover:bg-paper hover:text-coal',
  ghost: 'border border-transparent px-0 py-1 text-ink hover:text-muted',
}

interface ButtonLinkProps {
  to: string
  variant?: ButtonVariant
  children: ReactNode
  className?: string
}

export function ButtonLink({ to, variant = 'primary', children, className }: ButtonLinkProps) {
  const classes = cn(base, variants[variant], className)
  const external = /^(https?:|tel:|mailto:)/.test(to)

  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </>
  )

  if (external) {
    return (
      <a href={to} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <Link to={to} className={classes}>
      {content}
    </Link>
  )
}

interface TextButtonProps {
  href?: string
  onClick?: () => void
  direction?: 'down' | 'out'
  children: ReactNode
  className?: string
}

export function TextButton({ href, onClick, direction = 'out', children, className }: TextButtonProps) {
  const Icon = direction === 'down' ? ArrowDown : ArrowUpRight
  const classes = cn(
    'group u-link inline-flex items-center gap-2.5 pb-1 text-[12px] font-medium uppercase tracking-caps text-ink transition-colors hover:text-muted',
    className,
  )

  const inner = (
    <>
      <span>{children}</span>
      <Icon
        size={14}
        strokeWidth={1.75}
        aria-hidden
        className={cn('transition-transform duration-300 ease-out', direction === 'down' ? 'group-hover:translate-y-0.5' : 'group-hover:-translate-y-0.5 group-hover:translate-x-0.5')}
      />
    </>
  )

  if (!href) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {inner}
      </button>
    )
  }

  return (
    <a href={href} onClick={onClick} className={classes}>
      {inner}
    </a>
  )
}
