import React from 'react'
import './About.css'
import aboutImg from '../../Assets/aboutusPic.jpg'

const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={aboutImg} alt="" className='about-img'/>
            </div>
            <div className="about-right">
                <h3>ABOUT KMC 63 TRADING</h3>
                <h2>We have been serving customers worldwide for over 30 years
                </h2>
                <p>Welcome to KMC 63 Trading, a leading provider of high-quality stainless steel
                    products. where we craft high-quality, customizable bun trays and baking pans
                    tailored to your exact specifications. Our commitment to excellence extends
                    beyond functionality; we also offer professional paint coating services to
                    enhance the durability and aesthetics of your trays. With a focus on precision
                    engineering and customer satisfaction, we are dedicated to providing you with
                    the perfect solution for your baking needs. Join us in the world of stainless
                    steel perfection!. With a commitment to excellence and innovation, we have been
                    serving customers worldwide for over 30 years. Our dedication to quality
                    craftsmanship and customer satisfaction sets us apart in the industry.</p>
                <p>At KMC 63 Trading, our mission is to provide superior stainless steel
                    products that exceed our customers' expectations. We strive to maintain the
                    highest standards of quality, reliability, and integrity in everything we do.</p>
            </div>
        </div>
    )
}

export default About
