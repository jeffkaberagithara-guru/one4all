export interface NavItem {
  label: string
  to: string
}

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Über uns', to: '/ueber-uns' },
  { label: 'Leistungen', to: '/leistungen' },
  { label: 'Projekte', to: '/projekte' },
  { label: 'Kontakt', to: '/kontakt' },
]

export const mapEmbedSrc =
  'https://www.openstreetmap.org/export/embed.html?bbox=16.2885%2C48.2285%2C16.3255%2C48.2435&layer=mapnik&marker=48.2361%2C16.3072'

export const mapDirectionsHref =
  'https://www.google.com/maps/search/?api=1&query=Alszeile+117%2F2%2F21+1170+Wien'
