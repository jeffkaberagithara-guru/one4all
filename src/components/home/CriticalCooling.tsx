import { ButtonLink } from '../ui/buttons'
import { MediaFrame } from '../ui/MediaFrame'
import { Reveal } from '../ui/Reveal'
import { images } from '../../data/images'

export function CriticalCooling() {
  return (
    <section aria-labelledby="kritisch-heading" className="bg-coal text-paper">
      <div className="container-x border-b border-white/10 py-20 lg:py-28">
        <p className="label-mono text-paper/50">EDV &amp; Prozesskühlung</p>

        <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-12 lg:gap-x-8">
          <Reveal className="sm:col-span-7">
            <h2 id="kritisch-heading" className="font-display text-[clamp(2rem,4.2vw,3.75rem)] font-light leading-[1.05] tracking-tight">
              Kritische Kühlung
              <br />
              braucht Verfügbarkeit.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="flex flex-col items-start justify-end gap-8 sm:col-span-4 sm:col-start-9">
            <p className="text-base leading-relaxed text-paper/60">
              Für EDV-Kühlung und Prozesskühlung ist ein 24/365-Störungsdienst nach gesonderter
              Vereinbarung möglich.
            </p>
            <ButtonLink to="/kontakt" variant="outlineLight">
              Service anfragen
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-10 lg:mt-14">
          <MediaFrame
            variant="control"
            src={images.criticalCooling}
            alt="Anlagentechnik der EDV- und Prozesskühlung von One4All"
            ratio="2 / 1"
            caption="EDV-Kühlung — Anlagentechnik"
            className="bg-transparent"
          />
        </Reveal>
      </div>
    </section>
  )
}
