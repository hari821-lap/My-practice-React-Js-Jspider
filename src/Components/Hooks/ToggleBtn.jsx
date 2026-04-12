import React, { useState } from 'react'

const ToggleBtn = () => {
    let [btn,setBtn]=useState(true)
    let han =()=>{
        setBtn(!btn)
    }
  return (
    <>
      <div className="toggle">
        <h1>Toggle Button {btn?"ON":"OFF"}</h1>
        <button onClick={han}
        className={btn ?"on":"off"}>
            {btn?'ON':'OFF'}</button>
      </div>
    </>
  )
}

export default ToggleBtn
