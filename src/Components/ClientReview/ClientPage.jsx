import React, {useRef} from 'react'
import './ClientPage.css'
import next_icon from '../../Assets/nextIcon.png'
import back_icon from '../../Assets/backiCOn.png'
import murni from '../../Assets/murni-logo.png'
import pastryworld from '../../Assets/pastryworld logo.png'
import fujibake from '../../Assets/fuji logo.png'
import empico from '../../Assets/empico.png'

const ClientPage = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = () =>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

const slideBackward = () =>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}


  return (
    <div className='client'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={murni} alt="" />
                            <div>
                                <h3>Murni Bakery</h3>
                                <span>since 2020</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={fujibake} alt="" />
                            <div>
                                <h3>Fuji bakery</h3>
                                <span>since 2020</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={pastryworld} alt="" />
                            <div>
                                <h3>Pastry world</h3>
                                <span>since 2020</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={empico} alt="" />
                            <div>
                                <h3>Empico</h3>
                                <span>since 2020</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default ClientPage