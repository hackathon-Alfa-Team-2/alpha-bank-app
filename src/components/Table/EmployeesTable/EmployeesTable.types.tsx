import { Status } from '../Table.types'

/**
 * Тип данных для сотрудника.
 * @param id - Идентификатор сотрудника.
 * @param avatar - URL аватара сотрудника.
 * @param fullName - Полное имя сотрудника.
 * @param position - Должность сотрудника.
 * @param deadline - Срок выполнения задачи в формате строки.
 * @param status - Статус выполнения задачи сотрудником.
 */
export interface IEmployee extends Status {
  id: string
  avatar: string
  fullName: string
  position: string
  deadline: string
  content: string
}

/**
 * Типы для управления сортировкой.
 */
export type SortOrder = 'none' | 'asc' | 'desc'
export type SortField = 'none' | 'fullName' | 'deadline'

/**
 * Пропсы для компонента EmployeesTable.
 * @param employees - Массив данных сотрудников.
 */
export interface IEmployeesTableProps {
  employees: IEmployee[]
}
