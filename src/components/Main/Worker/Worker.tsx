import './Worker.css'
import ArrowRight from '../../../assets/arrowRight.svg'
import NoIpr from '../../../assets/iconNoIPR.svg'
import AboutWorker from '../../AboutWorker/AboutWorker'
import { Link } from 'react-router-dom'
import Popup from '../../../components/Popup/Popup'
import PlanTable from '../../Table/PlanTable/PlanTable'
import { plans } from '../../../utils/mockData/plans'

export default function Worker() {
  return (
    <div className='worker'>
      <div className='worker__container'>
        <Link to={'/list-of-workers'} className='worker__adress'>
          Все ИПР
        </Link>
        <img
          src={ArrowRight}
          className='worker__arrow'
          alt='иконка стрелки вправо'
        />
        <h3 className='worker__adress'>$ФИО</h3>
        <Popup />
      </div>
      <AboutWorker />

      {plans.length !== 0 ? (
        <PlanTable plan={plans} />
      ) : (
        <div className='worker__container-noIPR worker__container-noIPR_display_flex'>
          <div className='worker__wrapperImg-noIPR'>
            <img
              src={NoIpr}
              className='worker__noIpr'
              alt='иконка отсутствия ИПР'
            />
          </div>
          <h4 className='worker__title'>У сотрудника пока нет ИПР</h4>
          <button className='worker__button'>Создать ИПР +</button>
        </div>
      )}
    </div>
  )
}
