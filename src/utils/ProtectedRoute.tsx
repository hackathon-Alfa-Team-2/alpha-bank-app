import React from 'react'
import { Route, RouteProps, Navigate } from 'react-router-dom'
import { useAuth } from '../components/Auth/Auth.hooks'

type CustomRouteProps = RouteProps

const ProtectedRoute: React.FC<CustomRouteProps> = ({
  element,
  ...rest
}: CustomRouteProps) => {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to='/auth' replace={true} />
  )
}

export default ProtectedRoute
