import { useContext } from 'react'
import { ModalContext } from './Modal.context'

export const useModalContext = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModalContext must be used within a Modal')
  }
  return context
}
