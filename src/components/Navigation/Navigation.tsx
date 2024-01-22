import styles from './Navigation.module.scss'

export default function Navigation() {
  const { nav, list, item, link } = styles
  return (
    <nav className={nav}>
      <ul className={list}>
        <li className={item}>
          <a href='#' className={link}>
            Контакты
          </a>
        </li>
        <li className={item}>
          <a href='#' className={link}>
            Информация
          </a>
        </li>
        <li className={item}>
          <a href='#' className={link}>
            Подразделения
          </a>
        </li>
      </ul>
    </nav>
  )
}
