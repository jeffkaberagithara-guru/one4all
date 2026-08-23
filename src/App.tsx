import { Route, Routes, useLocation, useParams } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Layout } from './components/layout/Layout'
import { PageShell } from './components/layout/PageShell'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import { ImpressumPage, DatenschutzPage } from './pages/LegalPages'

function ServiceDetailRoute() {
  const { slug } = useParams<{ slug: string }>()
  return <ServiceDetailPage slug={slug ?? ''} />
}

function ProjectDetailRoute() {
  const { slug } = useParams<{ slug: string }>()
  return <ProjectDetailPage slug={slug ?? ''} />
}

function AppRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageShell><HomePage /></PageShell>} />
        <Route path="/ueber-uns" element={<PageShell><AboutPage /></PageShell>} />
        <Route path="/leistungen" element={<PageShell><ServicesPage /></PageShell>} />
        <Route path="/leistungen/:slug" element={<PageShell><ServiceDetailRoute /></PageShell>} />
        <Route path="/projekte" element={<PageShell><ProjectsPage /></PageShell>} />
        <Route path="/projekte/:slug" element={<PageShell><ProjectDetailRoute /></PageShell>} />
        <Route path="/kontakt" element={<PageShell><ContactPage /></PageShell>} />
        <Route path="/impressum" element={<PageShell><ImpressumPage /></PageShell>} />
        <Route path="/datenschutz" element={<PageShell><DatenschutzPage /></PageShell>} />
        <Route path="*" element={<PageShell><NotFoundPage /></PageShell>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  )
}
