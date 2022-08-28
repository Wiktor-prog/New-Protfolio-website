import React from "react";
import "../ContactChoise/ContactChoise.css"
import { FaWhatsappSquare, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function ContactChoise() {
  return (

    <div className="contact-list">
      <ul>
        <li>
            <a 
            href="https://wa.me/505333789" 
            target="_blank">
                <span>
                  <FaWhatsappSquare/>
                </span>
                <p>Whatsapp</p> 
            </a>
        </li>
    
        <li>
            <a href="https://www.linkedin.com/in/wiktor-ziejewski-43b16b229/">
                <span>
                  <FaLinkedin/>
                </span>
              <p>Linkedin</p>
            </a>
        </li>

        <li>
            <a href="mailto:wiktor.ziejewski@gmail.com">
                <span>
                  <FaEnvelope/>
                </span>
            <p>E-mail</p>
          </a>
        </li>
      </ul>
    </div>

  )
}