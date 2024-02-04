import { configureStore } from '@reduxjs/toolkit'
import { authApi } from '../components/Auth/Auth.api'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
  devTools: true,
})

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>
export type RootState = ReturnType<typeof store.getState>
