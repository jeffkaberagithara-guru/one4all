import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'
import { facts } from '../../data/site'
import { EASE } from '../../lib/motion'
import { Reveal } from '../ui/Reveal'

function FactValue({ value }: { value: string }) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const raw = /^\d+$/.test(value) ? value : value.endsWith('+') ? value.slice(0, -1) : null
  const suffix = value.endsWith('+') ? '+' : ''
  const target = raw !== null ? Number(raw) : null
  const [display, setDisplay] = useState(() => (target === null || reduced ? value : '0'))

  useEffect(() => {
    if (target === null || reduced || !inView) return
    const controls = animate(0, target, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (v) => setDisplay(String(Math.round(v))),
    })
    return () => controls.stop()
  }, [inView, reduced, target])

  return (
    <span ref={ref} className={target !== null ? 'tabular-nums' : undefined}>
      {display}
      {suffix}
    </span>
  )
}

export function FactsStrip() {
  return (
    <section aria-label="Unternehmensdaten" className="border-b border-line bg-surface">
      <div className="container-x grid grid-cols-2 lg:grid-cols-4">
        {facts.map((fact, i) => (
          <Reveal
            key={fact.label}
            delay={i * 0.08}
            className={
              'flex flex-col gap-3 border-line py-10 lg:py-14' +
              (i % 2 === 1 ? ' border-l pl-6 sm:pl-8 lg:pl-10' : '') +
              (i > 1 ? ' max-lg:border-t max-lg:pt-8 max-lg:pb-8' : '')
            }
          >
            <span className="font-display text-4xl font-light tracking-tight text-ink sm:text-5xl">
              <FactValue value={fact.value} />
            </span>
            <span className="label-caps text-muted">{fact.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
