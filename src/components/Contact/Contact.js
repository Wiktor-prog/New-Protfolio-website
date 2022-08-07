import React from "react";
import "../Contact/Contact.css"
import "../Contact/ContactChoise/ContactChoise.css"
import ContactChoise from "../Contact/ContactChoise/ContactChoise"

export default function Contact() { 
  return(

      <div className="contenet">
        <h2>If you whant <span> Contact</span> me</h2>
        <ContactChoise />
      </div>

  )
}