import { BrowserRouter , Routes , Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact'

export default function App() {
  return (
    <div className="App">
      <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </BrowserRouter>
        
    </div>
  );
}


