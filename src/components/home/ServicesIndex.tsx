import { useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { ArrowUpRight, Plus } from 'lucide-react'
import { services } from '../../data/services'
import { cn } from '../../lib/utils'
import { MediaFrame } from '../ui/MediaFrame'
import { Reveal, MaskReveal } from '../ui/Reveal'
import { SectionLabel } from '../ui/SectionLabel'

export function ServicesIndex() {
  const listRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState<number | null>(null)
  const [expanded, setExpanded] = useState<number | null>(null)
  const reduced = useReducedMotion()

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const px = useSpring(mx, { stiffness: 160, damping: 22, mass: 0.45 })
  const py = useSpring(my, { stiffness: 160, damping: 22, mass: 0.45 })

  const handleMove = (e: MouseEvent) => {
    if (reduced) return
    const rect = listRef.current?.getBoundingClientRect()
    if (!rect) return
    mx.set(e.clientX - rect.left)
    my.set(e.clientY - rect.top)
  }

  return (
    <section id="leistungen" aria-labelledby="leistungen-heading" className="scroll-mt-28 py-24 lg:py-36">
      <div className="container-x">
        <SectionLabel index="02" title="Leistungen" />

        <div className="mt-12 flex flex-col justify-between gap-8 lg:mt-16 lg:flex-row lg:items-end">
          <MaskReveal>
            <h2 id="leistungen-heading" className="h-section font-display">
              Was wir
              <br />
              leisten.
            </h2>
          </MaskReveal>
          <Reveal delay={0.15}>
            <p className="lead max-w-sm">
              Zwölf Leistungsbereiche, ein Anspruch: die technisch passende Lösung für jedes Projekt.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-14 border-t border-line lg:mt-20" />

      {/* Mobile / Tablet: Accordion */}
      <div className="container-x lg:hidden">
        {services.map((service) => {
          const isOpen = expanded === Number(service.num) - 1
          return (
            <div key={service.slug} className="border-b border-line">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setExpanded(isOpen ? null : Number(service.num) - 1)}
                className="flex w-full items-center justify-between gap-4 py-6 text-left"
              >
                <span className="flex items-baseline gap-5">
                  <span className="label-mono text-muted">{service.num}</span>
                  <span className="font-display text-xl font-normal tracking-tight">{service.name}</span>
                </span>
                <Plus
                  size={18}
                  strokeWidth={1.5}
                  aria-hidden
                  className={cn('shrink-0 text-muted transition-transform duration-300', isOpen && 'rotate-45')}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-7 pl-10 pr-2">
                      <p className="text-sm leading-relaxed text-muted">{service.tagline}</p>
                      <MediaFrame
                        variant={service.variant}
                        alt={'Technische Illustration zu ' + service.name}
                        ratio="16 / 10"
                        className="mt-5"
                      />
                      <Link
                        to={'/leistungen/' + service.slug}
                        className="group mt-5 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-caps text-ink"
                      >
                        Leistung ansehen
                        <ArrowUpRight
                          size={14}
                          strokeWidth={1.75}
                          aria-hidden
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      {/* Desktop: interactive rows with cursor-following preview */}
      <div
        ref={listRef}
        onMouseMove={handleMove}
        onMouseLeave={() => setHovered(null)}
        className="relative hidden lg:block"
      >
        {!reduced && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 z-20 hidden xl:block"
            style={{ x: px, y: py }}
          >
            <AnimatePresence mode="popLayout">
              {hovered !== null && services[hovered] && (
                <motion.div
                  key={services[hovered].slug}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="-translate-x-1/2 -translate-y-1/2"
                >
                  <MediaFrame
                    variant={services[hovered].variant}
                    alt=""
                    ratio="3 / 2"
                    caption={services[hovered].name.toUpperCase()}
                    className="w-[26rem] shadow-none"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        <ul>
          {services.map((service, i) => (
            <li key={service.slug} className="border-b border-line">
              <Link
                to={'/leistungen/' + service.slug}
                onMouseEnter={() => setHovered(i)}
                onFocus={() => setHovered(i)}
                onBlur={() => setHovered(null)}
                className="group grid grid-cols-12 items-center gap-4 bg-transparent py-9 pl-6 pr-6 transition-colors duration-300 hover:bg-surface focus-visible:bg-surface xl:pl-8 xl:pr-8"
                aria-label={service.name + ' – ' + service.tagline}
              >
                <span className="label-mono col-span-1 text-muted transition-colors duration-300 group-hover:text-ink">
                  {service.num}
                </span>
                <span className="col-span-5 font-display text-3xl font-light tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-2 xl:text-4xl">
                  {service.name}
                </span>
                <span
                  className={cn(
                    'col-span-5 pr-8 text-sm text-muted transition-all duration-500 ease-out',
                    'opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100',
                  )}
                >
                  {service.tagline}
                </span>
                <span className="col-span-1 flex justify-end">
                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.25}
                    aria-hidden
                    className="transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
