import React, { useState, useEffect } from "react";
import LevelUp from "./LevelUp";
import Spells from './Spells'
import Skills from "./Skills";
import Inventory from "./Inventory";
import axios from "axios";

const Character = (props) => {
    const { character, modifiers } = props
    const [hp, setHP] = useState(character.hp)
    const [toggleHp, setToggleHp] = useState(false)
    const [levelUp, setLevelUp] = useState(false)
    const [spells, setSpells] = useState([])
    const [inventory, setInventory] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/spells/${character.id}`)
        .then(res => {
            setSpells(res.data)
        })
        .catch(err => console.log(err))

        axios.get(`http://localhost:5000/inventory/${character.id}`)
        .then(res => {
            setInventory(res.data)
        })

    },[character.id])
    

    const adjustHp = () => {
        if (toggleHp) {
            setToggleHp(false)
        } else {
            setToggleHp(true)
        }
    }

    return (
        <div className="main">
            {!levelUp
                ?
                <div className="character">
                    <h1>{character.name}</h1>
                    <div className="main-info">
                        <h2>Level {character.level}</h2>
                        <h2>{character.character_class}</h2>
                        <h2>{character.race}</h2>
                        <div>
                            {!levelUp
                                ? <h2>Health Points: {hp}/{character.hp}</h2>
                                : <input value={character.hp} type='number' />
                            }
                            {toggleHp
                                ?
                                <div className="healthBtn-on">
                                    <input type="number" value={hp} onChange={e => setHP(e.target.value)} />
                                    <button onClick={() => adjustHp()}>Adjust HP</button>
                                </div>
                                :
                                <button onClick={() => adjustHp()} className="healthBtn-off">Adjust HP</button>}
                        </div>
                    </div>
                    <section className="stats-section">
                        <div>
                            <h3>Strength</h3>
                            <button onClick={() => modifiers(character.strength)}>{character.strength}</button>
                        </div>
                        <div>
                            <h3>Dexterity</h3>
                            <button onClick={() => modifiers(character.dexterity)}>{character.dexterity}</button>
                        </div>
                        <div>
                            <h3>Constitution</h3>
                            <button onClick={() => modifiers(character.constitution)}>{character.constitution}</button>
                        </div>
                        <div>
                            <h3>Intelligence</h3>
                            <button onClick={() => modifiers(character.intelligence)}>{character.intelligence}</button>
                        </div>
                        <div>
                            <h3>Wisdom</h3>
                            <button onClick={() => modifiers(character.wisdom)}>{character.wisdom}</button>
                        </div>
                        <div>
                            <h3>Charisma</h3>
                            <button onClick={() => modifiers(character.charisma)}>{character.charisma}</button>
                        </div>
                    </section>
                    <section className="spell-skill-inventory">
                        <Spells spells={spells} />
                        <Skills />
                        <Inventory inventory={inventory} />
                    </section>
                    <button onClick={() => setLevelUp(true)} className="character-change-btn">Character changes</button>
                </div>
                : <LevelUp character={character} levelUp={setLevelUp} />}
        </div>
    )
}

export default Character