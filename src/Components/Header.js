import React from "react";


const Header = (props) => {

    return (
        <header>
            {/* <img src={characters} className="character-image" alt='character'></img> */}
            <div>
                {props.characters.map(el => {
                    return <button onClick={() => props.showCharacter(el)} className='characterBtn' key={el.id}><img src={el.characterImage} alt='character' /></button>
                })}
            </div>
        </header>
    )
}

export default Header