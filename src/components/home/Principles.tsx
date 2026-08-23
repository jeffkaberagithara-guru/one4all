import { Reveal, MaskReveal } from '../ui/Reveal'
import { SectionLabel } from '../ui/SectionLabel'

const principles = [
  {
    num: '01',
    title: 'Herstellerunabhängig',
    copy: 'Im Mittelpunkt steht die passende Technologie – nicht die Bindung an einen bestimmten Hersteller.',
  },
  {
    num: '02',
    title: 'Technische Erfahrung',
    copy: 'Mehr als 25 Jahre Erfahrung bilden die Grundlage für die technische Arbeit des Unternehmens.',
  },
  {
    num: '03',
    title: 'Projektbegleitung',
    copy: 'Von der Planung über die Umsetzung bis zur Inbetriebnahme und technischen Betreuung.',
  },
  {
    num: '04',
    title: 'Mobile Werkstatt',
    copy: 'Für technische Einsätze steht eine modern ausgestattete mobile Werkstätte zur Verfügung.',
  },
]

export function Principles() {
  return (
    <section aria-labelledby="warum-heading" className="bg-surface py-24 lg:py-36">
      <div className="container-x">
        <SectionLabel index="05" title="Warum One4All" />

        <MaskReveal delay={0.05}>
          <h2 id="warum-heading" className="h-section mt-12 font-display lg:mt-16">
            Technik braucht
            <br />
            Erfahrung.
          </h2>
        </MaskReveal>

        <div className="mt-14 grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:mt-24">
          {principles.map((p, i) => (
            <Reveal
              key={p.num}
              delay={i * 0.08}
              className="group border-t border-line py-10 sm:odd:pr-10 sm:even:border-l sm:even:pl-10 lg:py-14"
            >
              <span className="font-display text-6xl font-light tracking-tight text-line transition-colors duration-500 group-hover:text-steel lg:text-7xl">
                {p.num}
              </span>
              <h3 className="label-caps mt-8 text-ink">{p.title}</h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{p.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
