import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { getService, services } from '../data/services'
import { MediaFrame } from '../components/ui/MediaFrame'
import { Reveal, MaskReveal } from '../components/ui/Reveal'
import { ButtonLink } from '../components/ui/buttons'
import { BackLink } from './partials/BackLink'
import { ContactSection } from '../components/home/ContactSection'
import NotFoundPage from './NotFoundPage'
import { usePageSeo } from '../hooks/usePageSeo'

interface ServiceDetailPageProps {
  slug: string
}

export default function ServiceDetailPage({ slug }: ServiceDetailPageProps) {
  const service = getService(slug)

  usePageSeo({
    title: service ? service.name : 'Leistung',
    description: service ? service.tagline + ' – One4All Kälte & Klimatechnik e.U., Wien.' : undefined,
    path: service ? '/leistungen/' + service.slug : '/leistungen',
  })

  if (!service) {
    return <NotFoundPage />
  }

  const index = services.findIndex((s) => s.slug === service.slug)
  const next = services[(index + 1) % services.length]

  return (
    <>
      <header className="pt-36 lg:pt-44">
        <div className="container-x">
          <BackLink to="/leistungen">Alle Leistungen</BackLink>

          <p className="label-mono mt-10 text-muted">Leistung {service.num}</p>
          <MaskReveal delay={0.05}>
            <h1 className="h-section mt-6 font-display">{service.name}</h1>
          </MaskReveal>
          <Reveal delay={0.18}>
            <p className="lead mt-8 max-w-2xl">{service.tagline}</p>
          </Reveal>
        </div>
      </header>

      <section aria-label="Überblick" className="py-16 lg:py-24">
        <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-5">
            <Reveal>
              <MediaFrame
                variant={service.variant}
                src={service.image}
                alt={'Praxisaufnahme zum Leistungsbereich ' + service.name}
                ratio="4 / 5"
                caption={'Leistung ' + service.num}
              />
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {service.body.map((paragraph, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p className="lead mb-6 max-w-xl">{paragraph}</p>
              </Reveal>
            ))}

            <Reveal delay={0.25}>
              <h2 className="label-caps mt-12 border-t border-line pt-8 text-ink">Leistungen</h2>
              <ul className="mt-6 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                {service.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex items-baseline gap-3 border-b border-line py-3 text-sm text-muted"
                  >
                    <span aria-hidden className="text-[10px] text-steel">
                      +
                    </span>
                    {capability}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.3} className="mt-12">
              <ButtonLink to="/kontakt">Projekt anfragen</ButtonLink>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-label="Nächste Leistung" className="border-t border-line bg-surface">
        <Link to={'/leistungen/' + next.slug} className="group block py-14 lg:py-20">
          <div className="container-x flex items-center justify-between gap-8">
            <span>
              <span className="label-mono block text-muted">Nächste Leistung</span>
              <span className="mt-4 block font-display text-3xl font-light tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-2 sm:text-4xl">
                {next.name}
              </span>
            </span>
            <ArrowUpRight
              size={28}
              strokeWidth={1}
              aria-hidden
              className="shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink"
            />
          </div>
        </Link>
      </section>

      <ContactSection />
    </>
  )
}
