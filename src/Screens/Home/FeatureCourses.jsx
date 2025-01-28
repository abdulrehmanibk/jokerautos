import React, { useEffect, useRef, useState } from 'react'
import './FeatureCourses.css';
import { Link, NavLink } from 'react-router-dom';
import { ServiceData } from '../Services/ServicesData';

const FeatureCourses = () => {

    const [featureCourse, setFeatureCourse] = useState([]);
    const containerRef = useRef(null);
  
    useEffect(() => {
    const featureCourses = ServiceData.filter((item) => typeof item.id === 'number')
    setFeatureCourse(featureCourses);

    }, []);

    const nextSlide = () => {
      containerRef.current.scrollBy({
        left: 15 * parseFloat(getComputedStyle(document.documentElement).fontSize),
        behavior: "smooth",
      });
    };
    
    const prevSlide = () => {
      containerRef.current.scrollBy({
        left: -15 * parseFloat(getComputedStyle(document.documentElement).fontSize),
        behavior: "smooth",
      });
    };

  return (
    <>
    <section className="container"
            >
        <h2>Our Regular Services</h2>
        <p>We offer comprehensive services, from diagnostics to repairs, <br />ensuring your vehicle performs at its best with quality, efficiency, and care.</p>
        <div className="cards"
        >
        <button className="slider-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slider_container"
        >


            <div className="slider"
            ref={containerRef}>
        {
        featureCourse.map((card, index) => (
          <div
            key={index}
            className={`card`}
          >
            <div className="card_img">
              <img src={card.image} alt="" />
            </div>
            <p>{card.title}</p>
            <NavLink to={`/service/${card.id}`}>
            <button className='button3'>Read More</button>
            </NavLink>
          </div>
        ))}
        </div>
        </div>
        <button className="slider-button next" onClick={nextSlide}>
        &#10095;
      </button>
</div>
    <hr className='hr'></hr>
    </section>
    </>
  )
}

export default FeatureCourses;


