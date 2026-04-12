import React, { useRef } from 'react'

const Example1 = () => {
    let elem=useRef()
    let listItem = useRef()

    let handleClick=()=>{
       let data= elem.current.innerText;
       (data==='JavaScript') ? elem.current.innerText='React Js':
       elem.current.innerText='JavaScript'
    }

    let handleList=()=>{
        
        listItem.current.innerHTML=`
        <ul> 
        <li>HTML</li>
        <li>Css</li>
        <li>Js</li>
        <li>React Js</li>
        </ul>`
    }
  return (
    <>
     <div className="hooks">
        <h2 ref={elem}>JavaScript</h2>
        <button onClick={handleClick}>Click here</button>
        <hr/>
        <ul ref={listItem}>
            <li>Item 1</li>
             <li>Item 2</li>
              <li>Item 3</li>
               <li>Item 4</li>
        </ul>
        <button onClick={handleList}>click here</button>
        </div> 
    </>
  )
}

export default Example1
