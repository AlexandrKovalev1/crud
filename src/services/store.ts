import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { newsSlice } from '../features/newsPage/model/newsSlice.ts'
import { appSlice } from '../app/appSlice.ts'

export const store = configureStore({
  reducer: {
    app: appSlice,
    news: newsSlice,
  },
})

export const useAppDispatch = useDispatch<typeof store.dispatch>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type RootState = ReturnType<typeof store.getState>
