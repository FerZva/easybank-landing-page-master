import React from 'react'
import Mockups from '../images/images/image-mockups.png'

function Introduction() {
  return (
    <main>
      {/* Text */}
      <div>
        <h2>Next generation digital banking</h2>
        <p>
          Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more
        </p>
        <button>Request Invite</button>
      </div>
      {/* Image */}
      <div>
        <img src={Mockups} alt="" />
      </div>
    </main>
  )
}

export default Introduction