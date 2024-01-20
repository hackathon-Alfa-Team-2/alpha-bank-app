import './Main.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListWorkers from './ListWorkers/ListWorkers'
import Worker from './Worker/Worker'
import IndidvidualPlan from './IndidvidualPlan/IndidvidualPlan'
import Profile from './Profile/Profile'
import SetTask from './SetTask/SetTask'
import Sidebar from './Sidebar/Sidebar'

export default function Main() {
  return (
    <main className='main'>
      <Sidebar />
      <Router>
        <Routes>
          <Route path='/list-of-workers' element={<ListWorkers />} />
          <Route path='/list-of-workers/worker' element={<Worker />} />
          <Route path='/list-of-workers/worker/indidvidual-plan' element={<IndidvidualPlan />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/set-of-task' element={<SetTask />} />
        </Routes>
      </Router>
    </main>
  )
}
