import { createContext } from 'react'
import { TDropdownContextType } from './Dropdown.types'

export const DropdownContext = createContext<TDropdownContextType | undefined>(
  undefined,
)
