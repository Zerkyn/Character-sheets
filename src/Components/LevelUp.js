import React, { useState } from "react";
import axios from 'axios'

const LevelUp = props => {
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
        axios.put(`http://localhost:5000/characters/${props.character.id}`, {
            id: props.character.id,
            level,
            hp,
            stats: {
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
            <h1>{props.character.name}</h1>
            <div className="main-info">
                <div>
                    <h3>Level {props.character.level}</h3>
                    <input placeholder={props.character.level} type="number" onChange={(el) => setLevel(el.target.value)} />
                </div>
                <h3>{props.character.charClass}</h3>
                <h3>{props.character.race}</h3>
                <div>
                    <h3>Health Points:</h3>
                    <input placeholder={props.character.hp} type="number" onChange={(el) => setHP(el.target.value)} />
                </div>
            </div>
            <section>
                <div>
                    <h4>Strength</h4>
                    <input placeholder={props.character.stats.str} type="number" onChange={(el) => setStr(el.target.value)} />
                </div>
                <div>
                    <h4>Dexterity</h4>
                    <input placeholder={props.character.stats.dex} type="number" onChange={(el) => setDex(el.target.value)} />
                </div>
                <div>
                    <h4>Constitution</h4>
                    <input placeholder={props.character.stats.con} type="number" onChange={(el) => setCon(el.target.value)} />
                </div>
                <div>
                    <h4>Intelligence</h4>
                    <input placeholder={props.character.stats.int} type="number" onChange={(el) => setInt(el.target.value)} />
                </div>
                <div>
                    <h4>Wisdom</h4>
                    <input placeholder={props.character.stats.wis} type="number" onChange={(el) => setWis(el.target.value)} />
                </div>
                <div>
                    <h4>Charisma</h4>
                    <input placeholder={props.character.stats.cha} type="number" onChange={(el) => setCha(el.target.value)} />
                </div>
            </section>
            <button onClick={(e) => updateCharacter(e)}>Finish Level Up</button>
        </div>
    )
}

export default LevelUp