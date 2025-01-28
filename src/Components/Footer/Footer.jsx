import React from 'react'
import './Footer.css';
import { NavLink } from 'react-router-dom';
import features from '../../Screens/AdditionalLinks/additionalLinksData';
import { ServiceData } from '../../Screens/Services/ServicesData';

const Footer = () => {

  return (
    <>
        <footer className="footer">
        {/* <hr></hr> */}
        <div className="footer_content">
        <div className="footer_intro">
            {/* <img src="/images/fgc.jpeg" alt="" /> */}
            <h1>JOKER AUTOS</h1>
        </div>
        <div className="footer_services">
            <ul>
                <li>Regular Service</li>
                {ServiceData.filter((item) => typeof item.id === 'number')
                .map((item, index) => (
                <li key={index}><NavLink to={`/service/${item.id}`} style={{textDecoration:'none', color:'var(--c3)'}}>{item.title}</NavLink></li>
                ))}
            </ul>
        </div>
                
        <div className="footer_services">
            <ul>
                <li>Additional Links</li>
                {features.map((item, index) => (
                    <li key={index}>
                        <NavLink to={`/additionallinks/${item.id}`} style={{textDecoration:'none', color:'var(--c3)'}}>
                        {item.heading}
                        </NavLink>
                    </li>
                ))}
                <li>
                    <NavLink to={'/pricing'} style={{textDecoration:'none', color:'var(--c3)'}}>
                        Fee Plans
                    </NavLink>
                </li>
            </ul>
        </div>
        </div>
        <div className="footer_copywrite">
            <hr></hr>
            <p>Copyright @ 2024 All Right Reserved</p>
        </div>

    </footer>
    </>
  )
}

export default Footer;