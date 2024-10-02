import { NewsItem } from '../../features/newsPage/model/newsSlice.ts'

export const loadNews = (): NewsItem[] | undefined => {
  try {
    const serializedState = localStorage.getItem('news')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (e) {
    console.log(e)
    return undefined
  }
}
export const saveNews = (news: NewsItem[]) => {
  try {
    const serializedState = JSON.stringify(news)
    localStorage.setItem('news', serializedState)
  } catch {
    console.log('not save error')
  }
}
