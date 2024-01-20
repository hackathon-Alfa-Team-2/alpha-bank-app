import "./IndidvidualPlan.css";

export default function IndidvidualPlan() {
  return (
    <div className="indidvidualPlan">
      <div className="worker__container">
        <h3 className="worker__adress">ИПР</h3>
        <img
          // src={ArrowRight}
          className="worker__arrow"
          alt="иконка стрелки вправо"
        />
        <h3 className="worker__adress">Сотрудники</h3>
      </div>
      <div className="worker__container-info">
        {/* <img src={Avatar} className="worker__avatar" alt="аватар сотрудника" /> */}
        <div className="worker__container-profile">
          <h2 className="worker__fio">Иванов Пётр Александрович</h2>
          <p className="worker__position">Middle аналитик</p>
        </div>
        <button className="worker__button">Создать ИПР +</button>
      </div>

      
    </div>
  );
}
