// import React, { useState } from 'react'

// const PhoneOTP = () => {
//   let [otp, setOpt] = useState(null)
//   let [bool,setBool]=useState(true)


//   let generateOTP = () => {
//     let gOTP = Math.floor(Math.random() * 9000 + 1000)
//     setOpt(gOTP)
//     setBool(!bool)
//   }

//   let handlevalue=(e)=>{
//     let newotp =e.target.value


//   }
//   return (
//     <>
//       <div className="otp" style={{ display: "flex", justifyContent: "center", textAlign: "center" }} >
//         <>{bool ?<>
//         <div className="container" >
//           <h1 style={{ color: "red", display: "" }}>OTP Validation With Timer</h1>
//           <button onClick={generateOTP} style={{ color: "green", alignItems: "center" }}>Generate OTP</button>
// </div>
//         </>:<>
//         <div className="number">
//           <input type='number' placeholder='Enter OTP'   onClick={handlevalue} />
//           <h2>{otp}</h2>

//         </div>
//         </>}</>
        
          
//       </div>

//     </>
//   )
// }

// export default PhoneOTP
import React, { useState, useEffect } from "react";

const PhoneOTP = () => {
  const [otp, setOtp] = useState(null);       // stores generated OTP
  const [userOtp, setUserOtp] = useState(""); // user input
  const [bool, setBool] = useState(true);     // true → show Generate, false → show Verify
  const [msg, setMsg] = useState("");
  const [time, setTime] = useState(0);

  const generateOTP = () => {
    const gOTP = Math.floor(Math.random() * 9000 + 1000);
    setOtp(gOTP);
    setBool(!bool);
    setMsg("");
    setTime(10);

    // after 10 sec, allow new generation
    setTimeout(() => {
      setBool(true);
      setOtp(null);
      setTime(0);
    }, 10000);
  };

  // timer countdown
  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => setTime((t) => t - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [time]);

  const verifyOTP = () => {
    if (parseInt(userOtp) === otp) {
      setMsg(" Login Successful!");
      setBool(true);
      setOtp(null);
    } else {
      setMsg(" Invalid OTP");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2 style={{ color: "red" }}>OTP Validation With Timer</h2>

      {bool ? (
        <>
          <button onClick={generateOTP} style={{ padding: "8px 15px", background: "green", color: "white" }}>
            Generate OTP
          </button>
        </>
      ) : (
        <>
          <p>OTP generated! Time left: {time}s</p>
          <input
            type="number"
            placeholder="Enter OTP"
            value={userOtp}
            onChange={(e) => setUserOtp(e.target.value)}
            style={{ padding: "8px", borderRadius: "5px" }}
          />
          <button
            onClick={verifyOTP}
            style={{ marginLeft: "10px", padding: "8px 15px", background: "blue", color: "white" }}
          >
            Verify
          </button>
          <p style={{ color: "gray" }}>Your OTP (for demo): {otp}</p>
        </>
      )}

      {msg && <h3>{msg}</h3>}
    </div>
  );
};

export default PhoneOTP;
