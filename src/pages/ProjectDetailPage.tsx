import { getProject } from '../data/projects'
import { MediaFrame } from '../components/ui/MediaFrame'
import { VideoFrame } from '../components/ui/VideoFrame'
import { Reveal, MaskReveal } from '../components/ui/Reveal'
import { ButtonLink } from '../components/ui/buttons'
import { BackLink } from './partials/BackLink'
import { ContactSection } from '../components/home/ContactSection'
import NotFoundPage from './NotFoundPage'
import { usePageSeo } from '../hooks/usePageSeo'

interface ProjectDetailPageProps {
  slug: string
}

const narrativeSections = [
  { key: 'challenge', title: 'Herausforderung' },
  { key: 'solution', title: 'Lösung' },
  { key: 'implementation', title: 'Umsetzung' },
  { key: 'result', title: 'Ergebnis' },
] as const

export default function ProjectDetailPage({ slug }: ProjectDetailPageProps) {
  const project = getProject(slug)

  usePageSeo({
    title: project ? project.title + ' – Projekt ' + project.num : 'Projekt',
    description: project
      ? project.category + ': ' + project.meta.system + '. Beispielhaftes Projekt von One4All Kälte & Klimatechnik e.U.'
      : undefined,
    path: project ? '/projekte/' + project.slug : '/projekte',
  })

  if (!project) {
    return <NotFoundPage />
  }

  return (
    <>
      <header className="pt-36 lg:pt-44">
        <div className="container-x">
          <BackLink to="/projekte">Alle Projekte</BackLink>

          <p className="label-mono mt-10 text-muted">
            Projekt {project.num} <span aria-hidden>·</span> {project.category}
          </p>
          <MaskReveal delay={0.05}>
            <h1 className="h-section mt-6 max-w-4xl font-display">{project.title}</h1>
          </MaskReveal>

          <Reveal delay={0.18}>
            <dl className="mt-12 grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['Projekt', project.meta.projekt],
                ['Standort', project.meta.standort],
                ['System', project.meta.system],
                ['Leistung', project.meta.leistung],
              ].map(([label, value]) => (
                <div key={label} className="border-b border-line py-5 pr-6 sm:border-r sm:last:border-r-0 sm:pl-6 sm:first:pl-0">
                  <dt className="label-caps text-muted">{label}</dt>
                  <dd className="mt-2 text-sm leading-relaxed">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </header>

      <Reveal delay={0.1} className="mt-16 lg:mt-20">
        <VideoFrame
          poster={project.heroVariant}
          alt={'Ansicht zu ' + project.title}
          image={project.heroImage}
          ratio="21 / 9"
          label={'Projekt — ' + project.num}
          className="max-h-[78vh]"
        />
      </Reveal>

      <section aria-label="Projektbeschreibung" className="py-20 lg:py-28">
        <div className="container-x grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="label-mono text-muted">Zum Projekt</p>
          </div>
          <div className="space-y-14 md:col-span-9">
            {narrativeSections.map((section) => (
              <Reveal key={section.key}>
                <h2 className="font-display text-2xl font-light tracking-tight">{section.title}</h2>
                <p className="lead mt-5 max-w-2xl">{project[section.key]}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Bildergalerie" className="bg-surface py-20 lg:py-28">
        <div className="container-x">
          <p className="label-mono mb-12 text-muted">Galerie</p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            {project.gallery.map((image, i) => (
              <Reveal
                key={i}
                delay={(i % 2) * 0.08}
                className={i === 0 ? 'md:col-span-7' : 'md:col-span-5'}
              >
                <MediaFrame variant={image.variant} src={image.image} alt={image.alt} ratio="4 / 3" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Kontakt zum Projekt" className="border-b border-line py-20 lg:py-24">
        <div className="container-x flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <h2 className="max-w-xl font-display text-[clamp(1.75rem,3vw,2.75rem)] font-light leading-tight tracking-tight">
            Ähnliches Projekt geplant?
          </h2>
          <ButtonLink to="/kontakt">Ähnliches Projekt besprechen</ButtonLink>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
