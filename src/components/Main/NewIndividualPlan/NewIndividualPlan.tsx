import './NewIndividualPlan.css'
import ArrowRight from '../../../assets/arrowRight.svg'
import { Link } from 'react-router-dom'
import StatusTask from '../../StatusTask/StatusTask'

export default function NewIndividualPlan() {
  return (
    <div className='newIndividualPlan'>
      <div className='newIndidvidualPlan__container'>
        <Link to={'/list-of-workers'} className='newIndidvidualPlan__adress'>
          ИПР
        </Link>
        <img
          src={ArrowRight}
          className='newIndidvidualPlan__arrow'
          alt='иконка стрелки вправо'
        />
        <Link
          to={'/list-of-workers/worker'}
          className='newIndidvidualPlan__adress'
        >
          Сотрудники
        </Link>
        <img
          src={ArrowRight}
          className='newIndidvidualPlan__arrow'
          alt='иконка стрелки вправо'
        />
        <Link
          to={'/list-of-workers/worker/indidvidual-plan'}
          className='newIndidvidualPlan__adress'
        >
          ИПР сотрудника
        </Link>
        <img
          src={ArrowRight}
          className='newIndidvidualPlan__arrow'
          alt='иконка стрелки вправо'
        />
        <h3 className='newIndidvidualPlan__adress'>Новый ИПР</h3>
      </div>
      <div className='newIndidvidualPlan__textAreaPlan'>
        <h3 className='newIndidvidualPlan__textAreaPlan-title'>
          Разработка единой системы метрик и KPI{' '}
        </h3>
        <p className='newIndidvidualPlan__textAreaPlan-task'>
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
    </div>
  )
}
