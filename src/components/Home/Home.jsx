import React from "react";
import "../Home/Home.css"
import Photo from "../Assets/pfolio.png"

export default function Home() {
  return (

<section class="home" id="home">
  <div class="max-width">
    <div class="about-content">
      <div class="column left">
          <img src={Photo} alt="" />
      </div>

      <div class="right-content">
          <h1>Hi im <span>Wiktor</span></h1>
          <h2>I learn to be a <span>Front end-developer</span></h2>
          <h3>My name is Wiktor - I'm typical <span>#</span>bornin90s</h3>
      </div>
    </div>
  </div>
</section>
    
    
  )
}

