import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getFormattedDate } from 'tictic'
import ArrowRight from '../../../assets/arrowRight.svg'
import Plus from '../../../assets/plus.svg'
import {
  useCreateLMSMutation,
  useGetUserByIDQuery,
  useGetUserLMSQuery,
} from '../../Auth/Auth.api'
import StatusPlan from '../../StatusPlan/StatusPlan'
import './IndidvidualPlan.css'
import Modal from '../../../containers/Modal/Modal'

export default function IndidvidualPlan() {
  const { userId } = useParams()
  const { data: userData } = useGetUserByIDQuery({ id: userId || '' })
  const { data: lms } = useGetUserLMSQuery({ id: userId || '' })
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  console.log(lms)

  const [createLMSMutation] = useCreateLMSMutation()

  const handleCreateLMS = async () => {
    const requestData = {
      name: title,
      description: description,
      is_active: false,
      deadline: getFormattedDate({
        date: new Date('2025-03-25'),
        sep: '-',
        format: 'YYYY-MM-DD',
      }),
      status: 'completed',
      skill_assessment_before: 5,
      skill_assessment_after: 5,
    }

    try {
      const id = userId ? userId : ''
      const response = await createLMSMutation({
        userId: id,
        data: requestData,
      })

      if ('error' in response) {
        throw response.error
      }

      console.log('LMS создан успешно:', JSON.stringify(response.data?.id))
    } catch (error) {
      console.error('Ошибка создания LMS:', error)
    }
  }

  return (
    <div className='indidvidualPlan'>
      <div className='indidvidualPlan__container'>
        <Link to={'/employees/'} className='indidvidualPlan__adress'>
          Все ИПР
        </Link>
        <img
          src={ArrowRight}
          className='indidvidualPlan__arrow'
          alt='иконка стрелки вправо'
        />
        <Link to={`/employees/${userId}`} className='indidvidualPlan__adress'>
          {userData ? (
            <>
              {userData.last_name} {userData.first_name} {userData.second_name}
            </>
          ) : (
            <span>Сотрудник</span>
          )}
        </Link>
        <img
          src={ArrowRight}
          className='worker__arrow'
          alt='иконка стрелки вправо'
        />
        <h3 className='indidvidualPlan__adress'>Новый ИПР</h3>
      </div>
      <div className='textAreaPlan'>
        <textarea
          name='textAreaPlan__title'
          id='textAreaPlan__title'
          className='textAreaPlan__title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Ввести название'
        />
        <textarea
          name='textAreaPlan__description'
          id='textAreaPlan__description'
          className='textAreaPlan__description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Ввести описание'
        />
      </div>
      <StatusPlan />
      <h3 className='indidvidualPlan__tasks'>Задачи</h3>
      <div className='indidvidualPlan__container-tasks'>
        <img
          src={Plus}
          className='indidvidualPlan__img-tasks'
          alt='иконка плюсика'
        />
        <p
          onClick={() => handleCreateLMS()}
          className='indidvidualPlan__add-task'
        >
          Добавить задачу
        </p>
      </div>
      <StatusPlan />

      <button onClick={handleOpenModal}>Открыть модальное окно</button>

      <Modal.Overlay isOpen={isModalOpen} onClose={handleCloseModal}>
        <Modal style={{ border: '1px solid red', padding: '20px' }}>
          <Modal.Window style={{ border: '1px solid blue' }}>
            <h2>Содержимое модального окна</h2>
            <p>Дополнительный текст</p>
          </Modal.Window>
          <Modal.Close onClick={handleCloseModal} />
        </Modal>
      </Modal.Overlay>
    </div>
  )
}
