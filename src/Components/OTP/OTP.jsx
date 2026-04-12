
import React, { useState, useEffect } from 'react';
import './PhoneOTP.css';

const OTP = () => {
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState('enterPhone'); 
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [otpInput, setOtpInput] = useState('');
  const [message, setMessage] = useState('');
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    let t = null;
    if (cooldown > 0) t = setTimeout(() => setCooldown(cooldown - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  const validatePhone = (p) => /^\d{10}$/.test(p.trim()); 

  const generateOtp = () => String(Math.floor(100000 + Math.random() * 900000));

  
  const sendSms = async (toNumber, otp) => {
    console.log(`Demo: sending OTP ${otp} to +91${toNumber}`);
    return Promise.resolve({ ok: true });
  };

  const handleSendOtp = async () => {
    setMessage('');
    if (!validatePhone(phone)) {
      setMessage('Please enter a valid 10-digit phone number.');
      return;
    }
    const otp = generateOtp();
    setGeneratedOtp(otp);
    setStep('enterOTP');
    setCooldown(30); 
    try {
      const res = await sendSms(phone, otp);
      if (res.ok) setMessage(`OTP sent to +91 ${phone}. (Demo: check console for OTP)`);
      else setMessage('Failed to send OTP. Try again.');
    } catch (err) {
      console.error(err);
      setMessage('Error sending OTP. See console.');
    }
  };

  const handleVerify = () => {
    setMessage('');
    if (!otpInput) { setMessage('Please enter the OTP.'); return; }
    if (otpInput === generatedOtp) { setStep('verified'); setMessage('Phone verified successfully '); }
    else setMessage('Incorrect OTP — please try again.');
  };

  const handleResend = async () => {
    if (cooldown > 0) return;
    const otp = generateOtp();
    setGeneratedOtp(otp);
    setOtpInput('');
    setCooldown(30);
    setMessage('Resending OTP...');
    await sendSms(phone, otp);
    setMessage(`OTP resent to +91 ${phone}. check console for OTP`);
  };

  return (
    <div className="po-container">
      <div className="po-title">Phone + OTP (demo)</div>

      {step === 'enterPhone' && (
        <>
          <div className="po-row">
            <input
              className="po-input"
              placeholder="Enter 10-digit phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
              maxLength={10}
            />
            <button className="po-btn" onClick={handleSendOtp}>Send OTP</button>
          </div>
         
        </>
      )}

      {step === 'enterOTP' && (
        <>
          <div className="po-row">
            <input
              className="po-input"
              placeholder="Enter OTP"
              value={otpInput}
              onChange={(e) => setOtpInput(e.target.value.replace(/[^0-9]/g, ''))}
              maxLength={6}
            />
            <button className="po-btn" onClick={handleVerify}>Verify</button>
          </div>

          <div className="po-actions">
            <button className="po-btn" onClick={() => { setStep('enterPhone'); setGeneratedOtp(null); setOtpInput(''); setMessage(''); }}>
              Change Number
            </button>

            <button className="po-btn" disabled={cooldown > 0} onClick={handleResend}>
              {cooldown > 0 ? `Resend in ${cooldown}s` : 'Resend OTP'}
            </button>
          </div>

          
        </>
      )}

      {step === 'verified' && (
        <div>
          <div className="po-otp">+91 {phone} — Verified </div>
          <div className="po-info">Proceed with your app flow.</div>
        </div>
      )}

      {message && <div className="po-msg">{message}</div>}
    </div>
  );
}

export default OTP
