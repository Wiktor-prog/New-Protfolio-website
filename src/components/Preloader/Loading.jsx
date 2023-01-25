import React from 'react'
import { ColorRing } from  'react-loader-spinner'
import './spinner.css';

export default function Loader() {
return (
    <div className="Preloader">
      <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperClass = "Preloader"
      colors={['#eb00eb', '#eb008d', '#eb00eb', '#01c4ff', '#eb00eb']}
    />
    </div>
  )
}
  
