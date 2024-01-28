import AboutWorker from '../../AboutWorker/AboutWorker'
import './Profile.css'

export default function Profile() {
  return (
    <div className='profile'>
      <h2 className='profile__title'>ИПР сотрудников</h2>
      <AboutWorker />
    </div>
  )
}
