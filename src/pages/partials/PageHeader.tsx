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
    <header className="border-b border-line pt-36 lg:pt-44">
      <div className="container-x pb-16 lg:pb-24">
        <p className="label-mono text-muted">
          {index} <span aria-hidden>/</span> {label}
        </p>
        <MaskReveal delay={0.08}>
          <h1 className="h-section mt-10 font-display">{title}</h1>
        </MaskReveal>
        {intro ? (
          <Reveal delay={0.2}>
            <p className="lead mt-10 max-w-2xl">{intro}</p>
          </Reveal>
        ) : null}
      </div>
    </header>
  )
}
