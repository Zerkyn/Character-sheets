import React,{useState} from "react";
import LevelUp from "./LevelUp";

const Character = (props) => {
    let [hp, setHp] = useState(props.character.hp)
    let [toggleHp, setToggleHp] = useState(false)
    let [levelUp, setLevelUp] = useState(false)

    const adjustHp = () => {
        if(toggleHp){
            setToggleHp(false)
        } else {
            setToggleHp(true)
        }
        console.log(toggleHp)
    }

    return(
        <div className="main">
            {!levelUp
            ?
            <div className="character">
                <h1>{props.character.name}</h1>
                <div className="main-info">
                    <h3>Level {props.character.level}</h3>
                    <h3>{props.character.charClass}</h3>
                    <h3>{props.character.race}</h3>
                    <div>
                        {!levelUp 
                        ? <h3>Health Points: {hp}/{props.character.hp}</h3>
                        : <input value={props.character.hp} type='number'/>
                        }

                        {toggleHp 
                        ? 
                        <div>
                            <input type="number" value={hp} onChange={el => setHp(el.target.value)}/>
                            <button onClick={() => adjustHp()}>Adjust HP</button>
                        </div>
                        :
                        <button onClick={() => adjustHp()}>Adjust HP</button>}

                    </div>
                </div>
                <section>
                    <div>
                        <h4>Strength</h4>
                        <p>{props.character.stats.str}</p>
                    </div>
                    <div>
                        <h4>Dexterity</h4>
                        <p>{props.character.stats.dex}</p>
                    </div>
                    <div>
                        <h4>Constitution</h4>
                        <p>{props.character.stats.con}</p>
                    </div>
                    <div>
                        <h4>Intelligence</h4>
                        <p>{props.character.stats.int}</p>
                    </div>
                    <div>
                        <h4>Wisdom</h4>
                        <p>{props.character.stats.wis}</p>
                    </div>
                    <div>
                        <h4>Charisma</h4>
                        <p>{props.character.stats.cha}</p>
                    </div>
                </section>
                <button onClick={() => setLevelUp(true)}>Level UP</button> 
            </div>
            : <LevelUp character={props.character} levelUp={setLevelUp}/>}
        </div>
    )
}

export default Character