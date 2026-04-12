// src/Components/BootStrap/Land.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CardContext'; // <- adjust path if needed
import NavbarMain from './NavbarMain';
import Home from './Home';
import Menu from './Menu';
import RestaurantPage from './RestaurantPage';
import CartPage from './CartPage';

const Land = () => {
  return (
    <div className="map">
      <BrowserRouter>
        <CartProvider>
          <NavbarMain />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />             {/* fixed 'path' */}
            <Route path="/restaurant/:id" element={<RestaurantPage />} />
            <Route path='/cart' element={<CartPage/>}></Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
};

export default Land;
