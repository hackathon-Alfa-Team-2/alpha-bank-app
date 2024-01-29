import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { AuthProvider } from '../Auth/AuthContext'
import { useAuth } from '../Auth/useAuth'
import './App.css'
import MainRoutes from '../Main/MainRoutes'
import { Auth } from '../Auth/Auth'

function App() {
  const { isAuthenticated } = useAuth()

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path='/*'
            element={isAuthenticated ? <MainRoutes /> : <Auth />}
          />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
