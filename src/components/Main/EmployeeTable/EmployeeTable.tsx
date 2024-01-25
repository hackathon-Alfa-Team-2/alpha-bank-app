// EmployeeTable.jsx
import React, { useState } from 'react'
import Table, { Column } from './Table'
import { EmployeeTableProps, Employee } from './EmployeeTable.type'
import styles from './EmployeeTable.module.scss'
import convertDate from '../../../utils/convertDate'
import cn from 'classnames'
import SortIcon from '../../../assets/icons/SortIcon'
import UnsortIcon from '../../../assets/icons/UnsortIcon'

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {
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

  const columns: Column[] = [
    {
      title: (
        <div
          className={styles.tableHeaderSortContainer}
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
      render: (employee: Employee) => (
        <div className={styles.infoCell}>
          {employee.avatar && (
            <img
              src={employee.avatar}
              alt='avatar'
              style={{ width: '50px', height: '50px' }}
            />
          )}
          <div className={styles.infoCellTextContainer}>
            <p className={styles.infoCellFullName}>{employee.fullName}</p>
            <span className={styles.infoCellPosition}>{employee.position}</span>
          </div>
        </div>
      ),
    },
    {
      title: (
        <div
          className={styles.tableHeaderSortContainer}
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
      className: styles.deadlineCell,
      sortable: true,
    },
    {
      title: <span className={styles.tableHeaderSortContainer}>Статус</span>,
      field: ['status', 'deadline'],
      className: styles.statusCell,
      render: (data: any) => (
        <div
          className={cn(styles.statusCellBadge, {
            [styles.statusInWork]: data.status === 'В работе',
            [styles.statusCompleted]: data.status === 'Выполнен',
            [styles.statusCanceled]: data.status === 'Отменён',
          })}
        >
          {data.deadline && <p>{data.deadline}</p>}
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

export default EmployeeTable
