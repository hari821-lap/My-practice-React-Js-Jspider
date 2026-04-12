import React, { useState } from 'react'
import './Incdec.css'

const Incdec = () => {
  let [count, setCount] = useState(0)

  let Increment = () => {
    setCount(count + 1)
  }
  let Decrement = () => {
    (count > 0) ? setCount(count - 1) : alert('-ve number is Invalid')
  }

  let [msz,setMsz]=useState('JavaScript')
  return (
    <><div className='hooks'>
      <h1>Increment & decrement</h1>
    

      <div className="incdec">
        <h2>{count}</h2>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
      </div>

      <div className="changeContent">
        <h2>I love {msz}</h2>
        <button onClick={()=>{setMsz('React Js')}}>Click here</button>
      </div>
      </div>
    </>

  )
}

export default Incdec
