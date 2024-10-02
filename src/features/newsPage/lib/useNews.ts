import { useAppDispatch, useAppSelector } from '../../../services/store.ts'
import { newsActions, selectNews } from '../model/newsSlice.ts'
import { useEffect } from 'react'

export const useNews = () => {
  const news = useAppSelector(selectNews)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(newsActions.fetchNews())
  }, [])
  return {
    news,
  }
}
