import React, { useState } from 'react'
import SingleCard from './SingleCard'


const ToggleCard = () => {
  let [bool,setBool]=useState(true)
  let handleCard=()=>{
    setBool(!bool)
  }
  return (
    <>
    <div  className="toggle">
      <h1>Toggle Card</h1>
      <button onClick={handleCard}>
        {bool?"Display Card":"Hide Card"}
      </button>

      <div>
        {bool?'':<SingleCard/>}
      </div>
    </div>
      
    </>
  )
}

export default ToggleCard
