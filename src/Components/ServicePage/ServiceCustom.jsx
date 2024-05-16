import React from "react";
import "./ServiceCustom.css";
import coatingImage1 from "../../Assets/coating11.jpg";
import coatingImage2 from "../../Assets/coating.jpg";
import coatingImage3 from "../../Assets/coating1.jpg";
import serviceImage1 from "../../Assets/company1.jpg";
import serviceImage2 from "../../Assets/company2.jpg";
import serviceImage3 from "../../Assets/company3.jpg";
import custom1 from '../../Assets/company4.jpg'
import custom3 from '../../Assets/custom3.jpg'

const ServiceCustom = () => {
    return (
        <div className="servicescustom">
            <div className="servicetitle">
                <h2>Coating Service</h2>
                <p>我们的涂层服务，达到最高的卫生和效率标准，也非常耐用， 如果您的盘子有损坏需要维护或重新涂层，我们都能够为您
                    进行维护以及重新上色，以延长您的烤盘的性能与寿命。如果 有问题请立即向我们联系！</p>
                <p>Our coating service meets the highest standards of hygiene and efficiency and
                    is highly durable. If your trays are damaged and require maintenance or
                    recoating, we can provide maintenance and recoating services to extend the
                    performance and lifespan of your trays. Please contact us immediately if you
                    have any issues!</p>
            </div>

            <div className="servicesrow">
                <div className="servicecus">
                    <img src={coatingImage1} alt=""/>
                    <div className="captioncus">
                        <p>Coating service 1</p>
                    </div>
                </div>
                <div className="servicecus">
                    <img src={coatingImage2} alt=""/>
                    <div className="captioncus">
                        <p>Coating service 2</p>
                    </div>
                </div>
                <div className="servicecus">
                    <img src={coatingImage3} alt=""/>
                    <div className="captioncus">
                        <p>Coating service 3</p>
                    </div>
                </div>
            </div>

            <div className="servicetitle">
                <h2>Customize services</h2>
                <p>关于我们的定制烤盘服务，无论是不同的形状、尺寸还是图案， 我们都能够根据客户的需求来制作烤盘。如果您对烤盘有特定的需求
                    却苦于找不到合适的定制化烤盘，请务必联系我们。我们一定能提供 您所需要的定制烤盘。
                </p>
                <p>Regarding our customized bun tray services, we can produce trays 
                    based on customer requirements, whether it's different shapes, sizes, 
                    or patterns. If you have specific needs for bun trays and are struggling to 
                    find customized solutions, please don't hesitate to contact us.
                     We can definitely provide the customized trays you need.</p>
            </div>

            <div className="servicesrow">
                <div className="servicecus">
                    <img src={custom1} alt=""/>
                    <div className="captioncus">
                        <p>Coating service 1</p>
                    </div>
                </div>
                <div className="servicecus">
                    <img src={serviceImage2} alt=""/>
                    <div className="captioncus">
                        <p>Coating service 2</p>
                    </div>
                </div>
                <div className="servicecus">
                    <img src={custom3} alt=""/>
                    <div className="captioncus">
                        <p>Coating service 3</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCustom;
