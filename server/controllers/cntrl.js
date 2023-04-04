require('dotenv').config()
const { CONNECTION_STRING } = process.env
const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    characters: (req, res) => {
        sequelize.query(`select * from characters`)
            .then(dbRes => {
                res.status(200).send(dbRes[0])
            })
            .catch(err => console.log(err))
    },

    newCharacter: (req, res) => {
        const { name, race, level, hp, charClass } = req.body
        sequelize.query(`insert into characters (name, race, level, hp, character_class) 
        values ('${name}', '${race}', ${level}, ${hp}, '${charClass}');`
        )
            .then(dbRes => {
                console.log(dbRes[0])
            })
            .catch(err => console.log(err))
    },

    updateCharacter: (req, res) => {
        console.log('pong')
        const { id } = req.params

    },

    getSpells: (req, res) => {
        const {id} = req.params
        sequelize.query(`select * from spells where character_id = ${id}`)
            .then(dbRes => {
                res.status(200).send(dbRes[0])
            })
    }
}