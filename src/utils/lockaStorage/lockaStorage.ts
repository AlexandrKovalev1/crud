import { RootState } from '../../services/store.ts'
import { NewsItem } from '../../features/newsPage/model/newsSlice.ts'

export const loadNews = (): NewsItem[] | undefined => {
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
export const saveNews = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state.news)
    localStorage.setItem('news', serializedState)
  } catch {
    // ignore write errors
  }
}
