/* eslint-disable @typescript-eslint/no-explicit-any */
// MainRoutes.tsx
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Worker from './Worker/Worker'
import ListWorkers from './ListWorkers/ListWorkers'
import Main from './Main'
import IndidvidualPlan from './IndidvidualPlan/IndidvidualPlan'
import { Auth } from '../Auth/Auth'
import ProtectedRoute from './ProtectedRoute'
import { getUserData } from '../../utils/getUserData'

const MainRoutes: React.FC = () => {
  const userData = getUserData()
  const hasRoleSupervisor = userData?.role === 'supervisor'
  const hasRoleEmployee = userData?.role === 'employee'

  //const { data } = useGetUserDataQuery()
  //useEffect(() => {
  //  if (data !== undefined) {
  //    localStorage.setItem('userData', JSON.stringify(userData))
  //  }
  //})

  return (
    <Main>
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route
          path='/employees'
          element={
            <ProtectedRoute hasRole={hasRoleSupervisor}>
              <ListWorkers />
            </ProtectedRoute>
          }
        />
        <Route
          path='/employees/:id'
          element={
            <ProtectedRoute hasRole={hasRoleSupervisor}>
              <Worker />
            </ProtectedRoute>
          }
        />
        <Route
          path='/employees/user/lms'
          element={
            <ProtectedRoute hasRole={hasRoleSupervisor}>
              <IndidvidualPlan />
            </ProtectedRoute>
          }
        />

        {hasRoleSupervisor && (
          <Route path='/*' element={<Navigate to='/employees' replace />} />
        )}
        {hasRoleEmployee && (
          <Route path='/*' element={<Navigate to='/profile' replace />} />
        )}
      </Routes>
    </Main>
  )
}

export default MainRoutes
