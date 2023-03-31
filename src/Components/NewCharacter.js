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
            stats: {
                str: str,
                dex: dex,
                con: con,
                int: int,
                wis: wis,
                cha: cha
            }
        })
            .then(res => {
                console.log(res.data)
                props.characters = res.data

            })
            .catch(err => console.log(err))
    }


    return (
        <div className='main'>
            <form>
                <div className='character'>
                    <input placeholder='Character Name' onChange={(el) => setName(el.target.value)} />
                    <div className='main-info'>
                        <input type='number' placeholder='Level' onChange={(el) => setLevel(el.target.value)} />
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
                        <input type='number' placeholder='Health Points' onChange={(el) => setHP(el.target.value)} />
                    </div>
                </div>
                <div className='Stats'>
                    <input type='number' placeholder='Strength' id='stat' onChange={(el) => setStr(el.target.value)} />
                    <input type='number' placeholder='Dexterity' id='stat' onChange={(el) => setDex(el.target.value)} />
                    <input type='number' placeholder='Constitution' id='stat' onChange={(el) => setCon(el.target.value)} />
                    <input type='number' placeholder='Intelligence' id='stat' onChange={(el) => setInt(el.target.value)} />
                    <input type='number' placeholder='Wisdom' id='stat' onChange={(el) => setWis(el.target.value)} />
                    <input type='number' placeholder='Charisma' id='stat' onChange={(el) => setCha(el.target.value)} />
                </div>
                <button onClick={(e) => createCharacter(e)}>Create</button>
            </form>
        </div>
    )
}

export default NewCharacter