import { useState } from 'react'
import SortIcon from '../../assets/icons/SortIcon'
import UnsortIcon from '../../assets/icons/UnsortIcon'
import Tooltip from '../../containers/Tooltip/Tooltip'
import convertDate from '../../utils/convertDate'
import { EmployeeTableProps, SortOrder, SortField } from './EmployeeTable.type'

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
      <Tooltip style={{ position: 'relative', display: 'inline-block' }}>
        <button onClick={() => sortEmployees(field)}>{icon}</button>
        <Tooltip.Text
          style={{
            position: 'absolute',
            bottom: '100%',
            color: 'green',
            transform: 'translateX(-50%)',
            border: '1px solid #ddd',
            borderRadius: '4px',
            backgroundColor: 'white',
            padding: '5px',
            boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
            zIndex: 100,
          }}
        >
          {toolTipText}
        </Tooltip.Text>
      </Tooltip>
    )
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Фио {getSortButton('fullName')}</th>
          <th>Дедлайн {getSortButton('deadline')}</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        {sortedEmployees.map((employee) => (
          <tr key={employee.id}>
            <td>
              <img
                src={employee.avatar}
                alt='avatar'
                style={{ width: '50px', height: '50px' }}
              />
              {employee.fullName} - {employee.position}
            </td>
            <td>{employee.deadline}</td>
            <td>{employee.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default EmployeeTable
