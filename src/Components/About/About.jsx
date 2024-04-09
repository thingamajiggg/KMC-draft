import React from 'react'
import './About.css'
import aboutImg from '../../Assets/aboutExample.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={aboutImg} alt="" className='about-img' />
        </div>
        <div className="about-right"></div>
    </div>
  )
}

export default About
