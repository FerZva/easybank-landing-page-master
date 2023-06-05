import React from 'react';
import Logo from '../images/images/logo.svg';
import MenuButton from '../images/images/icon-hamburger.svg';
import CloseButton from '../images/images/icon-close.svg';


function Header() {
  return (
    <header className='Container_header'>
      <nav className='Container_header_nav-left'>
        <img src={Logo} alt="" />
      </nav>
      <nav className='Container_header_nav-right'>
        <a href="#" className="Container_header_nav-right_a">Home</a>
        <a href="#" className="Container_header_nav-right_a">About</a>
        <a href="#" className="Container_header_nav-right_a">Contact</a>
        <a href="#" className="Container_header_nav-right_a">Blog</a>
        <a href="#" className="Container_header_nav-right_a">Careers</a>
        <img src={CloseButton} alt="" />
      </nav>
      <img src={MenuButton} alt="" />
    </header>
  )
}

export default Header