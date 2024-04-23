import React from 'react'
import './ServicePage.css'
import ServiceHead from './ServiceHead'
import ServiceCustom from '../ServicePage/ServiceCustom'
import Footer from '../../Components/Footer/Footer'

const ServicePage = () => {
  return (
    <div>
        <ServiceHead/>
        <div className="container">         
            <ServiceCustom/>
            <Footer/>
            </div>
    </div>
  )
}

export default ServicePage
