import { BrowserRouter , Routes , Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="App">
      <Navbar />
        <BrowserRouter>
          <Routes>
            
          </Routes>
        </BrowserRouter>
    </div>
  );
}


