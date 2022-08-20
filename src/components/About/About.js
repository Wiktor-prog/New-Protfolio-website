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
            <p>As I'm  just starting my adventure with the front-end - I don't have job experience in this field, but I'm willing to learn, discover and become better. I finished a front-end course at Kodilla where I learned HTML CSS JavaScript and REACT. Currently I'm learning about AGILE and SCRUM - 
                as I understand that this is a crucial skill to work in tech projects now. I'm in the process of discovering and understanding this philosophy. I'm also familiar with how some of the project's processes look - but I never worked on a tech project in a tech company - so You need to give me some time.  I'm looking for a place that will help me to grow, become a better developer by practicing and learning from the more senior team members.</p>
            
          </div>

          <div className="about-cell">
          <h3>My skills & expriences</h3>
            <div className="about-cell-skills">
              <li><a>HTML, CSS</a><span class="bar"><span class="first-bar"></span></span></li>
                <li><a>JavaScript, React</a><span class="bar"><span class="second-bar"></span></span></li>
                <li><a>Jira</a><span class="bar"><span class="third-bar"></span></span></li>
                <li><a>Agile/SCRUM</a><span class="bar"><span class="fourth-bar"></span></span></li>
                <li><a>Git, GitBash, GitHub</a><span class="bar"><span class="fifth-bar"></span></span></li>
                <li><a>Adobe suite (Photoshop/Illustrator/AfterEffects)</a><span class="bar"><span class="sixth-bar"></span></span></li>
                <li><a>English</a><span class="bar"><span class="seventh-bar"></span></span></li>
                <li><a>Windows</a><span class="bar"><span class="eighth-bar"></span></span></li>
            </div>
          </div>
        </main>
        <div class="custom-shape-divider-bottom-1660470148">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
              </svg>
          </div>
    </div>
  )
}