import React from 'react'
import './TwoChild.css';

const TwoChild = ({imgs, text, flexDirection}) => {
  return (
    <>
        <div className="TwoChild-container">
        <div className="TwoChild-content" style={{flexDirection}}>
        <div className="image-section">
          {imgs}
        </div>
        <div className="text-section">
         {text}
        </div>
      </div>
    </div>
    </>
  )
}

export default TwoChild