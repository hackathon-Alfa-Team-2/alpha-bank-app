/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

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

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/',
})

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token')
  if (token) {
    config.headers.Authorization = `Token ${token}`
    console.log('Authorization header set:', `Token ${token}`)
  }
  return config
})

export const fetchUserData = async (): Promise<UserData> => {
  try {
    const response = await axiosInstance.get('users/me/')
    return response.data
  } catch (error: any) {
    throw new Error(error.response?.data || 'Failed to fetch user data')
  }
}
