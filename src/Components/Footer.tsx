import React from 'react'
// images
import Logo from '../images/images/logo.svg';
import facebook from '../images/images/icon-facebook.svg';
import youtube from '../images/images/icon-youtube.svg';
import twitter from '../images/images/icon-twitter.svg'
import Pinterest from '../images/images/icon-pinterest.svg'
import Instagram from '../images/images/icon-instagram.svg'

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="" />
      <div>
        <img src={facebook} alt="" />
        <img src={youtube} alt="" />
        <img src={twitter} alt="" />
        <img src={Pinterest} alt="" />
        <img src={Instagram} alt="" />
      </div>
      <nav>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
        <a href="#">Careers</a>
        <a href="#">Support</a>
        <a href="#">Privccy Policy</a>
      </nav>
      <button>Request Invite</button>
      <div>
        <p>© Easybank. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer