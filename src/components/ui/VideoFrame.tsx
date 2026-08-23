import { Play } from 'lucide-react'
import type { MediaVariant } from '../../lib/types'
import { cn, withBase } from '../../lib/utils'
import { MediaFrame } from './MediaFrame'

interface VideoFrameProps {
  poster: MediaVariant
  alt: string
  src?: string
  image?: string
  ratio?: string
  label?: string
  className?: string
  priority?: boolean
  position?: string
}

export function VideoFrame({
  poster,
  alt,
  src,
  image,
  ratio = '16 / 9',
  label = 'Film — Loop',
  className,
  priority,
  position,
}: VideoFrameProps) {
  return (
    <div className={cn('group relative overflow-hidden bg-coal', className)}>
      {src ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          style={{ aspectRatio: ratio }}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={alt}
          src={src}
        />
      ) : (
        <div className="absolute inset-0" style={{ aspectRatio: ratio }}>
          {image ? (
            <img
              src={withBase(image)}
              alt={alt}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
              {...(priority ? { fetchPriority: 'high' as const } : {})}
              style={position ? { objectPosition: position } : undefined}
              className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-[1200ms] ease-out group-hover:scale-[1.02] group-hover:grayscale-0"
            />
          ) : (
            <MediaFrame
              variant={poster}
              alt={alt}
              ratio={ratio}
              className="absolute inset-0 [&>div]:h-full [&>div]:w-full"
            />
          )}
        </div>
      )}

      {!src && !image && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="flex size-16 items-center justify-center rounded-full border border-white/60 bg-black/20 text-white backdrop-blur-sm lg:size-20">
            <Play size={18} fill="currentColor" strokeWidth={0} aria-hidden />
          </span>
        </div>
      )}

      <div aria-hidden className="pointer-events-none absolute inset-5 hidden sm:block">
        <span className="absolute left-0 top-0 size-5 border-l border-t border-white/40" />
        <span className="absolute right-0 top-0 size-5 border-r border-t border-white/40" />
        <span className="absolute bottom-0 left-0 size-5 border-b border-l border-white/40" />
        <span className="absolute bottom-0 right-0 size-5 border-b border-r border-white/40" />
      </div>

      <span className="label-mono pointer-events-none absolute bottom-4 right-4 flex items-center gap-2 text-white/80">
        <span className="inline-block size-1.5 rounded-full bg-red-400/90" aria-hidden />
        {label}
      </span>
    </div>
  )
}
