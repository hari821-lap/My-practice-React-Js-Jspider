import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'

const MainApp = () => {
  return (
    <>
    
   <div className="mainapp">
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route element={<Home/> }  path='/Home'></Route>
        <Route element={<About/> } path='/about'></Route>
        <Route element={<Contact/> } path='/contact'></Route>

    </Routes>
    </BrowserRouter>


   </div>
   
    </>
  )
}

export default MainApp
