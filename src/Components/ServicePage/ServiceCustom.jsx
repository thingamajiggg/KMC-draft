import React from 'react';
import './ServiceCustom.css';
import serviceImage1 from '../../Assets/company1.jpg';
import serviceImage2 from '../../Assets/company2.jpg';
import serviceImage3 from '../../Assets/company3.jpg';


const ServiceCustom = () => {
  return (
    <div className="service-custom container">
      <div className="service-item">
        <h3>Customize Service</h3>
        <div className="image-row">
          <img src={serviceImage1} alt="Customize Service 1" />
          <img src={serviceImage2} alt="Customize Service 2" />
          <img src={serviceImage3} alt="Customize Service 3" />
        </div>
        <p>We provide customized stainless steel products tailored to your needs.</p>
      </div>
      <div className="service-item">
        <h3>Coating and Maintenance Service</h3>
        <div className="image-row">
          <img src={serviceImage2} alt="Coating Service 1" />
          <img src={serviceImage1} alt="Coating Service 2" />
          <img src={serviceImage2} alt="Coating Service 3" />
        </div>
        <p>We offer paint coating and maintenance services to keep your stainless steel products looking new.</p>
      </div>
    </div>
  );
};

export default ServiceCustom;
