import "./Sidebar.css";
import Arrow from "../../../assets/arrow.left.svg"
import IconPeople from "../../../assets/icon-people.svg"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <button className="sidebar__button">
          <img className="sidebar__img" src={Arrow} alt="Иконка стрелки назад" />
          <h3 className="sidebar__button-text">Назад</h3>
          </button>
      </div>
      <div className="sidebar__menu">
      <button className="sidebar__button">
          <img className="sidebar__img" src={IconPeople} alt="Иконка людей" />
          <h3 className="sidebar__button-text">Сотрудники</h3>
          </button>
          <button className="sidebar__button">
          <img className="sidebar__img" src={IconPeople} alt="Иконка людей" />
          <h3 className="sidebar__button-text">Мой ИПР</h3>
          </button>
          <button className="sidebar__button">
          <img className="sidebar__img" src={IconPeople} alt="Иконка людей" />
          <h3 className="sidebar__button-text">Компетенции</h3>
          </button>
          <button className="sidebar__button">
          <img className="sidebar__img" src={IconPeople} alt="Иконка людей" />
          <h3 className="sidebar__button-text">Результаты тестов</h3>
          </button>
      </div>
    </div>
  );
}