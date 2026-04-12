import React, { useRef } from 'react'
import './coloreffect.css'

const ColorEffect = () => {

    //let h2elem=useRef()
    let[colorVal,setColorVal]=useState('')
    let handleColor=()=>{
        // setColorVal
    }
    return (
        <>
            <div className="coloreffect">
                <h1>Color Effect</h1>

                <div className="container">
                    <h2>Welcome</h2>

                    <input type='color' onClick={handleColor} />
                </div>
            </div>
        </>
    )
}

export default ColorEffect
