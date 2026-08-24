import { projects } from '../data/projects'
import { ProjectCard } from '../components/home/ProjectsShowcase'
import { ContactSection } from '../components/home/ContactSection'
import { PageHeader } from './partials/PageHeader'
import { Reveal } from '../components/ui/Reveal'
import { usePageSeo } from '../hooks/usePageSeo'

export default function ProjectsPage() {
  usePageSeo({
    title: 'Projekte',
    description:
      'Projektbeispiele von One4All Kälte & Klimatechnik: Klimatechnik, VRF-Systeme, Kältetechnik und Wartung – technisch dokumentiert, herstellerunabhängig umgesetzt.',
    path: '/projekte',
  })

  return (
    <>
      <PageHeader
        index="04"
        label="Projekte"
        title={
          <>
            Technik
            <br />
            in der Praxis.
          </>
        }
        intro="Ein Auszug typischer Projektkonstellationen aus der täglichen Arbeit. Referenzdetails zu konkreten Objekten geben wir auf Anfrage gerne weiter."
      />

      <section aria-label="Projektübersicht" className="py-16 lg:py-24">
        <div className="container-x grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-12">
          {projects.map((project, i) => (
            <Reveal
              key={project.slug}
              delay={(i % 2) * 0.1}
              className={
                i % 4 === 0
                  ? 'md:col-span-7'
                  : i % 4 === 1
                    ? 'md:col-span-5 md:mt-12'
                    : i % 4 === 2
                      ? 'md:col-span-5 md:col-start-2'
                      : 'md:col-span-5 md:col-start-8 md:mt-12'
              }
            >
              <ProjectCard project={project} ratio={i % 4 === 0 ? '16 / 11' : i % 4 === 1 ? '1 / 1' : '4 / 3'} />
            </Reveal>
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  )
}
