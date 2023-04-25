import React from "react";
import './Payment.css'
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div className="payment-root">
      <div className="payment-container">
        <div className="payment-title">PAYMENT OPTIONS</div>
        <div className="payment-full">
          <div className="payment-sec">
            UPI
          </div>
          <div className="payment-selection">
            <input type="radio" className="payment-radio" />
          </div>
        </div>
        <div className="payment-full">
          <div className="payment-sec">
            CASH ON DELIVERY
          </div>
          <div className="payment-selection">
            <input type="radio" className="payment-radio" />
          </div>
        </div>
      </div>
      <Link to='/order' className="payment-button">CONTINUE</Link>
    </div>
  );
};

export default Payment;
