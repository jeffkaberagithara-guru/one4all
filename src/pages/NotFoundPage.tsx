import { ButtonLink } from '../components/ui/buttons'
import { MaskReveal } from '../components/ui/Reveal'
import { usePageSeo } from '../hooks/usePageSeo'

export default function NotFoundPage() {
  usePageSeo({
    title: 'Seite nicht gefunden',
    path: '/404',
  })

  return (
    <section aria-label="Seite nicht gefunden" className="container-x flex min-h-[72vh] flex-col justify-center py-32">
      <p className="label-mono text-muted">Fehler 404</p>
      <MaskReveal delay={0.05}>
        <h1 className="h-display mt-8 font-display">404</h1>
      </MaskReveal>
      <p className="lead mt-8 max-w-md">
        Diese Seite wurde nicht gefunden. Möglicherweise wurde sie verschoben oder der Link ist
        veraltet.
      </p>
      <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
        <ButtonLink to="/">Zur Startseite</ButtonLink>
        <ButtonLink to="/kontakt" variant="ghost">
          Kontakt aufnehmen
        </ButtonLink>
      </div>
    </section>
  )
}
