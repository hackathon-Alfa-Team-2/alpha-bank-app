import { ReactNode } from 'react'
import { TStyledComponentProps } from '../types'

/**
 * Интерфейс контекста для Tooltip.
 * @param show - Состояние, показывающее, должна ли отображаться подсказка.
 * @param setShow - Функция для установки состояния отображения подсказки.
 */
export type TTooltipContextType = {
  show: boolean
  setShow: (show: boolean) => void
}

/**
 * Props для свойств для компонента Tooltip.
 * @param children - Дочерние элементы компонента.
 */
export type TTooltipProps = {
  children: ReactNode
} & TStyledComponentProps
