import { nanoid } from 'nanoid'
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
        <span className={styles.infoCellPosition}>{data.title}</span>
      ),
      dropdownContent: (data: IPlans) => (
        <div>
          {data.tasks &&
            data.tasks.map((task) => (
              <div key={nanoid()}>
                <p>{task.title}</p>
                <p>{task.deadline}</p>
                <p>{task.status}</p>
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
            container: styles.statusCellBadge,
            statusInWork: styles.statusInWork,
            statusCompleted: styles.statusCompleted,
            statusCanceled: styles.statusCanceled,
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
