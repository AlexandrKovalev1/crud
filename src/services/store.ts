import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { newsSlice } from '../features/newsPage/model/newsSlice.ts'
import { appSlice } from '../app/appSlice.ts'
import { loadState, saveState } from '../utils/lockaStorage/lockaStorage.ts'

const persistedState = loadState()
export const store = configureStore({
  reducer: {
    app: appSlice,
    news: newsSlice,
  },
  preloadedState: {
    news: persistedState,
  },
})

store.subscribe(() => {
  saveState(store.getState())
})

export const useAppDispatch = useDispatch<typeof store.dispatch>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type RootState = ReturnType<typeof store.getState>
