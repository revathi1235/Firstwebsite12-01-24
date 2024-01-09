import React from 'react'
import './Signup.css'
import  { useState,useEffect } from 'react';
function Signup() {
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
    <div className='Signups'>
    <div className='Signup'>
    <div className='sign'>
    <h1 className='s'>SIGNUP</h1>
    <h2 className='em'></h2>
    <input type="email" placeholder='enter email'/><br/>
    <br/>
    <h2 className='em'> </h2>
    <input type="email" placeholder='enter email for confirmation' /><br/>
    <br/>
    <h2 className='p'></h2>
    <input type="password" placeholder='enter password'/><br/>
    <br />
    <br />
    <br />
    <button onClick={handleButtonClick}>signup</button>
    {showPopup && <div className="popup">Successfully Signed up</div>}
    </div>

</div>
</div>
  )
}

export default Signup