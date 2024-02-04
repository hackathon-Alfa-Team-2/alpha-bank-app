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
import ErrorModal from '../../ErrorModal/ErrorModal'

interface IErrorData {
  status: number
  data: { description: string[]; name: string[]; status: string[] }
}

export default function IndidvidualPlan() {
  const { userId } = useParams()
  const { data: userData } = useGetUserByIDQuery({ id: userId || '' })
  const { data: lms } = useGetUserLMSQuery({ id: userId || '' })
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false)
  const [errorData, setErrorData] = useState<IErrorData>({
    status: 400,
    data: {
      name: ['Это поле не может быть пустым.'],
      description: ['Это поле не может быть пустым.'],
      status: ['Значения completed нет среди допустимых вариантов.'],
    },
  })

  console.log('errorData', JSON.stringify(errorData, null, 2), isErrorModalOpen)

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleCloseErrorModal = () => {
    setIsErrorModalOpen(false)
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
    } catch (error: any) {
      console.error('Ошибка создания LMS:', error)
      setErrorData(error)
      setIsErrorModalOpen(true)
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

      <button onClick={() => setIsModalOpen(true)}>
        Открыть модальное окно
      </button>

      <Modal.Overlay
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 9999,
        }}
      >
        <Modal
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Modal.Window style={{ border: '1px solid blue' }}>
            <h2>Содержимое модального окна</h2>
            <p>Дополнительный текст</p>
          </Modal.Window>
          <Modal.Close onClick={handleCloseModal}>Закрыть</Modal.Close>
        </Modal>
      </Modal.Overlay>
      {errorData.status !== 0 && (
        <ErrorModal
          isOpen={isErrorModalOpen}
          onClose={handleCloseErrorModal}
          statusCode={errorData.status}
          description={errorData.data?.description}
          name={errorData.data?.name}
        />
      )}
    </div>
  )
}
