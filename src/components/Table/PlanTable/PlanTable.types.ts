export interface ITasks {
  id: string
  title: string
  deadline: string
  status: string
}

export interface IPlans {
  id: string
  title: string
  deadline: string
  status: string
  tasks: ITasks[]
}
