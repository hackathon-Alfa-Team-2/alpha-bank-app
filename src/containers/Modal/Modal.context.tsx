import { createContext } from 'react'
import { IModalContextProps } from './Modal.types'

export const ModalContext = createContext<IModalContextProps | undefined>(
  undefined,
)
