import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { MediaFrame } from '../ui/MediaFrame'
import { Reveal, MaskReveal } from '../ui/Reveal'
import { SectionLabel } from '../ui/SectionLabel'
import { images } from '../../data/images'

const focusAreas = [
  { word: 'Direktverdampfung.', to: '/leistungen/klimatechnik', align: '' },
  { word: 'VRF.', to: '/leistungen/vrf-systeme', align: 'lg:text-right' },
  { word: 'Gewerbekälte.', to: '/leistungen/gewerbekaelte', align: 'lg:pl-24' },
]

export function Specialization() {
  return (
    <section aria-labelledby="fokus-heading" className="bg-surface py-20 lg:py-28">
      <div className="container-x">
        <SectionLabel index="03" title="Spezialisierung" />

        <MaskReveal delay={0.05}>
          <h2 id="fokus-heading" className="h-section mt-12 font-display lg:mt-16">
            Unser Fokus.
          </h2>
        </MaskReveal>

        <div className="mt-10 lg:mt-14">
          {focusAreas.map((area, i) => (
            <div key={area.word} className="border-t border-line last:border-b">
              <Link
                to={area.to}
                className={
                  'group flex items-center justify-between gap-6 py-6 lg:py-8 ' + area.align
                }
              >
                <MaskReveal delay={0.08 * i}>
                  <span className="block font-display text-[clamp(2.5rem,8vw,7.5rem)] font-light leading-none tracking-tight text-ink transition-colors duration-500 group-hover:text-muted lg:inline-block">
                    {area.word}
                  </span>
                </MaskReveal>
                <ArrowUpRight
                  size={30}
                  strokeWidth={1}
                  aria-hidden
                  className="shrink-0 text-muted opacity-0 transition-all duration-500 ease-out group-hover:text-ink group-hover:opacity-100"
                />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-x-8">
          <Reveal className="lg:col-span-8">
            <MediaFrame
              variant="units"
              ratio="16 / 9"
              alt="VRF-Außeneinheitentechnik – Schwerpunkt der One4All Projektarbeit"
              src={images.focusUnits}
              caption="Schwerpunkt Technik"
            />
          </Reveal>
          <Reveal delay={0.15} className="flex items-end lg:col-span-4">
            <p className="lead max-w-sm">
              Neben diesen Schwerpunkten betreut One4All auch Kaltwassererzeuger und
              Wärmepumpensysteme.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
