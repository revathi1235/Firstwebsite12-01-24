

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; import Home from './components/Home'; 
import About from './components/About'; 
import Contact from './components/Contact'; 
import Login from './components/Login'; 
import Signup from './components/Signup'; 

  import Content2 from './components/Content2';
import Content3 from './components/Content3';
 import Content4 from './components/Content4';
import Content5 from './components/Content5';


function App() {
  return ( 
    <Router>
      <div className="App">
        
           <Navbar /> 
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path="/about" element={<About/>} /> 
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} /> 
          <Route path="/signup" element={<Signup/>} />
          </Routes>
       
           <Content5/>   
      <Content3/>
         <Content2/> 
          <Content4/>  
         
      </div>
     </Router>
  );
};

export default App;

