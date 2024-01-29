// Auth.api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/v1/' }),
  endpoints: (builder) => ({
    login: builder.mutation<string, { email: string; password: string }>({
      query: (body) => ({
        url: 'auth/token/login/',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useLoginMutation } = authApi
