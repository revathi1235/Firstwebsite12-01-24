

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; import Home from './components/Home'; 
import About from './components/About'; 
import Contact from './components/Contact'; 
import Login from './components/Login'; 
import Signup from './components/Signup'; 



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
       
          
         
      </div>
     </Router>
  );
};

export default App;

