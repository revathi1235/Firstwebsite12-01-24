import React from 'react'
import Container from 'react-bootstrap/Container';
import hotel1 from '../images/hotel1.jpg'
import hotel2 from '../images/hotel2.jpg'
import hotel3 from '../images/hotel3.jpg'
import hotel4 from '../images/hotel4.jpg'
import hotel5 from '../images/hotel5.jpg'
import {Link} from 'react-router-dom'
// import Card from 'react-bootstrap/Card'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import calader from '../images/calader.jpg'
function ThailandClick() {
  return (
    <div >
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      
        <Navbar.Brand style={{fontFamily:"cursive",color:"red"}} href="#"><svg xmlns="http://www.w3.org/2000/svg" width="56" height="36" fill="orange" class="bi bi-amd" viewBox="0 0 16 16">
  <path d="m.334 0 4.358 4.359h7.15v7.15l4.358 4.358V0H.334ZM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2V9.72Z"/>
</svg>TripAdvisoR</Navbar.Brand>
<Form  style={{marginRight:"300px"}}    className="d-flex">
            <Form.Control style={{border:"2px solid black"}}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success"  style={{border:"2px solid black"}}>Search</Button>
          </Form>
          <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="link-0">Discover</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Trip</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Review</Nav.Link>
        </Nav.Item>
      </Nav>
      </Container>
      
    </Navbar>
    <Nav style={{border:'1px solid black'}}
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link style={{marginLeft:"20px"}} href="/home">Thailand</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Hotels</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Things to do</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Restaurants</Nav.Link>
      </Nav.Item><Nav.Item>
        <Nav.Link eventKey="link-1">Flights</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Holiday Homes</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
    </Nav>
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">India</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Thailand</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Hotels</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Resorts</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4">Experience</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-5">Other Services</Nav.Link>
      </Nav.Item>
    </Nav>
    <div  style={{position:"relative",display:"flex",height:"100%",width:'100%'}}>
      <div   style={{position:"absolute",height:"100%",width:'10%'}}> 
      <img src={calader} alt=""  style={{height:"450px",width:"300px",margin:'10px',marginTop:"480px"}}/> </div>
      <div   style={{position:"absolute",height:"100%",width:'10%'}}>
      <img src={hotel4} alt=""  style={{height:"450px",width:"300px",margin:'10px',marginTop:"950px"}}/> </div>
      <div   style={{position:"absolute",height:"100%",width:'10%'}}>
      <img src={hotel2} alt=""  style={{height:"450px",width:"300px",margin:'10px'}}/> </div>
        <div style={{position:"absolute",height:"100%",width:'90%',textAlign:"center",marginLeft:"100px"}}>
        <h1  style={{color:"black",fontFamily:"cursive",fontSize:"3rem",marginTop:"20px",marginLeft:"100px"}}>THAILAND HOTELS AND RESORTS</h1>
      
          <div style={{height:"300px",position:"relative",display:"flex",border:'1px solid black',width:"1000px",marginLeft:"240px",marginTop:"50px"}}>
          <div style={{position:"absolute",height:"300px",width:"500px"}}><img src={hotel1} alt="" style={{height:"300px",width:"300px",marginRight:"850px"}}/></div>
         <h1 style={{height:"300px",width:"500px",position:"absolute",marginLeft:"300px",color:"navy"}}>Moraldo Palace Bangkok</h1>
         <p style={{marginTop:"100px",marginLeft:"310px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A delectus placeat laboriosam maiores <br /> numquam, similique ipsam corrupti quibusdam aut beatae? Soluta rerum perferendis, veniam <br />corrupti adipisci voluptates exercitationem temporibus labore!</p> 
          {/* </div> */}
         <div style={{position:"absolute",height:"300px",width:"500px",marginLeft:"180px",marginTop:"200px"}}>
         <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> 
         </div>
        </div>
     </div>

     <div style={{height:"300px",position:"relative",display:"flex",border:'1px solid black',width:"1000px",marginLeft:"340px",marginTop:"550px"}}>
      
          <div style={{position:"absolute",height:"300px",width:"500px"}}><img src={hotel5} alt="" style={{height:"300px",width:"300px",marginRight:"850px"}}/></div>
         <h1 style={{height:"300px",width:"500px",position:"absolute",marginLeft:"400px",color:"navy"}}>Coastel Sunrise</h1>
         <p style={{marginTop:"100px",marginLeft:"310px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A delectus placeat laboriosam maiores <br /> numquam, similique ipsam corrupti quibusdam aut beatae? Soluta rerum perferendis, veniam <br />corrupti adipisci voluptates exercitationem temporibus labore!</p> 
         
         <div style={{position:"absolute",height:"300px",width:"500px",marginLeft:"320px",marginTop:"200px"}}>
         <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>

         </div>
        </div>
     </div>

     <div style={{height:"300px",position:"relative", textAlign:'center',display:"flex",border:'1px solid black',width:"1000px",marginLeft:"340px",marginTop:"150px"}}>
          <div style={{position:"absolute",height:"300px",width:"500px"}}><img src={hotel3} alt="" style={{height:"300px",width:"300px",marginRight:"850px"}}/></div>
         <h1 style={{height:"300px",width:"500px",position:"absolute",marginLeft:"400px",color:"navy"}}>Starry Sky</h1>
         <p style={{marginTop:"100px",marginLeft:"310px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A delectus placeat laboriosam maiores <br /> numquam, similique ipsam corrupti quibusdam aut beatae? Soluta rerum perferendis, veniam <br />corrupti adipisci voluptates exercitationem temporibus labore!</p> 
         
         <div style={{position:"absolute",height:"300px",width:"500px",marginLeft:"180px",marginTop:"200px"}}>
         <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>

         </div>
        </div>
        <button style={{marginTop:"130px"}}><Link to='/'>back</Link></button>
</div>
 
    
  )
}

export default ThailandClick