import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL, LOGIN } from '../../constants/endpoints'

export const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    login: builder.mutation<
      { access: string; refresh: string },
      { email: string; password: string }
    >({
      query: (body) => ({
        url: LOGIN,
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useLoginMutation } = authApi
