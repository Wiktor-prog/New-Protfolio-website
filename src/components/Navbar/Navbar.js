import React from "react";
import "../Navbar/Navbar.css"

export default function Navbar() {
  return (
  
  <nav>
      <ul className="menu_top">
        <li>
          <a class="nav_Btns" href="/about">About me</a>
        </li>

        <li>
          <a class="nav_Btns" href="https://github.com/Wiktor-prog">GitHub</a>
        </li>  
        
        <li>
          <a class="nav_Btns" href="/contact">Contact</a>
        </li>
      </ul>
  </nav>
  

  )
}