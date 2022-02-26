type Props = {
  solution: string
  hints: String[]
  action: () => void
}

export function GoButton({ solution, hints, action }: Props) {
  return (
    <button
      type="button"
      className="rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm px-3 mx-8"
      onClick={action}
    >
      I've Got It!
    </button>
  )
}
