import './EmployeeInfo.css'
import { useLocation } from 'react-router-dom'

interface IEmployeeInfoProps {
  first_name: string
  second_name: string
  last_name: string
  grade: string
  position: string
  photo: any
}

export default function EmployeeInfo({
  first_name,
  second_name,
  last_name,
  grade,
  position,
  photo,
}: IEmployeeInfoProps) {
  const location = useLocation()
  return (
    <div className='aboutWorker__container-info'>
      <img
        src={photo}
        className='aboutWorker__avatar'
        alt='аватар сотрудника'
      />
      <div className='aboutWorker__container-profile'>
        <h2 className='aboutWorker__fio'>
          {last_name} {first_name} {second_name}
        </h2>
        <p className='aboutWorker__position'>
          {grade} {position}
        </p>
      </div>
      <button
        className={`aboutWorker__button ${
          location.pathname === '/list-of-workers/worker'
            ? ''
            : 'aboutWorker__button_display_none'
        }`}
      >
        Создать ИПР +
      </button>
    </div>
  )
}
