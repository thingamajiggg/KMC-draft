import React from 'react'
import './ServicePage.css'
import ServiceHead from './ServiceHead'
import ServiceCustom from '../ServicePage/ServiceCustom'

const ServicePage = () => {
  return (
    <div>
        <ServiceHead/>
        <div>        
            <ServiceCustom/>
            </div>
    </div>
  )
}

export default ServicePage
