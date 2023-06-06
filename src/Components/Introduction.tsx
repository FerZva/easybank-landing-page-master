import React from 'react'
import Mockups from '../images/images/image-mockups.png'
import InviteBtn from './InviteBtn.jsx';

function Introduction() {
  return (
    <main className='Container_main-container'>
      {/* Text */}
      <div className='Container_main-container_description'>
        <h2 className='Container_main-container_description_title'>
          Next generation digital banking
        </h2>
        <p className='Container_main-container_description_paragraph'>
          Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more
        </p>
        <InviteBtn/>
      </div>
      {/* Image */}
      <div className='Container_main-container_poster'>
        <img src={Mockups} className='Container_main-container_poster_img' alt="" />
      </div>
    </main>
  )
}

export default Introduction