import React from 'react'
import './CompanyPhoto.css'
import company1 from '../../Assets/company1.jpg'
import company2 from '../../Assets/company2.jpg'
import aboutUs from '../../Assets/aboutusPic.jpg'
import company4 from '../../Assets/company4.jpg'

const CompanyPhoto = () => {
    return (
        <div className='company'>
            <div className="gallery">
                <img src={company1} alt=""/>
                <img src={company2} alt=""/>
                <img src={aboutUs} alt=""/>
                <img src={company4} alt=""/>
            </div>
        </div>
    )
}

export default CompanyPhoto