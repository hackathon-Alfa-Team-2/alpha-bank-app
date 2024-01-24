import './ViewTask.css'
import ArrowRight from '../../../assets/arrowRight.svg'
import { Link } from 'react-router-dom'
import TaskComponent from '../../TaskComponent/TaskComponent'
import StatusTask from '../../StatusTask/StatusTask'
import Comments from '../../Comments/Comments'

export default function ViewTask() {
  return (
    <div className='viewTask'>
      <div className='viewTask__container'>
        <Link to={'/profile'} className='viewTask__adress'>
          ИПР ФИО$
        </Link>
        <img
          src={ArrowRight}
          className='viewTask__arrow'
          alt='иконка стрелки вправо'
        />
        <Link to={'/profile/сurrent-plan'} className='viewTask__adress'>
          Текущий ИПР
        </Link>
        <img
          src={ArrowRight}
          className='viewTask__arrow'
          alt='иконка стрелки вправо'
        />
        <h3 className='viewTask__adress'>Задача $</h3>
      </div>
      <TaskComponent />
      <StatusTask />
      <Comments />
    </div>
  )
}
