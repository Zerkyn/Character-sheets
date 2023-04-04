import React from 'react'

const { skills } = require('../playerHB')
console.log(skills)

const Skills = () => {


    return(
        <div className='skills'>
            {skills.map((el, i) => {
                return(
                    <div key={i}>
                            <h3>{el}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Skills