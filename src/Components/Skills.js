import React from 'react'

const { skills } = require('../playerHB')

const Skills = () => {

    return(
        <div className='skills'>
            <h3>Skills</h3>
            {skills.map((el, i) => {
                return(
                    <div key={i} className='skill-name'>
                            <h4>{el.skillName}</h4>
                            <h4>{el.type}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default Skills