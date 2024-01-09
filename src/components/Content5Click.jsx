import React from 'react'
import './Content5Click.css'
import Nav from 'react-bootstrap/Nav';
import img1 from '../images/img1.jpg'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Content5Click() {
  return (
    <div className='click'>
   
        <div>
    <nav>
        <h3 className='best'>Best in Travel is here ! <i className='i'><a >Discover 2023's destination</a></i> </h3></nav>
     </div>
    <div>
   
<Nav className="justify-content-end" activeKey="/home">
    <h3 className='tour'>Tour and Travel <svg xmlns="http://www.w3.org/2000/svg" width="56" height="46" fill="blue" class="bi bi-brightness-alt-high" viewBox="0 0 16 16">
  <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5m-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4m0 1a3 3 0 0 1 2.959 2.5H5.04A3 3 0 0 1 8 8"/>
</svg> India</h3>

        <Nav.Item>
          <Nav.Link  className='nav' style={{color:"black"}}h="/home">Designation</Nav.Link>
        </Nav.Item>
        <Nav.Item className='nav'>
          <Nav.Link  style={{color:"black"}} h="/home">Planning</Nav.Link>
        </Nav.Item>
        <Nav.Item className='nav'>
          <Nav.Link style={{color:"black"}} e="link-1">Stories</Nav.Link>
        </Nav.Item>
        <Nav.Item className='nav'>
          <Nav.Link style={{color:"black"}} e="link-2">Shop</Nav.Link>
        </Nav.Item>
       </Nav>
    </div>
    <div className='img'>
       <img src={img1} alt="" /> 
       <p style={{textAlign:"center",fontSize:"20px",padding:"20px",color:"white"}}>Whether you are looking for the best festivals , to hit the beach , or trek between hill stations . This guide to the best time to visit India can help you plan your trip @ terrantraits /Getty Images</p>
        
    </div>
    <div className='bus'>
    {/* <h1>share</h1> */}
   
    <Button variant="" size="lg" active>
    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
      </Button> 
      <Button variant="" size="lg" active>
      <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15"/>
</svg>
       </Button>
      {/* <Button variant="" size="lg" active>
      <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
</svg>
      </Button>
      <Button variant="" size="lg" active>
      <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
</svg>
      </Button>  */}
    </div>
    <div>
        <p style={{ padding:"20px", fontSize:"20px",textAlign:"center",color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dignissimos reprehenderit facere voluptatem impedit saepe quam, officiis dolore! Accusantium temporibus nesciunt nisi eum a ipsa sint perferendis, et saepe. Ea! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, consequuntur. Hic nisi animi aut commodi ipsa, vel inventore soluta consectetur facere numquam deleniti sunt asperiores. Sint voluptatem itaque ipsa quod.</p>
    </div>
    <div className='fo'>
   <Link to='/'><p style={{backgroundColor:"grey",height:"80px",textAlign:"center",padding:"30px",color:"white"}}>Privact and Policy . Cookie Settings . Do Not Sell Or Share My Personal Information</p></Link>
           
    </div>
    </div>
  )

  }
export default Content5Click;