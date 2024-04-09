import React from 'react'
import "./Hero.css"
import darkArrow from '../../Assets/darkarrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>we have the best stainless steel</h1>
            <p>our cujdsnmkmdkf wkek kdnekndnsk </p>
            <button className='btn'>Explore more <img src={darkArrow} alt="" /></button>
        </div>
    
    </div>
  )
}

export default Hero
