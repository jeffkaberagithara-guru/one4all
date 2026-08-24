import { ContactForm } from '../components/contact/ContactForm'
import { MapBlock } from '../components/contact/MapBlock'
import { PageHeader } from './partials/PageHeader'
import { MediaFrame } from '../components/ui/MediaFrame'
import { Reveal } from '../components/ui/Reveal'
import { site } from '../data/site'
import { images } from '../data/images'
import { usePageSeo } from '../hooks/usePageSeo'

const faqs = [
  {
    q: 'Arbeitet One4All herstellerunabhängig?',
    a: 'Ja. Für jedes Projekt wird die Technologie ausgewählt, die die Aufgabe technisch und wirtschaftlich am besten erfüllt – unabhängig vom Hersteller.',
  },
  {
    q: 'Gibt es einen 24/365-Störungsdienst?',
    a: 'Für EDV-Kühlung und Prozesskühlung ist ein 24/365-Störungsdienst nach gesonderter Vereinbarung möglich. Sprechen Sie uns an.',
  },
  {
    q: 'Bietet One4All Schulungen für Anlagen an?',
    a: 'Nach Vereinbarung bietet One4All spezifische Anlagen- und Systemschulungen an – vermittelt vom Praktiker, angewendet am konkreten System.',
  },
  {
    q: 'Dokumentiert One4All auch bestehende Anlagen?',
    a: 'Ja. Systemunterlagen werden sowohl für neue als auch für bereits bestehende Anlagen und Systeme erstellt.',
  },
]

export default function ContactPage() {
  usePageSeo({
    title: 'Kontakt',
    description:
      'Kontakt zu One4All Kälte & Klimatechnik e.U. in Wien: 01 9711147, office@one4all-klimatechnik.com, Alszeile 117/2/21, 1170 Wien. Projektanfrage direkt online.',
    path: '/kontakt',
  })

  return (
    <>
      <PageHeader
        index="08"
        label="Kontakt"
        title={
          <>
            Sprechen wir
            <br />
            über Ihr Projekt.
          </>
        }
        intro="Sie planen eine neue Kälte- oder Klimaanlage, benötigen Unterstützung bei einem bestehenden System oder möchten eine technische Lösung besprechen?"
      />

      <section aria-label="Anfrage senden" className="py-16 lg:py-24">
        <div className="container-x grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="label-mono text-muted">Direkt</p>
              <ul className="mt-8 space-y-8 border-t border-line pt-10">
                <li>
                  <span className="label-caps block text-muted">Telefon</span>
                  <a
                    href={site.phoneHref}
                    className="u-link mt-2 inline-block font-display text-2xl font-light tracking-tight sm:text-3xl"
                  >
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <span className="label-caps block text-muted">E-Mail</span>
                  <a
                    href={'mailto:' + site.email}
                    className="u-link mt-2 inline-block break-all font-display text-xl font-light tracking-tight sm:text-2xl"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <span className="label-caps block text-muted">Adresse</span>
                  <p className="mt-2 text-sm leading-relaxed">
                    {site.address.street}
                    <br />
                    {site.address.zip} {site.address.city}
                    <br />
                    {site.address.country}
                  </p>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <MediaFrame
                variant="macro"
                src={images.contactWorkshop}
                alt="One4All Kälte & Klimatechnik – Ihr Partner für Kälte und Klima in Wien"
                ratio="3 / 2"
                caption="Ihr Partner vor Ort"
                className="mt-12"
              />
            </Reveal>

            <Reveal delay={0.15}>
              <h2 className="label-caps mt-16 border-t border-line pt-10">Häufige Fragen</h2>
              <dl className="mt-6 space-y-8">
                {faqs.map((faq) => (
                  <div key={faq.q} className="border-b border-line pb-7">
                    <dt className="font-medium leading-snug">{faq.q}</dt>
                    <dd className="mt-3 max-w-md text-sm leading-relaxed text-muted">{faq.a}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div id="anfrage" className="scroll-mt-32 lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <h2 className="label-mono mb-10 text-muted">Ihr Projekt</h2>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <MapBlock />
    </>
  )
}
