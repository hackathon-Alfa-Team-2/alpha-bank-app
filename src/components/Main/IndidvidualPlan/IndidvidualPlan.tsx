import './IndidvidualPlan.css'
import ArrowRight from '../../../assets/arrowRight.svg'
import AboutWorker from '../../AboutWorker/AboutWorker'

export default function IndidvidualPlan() {
  return (
    <div className='indidvidualPlan'>
      <div className='indidvidualPlan__container'>
        <h3 className='indidvidualPlan__adress'>ИПР</h3>
        <img src={ArrowRight} className='indidvidualPlan__arrow' alt='иконка стрелки вправо' />
        <h3 className='indidvidualPlan__adress'>Сотрудники</h3>
        <img src={ArrowRight} className='worker__arrow' alt='иконка стрелки вправо' />
        <h3 className='indidvidualPlan__adress'>ИПР сотрудника</h3>
      </div>
      <AboutWorker />
    </div>
  )
}
