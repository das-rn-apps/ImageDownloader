type Props = {
  onClick: () => void
  disabled?: boolean
}

export default function DownloadButton({ onClick, disabled }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="inline-flex items-center justify-center rounded-xl bg-linear-to-tr from-indigo-500 to-sky-500 px-5 py-3 text-white font-semibold shadow-soft hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-brand disabled:from-gray-500 disabled:to-gray-500 disabled:cursor-not-allowed"
    >
      Download
    </button>
  )
}
