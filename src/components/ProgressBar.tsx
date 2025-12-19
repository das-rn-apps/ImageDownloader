type Props = {
  progress: number
  text?: string
}

export default function ProgressBar({ progress, text }: Props) {
  const pct = Math.max(0, Math.min(1, progress))
  return (
    <div className="w-full">
      <div className="mb-2 text-sm text-gray-700">{text}</div>
      <div className="h-3 w-full rounded-full bg-gray-200">
        <div
          className="h-3 rounded-full bg-brand transition-all"
          style={{ width: `${pct * 100}%` }}
        />
      </div>
    </div>
  )
}

