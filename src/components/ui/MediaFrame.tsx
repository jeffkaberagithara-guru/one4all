import { useId } from 'react'
import type { MediaVariant } from '../../lib/types'
import { cn, withBase } from '../../lib/utils'
import { Facade, Rooftop, Pipes, Units, Control, Macro, Plan, Room, type Scene } from './artwork'

const scenes: Record<MediaVariant, Scene> = {
  facade: Facade,
  rooftop: Rooftop,
  pipes: Pipes,
  units: Units,
  control: Control,
  macro: Macro,
  plan: Plan,
  room: Room,
}

interface MediaFrameProps {
  variant: MediaVariant
  alt: string
  /** Pass null to let the frame stretch to its container (container must provide the size). */
  ratio?: string | null
  caption?: string
  className?: string
  src?: string
  priority?: boolean
  position?: string
}

export function MediaFrame({ variant, alt, ratio = '4 / 3', caption, className, src, priority, position }: MediaFrameProps) {
  const rawId = useId()
  const uid = `g${rawId.replace(/[^a-zA-Z0-9]/g, '')}`
  const Scene = scenes[variant]
  const frameStyle = ratio ? { aspectRatio: ratio } : undefined

  if (src) {
    return (
      <figure
        className={cn('group relative overflow-hidden bg-surface', className)}
        style={frameStyle}
      >
        <div className="absolute inset-0">
          <img
            src={withBase(src)}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            {...(priority ? { fetchPriority: 'high' as const } : {})}
            style={position ? { objectPosition: position } : undefined}
            className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-[1200ms] ease-out group-hover:scale-[1.02] group-hover:grayscale-0"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at center, transparent 62%, rgba(20,20,18,0.16))' }}
          />
        </div>
        {caption ? (
          <span className="label-mono absolute bottom-4 left-4 border border-line bg-paper/85 px-3 py-1.5 text-ink/70 backdrop-blur-sm">
            {caption}
          </span>
        ) : null}
      </figure>
    )
  }

  return (
    <figure
      role="img"
      aria-label={alt}
      className={cn('group relative overflow-hidden bg-surface', className)}
      style={frameStyle}
    >
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          focusable="false"
          className="absolute inset-0 h-full w-full transition-transform duration-[1600ms] ease-out group-hover:scale-[1.03]"
        >
          <defs>
            <filter id={`${uid}-n`} x="0%" y="0%" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="2" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <radialGradient id={`${uid}-v`} cx="50%" cy="46%" r="75%">
              <stop offset="62%" stopColor="#141412" stopOpacity="0" />
              <stop offset="100%" stopColor="#141412" stopOpacity="0.16" />
            </radialGradient>
          </defs>
          {Scene(uid)}
          <rect width="800" height="600" fill={`url(#${uid}-v)`} />
          <rect width="800" height="600" filter={`url(#${uid}-n)`} opacity="0.05" />
        </svg>
      </div>
      {caption ? (
        <span className="label-mono absolute bottom-4 left-4 border border-line bg-paper/85 px-3 py-1.5 text-ink/70 backdrop-blur-sm">
          {caption}
        </span>
      ) : null}
    </figure>
  )
}
