import cn from 'classnames'
//import { Status } from './Table.types'

interface IToggleStatusBadgeStyles {
  data: { status: string | null }
  container: string
  statusInWork: string
  statusCompleted: string
  statusCanceled: string
}

export const toggleStatusBadgeStyles = ({
  data,
  container,
  statusInWork,
  statusCompleted,
  statusCanceled,
}: IToggleStatusBadgeStyles) => {
  return cn(container, {
    [statusInWork]: data.status === 'in_progress',
    [statusCompleted]: data.status === 'completed',
    [statusCanceled]: data.status === 'canceled',
  })
}
