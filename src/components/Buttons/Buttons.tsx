import './Buttons.css'

export default function Buttons() {
  return (
    <div className='buttons'>
      <button className='buttons__button buttons__button_type_black'>
        <h3 className='buttons__text'>Сохранить ИПР</h3>
      </button>
      <button className='buttons__button buttons__button_type_white'>
        <h3 className='buttons__text buttons__text_type_white'>Отменить</h3>
      </button>
    </div>
  )
}
