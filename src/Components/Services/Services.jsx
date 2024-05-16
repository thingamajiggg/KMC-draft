import React from 'react'
import './Services.css'
import service1 from '../../Assets/coating.jpg'
import customimage from '../../Assets/company4.jpg'
import coating1 from '../../Assets/coating1.jpg'
import mixer from '../../Assets/mixerrenew.jpg'
import serviceIcon3 from '../../Assets/serviceIcon3.png'
import customimg from '../../Assets/icons8bakingtray.png'
import coatingimg from '../../Assets/iconsspraygun.png'
import repairimg from '../../Assets/iconsrepair.png'

const Services = () => {
    return (
        <div className="services">
            <div className="service">
                <img src={customimage} alt=""/>
                <div className="caption">
                    <img src={customimg} alt=""/>
                    <p>Customize Service</p>
                </div>
            </div>
            <div className="service">
                <img src={coating1} alt=""/>
                <div className="caption">
                    <img src={coatingimg} alt=""/>
                    <p>Coating service</p>
                </div>
            </div>
            <div className="service">
                <img src={mixer} alt=""/>
                <div className="caption">
                    <img src={repairimg} alt=""/>
                    <p>Maintanence Service</p>
                </div>
            </div>
        </div>
    )
}

export default Services
