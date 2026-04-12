import React, { useState } from 'react'
import './Controlled.css'

const ControlledForms = () => {
    let [fname, setFname] = useState('')
    let [newfname ,setNewFname]=useState('')
    let handleFname = (e) => {
        setFname(e.target.value)
    }



     let [lname,setLname]=useState('')
     let [newLname,setNewLname]=useState('')
    let handlelname =(e)=>{
        setLname(e.target.value)
    }

    let handleSubmit =(e)=>{
        e.preventDefault()
        setNewFname(fname)
        setNewLname(lname)

        setFname('')
        setLname('')
    }
    return (
        <>
            <div className="reactforms">
                <h1>React Forms</h1>
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder='Enter First Name '
                            onChange={handleFname}
                            value={fname}
                        />

                        <input 
                        type="text" 
                        placeholder='Enter Last Name '
                        onChange={handlelname}
                        value={lname}
                        />

                        <button>Print Name</button>
                    </form>
                </div>
                <div className="class">
                    {/* <h2>{fname}</h2> */}
                    {/* <h2>{newfname}</h2> */}
                    <h2>{newfname} {newLname}</h2>
                </div>
            </div>

        </>
    )
}

export default ControlledForms
