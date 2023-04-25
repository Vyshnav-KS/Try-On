import React from 'react'
import Cart from '../assets/icons/cart.png'
import Search from '../assets/icons/search.png'
import './Header.css'
import SideNavbar from './SideNavbar'

const Header = () => {
  return (
    <div className="header-root">
        <div className="header-menu">
            <SideNavbar />
        </div>
        <div className="header-right">
            <img src={Search} alt="search" className='header-search' />
            <img src={Cart} alt="cart" className='header-cart' />
        </div>
    </div>
  )
}

export default Header
