import React, { useState } from 'react'
import{data} from'./data.jsx'
import ToggleQueAns from'./ToggleQueAns.jsx'

const AnsQues = () => {
    let[mcqData,setMcqData]=useState(data)

  return (
    <div>
      <div className="quesAns">
        <h1>MCQ's Question</h1>
        <div className="container">
            {
                mcqData.map((elem)=>{
                    let{id,question,answer}=elem
                    // console.log(id,question,answer)
                    return(
                        <>
                        <ToggleQueAns id={id} question={question} answer={answer}/>
                        </>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default AnsQues
