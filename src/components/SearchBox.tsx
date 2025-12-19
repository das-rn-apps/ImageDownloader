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
      <label className="block text-sm font-medium text-gray-700 mb-2">Search query</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKey}
        disabled={disabled}
        placeholder="e.g. nature, car, dog"
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 shadow-soft focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand disabled:bg-gray-100 disabled:text-gray-400"
      />
    </div>
  )
}
