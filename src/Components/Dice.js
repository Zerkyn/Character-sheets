import React, {useState} from "react";


const Dice = (props) => {
    let {modifier, setModifier, minusMod} = props
    const dice = ['d100', 'd20', 'd12', 'd10', 'd8', 'd6', 'd4']
    const [toggleDice, setToggleDice] = useState(false)
    const [selectedDice, setSelectedDice] = useState([])
    const [rolledTotal, setRolledTotal] = useState(0)

    const showDice = () => {
        if(toggleDice){
            setToggleDice(false)
        } else {
            setToggleDice(true)
        }
    }

    const selectDice = (el) => {
        switch(el){
            case 'd4':
                setSelectedDice([...selectedDice, 4])
                break
            case 'd6':
                setSelectedDice([...selectedDice, 6])
                break
            case 'd8':
                setSelectedDice([...selectedDice, 8])
                break
            case 'd10':
                setSelectedDice([...selectedDice, 10])
                break
            case 'd12':
                setSelectedDice([...selectedDice, 12])
                break
            case 'd20':
                setSelectedDice([...selectedDice, 20])
                break
            case 'd100':
                setSelectedDice([...selectedDice, 100])
                break
            default:
                console.log(selectedDice)
        }
    }

    const diceRoll = () => {
        let roll = []
        selectedDice.map((el) => {
            return roll.push(Math.floor(Math.random() * el) + 1)
        })
        if(minusMod){
            if(roll.length === 1){
                setRolledTotal(roll[0] - modifier)
            } else {   
                setRolledTotal(roll.reduce((acc, cur) => {
                    let total = acc + cur 
                    return total - modifier
                }))
            }
        } else {
            if(roll.length === 1){
                setRolledTotal(roll[0] + modifier)
            } else {   
                setRolledTotal(roll.reduce((acc, cur) => {
                    let total = acc + cur 
                    return total + modifier
                }))
            }
        }
        console.log(roll)
        setSelectedDice([])
        setModifier(0)
        setToggleDice(false)
    }
    
    
    return(
        <div className="roll">
            <button onClick={() => showDice()}>Dice</button> 
            {toggleDice 
                ? 
                <div className="dice">
                    {dice.map((el, i) => {
                        return <button key={i} onClick={() => selectDice(el)} >{el}</button>
                    })}
                    <button onClick={() => {diceRoll()}}>Roll</button>
                    <ul>
                        {minusMod ? <li>-{modifier}</li> : <li>+{modifier}</li>}
                        {selectedDice.map((el, i) => {
                            return <li key={i}>d{el}</li>
                        })}
                    </ul>
                </div>
                : 
                <div className="rolled-total">
                    <h2>{rolledTotal}</h2>
                </div>
            }
        </div>
    )
}

export default Dice