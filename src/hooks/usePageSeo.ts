import { useEffect } from 'react'
import { setPageSeo } from '../lib/seo'

export function usePageSeo(input: { title?: string; description?: string; path?: string }): void {
  useEffect(() => {
    setPageSeo(input)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input.title, input.description, input.path])
}
