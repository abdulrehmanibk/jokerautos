import React, { useEffect, useState } from 'react'
import './Teacher.css';
import Banner from '../../Components/Banner'
import Stats from '../../Components/Stats/Stats'
import BarFeatures from '../../Components/BarFeatures/BarFeatures';
import WhyUs from '../../Components/WhyUs/WhyUs';
import ContactBanner from '../../Components/ContactBanner/ContactBanner';
import { useParams } from 'react-router-dom';
import { TeachersData } from './TeachersData';
import Error from '../../Components/Error/Error';

const Teacher = () => {

  const params = useParams();
  const [selectedTeacher, setSelectedTeacher] = useState({});

  useEffect(() => {
    const teacher = TeachersData.find((item) => item.id == params.id);

    setSelectedTeacher(teacher);
  }, [params.id]);



  return (
  <>
  
    {!selectedTeacher ? (
      <Error />
    ) : (
    <>
    <Banner 
      // imgs={'/images/homeback1.jpg'}
      heading={
        <>
        <i class="fa-solid fa-book" style={{
          color:'var(--c5)',
          display:'block',
          textShadow: '0 0 0 white'

        }}></i>
        <h1 
        style={{
          color:'var(--c1)',
          display:'block',
          textShadow: '0 0 0 white'
        }}
        >
        {selectedTeacher.heading}

        </h1>
        </>
        
      }
      para={
        <><p style={{fontSize: 'clamp(1.1rem , 3vw, 2rem)',color:'var(--c7)', textShadow: '0 0 0 white'}}>
          {selectedTeacher.headpara}
          </p></> 
      }

      styles={{
        color:'var(--c1)'
      }}

    />

    <Stats />


    <div className="teachers_container">
      <div className="teachers_heading">
        <h2>Meet Our Teachers</h2>
      </div>
      <div className="teachers_card_container">
        <div className="teacher_card">
        <i class="fa-solid fa-graduation-cap"></i>
          <h4>{selectedTeacher.teacher1}</h4>
          <p>Expert in Languages</p>
          <ul>
            <li><i class="fa-solid fa-graduation-cap"></i>French, Spanish ..</li>
            <li><i class="fa-solid fa-clock"></i>Morning & Evening</li>
            <li><i class="fa-solid fa-certificate"></i>5+ years</li>
          </ul>
          <BarFeatures 
              b1={'English'}
              b2={'Arabic'}
              b3={'Urdu'}
              styles={{
                padding : ".5rem 1rem",
                color : 'var(--c3)',
                textShadow: "none",
                backgroundColor :'var(--c1)',
                fontSize : '.9rem'
              }}
          />
        </div>        
        <div className="teacher_card">
        <i class="fa-solid fa-graduation-cap"></i>
          <h4>{selectedTeacher.teacher2}</h4>
          <p>Expert in Website Development</p>
          <ul>
            <li><i class="fa-solid fa-graduation-cap"></i>Senior Full-Stack Developer</li>
            <li><i class="fa-solid fa-clock"></i>Morning & Evening</li>
            <li><i class="fa-solid fa-certificate"></i>7+ years</li>
          </ul>
          <BarFeatures 
              b1={'English'}
              b2={'Arabic'}
              b3={'Urdu'}
              styles={{
                padding : ".5rem 1rem",
                color : 'var(--c3)',
                textShadow: "none",
                backgroundColor :'var(--c1)',
                fontSize : '.9rem'
              }}
          />
        </div>        
        <div className="teacher_card">
        <i class="fa-solid fa-graduation-cap"></i>
          <h4>{selectedTeacher.teacher3}</h4>
          <p>Expert in Maths & Aljebra</p>
          <ul>
            <li><i class="fa-solid fa-graduation-cap"></i>Masters in Mathematics</li>
            <li><i class="fa-solid fa-clock"></i>Morning & Evening</li>
            <li><i class="fa-solid fa-certificate"></i>10+ years</li>
          </ul>
          <BarFeatures 
              b1={'English'}
              b2={'Arabic'}
              b3={'Urdu'}
              styles={{
                padding : ".5rem 1rem",
                color : 'var(--c3)',
                textShadow: "none",
                backgroundColor :'var(--c1)',
                fontSize : '.9rem'
              }}
          />
        </div>
      </div>
    </div>

    <WhyUs />
    <ContactBanner />

    </>
  )}
  </>
  )
}

export default Teacher