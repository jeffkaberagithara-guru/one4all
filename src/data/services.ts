import type { MediaVariant } from '../lib/types'

export interface Service {
  slug: string
  num: string
  name: string
  tagline: string
  body: string[]
  capabilities: string[]
  variant: MediaVariant
  image?: string
}

export const services: Service[] = [
  {
    slug: 'projektierung',
    image: '/images/planning.jpg',
    num: '01',
    name: 'Projektierung & Planung',
    tagline: 'Von der ersten Idee bis zur technischen Lösung.',
    body: [
      'One4All unterstützt bei der Projektierung von Kälte- und Klimatechnik-Vorhaben – von der ersten Idee bis zur ausgearbeiteten technischen Lösung.',
      'Dabei werden moderne Technologien ebenso berücksichtigt wie die individuellen Anforderungen des jeweiligen Projekts und die Rahmenbedingungen vor Ort.',
    ],
    capabilities: [
      'Technische Projektierung',
      'Systemauswahl',
      'Anlagenkonzeption',
      'Technische Abstimmung',
      'Unterstützung bei der Projektplanung',
      'Unterstützung bei der Projektausarbeitung',
    ],
    variant: 'plan',
  },
  {
    slug: 'kaeltetechnik',
    image: '/images/project1.jpg',
    num: '02',
    name: 'Kältetechnik',
    tagline: 'Effiziente Kältelösungen für unterschiedliche Anwendungen.',
    body: [
      'Von der Gewerbekälte bis zur Prozesskühlung: One4All plant, installiert und betreut Kältelösungen, die auf die jeweilige Anwendung und den Betrieb im Alltag abgestimmt sind.',
      'Im Mittelpunkt steht eine zuverlässige Technik, die ihre Aufgabe über Jahre hinweg erfüllt – herstellerunabhängig ausgewählt für jede Aufgabe.',
    ],
    capabilities: [
      'Kälteanlagen',
      'Gewerbekälte',
      'Getränkekühlung',
      'Pharmakühlung',
      'Kaltwassererzeuger',
      'Präzisionsklima',
      'Prozesskühlung',
    ],
    variant: 'pipes',
  },
  {
    slug: 'klimatechnik',
    image: '/images/contact.jpg',
    num: '03',
    name: 'Klimatechnik',
    tagline: 'Raumklima mit technischer Präzision.',
    body: [
      'Lösungen für ein präzises Raumklima in unterschiedlichen Umgebungen – vom Einzelraum bis zur technisch anspruchsvollen Sonderanwendung.',
      'Ob Kühlung, Heizbetrieb, Luftfeuchte oder Luftführung: Die Systemwahl orientiert sich an Nutzung, Gebäude und Betrieb – nicht an einem Produktkatalog.',
    ],
    capabilities: [
      'Klimaanlagen',
      'VRF-Systeme',
      'Direktverdampfungssysteme',
      'Fensterklimageräte',
      'Präzisionsklimaanlagen',
      'Luftbefeuchtung',
      'Luftentfeuchtung',
      'Luftschleieranlagen',
    ],
    variant: 'room',
  },
  {
    slug: 'vrf-systeme',
    image: '/images/vrf.jpg',
    num: '04',
    name: 'VRF-Systeme',
    tagline: 'Flexible Klimatechnik für anspruchsvolle Gebäude.',
    body: [
      'VRF-Systeme ermöglichen eine flexible und bedarfsgerechte Klimatisierung unterschiedlicher Bereiche eines Gebäudes – mit unabhängig regelbaren Zonen bei einer gemeinsamen Außeneinheitentechnik.',
      'One4All unterstützt bei Planung, Projektabwicklung, Inbetriebnahme, Fehleranalyse und technischer Betreuung von VRF-Anlagen.',
    ],
    capabilities: [
      'Planung & Auslegung',
      'Installation',
      'Inbetriebnahme',
      'Fehleranalyse',
      'Technische Betreuung',
    ],
    variant: 'units',
  },
  {
    slug: 'kaltwassererzeuger',
    image: '/images/systems.jpg',
    num: '05',
    name: 'Kaltwassererzeuger',
    tagline: 'Zentrale Kälte für komplexe Anforderungen.',
    body: [
      'Kaltwassererzeuger liefern zentrale Kälte für komplexe Anforderungen – von gewerblichen Betrieben bis zu technisch kritischen Anwendungen.',
      'One4All begleitet diese Systeme über den gesamten Lebenszyklus: von der Integration ins Gesamtsystem bis zu Wartung und Optimierung im laufenden Betrieb.',
    ],
    capabilities: [
      'Kaltwassererzeugung',
      'Technische Projektierung',
      'Systemintegration',
      'Inbetriebnahme',
      'Fehleranalyse',
      'Wartung',
      'Optimierung',
    ],
    variant: 'rooftop',
  },
  {
    slug: 'waermepumpen',
    image: '/images/heating.jpg',
    num: '06',
    name: 'Wärmepumpen',
    tagline: 'Effiziente Systeme für moderne Gebäude.',
    body: [
      'Wärmepumpentechnik verbindet effiziente Energiegewinnung mit moderner Gebäudetechnik – und stellt besondere Ansprüche an Auslegung, Hydraulik und Regelung.',
      'One4All unterstützt bei der technischen Umsetzung und Betreuung entsprechender Systeme.',
    ],
    capabilities: ['Technische Umsetzung', 'Systemintegration', 'Inbetriebnahme', 'Wartung & Betreuung'],
    variant: 'facade',
  },
  {
    slug: 'gewerbekaelte',
    image: '/images/edv.jpg',
    num: '07',
    name: 'Gewerbekälte',
    tagline: 'Kälte, wenn Temperaturkontrolle entscheidend ist.',
    body: [
      'Für Gastronomie, Gewerbebetriebe und spezielle gewerbliche Anwendungen: Kältelösungen, wenn zuverlässige Temperaturkontrolle zum Betriebsfaktor wird.',
      'Von der Getränkekühlung bis zur Prozesskühlung – technisch durchdacht und auf Dauer ausgelegt.',
    ],
    capabilities: [
      'Gastronomie',
      'Gewerbebetriebe',
      'Getränkekühlung',
      'Kühlanlagen',
      'Prozesskühlung',
      'Spezielle gewerbliche Anwendungen',
    ],
    variant: 'macro',
  },
  {
    slug: 'wartung',
    image: '/images/mobile-workshop.jpg',
    num: '08',
    name: 'Wartung & Überprüfung',
    tagline: 'Bestehende Anlagen zuverlässig betreiben.',
    body: [
      'Regelmäßige Überprüfungen helfen dabei, technische Auffälligkeiten frühzeitig zu erkennen und den zuverlässigen Betrieb bestehender Anlagen zu unterstützen.',
      'Zur Wartung gehört bei One4All auch die Dokumentation – damit der Zustand einer Anlage nachvollziehbar bleibt.',
    ],
    capabilities: [
      'Anlagenüberprüfung',
      'Wartungsarbeiten',
      'Technische Kontrolle',
      'Fehleranalyse',
      'Optimierung',
      'Dokumentation',
    ],
    variant: 'control',
  },
  {
    slug: 'reparatur',
    image: '/images/experience.jpg',
    num: '09',
    name: 'Reparatur & Störungsbehebung',
    tagline: 'Wenn Technik nicht wie geplant funktioniert.',
    body: [
      'Von der Fehleranalyse bis zur technischen Behebung: One4All unterstützt bei Störungen und Reparaturen an bestehenden Kälte- und Klimaanlagen.',
      'Ziel ist immer eine saubere Diagnose vor dem Eingriff – und eine Funktionsprüfung danach.',
    ],
    capabilities: ['Fehleranalyse', 'Diagnose', 'Störungsbehebung', 'Reparatur', 'Funktionsprüfung'],
    variant: 'macro',
  },
  {
    slug: 'neuinstallationen',
    image: '/images/installation.jpg',
    num: '10',
    name: 'Neuinstallationen & Erweiterungen',
    tagline: 'Neue Systeme. Bestehende Anlagen. Weitergedacht.',
    body: [
      'Von der neuen Anlage bis zur durchdachten Erweiterung bestehender Systeme – inklusive technischer Anpassungen, Modernisierung und Inbetriebnahme.',
      'Auch bei Umbauten gilt: Das neue System muss sich sauber in das Gesamtgefüge einfügen – technisch wie dokumentarisch.',
    ],
    capabilities: [
      'Neuinstallation',
      'Anlagenerweiterung',
      'Systemumbau',
      'Technische Anpassungen',
      'Modernisierung',
      'Inbetriebnahme',
    ],
    variant: 'units',
  },
  {
    slug: 'systemunterlagen',
    image: '/images/planning1.jpg',
    num: '11',
    name: 'Systemunterlagen',
    tagline: 'Technik verständlich dokumentiert.',
    body: [
      'One4All erstellt spezifische Systemunterlagen – auch für bereits bestehende Anlagen und Systeme.',
      'Verständlich dokumentierte Technik ist die Grundlage für Betrieb, Wartung und Weitergabe – und unterscheidet durchdachte Anlagen von undokumentierten Installationen.',
    ],
    capabilities: [
      'Systemdokumentation',
      'Anlagendokumentation',
      'Bestandsaufnahme bestehender Systeme',
      'Übergabeunterlagen',
    ],
    variant: 'plan',
  },
  {
    slug: 'schulungen',
    image: '/images/company.jpg',
    num: '12',
    name: 'Anlagen- & Systemschulungen',
    tagline: 'Wissen für einen sicheren Anlagenbetrieb.',
    body: [
      'Nach Vereinbarung bietet One4All spezifische Anlagen- und Systemschulungen an.',
      'Vermittelt vom Praktiker, angewendet am konkreten System – damit Betreiber und Mitarbeitende sicher mit ihrer Technik umgehen können.',
    ],
    capabilities: ['Systemschulungen', 'Anlagenschulungen', 'Bedienung & Betrieb', 'Nach Vereinbarung'],
    variant: 'control',
  },
]

export function getService(slug: string | undefined): Service | undefined {
  return services.find((s) => s.slug === slug)
}
