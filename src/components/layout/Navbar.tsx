import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'
import { navItems } from '../../data/navigation'
import { site } from '../../data/site'
import { cn } from '../../lib/utils'
import { MobileMenu } from './MobileMenu'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [menuOpen])

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
      'relative pb-1 text-[12px] font-medium uppercase tracking-caps transition-colors duration-300',
      'after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-left after:bg-current after:content-[""] after:transition-transform after:duration-300',
      isActive ? 'text-ink after:scale-x-100' : 'text-muted hover:text-ink after:scale-x-0',
    )

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out',
          scrolled && !menuOpen
            ? 'border-b border-line bg-paper/90 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <div className="container-x flex h-20 items-center justify-between gap-6 lg:h-24">
          <Link to="/" className="leading-none" aria-label="One4all Kälte und Klimatechnik – Startseite">
            <span className="block font-display text-sm font-semibold uppercase tracking-wider2">
              ONE4ALL
            </span>
            <span className="mt-1.5 block font-mono text-[9px] uppercase tracking-wider2 text-muted">
              Kälte &amp; Klimatechnik
            </span>
          </Link>

          <nav aria-label="Hauptnavigation" className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClasses}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 border-b border-ink/60 pb-0.5 text-[12px] font-medium tracking-caps transition-colors duration-300 hover:border-ink md:inline-flex"
              aria-label={'Anrufen: ' + site.phoneDisplay}
            >
              <Phone size={13} strokeWidth={1.75} aria-hidden />
              {site.phoneDisplay}
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-caps lg:hidden"
            >
              <Menu size={18} strokeWidth={1.5} aria-hidden />
              <span>Menü</span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
