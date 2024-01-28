import styles from './Comment.module.scss'
import image from '../../images/Profile-photo.png'
import { ICommentProps } from './Comment.type'

// const user = {
//   name: 'Mика Ратилайнен',
//   profileImage: image,
//   isAdmin: true,
//   messageTime: new Date().getHours(),
// }

export default function Comment({ comment }: ICommentProps) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} />
      <div className={styles.content}>
        <p className={styles.userName}>
          {comment.email}{' '}
          <span className={styles.dateTime}>{comment.postId}</span>{' '}
          <span className={styles.dateTime}>{comment.id}</span>
        </p>
        <p className={styles.commentText}>{comment.body}</p>
      </div>
    </div>
  )
}
