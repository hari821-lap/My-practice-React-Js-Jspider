import React from 'react'
import'./ATM.css'

const ATMBack = () => {
  return (
    <>
     <div className="atm-card back">
      <div className="black-strip"></div>

      <div className="signature-box">
        <p>Authorized Signature</p>
        <div className="white-strip">Hari M</div>
      </div>

      <div className="cvv-box">
        <p>CVV</p>
        {/* <p className="cvv">123</p> */}
      </div>

      <p className="instructions">
        This card is property of State Bank.  
        If found, please return to the nearest branch.
      </p>
    </div>
      
    </>
  )
}

export default ATMBack
