import styles from './UserInfoCard.module.scss'

interface IUserCardInfo {
  photo: { src: string | null; width: string; height: string }
  fullName: string
  position: string
  fullNameFontSize?: string
  positionFontSize?: string
}

const UserInfoCard = ({
  photo = { src: '', width: '50px', height: '50px' },
  fullName,
  position,
  fullNameFontSize,
  positionFontSize,
}: IUserCardInfo) => {
  return (
    <div className={styles.container}>
      <img
        src={photo.src || ''}
        alt='photo'
        className={styles.avatar}
        style={{
          width: photo.width,
          height: photo.height,
        }}
      />
      <div className={styles.wrapper}>
        <p className={styles.title} style={{ fontSize: fullNameFontSize }}>
          {fullName}
        </p>
        <span
          className={styles.subtitle}
          style={{ fontSize: positionFontSize }}
        >
          {position}
        </span>
      </div>
    </div>
  )
}

export default UserInfoCard
