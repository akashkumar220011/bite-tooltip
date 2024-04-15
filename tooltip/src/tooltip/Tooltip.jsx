// import React from 'react'
import './Tooltip.css';

const Tooltip = ({ position="bottom",}) => {
  return (
    <div className='tooltip-trigger'>
        Hover on me
      <div className={`tooltip tooltip-${position}`}>
         hey ashis 
      </div>
    </div>
  )
}

export default Tooltip
