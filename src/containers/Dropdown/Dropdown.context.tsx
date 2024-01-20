import { createContext } from 'react'
import { TDropdownContextType } from './Dropdown.type'

export const DropdownContext = createContext<TDropdownContextType | undefined>(undefined)
