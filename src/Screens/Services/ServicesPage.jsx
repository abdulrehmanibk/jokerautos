import React from 'react'
import './Services.css';
import Banner from '../../Components/Banner';
import Stats from '../../Components/Stats/Stats';
import BarFeatures from '../../Components/BarFeatures/BarFeatures';


const ServicesPage = ({selectedProduct}) => {

  return (
    <>
          <Banner 
          imgs={'/images/joker-home.svg'}
          heading={selectedProduct.title || ''}
          para={
            <>
            <p style={{color:'var(--c5)', fontSize:'1.5rem'}}>{selectedProduct.desc || ''}</p>
            <p style={{color:'var(--c5)', fontSize:'1.5rem'}}>{selectedProduct.hPoint1 || ''}</p>
            </>
          }
          />
          
          <header className="course-header">
            <div className="course-header-image">
              <img src={selectedProduct.image} alt="alt"/>
            </div>

            <div className="course-header-content">
              <h1>{selectedProduct.title} </h1>
              <p className="subtitle">{selectedProduct.subTitle}</p>
              <p className="aboutP">{selectedProduct.aboutService}</p>
              <p className="aboutP">{selectedProduct.hPoint2}</p>
              <p className="aboutP">{selectedProduct.hPoint3}</p>
  
              <BarFeatures 
              b1={'12 Month'}
              b2={'All levels'}
              b3={'Guaranteed'}
              styles={{
                backgroundColor:'var(--c3)',
                color:'var(--c1)',
                textShadow: '.1rem .1rem 1rem var(--c3)'
              }}
              />

            </div>
          </header>
          <div className="course_detail">
            <h3>What You Will Getting</h3>
            <ul>
              <li>{selectedProduct.wPoint1}</li>
              <li>{selectedProduct.wPoint2}</li>
              <li>{selectedProduct.wPoint3}</li>
            </ul>
          </div>
      <Stats />
    </>
  )
}

export default ServicesPage