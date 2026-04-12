import React, { useState } from 'react'
import ATMFront from './ATMFront'
import ATMBack from './ATMBack'

const ATM = () => {
    let[bool,setBoll]=useState(true)
    
    let handleATM=()=>{
        setBoll(!bool)
    }
  return (
    <>
    
    <div className="toggle">
        <h1 className={bool ?"frontcls":"backcls"}>{bool ? "ATM FRONT":"ATM BACK"}</h1>
        <button className={bool ?"frontbtn " :"backbtn"} 
        onClick={handleATM}>{bool ?"Front":"Back"}</button>

        <div>
            {bool ? <ATMFront/>:<ATMBack/>}
        </div>
    </div>
      
    </>
  )
}

export default ATM
