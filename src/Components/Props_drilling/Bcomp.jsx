import React from 'react'
import Ccomps from './Ccomps'

const Bcomp = (props1) => {
    let a=props1.num
    let b=100
    let sum=a+b
  return (
    <>
    <h1>I am in B comp</h1>
    <h3>{a}+{b}={sum}</h3>

    <Ccomps sum={sum}/>
    </>
  )
}

export default Bcomp
