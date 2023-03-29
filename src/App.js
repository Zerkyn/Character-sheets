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
      })
      .catch(err => console.log(err))
  }, [])

  const showCharacter = (character) => {
    setCharacter(character)
    setShowChar(true)
  }

  return (
    <div className="App">
      <Header characters={characters} showCharacter={showCharacter} />
      {showChar 
      ? <Character character={character} />
      : <NewCharacter />}
      
    </div>
  );
}

export default App;
