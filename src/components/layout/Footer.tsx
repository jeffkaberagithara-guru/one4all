import { Link } from 'react-router-dom'
import { navItems } from '../../data/navigation'
import { site } from '../../data/site'

export function Footer() {
  return (
    <footer className="bg-coal text-paper">
      <div className="container-x pb-10 pt-20 lg:pt-28">
        <Link to="/" className="group inline-block" aria-label="Zur Startseite">
          <span className="block font-display text-[clamp(3.5rem,13vw,13rem)] font-medium leading-[0.9] tracking-tightest transition-opacity duration-500 group-hover:opacity-80">
            ONE4ALL
          </span>
          <span className="label-mono mt-4 block text-paper/50">Kälte &amp; Klimatechnik</span>
        </Link>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 border-t border-white/10 pt-12 md:grid-cols-12 lg:mt-24">
          <nav aria-label="Footer Navigation" className="md:col-span-3">
            <h2 className="label-mono mb-6 text-paper/40">Navigation</h2>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="u-link text-sm text-paper/70 transition-colors hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4 md:col-start-5">
            <h2 className="label-mono mb-6 text-paper/40">Kontakt</h2>
            <address className="space-y-3 not-italic text-sm text-paper/70">
              <p>
                {site.address.street}
                <br />
                {site.address.zip} {site.address.city}
                <br />
                {site.address.country}
              </p>
              <p>
                <a href={site.phoneHref} className="u-link transition-colors hover:text-paper">
                  {site.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={'mailto:' + site.email} className="u-link break-all transition-colors hover:text-paper">
                  {site.email}
                </a>
              </p>
            </address>
          </div>

          <div className="md:col-span-3 md:col-start-9">
            <h2 className="label-mono mb-6 text-paper/40">Rechtliches</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/impressum" className="u-link text-sm text-paper/70 transition-colors hover:text-paper">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="u-link text-sm text-paper/70 transition-colors hover:text-paper">
                  Datenschutz
                </Link>
              </li>
            </ul>
            <h2 className="label-mono mb-6 mt-12 text-paper/40">Anfrage</h2>
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-2 border-b border-paper/50 pb-1 text-sm text-paper/70 transition-colors hover:border-paper hover:text-paper"
            >
              Projekt anfragen
              <span aria-hidden className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-white/10 pt-6">
          <p className="label-mono text-paper/40">
            {site.fn} · {site.uid}
          </p>
          <p className="label-mono text-paper/40">© 2026 {site.legalName}</p>
          <p className="label-mono text-paper/40">
            {site.address.zip} Wien, Österreich
          </p>
        </div>
      </div>
    </footer>
  )
}
