import { VideoFrame } from '../ui/VideoFrame'
import { Reveal } from '../ui/Reveal'
import { images } from '../../data/images'

export function FilmBreak() {
  return (
    <section aria-labelledby="film-heading" className="bg-coal text-paper">
      <div className="container-x py-20 lg:py-28">
        <p className="label-mono text-paper/50">Technik in Bewegung</p>

        <Reveal delay={0.1}>
          <h2 id="film-heading" className="h-section mt-8 font-display lg:mt-10">
            Präzision
            <br />
            im Detail.
          </h2>
        </Reveal>

        <Reveal delay={0.18} className="mt-10 lg:mt-14">
          <VideoFrame
            poster="pipes"
            alt="Anlagentechnik von One4All – Kälte- und Klimasysteme im Detail"
            image={images.filmPipes}
            ratio="16 / 9"
            label="Anlagentechnik — Detail"
          />
        </Reveal>
      </div>
    </section>
  )
}
