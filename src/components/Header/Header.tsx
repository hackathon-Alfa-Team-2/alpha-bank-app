import Navigation from '../Navigation/Navigation';
import logo from '../../images/Alfa-People-logo.png';
import profile from '../../images/Profile-photo.png';
import './Header.css';

export default function Header() {
  return (
    <header className='header'>
      <div className='wrapper logoSide'>
        <img
          className='logo'
          src={logo}
          alt='логотип'
        />
        <Navigation />
      </div>
      <div className='wrapper profileSide'>
        <label className='searchBox'>
          <i className='searchIcon'></i>
          <input
            className='search'
            type='text'
            placeholder='Поиск'
          />
        </label>
        <i className='icon'>
          <span className='iconContent'></span>
        </i>
        <img
          className='profileImage'
          src={profile}
          alt='фото руководителя'
        />
      </div>
    </header>
  );
}
