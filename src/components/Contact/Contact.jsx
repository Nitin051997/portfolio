import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className='contact-section-container'>
        <span className='contact-section-container-title'><i>C O N T A C T - M E</i></span>
        <div className='contact-details-container'>
            <div className='contact-details-intrest'>
                <span className='contact-details-intrest-label color-style-purple'>I'm interested in ..</span>
                <div className='contact-details-intrest-box-container'>
                    <button draggable className='contact-details-box contact-details-box-selected'>Forntend</button>
                    <button draggable className='contact-details-box contact-details-box-selected'>HTML</button>
                    <button draggable className='contact-details-box contact-details-box-selected'>Web Page</button>
                    <button draggable className='contact-details-box contact-details-box-selected'>Web Forms</button>
                    <button draggable className='contact-details-box contact-details-box-selected'>CSS</button>
                    <button draggable className='contact-details-box'>UI - UX Design</button>
                    <button draggable className='contact-details-box contact-details-box-selected'>Java Script</button>
                    <button draggable className='contact-details-box contact-details-box-selected'>React JS</button>
                    <button draggable className='contact-details-box'>React Native</button>
                    <button draggable className='contact-details-box'>Backend</button>
                    <button draggable className='contact-details-box'>SQL</button>
                </div>
            </div>
            <div className='contact-details-info'>
                <div className='contact-details-info-badge mail-hover'>
                    <img className='contact-details-info-img' src={`${process.env.PUBLIC_URL}/assets/mail.png`} alt='mail' />
                    <a href='mailto:nitin.nadar5@gmail.com'>
                        <span className='contact-details-info-text'>nitin.nadar5@gmail.com</span>
                    </a>
                </div>
                <div className='contact-details-info-badge'>
                    <img className='contact-details-info-img' src={`${process.env.PUBLIC_URL}/assets/call.png`} alt='call' />
                    <span className='contact-details-info-text'>8879597942</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact;