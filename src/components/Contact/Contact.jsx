import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {

    const [skillTags, setSkillTags] = useState([
        'Frontend', 'HTML', 'Web Page', 'Web Forms', 'CSS', 'UI - UX Design', 
        'Java Script', 'React JS', 'React Native', 'Backend', 'SQL'
    ]);

    const handleDragStart = (e, dragIndex) => {
        e.dataTransfer.setData('dragIndex', dragIndex);
    };

    const handleDrop = (e, dropIndex) => {
        const dragIndex = e.dataTransfer.getData('dragIndex');
        const updatedButtons = [...skillTags];
        
        // Remove dragged item and insert it at the new position
        const [draggedItem] = updatedButtons.splice(dragIndex, 1);
        updatedButtons.splice(dropIndex, 0, draggedItem);

        setSkillTags(updatedButtons);
    };

  return (
    <section className='contact-section-container'>
        <span className='contact-section-container-title'><i>C O N T A C T - M E</i></span>
        <div className='contact-details-container'>
            <div className='contact-details-intrest'>
                <span className='contact-details-intrest-label color-style-purple'>I'm interested in ..</span>
                <div className='contact-details-intrest-box-container'>
                {skillTags.map((item, index) => (
                    <button
                        key={index}
                        className={`contact-details-box ${item === 'UI - UX Design' || item === 'React Native' || item === 'Backend' || item === 'SQL' ? '' : 'contact-details-box-selected'}`}
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => handleDrop(e, index)}
                    >
                        {item}
                    </button>
                ))}
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