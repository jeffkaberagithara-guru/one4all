import { Mail, MapPin, Phone } from 'lucide-react'
import { ButtonLink } from '../ui/buttons'
import { Reveal, MaskReveal } from '../ui/Reveal'
import { SectionLabel } from '../ui/SectionLabel'
import { site } from '../../data/site'

export function ContactSection() {
  return (
    <section id="kontakt" aria-labelledby="kontakt-heading" className="scroll-mt-28 py-24 lg:py-36">
      <div className="container-x">
        <SectionLabel index="08" title="Kontakt" />

        <MaskReveal delay={0.05}>
          <h2 id="kontakt-heading" className="h-section mt-12 max-w-5xl font-display lg:mt-16">
            Sprechen wir
            <br />
            über Ihr Projekt.
          </h2>
        </MaskReveal>

        <div className="mt-14 grid grid-cols-1 gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-x-8">
          <Reveal delay={0.15} className="lg:col-span-6">
            <p className="lead max-w-lg">
              Sie planen eine neue Kälte- oder Klimaanlage, benötigen Unterstützung bei einem
              bestehenden System oder möchten eine technische Lösung besprechen?
            </p>
            <div className="mt-12">
              <ButtonLink to="/kontakt">Anfrage senden</ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.25} className="lg:col-span-5 lg:col-start-8">
            <address className="not-italic">
              <ul className="space-y-7 border-t border-line pt-10">
                <li>
                  <a href={site.phoneHref} className="group flex items-baseline gap-4">
                    <Phone size={16} strokeWidth={1.5} aria-hidden className="translate-y-0.5 text-muted transition-colors group-hover:text-ink" />
                    <span>
                      <span className="label-mono block text-muted">Telefon</span>
                      <span className="u-link mt-1 inline-block font-display text-xl font-light tracking-tight sm:text-2xl">
                        {site.phoneDisplay}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={'mailto:' + site.email} className="group flex items-baseline gap-4">
                    <Mail size={16} strokeWidth={1.5} aria-hidden className="translate-y-0.5 text-muted transition-colors group-hover:text-ink" />
                    <span>
                      <span className="label-mono block text-muted">E-Mail</span>
                      <span className="u-link mt-1 inline-block break-all font-display text-xl font-light tracking-tight sm:text-2xl">
                        {site.email}
                      </span>
                    </span>
                  </a>
                </li>
                <li className="flex items-baseline gap-4">
                  <MapPin size={16} strokeWidth={1.5} aria-hidden className="translate-y-0.5 text-muted" />
                  <span>
                    <span className="label-mono block text-muted">Adresse</span>
                    <span className="mt-1 block font-display text-xl font-light tracking-tight sm:text-2xl">
                      {site.address.street}
                      <br />
                      {site.address.zip} {site.address.city}
                    </span>
                  </span>
                </li>
              </ul>
            </address>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
