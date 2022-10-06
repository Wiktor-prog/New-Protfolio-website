import React from "react";
import "../Contact/Contact.css"
import ContactChoise from "./ContactChoise/ContactChoise"

export default function Contact() { 
  return(

  <div className="contact" id="contact">
    <div className="container">
      <h2><span>Contact</span> me</h2>
        <div className="underline">
          <p></p>
        </div>
        <ContactChoise />
    </div>
  </div>

      

  )
}