import React, { useState } from 'react'

const HideShowPassword = () => {
    let [bool,setBool]=useState(true)
    let handleBool=()=>{
        setBool(!bool)
    }
  return (
    <>
    <div className="hideshow">
        <h1>HIDE_SHOW Password</h1>
        <br />
        <input type={bool ?'password':'type'} placeholder='Enter Password'/>
        <span onClick={handleBool} style={{cursor:'pointer'}}>{bool?'show':'hide'}</span>


        
    </div>
      
    </>
  )
}

export default HideShowPassword
