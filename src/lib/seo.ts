const SITE_URL = 'https://www.one4all-klimatechnik.com'
const BASE_NAME = 'One4All Kälte & Klimatechnik e.U.'
const DEFAULT_TITLE = `${BASE_NAME} — Kälte. Klima. Präzision.`
const DEFAULT_DESCRIPTION =
  'One4All Kälte & Klimatechnik e.U. in Wien – professionelle Kälte- und Klimatechnik: Projektierung, VRF-Systeme, Kaltwassererzeuger, Gewerbekälte, Wartung und Reparatur. Herstellerunabhängig seit 2017.'

interface SeoInput {
  title?: string
  description?: string
  path?: string
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string): void {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertCanonical(href: string): void {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.rel = 'canonical'
    document.head.appendChild(el)
  }
  el.href = href
}

export function setPageSeo({ title, description, path }: SeoInput = {}): void {
  const fullTitle = title ? `${title} — ${BASE_NAME}` : DEFAULT_TITLE
  const desc = description ?? DEFAULT_DESCRIPTION
  const url = `${SITE_URL}${path ?? '/'}`

  document.title = fullTitle
  upsertMeta('name', 'description', desc)
  upsertMeta('property', 'og:title', fullTitle)
  upsertMeta('property', 'og:description', desc)
  upsertMeta('property', 'og:url', url)
  upsertMeta('name', 'twitter:title', fullTitle)
  upsertMeta('name', 'twitter:description', desc)
  upsertCanonical(url)
}
