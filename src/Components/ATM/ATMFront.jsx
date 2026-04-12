import React from 'react'



const ATMFront = () => {
  return (
    <>
       <div className="atm-card front">
      <div className="chip"></div>
      <h2 className="bank-name">State Bank</h2>

      <div className="card-number">1234 5678 9012 3456</div>

      <div className="bottom-info">
        <div className="valid">
          <p>VALID THRU</p>
          <p>12/28</p>
        </div>
        <div className="holder-name">HARI M</div>
      </div>
    </div>
    </>
  )
}

export default ATMFront
