import React from 'react'
import '../App.css'

const Card = (props) => {
  return (
    <div className="card-container">
        <img src={props.src} alt="" />
        <h2>{props.title}</h2>
        <p>{props.description}</p> 
    </div> 
  )
}

export default Card