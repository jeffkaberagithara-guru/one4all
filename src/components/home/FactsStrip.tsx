import { facts } from '../../data/site'
import { Reveal } from '../ui/Reveal'

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
              {fact.value}
            </span>
            <span className="label-caps text-muted">{fact.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
