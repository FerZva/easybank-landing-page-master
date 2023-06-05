import React from "react";
import img1 from '../images/images/image-currency.jpg'
import img2 from '../images/images/image-restaurant.jpg'
import img3 from '../images/images/image-plane.jpg'
import img4 from '../images/images/image-confetti.jpg'

const articles = [
  {
    image: img1,
    author: "By Claire Robinson",
    title: "Receive money in any currency with no fees",
    description:
      "The world getting smaller and we are becoming more mobile. So why should be forced to only receive money in an single ...",
  },
  {
    image: img2,
    author: "By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    description: 
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...",
  },
  {
    image: img3,
    author: "By Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    description: 
      "We want you to enjoy your travels, This is why we don't charge any fees on purchases while you're abroad. We'll even show you...",
  },
  {
    image: img4,
    author: "By Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    description: "After a lot of hard work by the whole team, we're excited to launch our closed beta. it's easy to request an invite through the site ...",
  },
];

const Articles = () => {
  return (
    <div>
      {articles.map((article, index) => {
        const { image, author, title, description } = article;
        return (
          <div key={index}>
            <img src={image} alt="" />
            <span> {author} </span>
            <h3> {title} </h3>
            <p> {description} </p>
          </div>
        );
      })}
    </div>
  );
}

export default Articles;
