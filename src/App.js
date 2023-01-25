import React from 'react';
import { useState , useEffect} from 'react';
import Spinner from './components/Preloader/Loading'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import About from './components/About/About';
import Contact from './components/Contact/Contact'
import './App.css';



export default function App() {
  const [spinner, setSpinner] = useState(false)
  useEffect (() => {
    setSpinner(true)
    setTimeout(() => {
      setSpinner(false)
    }, 2500);
  },[])
  
  return (
    <div className="App"> 
    {
      spinner? <Spinner/> :
      <div>
          <Navbar />
          <Home />
          <About />
          <Contact />
      </div>
    }
    </div>
  );
}
