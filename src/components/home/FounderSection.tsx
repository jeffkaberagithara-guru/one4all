import { MediaFrame } from '../ui/MediaFrame'
import { Reveal, MaskReveal } from '../ui/Reveal'
import { SectionLabel } from '../ui/SectionLabel'
import { site } from '../../data/site'

export function FounderSection() {
  return (
    <section aria-labelledby="gruender-heading" className="py-24 lg:py-36">
      <div className="container-x">
        <SectionLabel index="07" title="Gründer" />

        <div className="mt-12 grid grid-cols-1 gap-14 lg:mt-16 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-7">
            <MaskReveal delay={0.05}>
              <h2 id="gruender-heading" className="h-section font-display">
                {site.founder.split(' ')[0]}
                <br />
                {site.founder.split(' ').slice(1).join(' ')}.
              </h2>
            </MaskReveal>
            <Reveal delay={0.15}>
              <p className="label-caps mt-8 text-muted">Gründer / Inhaber</p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="lead mt-8 max-w-xl">
                One4All Kälte &amp; Klimatechnik e.U. wurde 2017 von Robert Mierczynski als
                eingetragenes Einzelunternehmen gegründet.
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <p className="lead mt-6 max-w-xl">
                Der Anspruch: Kälte- und Klimatechnik auf hohem technischen Niveau – mit einer
                konsequent bedarfsorientierten Auswahl der passenden Technologie.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-4 lg:col-start-9">
            <MediaFrame
              variant="plan"
              ratio="3 / 4"
              alt="Technische Unterlagen und Werkstattumgebung – atmosphärische Schwarzweiß-Darstellung statt Porträt"
              caption="Technik & Werkstatt"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
