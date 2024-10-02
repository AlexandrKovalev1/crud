import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const slice = createSlice({
  name: 'news',
  reducers: creators => {
    return {
      addNewsItem: creators.reducer((state, action: PayloadAction<Omit<NewsItem, 'id'>>) => {
        const id = uuidv4()

        state.push({ ...action.payload, id })
      }),
      deleteNewsItem: creators.reducer((state, action: PayloadAction<{ id: string }>) => {
        return state.filter(n => n.id !== action.payload.id)
      }),
      fetchNews: creators.reducer((_, action: PayloadAction<NewsItem[]>) => {
        return action.payload
      }),
      editNewsItem: (state, action: PayloadAction<EditNewsItem>) => {
        let currentNewsItem = state.find(n => n.id === action.payload.id)

        if (currentNewsItem) {
          currentNewsItem = Object.assign(currentNewsItem, action.payload)
        }

        return state
      },
    }
  },
  initialState: [] as NewsItem[],
})

export type NewsItem = {
  id: string
  content: string
  title: string
}
export type EditNewsItem = Omit<Partial<NewsItem>, 'id'> & { id: string }
export const newsSlice = slice.reducer
export const newsActions = slice.actions
