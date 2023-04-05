import React, { useState } from "react";
import axios from 'axios'

const LevelUp = props => {
    const {character, levelUp} = props
    const [level, setLevel] = useState(null)
    const [hp, setHP] = useState(null)
    const [str, setStr] = useState(null)
    const [dex, setDex] = useState(null)
    const [con, setCon] = useState(null)
    const [int, setInt] = useState(null)
    const [wis, setWis] = useState(null)
    const [cha, setCha] = useState(null)
    const [addSpells, setAddSpells] = useState(false)
    const [spellName, setSpellName] = useState('')
    const [spellDesc, setSpellDesc] = useState('')
    const [addItems, setAddItems] = useState(false)
    const [itemName, setItemName] = useState('')
    const [itemDesc, setItemDesc] = useState('')


    const updateCharacter = () => {
        axios.put(`http://localhost:5000/characters/${character.id}`, {
            id: character.id,
            level,
            hp,
            str,
            dex,
            con,
            int,
            wis,
            cha
        })
            .then( window.location.reload(false))
            levelUp(false)
    }

    const addSpell = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:5000/spells/${character.id}`, {spellName: spellName, spellDesc: spellDesc})
        .then(() => {
            setSpellName('')
            setSpellDesc('')
            window.location.reload(false)
        })
    }

    const addItem = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:5000/inventory/${character.id}`,{ itemName: itemName, itemDesc: itemDesc})
        .then(() => {
            setItemName('')
            setItemDesc('')
            window.location.reload(false)
        })
    }

    return (
        <div className="character">
            <h1>{character.name}</h1>
            <div className="main-info">
                <div className="txt_field">
                    <input type="number" onChange={(el) => setLevel(el.target.value)} required/>
                    <span></span>
                    <label>Level: {character.level}</label>
                </div>
                <h3>{character.character_class}</h3>
                <h3>{character.race}</h3>
                <div className="txt_field">
                    <input type="number" onChange={(el) => setHP(el.target.value)} required/>
                    <span></span>
                    <label>HP: {character.hp}</label>
                </div>
            </div>
            <section className="level-up-section">
                <div className="txt_field">
                    <input type="number" onChange={(el) => setStr(el.target.value)} required/>
                    <span></span>
                    <label>Strength: {character.strength}</label>
                </div>
                <div className="txt_field">
                    <input type="number" onChange={(el) => setDex(el.target.value)} required/>
                    <span></span>
                    <label>Dexterity: {character.dexterity}</label>
                </div>
                <div className="txt_field">
                    <input type="number" onChange={(el) => setCon(el.target.value)} required/>
                    <span></span>
                    <label>Constitution: {character.constitution}</label>
                </div>
                <div className="txt_field">
                    <input type="number" onChange={(el) => setInt(el.target.value)} required/>
                    <span></span>
                    <label>Intelligence: {character.intelligence}</label>
                </div>
                <div className="txt_field">
                    <input type="number" onChange={(el) => setWis(el.target.value)} required/>
                    <span></span>
                    <label>Wisdom: {character.wisdom}</label>
                </div>
                <div className="txt_field">
                    <input type="number" onChange={(el) => setCha(el.target.value)} required/>
                    <span></span>
                    <label>Charisma: {character.charisma}</label>
                </div>
            </section>
            <button onClick={() => updateCharacter()}>Level Up Stats</button>
            <section className="new-spell-inventory">
                {!addSpells
                ?
                    <div>
                        <button onClick={() => setAddSpells(true)}>Add Spells</button>
                    </div>
                :
                    <div className="new-spell">
                        <div className="txt_field">
                            <input onChange={(el) => setSpellName(el.target.value)} required/>
                            <span></span>
                            <label>Spell Name</label>
                        </div>
                        <div>
                            <textarea onChange={(el) => setSpellDesc(el.target.value)} placeholder="Spell Description"></textarea>
                        </div>
                        <div>
                            <button onClick={(e) => addSpell(e)}>Add Spell</button>
                            <button onClick={() => {
                                setAddSpells(false)
                                setSpellName('')
                                setSpellDesc('')
                            }}>Cancel</button>
                        </div>
                    </div>
                }
                {!addItems
                ?
                    <div>
                        <button onClick={() => setAddItems(true)}>Add Items</button>
                    </div>
                :
                    <div className="new-spell">
                        <div className="txt_field">
                            <input onChange={(el) => setItemName(el.target.value)} required/>
                            <span></span>
                            <label>Item Name</label>
                        </div>
                        <div>
                            <textarea onChange={(el) => setItemDesc(el.target.value)} placeholder="Item Description"></textarea>
                        </div>
                        <div>
                            <button onClick={(e) => addItem(e)}>Add Item</button>
                            <button onClick={() => {
                                setAddItems(false)
                                setItemName('')
                                setItemDesc('')
                            }}>Cancel</button>
                        </div>
                    </div>
                }
            </section>
        </div>
    )
}

export default LevelUp