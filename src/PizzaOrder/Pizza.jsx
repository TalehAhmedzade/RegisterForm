import React from 'react'
import "./card.css"
const Pizza = (props) => {
  return (
    <div className='card'>
      <div className="img"><img src={props.src} alt="PizzaPhoto"/></div>
      <h2 className="title">{props.name}</h2>
      <p className='details'>{props.details}</p>
      <p>{props.price}$</p>
      <button>Order</button>
    </div>
  )
}

export default Pizza
