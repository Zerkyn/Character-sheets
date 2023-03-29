import React from "react";


const Header = (props) => {

    return (
        <header>
            <div>
                {props.characters.map(el => {
                    return <button onClick={() => props.showCharacter(el)} className='characterBtn' key={el.id}><img src={el.characterImage} alt='character' /></button>
                })}
                <button className="characterBtn" onClick={() => props.showCharacter(null)}>+</button>
            </div>
        </header>
    )
}

export default Header