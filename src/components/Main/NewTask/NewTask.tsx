import './NewTask.css'
import ArrowRight from '../../../assets/arrowRight.svg'
import { Link } from 'react-router-dom'
import StatusTask from '../../StatusTask/StatusTask'
import Comments from '../../Comments/Comments'

export default function NewTask() {
  return (
    <div className='newTask'>
      <div className='newTask__container'>
        <Link to={'/list-of-workers'} className='newTask__adress'>
          Все ИПР
        </Link>
        <img
          src={ArrowRight}
          className='newTask__arrow'
          alt='иконка стрелки вправо'
        />
        <Link to={'/list-of-workers/worker'} className='newTask__adress'>
          $ФИО
        </Link>
        <img
          src={ArrowRight}
          className='newTask__arrow'
          alt='иконка стрелки вправо'
        />
        <Link
          to={'/list-of-workers/worker/indidvidual-plan'}
          className='newTask__adress'
        >
          Новый ИПР
        </Link>
        <img
          src={ArrowRight}
          className='newTask__arrow'
          alt='иконка стрелки вправо'
        />
        <h3 className='newTask__adress'>Новая задача</h3>
      </div>
      <div className='newTask__textAreaPlan'>
        <h3 className='newTask__textAreaPlan-title'>
          Разработка единой системы метрик и KPI{' '}
        </h3>
        <p className='newTask__textAreaPlan-task'>
          1. Понимание целей бизнеса: Провести встречи с руководителями и
          ключевыми заинтересованными сторонами для полного понимания
          бизнес-целей. Идентифицировать ключевые факторы успеха, которые
          компания хочет достичь через аналитику. 2. Определение стратегических
          областей: Выделить стратегические области, где аналитика может внести
          наибольший вклад в достижение целей бизнеса. Установить приоритеты для
          каждой области в соответствии с их стратегической важностью. 3.
          Вовлечение ключевых стейкхолдеров: Собрать команду из различных
          отделов, чтобы обеспечить максимальное покрытие и понимание. Провести
          совместные сессии и интервью для выявления потребностей и ожиданий от
          системы метрик и KPI.{' '}
        </p>
      </div>
      <StatusTask />
      <Comments />
    </div>
  )
}
