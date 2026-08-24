import { Reveal } from '../ui/Reveal'

export function Testimonial() {
  return (
    <section aria-labelledby="kundenstimme-heading" className="bg-coal text-paper">
      <div className="container-x py-20 lg:py-28">
        <p id="kundenstimme-heading" className="label-mono text-paper/50">
          Kundenstimme
        </p>

        <Reveal delay={0.1}>
          <blockquote className="mt-12 max-w-4xl lg:mt-16">
            <p className="font-display text-[clamp(1.9rem,4.5vw,3.75rem)] font-light leading-[1.15] tracking-tight">
              „Absolutely professional team.“
            </p>
            <footer className="mt-10 flex items-center gap-4">
              <span className="h-px w-10 bg-paper/40" aria-hidden />
              <cite className="text-sm not-italic text-paper/70">
                WilliGF <span aria-hidden>·</span> 04.07.2024
              </cite>
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
