import React, { useState } from "react";
import LevelUp from "./LevelUp";
import Spells from './Spells'
import Skills from "./Skills";

const Character = (props) => {
    const { character, modifiers } = props
    let [hp, setHP] = useState(character.hp)
    let [toggleHp, setToggleHp] = useState(false)
    let [levelUp, setLevelUp] = useState(false)

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
                        <h3>Level {character.level}</h3>
                        <h3>{character.character_class}</h3>
                        <h3>{character.race}</h3>
                        <div>
                            {!levelUp
                                ? <h3>Health Points: {hp}/{character.hp}</h3>
                                : <input value={character.hp} type='number' />
                            }
                            {toggleHp
                                ?
                                <div>
                                    <input type="number" value={hp} onChange={e => setHP(e.target.value)} />
                                    <button onClick={() => adjustHp()}>Adjust HP</button>
                                </div>
                                :
                                <button onClick={() => adjustHp()}>Adjust HP</button>}
                        </div>
                    </div>
                    <section className="stats-section">
                        <div>
                            <h4>Strength</h4>
                            <button onClick={() => modifiers(character.strength)}>{character.strength}</button>
                        </div>
                        <div>
                            <h4>Dexterity</h4>
                            <button onClick={() => modifiers(character.dexterity)}>{character.dexterity}</button>
                        </div>
                        <div>
                            <h4>Constitution</h4>
                            <button onClick={() => modifiers(character.constitution)}>{character.constitution}</button>
                        </div>
                        <div>
                            <h4>Intelligence</h4>
                            <button onClick={() => modifiers(character.intelligence)}>{character.intelligence}</button>
                        </div>
                        <div>
                            <h4>Wisdom</h4>
                            <button onClick={() => modifiers(character.wisdom)}>{character.wisdom}</button>
                        </div>
                        <div>
                            <h4>Charisma</h4>
                            <button onClick={() => modifiers(character.charisma)}>{character.charisma}</button>
                        </div>
                    </section>
                    <section>
                        <Spells id={character.id}/>
                        <Skills />
                    </section>
                    <button onClick={() => setLevelUp(true)}>Level UP</button>
                </div>
                : <LevelUp character={character} levelUp={setLevelUp} />}
        </div>
    )
}

export default Character