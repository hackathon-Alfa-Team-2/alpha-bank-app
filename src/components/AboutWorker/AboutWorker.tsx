import "./AboutWorker.css";
import Avatar from "../../assets/Avatar.svg";
import { useLocation } from "react-router-dom";


export default function AboutWorker() {
  const location = useLocation();
  return (
    <div className="aboutWorker__container-info">
      <img src={Avatar} className="aboutWorker__avatar" alt="аватар сотрудника" />
      <div className="aboutWorker__container-profile">
        <h2 className="aboutWorker__fio">Иванов Пётр Александрович</h2>
        <p className="aboutWorker__position">Middle аналитик</p>
      </div>
      <button 
      className={`aboutWorker__button ${
        location.pathname === "/list-of-workers/worker" ? "" : "aboutWorker__button_display_none"
      }`}>Создать ИПР +</button>
    </div>
  );
}
