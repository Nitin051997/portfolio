import React from 'react'

const Backend = ({ ListofSkillsData }) => {
  return (
    <>
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
  )
}

export default Backend