import React, { useState } from 'react';
import './Skills.css';
import skillsData from '../Data/Skills.json';

const Skills = () => {

    const [skillSelected, setSkillSelected] = useState("forntend");
    const ListofSkillsData = skillsData;

    const handleToggleSkills = ( value ) => {
        setSkillSelected(value);
    };

  return (
    <section className='skills-section-container'>
        <span className='skills-section-container-title'><i>M Y    -   S K I L L S</i></span>
        <div className='skills-section-container-button'>
            <button className={`button-frontend ${skillSelected === "forntend" ? 'button-skill-selected' : null}`} onClick={() => handleToggleSkills("forntend")}>ForntEnd Skills</button>
            <div>&nbsp;</div>
            <button className={`button-backend ${skillSelected === "backend" ? 'button-skill-selected' : null}`} onClick={() => handleToggleSkills("backend")}>BackEnd Skills</button>
        </div>
        { skillSelected === "forntend" 
        ? <>
            <div className='skills-container'>
                {ListofSkillsData.filter((fil) => {return fil.type === "forntend"}).map((details) => {
                    return (<article className='skills-badge'>
                        <img src={`${process.env.PUBLIC_URL}/assets/${details.image}.png`} alt="HTML" className="skills-icon" />
                        <div className='skills-label'>
                            <span className='skills-label-title'>{details.title}</span>
                            <span className='skills-label-level'><i>{details.level}</i></span>
                        </div>
                    </article>)
                })}
            </div>
          </> 
        : skillSelected === "backend" 
        ? <>
            <div className='skills-container'>
                {ListofSkillsData.filter((fil) => {return fil.type === "backend"}).map((details) => {
                    return (<article className='skills-badge'>
                        <img src={`${process.env.PUBLIC_URL}/assets/${details.image}.png`} alt="HTML" className="skills-icon" />
                        <div className='skills-label'>
                            <span className='skills-label-title'>{details.title}</span>
                            <span className='skills-label-level'><i>{details.level}</i></span>
                        </div>
                    </article>)
                })}
            </div>
          </> 
        : null }
    </section>
  )
}

export default Skills;