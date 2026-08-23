import { PageHeader } from './partials/PageHeader'
import { site } from '../data/site'
import { usePageSeo } from '../hooks/usePageSeo'
import type { ReactNode } from 'react'

function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-line py-10">
      <h2 className="label-caps text-ink">{title}</h2>
      <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted">{children}</div>
    </section>
  )
}

export function ImpressumPage() {
  usePageSeo({
    title: 'Impressum',
    description:
      'Impressum und Unternehmensangaben von One4All Kälte & Klimatechnik e.U., Alszeile 117/2/21, 1170 Wien.',
    path: '/impressum',
  })

  return (
    <>
      <PageHeader index="R" label="Rechtliches" title="Impressum" />
      <div className="container-x max-w-3xl py-16 lg:py-24">
        <LegalSection title="Angaben gemäß § 5 ECG">
          <p>
            {site.legalName}
            <br />
            Inhaber: {site.founder}
            <br />
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}
            <br />
            {site.address.country}
          </p>
        </LegalSection>

        <LegalSection title="Kontakt">
          <p>
            Telefon: {site.phoneDisplay}
            <br />
            E-Mail: {site.email}
          </p>
        </LegalSection>

        <LegalSection title="Unternehmensangaben">
          <p>
            Unternehmensgegenstand: Kälte- und Klimatechnik sowie Projektüberwachung und
            -betreuung
            <br />
            Inhaber: {site.founder}
            <br />
            Gründung: 24.03.2017
            <br />
            Firmenbuchnummer: {site.fn}
            <br />
            Firmenbuchgericht: Handelsgericht Wien
            <br />
            Umsatzsteuer-Identifikationsnummer: ATU72220768
          </p>
        </LegalSection>

        <LegalSection title="Rechtsvorschriften">
          <p>
            Es gelten die Bestimmungen der österreichischen Gewerbeordnung, abrufbar unter
            www.ris.bka.gv.at.
          </p>
        </LegalSection>
      </div>
    </>
  )
}

export function DatenschutzPage() {
  usePageSeo({
    title: 'Datenschutz',
    description:
      'Datenschutzhinweise von One4All Kälte & Klimatechnik e.U. – Umgang mit Anfragedaten, Hosting-Logs und Ihren DSGVO-Rechten.',
    path: '/datenschutz',
  })

  return (
    <>
      <PageHeader index="R" label="Rechtliches" title="Datenschutz" />
      <div className="container-x max-w-3xl py-16 lg:py-24">
        <LegalSection title="Verantwortlicher">
          <p>
            {site.legalName}
            <br />
            {site.address.street}, {site.address.zip} {site.address.city}
            <br />
            Telefon: {site.phoneDisplay}
            <br />
            E-Mail: {site.email}
          </p>
        </LegalSection>

        <LegalSection title="Umgang mit Ihren Daten">
          <p>
            Diese Website verwendet keine Cookies und kein Tracking. Bei Nutzung des Kontaktformulars
            werden die von Ihnen angegebenen Daten ausschließlich zur Bearbeitung Ihrer Anfrage
            verarbeitet (Art 6 Abs 1 lit b bzw. f DSGVO). Nach Abschluss der Anfrage werden die Daten
            gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
          </p>
        </LegalSection>

        <LegalSection title="Hosting / Server-Logfiles">
          <p>
            Der Hosting-Provider erhebt und speichert automatisch Informationen in sogenannten
            Server-Logfiles (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs). Diese Daten sind nicht
            bestimmten Personen zuordenbar und werden nach kurzer Zeit gelöscht.
          </p>
        </LegalSection>

        <LegalSection title="Ihre Rechte">
          <p>
            Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch zu. Erreichen Sie
            uns dazu unter der oben angeführten Adresse. Zudem besteht ein Beschwerderecht bei der
            Datenschutzbehörde, Österreich.
          </p>
        </LegalSection>
      </div>
    </>
  )
}
