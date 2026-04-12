import { useState } from "react"


const ToggleContent = () => {
    let [bool,setBool]=useState(true)
    let handleBool=()=>{
        setBool(!bool)
    }
  return (
    <>
    <div className="toggle">
        <h2>Toggle Content</h2>
        <button onClick={handleBool}>Click Here</button>
        <h1>{bool ? 'Hello' :'Bye'}</h1>


        <h1>{bool ?
        <div style={{color:'red'}}>Red</div>:
        <div style={{color:'blue'}}>Blue</div>}</h1>
    </div>
      
    </>
  )
}

export default ToggleContent
