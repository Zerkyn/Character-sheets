import React, { useState } from 'react'
import axios from 'axios'

const { classes, races } = require('../playerHB')

const NewCharacter = (props) => {
    const [name, setName] = useState('')
    const [race, setRace] = useState('')
    const [charClass, setCharClass] = useState('')
    const [level, setLevel] = useState(0)
    const [hp, setHP] = useState(0)
    const [str, setStr] = useState(0)
    const [dex, setDex] = useState(0)
    const [con, setCon] = useState(0)
    const [int, setInt] = useState(0)
    const [wis, setWis] = useState(0)
    const [cha, setCha] = useState(0)

    const createCharacter = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/characters', {
            name: name,
            race: race,
            charClass: charClass,
            level: level,
            hp: hp,
            str: str,
            dex: dex,
            con: con,
            int: int,
            wis: wis,
            cha: cha
        })
            .then(res => {
                props.characters = res.data 
            })
            .catch(err => console.log(err))
            window.location.reload()
    }


    return (
        <div className='main'>
            <form>
                <div className='new-character'>
                    <div className='txt_field'>
                        <input onChange={(el) => setName(el.target.value)} type='text' required/>
                        <span></span>
                        <label>Character Name</label>
                    </div>
                    <div className='txt_field'>
                        <input type='number' onChange={(el) => setLevel(el.target.value)} required/>
                        <span></span>
                        <label>Level</label>
                    </div>
                    <select onChange={(el) => setCharClass(el.target.value)}>
                        <option>Select Class</option>
                        {classes.map((el, i) => {
                            return <option key={i}>{el}</option>
                        })}
                    </select>
                    <select onChange={(el) => setRace(el.target.value)}>
                        <option>Select Race</option>
                        {races.map((el, i) => {
                            return <option key={i}>{el}</option>
                        })}
                    </select>
                    <div className='txt_field'>
                        <input type='number' onChange={(el) => setHP(el.target.value)} required/>
                        <span></span>
                        <label>Health Points</label>
                    </div>
                </div>
                <div className='stats'>
                    <div className='txt_field'>
                        <input type='number' onChange={(el) => setStr(el.target.value)} required/>
                        <span></span>
                        <label>Strength</label>
                    </div>
                    <div className='txt_field'>
                        <input type='number' onChange={(el) => setDex(el.target.value)} required/>
                        <span></span>
                        <label>Dexterity</label>
                    </div>
                    <div className='txt_field'>
                        <input type='number' onChange={(el) => setCon(el.target.value)} required/>
                        <span></span>
                        <label>Constitution</label>
                    </div>
                    <div className='txt_field'>
                        <input type='number' onChange={(el) => setInt(el.target.value)} required/>
                        <span></span>
                        <label>Intelligence</label>
                    </div>
                    <div className='txt_field'>
                        <input type='number' onChange={(el) => setWis(el.target.value)} required/>
                        <span></span>
                        <label>Wisdom</label>
                    </div>
                    <div className='txt_field'>
                        <input type='number' onChange={(el) => setCha(el.target.value)} required/>
                        <span></span>
                        <label>Charisma</label>
                    </div>
                </div>
                <button onClick={(e) => createCharacter(e)}>Create</button>
            </form>
        </div>
    )
}

export default NewCharacter