import { Hero } from '../components/home/Hero'
import { AboutPreview } from '../components/home/AboutPreview'
import { FactsStrip } from '../components/home/FactsStrip'
import { ServicesIndex } from '../components/home/ServicesIndex'
import { Specialization } from '../components/home/Specialization'
import { FilmBreak } from '../components/home/FilmBreak'
import { ProjectsShowcase } from '../components/home/ProjectsShowcase'
import { Principles } from '../components/home/Principles'
import { ProcessTimeline } from '../components/home/ProcessTimeline'
import { Optimization } from '../components/home/Optimization'
import { CriticalCooling } from '../components/home/CriticalCooling'
import { MarqueeStrip } from '../components/home/MarqueeStrip'
import { Testimonial } from '../components/home/Testimonial'
import { FounderSection } from '../components/home/FounderSection'
import { ContactSection } from '../components/home/ContactSection'
import { usePageSeo } from '../hooks/usePageSeo'

export default function HomePage() {
  usePageSeo({
    title: undefined,
    path: '/',
  })

  return (
    <>
      <Hero />
      <AboutPreview />
      <FactsStrip />
      <ServicesIndex />
      <Specialization />
      <FilmBreak />
      <ProjectsShowcase />
      <Principles />
      <ProcessTimeline />
      <Optimization />
      <CriticalCooling />
      <MarqueeStrip />
      <Testimonial />
      <FounderSection />
      <ContactSection />
    </>
  )
}
