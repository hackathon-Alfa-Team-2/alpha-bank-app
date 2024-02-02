import { nanoid } from 'nanoid'
import cn from 'classnames'
import Table from '../Table'
import { toggleStatusBadgeStyles } from '../Table.helpers'
import { IColumns, Status } from '../Table.types'
import { IPlans } from './PlanTable.types'
import styles from '../Table.module.scss'

interface IPlanTableProps {
  plan: IPlans[]
}

const PlanTable = ({ plan }: IPlanTableProps) => {
  const columns: IColumns[] = [
    {
      title: <div>Индивидуальный план развития</div>,
      field: ['title'],
      className: '',
      render: (data: any) => (
        <span className={styles.infoCell}>{data.title}</span>
      ),
      dropdownContent: (data: IPlans) => (
        <div>
          {data.tasks &&
            data.tasks.map((task) => (
              <div
                key={nanoid()}
                className={cn(styles.rowContent, styles.dropdownContentRow)}
              >
                <span className={styles.dropdownContentText}>{task.title}</span>
                <span className={styles.dropdownContentText}>
                  {task.deadline}
                </span>
                <span
                  className={toggleStatusBadgeStyles({
                    data: task,
                    container: styles.statusBadge,
                    statusInWork: styles.statusInWorkSecondary,
                    statusCompleted: styles.statusCompletedSecondary,
                    statusCanceled: styles.statusCanceledSecondary,
                  })}
                >
                  {task.status}
                </span>
              </div>
            ))}
        </div>
      ),
    },
    {
      title: <div>Дедлайн</div>,
      field: ['deadline'],
      className: '',
    },
    {
      title: <span>Статус</span>,
      field: ['status'],
      className: styles.statusCell,
      render: (data: Status) => (
        <div
          className={toggleStatusBadgeStyles({
            data: data,
            container: styles.statusBadge,
            statusInWork: styles.statusInWorkPrimary,
            statusCompleted: styles.statusCompletedPrimary,
            statusCanceled: styles.statusCanceledPrimary,
          })}
        >
          {data.status}
        </div>
      ),
    },
  ]

  return <Table data={plan} columns={columns} />
}

export default PlanTable
