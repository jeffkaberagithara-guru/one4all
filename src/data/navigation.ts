import type { LucideIcon } from 'lucide-react'
import { Phone } from 'lucide-react'

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

export interface ContactChannel {
  icon: LucideIcon
  label: string
  value: string
  href: string
}

export const contactChannels: ContactChannel[] = [
  { icon: Phone, label: 'Telefon', value: '+43 1 960 19 71', href: 'tel:+4319601971' },
  {
    icon: null as unknown as LucideIcon,
    label: 'E-Mail',
    value: 'office@one4all-klimatechnik.com',
    href: 'mailto:office@one4all-klimatechnik.com',
  },
]

export const mapEmbedSrc =
  'https://www.openstreetmap.org/export/embed.html?bbox=16.2885%2C48.2285%2C16.3255%2C48.2435&layer=mapnik&marker=48.2361%2C16.3072'

export const mapDirectionsHref =
  'https://www.google.com/maps/search/?api=1&query=Alszeile+117%2F2%2F2+1170+Wien'
