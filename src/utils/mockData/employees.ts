import { nanoid } from 'nanoid'
import { IEmployee } from '../../components/Table/EmployeesTable/EmployeesTable.types'
import Filippov_Alexander_Romanovich from './employeesPics/Filippov_Alexander_Romanovich.png'
import Ivanov_Peter_Alexandrovich from './employeesPics/Ivanov_Peter_Alexandrovich.png'
import Ivanov_Sergey_Petrovich from './employeesPics/Ivanov_Sergey_Petrovich.png'
import Kukushkina_Oksana_Sergeevna from './employeesPics/Kukushkina_Oksana_Sergeevna.png'
import Sokolova_Sofya_Nikolaevna from './employeesPics/Sokolova_Sofya_Nikolaevna.png'

export const employees: IEmployee[] = [
  {
    id: nanoid(),
    avatar: Filippov_Alexander_Romanovich,
    fullName: 'Филиппов Александр Романович',
    position: 'JavaScript Разработчик',
    deadline: '10.01.2024',
    status: 'В работе',
    content: 'Филиппов Александр Романович',
  },
  {
    id: nanoid(),
    avatar: Ivanov_Peter_Alexandrovich,
    fullName: 'Иванов Пётр Александрович',
    position: 'Аналитик',
    deadline: '23.12.2023',
    status: 'Выполнен',
    content: 'Иванов Пётр Александрович',
  },
  {
    id: nanoid(),
    avatar: Kukushkina_Oksana_Sergeevna,
    fullName: 'Кукушкина Оксана Сергеевна',
    position: 'UI/UX Дизайнер',
    deadline: '15.12.2023',
    status: 'Отменён',
    content: 'Кукушкина Оксана Сергеевна',
  },
  {
    id: nanoid(),
    avatar: Ivanov_Sergey_Petrovich,
    fullName: 'Иванов Сергей Петрович',
    position: 'Разработчик',
    deadline: '10.01.2024',
    status: 'В работе',
    content: 'Иванов Сергей Петрович',
  },
  {
    id: nanoid(),
    avatar: Sokolova_Sofya_Nikolaevna,
    fullName: 'Соколова Софья Николаевна',
    position: 'UI/UX Дизайнер',
    deadline: '01.06.2023',
    status: 'Выполнен',
    content: 'Соколова Софья Николаевна',
  },
]
