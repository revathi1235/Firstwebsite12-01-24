import Card from 'react-bootstrap/Card';
import {Link, Outlet,Route,Routes} from 'react-router-dom'
import Content5Click from './Content5Click';
function Content5() {
  return (
   
    <>
    <div style={{marginTop:"50px"}}>
        <h1 style={{color:"black",textAlign:"center",fontFamily:"cursive",fontSize:"3rem"}}>Most Suitable Season For Exploring</h1>
    </div>
    <div style={{display:"flex",marginleft:"100px"}}>
      <Card style={{ width:"1290px",marginTop:"30px",marginRight:"50px"}}>
      <Card.Body  >
        <Card.Img style={{width:"1160px",height:"400px"}}  variant="top" src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Cool-Nature-Background-Images-4523x2590.jpg" />
          <Card.Text><b>
           We will find you to get which season is most suitable for Exploring.Its our speciality which help the travelers to find which season is <br /> better fr exploring.Just click the there and choose the best. </b><b style={{marginLeft:"600px"}} ><Link to={'/content5click'}>Click here</Link></b>
          </Card.Text>
        </Card.Body>
      </Card>
   <Outlet/>
      </div> 
      <Routes>
  <Route path="/content5click" element={<Content5Click />} />  
</Routes>
    
    </>
  
  );
}

export default Content5;