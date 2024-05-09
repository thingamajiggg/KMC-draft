import React from 'react'
import "./Hero.css"
import darkArrow from '../../Assets/darkarrow.png'
import {Link} from 'react-scroll'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>Welcome to KMC 63 Trading</h1>
                <p>We specialize in producing customizable bun trays and baking pans, along with
                    offering professional paint coating services for enhanced durability and
                    aesthetics.</p>
                <Link to='service' smooth={true} offset={-260} duration={500} className='btn'>Explore more
                    <img src={darkArrow} alt=""/></Link>
            </div>

        </div>
    )
}

export default Hero
