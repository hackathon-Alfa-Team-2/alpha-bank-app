import Comment from '../Comment/Comment'
import styles from './CommentList.module.scss'
import image from '../../images/Profile-photo.png'
import { useState, useEffect } from 'react'

const user = {
  // name: 'Mика Ратилайнен',
  name: 'Mika Rattilaynen',
  imageUrl: image,
  isAdmin: true,
  messageTime: new Date().getHours(),
}

interface IMessage {
  postId: number
  id: number
  body: string
  email: string
  name: string
}

class Message implements IMessage {
  postId: number
  id: number
  body: string
  email: string
  name: string

  constructor(text: string) {
    this.postId = Number(new Date().getMilliseconds())
    this.id = Number(new Date().getSeconds())
    this.body = text
    this.email = 'mika@ratilynen.fi'
    this.name = user.name
  }
}

// this.date = new Date().toLocaleDateString()
// this.time = new Date().toLocaleTimeString()
async function getComments() {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments')
  return await res.json()
}

export default function CommentList() {
  const [inputValue, setInputValue] = useState<string>('')
  // const [comment, setComment] = useState({})
  const [comments, setComments] = useState<IMessage[]>([])

  function handleInput(e: any) {
    setInputValue(e.target.value)
  }

  function handleSubmit(e: any) {
    e.preventDefault()

    if (e.target.value) {
      const newComment: IMessage = new Message(inputValue)
      // setComment(newComment)
      setComments([newComment, ...comments])

      localStorage.setItem('comment', JSON.stringify(newComment))
      localStorage.setItem('comments', JSON.stringify(comments))
      setInputValue('')
    }
  }

  useEffect(() => {
    getComments()
      .then((comments) => setComments(comments.slice(0, 2)))
      .then(() => localStorage.setItem('comments', JSON.stringify(comments)))
  }, [])
  console.log(comments)
  return (
    <section className={styles.comments}>
      <h2 className={styles.title}>Комментарии</h2>
      <div className={styles.commentsContainer}>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
      <label htmlFor='' className={styles.label}>
        <img
          className={styles.userImage}
          src={user.imageUrl}
          alt='user photo'
        />
        <textarea
          className={styles.input}
          name=''
          id=''
          cols={20}
          value={inputValue}
          onChange={(e) => handleInput(e)}
          onBlur={handleSubmit}
          placeholder='Напишите комментарий'
        ></textarea>
      </label>
    </section>
  )
}
