import React, { useState, useEffect } from 'react'
import Header from './Components/Header'
import axios from 'axios'
import Character from './Components/Character'
import NewCharacter from './Components/NewCharacter'

function App() {
  let [characters, setCharacters] = useState([])
  let [character, setCharacter] = useState({})
  let [showChar, setShowChar] = useState(false)
  let [modifier, setModifier] = useState(0)
  let [minusMod, setMinusMod] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:5000/characters')
      .then(res => {
        setCharacters(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const modifiers = (stat) => {
    if(stat === 3 ){
      setModifier(4)
      setMinusMod(true)
    } else if (stat === 4 || stat === 5){
      setModifier(3)
      setMinusMod(true)
    } else if (stat === 6 || stat === 7){
      setModifier(2)
      setMinusMod(true)
    } else if (stat === 8 || stat === 9){
      setModifier(1)
      setMinusMod(true)
    } else if (stat === 12 || stat === 13){
      setModifier(1)
      setMinusMod(false)
    } else if(stat === 14 || stat === 15){
      setModifier(2)
      setMinusMod(false)
    } else if(stat === 16 || stat === 17){
      setModifier(3)
      setMinusMod(false)
    } else if (stat === 18 || stat === 19){
      setModifier(4)
      setMinusMod(false)
    } else if (stat === 20){
      setModifier(5)
      setMinusMod(false)
    } else setModifier(0)
  }

  const showCharacter = (character) => {
    if (character !== null) {
      setCharacter(character)
      setShowChar(true)
    } else {
      setShowChar(false)
    }
  }

  return (
    <div className="App">
      <Header characters={characters} showCharacter={showCharacter} modifier={modifier} setModifier={setModifier} setMinusMod={minusMod} />
      {showChar
        ? <Character character={character} modifiers={modifiers} />
        : <NewCharacter characters={characters} showCharacter={showCharacter} />}

    </div>
  );
}

export default App;
