import React, { useState } from 'react';
import './Skills.css';
import skillsData from '../Data/Skills.json';
import Frontend from './Frontend';
import Backend from './Backend';

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
            <Frontend ListofSkillsData={ListofSkillsData}/>
          </> 
        : skillSelected === "backend" 
        ? <>
            <Backend ListofSkillsData={ListofSkillsData}/>
          </> 
        : null }
    </section>
  )
}

export default Skills;