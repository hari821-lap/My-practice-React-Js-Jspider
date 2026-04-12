import React, { useEffect } from 'react'
import'./Navbar.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import About from './About'

const Navbar = () => {
 
     return (
    <div className="navbar">
      <div className="nav-left">
        <img src="https://lh3.googleusercontent.com/yCSwTd7HoAl4ES2y-NgbVwzJNbcqUnEn-fDXCE102wF6bUz5Xj6EyPNUBZf2-MMCesgvUCKF7RFn0pgV9mfa-KJcsi4=s750" alt="Knight Bite Logo" className="logo" />
      </div>

      <div className="nav-right">
        <ul>
          <li><NavLink to="/home" activeclassname="active">Home</NavLink></li>
          <li><NavLink to="/about1" activeclassname="active">About</NavLink></li>
          <li><NavLink to="/menu1" activeclassname="active">Menu</NavLink></li>
          <li><NavLink to="/franchise1" activeclassname="active">Franchise</NavLink></li>
        </ul>
      </div>
    </div>
  );
  
}

export default Navbar
