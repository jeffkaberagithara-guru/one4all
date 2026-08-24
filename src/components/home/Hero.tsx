import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { ButtonLink, TextButton } from '../ui/buttons'
import { VideoFrame } from '../ui/VideoFrame'
import { MaskReveal } from '../ui/Reveal'
import { EASE } from '../../lib/motion'
import { images } from '../../data/images'

const headline = ['Kälte.', 'Klima.', 'Präzision.']

export function Hero() {
  const reduced = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const mediaY = useTransform(scrollYProgress, [0, 1], ['-3%', '3%'])

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-28 lg:pt-36" aria-label="Intro">
      <div className="container-x relative z-10 grid grid-cols-1 items-end gap-10 pb-12 lg:grid-cols-12 lg:gap-x-8 lg:pb-16">
        <div className="lg:col-span-6">
          <motion.p
            className="label-mono text-muted"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            Kälte / Klima / Wien
          </motion.p>

          <h1 className="h-display mt-8 font-display">
            {headline.map((word, i) => (
              <MaskReveal key={word} delay={0.25 + i * 0.13} onLoad>
                {word}
              </MaskReveal>
            ))}
          </h1>

          <motion.p
            className="lead mt-10 max-w-md"
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.75 }}
          >
            Technische Lösungen für Kälte- und Klimatechnik – von der Projektierung bis zur
            Inbetriebnahme und darüber hinaus.
          </motion.p>

          <motion.div
            className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5"
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.9 }}
          >
            <ButtonLink to="/kontakt">Projekt anfragen</ButtonLink>
            <TextButton href="#leistungen" direction="down">
              Leistungen ansehen
            </TextButton>
          </motion.div>
        </div>

        <div className="lg:col-span-6 lg:self-stretch">
          <motion.div
            className="relative h-72 overflow-hidden sm:h-[44vh] lg:h-full"
            initial={reduced ? false : { clipPath: 'inset(4% 4% 100% 4%)' }}
            animate={{ clipPath: 'inset(4% 4% 0% 4%)' }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.45 }}
          >
            <motion.div
              className="absolute inset-x-0 -top-[6%] h-[112%] will-change-transform"
              style={reduced ? undefined : { y: mediaY }}
            >
              <VideoFrame
                poster="rooftop"
                alt="Kälte- und Klimatechnik im Einsatz – Anlagenfoto One4All"
                image={images.heroRooftop}
                priority
                ratio={null}
                label="One4All — Anlagentechnik"
                className="!absolute inset-0"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-10 left-6 hidden flex-col items-center gap-4 lg:flex xl:left-8"
      >
        <span
          className="font-mono text-[10px] uppercase tracking-wider2 text-muted"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
        <motion.span
          className="text-muted"
          animate={reduced ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={13} strokeWidth={1.5} />
        </motion.span>
      </div>
    </section>
  )
}
