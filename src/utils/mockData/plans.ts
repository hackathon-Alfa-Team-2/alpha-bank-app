import { nanoid } from 'nanoid'
import { IPlans } from '../../components/Table/PlanTable/PlanTable.types'

export const plans: IPlans[] = [
  {
    id: nanoid(),
    title: 'Развитие технических навыков',
    deadline: '10.01.2024',
    status: 'В работе',
    tasks: [
      {
        id: nanoid(),
        title: 'Установление процессов предварительной обработки данных',
        deadline: '10.01.2024',
        status: 'Отменён',
      },
      {
        id: nanoid(),
        title: 'Разработка единой системы метрик и KPI',
        deadline: '10.01.2024',
        status: 'В работе',
      },
      {
        id: nanoid(),
        title: 'Разработка стандартов и методологий анализа данных',
        deadline: '10.01.2024',
        status: 'Выполнен',
      },
      {
        id: nanoid(),
        title: 'Стандартизация аналитических отчетов и дашбордов',
        deadline: '10.01.2024',
        status: 'Выполнен',
      },
    ],
  },
  {
    id: nanoid(),
    title: 'Повышение грейда до Middle+',
    deadline: '23.12.2023',
    status: 'Выполнен',
    tasks: [
      {
        id: nanoid(),
        title: 'Установление процессов предварительной обработки данных',
        deadline: '10.01.2024',
        status: 'В работе',
      },
      {
        id: nanoid(),
        title: 'Разработка единой системы метрик и KPI',
        deadline: '10.01.2024',
        status: 'В работе',
      },
      {
        id: nanoid(),
        title: 'Разработка стандартов и методологий анализа данных',
        deadline: '10.01.2024',
        status: 'В работе',
      },
      {
        id: nanoid(),
        title: 'Стандартизация аналитических отчетов и дашбордов',
        deadline: '10.01.2024',
        status: 'В работе',
      },
    ],
  },
]

//export const plans: IPlans[] = []
