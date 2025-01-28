import React from 'react'
import FeatureCourses from './FeatureCourses';
import StepsLearning from './StepsLearning';
import Memorize from './Memorize';
import Banner from '../../Components/Banner';
import ShortBoxList from '../../Components/ShortBoxList/ShortBoxList';
import ContactBanner from '../../Components/ContactBanner/ContactBanner';
import { Link, NavLink } from 'react-router-dom';


export const Home = () => {

  const data = [
    {
      heading: "24/7 FLEXIBLE SCHEDULE",
      para: "Always Available",
      icon: "fa-solid fa-clock", // Font Awesome icon for a clock
      icon2: "fa-solid fa-star", // Font Awesome icon for star ratings
    },
    {
      heading: "AFFORDABLE FEE",
      para: "Budget-Friendly",
      icon: "fa-solid fa-dollar-sign", // Font Awesome icon for dollar sign
      icon2: "fa-solid fa-star", // Font Awesome icon for star ratings
    },
    {
      heading: "MULTILINGUAL UNDERSTANDING",
      para: "Global Language Experts",
      icon: "fa-solid fa-globe", // Font Awesome icon for a globe
      icon2: "fa-solid fa-star", // Font Awesome icon for star ratings
    },
    {
      heading: "ONE ON ONE INSPECTION",
      para: "Focuses on Individual Attention",
      icon: "fa-solid fa-user", // Font Awesome icon for a user
      icon2: "fa-solid fa-star", // Font Awesome icon for star ratings
    },
    {
      heading: "SUBSTITUTE TEAM",
      para: "Dedicated Team of Substitute Workers",
      icon: "fa-solid fa-user-plus", // Font Awesome icon for adding a user
      icon2: "fa-solid fa-star", // Font Awesome icon for star ratings
    },
    {
      heading: "EASY ONLINE PAYMENTS",
      para: "One-Click Payments",
      icon: "fa-solid fa-credit-card", // Font Awesome icon for a credit card
      icon2: "fa-solid fa-star", // Font Awesome icon for star ratings
    },
    {
      heading: "GLOBAL REPUTATION",
      para: "Trusted by Client Worldwide",
      icon: "fa-solid fa-globe", // Font Awesome icon for a credit card
      icon2: "fa-solid fa-star", // Font Awesome icon for star ratings
    },
    {
      heading: "PROGRESS REPORT ",
      para: "Knowledge Assessment",
      icon: "fa-solid fa-chart-line", // Font Awesome icon for a credit card
      icon2: "fa-solid fa-star", // Font Awesome icon for star ratings
    },
    // {
    //   heading: "ONLINE PORTAL",
    //   para: "Student Classes Records & History",
    //   icon: "fa-solid fa-laptop", 
    //   icon2: "fa-solid fa-star", 
    // },
  ];
  

  return (
    <>
      <Banner 
            imgs={'/images/joker-home.svg'}
            heading={'Drive Your Dream: Explore the Latest in Auto Innovation'}
            para={
            <>
            <p style={{color:'var(--c5)'}}>Keep your vehicle running smoothly. From routine maintenance to complex repairs, our skilled technicians provide fast, reliable service to get you back on the road with confidence.</p>
            </>
            }
            children={
              <div style={{display: 'flex'}}>
                <NavLink to={'/about/fgcampus'} >
                <button className="button2">See More About Us</button>
                </NavLink>
              </div>
            }
      />
      
      <FeatureCourses />
      <Memorize />
      {/* <Marquee /> */}
      <StepsLearning />

      <ShortBoxList
      heading={'Why Choose Us?'}
      headpara={'Choose us for expert services, reliable repairs, and personalized care that keep your vehicle in top condition.'}
      styles={{
        backgroundColor:"var(--c1)",
        color:'var(--c3)'
      }}
      >
          {data.map((item, index) => (
                <li key={index} style={{height:'15rem', backgroundColor:"var(--c3)", boxShadow:'none'}}>
                    <i class={item.icon} style={{color:'var(--c5)', fontSize:'5rem'}}></i>
                    <h4 style={{color:'var(--c5)'}}>{item.heading}</h4>
                    <p style={{color:'var(--c5)'}}>{item.para}</p>
                </li>
          ))}
      </ShortBoxList>
      <ContactBanner />
      
    </>
  )
}
