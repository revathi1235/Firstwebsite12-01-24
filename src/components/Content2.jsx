import React from 'react';
import { Link,Routes,Route,Outlet } from 'react-router-dom';
import './Content2.css';
import KeralaClick from './KeralaClick'
import ThailandClick from './ThailandClick'
import KashmirClick from './KashmirClick'

function Content2() {
  return (
    <>
      <div className='backg'>
        <div className='headings'>
          <h1 style={{ color: 'black' }}> Mostly Preferred Holiday Location </h1>
          <div className='mark'>
            <div className="card">
              <img
                src="https://getwallpapers.com/wallpaper/full/4/3/a/842545-kashmir-wallpaper-1920x1080-for-mac.jpg"
                alt=""
                className="card-image"
              />
              <div className="card-content">
                <Link to='/kashmirClick'>KASHMIR</Link>
              </div>
            </div>

            <div className="card">
              <img
                src="https://cdn.wallpapersafari.com/30/72/8hFCNc.jpg"
                alt=""
                className="card-image"
              />
              <div className="card-content">
                <Link to='/keralaClick'>
                  <p>Kerala</p>
                </Link>
              </div>
            </div>

            <div className="card">
              <img
                src="http://www.travelmarbles.com/wp-content/uploads/2018/07/bangkok1-1.jpg"
                alt=""
                className="card-image"
              />
              <div className="card-content">
                <Link to='/thailandClick'>
                  <p>Thailand</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
         
      <Routes>
        <Route path='/kashmirclick' element={<KashmirClick/>}/>
      <Route path='/keralaclick' element={<KeralaClick/>}/>
      <Route path='/thailandclick' element={<ThailandClick/>}/>

      </Routes>
    </>
  );
}

export default Content2;
