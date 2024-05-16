import React from 'react'
import './ClientPage.css'
import next_icon from '../../Assets/nextIcon.png'
import back_icon from '../../Assets/backiCOn.png'
import testimg from '../../Assets/JS20308.png'

const ClientPage = () => {
  return (
    <div className='client'>
        <img src={next_icon} alt="" className='next-btn'/>
        <img src={back_icon} alt="" className='back-btn'/>
        <div className="slider">
            <ul>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={testimg} alt="" />
                            <div>
                                <h3>william</h3>
                                <span>hdhdhdh</span>
                            </div>
                        </div>
                        <p>testteestttssttesstt</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={testimg} alt="" />
                            <div>
                                <h3>william</h3>
                                <span>hdhdhdh</span>
                            </div>
                        </div>
                        <p>testteestttssttesstt</p>
                    </div>
                </li><li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={testimg} alt="" />
                            <div>
                                <h3>william</h3>
                                <span>hdhdhdh</span>
                            </div>
                        </div>
                        <p>testteestttssttesstt</p>
                    </div>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default ClientPage