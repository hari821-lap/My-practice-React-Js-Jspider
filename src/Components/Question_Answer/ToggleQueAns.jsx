import React, { useState } from 'react'

const ToggleQueAns = (props) => {
    let{id,question,answer}=props
    // console.log(props)
      let[bool,setBool] =useState(true)
      let handleBool=()=>{
        setBool(!bool)
      }
  return (
    <div className='card'>
        <div className="que">
            <button onClick={handleBool}>{id},{question}</button>
        </div>
        <h4  className="ans">
            {bool?"":answer}
        </h4>
      
    </div>
  )
}

export default ToggleQueAns
