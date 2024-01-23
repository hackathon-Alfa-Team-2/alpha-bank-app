import './statusPlan.css'
import Flag from '../../assets/flag.svg'
import Calendar from '../../assets/calendar.svg'
import Person from '../../assets/person.svg'
import Star from '../../assets/Star.svg'
import StarGray from '../../assets/Star-gray.svg'
import Buttons from '../../components/Buttons/Buttons'

export default function StatusPlan() {
  return (
    <div className='statusPlan'>
      <div className='statusPlan__container'>
        <label htmlFor='status' className='statusPlan__label'>
          Статус ИПР
        </label>
        <div className='statusPlan__container-select'>
          <img src={Flag} className='statusPlan__img' alt='иконка флага' />
          <select id='status' className='statusPlan__select'>
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

      <div className='statusPlan__container'>
        <label htmlFor='status' className='statusPlan__label'>
          Дедлайн
        </label>
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

      <div className='statusPlan__container'>
        <label htmlFor='status' className='statusPlan__label'>
          Руководитель
        </label>
        <div className='statusPlan__container-select'>
          <img src={Person} className='statusPlan__img' alt='иконка силуета' />
          <h3 className='statusPlan__text'>Мика Ратилайнен</h3>
        </div>
      </div>

      <div className='statusPlan__container'>
        <label htmlFor='status' className='statusPlan__label'>
          Оценка ИПР
        </label>
        <p className='statusPlan__text statusPlan__text_type_margin'>
          Предварительная:
        </p>
        <div className='statusPlan__container-select'>
          <img src={Star} className='statusPlan__img' alt='иконка звезды' />
          <select id='calendar' className='statusPlan__select'>
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
        <label
          htmlFor='status'
          className='statusPlan__label statusPlan__label_color_gray'
        >
          Итоговая:
        </label>
        <div className='statusPlan__container-select'>
          <img src={StarGray} className='statusPlan__img' alt='иконка звезды' />
          <select
            id='calendar'
            className='statusPlan__select statusPlan__select_color_gray'
          >
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
      </div>
      <Buttons />
    </div>
  )
}
