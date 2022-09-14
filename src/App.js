import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import About from './components/About/About';
import Contact from './components/Contact/Contact'

import './App.css';

export default function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <About />
        <Contact />
    </div>
  );
}


