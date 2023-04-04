const express = require('express')
const cors = require('cors')

const { characters, newCharacter, updateCharacter,getSpells } = require('./controllers/cntrl')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/characters', characters)
app.post('/characters', newCharacter)
app.put('/characters/:id', updateCharacter)

app.get('/spells/:id', getSpells)

app.listen(5000, () => {
    console.log(`on 5000`)
})