import { createContext } from 'react'
import { TTooltipContextType } from './Tooltip.type'

export const TooltipContext = createContext<TTooltipContextType | undefined>(
  undefined,
)
