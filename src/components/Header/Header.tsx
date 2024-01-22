import Navigation from '../Navigation/Navigation'
import logoUrl from '../../images/Alfa-People-logo.png'
import profile from '../../images/Profile-photo.png'
import styles from './Header.module.scss'

export default function Header() {
  const {
    header,
    sideLogo,
    sideProfile,
    logo,
    searchBox,
    searchIcon,
    search,
    icon,
    iconContent,
    profileImage,
  } = styles
  return (
    <header className={header}>
      <div className={sideLogo}>
        <img className={logo} src={logoUrl} alt='логотип' />
        <Navigation />
      </div>
      <div className={sideProfile}>
        <label className={searchBox}>
          <i className={searchIcon}></i>
          <input className={search} type='text' placeholder='Поиск' />
        </label>
        <i className={icon}>
          <span className={iconContent}></span>
        </i>
        <img className={profileImage} src={profile} alt='фото руководителя' />
      </div>
    </header>
  )
}
