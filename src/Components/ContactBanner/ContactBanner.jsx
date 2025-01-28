import React from 'react'
import './ContactBanner.css';
import { Link } from 'react-router-dom';


const ContactBanner = () => {
  return (
    <>
    <section className="contact">
        <h2>Let’s Fix It Together</h2>
        <p style={{color:"var(--c1)"}}>Join us for expert auto repairs that keep your vehicle running smoothly. Our skilled team is here to provide reliable, efficient solutions to get you back on the road with confidence</p>
        <Link className="button1" to={'/register'} style={{textDecoration:'none'}}>Schedule Your Appointment</Link>
    </section>  
    </>
  )
}

export default ContactBanner;