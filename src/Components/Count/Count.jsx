import React, { useState } from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import "../../../node_modules/bootstrap/dist/js/bootstrap.js"

const Count = () => {
    let [count,setCount]=useState(0)

    let Increment=()=>{
        setCount(count+1)
    }

    let Decrement=()=>{
          count > 0 ? setCount(count-1):alert("-ve number is valid")
    }


  return (
    <>
    {/* React card */}
     <BasicExample></BasicExample>
    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

    <div className="bg-info align-content-center text-center "  style={{height:"90vh"}}>
        <h1>{count}</h1>
    <button className='btn btn-success me-3' onClick={Increment}>Increment</button>
    <button className='btn btn-danger' onClick={Decrement}>Decrement</button>
    </div>
    </>
  )
}

export default Count


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="" src="../../vite.svg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}


