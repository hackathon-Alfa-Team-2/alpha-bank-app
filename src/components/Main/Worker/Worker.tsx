import './Worker.css'
import ArrowRight from '../../../assets/arrowRight.svg'
import NoIpr from '../../../assets/iconNoIPR.svg'
import AboutWorker from '../../AboutWorker/AboutWorker'
import { Link } from 'react-router-dom'

export default function Worker() {
  return (
    <div className='worker'>
      <div className='worker__container'>
        <Link to={'/list-of-workers'} className='worker__adress'>
          ИПР
        </Link>
        <img
          src={ArrowRight}
          className='worker__arrow'
          alt='иконка стрелки вправо'
        />
        <h3 className='worker__adress'>Сотрудники</h3>
      </div>
      <AboutWorker />

      {/* Если нет ИПР, то: */}
      <div className='worker__container-noIPR'>
        <div className='worker__wrapperImg-noIPR'>
          <img
            src={NoIpr}
            className='worker__noIpr'
            alt='иконка отсутствия ИПР'
          />
        </div>
        <h4 className='worker__title'>У сотрудника пока нет ИПР</h4>
        <p className='worker__subtitle'>
          Чтобы создать индивидуальный план развития сотрудника, нажмите
          «Создать ИПР»
        </p>
      </div>
      <div></div>
    </div>
  )
}
