import type { ChangeEvent } from 'react'

type Props = {
  value: string
  onChange: (v: string) => void
  disabled?: boolean
  onSubmit?: () => void
}

export default function SearchBox({ value, onChange, disabled, onSubmit }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }
  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onSubmit?.()
  }
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-white/70 mb-2">Search query</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKey}
        disabled={disabled}
        placeholder="e.g. nature, car, dog"
        className="w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur px-4 py-3 text-white placeholder:text-white/60 shadow-soft focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand disabled:bg-white/5 disabled:text-white/40"
      />
    </div>
  )
}
