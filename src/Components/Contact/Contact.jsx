import React from 'react'
import './Contact.css'
import msg_icon from '../../Assets/mail.png'
import mailicon from '../../Assets/email.png'
import phoneIcon from '../../Assets/telephone-call.png'
import locaIcon from '../../Assets/location.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us message <img src={msg_icon} alt="" /> </h3>
            <p>Feel free to reach us </p>
            <ul>
              <li><img src={mailicon} alt="" /> Contact@Wkeong_00</li>
              <li><img src={phoneIcon} alt="" />  +6012345678</li>
              <li><img src={locaIcon} alt="" /> maxim majestic, 56000</li>
            </ul>
        </div>
        <div className="contact-col"></div>
    </div>
  )
}

export default Contact
