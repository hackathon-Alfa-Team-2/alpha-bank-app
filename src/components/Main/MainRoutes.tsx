// MainRoutes.tsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Worker from './Worker/Worker'
import ListWorkers from './ListWorkers/ListWorkers'
import Main from './Main'
import IndidvidualPlan from './IndidvidualPlan/IndidvidualPlan'
import Profile from './Profile/Profile'
import CurrentPlan from './CurrentPlan/CurrentPlan'
import { Auth } from '../Auth/Auth'
import ProtectedRoute from '../../utils/ProtectedRoute'

const MainRoutes: React.FC = () => {
  return (
    <Main>
      <Routes>
        <Route path='/auth' element={<Auth />} />
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
      </Routes>
    </Main>
  )
}

export default MainRoutes
