import './CurrentPlan.css'
import ArrowRight from '../../../assets/arrowRight.svg'
import { Link } from 'react-router-dom'
import TaskComponent from '../../TaskComponent/TaskComponent'
import StatusPlan from '../../StatusPlan/StatusPlan'

export default function CurrentPlan() {
  return (
    <div className='currentPlan'>
      <div className='currentPlan__container'>
        <Link to={'/profile'} className='indidvidualPlan__adress'>
          ИПР ФИО$
        </Link>
        <img
          src={ArrowRight}
          className='currentPlan__arrow'
          alt='иконка стрелки вправо'
        />
        <h3 className='currentPlan__adress'>Текущий ИПР</h3>
      </div>
      <TaskComponent />
      <StatusPlan />
    </div>
  )
}
