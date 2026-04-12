import React from 'react'
import { Child } from './Child'

const Parent = () => {

    let fname = "Dinga"
    let birthdate = "1999-12-12"
    return (
        <>
            <div className='parent'>
                <h1> I am in a parent component</h1>
                <h3>{fname} DOB is {birthdate}</h3>
                <Child user={fname} dob={birthdate} />

            </div>
        </>
    )
}

export default Parent
