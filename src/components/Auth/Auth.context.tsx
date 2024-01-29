/* eslint-disable @typescript-eslint/no-explicit-any */
// AuthProvider.tsx
import { createContext, ReactNode, useEffect, useState } from 'react'
import { useLoginMutation } from './Auth.api'

interface AuthContextProps {
  isAuthenticated: boolean
  login: (email: string, password: string) => void
  isLoading: boolean
  error: string | null
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined,
)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null) // Инициализируем ошибку значением null
  const [loginMutation] = useLoginMutation()

  useEffect(() => {
    // Проверяем наличие токена в localStorage при инициализации
    const storedToken = localStorage.getItem('access_token')
    if (storedToken) {
      setAuthenticated(true)
    }
  }, [])

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true)
      const response = await loginMutation({ email, password })

      // Проверяем, является ли ответ строкой
      if (typeof response === 'string') {
        // Пытаемся распарсить ответ как JSON
        let data
        try {
          data = JSON.parse(response)
        } catch (parseError) {
          setError('Failed to parse response data.')
          console.error(
            'Login failed. Failed to parse response data.',
            response,
          )
          return
        }

        handleData(data)
      } else if ('data' in response) {
        // Если ответ не строка, то продолжаем обработку, как раньше
        const data = response.data

        handleData(data)
      } else if ('error' in response) {
        setError('Error in response.')
        console.error('Login failed. Error in response.', response.error)
      } else {
        setError('Unexpected response format.')
        console.error('Login failed. Unexpected response format.', response)
      }
    } catch (error: any) {
      setError(error.message || 'An error occurred.')
      console.error('Login failed', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleData = (data: any) => {
    // Проверяем, есть ли свойство "auth_token" в data
    if ('auth_token' in data) {
      const authToken: unknown = data.auth_token

      if (typeof authToken === 'string') {
        setAuthenticated(true)
        localStorage.setItem('access_token', authToken)
        console.log('Login successful', authToken)
      } else {
        setError('Token is not a string.')
        console.error('Login failed. Token is not a string.', data)
      }
    } else {
      setError('Unexpected response format.')
      console.error('Login failed. Unexpected response format.', data)
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, isLoading, error }}>
      {children}
    </AuthContext.Provider>
  )
}
