import { useEffect, useState } from 'react'
import SortIcon from '../../../assets/icons/SortIcon'
import UnsortIcon from '../../../assets/icons/UnsortIcon'
import convertDate from '../../../utils/convertDate'
import Table from '../Table'
import styles from '../Table.module.scss'
import { IColumns } from '../Table.types'
import { NewItem, IEmployeesTableProps } from './EmployeesTable.types'
import { toggleStatusBadgeStyles } from '../Table.helpers'
//import { Status } from '../Table.types'
import { useGetUsersQuery } from '../../Auth/Auth.api'
import { Link } from 'react-router-dom'
import UserInfoCard from '../../UserInfoCard/UserInfoCard'

const EmployeesTable = ({ employees }: IEmployeesTableProps) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'none'>('none')
  const [sortField, setSortField] = useState<string>('none')
  const [usersArray, setUsersArray] = useState([])

  const { data: users } = useGetUsersQuery()
  useEffect(() => {
    if (users && users.results) {
      const userArray = users.results
      setUsersArray(userArray)
    } else {
      console.error('Результаты недоступны')
    }
  }, [users, usersArray])

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

    if (sortField.includes('last_name')) {
      return (
        (sortOrder === 'asc' ? 1 : -1) *
        (a.last_name as string).localeCompare(b.last_name as string)
      )
    }

    if (sortField.includes('deadline')) {
      const dateA = a.deadline ? convertDate(a.deadline as string).getTime() : 0
      const dateB = b.deadline ? convertDate(b.deadline as string).getTime() : 0
      return (sortOrder === 'asc' ? -1 : 1) * (dateA - dateB)
    }

    return 0
  })

  const columns: IColumns[] = [
    {
      title: (
        <div
          className={styles.headerSort}
          onClick={() => handleSort('last_name')}
        >
          ФИО
          {sortField === 'last_name' && sortOrder !== 'none' && (
            <SortIcon position={sortOrder === 'asc' ? 'up' : 'down'} />
          )}
          {(sortField !== 'last_name' || sortOrder === 'none') && (
            <UnsortIcon />
          )}
        </div>
      ),
      field: [
        'last_name',
        'first_name',
        'second_name',
        'photo',
        'position',
        'id',
      ],
      className: styles.fullNameCell,
      sortable: true,

      render: (employee: NewItem) => (
        <Link to={`/employees/${employee.id}`} className={styles.link}>
          <UserInfoCard
            photo={{ src: employee.photo, width: '50px', height: '50px' }}
            fullName={`${employee.last_name} ${employee.first_name} ${employee.second_name}`}
            position={employee.position}
          />
        </Link>
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
      field: ['status'],
      className: '',

      render: (data: { status: string | null }) => (
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
