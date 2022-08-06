import { BrowserRouter , Routes , Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About';
import Contact from './components/Contact/Contact'
import Hero from './components/Hero'

export default function App() {
  return (
    <div className="App">
      <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/hero" element={<Hero/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}


