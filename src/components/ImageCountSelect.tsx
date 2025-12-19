import { Listbox } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'

type Props = {
  value: number
  onChange: (v: number) => void
  disabled?: boolean
}

const options = [5, 10, 15, 20]

export default function ImageCountSelect({ value, onChange, disabled }: Props) {
  return (
    <div className="w-full max-w-sm mx-auto sm:max-w-none">
      <label className="block text-xs sm:text-sm font-medium text-white/70 mb-2">
        Image count
      </label>

      <Listbox value={value} onChange={onChange} disabled={disabled}>
        <div className="relative">
          {/* Button */}
          <Listbox.Button
            className="
              w-full flex items-center justify-between
              rounded-xl
              border border-white/20
              bg-linear-to-br from-white/15 to-white/5
              backdrop-blur
              px-4 py-3
              text-white
              shadow-lg
              transition
              focus:outline-none
              focus:ring-2 focus:ring-cyan-400/60
              disabled:opacity-40
            "
          >
            <span>{value}</span>
            <ChevronDown className="w-4 h-4 opacity-70" />
          </Listbox.Button>

          {/* Dropdown */}
          <Listbox.Options
            className="
              absolute z-20 mt-2 w-full
              rounded-xl
              bg-[#0b1220]
              border border-white/10
              shadow-2xl
              overflow-hidden
            "
          >
            {options.map((o) => (
              <Listbox.Option
                key={o}
                value={o}
                className={({ active, selected }) =>
                  `
                  cursor-pointer px-4 py-3
                  transition
                  ${active ? 'bg-cyan-500/20 text-cyan-300' : 'text-white/80'}
                  ${selected ? 'bg-cyan-500/30 text-white font-semibold' : ''}
                  `
                }
              >
                {o}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  )
}
