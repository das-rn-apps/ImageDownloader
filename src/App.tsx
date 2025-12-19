import { useCallback, useEffect, useMemo, useState } from 'react'
import SearchBox from './components/SearchBox'
import ImageCountSelect from './components/ImageCountSelect'
import DownloadButton from './components/DownloadButton'
import ProgressBar from './components/ProgressBar'
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
  const [dark, setDark] = useState(false)

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
      const result = await downloadSequential(urls, query.trim(), (completed, total) => {
        setProgress(completed / total)
        setProgressText(`Downloading ${completed} / ${total}`)
      })
      setSummary({ requested: count, success: result.success, failed: result.failed })
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'Unknown error'
      setError(msg)
    } finally {
      setDownloading(false)
    }
  }, [query, count])

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
        <div className="w-full max-w-xl">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">4K Image Downloader</h1>
            <button
              onClick={() => setDark((v) => !v)}
              className="rounded-lg border border-gray-300 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-3 py-2 shadow-soft"
            >
              {dark ? 'Light' : 'Dark'}
            </button>
          </div>
          <div className="rounded-2xl bg-white dark:bg-gray-800 shadow-soft p-6 space-y-5">
            <SearchBox value={query} onChange={setQuery} disabled={downloading} onSubmit={startDownload} />
            <ImageCountSelect value={count} onChange={setCount} disabled={downloading} />
            <div className="flex items-center justify-between">
              <DownloadButton onClick={startDownload} disabled={!canDownload} />
              <div className="text-sm text-gray-500">Unsplash landscape 4K via urls.raw</div>
            </div>
            {downloading && <ProgressBar progress={progress} text={progressText} />}
            {error && <div className="text-sm text-red-600">{error}</div>}
            {summary && (
              <div className="rounded-xl bg-gray-50 dark:bg-gray-900 p-4 text-sm text-gray-800 dark:text-gray-200">
                <div className="font-medium mb-1">Summary</div>
                <div className="flex gap-4">
                  <div>Requested: {summary.requested}</div>
                  <div>Downloaded: {summary.success}</div>
                  <div>Failed: {summary.failed}</div>
                </div>
              </div>
            )}
          </div>
          <p className="text-center text-xs text-gray-500 mt-4">
            Personal use only. Browser may prompt to allow multiple downloads.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
