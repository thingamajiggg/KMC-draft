import React from 'react'
import './ServiceTitle.css'

const ServiceTitle = ({subTitle, title}) => {
    return (
        <div className='servicetitle'>
            <h2>{title}</h2>
            <p>{subTitle}</p>
        </div>
    )
}

export default ServiceTitle
