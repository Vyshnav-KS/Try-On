import React from 'react'
import Verify from '../assets/icons/verified.png'
import './Order.css'
import { Link } from 'react-router-dom'

const Order = () => {
  return (
    <div className="order-root">
        <div className="order-title">ORDER PLACED</div>
        <div className="order-number">
            ORDER ID: <b>19ESNF34UW085984</b>
        </div>
        <img src={Verify} alt="verified" className='order-verified-icon'/>
        <div className="order-address">
            <div className="order-address-title">
                DELIVER TO:
            </div>
            <div className="order-address-details">
            H.N0 74 <br /> OLD PUNE ROAD <br /> RAZIBAD <br /> 683108
            </div>
        </div>

        <div className="order-exp-delivery">
        EXPECTED DATE OF DELIVERY : <b>23 OCT 2023</b>
        </div>

        <Link to='/' className="order-continue-shopping">
            CONTINUE SHOPPING
        </Link>
    </div>
  )
}

export default Order
