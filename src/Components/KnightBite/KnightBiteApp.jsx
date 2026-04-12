import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Menu from './Menu'
import About from './About'
import Franchise from './Franchise'

const KnightBiteApp = () => {
  return (
    <>
      <div className="map">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<Home />} path='/'></Route>
            <Route element={<Home />} path='/Home'></Route>
            <Route element={<About />} path='/about1'></Route>
            <Route element={<Menu />} path='/menu1'></Route>
            <Route element={<Franchise />} path='/franchise1'></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default KnightBiteApp
