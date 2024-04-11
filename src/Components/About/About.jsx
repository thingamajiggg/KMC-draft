import React from 'react'
import './About.css'
import aboutImg from '../../Assets/aboutExample.jpg'
import darkArrow from '../../Assets/darkarrow.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={aboutImg} alt="" className='about-img' />
            <img src={darkArrow} alt="" className='play-icon' />
        </div>
        <div className="about-right">
          <h3>ABOUT KMC 63 TRADING</h3>
          <h2>njnjnf nenfejnfe sjdncfskdn</h2>
          <p>Welcome to [Your Company Name], a leading provider of high-quality stainless steel products. 
            With a commitment to excellence and innovation, we have been serving customers worldwide for [X years/months]. 
            Our dedication to quality craftsmanship and customer satisfaction sets us apart in the industry.</p>
          <p>Established in [Year Established], [Your Company Name] has grown from a small workshop to a renowned manufacturer and supplier of stainless steel products. 
            Over the years, we have expanded our product line and invested in advanced technology to meet the evolving needs of our customers.</p>
          <p>At [Your Company Name], our mission is to provide superior stainless steel products that exceed our customers' expectations. 
            We strive to maintain the highest standards of quality, reliability, and integrity in everything we do.</p>
        </div>
    </div>
  )
}

export default About
