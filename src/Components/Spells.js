import React, { useEffect, useState } from "react";
import axios from 'axios'

const Spells = (props) => {
    const {id} = props
    const [spells , setSpells] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/spells/${id}`)
        .then(res => {
            console.log(res.data)
            setSpells(res.data)
        })
        .catch(err => console.log(err))
    },[id])

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