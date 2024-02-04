//import { Status } from '../Table.types'

/**
 * Тип данных для сотрудника.
 * @param id - Идентификатор сотрудника.
 * @param avatar - URL аватара сотрудника.
 * @param first_name - Полное имя сотрудника.
 * @param position - Должность сотрудника.
 * @param deadline - Срок выполнения задачи в формате строки.
 * @param status - Статус выполнения задачи сотрудником.
 */
//export interface IEmployee extends Status {
//  id: string
//  photo: string
//  first_name: string
//  second_name: string
//  last_name: string
//  position: string
//  active_lms: { deadline: null; name: string; status: null }
//  supervisor: number
//}

//export interface IFlattenEmployee extends Status {
//  id: string
//  photo: string
//  first_name: string
//  second_name: string
//  last_name: string
//  position: string
//  deadline: null
//  name: string
//  supervisor: number
//}
export interface Lms {
  name: string
  deadline: string | null
  status: string | null
}

export interface InputItem {
  id: number
  first_name: string
  second_name: string
  last_name: string
  position: string
  photo: string | null
  active_lms: Lms
  supervisor: number
}

export interface NewItem {
  id: number
  first_name: string
  second_name: string
  last_name: string
  position: string
  photo: string | null
  name: string
  deadline: string | null
  status: string | null
  supervisor: number
}

/**
 * Типы для управления сортировкой.
 */
export type SortOrder = 'none' | 'asc' | 'desc'
export type SortField = 'none' | 'first_name' | 'deadline'

/**
 * Пропсы для компонента EmployeesTable.
 * @param employees - Массив данных сотрудников.
 */
export interface IEmployeesTableProps {
  employees: NewItem[]
}
