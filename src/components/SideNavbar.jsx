import React, { useState } from 'react'
import Menu from '../assets/icons/menu.png'
import Close from '../assets/icons/close.png'
import './SideNavbar.css'
import { Link } from 'react-router-dom'

const SideNavbar = () => {

  const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => {
    setSidebar(!sidebar)
    console.log(sidebar)
  };

  return (
    <div className= 'side-navbar-root'>
      <div className="side-navbar-container">
        <img src={Menu} alt="menu" className="side-navbar-menu" onClick={showSidebar} />

        <div className={sidebar ? "side-navbar-options-active" : "side-navbar-options"}>
          <img src={Close} alt="close" className="side-navbar-close" onClick={showSidebar} />
            <div className="side-navbar-text">
            <div className="side-navbar-user">Gokul A B</div>
            <Link to='/' className="side-navbar-title">Home</Link>
            <Link to='/products' className="side-navbar-title">Products</Link>
            <Link className="side-navbar-title">Orders</Link>
            <Link className="side-navbar-title">Account</Link>
            <Link to='/login' className="side-navbar-title">Logout</Link>
            </div>
        </div>
      </div>
    </div>
  )
}


export default SideNavbar
