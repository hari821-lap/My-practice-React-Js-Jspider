import React, { useContext } from 'react'
import { FnameContext, LnameContext } from './CompA'

const fnm=useContext(FnameContext)
const lnm=useContext(LnameContext)

const CompD = () => {
  return (
    <>

      <h3> I am in A Component D</h3>
      <h1>{fnm}{lnm}</h1>
    </>
  )
}

export default CompD
