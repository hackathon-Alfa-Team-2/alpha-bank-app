import './Worker.css'
import ArrowRight from '../../../assets/arrowRight.svg'
import NoIpr from '../../../assets/iconNoIPR.svg'
import EmployeeInfo from '../../EmployeeInfo/EmployeeInfo'
import { Link, useParams } from 'react-router-dom'
import Popup from '../../../components/Popup/Popup'
import PlanTable from '../../Table/PlanTable/PlanTable'
import { plans } from '../../../utils/mockData/plans'
import { useGetUserByIDQuery } from '../../Auth/Auth.api'

export default function Worker() {
  const { id } = useParams()
  const userId = id ? id : ''

  const { data } = useGetUserByIDQuery({ id: userId })

  console.log(data)

  return (
    <div className='worker'>
      <div className='worker__container'>
        <Link to={'/list-of-workers'} className='worker__adress'>
          Все ИПР
        </Link>
        <img
          src={ArrowRight}
          className='worker__arrow'
          alt='иконка стрелки вправо'
        />
        {data && (
          <h3 className='worker__adress worker__adress_last'>
            {data.last_name} {data.first_name} {data.second_name}
          </h3>
        )}
        <Popup />
      </div>
      {data && (
        <EmployeeInfo
          first_name={data.first_name}
          second_name={data.second_name}
          last_name={data.last_name}
          grade={data.grade}
          position={data.position}
          photo={data.photo}
        />
      )}

      {plans.length !== 0 ? (
        <PlanTable plan={plans} />
      ) : (
        <div className='worker__container-noIPR worker__container-noIPR_display_flex'>
          <div className='worker__wrapperImg-noIPR'>
            <img
              src={NoIpr}
              className='worker__noIpr'
              alt='иконка отсутствия ИПР'
            />
          </div>
          <h4 className='worker__title'>У сотрудника пока нет ИПР</h4>
          <button className='worker__button'>Создать ИПР +</button>
        </div>
      )}
    </div>
  )
}
