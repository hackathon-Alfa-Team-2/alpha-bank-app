import './Sidebar.css'
import Arrow from '../../assets/arrow.left.svg'
import IconPeople from '../../assets/icon-people.svg'
import IconIpr from '../../assets/icon-IPR.svg'
import IconCompatation from '../../assets/icon-brain.svg'
import IconTest from '../../assets/icon-library.svg'

export default function Sidebar() {
  const handleBack = () => {
    window.history.back()
  }
  return (
    <div className='sidebar'>
      <div className='sidebar__container'>
        <button className='sidebar__button' onClick={handleBack}>
          <div className='sidebar__img'>
            <img src={Arrow} alt='Иконка стрелки назад' />
          </div>
          <h3 className='sidebar__button-text'>Назад</h3>
        </button>
      </div>
      <div className='sidebar__menu'>
        <button className='sidebar__button-menu sidebar__button-menu_active'>
          <img
            className='sidebar__button-img'
            src={IconPeople}
            alt='Иконка людей'
          />
          <h3 className='sidebar__button-name'>Сотрудники</h3>
        </button>
        <button className='sidebar__button-menu'>
          <img
            className='sidebar__button-img'
            src={IconIpr}
            alt='Иконка людей'
          />
          <h3 className='sidebar__button-name'>Мой ИПР</h3>
        </button>
        <button className='sidebar__button-menu'>
          <img
            className='sidebar__button-img'
            src={IconCompatation}
            alt='Иконка людей'
          />
          <h3 className='sidebar__button-name'>Компетенции</h3>
        </button>
        <button className='sidebar__button-menu'>
          <img
            className='sidebar__button-img'
            src={IconTest}
            alt='Иконка людей'
          />
          <h3 className='sidebar__button-name'>Результаты тестов</h3>
        </button>
      </div>
    </div>
  )
}
