import './NewTask.css'
import ArrowRight from '../../../assets/arrowRight.svg'
import { Link } from 'react-router-dom'
import StatusTask from '../../StatusTask/StatusTask'
import Comments from '../../Comments/Comments'
import TaskComponent from '../../TaskComponent/TaskComponent'

export default function NewTask() {
  return (
    <div className='newTask'>
      <div className='newTask__container'>
        <Link to={'/list-of-workers'} className='newTask__adress'>
          Все ИПР
        </Link>
        <img
          src={ArrowRight}
          className='newTask__arrow'
          alt='иконка стрелки вправо'
        />
        <Link to={'/list-of-workers/worker'} className='newTask__adress'>
          $ФИО
        </Link>
        <img
          src={ArrowRight}
          className='newTask__arrow'
          alt='иконка стрелки вправо'
        />
        <Link
          to={'/list-of-workers/worker/indidvidual-plan'}
          className='newTask__adress'
        >
          Новый ИПР
        </Link>
        <img
          src={ArrowRight}
          className='newTask__arrow'
          alt='иконка стрелки вправо'
        />
        <h3 className='newTask__adress'>Новая задача</h3>
      </div>
      <TaskComponent />
      <StatusTask />
      <Comments />
    </div>
  )
}
