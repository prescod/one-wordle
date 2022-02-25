const gameStateKey = 'gameState'
const highContrastKey = 'highContrast'

type StoredGameState = {
  guesses: string[]
  solution: string
}

export const saveGameStateToLocalStorage = (gameState: StoredGameState) => {
  localStorage.setItem(gameStateKey, JSON.stringify(gameState))
}

export const loadGameStateFromLocalStorage = () => {
  const state = localStorage.getItem(gameStateKey)
  return state ? (JSON.parse(state) as StoredGameState) : null
}

const gameStatKey = 'gameStats'
const startTimeKey = 'startTime'
const timeResultKey = 'timeResult'

export type GameStats = {
  winDistribution: number[]
  gamesFailed: number
  currentStreak: number
  bestStreak: number
  totalGames: number
  successRate: number
}

export const saveStatsToLocalStorage = (gameStats: GameStats) => {
  localStorage.setItem(gameStatKey, JSON.stringify(gameStats))
}

export const saveStartTimeToLocalStorage = () => {
  const now = Date.now().valueOf();
  localStorage.setItem(startTimeKey, now.toString())
  return now;
}

export const loadStartTimeFromLocalStorage = () => {
  const startTime = localStorage.getItem(startTimeKey)
  if (startTime) return parseInt(startTime)
  else return Date.now().valueOf()
}


export const saveTimeResultToLocalStorage = (timeResult: number) => {
  localStorage.setItem(timeResultKey, timeResult.toString())
}

export const loadTimeResultFromLocalStorage = () => {
  const timeResult = localStorage.getItem(timeResultKey)
  if (timeResult) return parseInt(timeResult)
  else return 0
}

export const loadStatsFromLocalStorage = () => {
  const stats = localStorage.getItem(gameStatKey)
  return stats ? (JSON.parse(stats) as GameStats) : null
}

export const setStoredIsHighContrastMode = (isHighContrast: boolean) => {
  if (isHighContrast) {
    localStorage.setItem(highContrastKey, '1')
  } else {
    localStorage.removeItem(highContrastKey)
  }
}

export const getStoredIsHighContrastMode = () => {
  const highContrast = localStorage.getItem(highContrastKey)
  return highContrast === '1'
}
