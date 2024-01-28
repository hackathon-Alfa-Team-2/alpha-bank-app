import { Status } from '../Table.types'

export interface ITasks extends Status {
  id: string
  title: string
  deadline: string
}

export interface IPlans extends Status {
  id: string
  title: string
  deadline: string
  tasks: ITasks[]
}
