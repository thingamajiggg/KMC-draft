import React from "react";
import "./ServiceCustom.css";
import oldtray from '../../Assets/oldbakingtray.png'
import completetray from '../../Assets/complatetray.png'
import bakeremove1 from '../../Assets/example1-removebg.png'
import bakeremove2 from '../../Assets/example6-removebg.png'
import style from '../../Assets/styletray.png'
import bakeremove3 from '../../Assets/bakeremove3.png'
import trayremove1 from '../../Assets/trayremove1.png'

const ServiceCustom = () => {
    return (
        <div className="servicescustom">
            <div className="servicetitle">
                <h2>喷漆涂层服务</h2>
                <p>我们的涂层服务包括 :</p>
                    <li>翻新旧烤盘</li>
                    <li>为其重新喷上涂料</li>
                    <li>漆料使用水性双层涂料</li>
                <p>我们使用的漆料是以聚四氟乙烯为基本的不占涂料，它能让你的产品:</p>
                    <li>具有高耐蚀性</li>
                    <li>耐高温</li>
                    <li>优越的不粘性</li>
                    <li>良好的防水性</li>
                    <h2>Coating Service</h2>
                <p>Our coating services include:</p>
                    <li>Refurbishing old baking trays</li>
                    <li>Spray a new coat of paint</li>
                    <li>Using water-based double-layer coatings</li>
                <p>The paint we use is a non-stick coating based on polytetrafluoroethylene (PTFE), which provides your products with:</p>
                    <li>High corrosion resistance</li>
                    <li>Heat resistance</li>
                    <li>Excellent non-stick properties</li>
                    <li>Good waterproofing</li>
                
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
            <hr/>
            <div className="servicetitle">
                <h2>客制化烤盘服务</h2>
                <p>客制化烤盘服务包括 :</p>
                    <li>接受各种尺寸的订做</li>
                    <li>各种形状，图案，皆可制作</li>
                    <li>材料也包括白钢，铝合金等等</li>
                <p>我们的烤盘也提供几项功能:</p>
                    <li>具有高耐蚀性</li>
                    <li>耐高温</li>
                    <li>优越的不粘性</li>
                    <li>良好的防水性</li>
                    <h2>Customize services</h2>
                <p>Customization services for baking trays include:</p>
                    <li>Accepting custom orders of various sizes</li>
                    <li>Making various shapes and patterns</li>
                    <li>Materials include stainless steel, aluminum alloy, and more</li>
                <p>Our baking trays also provide several features:</p>
                    <li>High corrosion resistance</li>
                    <li>Heat resistance</li>
                    <li>Excellent non-stick properties</li>
                    <li>Good waterproofing</li>
            </div>

            <div className="servicesrow">
                <div className="servicecus">
                    <img src={style} alt=""/>
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
            <hr/>
        </div>
    );
};

export default ServiceCustom;
