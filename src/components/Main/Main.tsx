import './Main.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Worker from './Worker/Worker'
import IndidvidualPlan from './IndidvidualPlan/IndidvidualPlan'
import Profile from './Profile/Profile'
import SetTask from './SetTask/SetTask'
import Sidebar from './Sidebar/Sidebar'
import EmployeeTable from './EmployeeTable/EmployeeTable'
import { employees } from '../../utils/mockData/employees'

export default function Main() {
  return (
    <main className='main'>
      <Sidebar />
      <Router>
        <Routes>
          <Route
            path='/list-of-workers'
            element={<EmployeeTable employees={employees} />}
          />
          <Route path='/list-of-workers/worker' element={<Worker />} />
          <Route
            path='/list-of-workers/worker/indidvidual-plan'
            element={<IndidvidualPlan />}
          />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/set-of-task' element={<SetTask />} />
        </Routes>
      </Router>
    </main>
  )
}
