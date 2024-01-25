import React from 'react'
import cn from 'classnames'
import { nanoid } from 'nanoid'
import styles from './Table.module.scss'
import Dropdown from '../../../containers/Dropdown/Dropdown'

export interface Column {
  title: JSX.Element
  field: string | string[]
  className: string
  sortable?: boolean
  render?: (data: any) => JSX.Element
  headerRender?: (field: string) => JSX.Element
  dropdownContent?: (item: any) => JSX.Element // Обновление типа для dropdownContent
}

interface TableProps {
  data: any[]
  columns: Column[]
  onSort?: (field: string) => void
}

const renderCellContent = (column: Column, item: any) => {
  if (column.render) {
    return column.render(
      Array.isArray(column.field)
        ? column.field.reduce(
            (acc, colKey) => {
              acc[colKey] = item[colKey]
              return acc
            },
            {} as Record<string, any>,
          )
        : item,
    )
  } else {
    return Array.isArray(column.field)
      ? item[column.field[0]]
      : item[column.field]
  }
}

interface TableHeaderCellProps {
  column: Column
  onSort?: (field: string) => void
}

interface TableCellProps {
  column: Column
  item: any
}

const TableHeaderCell: React.FC<TableHeaderCellProps> = ({
  column,
  onSort,
}) => (
  <div key={nanoid()} className={cn(styles.tableHeaderCell, column.className)}>
    {column.title}
    {column.sortable && onSort && (
      <button onClick={() => onSort(column.field.toString())}>Sort</button>
    )}
    {column.headerRender && column.headerRender(column.field.toString())}
  </div>
)

const TableCell: React.FC<TableCellProps> = ({ column, item }) => (
  <div key={nanoid()} className={cn(styles.tableCell, column.className)}>
    {renderCellContent(column, item)}
  </div>
)

const Table = ({ data, columns, onSort }: TableProps) => (
  <div className={styles.table}>
    <div className={styles.tableHeader}>
      {columns.map((column) => (
        <TableHeaderCell key={nanoid()} column={column} onSort={onSort} />
      ))}
    </div>
    <div className={styles.tableBody}>
      {data.map((item) => (
        <div key={nanoid()} className={styles.tableRow}>
          {columns.some((column) => column.dropdownContent) ? (
            <Dropdown key={nanoid()} className={styles.dropdown}>
              <Dropdown.Trigger>
                <div className={styles.tableRowTrigger}>
                  {columns.map((column) => (
                    <TableCell key={nanoid()} column={column} item={item} />
                  ))}
                </div>
              </Dropdown.Trigger>
              <Dropdown.Content>
                {columns[0].dropdownContent && columns[0].dropdownContent(item)}
              </Dropdown.Content>
            </Dropdown>
          ) : (
            <div className={styles.tableRowContent}>
              {columns.map((column) => (
                <TableCell key={nanoid()} column={column} item={item} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
)

export default Table
