import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { navItems } from '../../data/navigation'
import { site } from '../../data/site'
import { cn } from '../../lib/utils'
import { EASE } from '../../lib/motion'

interface MobileMenuProps {
  onClose: () => void
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const reduced = useReducedMotion()

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <motion.div
      id="mobile-menu"
      className="fixed inset-0 z-[70] flex flex-col bg-coal text-paper"
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: '-4%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduced ? { opacity: 0 } : { opacity: 0, y: '-3%' }}
      transition={{ duration: 0.4, ease: EASE }}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation"
    >
      <div className="container-x flex h-20 items-center justify-between">
        <span className="font-display text-sm font-semibold uppercase tracking-wider2">ONE4ALL</span>
        <button
          type="button"
          onClick={onClose}
          autoFocus
          className="text-[12px] font-medium uppercase tracking-caps text-paper/80 transition-colors hover:text-paper"
        >
          Schließen
        </button>
      </div>

      <nav aria-label="Mobile Navigation" className="container-x mt-10 flex flex-1 flex-col justify-center pb-24">
        {navItems.map((item, i) => (
          <motion.div
            key={item.to}
            initial={reduced ? false : { opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08 * i + 0.1, duration: 0.5, ease: EASE }}
          >
            <NavLink
              to={item.to}
              end={item.to === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  'flex items-baseline gap-5 py-3 font-display text-4xl font-light tracking-tight transition-colors sm:text-5xl',
                  isActive ? 'text-paper' : 'text-paper/50 hover:text-paper',
                )
              }
            >
              <span className="label-mono text-paper/40">{String(i + 1).padStart(2, '0')}</span>
              {item.label}
            </NavLink>
          </motion.div>
        ))}
      </nav>

      <div className="container-x flex flex-wrap items-end justify-between gap-6 border-t border-white/10 py-6 text-sm text-paper/60">
        <a href={site.phoneHref} className="transition-colors hover:text-paper">
          {site.phoneDisplay}
        </a>
        <a href={'mailto:' + site.email} className="transition-colors hover:text-paper">
          {site.email}
        </a>
        <span className="label-mono text-paper/40">
          {site.address.zip} {site.address.city}
        </span>
      </div>
    </motion.div>
  )
}
