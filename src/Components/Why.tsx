import React from 'react'
import img1 from '../images/images/icon-online.svg';
import img2 from '../images/images/icon-budgeting.svg';
import img3 from '../images/images/icon-onboarding.svg';
import img4 from '../images/images/icon-api.svg';

const features = [
  {
    image: img1,
    title:'Online Banking', 
    description: 'Our modern web and mobile applications allow you to keep of your finances wherever you are in the world',
  },
  {
    image: img2,
    title:'Simple Budgeting', 
    description: 'See exactly where your money goes each month. Receive notificacion when you are close to your hitting limits.',
  },
  {
    image: img3,
    title:'Fast Onboarding', 
    description: 'We do not branches. Open your account in minutes online and start taking control of your finances right away',
  },
  {
    image: img4,
    title:'Open API', 
    description: 'Manage your savings, investments, pensions, and much more from one account. Tracking your money has never been easier',
  },
];

const Why = () => {
  return (
    <div>
      {features.map((feature, index) => {
        const { image, title, description } =  feature;
        return (
          <div key={ index }>
            <img src={image} alt="" />
            <h3> { title } </h3>
            <p> { description } </p>
          </div>
        );
      })}
    </div>
    );
};

export default Why