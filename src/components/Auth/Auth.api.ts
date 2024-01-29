import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiUrl = import.meta.env.VITE_API_BASE_URL

export const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    login: builder.mutation<
      { access: string; refresh: string },
      { email: string; password: string }
    >({
      query: (body) => ({
        url: 'auth/token/login/',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useLoginMutation } = authApi
