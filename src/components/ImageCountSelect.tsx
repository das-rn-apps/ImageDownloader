type Props = {
  value: number
  onChange: (v: number) => void
  disabled?: boolean
}

const options = [20, 50, 100]

export default function ImageCountSelect({ value, onChange, disabled }: Props) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">Image count</label>
      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        disabled={disabled}
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-soft focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand disabled:bg-gray-100 disabled:text-gray-400"
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

