import './Comments.css'
import AvatarComment from '../../assets/photo_2024-01-17 13.52.png'

export default function Comments() {
  return (
    <div className='comments'>
      <h3 className='comments__title'>Комментарии</h3>
      <div className='comments__container'>
        <img
          src={AvatarComment}
          className='comments__avatar'
          alt='Иконка аватара'
        />
        <div className='comments__container-text'>
          <p className='comments__name'>Мика Ратилайнен</p>
          <input
            type='text'
            className='comments__input'
            placeholder='Напишите комментарий'
          />
        </div>
      </div>
    </div>
  )
}
