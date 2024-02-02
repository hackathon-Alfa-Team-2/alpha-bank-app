import cn from 'classnames'
import { Status } from './Table.types'

interface IToggleStatusBadgeStyles {
  data: Status
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
    [statusInWork]: data.status === 'В работе',
    [statusCompleted]: data.status === 'Выполнен',
    [statusCanceled]: data.status === 'Отменён',
  })
}
