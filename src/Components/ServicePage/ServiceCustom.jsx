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
                <p>We using paint to coat the pan for keep the pan hold the temparatyre</p>
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
                <p>We using paint to coat the pan for keep the pan hold the temparatyre</p>
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
