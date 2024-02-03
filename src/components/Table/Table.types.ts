export type Status = {
  status: 'completed' | 'in_progress' | 'not_done' | 'canceled'
}

export interface IColumns {
  title: JSX.Element
  field: string | string[]
  className: string
  sortable?: boolean
  render?: (data: any) => JSX.Element
  headerRender?: (field: string) => JSX.Element
  dropdownContent?: (item: any) => JSX.Element
}

export interface ITableProps {
  data: any[]
  columns: IColumns[]
  onSort?: (field: string) => void
}

export interface ITableHeaderCellProps {
  column: IColumns
  onSort?: (field: string) => void
}

export interface ITableCellProps {
  column: IColumns
  item: any
}
