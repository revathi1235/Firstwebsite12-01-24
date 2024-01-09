
import React from 'react';
import './About.css';
import {Link} from 'react-router-dom'
const About = () => {
  return (
    <div>
    
    <div class="about-section">
  <h1 className='head' style={{wordSpacing:"10px"}}>About   Our   TRAVELWORLD   Company</h1>
  <p></p> <br />
  <p className='p'>Welcome to going to be a part of our family, where togetherness meets happiness. <br /> We are dedicated to providing top exploring places in this world , with a <br />passion for creativity and a commitment to customer satisfaction. We will provide a gateway to your unforgettable travel experiences. At TRAVELWORLD  , we specialize in creating extraordinary journeys, ensuring each trip is packed with beautiful memories and thrilling adventures.</p>
  <p className='p'>Founded in 1999, TRAVELWORLD started with a passion for exploration and a vision to provide travelers with seamless, enriching experiences. Over the years, we have grown into a leading travel and tour company, curating bespoke trips tailored to your preferences.</p>
</div>
<div className="row">
  <h2 className='ourteam'>Our Team</h2>

  <div className="column">
    <div className="card">
      <img src="https://media.istockphoto.com/photos/business-group-picture-id505594930?k=6&m=505594930&s=612x612&w=0&h=xus3pd-OvAyyJollrUu5ICxBr11Q6Yld7WVhvdSirKA=" alt="Jane" style={{width:"100%"}}/>
      <div className="container">
        <h2 className='h2'>Amigos</h2>
        <p class="title">CEO With Founders</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.
          Lorem ipsum dolor sit amet consectetur
        </p>
       
        {/* <p><button class="button">Contact</button></p> */}
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="https://www.bobmannspeaks.com/wp-content/uploads/2017/11/6-Traits-of-a-Successful-Salesperson-e1510697658795.jpg" alt="Mike" style={{width:"100%"}}/>
      <div class="container">
        <h2  className='h2'>Team Red</h2>
        <p class="title">Art Directors</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>red@example.com</p>
        {/* <p><button class="button">Contact</button></p> */}
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="https://www.gannett-cdn.com/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2018/08/28/USATODAY/usatsports/business-people-six-figure-jobs.jpg?width=3200&height=1680&fit=crop" alt="John" style={{width:"100%"}}/>
      <div class="container">
        <h2  className='h2'>Team Volgano</h2>
        <p class="title">Travel Co-ordinators</p>
        <p class="title">10 members</p>

        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        {/* <p><button class="button">Contact</button></p> */}
      </div>
    </div>
  </div>
  <div class="about-sectionS">
  <h1 className='our'>Our Mission and Values</h1> <br /><br />
  <h3>Mission</h3><br />
  <p>To inspire wanderlust, promote cultural understanding, and create lasting connections through immersive travel experiences.</p>
  <div>
      <h3>Values</h3><br />
      <p>
        <li><b>Excellence</b>: We strive for excellence in every detail, ensuring your trip exceeds expectations</li>
        <li><b>Authenticity</b>: Embracing the authenticity of each destination, we offer genuine cultural experiences.</li>
        <li><b>Responsibility</b>: Committed to responsible tourism, we aim to minimize our environmental impact and support local communities.</li>
        <br />
        </p>
    </div>
    <div>
      <h3>Why you Choose Us</h3><br />
      <p>
        <li><b>Expertise</b>: Our team of travel experts possesses in-depth knowledge of destinations worldwide, ensuring you receive expert guidance.</li>
        <li><b>Personalization</b>: We tailor each itinerary to your preferences, crafting unique experiences tailored just for you..</li>
        <li><b>Customer Focus</b>: Your satisfaction is our priority. Our dedicated support team is available 24/7 to assist you at every step of your journey.</li>
        </p>
        <br />
    </div>
    <div>
     <h3>Recognition And Awards</h3><br />
     <p><li><b>2000</b>: Voted Best Travel Company by World Travel Award.</li></p>
     <p><li><b>2020</b>: Featured in National Geographic Traveler  for our exceptional tours.</li></p>
    </div>
    <br />
    <Link to='/'><h1 className='thak'>THANK YOU....</h1></Link>
    </div>
   </div>
    </div>
  );
};

export default About;
