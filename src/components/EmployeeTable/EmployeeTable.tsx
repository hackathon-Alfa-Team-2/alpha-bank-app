import { ReactNode, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SortIcon from '../../assets/icons/SortIcon'
import UnsortIcon from '../../assets/icons/UnsortIcon'
import convertDate from '../../utils/convertDate'
import { EmployeeTableProps, SortOrder, SortField } from './EmployeeTable.type'

type TTooltipProps = {
  children: ReactNode
  text: string
}

const Tooltip = ({ children, text }: TTooltipProps) => {
  const [show, setShow] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined
    if (hovering) {
      timeoutId = setTimeout(() => {
        setShow(true)
      }, 500) // Задержка в 500 мс
    } else {
      setShow(false)
    }
    return () => clearTimeout(timeoutId)
  }, [hovering])

  const variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            initial='hidden'
            animate='visible'
            exit='hidden'
            variants={variants}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              bottom: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              border: '1px solid #ddd',
              borderRadius: '4px',
              backgroundColor: 'white',
              padding: '5px',
              boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
              zIndex: 100,
            }}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const EmployeeTable = ({ employees }: EmployeeTableProps) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>('none')
  const [sortField, setSortField] = useState<SortField>('none')

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

  const getSortButton = (field: SortField) => {
    // Обновление текста подсказки
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

    // Выбор иконки
    const icon =
      sortField === field && sortOrder !== 'none' ? (
        <SortIcon position={sortOrder === 'asc' ? 'up' : 'down'} />
      ) : (
        <UnsortIcon />
      )

    return (
      <Tooltip text={toolTipText}>
        <button onClick={() => sortEmployees(field)}>{icon}</button>
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
