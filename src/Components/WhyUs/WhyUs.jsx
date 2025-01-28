import React from 'react'
import './WhyUs.css';

const WhyUs = () => {
  return (
    <>
        <div className="whyus_container">
            <div className="whyus_heading">
                <h2>Why Choose Us</h2>
            </div>
            <div className="whyus_list">
                <ul>
                    <li>
                        <i class="fa-solid fa-user-graduate"></i>
                        <h4>Personalized Learning</h4>
                        <p>One-on-one sessions tailored to your learning pace and goals</p>
                    </li>
                    <li>
                        <i class="fa-solid fa-book-open"></i>
                        <h4>Comprehensive Curriculum</h4>
                        <p>Well-structured lessons covering Tajweed, Tafseer, and Islamic studies</p>
                    </li>
                    <li>
                        <i class="fa-solid fa-chalkboard-user"></i>
                        <h4>Interactive Sessions</h4>
                        <p>Engaging learning experience with real-time feedback and guidance</p>
                    </li>
                </ul>
            </div>
        </div>

    </>
  )
}

export default WhyUs
