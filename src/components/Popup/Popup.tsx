import './Popup.css'
import Done from '../../assets/done.svg'

export default function Popup() {
  return (
    <div className='popup'>
      {/* <div className='popup popup_open'> */}
      <img src={Done} className='popup__done' alt='иконка успешной операции' />
      <div className='popup__container'>
        <h3 className='popup__title'>Создано</h3>
        <p className='popup__subtitle'>
          Индивидуальный план развития успешно создан
        </p>
      </div>
      <div className='popup__wrapper-img'>
        <button className='popup__close' />
      </div>
    </div>
  )
}
