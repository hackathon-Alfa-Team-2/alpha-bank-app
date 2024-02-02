/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Navigate } from 'react-router-dom'

interface CustomRouteProps {
  children: React.ReactNode
  hasRole: boolean
}

const ProtectedRoute: React.FC<CustomRouteProps> = ({
  children,
  hasRole,
}: CustomRouteProps) => {
  const token = localStorage.getItem('access_token')

  return token && hasRole ? (
    <>{children}</>
  ) : (
    <Navigate to='/auth' replace={true} />
  )
}

export default ProtectedRoute
