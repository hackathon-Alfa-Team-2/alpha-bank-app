import React from 'react'
import cn from 'classnames'
import styles from './Table.module.scss'

export interface Column {
  title: JSX.Element // Изменим тип на JSX.Element
  field: string | string[]
  className: string
  sortable?: boolean
  render?: (data: any) => JSX.Element
  headerRender?: (field: string) => JSX.Element
}

interface TableProps {
  data: any[]
  columns: Column[]
  onSort?: (field: string) => void
}

const Table: React.FC<TableProps> = ({ data, columns, onSort }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={
                Array.isArray(column.field)
                  ? column.field.join('_')
                  : column.field
              }
              className={cn(styles.tableHeader, column.className)}
            >
              {column.title}
              {column.sortable && onSort && (
                <button onClick={() => onSort(column.field.toString())}>
                  Sort
                </button>
              )}
              {column.headerRender &&
                column.headerRender(column.field.toString())}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className={styles.tableRow}>
            {columns.map((column) => (
              <td
                key={
                  Array.isArray(column.field)
                    ? column.field.join('_')
                    : column.field
                }
                className={column.className}
              >
                {column.render
                  ? column.render(
                      Array.isArray(column.field)
                        ? column.field.reduce(
                            (acc, key) => {
                              acc[key] = item[key]
                              return acc
                            },
                            {} as Record<string, any>,
                          )
                        : item,
                    )
                  : Array.isArray(column.field)
                    ? column.field.map((key) => item[key]).join(', ')
                    : item[column.field]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
