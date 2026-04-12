import React from 'react';
import './menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-overlay">
        <div className="menu-container">

          <div className="menu-item">
            <img src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" alt="Burgers" />
            <h2>BURGERS</h2>
          </div>

          <div className="menu-item">
            <img src="https://cdn-icons-png.flaticon.com/512/1046/1046786.png" alt="Fries" />
            <h2>FRIES / STARTERS</h2>
          </div>

          <div className="menu-item">
            <img src="https://cdn-icons-png.flaticon.com/512/706/706914.png" alt="Main Course" />
            <h2>MAIN COURSE</h2>
          </div>

          <div className="menu-item">
            <img src="https://cdn-icons-png.flaticon.com/512/415/415733.png" alt="Drinks" />
            <h2>DRINKS</h2>
          </div>

          <div className="menu-item">
            <img src="https://cdn-icons-png.flaticon.com/512/2769/2769339.png" alt="Wraps" />
            <h2>WRAPS</h2>
          </div>

          <div className="menu-item">
            <img src="https://cdn-icons-png.flaticon.com/512/920/920356.png" alt="Desserts" />
            <h2>DESSERTS</h2>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Menu;
