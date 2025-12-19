type Props = {
  value: number
  onChange: (v: number) => void
  disabled?: boolean
}

const options = [20, 50, 100]

export default function ImageCountSelect({ value, onChange, disabled }: Props) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-white/70 mb-2">Image count</label>
      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        disabled={disabled}
        className="w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur px-4 py-3 text-white shadow-soft focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand disabled:bg-white/5 disabled:text-white/40"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  )
}
