const express = require('express')
const cors = require('cors')

const { characters, newCharacter } = require('./controllers/cntrl')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/characters', characters)
app.post('/characters', newCharacter)

app.listen(5000, () => {
    console.log(`on 5000`)
})