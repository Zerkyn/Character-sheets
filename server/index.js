const express = require('express')
const cors = require('cors')

const { characters, newCharacter, updateCharacter, getSpells, getInventory, addSpell, addItem } = require('./controllers/cntrl')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/characters', characters)
app.post('/characters', newCharacter)
app.put('/characters/:id', updateCharacter)

app.get('/spells/:id', getSpells)
app.post('/spells/:id', addSpell)

app.get('/inventory/:id', getInventory)
app.post('/inventory/:id', addItem)

app.listen(5000, () => {
    console.log(`on 5000`)
})