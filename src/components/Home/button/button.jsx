import React from "react";
import { useNavigate } from "react-router-dom";
import "../button/button.css"

export default function BtnAbout() {
  let navigate= useNavigate()

  return (
    <button 
    className="about-btn-main"
    onClick={() => navigate("/About")}
    >About me</button>
  )
}