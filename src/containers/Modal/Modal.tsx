import { motion, AnimatePresence } from 'framer-motion'
import { ModalContext } from './Modal.context'
import { useModalContext } from './Modal.hooks'
import {
  IModalProps,
  IModalCloseProps,
  IModalOverlayProps,
} from './Modal.types'
import { handleForbiddenClose } from './Modal.helpers'

const Overlay = ({
  isOpen,
  onClose,
  children,
  style,
  className,
}: IModalOverlayProps) => {
  const handleOverlayClick = () => {
    onClose()
  }

  return (
    <ModalContext.Provider value={{ isOpen, onClose }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={style}
            className={className}
            onClick={handleOverlayClick}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  )
}

const Modal = ({ className, style, children }: IModalProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={style}
        className={className}
        onClick={handleForbiddenClose}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

const Window = ({ children, style }: IModalProps) => {
  const { isOpen } = useModalContext()
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          style={style}
          onClick={handleForbiddenClose}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const Close = ({ style, onClick }: IModalCloseProps) => {
  return (
    <button style={style} onClick={onClick}>
      Close
    </button>
  )
}

Modal.Window = Window
Modal.Close = Close
Modal.Overlay = Overlay

export default Modal
