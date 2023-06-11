import React from 'react'
// images
import LogoWhite from '../images/images/logo-white.svg';
import facebook from '../images/images/icon-facebook.svg';
import youtube from '../images/images/icon-youtube.svg';
import twitter from '../images/images/icon-twitter.svg'
import Pinterest from '../images/images/icon-pinterest.svg'
import Instagram from '../images/images/icon-instagram.svg'
import InviteBtn from './InviteBtn';

function Footer() {
  return (
    <footer className='Container_footer'>
     
     <div className='Container_footer_left-menu'>
        <div className='Container_footer_left-menu_logo-social-container'>
          <img src={LogoWhite} className='Container_footer_left-menu_logo-social-container_logo' alt="" />
          <div className='Container_footer_left-menu_logo-social-container_social-icons'>
            <img src={facebook} className='Container_footer_left-menu_logo-social-container_social-icons_icon_facebook' alt="" />
            <img src={youtube} className='Container_footer_left-menu_logo-social-container_social-icons_icon_youtube' alt="" />
            <img src={twitter} className='Container_footer_left-menu_logo-social-container_social-icons_icon_twitter' alt="" />
            <img src={Pinterest} className='Container_footer_left-menu_logo-social-container_social-icons_icon_pinterest' alt="" />
            <img src={Instagram} className='Container_footer_left-menu_logo-social-container_social-icons_icon_instagram' alt="" />
          </div>
        </div>
        
        <nav className='Container_footer_left-menu_nav1'>
          <a href="#" className='Container_footer_left-menu_nav1_links'>About Us</a>
          <a href="#" className='Container_footer_left-menu_nav1_links'>Contact</a>
          <a href="#" className='Container_footer_left-menu_nav1_links'>Blog</a>
        </nav>

        <nav className='Container_footer_left-menu_nav2'>
          <a href="#" className='Container_footer_left-menu_nav2_links'>Careers</a>
          <a href="#" className='Container_footer_left-menu_nav2_links'>Support</a>
          <a href="#" className='Container_footer_left-menu_nav2_links'>Privacy Policy</a>
        </nav>
     </div>
      
      <div className='Container_footer_right-menu'>
      <InviteBtn />
        <p className='Container_footer_right-menu_signature'>© Easybank. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer