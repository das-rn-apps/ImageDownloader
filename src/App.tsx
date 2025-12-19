import { useCallback, useEffect, useMemo, useState } from 'react'
import SearchBox from './components/SearchBox'
import ImageCountSelect from './components/ImageCountSelect'
import DownloadButton from './components/DownloadButton'
import ProgressBar from './components/ProgressBar'
import PreviewGrid from './components/PreviewGrid'
import { searchImageUrls } from './services/unsplash'
import { downloadSequential } from './utils/downloadImage'

function App() {
  const [query, setQuery] = useState('')
  const [count, setCount] = useState(20)
  const [downloading, setDownloading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [progressText, setProgressText] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [summary, setSummary] = useState<{ requested: number; success: number; failed: number } | null>(null)
  const [previews, setPreviews] = useState<string[]>([])
  const [statuses, setStatuses] = useState<Array<'pending' | 'success' | 'failed'>>([])
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)

  const canDownload = useMemo(() => query.trim().length > 0 && !downloading, [query, downloading])

  useEffect(() => {
    const q = localStorage.getItem('lastQuery')
    const c = localStorage.getItem('lastCount')
    if (q) setQuery(q)
    if (c) setCount(Number(c))
  }, [])

  useEffect(() => {
    localStorage.setItem('lastQuery', query)
  }, [query])

  useEffect(() => {
    localStorage.setItem('lastCount', String(count))
  }, [count])

  const startDownload = useCallback(async () => {
    if (!query.trim()) {
      setError('Enter a search term')
      return
    }
    setError(null)
    setDownloading(true)
    setProgress(0)
    setProgressText(`Downloading 0 / ${count}`)
    setSummary(null)
    try {
      const urls = await searchImageUrls(query.trim(), count)
      const thumbs = urls.map((u) => {
        const url = new URL(u)
        url.searchParams.set('w', '400')
        url.searchParams.set('h', '225')
        url.searchParams.set('q', '75')
        return url.toString()
      })
      setPreviews(thumbs)
      setStatuses(Array(thumbs.length).fill('pending'))
      const result = await downloadSequential(
        urls,
        query.trim(),
        (completed, total) => {
          setProgress(completed / total)
          setProgressText(`Downloading ${completed} / ${total}`)
        },
        (index) => {
          setCurrentIndex(index)
        },
        (index, ok) => {
          setStatuses((prev) => {
            const next = prev.slice()
            next[index] = ok ? 'success' : 'failed'
            return next
          })
        }
      )
      setSummary({ requested: count, success: result.success, failed: result.failed })
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'Unknown error'
      setError(msg)
    } finally {
      setDownloading(false)
      setCurrentIndex(null)
    }
  }, [query, count])

  return (
    <div>
      <div className="min-h-screen relative overflow-hidden bg-slate-950 flex items-center justify-center px-4">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(14,165,233,0.25),_transparent_50%),radial-gradient(ellipse_at_bottom,_rgba(99,102,241,0.25),_transparent_50%)]" />
        <div className="relative z-10 w-full max-w-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/70">
              Personal AI Toolkit
            </div>
            <h1 className="mt-3 text-3xl md:text-4xl font-semibold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              4K Image Downloader
            </h1>
            <p className="mt-2 text-white/70">
              Search Unsplash and auto-download high-quality landscape images.
            </p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur shadow-soft p-6 space-y-5">
            <SearchBox value={query} onChange={setQuery} disabled={downloading} onSubmit={startDownload} />
            <ImageCountSelect value={count} onChange={setCount} disabled={downloading} />
            <div className="flex items-center justify-between">
              <DownloadButton onClick={startDownload} disabled={!canDownload} />
              <div className="text-sm text-white/60">Unsplash landscape 4K via urls.raw</div>
            </div>
            {downloading && <ProgressBar progress={progress} text={progressText} />}
            {previews.length > 0 && (
              <PreviewGrid urls={previews} statuses={statuses} currentIndex={currentIndex} />
            )}
            {error && <div className="text-sm text-red-400">{error}</div>}
            {summary && (
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                <div className="font-medium mb-1">Summary</div>
                <div className="flex gap-4">
                  <div>Requested: {summary.requested}</div>
                  <div>Downloaded: {summary.success}</div>
                  <div>Failed: {summary.failed}</div>
                </div>
              </div>
            )}
          </div>
          <p className="text-center text-xs text-white/40 mt-4">
            Personal use only. Browser may prompt to allow multiple downloads.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
