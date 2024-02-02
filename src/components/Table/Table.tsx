import cn from 'classnames'
import { nanoid } from 'nanoid'
import Dropdown from '../../containers/Dropdown/Dropdown'
import {
  IColumns,
  ITableCellProps,
  ITableHeaderCellProps,
  ITableProps,
} from './Table.types'
import styles from './Table.module.scss'

const renderCellContent = (column: IColumns, item: any) => {
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

const TableHeaderCell = ({ column, onSort }: ITableHeaderCellProps) => (
  <div key={nanoid()} className={cn(styles.headerCell, column.className)}>
    {column.title}
    {column.sortable && onSort && (
      <button onClick={() => onSort(column.field.toString())}>Sort</button>
    )}
    {column.headerRender && column.headerRender(column.field.toString())}
  </div>
)

const TableCell = ({ column, item }: ITableCellProps) => (
  <div key={nanoid()} className={cn(styles.cell, column.className)}>
    {renderCellContent(column, item)}
  </div>
)

const Table = ({ data, columns, onSort }: ITableProps) => (
  <div>
    <div className={styles.header}>
      {columns.map((column) => (
        <TableHeaderCell key={nanoid()} column={column} onSort={onSort} />
      ))}
    </div>
    <div>
      {data.map((item) => (
        <div key={nanoid()} className={styles.row}>
          {columns.some((column) => column.dropdownContent) ? (
            <Dropdown key={nanoid()} className={styles.cell}>
              <Dropdown.Trigger>
                <div className={styles.rowTrigger}>
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
            <div className={styles.rowContent}>
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
