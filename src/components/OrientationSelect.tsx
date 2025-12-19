import type { ReactNode } from 'react'
import { IconLandscape, IconPortrait, IconSquare } from './icons'

type Orientation = 'landscape' | 'portrait' | 'squarish'

type Props = {
  value: Orientation
  onChange: (v: Orientation) => void
  disabled?: boolean
}

const items: Array<{ key: Orientation; label: string; icon: ReactNode }> = [
  { key: 'landscape', label: 'Landscape', icon: <IconLandscape className="text-white/80" /> },
  { key: 'portrait', label: 'Portrait', icon: <IconPortrait className="text-white/80" /> },
  { key: 'squarish', label: 'Square', icon: <IconSquare className="text-white/80" /> }
]

export default function OrientationSelect({ value, onChange, disabled }: Props) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-white/70 mb-2">Orientation</label>
      <div className="grid grid-cols-3 gap-3">
        {items.map((item) => {
          const active = item.key === value
          return (
            <button
              key={item.key}
              disabled={disabled}
              onClick={() => onChange(item.key)}
              aria-pressed={active}
              className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-2 transition ${active
                  ? 'border-cyan-400/50 bg-cyan-500/20 text-white'
                  : 'border-white/15 bg-white/5 text-white/80 hover:bg-white/10'
                }`}
            >
              {item.icon}
              <span className="text-sm">{item.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
