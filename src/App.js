import React, { useState, useEffect } from 'react'
import Header from './Components/Header'
import axios from 'axios'
import Character from './Components/Character'
import NewCharacter from './Components/NewCharacter'

function App() {
  let [characters, setCharacters] = useState([])
  let [character, setCharacter] = useState({})
  let [showChar, setShowChar] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:5000/characters')
      .then(res => {
        setCharacters(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }, [])

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
      <Header characters={characters} showCharacter={showCharacter} />
      {showChar
        ? <Character character={character} />
        : <NewCharacter characters={characters} showCharacter={showCharacter} />}

    </div>
  );
}

export default App;
