import React from 'react'
import "./Card.css"

const Card = ({i,link,title,desc}) => {
  return (
    <div className="c-container">
        <div className="c-box">
            <img src={i} alt="" className="card-img" />
            <span className="c-title">{title}</span>
            <p>{desc}</p>
            <a href={link} target='_blank' rel='noreferrer'>
            <button className='card-button'>GitHub</button>
            </a>
        </div>
    </div>
  )
}

export default Card