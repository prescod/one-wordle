type Props = {
  solution: string
  hints: String[]
  addHint: any
}

export function HintButton({ solution, hints, addHint }: Props) {
  return (
    <button
      type="button"
      className="rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm justify-right"
      onClick={() => addHint('XXXXX')}
    >
      Give Up?
    </button>
  )
}

export function generateHints(word: string) {
  return []
}
