import React from 'react'
import './Consultation.css';


const Consultation = () => {
  return (
    <>
    <div className="consultation-container">

      <div className="consultation-form">
        <h2 className="form-title">What Do You Want to Know?</h2>
        <form>
          <div className="input-group">
            <input type="text" placeholder="Your Name" className="input-field" />
            <input type="email" placeholder="Your Email" className="input-field" />
          </div>
          <div className="input-group">
            <input type="text" placeholder="Your Phone" className="input-field" />
            <input type="text" placeholder="Your Subject" className="input-field" />
          </div>
          <textarea
            placeholder="Your Message"
            className="textarea-field"
          ></textarea>
          <button type="submit" className="button2">
            Send Message
          </button>
        </form>
      </div>

      <div className="consultation-image">
        <img src="/images/contact-joker.jpg" alt="" />
      </div>

    </div>
    </>
  )
}

export default Consultation;