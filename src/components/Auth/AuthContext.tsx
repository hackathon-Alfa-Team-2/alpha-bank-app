// AuthProvider.tsx
import { createContext, ReactNode, useEffect, useState } from 'react'
import { useLoginMutation } from './authApi'

interface AuthContextProps {
  isAuthenticated: boolean
  login: (email: string, password: string) => void
  isLoading: boolean
  isError: boolean
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined,
)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [loginMutation] = useLoginMutation()

  useEffect(() => {
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
          setAuthenticated(true)

          localStorage.setItem('access_token', authToken)

          console.log('Login successful', authToken)
        } else {
          setIsError(true)
          console.error('Login failed. Token is not a string.')
        }
      } else {
        setIsError(true)
        console.error('Login failed. Unexpected response format.')
      }
    } catch (error) {
      setIsError(true)
      console.error('Login failed', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, isLoading, isError }}
    >
      {children}
    </AuthContext.Provider>
  )
}
