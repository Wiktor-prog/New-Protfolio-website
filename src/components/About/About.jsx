import React from "react";
import "../About/About.css"
import ButtonResume from "../About/buttonResume"

export default function About() { 
  return(
    <section className="about" id="#about">
      <header className="about-header">
        <img src={require('../Assets/pfolio.png')} />
          <div className="info-content">
            <h1>Wiktor</h1>
              <p>I'm a digital native with a geek approach. I love video games. I'm interested in design, coding and tech industry. 
              </p>
          </div>
      </header>

      <main className="about-grid">
        <div className="about-cell">
          <h3>About me</h3>
            <p>I'm just starting my adventure with #tech industry - and I don't have much experience - but I'm willing to learn and become better. 
              Few months ago I finished a front-end course at Kodilla where I learned HTML CSS JavaScript and React.
               I'm also familiar with how some of the project's processes look like ( I worked with Jira and I know basics of Agile / SCRUM). 
               I'm looking for a place that will help me to grow, ad help me discover my own path - 
               as a FE developer, tester or maybe other role - I'm open for multiple options..</p>
          <ButtonResume/>   

        </div>
          
        <div className="about-cell">  
          <h3>My skills <span>&</span> expriences</h3>
            <div className="about-cell-skills">
                <li><a>HTML, CSS, SCSS/SASS</a><span class="bar"><span class="first-bar"></span></span></li>
                <li><a>JavaScript, React</a><span class="bar"><span class="second-bar"></span></span></li>
                <li><a>Jira, Agile / SCRUM</a><span class="bar"><span class="second-bar"></span></span></li>
                <li><a>Git, GitHub, GitBash</a><span class="bar"><span class="third-bar"></span></span></li>
                <li><a>MySQL, PopSQL</a><span class="bar"><span class="second-bar"></span></span></li>
                <li><a>Adobe suite (Photoshop/Illustrator)</a><span class="bar"><span class="fourth-bar"></span></span></li>
                <li><a>English</a><span class="bar"><span class="fiveth-bar"></span></span></li>
            </div>
          </div>
        </main>
      </section>
  )
}