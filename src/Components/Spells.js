import React from "react";


const Spells = (props) => {
    const {spells} = props

    return(
        <div className="spells">
            <h3>Spells</h3>
            {spells.map((el, i) => {
                return (
                    <div key={i}>
                        <h5 >{el.spell_name}</h5>
                        <article >{el.description}</article>
                    </div>
                    )
            })}
        </div>
    )
}

export default Spells