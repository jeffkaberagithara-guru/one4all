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
  gallery: { variant: MediaVariant; alt: string }[]
}

export const projects: Project[] = [
  {
    slug: 'klimatisierung-buerogebaeude',
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
      { variant: 'units', alt: 'Inneneinheiten einer Mehrzonen-Klimaanlage' },
      { variant: 'pipes', alt: 'Kältemittelleitungen im Gebäuderinneren' },
      { variant: 'control', alt: 'Regelungspanel der Klimazentrale' },
    ],
  },
  {
    slug: 'vrf-mehrzonensystem',
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
      { variant: 'rooftop', alt: 'Außeneinheiten eines VRF-Systems am Dach' },
      { variant: 'macro', alt: 'Detailansicht eines Anschlusses der Kältemittelleitungen' },
      { variant: 'plan', alt: 'Auslegungsplan des VRF-Mehrzonensystems' },
    ],
  },
  {
    slug: 'gewerbekuehlung',
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
      { variant: 'macro', alt: 'Komponenten der gewerblichen Kühlanlage im Detail' },
      { variant: 'control', alt: 'Überprüfung der Regelungsparameter' },
      { variant: 'pipes', alt: 'Leitungsführung der Kühlanlage' },
    ],
  },
  {
    slug: 'bestandsanlage-wartung',
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
      { variant: 'control', alt: 'Kontrolle der Anlagenparameter bei der Wartung' },
      { variant: 'plan', alt: 'Dokumentierte Systemunterlagen der Anlage' },
      { variant: 'room', alt: 'Technischer Raum der bestehenden Anlage' },
    ],
  },
]

export function getProject(slug: string | undefined): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
