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
          <h1>Welcome to<span> my</span> website</h1>
          <h2>My name is<span> Wiktor</span></h2>
          <h3>and I want to start my career in <span>#tech </span>industry</h3>
      </div>
    </div>
  </div>
</section>
    
    
  )
}

