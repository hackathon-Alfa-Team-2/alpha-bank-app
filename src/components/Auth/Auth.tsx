// Auth.tsx
import { useState } from 'react'
import { useAuth } from './Auth.hooks'

export const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login, isLoading, error } = useAuth()

  const handleLogin = async () => {
    login(email, password)
  }

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin} disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  )
}
