import React from "react";
import pdf from "../../NewCVv.pdf";
import "../About/buttonResume.css"

export default function Resume() {
  return (
    <div className="resume">
      <a href={pdf} 
         target="_blank">
          Download my resume
      </a>
    </div>
  );
}