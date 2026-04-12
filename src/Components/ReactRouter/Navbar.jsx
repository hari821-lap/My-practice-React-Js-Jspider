import React from 'react'
import './Styles/navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">MY-APP </div>
        <div className="links">
          <ul>
            <li><NavLink to='/Home'>HOME</NavLink></li>
            <li><NavLink to='/about'>ABOUT</NavLink></li>
            <li><NavLink to='/contact'>CONTACT</NavLink></li>
          </ul>

        </div>
      </div>

    </>
  )
}

export default Navbar
