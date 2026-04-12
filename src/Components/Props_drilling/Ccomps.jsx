import React from 'react'
import Dcomp from './Dcomp'

 const Ccomps = (prop2) => {
    let sum=prop2.sum
    let b=100
    let mul=sum*b
  return (
     <>
        <h1>I am in C comp</h1>
        <h3>sum{sum}*100={mul}</h3>
        <Dcomp mul={mul}/>
        </>
  )
}

export default Ccomps
