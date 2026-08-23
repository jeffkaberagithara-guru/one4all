import { ServicesIndex } from '../components/home/ServicesIndex'
import { Specialization } from '../components/home/Specialization'
import { ContactSection } from '../components/home/ContactSection'
import { PageHeader } from './partials/PageHeader'
import { usePageSeo } from '../hooks/usePageSeo'

export default function ServicesPage() {
  usePageSeo({
    title: 'Leistungen',
    description:
      'Leistungen von One4All Kälte & Klimatechnik: Projektierung, Kältetechnik, Klimatechnik, VRF-Systeme, Kaltwassererzeuger, Wärmepumpen, Gewerbekälte, Wartung und Reparatur in Wien.',
    path: '/leistungen',
  })

  return (
    <>
      <PageHeader
        index="02"
        label="Leistungen"
        title={
          <>
            Was wir
            <br />
            leisten.
          </>
        }
        intro="Von der ersten Idee bis zur Inbetriebnahme und darüber hinaus – zwölf Leistungsbereiche entlang des gesamten Lebenszyklus einer Anlage."
      />
      <ServicesIndex />
      <Specialization />
      <ContactSection />
    </>
  )
}
