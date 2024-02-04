import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ModalContext } from './Modal.context'
import { useModalContext } from './Modal.hooks'
import { ModalProps, ModalWindowProps, ModalCloseProps } from './Modal.types'

const handleForbiddenClose = (e: React.MouseEvent<HTMLDivElement>) => {
  e.stopPropagation() // Предотвращаем всплытие события
}

const Overlay = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}) => {
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
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 9999,
            }}
            onClick={handleOverlayClick}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  )
}

const Modal = ({ className, style, children }: ModalProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          ...style,
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        className={className}
        onClick={handleForbiddenClose}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

const Window = ({ children, style }: ModalWindowProps) => {
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

const Close = ({ style, onClick }: ModalCloseProps) => {
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
