import { ChangeEvent, useState } from 'react'
import './InputSearch.css'

export default function InputSearch() {
  // логику доделать
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <div className='inputSearch'>
      <h2 className='inputSearch__title'>Ввести название</h2>
      <input
        className='inputSearch__input'
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Ввести описание'
      />
    </div>
  )
}
