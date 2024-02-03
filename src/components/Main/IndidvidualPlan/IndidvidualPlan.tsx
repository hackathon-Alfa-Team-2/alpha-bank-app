import './IndidvidualPlan.css'
import ArrowRight from '../../../assets/arrowRight.svg'
import TextAreaPlan from '../../TextAreaPlan/TextAreaPlan'
import StatusPlan from '../../StatusPlan/StatusPlan'
import Plus from '../../../assets/plus.svg'
import { Link, useParams } from 'react-router-dom'

export default function IndidvidualPlan() {
  const { id } = useParams()
  console.log(id)

  return (
    <div className='indidvidualPlan'>
      <div className='indidvidualPlan__container'>
        <Link to={'/employees/'} className='indidvidualPlan__adress'>
          Все ИПР
        </Link>
        <img
          src={ArrowRight}
          className='indidvidualPlan__arrow'
          alt='иконка стрелки вправо'
        />
        <Link to={`/employees/${id}`} className='indidvidualPlan__adress'>
          $ФИО
        </Link>
        <img
          src={ArrowRight}
          className='worker__arrow'
          alt='иконка стрелки вправо'
        />
        <h3 className='indidvidualPlan__adress'>Новый ИПР</h3>
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
      <StatusPlan />
    </div>
  )
}
