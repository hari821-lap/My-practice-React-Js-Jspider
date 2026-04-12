import React, { useEffect, useState } from 'react'

const UseEffect_Example = () => {

  let [count, setCount] = useState(0)
  let [msz, setMsz] = useState("Dowload")

  useEffect(() => {
    alert("I am a side Effect")
  }, [count])

  return (
    <>
      <div className="hooks">
        <h1>Increment & Decrement</h1>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>

        <h1>Change the Content</h1>
        <h2>{msz}</h2>
        <button onClick={() => setMsz("Downloading.....!")}>Change </button>

      </div>

    </>
  )
}

export default UseEffect_Example
