import './Main.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Worker from './Worker/Worker'
import IndidvidualPlan from './IndidvidualPlan/IndidvidualPlan'
import NewTask from './NewTask/NewTask'
import Profile from './Profile/Profile'
import CurrentPlan from './CurrentPlan/CurrentPlan'
import ListWorkers from './ListWorkers/ListWorkers'
import ViewTask from './ViewTask/ViewTask'

export default function Main() {
  return (
    <main className='main'>
      <Router>
        <Routes>
          <Route path='/list-of-workers' element={<ListWorkers />} />
          <Route path='/list-of-workers/worker' element={<Worker />} />
          <Route
            path='/list-of-workers/worker/indidvidual-plan'
            element={<IndidvidualPlan />}
          />
          <Route
            path='/list-of-workers/worker/indidvidual-plan/new-task'
            element={<NewTask />}
          />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/сurrent-plan' element={<CurrentPlan />} />
          <Route
            path='/profile/сurrent-plan/view-task'
            element={<ViewTask />}
          />
        </Routes>
      </Router>
    </main>
  )
}
