import "./Worker.css";
import ArrowRight from "../../../assets/arrowRight.svg";
import Avatar from "../../../assets/Avatar.svg";
import NoIpr from "../../../assets/iconNoIPR.svg";

export default function Worker() {
  return (
    <div className="worker">
      <div className="worker__container">
        <h3 className="worker__adress">ИПР</h3>
        <img
          src={ArrowRight}
          className="worker__arrow"
          alt="иконка стрелки вправо"
        />
        <h3 className="worker__adress">Сотрудники</h3>
      </div>
      <div className="worker__container-info">
        <img src={Avatar} className="worker__avatar" alt="аватар сотрудника" />
        <div className="worker__container-profile">
          <h2 className="worker__fio">Иванов Пётр Александрович</h2>
          <p className="worker__position">Middle аналитик</p>
        </div>
        <button className="worker__button">Создать ИПР +</button>
      </div>

      {/* Если нет ИПР, то: */}
      <div className="worker__container-noIPR">
        <div className="worker__wrapperImg-noIPR">
          <img
            src={NoIpr}
            className="worker__noIpr"
            alt="иконка отсутствия ИПР"
          />
        </div>
        <h4 className="worker__title">У сотрудника пока нет ИПР</h4>
        <p className="worker__subtitle">
          Чтобы создать индивидуальный план развития сотрудника, нажмите
          «Создать ИПР»
        </p>
      </div>
    </div>
  );
}
