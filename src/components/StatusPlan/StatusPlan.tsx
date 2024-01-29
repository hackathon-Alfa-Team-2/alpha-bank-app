import Flag from '../../assets/flag.svg'
import Calendar from '../../assets/calendar.svg'
import Person from '../../assets/person.svg'
import Star from '../../assets/Star.svg'
import StarGray from '../../assets/Star-gray.svg'
import Buttons from '../../components/Buttons/Buttons'
import './StatusPlan.css'

export default function StatusPlan() {
  return (
    <div className='statusPlan'>
      <div>
        <div className='statusPlan__container-select'>
          <img src={Flag} className='statusPlan__img' alt='иконка флага' />
          <select
            id='status'
            defaultValue='select-status'
            className='statusPlan__select'
          >
            <option
              disabled
              hidden
              value='select-status'
              className='statusPlan__option statusPlan__option_type_work'
            >
              Выберите статус
            </option>
            <option
              value='В работе'
              className='statusPlan__option statusPlan__option_type_work'
            >
              В работе
            </option>
            <option
              value='Выполнен'
              className='statusPlan__option statusPlan__option_type_done'
            >
              Выполнен
            </option>
            <option
              value='Отменен'
              className='statusPlan__option statusPlan__option_type_cancel'
            >
              Отменен
            </option>
            <option
              value='Не выполнен'
              className='statusPlan__option statusPlan__option_type_cancel_notWork'
            >
              Не выполнен
            </option>
          </select>
        </div>
      </div>
      <div>
        <div className='statusPlan__container-select'>
          <img
            src={Calendar}
            className='statusPlan__img'
            alt='иконка календаря'
          />
          <select id='calendar' className='statusPlan__select'>
            <option value='В работе' className='statusPlan__option'>
              Выбрать дату
            </option>
          </select>
        </div>
      </div>
      <div className='statusPlan__container-select'>
        <img src={Person} className='statusPlan__img' alt='иконка силуета' />
        <select
          id='status'
          defaultValue='choise-boss'
          className='statusPlan__select'
        >
          <option
            disabled
            hidden
            value='choise-boss'
            className='statusPlan__option statusPlan__option_type_work'
          >
            Выберите проверяющего
          </option>
          <option
            value='В работе'
            className='statusPlan__option statusPlan__option_type_work'
          >
            Мика Ратилайнен
          </option>
        </select>
      </div>
      <div className='statusPlan__container-select'>
        <img src={Star} className='statusPlan__img' alt='иконка звезды' />
        <select
          id='calendar'
          defaultValue='previous-mark'
          className='statusPlan__select'
        >
          <option
            disabled
            hidden
            value='previous-mark'
            className='statusPlan__option'
          >
            Предварительная оценка
          </option>
          <option value='5' className='statusPlan__option'>
            5
          </option>
          <option value='4' className='statusPlan__option'>
            4
          </option>
          <option value='3' className='statusPlan__option'>
            3
          </option>
          <option value='2' className='statusPlan__option'>
            2
          </option>
          <option value='1' className='statusPlan__option'>
            1
          </option>
        </select>
      </div>{' '}
      <div className='statusPlan__container-select'>
        <img src={StarGray} className='statusPlan__img' alt='иконка звезды' />
        <select
          defaultValue='finish-mark'
          id='calendar'
          className='statusPlan__select statusPlan__select_color_gray'
        >
          <option
            disabled
            hidden
            value='finish-mark'
            className='statusPlan__option'
          >
            Итоговая оценка
          </option>
          <option value='5' className='statusPlan__option'>
            5
          </option>
          <option value='4' className='statusPlan__option'>
            4
          </option>
          <option value='3' className='statusPlan__option'>
            3
          </option>
          <option value='2' className='statusPlan__option'>
            2
          </option>
          <option value='1' className='statusPlan__option'>
            1
          </option>
        </select>
      </div>
      <Buttons />
    </div>
  )
}
