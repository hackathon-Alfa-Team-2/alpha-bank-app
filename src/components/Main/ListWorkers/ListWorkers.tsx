import './ListWorkers.css'
import Input from '../../../assets/Input.svg'

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
        <img src={Input} alt='иконка лупы' />
        <input
          className='listWorkers__input'
          type='text'
          // placeholder='Поиск по сотрудникам или должности'
        />
        <div className='listWorkers__container-checkbox'>
          <label>
            <input type='checkbox' className='listWorkers__checkbox' />
            Статус{' '}
          </label>
          <label>
            <input type='checkbox' className='listWorkers__checkbox' />
            Дедлайн ИПР{' '}
          </label>
        </div>
      </div>
    </div>
  )
}
