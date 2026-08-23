import clsx from 'clsx'

export function cn(...inputs: Parameters<typeof clsx>): string {
  return clsx(inputs)
}

const BASE_URL = import.meta.env.BASE_URL

export function withBase(path?: string): string | undefined {
  if (!path) return undefined
  if (/^(https?:)?\/\//.test(path)) return path
  return path.startsWith('/') ? BASE_URL + path.slice(1) : BASE_URL + path
}
