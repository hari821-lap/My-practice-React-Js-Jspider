import React, { useState } from 'react'

const Range = () => {
    let[count,setCount]=useState(0)
    let handleRange=(e)=>{
        setCount(e.target.value)
    }
  return (
    <>
      <div className="range">
        <h1>Get Value</h1>
        <input type="range" onChange={handleRange}value={count} />
        <h2>{count}</h2>
      </div>
    </>
  )
}

export default Range
