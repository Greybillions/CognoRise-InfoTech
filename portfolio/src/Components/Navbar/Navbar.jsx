import './Navbar.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import { useRef, useState } from 'react';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef(null);

  const openMenu = () => {
    menuRef.current.style.right = '0';
  };
  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  };

  return (
    <div className='navbar' id='home'>
      <div className='nav-logo'>
        <h2 className='logo'>GRaHaM</h2>
        <img src={theme_pattern} alt='' />
      </div>
      <img src={menu_open} onClick={openMenu} alt='' className='nav-mob-open' />
      <ul ref={menuRef} className='nav-menu'>
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=''
          className='nav-mob-close'
        />
        <li>
          <a onClick={() => setMenu('home')} href='#home'>
            Home
          </a>
          {menu === 'home' ? <img src={underline} alt='' /> : <></>}
        </li>
        <li>
          <a onClick={() => setMenu('about')} href='#about'>
            About Me
          </a>
          {menu === 'about' ? <img src={underline} alt='' /> : <></>}
        </li>
        <li>
          <a onClick={() => setMenu('services')} href='#services'>
            Services
          </a>
          {menu === 'services' ? <img src={underline} alt='' /> : <></>}
        </li>
        <li>
          <a onClick={() => setMenu('mywork')} href='#projects'>
            Projects
          </a>
          {menu === 'mywork' ? <img src={underline} alt='' /> : <></>}
        </li>

        <li>
          <a onClick={() => setMenu('contact')} href='#contact'>
            Contact
          </a>
          {menu === 'contact' ? <img src={underline} alt='' /> : <></>}
        </li>
        <li>
          <a
            className='nav-connect show'
            href='http://greyboyle.hashnode.dev'
            target='_blank'
            rel='noopener noreferrer'
          >
            My Blog
          </a>
        </li>
      </ul>
      <div>
        <a
          className='nav-connect'
          href='http://greyboyle.hashnode.dev'
          target='_blank'
          rel='noopener noreferrer'
        >
          My Blog
        </a>
      </div>
    </div>
  );
};

export default Navbar;
