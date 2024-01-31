// MainRoutes.tsx
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Worker from './Worker/Worker'
import ListWorkers from './ListWorkers/ListWorkers'
import Main from './Main'
import IndidvidualPlan from './IndidvidualPlan/IndidvidualPlan'
import Profile from './Profile/Profile'
import CurrentPlan from './CurrentPlan/CurrentPlan'
import { Auth } from '../Auth/Auth'
import ProtectedRoute from '../../utils/ProtectedRoute'
import { useGetUserDataQuery } from '../Auth/Auth.api'

const MainRoutes: React.FC = () => {
  const { data: userData, isLoading } = useGetUserDataQuery()

  if (!userData || isLoading) {
    return <div>Загрузка...</div>
  }

  console.log(userData?.role)

  return (
    <Main>
      <Routes>
        <Route path='/auth' element={<Auth />} />
        {userData?.role === 'supervisor' && (
          <>
            <Route
              path='/employees'
              element={
                <ProtectedRoute>
                  <ListWorkers />
                </ProtectedRoute>
              }
            />
            <Route
              path='/employees/user'
              element={
                <ProtectedRoute>
                  <Worker />
                </ProtectedRoute>
              }
            />
            <Route
              path='/employees/user/lms'
              element={
                <ProtectedRoute>
                  <IndidvidualPlan />
                </ProtectedRoute>
              }
            />
            <Route path='/*' element={<Navigate to='/employees' replace />} />
          </>
        )}
        {userData?.role === 'employee' && (
          <>
            <Route
              path='/profile'
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path='/profile/lms'
              element={
                <ProtectedRoute>
                  <CurrentPlan />
                </ProtectedRoute>
              }
            />
          </>
        )}
      </Routes>
    </Main>
  )
}

export default MainRoutes
