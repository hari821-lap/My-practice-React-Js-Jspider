import React from 'react'

export const Child = (props) => {
    let { user, dob } = props

    let age = new Date().getFullYear() -dob.slice(0,4)
    return (
        <>
            <div>Child Component</div>
            <h5>{user} DOB is {dob}</h5>
            <h3>{user} age is {age}</h3>
        </>
    )
}
