import { asyncThunkCreator, buildCreateSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import { newsApi } from '../api/newsApi.ts'

const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

const slice = createAppSlice({
  name: 'news',
  reducers: creators => {
    return {
      fetchNews: creators.asyncThunk<NewsItem[]>(
        async () => {
          return await newsApi.fetchNews()
        },
        {
          fulfilled: (_, action) => {
            return action.payload
          },
        }
      ),
      addNewsItem: creators.asyncThunk<NewsItem, Omit<NewsItem, 'id'>>(
        async (newsItem: Omit<NewsItem, 'id'>) => {
          const id = uuidv4()
          const res = await newsApi.addNews({ ...newsItem, id })

          return { ...res }
        },
        {
          fulfilled: (state, action) => {
            state.push(action.payload)
          },
        }
      ),

      deleteNewsItem: creators.asyncThunk<string, string>(
        async (id: string) => {
          return await newsApi.deleteNews(id)
        },
        {
          fulfilled: (state, action: PayloadAction<string>) => {
            return state.filter(n => n.id !== action.payload)
          },
        }
      ),
      editNewsItem: creators.asyncThunk<EditNewsItem, EditNewsItem>(
        async (data: EditNewsItem) => {
          return await newsApi.editNews(data)
        },
        {
          fulfilled: (state, action: PayloadAction<EditNewsItem>) => {
            let currentNewsItem = state.find(n => n.id === action.payload.id)

            if (currentNewsItem) {
              currentNewsItem = Object.assign(currentNewsItem, action.payload)
            }

            return state
          },
        }
      ),
    }
  },
  initialState: [] as NewsItem[],
  selectors: {
    selectNews: state => state,
  },
})

export type NewsItem = {
  id: string
  content: string
  title: string
}
export type EditNewsItem = Omit<Partial<NewsItem>, 'id'> & { id: string }
export const newsSlice = slice.reducer
export const newsActions = slice.actions
export const { selectNews } = slice.selectors
