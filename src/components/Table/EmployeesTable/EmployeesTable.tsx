import { useState } from 'react'
import SortIcon from '../../../assets/icons/SortIcon'
import UnsortIcon from '../../../assets/icons/UnsortIcon'
import convertDate from '../../../utils/convertDate'
import Table from '../Table'
import styles from '../Table.module.scss'
import { IColumns } from '../Table.types'
import { IEmployee, IEmployeesTableProps } from './EmployeesTable.types'
import { toggleStatusBadgeStyles } from '../Table.helpers'
import { Status } from '../Table.types'

const EmployeesTable = ({ employees }: IEmployeesTableProps) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'none'>('none')
  const [sortField, setSortField] = useState<string>('none')

  const handleSort = (field: string) => {
    if (field === sortField) {
      setSortOrder((prevOrder) =>
        prevOrder === 'asc' ? 'desc' : prevOrder === 'desc' ? 'none' : 'asc',
      )
    } else {
      setSortField(field)
      setSortOrder('asc')
    }
  }

  const sortedEmployees = [...employees].sort((a, b) => {
    if (sortOrder === 'none' || sortField === 'none') return 0

    if (sortField.includes('fullName')) {
      return (
        (sortOrder === 'asc' ? 1 : -1) *
        (a.fullName as string).localeCompare(b.fullName as string)
      )
    }

    if (sortField.includes('deadline')) {
      const dateA = convertDate(a.deadline as string).getTime()
      const dateB = convertDate(b.deadline as string).getTime()
      return (sortOrder === 'asc' ? -1 : 1) * (dateA - dateB)
    }

    return 0
  })

  const columns: IColumns[] = [
    {
      title: (
        <div
          className={styles.headerSort}
          onClick={() => handleSort('fullName')}
        >
          ФИО
          {sortField === 'fullName' && sortOrder !== 'none' && (
            <SortIcon position={sortOrder === 'asc' ? 'up' : 'down'} />
          )}
          {(sortField !== 'fullName' || sortOrder === 'none') && <UnsortIcon />}
        </div>
      ),
      field: ['fullName', 'avatar', 'position'],
      className: styles.fullNameCell,
      sortable: true,

      render: (employee: IEmployee) => (
        <div className={styles.infoCell}>
          {employee.avatar && (
            <img
              src={employee.avatar}
              alt='avatar'
              style={{ width: '50px', height: '50px' }}
            />
          )}
          <div className={styles.infoCellContainer}>
            <p className={styles.infoCellTitle}>{employee.fullName}</p>
            <span className={styles.infoCellSubtitle}>{employee.position}</span>
          </div>
        </div>
      ),
    },
    {
      title: (
        <div
          className={styles.headerSort}
          onClick={() => handleSort('deadline')}
        >
          Дедлайн
          {sortField === 'deadline' && sortOrder !== 'none' && (
            <SortIcon position={sortOrder === 'asc' ? 'up' : 'down'} />
          )}
          {(sortField !== 'deadline' || sortOrder === 'none') && <UnsortIcon />}
        </div>
      ),
      field: ['deadline'],
      className: '',
      sortable: true,
    },
    {
      title: <span className={styles.headerCell}>Статус</span>,
      field: ['status', 'deadline'],
      className: '',

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

  return (
    <Table
      data={sortedEmployees}
      columns={columns.map((column) =>
        column.sortable
          ? {
              ...column,
              headerRender: column.headerRender,
              onSort: () => handleSort(column.field.toString()),
            }
          : column,
      )}
    />
  )
}

export default EmployeesTable
