import { employees } from '../../../utils/mockData/employees'
import EmployeeTable from '../../EmployeeTable/EmployeeTable'
import './ListWorkers.css'

export default function ListWorkers() {
  return (
    <div className='listWorkers'>
      <EmployeeTable employees={employees} />
    </div>
  )
}
