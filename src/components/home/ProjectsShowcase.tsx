import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../../data/projects'
import { projects } from '../../data/projects'
import { MediaFrame } from '../ui/MediaFrame'
import { Reveal, MaskReveal } from '../ui/Reveal'
import { SectionLabel } from '../ui/SectionLabel'
import { cn } from '../../lib/utils'

interface ProjectCardProps {
  project: Project
  ratio?: string
  className?: string
}

export function ProjectCard({ project, ratio = '4 / 3', className }: ProjectCardProps) {
  return (
    <Link
      to={'/projekte/' + project.slug}
      className={cn('group block', className)}
      aria-label={'Projekt: ' + project.title + ' – Kategorie ' + project.category}
    >
      <MediaFrame
        variant={project.heroVariant}
        alt={'Illustration zu ' + project.title + ' (' + project.category + ')'}
        ratio={ratio}
      />
      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <p className="label-mono text-muted">
            Projekt {project.num} <span aria-hidden>·</span> {project.category}
          </p>
          <h3 className="mt-3 font-display text-2xl font-light tracking-tight transition-colors duration-300 group-hover:text-muted">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-muted">
            {project.meta.standort} <span aria-hidden>·</span> {project.meta.system}
          </p>
        </div>
        <span
          aria-hidden
          className="mt-1 shrink-0 opacity-0 transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
        >
          <ArrowUpRight size={18} strokeWidth={1.5} />
        </span>
      </div>
    </Link>
  )
}

export function ProjectsShowcase() {
  const [first, second, third] = projects

  return (
    <section id="projekte" aria-labelledby="projekte-heading" className="scroll-mt-28 py-24 lg:py-36">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <SectionLabel index="04" title="Projekte" />
            <MaskReveal delay={0.05}>
              <h2 id="projekte-heading" className="h-section mt-12 font-display lg:mt-16">
                Technik
                <br />
                in der Praxis.
              </h2>
            </MaskReveal>
          </div>
          <Reveal delay={0.15}>
            <Link
              to="/projekte"
              className="group u-link inline-flex items-center gap-2 pb-1 text-[12px] font-medium uppercase tracking-caps"
            >
              Alle Projekte
              <ArrowUpRight
                size={14}
                strokeWidth={1.75}
                aria-hidden
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-12 lg:mt-24">
          {first && (
            <Reveal className="md:col-span-7">
              <ProjectCard project={first} ratio="16 / 11" />
            </Reveal>
          )}
          {second && (
            <Reveal delay={0.12} className="md:col-span-5 md:mt-20">
              <ProjectCard project={second} ratio="4 / 5" />
            </Reveal>
          )}
          {third && (
            <Reveal className="md:col-span-5 md:col-start-3">
              <ProjectCard project={third} ratio="4 / 3" />
            </Reveal>
          )}
          <Reveal delay={0.12} className="flex items-end md:col-span-5 md:col-start-9">
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Beispielhafte Projektdarstellung. Referenzdetails zu konkreten Objekten geben wir auf
              Anfrage gerne weiter.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
