import { mapDirectionsHref, mapEmbedSrc } from '../../data/navigation'
import { site } from '../../data/site'
import { Reveal, MaskReveal } from '../ui/Reveal'

export function MapBlock() {
  return (
    <section aria-labelledby="standort-heading" className="border-t border-line bg-surface py-24 lg:py-32">
      <div className="container-x">
        <MaskReveal>
          <h2 id="standort-heading" className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-light tracking-tight">
            Standort
          </h2>
        </MaskReveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-8">
          <Reveal delay={0.1} className="flex flex-col justify-between gap-10 lg:col-span-4">
            <div>
              <p className="font-display text-5xl font-light tracking-tight">ONE4ALL</p>
              <p className="label-mono mt-4 text-muted">1170 Wien</p>
            </div>
            <address className="text-sm not-italic leading-relaxed text-muted">
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
              <br />
              {site.address.country}
            </address>
            <a
              href={mapDirectionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group u-link inline-flex items-center gap-2 self-start pb-1 text-[12px] font-medium uppercase tracking-caps"
            >
              Route planen
              <span aria-hidden className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.18} className="lg:col-span-8">
            <div className="relative border border-line bg-paper grayscale contrast-[1.05]">
              <iframe
                title="Karte: Standort One4All Kälte und Klimatechnik in 1170 Wien"
                src={mapEmbedSrc}
                loading="lazy"
                className="h-[340px] w-full md:h-[420px]"
              />
              <span className="label-mono pointer-events-none absolute bottom-4 left-4 border border-line bg-paper px-3 py-1.5 text-ink/70">
                ONE4ALL · Alszeile 117/2/2
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
