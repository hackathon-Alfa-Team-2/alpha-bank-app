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

export interface ILms {
  id?: string | number
  name?: string
  description?: string
  is_active?: boolean
  deadline?: string
  status?: string
  skill_assessment_before?: number
  skill_assessment_after?: number
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
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
    createLMS: builder.mutation<ILms, { userId: string; data: ILms }>({
      query: ({ userId, data }) => ({
        url: `/users/${userId}/lms/`,
        method: 'POST',
        body: data,
      }),
    }),
    editLMS: builder.mutation<
      ILms,
      { userId: string; data: ILms; lmsId: string }
    >({
      query: ({ userId, data, lmsId }) => ({
        url: `/users/${userId}/lms/${lmsId}/`,
        method: 'PATCH',
        body: data,
      }),
    }),
    createTask: builder.mutation<
      ILms,
      { userId: string; lmsId: string; data: ILms }
    >({
      query: ({ userId, lmsId, data }) => ({
        url: `/users/${userId}/lms/${lmsId}/tasks/`,
        method: 'POST',
        body: data,
      }),
    }),
    getUserData: builder.query<UserData, void>({
      query: () => ({ url: 'users/me/', method: 'GET' }),
    }),
    getUsers: builder.query<any, void>({
      query: () => ({ url: 'users/', method: 'GET' }),
    }),
    getUserByID: builder.query<any, { id: string }>({
      query: (args) => ({ url: `users/${args.id}/`, method: 'GET' }),
    }),
    getUserLMSAll: builder.query<any, { id: string }>({
      query: (args) => ({ url: `users/${args.id}/lms/`, method: 'GET' }),
    }),
    getUserLMS: builder.query<any, { id: string; lmsId: string }>({
      query: (args) => ({
        url: `users/${args.id}/lms/${args.lmsId}/`,
        method: 'GET',
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  useGetUserDataQuery,
  useGetUsersQuery,
  useGetUserByIDQuery,
  useGetUserLMSAllQuery,
  useCreateLMSMutation,
  useEditLMSMutation,
  useGetUserLMSQuery,
} = authApi
