import React from 'react'
import './About.css';
import ShortBoxList from '../../Components/ShortBoxList/ShortBoxList';

const About = () => {

    const data = [
        { heading: 'Oil Change' },
        { heading: 'Tire Rotation' },
        { heading: 'Brake Inspection' },
        { heading: 'Engine Diagnostics' },
        { heading: 'Transmission Repair' },
        { heading: 'Performance Tuning' },
        { heading: 'Roadside Assistance' },
        { heading: 'Body Repair' },
    ];


  return (
    <>
    <div class="aboutcontainer">
        <h1>About <span>JKOER AUTOS</span></h1>
        <p>
        <span>JKOER AUTOS</span>  We offer a wide range of repairs and maintenance to ensure your car runs smoothly and reliably. Whether it’s routine servicing or complex fixes, we’re here to deliver quality and trust you can count on.</p>    
   
    <div class="aboutmore">
    <div class="aboutmore-cards">
            <div className='aboutmore-cards-head'>
                <i class="fa-solid fa-moon"></i>
                <h4>Core Values</h4>
            </div>
            <p>We believe in honest and transparent service, providing solutions you can trust.We are committed to the highest standards of quality in every repair and service.Your satisfaction is our priority, and we strive to exceed your expectations.</p>
        </div>
        <div class="aboutmore-cards">
            <div className='aboutmore-cards-head'>
                <i class="fa-solid fa-book-open"></i>
                <h4>Mission and Vision</h4>
            </div>
            <p>Our mission is to provide exceptional auto repair services with a focus on quality, reliability, and customer satisfaction. We envision a future where every vehicle owner experiences worry-free driving through our trusted, top-notch services.</p>
        </div>
    </div>
    <div class="aboutIntro">    
        
        <div class="aboutIntroCards">
            <div><h2>Who We Are</h2></div>
            <div>
                <p> Choose us for our skilled technicians, commitment to quality, and dedication to getting your vehicle back on the road quickly. We offer transparent pricing, fast service, and a customer-first approach that ensures your satisfaction every step of the way.</p>
            </div>
            <div> <button class="button2" routerLink="/contact">Get in Touch</button></div>
        </div>
    </div>

    <ShortBoxList 
    heading={'What You Will Learn'}
    styles={{
        color:'var(--c3)',
    }}
    >
    {data.map((item, index) => (
                <li key={index}     
                style={{
                    backgroundColor:'var(--c1)',
                    color: 'var(--c5)',
                    boxShadow:'none'

                }}>
                    <i class="fa-brands fa-discourse"></i>
                    <h4>{item.heading}</h4>
                </li>
            ))}
    </ShortBoxList>

    </div>

    </>
  )
}

export default About