import { MouseEvent } from 'react'

export const handleForbiddenClose = (e: MouseEvent<HTMLDivElement>) => {
  e.stopPropagation()
}
