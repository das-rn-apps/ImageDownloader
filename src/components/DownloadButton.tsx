type Props = {
  onClick: () => void
  disabled?: boolean
}

export default function DownloadButton({ onClick, disabled }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="inline-flex items-center justify-center rounded-xl bg-brand px-5 py-3 text-white font-semibold shadow-soft hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
      Download
    </button>
  )
}

