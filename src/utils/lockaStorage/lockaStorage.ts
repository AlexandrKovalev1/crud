import { RootState } from '../../services/store.ts'

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('news')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}
export const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state.news)
    localStorage.setItem('news', serializedState)
  } catch {
    // ignore write errors
  }
}
