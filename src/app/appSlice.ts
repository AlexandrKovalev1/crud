import { createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(isPending, state => {
      state.status = 'loading'
    })
    builder.addMatcher(isFulfilled, state => {
      state.status = 'succeeded'
    })
    builder.addMatcher(isRejected, (state, action: any) => {
      if (action.payload) {
        state.error = action.payload.messages[0]
      } else {
        state.error = action.error.message ? action.error.message : 'Something went wrong'
      }
      state.status = 'failed'
    })
  },
  selectors: {
    selectAppStatus: state => state.status,
  },
})

export type AppStateType = {
  status: RequestStatusType
  error: string | null
}
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export const appSlice = slice.reducer
export const { selectAppStatus } = slice.selectors
