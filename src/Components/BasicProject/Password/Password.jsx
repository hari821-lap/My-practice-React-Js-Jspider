import React, { useState } from 'react'

const Password = () => {
    let[pswd,setPswd]=useState('')
    let[err,setErr]=useState('')
    let handlePassword=(e)=>{
        setPswd(e.target.value)
        console.log(pswd.length)
        switch(true)
        {
            case pswd.length<=3 : setErr (<h3 style={{color:'red'}}>weak</h3>)
        }

    }
  return (
    <>
      <div className="password">
        <h1>password</h1>
        <input type='password' placeholder='Enter the password' onChange={handlePassword}/ >
      </div>
    </>
  )
}

export default Password
