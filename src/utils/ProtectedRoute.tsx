import React from 'react'
import { Navigate } from 'react-router-dom'

type CustomRouteProps = {
  children: React.ReactNode
}

const ProtectedRoute: React.FC<CustomRouteProps> = ({
  children,
}: CustomRouteProps) => {
  const token = localStorage.getItem('access_token')
  console.log('ProtectedRoute', token)

  return token ? <>{children}</> : <Navigate to='/auth' replace={true} />
}

export default ProtectedRoute
