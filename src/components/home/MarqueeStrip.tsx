const items = [
  'VRF-Systeme',
  'Kaltwassererzeuger',
  'Gewerbekälte',
  'Wärmepumpen',
  'EDV-Kühlung',
  'Wartung & Reparatur',
  'Herstellerunabhängig seit 2017',
]

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex w-max shrink-0 items-center"
    >
      {items.map((item) => (
        <li key={item} className="flex items-center">
          <span className="whitespace-nowrap px-8 font-display text-2xl font-light tracking-tight text-paper/75 lg:px-12 lg:text-4xl">
            {item}
          </span>
          <span aria-hidden className="size-1.5 rotate-45 bg-paper/30" />
        </li>
      ))}
    </ul>
  )
}

export function MarqueeStrip() {
  return (
    <section
      aria-label="Unsere Kernbereiche"
      className="marquee-paused-on-hover overflow-hidden border-b border-white/10 bg-coal py-8 text-paper lg:py-10"
    >
      <div className="animate-marquee-x flex w-max will-change-transform">
        <Row />
        <Row hidden />
      </div>
    </section>
  )
}
