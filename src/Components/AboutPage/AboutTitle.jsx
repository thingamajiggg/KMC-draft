import React from 'react'
import './AboutTitle.css'

const AboutTitle = ({subTitle, title}) => {
    return (
        <div className='abouttitle'>
            <p>{subTitle}</p>
            <h2>{title}</h2>
        </div>
    )
}

export default AboutTitle
