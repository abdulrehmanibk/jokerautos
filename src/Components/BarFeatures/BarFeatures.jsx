import React from 'react'
import './BarFeatures.css';

const BarFeatures = ({ b1, b2, b3, styles}) => {
  return (
   <>
    <div className="bar-header-p">
      <p style={styles}>{b1}</p>
      <p style={styles}>{b2}</p>
      <p style={styles}>{b3}</p>
    </div>    
   </>
  )
}

export default BarFeatures