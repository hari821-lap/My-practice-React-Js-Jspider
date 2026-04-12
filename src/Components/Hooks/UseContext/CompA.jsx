import React, { createContext } from 'react'
import CompB from './CompB'

export const FnameContext =createContext()
export const LnameContext=createContext()

const CompA = () => {
    let fname="Dinga"
    let lname="raja"
  return (
    <>
      <h3> I am in A Component D</h3>
      <FnameContext value={fname}>
        <LnameContext value={lname}> <CompB/></LnameContext>
        </FnameContext>
       
     
      
      
    </>
  )
}

export default CompA
