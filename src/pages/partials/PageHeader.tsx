import type { ReactNode } from 'react'
import { MaskReveal, Reveal } from '../../components/ui/Reveal'

interface PageHeaderProps {
  index: string
  label: string
  title: ReactNode
  intro?: string
}

export function PageHeader({ index, label, title, intro }: PageHeaderProps) {
  return (
    <header className="border-b border-line pt-32 lg:pt-40">
      <div className="container-x pb-12 lg:pb-16">
        <p className="label-mono text-muted">
          {index} <span aria-hidden>/</span> {label}
        </p>
        <MaskReveal delay={0.08}>
          <h1 className="h-section mt-8 font-display">{title}</h1>
        </MaskReveal>
        {intro ? (
          <Reveal delay={0.2}>
            <p className="lead mt-8 max-w-2xl">{intro}</p>
          </Reveal>
        ) : null}
      </div>
    </header>
  )
}
