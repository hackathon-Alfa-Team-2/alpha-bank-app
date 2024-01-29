// MainRoutes.tsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Worker from './Worker/Worker'
import ListWorkers from './ListWorkers/ListWorkers'
import Main from './Main'
import IndidvidualPlan from './IndidvidualPlan/IndidvidualPlan'
import Profile from './Profile/Profile'
import CurrentPlan from './CurrentPlan/CurrentPlan'

const MainRoutes: React.FC = () => {
  return (
    <Main>
      <Routes>
        <Route path='/employees' element={<ListWorkers />} />
        <Route path='/employees/user' element={<Worker />} />
        <Route path='/employees/user/lms' element={<IndidvidualPlan />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/lms' element={<CurrentPlan />} />
      </Routes>
    </Main>
  )
}

export default MainRoutes
