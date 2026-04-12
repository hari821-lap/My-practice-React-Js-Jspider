import React, { useState } from 'react'

const TogglePara = () => {
    let[bool,setBool]=useState(true)
    let handle=()=>{
        setBool(!bool)
    }
  return (
    <>
    <div className="toggle">
        <h1>Toggle Para</h1>
        <button onClick={handle}>{bool?"Show Para":"Hide para"}</button>
        <div>{bool?<></>:
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Veniam soluta, modi quis fugit aperiam saepe voluptate nobis minus
              officiis incidunt quam reprehenderit at necessitatibus sed, et pariatur tenetur
               minima. Ipsa obcaecati modi inventore recusandae vitae explicabo quod nam et, quis, ut odit atque optio molestiae officiis similique, minus eum facilis praesentium numquam amet aliquam. Nam aliquid, perferendis excepturi vitae veniam, maxime accusamus labore impedit blanditiis, fuga debitis recusandae officiis eius aspernatur quasi nihil temporibus! Eius, et vel. Deleniti atque asperiores sunt consectetur iure molestias voluptates, similique sed vero corporis facere repudiandae velit incidunt delectus. Odit amet aliquam asperiores maxime itaque?</p>}</div>
    </div>
      
    </>
  )
}

export default TogglePara
