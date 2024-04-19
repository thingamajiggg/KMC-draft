import React from 'react'
import "./Hero.css"
import darkArrow from '../../Assets/darkarrow.png'
import { Link } from 'react-scroll'
import { ScrollLink } from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>we have the best stainless steel</h1>
            <p>our cujdsnmkmdkf wkek kdnekndnsk </p>
            <Link to = 'service' smooth={true} offset={-260} duration={500} className='btn'>Explore more <img src={darkArrow} alt="" /></Link>
        </div>
    
    </div>
  )
}

export default Hero
