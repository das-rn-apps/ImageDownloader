type Status = 'pending' | 'success' | 'failed'

type Props = {
  urls: string[]
  statuses: Status[]
  currentIndex?: number | null
}

export default function PreviewGrid({ urls, statuses, currentIndex }: Props) {
  if (!urls.length) return null
  return (
    <div className="space-y-2">
      <div className="text-sm text-white/70">Preview</div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {urls.map((u, i) => {
          const st = statuses[i] ?? 'pending'
          const isCurrent = currentIndex === i
          return (
            <div
              key={`${i}-${u}`}
              className={`relative overflow-hidden rounded-xl ring-1 ${
                isCurrent ? 'ring-brand' : 'ring-white/15'
              } bg-white/5 backdrop-blur`}
            >
              <img
                src={u}
                alt=""
                className="h-24 w-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-1 right-1 text-xs rounded-lg px-2 py-0.5 bg-white/80">
                {st === 'success' ? (
                  <span className="text-green-600">✓</span>
                ) : st === 'failed' ? (
                  <span className="text-red-600">✕</span>
                ) : (
                  <span className="text-gray-500">…</span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
