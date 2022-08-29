import React from "react";
import "../Home/Home.css"
import Wave from "../Assets/waves"
import Button from "../Home/button/button"

export default function Home() {
  return (
   
  <div className="home">
      <div className="content">
        <h1>Hi im <span>Wiktor</span></h1>
        <h2>I learn to be a <span>Front end-developer</span></h2>

          <h3>My name is Wiktor - I'm typical - #bornin90s. I'm a digital native interested <br></br>in 
            video games and graphic design. As I like koding as much as graphic design.<br></br> 
            I decided to combine those two into one- and become a Front-end developer</h3>

        <Button/>

      </div> 
      <Wave/>
  </div>

  )
}