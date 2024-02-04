import Modal from '../../containers/Modal/Modal'
import styles from './ErrorModal.module.scss'

interface IErrorModal {
  isOpen: boolean
  onClose: () => void
  statusCode: number
  description?: string[]
  name?: string[]
}

const ErrorModal = ({
  isOpen,
  onClose,
  statusCode,
  description,
  name,
}: IErrorModal) => {
  return (
    <Modal.Overlay isOpen={isOpen} onClose={onClose} className={styles.overlay}>
      <Modal className={styles.modal}>
        <Modal.Window className={styles.window}>
          <h2 className={styles.title}>Ошибка {statusCode}</h2>
          {name &&
            name.map((item, index) => <p key={index}>Название: {item}</p>)}
          {description &&
            description.map((item, index) => (
              <p key={index}>Описание: {item}</p>
            ))}
          <Modal.Close onClick={onClose} className={styles.button}>
            Закрыть
          </Modal.Close>
        </Modal.Window>
      </Modal>
    </Modal.Overlay>
  )
}

export default ErrorModal
