import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface UserData {
  id: number
  first_name: string
  second_name: string
  last_name: string
  position: string
  grade: string
  role: string
  photo: string | null
}

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/api/v1/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('access_token')
      if (token) {
        headers.set('Authorization', `Token ${token}`)
        console.log('Authorization header set:', `Token ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<string, { email: string; password: string }>({
      query: (body) => ({
        url: 'auth/token/login/',
        method: 'POST',
        body,
      }),
    }),
    getUserData: builder.query<UserData, void>({
      query: () => ({ url: 'users/me/', method: 'GET' }),
    }),
  }),
})

export const { useLoginMutation, useGetUserDataQuery } = authApi
