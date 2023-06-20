import React from 'react'
import "./Hero.css"

const Home = () => {

 

  return (
    <div className="home">
        <div className="h-content">
            <div className='h-hello gradient-text'>Hello !</div>
            <div className='h-intro gradient-text'>My Name Is</div>
            <div className='h-name gradient-text'>Debesh Mohapatra</div>
            <div className="h-desc">I am a MERN Stack developer. I love coding.I can make cool websites providing a good user interface.</div>
            <a href=' https://github.com/debesh-26' target='_blank'><button className='button'>Github</button></a>
        </div>
    </div>
  )
}

export default Home