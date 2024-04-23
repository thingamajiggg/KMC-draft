import React from "react";
import "./ServiceCustom.css";
import serviceImage1 from "../../Assets/company1.jpg";
import serviceImage2 from "../../Assets/company2.jpg";
import serviceImage3 from "../../Assets/company3.jpg";
import serviceImage4 from "../../Assets/steamer.png";
import serviceImage5 from "../../Assets/steamer2.png";
import serviceImage6 from "../../Assets/tray1.png";

// const ServiceCustom = () => {
//   return (
//     <div className="service-custom container">
//       <div className="service-item">
//         <h3>Customize Service</h3>
//         <div className="image-row">
//           <img src={serviceImage1} alt="Customize Service 1" />
//           <img src={serviceImage2} alt="Customize Service 2" />
//           <img src={serviceImage3} alt="Customize Service 3" />
//         </div>
//         <p>We have several type of the </p>
//       </div>
//       <div className="service-item">
//         <h3>Coating and Maintenance Service</h3>
//         <div className="image-row">
//           <img src={serviceImage2} alt="Coating Service 1" />
//           <img src={serviceImage1} alt="Coating Service 2" />
//           <img src={serviceImage2} alt="Coating Service 3" />
//         </div>
//         <p>We offer paint coating and maintenance services to keep your stainless steel products looking new.</p>
//       </div>
//       <div className="service-item">
//         <h3>Steamer wit htrolley </h3>
//         <div className="image-row">
//           <img src={serviceImage2} alt="Coating Service 1" />
//           <img src={serviceImage1} alt="Coating Service 2" />
//           <img src={serviceImage2} alt="Coating Service 3" />
//         </div>
//         <p>We offer paint coating and maintenance services to keep your stainless steel products looking new.</p>
//       </div>
//     </div>
//   );
// };

// export default ServiceCustom;

const ServiceCustom = () => {
  return (
    <div className="servicescustom">
      <h2>test</h2>

      <div className="servicesrow">
        <div className="service">
          <img src={serviceImage1} alt="" />
          <div className="caption">
            <p>Coating service 1</p>
          </div>
        </div>
        <div className="service">
          <img src={serviceImage2} alt="" />
          <div className="caption">
            <p>Coating service 2</p>
          </div>
        </div>
        <div className="service">
          <img src={serviceImage3} alt="" />
          <div className="caption">
            <p>Coating service 3</p>
          </div>
        </div>
      </div>
      
      <h2>test</h2>

      <div className="servicesrow">
        <div className="service">
          <img src={serviceImage1} alt="" />
          <div className="caption">
            <p>Coating service 1</p>
          </div>
        </div>
        <div className="service">
          <img src={serviceImage2} alt="" />
          <div className="caption">
            <p>Coating service 2</p>
          </div>
        </div>
        <div className="service">
          <img src={serviceImage3} alt="" />
          <div className="caption">
            <p>Coating service 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCustom;
