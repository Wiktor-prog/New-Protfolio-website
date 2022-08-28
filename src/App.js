import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { useState, useEffect }from 'react';
import PulseLoader from "react-spinners/PulseLoader";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import About from './components/About/About';
import Contact from './components/Contact/Contact'
import './App.css';

export default function App() {
  return (
    <div className="App">
        <Navbar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/About" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          </BrowserRouter>  
    </div>
  );
}


