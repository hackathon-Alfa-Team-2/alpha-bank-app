import './IndidvidualPlan.css'
import ArrowRight from '../../../assets/arrowRight.svg'
import TextAreaPlan from '../../TextAreaPlan/TextAreaPlan'
import StatusPlan from '../../StatusPlan/StatusPlan'
import Plus from '../../../assets/plus.svg'
import { Link } from 'react-router-dom'

export default function IndidvidualPlan() {
  return (
    <div className='indidvidualPlan'>
      <div className='indidvidualPlan__container'>
        <Link to={'/list-of-workers'} className='indidvidualPlan__adress'>
          ИПР
        </Link>
        <img
          src={ArrowRight}
          className='indidvidualPlan__arrow'
          alt='иконка стрелки вправо'
        />
        <Link
          to={'/list-of-workers/worker'}
          className='indidvidualPlan__adress'
        >
          Сотрудники
        </Link>
        <img
          src={ArrowRight}
          className='worker__arrow'
          alt='иконка стрелки вправо'
        />
        <h3 className='indidvidualPlan__adress'>ИПР сотрудника</h3>
      </div>
      <TextAreaPlan />
      <StatusPlan />
      <h3 className='indidvidualPlan__tasks'>Задачи</h3>
      <div className='indidvidualPlan__container-tasks'>
        <img
          src={Plus}
          className='indidvidualPlan__img-tasks'
          alt='иконка плюсика'
        />
        <p className='indidvidualPlan__add-task'>Добавить задачу</p>
      </div>
    </div>
  )
}
