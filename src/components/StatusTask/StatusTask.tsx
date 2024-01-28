import './StatusTask.css'
import Flag from '../../assets/flag.svg'
import Calendar from '../../assets/calendar.svg'
import Buttons from '../Buttons/Buttons'

export default function StatusTask() {
  return (
    <div className='statusTask'>
      <div>
        <div className='statusTask__container-select'>
          <img src={Flag} className='statusTask__img' alt='иконка флага' />
          <select
            defaultValue='in-work'
            id='status'
            className='statusTask__select'
          >
            <option
              disabled
              hidden
              value='in-work'
              className='statusTask__option'
            >
              Выберите статус
            </option>
            <option value='В работе' className='statusTask__option'>
              В работе
            </option>
            <option value='Выполнен' className='statusTask__option'>
              Выполнен
            </option>
            <option value='Отменен' className='statusTask__option'>
              Отменен
            </option>
            <option value='Не выполнен' className='statusTask__option'>
              Не выполнен
            </option>
          </select>
        </div>
      </div>

      <div className='statusTask__container'>
        <div className='statusTask__container-select'>
          <img
            src={Calendar}
            className='statusTask__img'
            alt='иконка календаря'
          />
          <select id='calendar' className='statusTask__select'>
            <option value='В работе' className='statusTask__option'>
              Выберите дедлайн
            </option>
          </select>
        </div>
      </div>
      <Buttons />
    </div>
  )
}
