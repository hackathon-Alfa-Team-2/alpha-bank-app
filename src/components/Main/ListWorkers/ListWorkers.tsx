import { employees } from '../../../utils/mockData/employees'
import EmployeeTable from '../EmployeeTable/EmployeeTable'
import './ListWorkers.css'

export default function ListWorkers() {
  return (
    <div className='listWorkers'>
      <h2 className='listWorkers__title'>ИПР сотрудников</h2>
      <div className='listWorkers__container-statistic'>
        <div className='listWorkers__items'>
          <p className='listWorkers__text'>В программе ИПР</p>
          <p className='listWorkers__count'>85</p>
        </div>
        <div className='listWorkers__items'>
          <p className='listWorkers__text'>Дедлайн в январе:</p>
          <p className='listWorkers__count'>6</p>
        </div>
        <div className='listWorkers__items'>
          <p className='listWorkers__text'>Завершенные ИПР</p>
          <p className='listWorkers__count'>11</p>
        </div>
      </div>
      <div className='listWorkers__container-input'>
        <button className='listWorkers__input-img' type='submit' />
        <input
          className='listWorkers__input'
          type='text'
          placeholder='Поиск по сотрудникам или должности'
        />
      </div>
      <div className='listWorkers__container-checkbox'>
        <select
          id='status'
          className='listWorkers__checkbox'
          defaultValue='status'
        >
          <option disabled value='status' className='listWorkers__option'>
            Статус
          </option>
          <option value='В работе' className='listWorkers__option'>
            В работе
          </option>
          <option value='Выполнен' className='listWorkers__option'>
            Выполнен
          </option>
          <option value='Отменен' className='listWorkers__option'>
            Не выполнен
          </option>
          <option value='Не выполнен' className='listWorkers__option'>
            Отменен
          </option>
        </select>

        <input
          type='date'
          id='calendar'
          className='listWorkers__checkbox'
          placeholder='Дедлайн ИПР'
        />
      </div>
      <EmployeeTable employees={employees} />
      {/* Если сотрудник не найден, то: */}
      {/* <div>
        <img
          src={}
          className='listWorkers__img-no-worker'
          alt='иконка ничего не найдено'
        />
        <p className='listWorkers__title-no-worker'>
          Такой сотрудник не найден
        </p>
        <p className='listWorkers__subtitle-no-worker'>
          Попробуйте ввести по-другому
        </p>
      </div> */}
    </div>
  )
}
