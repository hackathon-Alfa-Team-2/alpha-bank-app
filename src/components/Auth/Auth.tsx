// Auth.tsx
import { useState } from 'react'
import { useLoginMutation } from './Auth.api'
import { useNavigate } from 'react-router-dom'

export const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [login, { isLoading, error }] = useLoginMutation()
  const navigate = useNavigate()

  const handleLogin = () => {
    login({ email, password })
      .unwrap()
      .then((response) => {
        const authToken = JSON.parse(JSON.stringify(response))
        console.log('Login successful', authToken.auth_token)
        localStorage.setItem('access_token', authToken.auth_token)
        navigate('/employees')
      })
      .catch((error) => {
        console.error('Login failed', error)
      })
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
      {error && (
        <div style={{ color: 'red' }}>
          {'status' in error && error.status
            ? `Error ${error.status}: ${error.data}`
            : 'An error occurred.'}
        </div>
      )}
    </div>
  )
}
