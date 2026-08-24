import { ArrowDown } from 'lucide-react'
import { Reveal, MaskReveal } from '../ui/Reveal'
import { MediaFrame } from '../ui/MediaFrame'
import { images } from '../../data/images'

const stages = ['Bestand', 'Analyse', 'Optimierung', 'Betrieb']

export function Optimization() {
  return (
    <section aria-labelledby="optimierung-heading" className="bg-surface py-20 lg:py-28">
      <div className="container-x grid grid-cols-1 gap-12 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-6">
          <MaskReveal>
            <h2 id="optimierung-heading" className="h-section font-display">
              Bestehende Anlagen
              <br />
              besser nutzen.
            </h2>
          </MaskReveal>
          <Reveal delay={0.15}>
            <p className="lead mt-8 max-w-md">
              One4All überprüft bestehende Objekte und Anlagen und unterstützt bei der Optimierung
              von Betriebskosten.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="sm:col-span-5 sm:col-start-8">
          <ol className="mx-auto flex max-w-xs flex-col items-stretch lg:ml-auto lg:mr-0" aria-label="Prozess der Betriebsoptimierung">
            {stages.map((stage, i) => (
              <li key={stage} className="flex flex-col items-stretch">
                <span
                  className={
                    'border px-6 py-4 text-center font-mono text-[11px] uppercase tracking-wider2 ' +
                    (i === stages.length - 1 ? 'border-ink bg-ink text-paper' : 'border-line bg-paper text-ink')
                  }
                >
                  {stage}
                </span>
                {i < stages.length - 1 && (
                  <span aria-hidden className="flex justify-center py-2 text-muted">
                    <ArrowDown size={14} strokeWidth={1.5} />
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="container-x mt-10 lg:mt-14">
        <MediaFrame
          variant="room"
          src={images.optimizationPlant}
          alt="Bestehende Anlagentechnik im Betrieb – Wartung und Optimierung durch One4All"
          ratio="2 / 1"
          caption="Betrieb — Anlagentechnik"
        />
      </Reveal>
    </section>
  )
}
