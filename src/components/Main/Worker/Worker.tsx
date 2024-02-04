import './Worker.css'
import ArrowRight from '../../../assets/arrowRight.svg'
import NoIpr from '../../../assets/iconNoIPR.svg'
import EmployeeInfo from '../../EmployeeInfo/EmployeeInfo'
import { Link, useParams } from 'react-router-dom'
import Popup from '../../../components/Popup/Popup'
import PlanTable from '../../Table/PlanTable/PlanTable'
import { useGetUserByIDQuery, useGetUserLMSQuery } from '../../Auth/Auth.api'

export default function Worker() {
  const { userId } = useParams()
  const id = userId ? userId : ''

  const { data: userData } = useGetUserByIDQuery({ id: id })
  const { data: lmsData } = useGetUserLMSQuery({ id: id })

  console.log('userId', userId)

  return (
    <div className='worker'>
      <div className='worker__container'>
        <Link to={'/employees'} className='worker__adress'>
          Все ИПР
        </Link>
        <img
          src={ArrowRight}
          className='worker__arrow'
          alt='иконка стрелки вправо'
        />
        {userData && (
          <h3 className='worker__adress worker__adress_last'>
            {userData.last_name} {userData.first_name} {userData.second_name}
          </h3>
        )}
        <Popup />
      </div>
      {userData && (
        <EmployeeInfo
          first_name={userData.first_name}
          second_name={userData.second_name}
          last_name={userData.last_name}
          grade={userData.grade}
          position={userData.position}
          photo={userData.photo}
        />
      )}

      {lmsData ? (
        <>
          <PlanTable plan={lmsData} />
          <div></div>
        </>
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
