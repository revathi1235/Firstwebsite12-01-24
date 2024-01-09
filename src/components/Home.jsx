
import  travel4 from '../images/travel4.jpg'
import './Content1.css'
import Carousel from 'react-bootstrap/Carousel';
function Content1(){
  return(
<Carousel data-bs-theme="light">

      <Carousel.Item>
        <img style={{height:"530px"}}
          className="d-block w-100"
          src="https://i.pinimg.com/originals/c1/5c/07/c15c0726cac25d7ab24075c7b3621f71.gif"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img style={{height:"530px"}}
          className="d-block w-100"
          src="https://cdn.pixabay.com/animation/2023/02/12/02/01/02-01-27-439_512.gif"
          
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"530px"}}
          className="d-block w-100"
          src="https://cdn.pixabay.com/animation/2022/10/10/02/39/02-39-55-927_512.gif"
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"530px"}}
          className="d-block w-100"
          src={travel4}
          alt="Fourth slide"
        />
        </Carousel.Item>
    </Carousel>
  );
}
export default Content1