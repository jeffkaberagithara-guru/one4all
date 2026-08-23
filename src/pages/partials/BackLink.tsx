import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export function BackLink({ to, children }: { to: string; children: string }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 pb-1 text-[12px] font-medium uppercase tracking-caps text-muted transition-colors hover:text-ink"
    >
      <ArrowLeft size={14} strokeWidth={1.75} aria-hidden className="transition-transform duration-300 group-hover:-translate-x-1" />
      {children}
    </Link>
  )
}
