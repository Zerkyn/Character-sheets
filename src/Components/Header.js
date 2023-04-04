import React from "react";
import Dice from './Dice'


const Header = (props) => {

    return (
        <header>
            <div>
                {props.characters.map(el => {
                    return <button onClick={() => props.showCharacter(el)} className='characterBtn' key={el.id}>{el.name}</button>
                })}
                <button className="characterBtn" onClick={() => props.showCharacter(null)}>
                    <span className="material-symbols-rounded">
                        add
                    </span>
                </button>
            </div>
            <div>
                <Dice modifier={props.modifier} minusMod={props.minusMod} setModifier={props.setModifier}/>
            </div>
        </header>
    )
}

export default Header