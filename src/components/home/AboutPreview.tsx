import { ButtonLink } from '../ui/buttons'
import { MediaFrame } from '../ui/MediaFrame'
import { Reveal, MaskReveal } from '../ui/Reveal'
import { SectionLabel } from '../ui/SectionLabel'
import { images } from '../../data/images'

export function AboutPreview({
  showLabel = true,
  heading = 'Wer wir sind',
  subheading = 'Technik, die weiterdenkt.',
}: {
  showLabel?: boolean
  heading?: string
  subheading?: string
}) {
  return (
    <section id="ueber-uns" aria-labelledby="ueber-uns-heading" className="scroll-mt-28 py-20 lg:py-28">
      <div className="container-x">
        {showLabel ? <SectionLabel index="01" title="Über uns" /> : null}

        <MaskReveal delay={0.1}>
          <h2 id="ueber-uns-heading" className={'h-section font-display' + (showLabel ? ' mt-12 lg:mt-16' : '')}>
            {heading}
          </h2>
        </MaskReveal>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-12 lg:mt-14 lg:gap-x-8">
          <Reveal className="flex sm:col-span-6 lg:col-span-5">
            <MediaFrame
              variant="room"
              ratio={null}
              alt="One4All Kälte & Klimatechnik – Einblick in unsere Arbeit"
              src={images.aboutRoom}
              caption="Aus der Praxis"
              className="w-full aspect-[4/3] sm:aspect-auto"
            />
          </Reveal>

          <div className="flex flex-col justify-between gap-10 sm:col-span-6 lg:col-span-6 lg:col-start-7">
            <div>
              <MaskReveal delay={0.1}>
                <h3 className="font-display text-3xl font-light tracking-tight sm:text-4xl">
                  {subheading}
                </h3>
              </MaskReveal>
              <Reveal delay={0.18}>
                <p className="lead mt-8 max-w-xl">
                  One4All Kälte &amp; Klimatechnik e.U. wurde 2017 von Robert Mierczynski gegründet.
                  Das Unternehmen steht für professionelle Kälte- und Klimatechnik mit einem klaren
                  Anspruch: Für jedes Projekt soll die technisch und wirtschaftlich passende Lösung
                  gefunden werden.
                </p>
              </Reveal>
              <Reveal delay={0.26}>
                <p className="lead mt-6 max-w-xl">
                  Dabei steht nicht ein bestimmter Hersteller im Mittelpunkt, sondern die Technologie,
                  die für die jeweilige Aufgabe die beste Lösung bietet.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.3} className="border-t border-line pt-8">
              <ButtonLink to="/ueber-uns" variant="ghost">
                Mehr über One4All
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
