import React, { useState, useEffect } from 'react'
import Header from './Components/Header'
import axios from 'axios'

function App() {
  let [characters, setCharacters] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/characters')
      .then(res => {
        setCharacters(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const showCharacter = () => {

  }
  return (
    <div className="App">
      <Header characters={characters} showCharacter={showCharacter} />
    </div>
  );
}

export default App;
