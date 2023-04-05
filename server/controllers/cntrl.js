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
        const { name, race, level, hp, charClass,str, dex, con, int, wis, cha } = req.body
        sequelize.query(`insert into characters (name, race, level, hp, character_class, strength, dexterity, constitution, intelligence, wisdom, charisma) 
        values ('${name}', '${race}', ${level}, ${hp}, '${charClass}', ${str}, ${dex}, ${con}, ${int}, ${wis}, ${cha});`)
            .then(dbRes => {
                res.status(200).send(dbRes[0])
            })
            .catch(err => console.log(err))
    },

    updateCharacter: (req, res) => {
        const { id } = req.params
        const {level, hp, str, dex, con, int, wis, cha} = req.body
        sequelize.query(`
            update characters
            set
                level = ${level}, 
                hp = ${hp},
                strength = ${str},
                dexterity = ${dex}, 
                constitution = ${con}, 
                intelligence = ${int}, 
                wisdom = ${wis}, 
                charisma = ${cha}
            where id = ${id};
        `)
            .then(dbRes => {
                res.status(200).send(dbRes[0])
            })
    },

    getSpells: (req, res) => {
        const {id} = req.params
        sequelize.query(`select * from spells where character_id = ${id}`)
            .then(dbRes => {
                res.status(200).send(dbRes[0])
            })
    },

    addSpell: (req, res) => {
        const {id} = req.params
        const {spellName, spellDesc} = req.body
        sequelize.query(`
            insert into spells (
            character_id, spell_name, description
            ) values (
                ${id}, '${spellName}', '${spellDesc}'
            );
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
    },

    getInventory: (req, res) => {
        const {id} = req.params
        sequelize.query(`select * from inventory where character_id = ${id}`)
            .then(dbRes => {
                res.status(200).send(dbRes[0])
            })
    },

    addItem: (req, res) => {
        const {id} = req.params
        const {itemName, itemDesc} = req.body
        sequelize.query(`
            insert into inventory (
            character_id, item_name, description
            ) values (
                ${id}, '${itemName}', '${itemDesc}'
            );
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
    },
}