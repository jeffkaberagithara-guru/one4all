import { AboutPreview } from '../components/home/AboutPreview'
import { FactsStrip } from '../components/home/FactsStrip'
import { Principles } from '../components/home/Principles'
import { FounderSection } from '../components/home/FounderSection'
import { ContactSection } from '../components/home/ContactSection'
import { PageHeader } from './partials/PageHeader'
import { MediaFrame } from '../components/ui/MediaFrame'
import { Reveal, MaskReveal } from '../components/ui/Reveal'
import { ButtonLink } from '../components/ui/buttons'
import { usePageSeo } from '../hooks/usePageSeo'
import { images } from '../data/images'

export default function AboutPage() {
  usePageSeo({
    title: 'Über uns',
    description:
      'One4All Kälte & Klimatechnik e.U. wurde 2017 von Robert Mierczynski gegründet. Herstellerunabhängige Kälte- und Klimatechnik aus Wien – mit über 25 Jahren technischer Erfahrung.',
    path: '/ueber-uns',
  })

  return (
    <>
      <PageHeader
        index="01"
        label="Über uns"
        title={
          <>
            Technik, die
            <br />
            weiterdenkt.
          </>
        }
        intro="Ein Unternehmen, das Technik nicht als Selbstzweck versteht – sondern als Grundlage für verlässlichen Betrieb."
      />

      <AboutPreview showLabel={false} heading="Das Unternehmen." subheading="Präzision als Standard." />

      <section aria-labelledby="anspruch-heading" className="border-y border-line bg-surface py-20 lg:py-28">
        <div className="container-x grid grid-cols-1 gap-10 sm:grid-cols-12 lg:gap-x-8">
          <div className="sm:col-span-7">
            <MaskReveal>
              <h2 id="anspruch-heading" className="font-display text-[clamp(1.9rem,3.6vw,3.25rem)] font-light leading-[1.15] tracking-tight">
                Nicht der Hersteller steht im Mittelpunkt.
                <br />
                Sondern die Aufgabe.
              </h2>
            </MaskReveal>
            <Reveal delay={0.15}>
              <p className="lead mt-8 max-w-xl">
                One4All ist herstellerunabhängig. Das bedeutet: Für jede Anforderung wird die
                Technologie ausgewählt, die die Aufgabe am besten erfüllt – technisch und
                wirtschaftlich. Nicht ein Produktkatalog bestimmt die Lösung, sondern das Projekt.
              </p>
            </Reveal>
            <Reveal delay={0.22} className="mt-10">
              <ButtonLink to="/leistungen">Leistungen ansehen</ButtonLink>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="flex sm:col-span-4 sm:col-start-9">
            <MediaFrame variant="plan" ratio={null} alt="One4All Kälte & Klimatechnik – Unternehmen und Technik" src={images.companyClaim} caption="Unternehmen" className="w-full aspect-[3/2] sm:aspect-auto" />
          </Reveal>
        </div>
      </section>

      <FactsStrip />
      <Principles />
      <FounderSection />
      <ContactSection />
    </>
  )
}
