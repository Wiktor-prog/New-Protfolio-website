import React from "react";
import Wave from "react-wavify"
import "../Assets/waves.css"

export default function wave() {
  return (

    <Wave
        fill="#e9328d66"
        className="wave"
        paused={false}
        options={{
          height: 80,
          amplitude: 20,
          speed: .14,
          points: 3,
          opacity: 0.9,
        }}
    />

   
  )
}