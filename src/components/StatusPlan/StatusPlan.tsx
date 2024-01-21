import './StatusPlan.css'
import Flag from '../../assets/flag.svg'
// import NoIpr from "../../../assets/iconNoIPR.svg";
// import AboutWorker from "../../AboutWorker/AboutWorker";

export default function StatusPlan() {
  return (
    <div className='statusPlan'>
      <div className='statusPlan__container'>
        <label htmlFor='status' className='statusPlan__label'>
          Статус ИПР
        </label>
        <div className='statusPlan__container-select'>
          <img src={Flag} className='statusPlan__flag' alt='иконка флага' />
          <select id='status' className='statusPlan__select'>
            <option
              value='В работе'
              className='statusPlan__option statusPlan__option_type_work'
            >
              В работе
            </option>
            <option
              value='Выполнен'
              className='statusPlan__option statusPlan__option_type_done'
            >
              Выполнен
            </option>
            <option
              value='Отменен'
              className='statusPlan__option statusPlan__option_type_cancel'
            >
              Отменен
            </option>
            <option
              value='Не выполнен'
              className='statusPlan__option statusPlan__option_type_cancel_notWork'
            >
              Не выполнен
            </option>
          </select>
        </div>

        <h3 className=''></h3>

        <h3 className=''></h3>
      </div>
    </div>
  )
}
