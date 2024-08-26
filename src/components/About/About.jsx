import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className='about-section-container'>
        <span className='about-section-container-title'><i>A B O U T - M E</i></span>
        <div className='about-details-container'>
            <div className='about-details-background'>
                <div className='about-details'>
                    <img className='about-details-icon' src={`${process.env.PUBLIC_URL}/assets/experience.png`} alt='experience-icon' />
                    <span className='about-details-title color-style-green'>Experience</span>
                    <span className='about-details-label color-style-purple'>2+ Years Frontend Development</span>
                </div>
                <div className='about-details'>
                    <img className='about-details-icon' src={`${process.env.PUBLIC_URL}/assets/education.png`} alt='education-icon' />
                    <span className='about-details-title color-style-green'>Education</span>
                    <span className='about-details-label color-style-purple'>BSc. Computer Science</span>
                </div>
            </div>
            <div className='about-details-info'>
                <div className='about-details-info-text color-style-orange'><b>&ldquo;</b> <i>With 2+ years of experience as a React.js Front End Developer, I've honed my skills in crafting dynamic and responsive user interfaces. From building reusable components to optimizing performance, I thrive on bringing designs to life with clean and efficient code. My journey in React.js has been marked by continuous learning and a passion for delivering exceptional user experiences.</i> <b>&rdquo;</b></div>
            </div>
        </div>
    </section>
  )
}

export default About;