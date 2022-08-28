import React from "react";
import "../About/About.css"

export default function About() { 
  return(
    <div className="about-page">

      <header className="about-header">
        <h3>Name</h3>
      </header>
        <main className="about-grid">
          <div className="about-cell">
            <h3>About me</h3>
            <p>As I'm  just starting my adventure with the front-end - I don't have job experience in this field, but I'm willing to learn, discover and become better. I finished a front-end course at Kodilla where I learned HTML CSS JavaScript and React. 
                I'm also familiar with how some of the project's processes look - but I never worked on a tech project in a tech company - so you need to give me some time.  I'm looking for a place that will help me to grow, become a better developer 
                by practicing and learning from the more senior team members.</p>
          </div>
          

          <div className="about-cell">
            
          <h3>My skills & expriences</h3>
            <div className="about-cell-skills">
              <li><a>HTML, CSS</a><span class="bar"><span class="first-bar"></span></span></li>
                <li><a>JavaScript, React</a><span class="bar"><span class="second-bar"></span></span></li>
                <li><a>Git, GitHub, GitBash</a><span class="bar"><span class="third-bar"></span></span></li>
                <li><a>Adobe suite (Photoshop/Illustrator)</a><span class="bar"><span class="fourth-bar"></span></span></li>
                <li><a>English</a><span class="bar"><span class="fiveth-bar"></span></span></li>
            </div>
          </div>
        </main>
    </div>
    
  )
}