import React from 'react'

const {classes, races} = require('../playerHB')

const NewCharacter = () => {

    return(
        <div className='main'>
            <form>
                <div className='main-info'>
                    <input placeholder='Character Name'></input>
                    <select>
                        <option>Select Race</option>
                        {races.map((el,i) => {
                            return <option key={i}>{el}</option>
                        })}
                    </select>
                    <select>
                        <option>Select Class</option>
                        {classes.map((el, i) => {
                            return <option key={i}>{el}</option>
                        })}
                    </select>
                    <input type='number' placeholder='Level'/>
                    <input type='number' placeholder='Health Points'/>
                </div>
                <div className='Stats'>
                    <input type='number' placeholder='Strength' id='stat'/>
                    <input type='number' placeholder='Dexterity' id='stat'/>
                    <input type='number' placeholder='Constitution' id='stat'/>
                    <input type='number' placeholder='Intelligence' id='stat'/>
                    <input type='number' placeholder='Wisdom' id='stat'/>
                    <input type='number' placeholder='Charisma' id='stat'/>
                </div>
            </form>
        </div>
    )
}

export default NewCharacter