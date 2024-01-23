import './NewIndividualPlan.css'
import ArrowRight from '../../../assets/arrowRight.svg'
import { Link } from 'react-router-dom'
import TextAreaPlan from '../../TextAreaPlan/TextAreaPlan'
import StatusTask from '../../StatusTask/StatusTask'

export default function NewIndividualPlan() {
  return (
    <div className='newIndividualPlan'>
      <div className='newIndidvidualPlan__container'>
        <Link to={'/list-of-workers'} className='newIndidvidualPlan__adress'>
          ИПР
        </Link>
        <img
          src={ArrowRight}
          className='newIndidvidualPlan__arrow'
          alt='иконка стрелки вправо'
        />
        <Link
          to={'/list-of-workers/worker'}
          className='newIndidvidualPlan__adress'
        >
          Сотрудники
        </Link>
        <img
          src={ArrowRight}
          className='newIndidvidualPlan__arrow'
          alt='иконка стрелки вправо'
        />
        <Link
          to={'/list-of-workers/worker/indidvidual-plan'}
          className='newIndidvidualPlan__adress'
        >
          ИПР сотрудника
        </Link>
        <img
          src={ArrowRight}
          className='newIndidvidualPlan__arrow'
          alt='иконка стрелки вправо'
        />
        <h3 className='newIndidvidualPlan__adress'>Новый ИПР</h3>
      </div>
      <TextAreaPlan />
      <StatusTask />
    </div>
  )
}
