import React, {useState}  from 'react'
import './Services.css'
import service1 from '../../Assets/coating.jpg'
import serviceIcon from '../../Assets/serviceIcon.png'
import serviceIcon3 from '../../Assets/serviceIcon3.png'
import { Link } from 'react-router-dom'


const Services = () => {
  return (
    <div className="services">
        <div className="service">
            <img src={service1} alt="" />
            <div className="caption">
                <img src={serviceIcon3} alt="" />
                <p>Coating service 1</p>
            </div>
        </div>
        <div className="service">
            <img src={service1} alt="" />
            <div className="caption">
            <img src={serviceIcon3} alt="" />
                <p>Coating service 2</p>
            </div>
        </div>
        <div className="service">
            <img src={service1} alt="" />
            <div className="caption">
                <img src={serviceIcon3} alt="" />
                <p>Coating service 3</p>
            </div>
        </div>
    </div>
  )
}

export default Services
