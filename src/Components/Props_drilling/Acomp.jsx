import React from 'react'
import Bcomp from './Bcomp'

const Acomp = () => {
  let num=100
  return (
    <>
      <h1>I am in A comp</h1>
      <h3>{num}</h3>
      <Bcomp num={num}/>
    </>
  )
}

export default Acomp
