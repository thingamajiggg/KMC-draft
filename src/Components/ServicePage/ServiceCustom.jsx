import React from "react";
import "./ServiceCustom.css";
import oldtray from '../../Assets/oldbakingtray.png'
import completetray from '../../Assets/complatetray.png'
import bakeremove1 from '../../Assets/bakeremove1.png'
import bakeremove2 from '../../Assets/bakeremove 2.png'
import bakeremove3 from '../../Assets/bakeremove3.png'
import reconbake from '../../Assets/recontray.png'
import trayremove1 from '../../Assets/trayremove1.png'

const ServiceCustom = () => {
    return (
        <div className="servicescustom">
            <div className="servicetitle">
                <h2>Coating Service</h2>
                <p>我们的涂层服务包括 :</p>
                    <li>翻新旧烤盘</li>
                    <li>为其重新喷上涂料</li>
                    <li>漆料使用水性双层涂料</li>
                <p>我们使用的漆料是以聚四氟乙烯为基本的不占涂料，它能让你的产品:</p>
                    <li>具有高耐蚀性</li>
                    <li>耐高温</li>
                    <li>优越的不粘性</li>
                    <li>良好的防水性</li>
                
            </div>

            <div className="servicesrow">
                <div className="servicecus">
                    <img src={oldtray} alt=""/>
                    <div className="captioncus">
                        <p>Old Baking Tray</p>
                    </div>
                    <div className="servicestatus">
                        <p>Before</p>
                    </div>
                </div>
                <div className="servicecus">
                    <img src={completetray} alt=""/>
                    <div className="captioncus">
                        <p>Baking trays after coating</p>
                    </div>
                    <div className="servicestatus">
                        <p>After</p>
                    </div>
                </div>
            </div>

            <div className="servicetitle">
                <h2>Customize services</h2>
                <p>客制化烤盘服务包括 :</p>
                    <li>接受各种尺寸的订做</li>
                    <li>各种形状，图案，皆可制作</li>
                    <li>材料也包括白钢，铝合金等等</li>
                <p>我们的烤盘也提供几项功能:</p>
                    <li>具有高耐蚀性</li>
                    <li>耐高温</li>
                    <li>优越的不粘性</li>
                    <li>良好的防水性</li>
            </div>

            <div className="servicesrow">
                <div className="servicecus">
                    <img src={reconbake} alt=""/>
                    <div className="captioncus">
                        <p>Customize baking trays</p>
                    </div>
                </div>
                <div className="servicecus">
                    <img src={completetray} alt=""/>
                    <div className="captioncus">
                        <p>Customize baking trays</p>
                    </div>
                </div>
                <div className="servicecus">
                    <img src={bakeremove1} alt=""/>
                    <div className="captioncus">
                        <p>Customize baking trays</p>
                    </div>
                </div>
            </div>

            <div className="servicesrow">
                <div className="servicecus">
                    <img src={bakeremove2} alt=""/>
                    <div className="captioncus">
                        <p>Customize baking trays</p>
                    </div>
                </div>
                <div className="servicecus">
                    <img src={bakeremove3} alt=""/>
                    <div className="captioncus">
                        <p>Customize baking trays</p>
                    </div>
                </div>
                <div className="servicecus">
                    <img src={trayremove1} alt=""/>
                    <div className="captioncus">
                        <p>Customize baking trays</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCustom;
