import './AboutWorker.css'
import Avatar from '../../assets/Avatar.svg'

export default function AboutWorker() {
  return (
    <div className='aboutWorker__container-info'>
      <img src={Avatar} className='aboutWorker__avatar' alt='аватар сотрудника' />
      <div className='aboutWorker__container-profile'>
        <h2 className='aboutWorker__fio'>Иванов Пётр Александрович</h2>
        <p className='aboutWorker__position'>Middle аналитик</p>
      </div>
      <button className='aboutWorker__button'>Создать ИПР +</button>
    </div>
  )
}
