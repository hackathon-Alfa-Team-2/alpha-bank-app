import { Status } from '../Table.types'

export interface ITasks extends Status {
  id: string
  name: string
  description: string
  deadline: string
  date_added: string
  lms_id: number
}

export interface IPlans extends Status {
  id: number
  name: string
  description: string
  is_active: boolean
  deadline: string
  tasks: ITasks[]
  skill_assessment_before: number
  skill_assessment_after: number
  employee_id: number
  supervisor: number
}
