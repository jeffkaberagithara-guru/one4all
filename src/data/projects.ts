import type { MediaVariant } from '../lib/types'

export interface Project {
  slug: string
  num: string
  category: string
  title: string
  meta: {
    projekt: string
    standort: string
    system: string
    leistung: string
  }
  challenge: string
  solution: string
  implementation: string
  result: string
  heroVariant: MediaVariant
  heroImage?: string
  gallery: { variant: MediaVariant; alt: string; image?: string }[]
}

export const projects: Project[] = [
  {
    slug: 'klimatisierung-buerogebaeude',
    heroImage: '/images/contact.jpg',
    num: '01',
    category: 'Klimatechnik',
    title: 'Klimatisierung Bürogebäude',
    meta: {
      projekt: 'Bürogebäude, mehrere Nutzungszonen',
      standort: 'Wien',
      system: 'Direktverdampfung – Mehrzonensystem',
      leistung: 'Projektierung, Installation, Inbetriebnahme',
    },
    challenge:
      'Das Gebäude vereint unterschiedlich genutzte Bereiche mit individuellen Anforderungen an Temperatur und Betriebszeiten. Die Herausforderung: eine bedarfsgerechte Klimatisierung einzelner Zonen – ohne Beeinträchtigung des laufenden Betriebs und ohne großflächige Eingriffe in die Bausubstanz.',
    solution:
      'Auf Basis von Besichtigung und technischer Aufnahme wurde ein Direktverdampfungssystem mit unabhängig regelbaren Zonen konzipiert. Die Systemauswahl erfolgte herstellerunabhängig nach den technischen Rahmenbedingungen des Objekts.',
    implementation:
      'Die Installation wurde in abgestimmten Abschnitten durchgeführt, um den Betrieb im Objekt aufrechtzuerhalten. Nach Abschluss der Arbeiten wurde das Gesamtsystem in Betrieb genommen, eingeregelt und vor Ort übergeben.',
    result:
      'Jeder Bereich kann seither unabhängig und bedarfsgerecht temperiert werden. Die Anlage wurde vollständig dokumentiert und bildet die Grundlage für die weitere technische Betreuung.',
    heroVariant: 'room',
    gallery: [
      { variant: 'units', image: '/images/about.jpg', alt: 'Anlagentechnik der Klimatisierung im Gebäudenumfeld' },
      { variant: 'pipes', image: '/images/planning.jpg', alt: 'Planungsunterlagen zum Mehrzonensystem' },
      { variant: 'control', image: '/images/installation.jpg', alt: 'Montage und Umsetzung der Klimaanlage' },
    ],
  },
  {
    slug: 'vrf-mehrzonensystem',
    heroImage: '/images/vrf1.jpg',
    num: '02',
    category: 'VRF',
    title: 'VRF-Mehrzonensystem',
    meta: {
      projekt: 'Gebäude mit unterschiedlichen Nutzungsprofilen',
      standort: 'Großraum Wien',
      system: 'VRF-Klimatechnik',
      leistung: 'Planung, Installation, Inbetriebnahme, Betreuung',
    },
    challenge:
      'Unterschiedliche Nutzungsprofile erfordern gleichzeitig Heiz- und Kühlbetrieb in einzelnen Bereichen. Gesucht war eine Lösung, die diese Anforderungen flexibel abbildet und für spätere Erweiterungen offen bleibt.',
    solution:
      'Ein VRF-Mehrzonensystem wurde geplant und umgesetzt: gemeinsame Außeneinheitentechnik, unabhängig geregelte Inneneinheiten und eine Systemarchitektur, die zusätzliche Zonen aufnehmen kann.',
    implementation:
      'Von der Auslegung über die Kältemittelleitungsführung bis zur Inbetriebnahme wurde das Projekt technisch begleitet. Nach Übergabe übernimmt One4All die laufende technische Betreuung des Systems.',
    result:
      'Ein flexibles System, das den Betrieb an wechselnde Nutzungsprofile anpasst – dokumentiert, eingeregelt und technisch betreut.',
    heroVariant: 'rooftop',
    gallery: [
      { variant: 'rooftop', image: '/images/vrf.jpg', alt: 'Außeneinheitentechnik des VRF-Systems' },
      { variant: 'macro', image: '/images/systems.jpg', alt: 'Anlagentechnik der Kältemittelseite' },
      { variant: 'plan', image: '/images/planning1.jpg', alt: 'Dokumentation und Auslegung des Mehrzonensystems' },
    ],
  },
  {
    slug: 'gewerbekuehlung',
    heroImage: '/images/project1.jpg',
    num: '03',
    category: 'Kältetechnik',
    title: 'Gewerbekühllösung',
    meta: {
      projekt: 'Gewerblicher Betrieb mit Kühlbedarf',
      standort: 'Wien',
      system: 'Gewerbekälte',
      leistung: 'Fehleranalyse, Reparatur, Optimierung',
    },
    challenge:
      'Eine bestehende gewerbliche Kühlanlage zeigte wiederkehrende Störungen, die den laufenden Betrieb beeinträchtigten. Erforderlich waren eine systematische Ursachensuche und eine dauerhafte Behebung statt punktueller Symptombekämpfung.',
    solution:
      'Nach umfassender Fehleranalyse und Funktionsprüfung wurden die identifizierten Ursachen behoben und das System im Bestand optimiert – herstellerübergreifend und ohne unnötigen Austausch intakter Komponenten.',
    implementation:
      'Die Arbeiten wurden in enger Abstimmung mit dem Betrieb durchgeführt, um Ausfallzeiten so gering wie möglich zu halten. Abschließend wurde die Funktion unter realen Bedingungen überprüft.',
    result:
      'Ein stabiler, zuverlässiger Anlagenbetrieb – mit dokumentiertem Zustand als Basis für künftige Wartung.',
    heroVariant: 'macro',
    gallery: [
      { variant: 'macro', image: '/images/edv.jpg', alt: 'Technik der gewerblichen Kühlanlage' },
      { variant: 'control', image: '/images/installation.jpg', alt: 'Umsetzung und Behebung vor Ort' },
      { variant: 'pipes', image: '/images/planning1.jpg', alt: 'Dokumentation des Anlagenzustands' },
    ],
  },
  {
    slug: 'bestandsanlage-wartung',
    heroImage: '/images/mobile-workshop.jpg',
    num: '04',
    category: 'Wartung',
    title: 'Bestandsanlage — Wartung & Optimierung',
    meta: {
      projekt: 'Bestehende Kälte- und Klimaanlage',
      standort: 'Wien',
      system: 'Wartung & Überprüfung',
      leistung: 'Inspektion, Dokumentation, Betriebsoptimierung',
    },
    challenge:
      'Eine über Jahre betriebene Anlage ohne durchgehende Dokumentation: Zustand und Historie waren nur schwer nachvollziehbar, Auffälligkeiten ließen sich nicht einordnen.',
    solution:
      'Systematische Inspektion und Überprüfung der Anlage, gefolgt von einer Dokumentation des Ist-Zustands und gezielten Maßnahmen zur Betriebsoptimierung.',
    implementation:
      'Die Überprüfung erfolgte nach einem festen Prüfschema. Erkenntnisse und durchgeführte Maßnahmen wurden in Systemunterlagen festgehalten – als Referenz für alle künftigen Eingriffe.',
    result:
      'Ein transparenter Anlagenzustand, eine belastbare Dokumentation und eine Optimierungsgrundlage für den weiteren Betrieb.',
    heroVariant: 'control',
    gallery: [
      { variant: 'control', image: '/images/experience.jpg', alt: 'Kontrolle und Überprüfung der Bestandsanlage' },
      { variant: 'plan', image: '/images/heating1.jpg', alt: 'Anlagentechnik im laufenden Betrieb' },
      { variant: 'room', image: '/images/planning.jpg', alt: 'Unterlagen zur Dokumentation der Anlage' },
    ],
  },
]

export function getProject(slug: string | undefined): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
