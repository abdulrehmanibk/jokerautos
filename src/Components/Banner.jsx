import React from 'react'
import './Banner.css';

const Banner = ({ heading, para, children,imgs }) => {
  return (
    <div className="banner" style={{
      backgroundImage: `url(${imgs})`
    }}>
        <h1>{heading}</h1>
        <p>{para}</p>
        {children}
    </div>
  )
}

export default Banner;
