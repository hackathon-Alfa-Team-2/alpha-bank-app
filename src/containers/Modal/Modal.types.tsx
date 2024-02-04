import { ReactNode } from 'react'
import { IStyledComponentProps } from '../../types'

export interface ModalProps extends IStyledComponentProps {
  //isOpen: boolean
  //onClose: () => void
  children: ReactNode
}

export interface ModalContextProps {
  isOpen: boolean
  onClose: () => void
}

export interface ModalWindowProps extends IStyledComponentProps {
  children: ReactNode
}

export interface ModalCloseProps extends IStyledComponentProps {
  onClick: () => void
}
