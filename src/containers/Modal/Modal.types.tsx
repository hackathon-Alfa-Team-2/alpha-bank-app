import { ReactNode } from 'react'
import { IStyledComponentProps } from '../../types'

export interface IModalProps extends IStyledComponentProps {
  children: ReactNode
}

export interface IModalContextProps {
  isOpen: boolean
  onClose: () => void
}

export interface IModalCloseProps extends IStyledComponentProps {
  onClick: () => void
  children: React.ReactNode
}

export interface IModalOverlayProps extends IStyledComponentProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}
