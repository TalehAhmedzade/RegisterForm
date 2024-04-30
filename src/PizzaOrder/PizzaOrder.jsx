import React, { useState } from "react";
import Pizza from "./Pizza";
import Navbar from "./Navbar";
import Bucket from "./Bucket";

const PizzaOrder = () => {
  const pizzaList = [
    {
        src: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/95/13/9d/pizza-mizza-baku.jpg',
      name: "Italian Pizza",
      details:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
      price: 2.89
    },
    {
        src: 'https://st3.idealista.it/news/archivie/styles/twitter/public/2022-10/media/image/aurelien-lemasson-theobald-x00czbt4dfk-unsplash.jpg?VersionId=1jsxd2iNI0TC2g6IZ4xjJBRaCGP9bZgn&itok=PPDHeL2Q',
      name: "Greek Pizza",
      details:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
      price: 2.89
    },
    {
        src: 'https://static-content.owner.com/funnel/images/caebf58f-73a8-43ac-ba84-636b681f7ceb?v=3113228459&w=3840&q=80&auto=format',
      name: "Caucasian Pizza",
      details:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
      price: 2.89
    },
    {
        src: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/95/13/9d/pizza-mizza-baku.jpg',
      name: "Caucasian Pizza",
      details:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
      price: 2.89
    }
  ];
  const [bucket,setBucket] = useState([]);
  return (
    <>
      <div className="nav">
        <Navbar />
        <Bucket />
      </div>
      <div className="main">
        {
            pizzaList.map((pizza,index)=>{
               return <Pizza src={pizza.src} name={pizza.name} details={pizza.details} price={pizza.price} key={index}/>
            })
        }
      </div>
    </>
  );
};

export default PizzaOrder;