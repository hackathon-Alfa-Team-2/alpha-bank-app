import { Link } from 'react-router-dom'
import { getUserData } from '../../utils/getUserData'
import UserInfoCard from '../UserInfoCard/UserInfoCard'
import styles from './EmployeeInfo.module.scss'

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
  const userData = getUserData()
  const hasRoleSupervisor = userData?.role === 'supervisor'

  return (
    <div className={styles.container}>
      <UserInfoCard
        photo={{
          src: photo,
          width: '80px',
          height: '80px',
        }}
        fullName={`${last_name} ${first_name} ${second_name}`}
        position={`${grade} ${position}`}
        fullNameFontSize='18px'
        positionFontSize='18px'
      />
      {hasRoleSupervisor && (
        <Link to={'/employees/:id/lms'}>
          <button className={styles.button}>Создать ИПР +</button>
        </Link>
      )}
    </div>
  )
}
