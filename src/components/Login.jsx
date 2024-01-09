import React from 'react'
import './Login.css'
import  { useState,useEffect } from 'react';

function Login() {
  const [showPopup, setShowPopup] = useState(false);

  
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 2000);
        return () => clearTimeout(timer);
    }
  }, [showPopup]);
  const handleButtonClick = () => {
    setShowPopup(true);
  };  
  return (
    <div className='mains'>
         <div className='login'>
        <div className='log'>
        <h1 className='l'><u>LOGIN</u></h1>
        <br />
        {/* <h2 className='e'>Email</h2> */}
        <input type="email" placeholder='enter email' />
        {/* <h2 className='p'>Password</h2> */} <br />
        <br />
        <input type="password" placeholder='enter password' />
        <br />
        <br />
        <br />
        <div className='divbutt'>
        <button className='buttonlog' onClick={handleButtonClick}>Login</button>
        {showPopup && <div className="popup">Successfully Logined</div>}
        </div>
        </div>

    </div>
    </div>
  )
}

export default Login