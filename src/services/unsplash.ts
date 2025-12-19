export type UnsplashPhoto = {
  id: string
  alt_description: string | null
  description: string | null
  urls: { raw: string }
}

const BASE_URL = 'https://api.unsplash.com'

const perPageMax = 30

const ensureKey = () => {
  const key = import.meta.env.VITE_UNSPLASH_ACCESS_KEY as string | undefined
  if (!key) throw new Error('Missing VITE_UNSPLASH_ACCESS_KEY')
  return key
}

const to4kLandscape = (raw: string) => {
  const url = new URL(raw)
  url.searchParams.set('w', '3840')
  url.searchParams.set('h', '2160')
  url.searchParams.set('fit', 'crop')
  url.searchParams.set('fm', 'jpg')
  url.searchParams.set('q', '85')
  url.searchParams.set('dpr', '1')
  return url.toString()
}

export const searchImageUrls = async (query: string, total: number) => {
  const key = ensureKey()
  const perPage = Math.min(perPageMax, Math.max(1, total))
  const pages = Math.ceil(total / perPage)
  const acc: string[] = []

  for (let page = 1; page <= pages; page++) {
    const url =
      `${BASE_URL}/search/photos?query=${encodeURIComponent(query)}` +
      `&orientation=landscape&per_page=${perPage}&page=${page}`
    const res = await fetch(url, {
      headers: { Authorization: `Client-ID ${key}` }
    })
    if (!res.ok) {
      throw new Error(`Unsplash API error ${res.status}`)
    }
    const data = await res.json()
    const results: UnsplashPhoto[] = data.results ?? []
    for (const p of results) {
      if (acc.length >= total) break
      acc.push(to4kLandscape(p.urls.raw))
    }
    if (results.length === 0 || acc.length >= total) break
  }

  return acc
}

