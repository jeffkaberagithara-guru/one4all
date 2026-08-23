import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

const routes = ['/', '/ueber-uns', '/leistungen', '/leistungen/vrf-systeme', '/leistungen/schulungen', '/projekte', '/projekte/vrf-mehrzonensystem', '/kontakt', '/impressum', '/datenschutz', '/gibts-nicht']

let failed = false

for (const route of routes) {
  try {
    const html = renderToString(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>,
    )
    const checks: Record<string, string[]> = {
      '/': ['Kälte.', 'Präzision.', 'Was wir'],
      '/leistungen/vrf-systeme': ['VRF-Systeme'],
      '/kontakt': ['Ihr Projekt', 'Anfrage senden'],
      '/gibts-nicht': ['404'],
    }
    const expected = checks[route] ?? []
    const missing = expected.filter((s) => !html.includes(s))
    if (missing.length > 0) {
      failed = true
      console.log('FAIL', route, 'missing:', missing.join(' | '))
    } else {
      console.log('OK  ', route, html.length, 'chars')
    }
  } catch (err) {
    failed = true
    console.log('CRASH', route, String(err))
  }
}

process.exit(failed ? 1 : 0)
