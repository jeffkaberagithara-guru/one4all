export const site = {
  name: 'ONE4ALL',
  legalName: 'One4All Kälte & Klimatechnik e.U.',
  claim: 'Kälte & Klimatechnik',
  founded: 2017,
  founder: 'Robert Mierczynski',
  experienceYears: '25+',
  phoneDisplay: '+43 1 960 19 71',
  phoneHref: 'tel:+4319601971',
  email: 'office@one4all-klimatechnik.com',
  address: {
    street: 'Alszeile 117/2/2',
    zip: '1170',
    city: 'Wien',
    country: 'Österreich',
  },
  fn: 'FN 468669w',
  uid: 'UID ATU72220768',
  domain: 'www.one4all-klimatechnik.com',
} as const

export const facts = [
  { value: String(site.founded), label: 'Gegründet' },
  { value: site.experienceYears, label: 'Jahre Erfahrung' },
  { value: site.address.zip, label: 'Wien' },
  { value: site.fn, label: 'Firmenbuch' },
] as const

export type ServiceOption =
  | 'Projektierung'
  | 'Klimatechnik'
  | 'Kältetechnik'
  | 'VRF'
  | 'Gewerbekälte'
  | 'Wärmepumpe'
  | 'Wartung'
  | 'Reparatur'
  | 'Neuinstallation'
  | 'Sonstiges'

export const serviceOptions: ServiceOption[] = [
  'Projektierung',
  'Klimatechnik',
  'Kältetechnik',
  'VRF',
  'Gewerbekälte',
  'Wärmepumpe',
  'Wartung',
  'Reparatur',
  'Neuinstallation',
  'Sonstiges',
]
