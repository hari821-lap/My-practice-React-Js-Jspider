import React from 'react'
import { employee } from './EmpData'
import Developer from './Developer'
import './Emp.css'
import Manager from './Manager'

export const Employee = () => {
  // console.log(employee)

  let developer = employee.filter(elem => elem.desg == "Developer")
  // console.log(developer)

  let manager = employee.filter(elem => elem.desg == "Manager")
  // console.log(manager)
  return (
    <>

      <Developer developer={developer} />
      <Manager manager={manager} />
    </>

  )
}
