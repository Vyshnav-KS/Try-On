import React from "react";
import "./Address.css";
import { Link } from "react-router-dom";

const Address = () => {
  return (
    <div className="address-root">
      <div className="address-container">
        <div className="address-title">ADDRESS</div>
        <div className="address-full">
          <div className="address-sec">
            H.N0 74 <br /> OLD PUNE ROAD <br /> RAZIBAD <br /> 683108
          </div>
          <div className="address-selection">
            <input type="radio" className="address-radio" />
          </div>
        </div>
        <div className="address-full">
          <div className="address-sec">
            H.N0 76 <br /> MG ROAD <br /> VIJAYAVADA <br /> 655874
          </div>
          <div className="address-selection">
            <input type="radio" className="address-radio" />
          </div>
        </div>
      </div>

      <Link to='/payment' className="address-button">CONTINUE</Link>
    </div>
  );
};

export default Address;
