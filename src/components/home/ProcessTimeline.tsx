import { Reveal, MaskReveal } from '../ui/Reveal'
import { SectionLabel } from '../ui/SectionLabel'

const steps = [
  { num: '01', title: 'Anfrage', copy: 'Sie schildern Ihr Projekt und Ihre Anforderungen.' },
  { num: '02', title: 'Besichtigung', copy: 'Die technischen Voraussetzungen werden betrachtet.' },
  { num: '03', title: 'Planung', copy: 'Die passende technische Lösung wird entwickelt.' },
  { num: '04', title: 'Umsetzung', copy: 'Installation, Anpassung oder Reparatur.' },
  { num: '05', title: 'Inbetriebnahme', copy: 'Das System wird technisch in Betrieb genommen.' },
  { num: '06', title: 'Betreuung', copy: 'Wartung, Überprüfung und weitere technische Unterstützung.' },
]

export function ProcessTimeline() {
  return (
    <section aria-labelledby="ablauf-heading" className="py-24 lg:py-36">
      <div className="container-x">
        <SectionLabel index="06" title="Ablauf" />

        <MaskReveal delay={0.05}>
          <h2 id="ablauf-heading" className="h-section mt-12 font-display lg:mt-16">
            Von der
            <br />
            Anfrage zur Lösung.
          </h2>
        </MaskReveal>

        <ol className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-6 lg:mt-20">
          {steps.map((step, i) => (
            <li key={step.num} className="group border-t border-line pt-6">
              <Reveal delay={i * 0.06}>
                <span className="label-mono text-muted transition-colors duration-300 group-hover:text-ink">
                  {step.num}
                </span>
                <h3 className="label-caps mt-5 text-ink">{step.title}</h3>
                <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-muted">{step.copy}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
