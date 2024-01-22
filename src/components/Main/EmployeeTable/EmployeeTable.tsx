import { useState } from 'react'
import cn from 'classnames'
import SortIcon from '../../../assets/icons/SortIcon'
import UnsortIcon from '../../../assets/icons/UnsortIcon'
import Tooltip from '../../../containers/Tooltip/Tooltip'
import convertDate from '../../../utils/convertDate'
import { EmployeeTableProps, SortOrder, SortField } from './EmployeeTable.type'
import styles from './EmployeeTable.module.scss'

/**
 * Компонент EmployeeTable для отображения и сортировки списка сотрудников.
 * @param employees - Массив с данными сотрудников.
 */
const EmployeeTable = ({ employees }: EmployeeTableProps) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>('none')
  const [sortField, setSortField] = useState<SortField>('none')

  /**
   * Функция для управления сортировкой сотрудников.
   * @param field - Поле для сортировки.
   */
  const sortEmployees = (field: SortField) => {
    if (field === sortField) {
      setSortOrder((prevOrder) =>
        prevOrder === 'asc' ? 'desc' : prevOrder === 'desc' ? 'none' : 'asc',
      )
    } else {
      setSortField(field)
      setSortOrder('asc')
    }
  }

  // Отсортированный массив сотрудников
  const sortedEmployees = [...employees].sort((a, b) => {
    if (sortOrder === 'none' || sortField === 'none') return 0

    if (sortField === 'fullName') {
      return (
        (sortOrder === 'asc' ? 1 : -1) * a.fullName.localeCompare(b.fullName)
      )
    }

    if (sortField === 'deadline') {
      const dateA = convertDate(a.deadline).getTime()
      const dateB = convertDate(b.deadline).getTime()
      return (sortOrder === 'asc' ? -1 : 1) * (dateA - dateB)
    }

    return 0
  })

  /**
   * Функция для генерации кнопки сортировки и всплывающей подсказки.
   * @param field - Поле, по которому осуществляется сортировка.
   * @returns Кнопка сортировки с иконкой и всплывающей подсказкой.
   */
  const getSortButton = (field: SortField) => {
    // Определение текста для всплывающей подсказки
    let toolTipText = 'Без сортировки'
    if (sortField === field && sortOrder !== 'none') {
      toolTipText =
        field === 'fullName'
          ? sortOrder === 'asc'
            ? 'в алфавитном порядке А-Я'
            : 'в обратном алфавитном порядке Я-А'
          : sortOrder === 'asc'
            ? 'от новых к старым'
            : 'от старых к новым'
    }

    // Выбор иконки для кнопки сортировки
    const icon =
      sortField === field && sortOrder !== 'none' ? (
        <SortIcon position={sortOrder === 'asc' ? 'up' : 'down'} />
      ) : (
        <UnsortIcon />
      )

    return (
      <Tooltip className={styles.tooltip}>
        <button className={styles.sortBtn} onClick={() => sortEmployees(field)}>
          {icon}
        </button>
        <Tooltip.Text className={styles.tooltipTextContainer}>
          {toolTipText}
        </Tooltip.Text>
      </Tooltip>
    )
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={cn(styles.tableHeader, styles.fullNameCell)}>
            <div className={styles.tableHeaderSortContainer}>
              Фио {getSortButton('fullName')}
            </div>
          </th>
          <th className={cn(styles.tableHeader, styles.deadlineCell)}>
            <div className={styles.tableHeaderSortContainer}>
              Дедлайн {getSortButton('deadline')}
            </div>
          </th>
          <th className={cn(styles.tableHeader, styles.statusCell)}>Статус</th>
        </tr>
      </thead>
      <tbody>
        {sortedEmployees.map((employee) => (
          <tr key={employee.id} className={styles.tableRow}>
            <td className={styles.infoCell}>
              <img
                src={employee.avatar}
                alt='avatar'
                style={{ width: '50px', height: '50px' }}
              />
              <div className={styles.infoCellTextContainer}>
                <p className={styles.infoCellFullName}>{employee.fullName}</p>
                <span className={styles.infoCellPosition}>
                  {employee.position}
                </span>
              </div>
            </td>

            <td>
              <span className={styles.deadlineCell}>{employee.deadline}</span>
            </td>
            <td>
              <div
                className={cn(styles.statusCellBadge, {
                  [styles.statusInWork]: employee.status === 'В работе',
                  [styles.statusCompleted]: employee.status === 'Выполнен',
                  [styles.statusCanceled]: employee.status === 'Отменён',
                })}
              >
                {employee.status}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default EmployeeTable
