import React, { useState } from "react";
import LevelUp from "./LevelUp";

const Character = (props) => {
    const { character } = props
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
                    <h1>{props.character.name}</h1>
                    <div className="main-info">
                        <h3>Level {character.level}</h3>
                        <h3>{character.charClass}</h3>
                        <h3>{character.race}</h3>
                        <div>
                            {/* {!levelUp
                        ? <h3>Health Points: {hp}/{character.hp}</h3>
                        : <input value={character.hp} type='number' />
                    } */}

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
                    <section>
                        <div>
                            <h4>Strength</h4>
                            <p>{character.strength}</p>
                        </div>
                        <div>
                            <h4>Dexterity</h4>
                            <p>{character.dexterity}</p>
                        </div>
                        <div>
                            <h4>Constitution</h4>
                            <p>{character.constitution}</p>
                        </div>
                        <div>
                            <h4>Intelligence</h4>
                            <p>{character.intelligence}</p>
                        </div>
                        <div>
                            <h4>Wisdom</h4>
                            <p>{character.wisdom}</p>
                        </div>
                        <div>
                            <h4>Charisma</h4>
                            <p>{character.charisma}</p>
                        </div>
                    </section>
                    <button onClick={() => setLevelUp(true)}>Level UP</button>
                </div>
                : <LevelUp character={props.character} levelUp={setLevelUp} />}
        </div>
    )
}

export default Character