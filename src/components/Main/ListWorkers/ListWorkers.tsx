import { employees } from '../../../utils/mockData/employees'
import EmployeesTable from '../../Table/EmployeesTable/EmployeesTable'
import './ListWorkers.css'
import NoWorker from '../../../assets/no-worker.svg'
import { useState } from 'react'

// массив удалить
const worker = [
  {
    fullName: 'Филиппов Александр Романович',
    position: 'JavaScript Разработчик',
  },
  {
    fullName: 'Иванов Пётр Александрович',
    position: 'Аналитик',
  },
  {
    fullName: 'Кукушкина Оксана Сергеевна',
    position: 'UI/UX Дизайнер',
  },
  {
    fullName: 'Иванов Сергей Петрович',
    position: 'Разработчик',
  },
  {
    fullName: 'Соколова Софья Николаевна',
    position: 'UI/UX Дизайнер',
  },
]

export default function ListWorkers() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState(worker)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearchTerm(value)

    const filteredResults = worker.filter(
      (w) =>
        w.fullName.toLowerCase().includes(value.toLowerCase()) ||
        w.position.toLowerCase().includes(value.toLowerCase()),
    )
    setSearchResults(filteredResults)
  }
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
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className='listWorkers__container-checkbox'>
        <select
          defaultValue='status'
          id='status'
          className='listWorkers__checkbox'
        >
          <option
            disabled
            hidden
            value='status'
            className='listWorkers__option'
          >
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
      <EmployeesTable employees={employees} />

      {/* Это просто отображение что бы проверить как работает поиск, УДАЛИТЬ!!! */}
      <ul>
        {searchResults.map((w, index) => (
          <li key={index}>{w.fullName}</li>
        ))}
      </ul>
      {/* Удалить до сюда */}

      {/* Если сотрудник не найден, то добавить класс display: flex*/}
      <div className='listWorkers__container-no-worker listWorkers__container-no-worker_display_flex'>
        <div className='worker__wrapperImg-no-worker'>
          <img
            src={NoWorker}
            className='listWorkers__img-no-worker'
            alt='иконка ничего не найдено'
          />
        </div>

        <p className='listWorkers__title-no-worker'>
          Такой сотрудник не найден
        </p>
        <p className='listWorkers__subtitle-no-worker'>
          Попробуйте ввести по-другому
        </p>
      </div>
    </div>
  )
}
