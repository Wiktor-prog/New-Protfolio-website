import { useNavigate } from "react-router-dom"
import React from "react";
import '../App.css'

export default function Navbar() {
  
  return (
    <header>
      <div className="nav">
        <div className="menu">
          <ul>
            <li>About me</li>
            <li>GitHub</li>
            <li>Contact</li>
          </ul>
        </div> 
      </div>
    </header>
  )
}