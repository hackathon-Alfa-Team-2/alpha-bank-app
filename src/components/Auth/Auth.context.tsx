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

      if ('auth_token' in response) {
        const authToken: string | undefined = response.auth_token as string

        if (typeof authToken === 'string') {
          // Устанавливаем флаг аутентификации
          setAuthenticated(true)

          // Сохраняем токен в localStorage
          localStorage.setItem('access_token', authToken)

          console.log('Login successful', authToken)
        } else {
          setError('Token is not a string.')
          console.error('Login failed. Token is not a string.')
        }
      } else {
        setError('Unexpected response format.')
        console.error('Login failed. Unexpected response format.')
      }
    } catch (error: any) {
      setError(error.message || 'An error occurred.')
      console.error('Login failed', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, isLoading, error }}>
      {children}
    </AuthContext.Provider>
  )
}
