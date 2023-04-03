import React, { useState } from "react";
import axios from 'axios'

const LevelUp = props => {
    const {character} = props
    console.log(character)
    const [level, setLevel] = useState(null)
    const [hp, setHP] = useState(null)
    const [str, setStr] = useState(null)
    const [dex, setDex] = useState(null)
    const [con, setCon] = useState(null)
    const [int, setInt] = useState(null)
    const [wis, setWis] = useState(null)
    const [cha, setCha] = useState(null)

    const updateCharacter = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:5000/characters/${character.id}`, {
            id: character.id,
            level,
            hp,
            stats:{
                str,
                dex,
                con,
                int,
                wis,
                cha
            }
        })
            .catch(err => console.log(err))
    }

    return (
        <div className="character">
            <h1>{character.name}</h1>
            <div className="main-info">
                <div className="txt_field">
                    <input type="number" onChange={(el) => setLevel(el.target.value)} required/>
                    <span></span>
                    <label>Level: {character.level}</label>
                </div>
                <h3>{character.character_class}</h3>
                <h3>{character.race}</h3>
                <div className="txt_field">
                    <input type="number" onChange={(el) => setHP(el.target.value)} required/>
                    <span></span>
                    <label>HP: {character.hp}</label>
                </div>
            </div>
            <section className="level-up-section">
                <div className="txt_field">
                    <input type="number" onChange={(el) => setStr(el.target.value)} required/>
                    <span></span>
                    <label>Strength: {character.strength}</label>
                </div>
                <div className="txt_field">
                    <input type="number" onChange={(el) => setDex(el.target.value)} required/>
                    <span></span>
                    <label>Dexterity: {character.dexterity}</label>
                </div>
                <div className="txt_field">
                    <input type="number" onChange={(el) => setCon(el.target.value)} required/>
                    <span></span>
                    <label>Constitution: {character.constitution}</label>
                </div>
                <div className="txt_field">
                    <input type="number" onChange={(el) => setInt(el.target.value)} required/>
                    <span></span>
                    <label>Intelligence: {character.intelligence}</label>
                </div>
                <div className="txt_field">
                    <input type="number" onChange={(el) => setWis(el.target.value)} required/>
                    <span></span>
                    <label>Wisdom: {character.wisdom}</label>
                </div>
                <div className="txt_field">
                    <input type="number" onChange={(el) => setCha(el.target.value)} required/>
                    <span></span>
                    <label>Charisma: {character.charisma}</label>
                </div>
            </section>
            <button onClick={(e) => updateCharacter(e)}>Finish Level Up</button>
        </div>
    )
}

export default LevelUp