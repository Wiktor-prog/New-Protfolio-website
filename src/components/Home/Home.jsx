import React from "react";
import "../Home/Home.css"
import Button from "../Home/button/button"
import Photo from "../Assets/pfolio.png"

export default function Home() {
  return (
   
    <div className="home">
      <div className= "left-content">
        <img src={Photo} alt="" />
      </div>
        
      <div className="right-content">
        <h1>Hi im <span>Wiktor</span></h1>
        <h2>I learn to be a <span>Front end-developer</span></h2>
          <h3>My name is Wiktor - I'm typical <span>#</span>bornin90s</h3>
        <Button/>
      </div> 

    </div>
  )
}