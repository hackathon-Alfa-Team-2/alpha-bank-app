import { ReactNode } from 'react'
import { TStyledComponentProps } from '../../types'

/**
 * Контекст для обмена состоянием между Dropdown и его дочерними компонентами.
 */
export type TDropdownContextType = {
  isOpen: boolean
  toggle: () => void
}

/**
 * Props для компонента Dropdown.
 * @param children - Дочерние элементы компонента.
 */
export type TDropdownProps = {
  children: ReactNode
} & TStyledComponentProps
