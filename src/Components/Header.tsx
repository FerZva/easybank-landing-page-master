import { useState } from 'react';
import Logo from '../images/images/logo.svg';
import MenuButton from '../images/images/icon-hamburger.svg';
import CloseButton from '../images/images/icon-close.svg';
import InviteBtn from './InviteBtn.jsx';
// Hooks

const Header = () => {

  const [displayImagen, setDisplayImagen] = useState('block');
  const [displayDiv, setDisplayDiv] = useState('none');

  const toggleImagen = () => {
    setDisplayImagen(displayImagen === 'block' ? 'none' : 'block');
    setDisplayDiv(displayDiv === 'block' ? 'none' : 'block');
  };


  return (
    <header className='Container_header'>
      <nav className='Container_header_nav-left'>
        <img src={Logo} alt="" />
      </nav>
      <nav
        style={{ display: displayDiv }} 
        className='Container_header_nav-right'>
          <a href="#" className="Container_header_nav-right_a">Home</a>
          <a href="#" className="Container_header_nav-right_a">About</a>
          <a href="#" className="Container_header_nav-right_a">Contact</a>
          <a href="#" className="Container_header_nav-right_a">Blog</a>
          <a href="#" className="Container_header_nav-right_a">Careers</a>
          <InviteBtn />
      </nav>
      <div className='Container_header_invite-btn'>
        <button>Request Invite</button>
      </div>

      <div>
        <img 
          src={CloseButton} 
          style={{ display: displayImagen === 'block' ? 'none' : 'block' }}
          onClick={toggleImagen}
          className='Container_header_close-btn' 
          id='Container_header_close-btn' 
          alt="" 
        />

        <img 
          src={MenuButton}
          style={{ display: displayImagen }}
          onClick={toggleImagen}
          className='Container_header_menu-btn' 
          id='Container_header_menu-btn' 
          alt="" 
        />
      </div>
    </header>
  )
}

export default Header